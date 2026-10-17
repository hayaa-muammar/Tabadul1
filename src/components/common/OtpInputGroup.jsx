import React, { useRef, useEffect } from 'react';

export default function OtpInputGroup({ 
  length = 4, 
  otp = ["", "", "", ""], 
  setOtp, 
  hasError = false, 
  onComplete = null,
  disabled = false,
  autoFocus = true
}) {
  const inputRefs = useRef([]);

  useEffect(() => {
    if (autoFocus && inputRefs.current[0] && !disabled) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus, disabled]);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    const newOtp = [...otp];

    if (val) {
      // Pick the last character entered
      newOtp[index] = val.slice(-1);
      setOtp(newOtp);

      // Auto-focus next input if available
      if (index < length - 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      newOtp[index] = '';
      setOtp(newOtp);
    }

    if (newOtp.every((digit) => digit !== '') && onComplete) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/[^0-9]/g, '');
    if (pasted) {
      const newOtp = [...otp];
      for (let i = 0; i < length && i < pasted.length; i++) {
        newOtp[i] = pasted[i];
      }
      setOtp(newOtp);
      const nextFocus = Math.min(pasted.length, length - 1);
      if (inputRefs.current[nextFocus]) {
        inputRefs.current[nextFocus].focus();
      }
      if (newOtp.every((digit) => digit !== '') && onComplete) {
        onComplete(newOtp.join(''));
      }
    }
  };

  return (
    <div className="flex justify-center items-center gap-3 sm:gap-4 dir-ltr" dir="ltr">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          pattern="[0-9]*"
          value={otp[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          disabled={disabled}
          aria-label={`الرقم ${index + 1}`}
          className={`w-13 h-16 sm:w-16 sm:h-20 text-center font-numeral-hero font-extrabold text-2xl sm:text-3xl rounded-xl border-2 transition-all outline-none shadow-sm ${
            hasError
              ? 'border-error text-error bg-error-container/20 focus:ring-4 focus:ring-error/20'
              : 'border-outline-variant bg-surface-container-lowest text-primary hover:border-primary-container focus:border-gaza-teal focus:ring-4 focus:ring-gaza-teal/10'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        />
      ))}
    </div>
  );
}
