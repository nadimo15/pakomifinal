import { PrismaClient, Prisma } from '@prisma/client';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  // Roles
  const roles = [
    { name: 'Admin', permissions: ['manage_orders', 'manage_products', 'manage_settings', 'manage_users_roles'] as string[] },
    { name: 'Customer', permissions: [] as string[] },
    { name: 'Staff', permissions: ['manage_orders'] as string[] },
  ];

  for (const r of roles) {
    await prisma.role.upsert({
      where: { name: r.name },
      update: { permissions: r.permissions },
      create: { name: r.name, permissions: r.permissions },
    });
  }

  // SiteSettings singleton
  await prisma.siteSettings.upsert({
    where: { id: 'singleton' },
    update: {},
    create: {
      id: 'singleton',
      data: {
        brandName: 'Pakomi',
        hero: { title: 'Custom Packaging', subtitle: 'Design and order packaging', ctaText: 'Start Designing', heroImageB64: '' },
      } as Prisma.JsonObject,
    },
  });

  // FormConfig singleton
  await prisma.formConfig.upsert({
    where: { id: 'singleton' },
    update: {},
    create: {
      id: 'singleton',
      data: {
        sectionOrder: ['specifications', 'quantityAndPrice', 'yourDetails'],
      } as Prisma.JsonObject,
    },
  });

  // Ensure a default admin exists if none (optional, safe)
  const adminRole = await prisma.role.findFirst({ where: { name: 'Admin' } });
  if (adminRole) {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@pakomi.com';
    const adminPassword = process.env.ADMIN_PASSWORD || '123456789';
    const existingAdmin = await prisma.user.findFirst({ where: { email: adminEmail } });
    const passwordHash = await bcrypt.hash(adminPassword, 10);
    if (!existingAdmin) {
      await prisma.user.create({
        data: {
          name: 'Admin User',
          email: adminEmail,
          passwordHash,
          roleId: adminRole.id,
        },
      });
    } else {
      // Ensure admin has Admin role (idempotent update)
      if (existingAdmin.roleId !== adminRole.id) {
        await prisma.user.update({ where: { id: existingAdmin.id }, data: { roleId: adminRole.id } });
      }
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
