import React from 'react';

interface ImageUploaderProps {
  language: 'en' | 'ar';
  label: string;
  imageB64: string;
  onImageUpload: (b64: string | null) => void;
  helpText?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ label, imageB64, onImageUpload, helpText }) => {
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      onImageUpload(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : null;
      onImageUpload(result);
    };
    reader.readAsDataURL(file);
  };

  const remove = () => onImageUpload(null);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input type="file" accept="image/*" onChange={onFileChange} />
      {helpText ? <p className="text-xs text-gray-500">{helpText}</p> : null}
      {imageB64 ? (
        <div className="mt-2 space-y-2">
          <img src={imageB64} alt="preview" className="max-h-40 rounded border" />
          <button type="button" onClick={remove} className="text-sm text-red-600 hover:underline">
            Remove
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ImageUploader;
