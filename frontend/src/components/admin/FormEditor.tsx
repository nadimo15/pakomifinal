import React, { useState, useEffect } from 'react';
import type { Language, FormConfig, FormField } from '../../types.ts';

interface FormEditorProps {
  language: Language;
  config: FormConfig;
  onConfigUpdate: (config: FormConfig) => Promise<void> | void;
}

const FormEditor: React.FC<FormEditorProps> = ({ language, config, onConfigUpdate }) => {
  const [localConfig, setLocalConfig] = useState<FormConfig | null>(null);

  useEffect(() => {
    setLocalConfig(config || null);
  }, [config]);

  const handleToggleField = (section: keyof FormConfig, fieldId: string) => {
    setLocalConfig(prev => {
      if (!prev) return prev;
      const sectionCfg: any = (prev as any)[section] || {};
      const fields: FormField[] = sectionCfg.fields || [];
      const nextFields = fields.map(f => f.id === fieldId ? { ...f, enabled: !f.enabled } : f);
      return { ...prev, [section]: { ...sectionCfg, fields: nextFields } } as FormConfig;
    });
  };

  const handleSave = async () => {
    if (!localConfig) return;
    await onConfigUpdate(localConfig);
  };

  if (!localConfig) {
    return (
      <div className="flex items-center justify-between">
        <div>Form Editor</div>
        <button onClick={handleSave} className="px-4 py-2 bg-primary text-white rounded">Save Changes</button>
      </div>
    );
  }

  const sections: Array<{ key: keyof FormConfig; title: string }> = [
    { key: 'specifications', title: 'Specifications' },
    { key: 'quantityAndPrice', title: 'Quantity & Price' },
    { key: 'yourDetails', title: 'Your Details' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Form Editor</h3>
        <button onClick={handleSave} className="px-4 py-2 bg-primary text-white rounded">Save Changes</button>
      </div>
      {sections.map(({ key, title }) => {
        const sec: any = (localConfig as any)[key] || {};
        const enabled = !!sec.enabled;
        const fields: FormField[] = sec.fields || [];
        return (
          <div key={String(key)} className="border rounded p-4 bg-gray-50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold">{title}</h4>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={() => setLocalConfig(prev => prev ? ({ ...prev, [key]: { ...sec, enabled: !enabled, fields } } as FormConfig) : prev)}
                />
                <span>Enabled</span>
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {fields.length === 0 && <div className="text-sm text-gray-500">No fields</div>}
              {fields.map(f => (
                <label key={f.id} className="flex items-center gap-2 text-sm bg-white border rounded p-2">
                  <input type="checkbox" checked={!!f.enabled} onChange={() => handleToggleField(key, f.id)} />
                  <span>{f.id}</span>
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormEditor;
