import React, { useState } from 'react';

export default function PasswordInputField({
  id = "password",
  name = "password",
  label = "كلمة المرور",
  placeholder = "••••••••",
  value,
  onChange,
  required = true,
  icon = "lock",
  error = null
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-xs sm:text-sm font-bold text-on-surface mb-2">
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}
      <div className="relative">
        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-outline">
          <span className="material-symbols-outlined text-[20px]" data-icon={icon}>
            {icon}
          </span>
        </div>
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full h-12 pr-11 pl-10 rounded-xl border bg-surface-container-lowest text-on-surface text-sm sm:text-base focus:outline-none transition-all ${
            error 
              ? 'border-error ring-1 ring-error/20' 
              : 'border-outline-variant focus:border-gaza-teal focus:ring-2 focus:ring-gaza-teal/20'
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute inset-y-0 left-0 pl-3 flex items-center text-outline hover:text-primary transition-colors cursor-pointer"
          aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
        >
          <span className="material-symbols-outlined text-[18px]">
            {showPassword ? "visibility_off" : "visibility"}
          </span>
        </button>
      </div>
      {error && (
        <p className="text-error text-xs mt-1.5 flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">error</span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
