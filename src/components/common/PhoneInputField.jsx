import React, { useState } from 'react';

export default function PhoneInputField({ 
  value, 
  onChange, 
  id = "phone-input", 
  name = "phone", 
  placeholder = "059 123 4567", 
  required = true,
  disabled = false,
  error = null
}) {
  const [prefix, setPrefix] = useState("+970");

  return (
    <div className="w-full">
      <div 
        dir="ltr"
        className={`relative flex items-center rounded-xl bg-surface-container-lowest border transition-all ${
          error 
            ? 'border-error ring-1 ring-error/20' 
            : 'border-outline-variant focus-within:border-gaza-teal focus-within:ring-2 focus-within:ring-gaza-teal/20'
        } ${disabled ? 'opacity-60 cursor-not-allowed bg-surface-container-low' : ''}`}
      >
        {/* Country Code Prefix */}
        <div className="inline-flex items-center gap-1.5 px-3.5 bg-surface-container-low border-r border-outline-variant/60 rounded-l-xl text-on-surface h-12 text-sm font-semibold shrink-0 select-none">
          <span className="text-base">🇵🇸</span>
          <select 
            value={prefix} 
            onChange={(e) => setPrefix(e.target.value)}
            className="bg-transparent border-none text-xs sm:text-sm font-bold text-primary focus:ring-0 cursor-pointer p-0 pr-1"
            disabled={disabled}
          >
            <option value="+970">+970</option>
            <option value="+972">+972</option>
          </select>
        </div>

        {/* Input */}
        <input
          type="tel"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className="w-full h-12 px-4 text-left font-numeral-hero font-medium text-base text-on-surface placeholder:text-outline-variant focus:outline-none border-none focus:ring-0 bg-transparent tracking-wide"
        />
      </div>
      {error && (
        <p className="text-error text-xs mt-1.5 flex items-center gap-1 text-right" dir="rtl">
          <span className="material-symbols-outlined text-[14px]">error</span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
