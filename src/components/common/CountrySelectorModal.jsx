import React, { useState, useEffect, useRef } from 'react';
import { COUNTRIES, searchCountries } from '../../data/countriesData.js';

export default function CountrySelectorModal({
  isOpen,
  onClose,
  selectedCountryCode,
  onSelectCountry
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const modalRef = useRef(null);

  // Filtered countries based on search term
  const filteredCountries = searchCountries(searchTerm);

  // Auto-focus search input when opened
  useEffect(() => {
    if (isOpen) {
      setSearchTerm('');
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in text-right font-tajawal"
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/60 flex flex-col max-h-[85vh] overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 border-b border-outline-variant/30 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">public</span>
            <h3 className="font-bold text-base text-primary">اختر الدولة أو المقدمة الدولية</h3>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-3 border-b border-outline-variant/20 bg-surface-container-low/40">
          <div className="relative flex items-center">
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ابحث بالاسم (مصر، السعودية) أو الرمز (+966, 20)..."
              className="w-full h-11 pr-10 pl-9 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface text-xs sm:text-sm placeholder:text-outline focus:outline-none focus:border-gaza-teal focus:ring-2 focus:ring-gaza-teal/15 transition-all text-right"
            />
            <span className="material-symbols-outlined absolute right-3 text-outline text-[18px] pointer-events-none">
              search
            </span>
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute left-3 text-outline hover:text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">cancel</span>
              </button>
            )}
          </div>
        </div>

        {/* Country List */}
        <div className="flex-1 overflow-y-auto divide-y divide-outline-variant/15 p-2">
          {filteredCountries.length === 0 ? (
            <div className="py-8 text-center text-on-surface-variant text-xs sm:text-sm space-y-1">
              <span className="material-symbols-outlined text-2xl text-outline">search_off</span>
              <p>لم نجد دولة مطابقة لـ "{searchTerm}"</p>
              <p className="text-[11px] text-outline">جرب البحث برقم المقدمة مثل: +966 أو 970</p>
            </div>
          ) : (
            filteredCountries.map((c) => {
              const isSelected = c.code === selectedCountryCode;
              return (
                <button
                  key={`${c.code}-${c.dialCode}`}
                  type="button"
                  onClick={() => {
                    onSelectCountry(c);
                    onClose();
                  }}
                  className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between text-right transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-gaza-teal/10 text-primary font-bold'
                      : 'hover:bg-surface-container-low text-on-surface'
                  }`}
                >
                  {/* Left: Dial Code & Selection Indicator */}
                  <div className="flex items-center gap-2" dir="ltr">
                    <span className="font-numeral-hero font-bold text-xs sm:text-sm text-primary">
                      {c.dialCode}
                    </span>
                    {isSelected && (
                      <span className="material-symbols-outlined text-gaza-teal text-[18px]">
                        check_circle
                      </span>
                    )}
                  </div>

                  {/* Right: Flag and Country Name */}
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-xs sm:text-sm truncate">
                      {c.nameAr}
                    </span>
                    <span className="text-xl shrink-0" role="img" aria-label={c.nameEn}>
                      {c.flag}
                    </span>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-2.5 bg-surface-container-low/50 border-t border-outline-variant/20 text-center text-[11px] text-on-surface-variant">
          تدعم منصة تبادل أرقام الهواتف والواتساب لأكثر من 200 دولة حول العالم.
        </div>
      </div>
    </div>
  );
}
