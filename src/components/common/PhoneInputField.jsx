import React, { useState, useEffect } from 'react';
import { findCountry } from '../../data/countriesData';
import { validatePhoneNumber, cleanPhoneInput, convertArabicNumerals } from '../../utils/phoneValidation';
import CountrySelectorModal from './CountrySelectorModal';

export default function PhoneInputField({ 
  value = '', 
  onChange, 
  id = "phone-input", 
  name = "phone", 
  placeholder, 
  required = true,
  disabled = false,
  error = null,
  countryCode = 'PS',
  onCountryChange,
  isWhatsApp = false,
  autoValidate = false,
  onValidationChange
}) {
  const [selectedCountry, setSelectedCountry] = useState(() => findCountry(countryCode));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touched, setTouched] = useState(false);
  const [internalError, setInternalError] = useState(null);

  // Sync external countryCode prop if changed
  useEffect(() => {
    if (countryCode && countryCode !== selectedCountry.code) {
      const found = findCountry(countryCode);
      if (found) setSelectedCountry(found);
    }
  }, [countryCode]);

  // Validate on value or country change
  useEffect(() => {
    if (autoValidate || touched) {
      if (!value && !required) {
        setInternalError(null);
        if (onValidationChange) onValidationChange({ isValid: true, error: null });
        return;
      }
      const valResult = validatePhoneNumber(value, selectedCountry.code, { isWhatsApp, required });
      setInternalError(valResult.isValid ? null : valResult.error);
      if (onValidationChange) onValidationChange(valResult);
    }
  }, [value, selectedCountry, autoValidate, touched, isWhatsApp, required]);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    if (onCountryChange) {
      onCountryChange(country);
    }
  };

  const handleInputChange = (e) => {
    const rawVal = e.target.value;
    // Convert eastern Arabic numerals and clean
    const converted = convertArabicNumerals(rawVal);
    // Allow digits, spaces, hyphens, and leading plus
    const sanitized = converted.replace(/[^0-9+\s-]/g, '');

    if (onChange) {
      // Create synthetic event to maintain full backwards compatibility
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          name,
          value: sanitized,
          country: selectedCountry
        }
      };
      onChange(syntheticEvent);
    }
  };

  const handleBlur = (e) => {
    setTouched(true);
    const valResult = validatePhoneNumber(value, selectedCountry.code, { isWhatsApp, required });
    setInternalError(valResult.isValid ? null : valResult.error);
    if (onValidationChange) {
      onValidationChange(valResult);
    }
  };

  const displayError = error || internalError;
  const currentPlaceholder = placeholder || selectedCountry.placeholder || "59X XXX XXX";

  return (
    <div className="w-full">
      <div 
        dir="ltr"
        className={`relative flex items-center rounded-xl bg-surface-container-lowest border transition-all ${
          displayError 
            ? 'border-error ring-1 ring-error/20' 
            : 'border-outline-variant focus-within:border-gaza-teal focus-within:ring-2 focus-within:ring-gaza-teal/20'
        } ${disabled ? 'opacity-60 cursor-not-allowed bg-surface-container-low' : ''}`}
      >
        {/* Country Code Selector Trigger */}
        <button
          type="button"
          onClick={() => !disabled && setIsModalOpen(true)}
          disabled={disabled}
          title={`الدولة الحالية: ${selectedCountry.nameAr}. اضغط لتغيير الدولة.`}
          className="inline-flex items-center gap-1.5 px-3 bg-surface-container-low hover:bg-surface-container border-r border-outline-variant/60 rounded-l-xl text-on-surface h-12 text-sm font-semibold shrink-0 select-none cursor-pointer transition-colors focus:outline-none"
        >
          <span className="text-base" role="img" aria-label={selectedCountry.nameEn}>
            {selectedCountry.flag}
          </span>
          <span className="font-numeral-hero font-bold text-xs sm:text-sm text-primary tracking-tight">
            {selectedCountry.dialCode}
          </span>
          <span className="material-symbols-outlined text-[16px] text-outline">
            expand_more
          </span>
        </button>

        {/* Phone Input */}
        <input
          type="tel"
          inputMode="tel"
          id={id}
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder={currentPlaceholder}
          required={required}
          disabled={disabled}
          className="w-full h-12 px-3.5 text-left font-numeral-hero font-medium text-sm sm:text-base text-on-surface placeholder:text-outline-variant focus:outline-none border-none focus:ring-0 bg-transparent tracking-wide"
        />

        {/* WhatsApp Icon Indicator if isWhatsApp */}
        {isWhatsApp && (
          <span className="pl-3 pr-2 text-emerald-600 flex items-center shrink-0 pointer-events-none" title="حقل مخصص لرقم واتساب المعتمد">
            <span className="material-symbols-outlined text-[18px] icon-fill">chat</span>
          </span>
        )}
      </div>

      {/* Validation Error Message */}
      {displayError && (
        <p className="text-error text-xs mt-1.5 flex items-center gap-1 text-right font-medium" dir="rtl">
          <span className="material-symbols-outlined text-[14px]">error</span>
          <span>{displayError}</span>
        </p>
      )}

      {/* Searchable Country Selector Modal */}
      <CountrySelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCountryCode={selectedCountry.code}
        onSelectCountry={handleSelectCountry}
      />
    </div>
  );
}
