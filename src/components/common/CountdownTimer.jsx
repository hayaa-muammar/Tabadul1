import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ 
  initialSeconds = 52, 
  onExpire = null,
  onResend = null,
  whatsappAction = null,
  smsAction = null
}) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const isExpired = seconds <= 0;

  useEffect(() => {
    if (seconds <= 0) {
      if (onExpire) onExpire();
      return;
    }
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds, onExpire]);

  const handleReset = () => {
    setSeconds(initialSeconds);
    if (onResend) onResend();
  };

  const formattedTime = `00:${seconds < 10 ? `0${seconds}` : seconds}`;

  return (
    <div className="bg-surface-container-low/80 rounded-xl p-3.5 space-y-2.5 border border-outline-variant/30 text-right">
      <div className="flex items-center justify-between text-xs sm:text-sm">
        <span className="flex items-center gap-1.5 text-on-surface-variant font-medium">
          <span className={`material-symbols-outlined text-[18px] ${isExpired ? 'text-error' : 'text-outline'}`}>
            {isExpired ? 'timer_off' : 'schedule'}
          </span>
          <span>{isExpired ? 'انتهت صلاحية الرمز' : 'إعادة الإرسال بعد:'}</span>
        </span>
        <span className={`font-bold font-numeral-hero text-sm sm:text-base ${isExpired ? 'text-error font-extrabold' : 'text-primary'}`}>
          {isExpired ? '00:00' : formattedTime}
        </span>
      </div>

      <div className="pt-2 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-2 text-xs">
        {isExpired ? (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-bold hover:bg-primary-container transition-all cursor-pointer active:scale-95 shadow-xs"
          >
            <span className="material-symbols-outlined text-[16px]">refresh</span>
            <span>إعادة إرسال رمز جديد</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={smsAction || handleReset}
            disabled={!isExpired}
            className={`inline-flex items-center gap-1 transition-colors ${
              isExpired
                ? 'text-primary font-bold hover:underline cursor-pointer'
                : 'text-on-surface-variant/60 cursor-not-allowed'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">sms</span>
            <span>إرسال عبر رسالة SMS بديلة</span>
          </button>
        )}

        <a
          href="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-secondary hover:text-on-secondary-fixed-variant font-bold transition-colors"
        >
          <span className="material-symbols-outlined text-[15px]">support_agent</span>
          <span>مساعدة فورية مع دعم التجار</span>
        </a>
      </div>
    </div>
  );
}
