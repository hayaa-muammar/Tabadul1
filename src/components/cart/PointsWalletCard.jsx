import React from 'react';
import { usePoints } from '../../context/PointsContext';

export default function PointsWalletCard() {
  const { pointsBalance, isRedeemed, toggleRedemption } = usePoints();

  return (
    <div className="bg-gradient-to-br from-[#12302b] via-[#163832] to-[#12302b] text-white rounded-2xl p-5 sm:p-6 shadow-md relative overflow-hidden text-right">
      {/* Decorative Glows */}
      <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-[#e9b44c]/15 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-emerald-500/15 blur-xl pointer-events-none" />

      <div className="relative z-10 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-white/15">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#e9b44c] text-[#12302b] flex items-center justify-center font-bold shadow-xs">
              <span className="material-symbols-outlined text-2xl icon-fill">loyalty</span>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white">استبدال نقاط تبادل</h3>
              <span className="text-xs text-[#ffddb5]">خصم مباشر وفوري من الفاتورة</span>
            </div>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-xs">
            متاح الآن
          </span>
        </div>

        {/* Balance Display */}
        <div className="flex items-center justify-between bg-white/10 p-3.5 rounded-xl border border-white/10 backdrop-blur-xs">
          <div>
            <span className="text-[11px] text-white/70 block">رصيدك الكلي الجاهز للاستبدال:</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="font-numeral-hero text-2xl sm:text-3xl font-black text-[#e9b44c]">
                {pointsBalance.toLocaleString()}
              </span>
              <span className="text-xs font-bold text-white">نقطة</span>
              <span className="text-xs text-white/80 mr-1.5">(تساوي {(pointsBalance / 200).toFixed(2)} ₪)</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#e9b44c] text-3xl opacity-80">toll</span>
        </div>

        {/* Toggle Switch */}
        <div className="p-3.5 rounded-xl bg-white/10 border border-[#e9b44c]/40 flex items-center justify-between gap-3">
          <div className="flex-1">
            <span className="font-bold text-xs sm:text-sm text-white block">
              تطبيق رصيد النقاط كاملاً (-12 ₪)
            </span>
            <span className="text-[11px] text-white/75 leading-tight block mt-0.5">
              استبدال 2,400 نقطة مسموح بها بالكامل على هذه الطلبية لتقليل الإجمالي.
            </span>
          </div>

          {/* Switch Input */}
          <label className="relative inline-flex items-center cursor-pointer shrink-0">
            <input
              type="checkbox"
              checked={isRedeemed}
              onChange={toggleRedemption}
              className="sr-only peer"
              aria-label="تفعيل خصم النقاط"
            />
            <div className="w-13 h-7 bg-white/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[3px] after:bg-[#e9b44c] after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#e9b44c]/40 peer-checked:border-[#e9b44c] border border-transparent"></div>
          </label>
        </div>

        {/* Info */}
        <div className="flex items-center gap-1.5 text-[11px] text-white/80 pt-1">
          <span className="material-symbols-outlined text-sm text-[#e9b44c]">info</span>
          <span>الحد الأقصى للخصم متاح بما يضمن لك أفضل توفير مع كل مشترى.</span>
        </div>
      </div>
    </div>
  );
}
