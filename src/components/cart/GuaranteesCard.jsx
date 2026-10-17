import React from 'react';

export default function GuaranteesCard() {
  return (
    <div className="bg-surface rounded-2xl p-5 sm:p-6 shadow-xs border border-outline-variant text-right space-y-4">
      <h3 className="font-bold text-base sm:text-lg text-primary flex items-center gap-2">
        <span className="material-symbols-outlined text-secondary text-xl icon-fill">
          verified_user
        </span>
        <span>ضمانات ومزايا تجربة تبادل المميزة</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* Guarantee 1 */}
        <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/60 flex flex-col gap-1.5">
          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-lg">pin</span>
          </div>
          <h4 className="font-bold text-xs sm:text-sm text-primary">تسليم محمي برمز OTP</h4>
          <p className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
            رمز أمان من 4 أرقام يصلك أنت فقط، لا يُسلّم الطلب ولا تُحرر الأموال للبائع إلا بعد مطابقتك.
          </p>
        </div>

        {/* Guarantee 2 */}
        <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/60 flex flex-col gap-1.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <span className="material-symbols-outlined text-lg">published_with_changes</span>
          </div>
          <h4 className="font-bold text-xs sm:text-sm text-primary">استبدال المقاس خلال 24 ساعة</h4>
          <p className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
            قيسي الفستان والحذاء براحة في منزلك، مع إمكانية استبدال فوري للمقاس مجاناً دون تكاليف شحن.
          </p>
        </div>

        {/* Guarantee 3 */}
        <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/60 flex flex-col gap-1.5">
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
            <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
          </div>
          <h4 className="font-bold text-xs sm:text-sm text-primary">دفع محمي بالأمانة (Escrow)</h4>
          <p className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
            تبقى مدفوعاتك بأمان في حساب الضمان التابع للمنصة حتى فحص المشتريات ورضاك التام عنها.
          </p>
        </div>
      </div>
    </div>
  );
}
