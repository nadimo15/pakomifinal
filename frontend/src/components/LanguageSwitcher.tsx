import React from 'react';
import type { Language } from '../types.ts';

interface Props {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<Props> = ({ currentLanguage, setLanguage }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => setLanguage('ar')}
        className={`px-2 py-1 rounded text-sm ${currentLanguage === 'ar' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
        aria-pressed={currentLanguage === 'ar'}
      >
        العربية
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded text-sm ${currentLanguage === 'en' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
        aria-pressed={currentLanguage === 'en'}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
