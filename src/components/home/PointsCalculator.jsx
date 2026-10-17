import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PointsCalculator() {
  const [spend, setSpend] = useState(600); // 600 NIS default spend

  const pointsEarned = spend * 10;
  const cashbackValue = spend * 0.05;

  return (
    <section className="py-14 sm:py-20 bg-[#f6f3ec] relative text-right" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#12302b]/10 text-[#12302b] text-xs sm:text-sm font-bold">
            <span className="material-symbols-outlined text-sm text-[#e9b44c] icon-fill">calculate</span>
            <span>حاسبة العائد التفاعلية</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#12302b]">
            كم ستربحين من مشترياتك في غزة مع تبادل؟
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-on-surface-variant max-w-xl mx-auto">
            حرّكي المؤشر حسب متوسط إنفاقك الشهري على الأزياء، العبايات، الأحذية، وملابس الأطفال لمشاهدة رصيد كاش باك المباشر.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-[#12302b]/10 space-y-8">
          
          {/* Slider Controls */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold text-on-surface">
                معدل إنفاقك الشهري التقريبي:
              </span>
              <div className="flex items-baseline gap-1 text-[#12302b]">
                <span className="font-numeral-hero text-2xl sm:text-4xl font-black">{spend}</span>
                <span className="text-sm font-bold">شيكل / شهرياً</span>
              </div>
            </div>

            {/* Range Slider */}
            <input
              type="range"
              min="100"
              max="3000"
              step="50"
              value={spend}
              onChange={(e) => setSpend(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1f7a6e]"
              aria-label="معدل الإنفاق الشهري"
            />

            <div className="flex justify-between text-[11px] font-bold text-gray-400 font-numeral-hero">
              <span>100 ₪</span>
              <span>1,500 ₪</span>
              <span>3,000 ₪</span>
            </div>
          </div>

          {/* Results Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Points Earned Card */}
            <div className="bg-gradient-to-br from-[#12302b] to-[#1f3a5f] text-white p-5 rounded-2xl space-y-1 relative overflow-hidden">
              <span className="text-xs text-white/80 block">نقاط الولاء المكتسبة شهرياً:</span>
              <div className="flex items-baseline gap-1">
                <span className="font-numeral-hero text-3xl sm:text-4xl font-black text-[#e9b44c]">
                  {pointsEarned.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-white/90">نقطة</span>
              </div>
              <p className="text-[11px] text-[#8df8bd] pt-1">
                تُضاف تلقائياً لرقم جوالك بعد كل عملية شراء
              </p>
            </div>

            {/* Direct Cash Value Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 p-5 rounded-2xl space-y-1 text-emerald-950">
              <span className="text-xs text-emerald-700 font-bold block">قيمة الخصم المباشر (كاش باك 5%):</span>
              <div className="flex items-baseline gap-1">
                <span className="font-numeral-hero text-3xl sm:text-4xl font-black text-emerald-700">
                  {cashbackValue.toFixed(0)}
                </span>
                <span className="text-sm font-bold text-emerald-800">₪ كاش باك فوري</span>
              </div>
              <p className="text-[11px] text-emerald-700 pt-1">
                تستبدلها بخصم من الفاتورة عند أي متجر أو كاش عند الاستلام
              </p>
            </div>
          </div>

          {/* Call to action inside calculator */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
            <span className="text-xs sm:text-sm text-gray-600">
              سجّل الآن واكسب فوراً <strong className="text-[#12302b] font-bold">200 نقطة هدية</strong> ترحيبية مجاناً!
            </span>
            <Link
              to="/register"
              className="w-full sm:w-auto px-6 py-3 bg-[#12302b] hover:bg-[#1f3a5f] text-white font-bold text-xs sm:text-sm rounded-xl transition-all active:scale-95 text-center shadow-xs"
            >
              افتح محفظتك واكسب الهدية
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
