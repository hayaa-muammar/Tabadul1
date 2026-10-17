import React from 'react';

export default function StatsTicker() {
  return (
    <div className="pt-6 border-t border-[#12302b]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-right">
      {/* Stat 1 */}
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-xl bg-[#e9b44c]/20 text-[#c7922d] flex items-center justify-center font-bold shrink-0">
          <span className="material-symbols-outlined text-xl icon-fill">percent</span>
        </div>
        <div>
          <div className="font-black text-xs sm:text-sm text-[#12302b]">5% استرجاع</div>
          <div className="text-[10px] sm:text-[11px] text-[#52606d]">كاش باك فوري</div>
        </div>
      </div>

      {/* Stat 2 */}
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-xl bg-[#1f7a6e]/15 text-[#1f7a6e] flex items-center justify-center font-bold shrink-0">
          <span className="material-symbols-outlined text-xl">calculate</span>
        </div>
        <div>
          <div className="font-black text-xs sm:text-sm text-[#12302b]">1 ₪ = 10 نقاط</div>
          <div className="text-[10px] sm:text-[11px] text-[#52606d]">معادلة عادلة ومباشرة</div>
        </div>
      </div>

      {/* Stat 3 */}
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-xl bg-[#1f3a5f]/15 text-[#1f3a5f] flex items-center justify-center font-bold shrink-0">
          <span className="material-symbols-outlined text-xl icon-fill">verified</span>
        </div>
        <div>
          <div className="font-black text-xs sm:text-sm text-[#12302b]">0 ₪ رسوم اشتراك</div>
          <div className="text-[10px] sm:text-[11px] text-[#52606d]">انضمام مجاني 100%</div>
        </div>
      </div>

      {/* Stat 4 */}
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-xl bg-[#e9b44c]/20 text-[#c7922d] flex items-center justify-center font-bold shrink-0">
          <span className="material-symbols-outlined text-xl">paid</span>
        </div>
        <div>
          <div className="font-black text-xs sm:text-sm text-[#12302b]">3% عمولة فقط</div>
          <div className="text-[10px] sm:text-[11px] text-[#52606d]">للتجار بعد البيع</div>
        </div>
      </div>
    </div>
  );
}
