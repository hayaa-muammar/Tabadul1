import React from 'react';
import { Link } from 'react-router-dom';

export default function GuestAlertBanner() {
  return (
    <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 shadow-sm relative overflow-hidden text-right">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
            <span className="material-symbols-outlined text-2xl">lock_open</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-amber-400 text-primary text-[10px] font-black rounded">
                تنبيه هام
              </span>
              <h2 className="text-sm sm:text-base font-bold text-primary">
                حساب المتسوق غير مسجل
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              سجّل الدخول أو أنشئ حساباً جديداً لإتمام عملية الشراء، كسب كاش باك 5% وتفعيل هدية الـ 200 نقطة المجانية.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
          <Link
            to="/login"
            className="flex-1 sm:flex-none text-center px-5 py-2.5 bg-primary text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-primary-container transition-all active:scale-95 shadow-xs"
          >
            تسجيل الدخول
          </Link>
          <Link
            to="/register"
            className="flex-1 sm:flex-none text-center px-4 py-2.5 bg-white border border-outline-variant text-primary text-xs sm:text-sm font-bold rounded-xl hover:bg-surface-container-low transition-all"
          >
            حساب جديد
          </Link>
        </div>
      </div>
    </div>
  );
}
