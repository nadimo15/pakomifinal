import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

const Svg: React.FC<IconProps & { path: React.ReactNode }> = ({ path, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    {path}
  </svg>
);

export const CartIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 5M7 13l-2 7m12-7 2 7M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>} />
);
export const MenuIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M4 6h16M4 12h16M4 18h16"/>} />
);
export const XIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M6 6l12 12M18 6l-12 12"/>} />
);
export const PlusIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M12 5v14M5 12h14"/>} />
);
export const TrashIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M3 6h18M8 6v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6M10 6V4h4v2"/>} />
);
export const DragHandleIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>} />
);
export const ChevronDownIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M6 9l6 6 6-6"/>} />
);
export const ChevronUpIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M6 15l6-6 6 6"/>} />
);

// Social icons (simple placeholders)
export const FacebookIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M13 3h4v4h-3c-1 0-1 1-1 1v2h4l-1 4h-3v7h-4v-7H6v-4h3V8s0-2 1.5-3A4 4 0 0 1 13 3z"/>} />
);
export const InstagramIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5"/></>} />
);
export const TikTokIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M14 3v10a3 3 0 1 1-3-3h1V6c1.2 1.6 3 2.6 5 2.9V6.2A6.7 6.7 0 0 1 14 3z"/>} />
);
export const LinkedInIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<><rect x="3" y="8" width="4" height="12"/><rect x="9" y="8" width="12" height="12"/><circle cx="5" cy="5" r="2"/></>} />
);
export const YouTubeIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M3 8s0-3 3-3h12s3 0 3 3v8s0 3-3 3H6s-3 0-3-3V8zm7 2v4l4-2-4-2z"/>} />
);
export const XIconSocial: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M4 4l16 16M20 4L4 20"/>} />
);
export const PinterestIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M12 3a9 9 0 0 0-3 17l1-4s-.4-1.5-.4-2.5c0-2.2 1.8-4 4-4 1.8 0 3 1 3 2.6 0 2.2-1 4-3 4-.8 0-1.6-.5-1.8-1l-1 3"/>} />
);
export const LinkIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M10 13a5 5 0 0 1 0-7l2-2a5 5 0 1 1 7 7l-1 1M14 11a5 5 0 0 1 0 7l-2 2a5 5 0 1 1-7-7l1-1"/>} />
);

// Additional UI icons used across pages
export const SendIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>} />
);
export const PaperClipIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M21 12.5V7a5 5 0 1 0-10 0v9a3 3 0 0 1-6 0V9"/>} />
);
export const FileIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6"/>} />
);
export const DownloadIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/>} />
);
export const XCircleIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-4-6 2 2 4-4"/>} />
);
export const RefreshCwIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M21 12a9 9 0 1 1-2.6-6.4M21 5v7h-7"/>} />
);
export const FileTextIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9 13h6M9 17h6M14 2v6h6"/>} />
);
export const PencilRulerIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M15 3l6 6M8 16l-5 5 1 1 5-5m2-2l7-7-4-4-7 7v4h4z"/>} />
);
export const PrinterIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M6 9V3h12v6M6 18h12v3H6zM4 12h16a2 2 0 0 1 2 2v4H2v-4a2 2 0 0 1 2-2z"/>} />
);
export const PackageIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M21 16V8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/>} />
);
export const TruckIcon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M3 17V6h10v11M13 13h5l3 3v1h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3"/>} />
);
export const CheckCircle2Icon: React.FC<IconProps> = (p) => (
  <Svg {...p} path={<path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-3-10 2 2 4-4"/>} />
);
