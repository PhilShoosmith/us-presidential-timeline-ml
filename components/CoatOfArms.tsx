import React, { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface PresidentialSealProps {
  className?: string;
  imageUrl?: string | null;
  isAdmin?: boolean;
  onImageUpload?: (imageUrl: string) => void;
}

const PresidentialSeal: React.FC<PresidentialSealProps> = ({ className, imageUrl, isAdmin, onImageUpload }) => {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = (e: React.MouseEvent) => {
    if (!isAdmin || !onImageUpload) return;
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onImageUpload && isAdmin) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          onImageUpload(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={className ? `relative group ${className}` : 'relative group'}
      onClick={isAdmin ? handleUploadClick : undefined}
      role={isAdmin ? "button" : undefined}
      aria-label={isAdmin ? "Change presidential seal image" : undefined}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Seal of the President of the United States"
          className={`w-full h-full object-contain ${isAdmin ? 'cursor-pointer' : ''}`}
          key={imageUrl}
        />
      ) : (
        <div className="w-full h-full bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 text-xs text-center p-2">
          {t('seal.notAvailable')}
        </div>
      )}

      {isAdmin && (
        <>
          <div
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none rounded-md"
          >
            <div className="text-center text-white p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              <p className="mt-1 text-sm font-semibold">{t('seal.changeImage')}</p>
            </div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
        </>
      )}
    </div>
  );
};

export default PresidentialSeal;
