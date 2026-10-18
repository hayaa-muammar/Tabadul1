import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PointsCalculator() {
  const [amount, setAmount] = useState(300);

  const points = amount * 10;
  const cashback = ((points / 1000) * 5).toFixed(1);

  return (
    <section className="py-20 bg-[#f6f3ec] relative text-right" id="calculator">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#1f7a6e] bg-[#1f7a6e]/10 px-3.5 py-1.5 rounded-full">
            حاسبة النقاط والوفر الذكية
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#12302b] mt-3">احسب كم ستربح من كل تسوق</h2>
          <p className="text-[#52606d] text-sm sm:text-base mt-2">حرّك المؤشر لمعرفة عدد النقاط وقيمة الخصم المباشر المسترد لشواكل حقيقية.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#12302b]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Controls Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-bold text-[#12302b] text-base" htmlFor="purchase-range">مشترياتك الشهرية المتوقعة:</label>
                  <div className="flex items-baseline gap-1 text-3xl font-black text-[#1f7a6e]">
                    <span id="calc-amount">{amount.toLocaleString('en-US')}</span>
                    <span className="text-base font-normal text-[#52606d]">₪ شيكل</span>
                  </div>
                </div>

                <input
                  className="w-full h-3.5 bg-[#f6f3ec] rounded-lg appearance-none cursor-pointer focus:outline-none"
                  id="purchase-range"
                  max="2500"
                  min="50"
                  step="50"
                  type="range"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value, 10))}
                  aria-label="مشترياتك الشهرية المتوقعة"
                />

                <div className="flex justify-between text-xs text-[#52606d] font-bold mt-2">
                  <span>50 ₪</span>
                  <span>500 ₪</span>
                  <span>1,200 ₪</span>
                  <span>2,500 ₪</span>
                </div>
              </div>

              {/* Explanatory note */}
              <div className="p-4 rounded-2xl bg-[#f6f3ec] border border-[#12302b]/10 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#12302b]">
                  <span className="material-symbols-outlined text-[#e9b44c] fill">verified</span>
                  <span>معادلة الشفافية والخصم المباشر</span>
                </div>
                <p className="text-xs text-[#52606d] leading-relaxed">
                  كل 1 ₪ تصرفه يمنحك 10 نقاط فورية. كل 1,000 نقطة مجمعة تمنحك خصماً نقدياً بقيمة 5 ₪ مستردة كاش باك تستخدمها متى شئت.
                </p>
              </div>
            </div>

            {/* Result Card Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#12302b] via-[#1f3a5f] to-[#12302b] text-white p-7 rounded-2xl shadow-xl text-center relative overflow-hidden">
              <div className="text-xs text-white/70 mb-1">النقاط المكتسبة فوراً:</div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[#e9b44c] text-3xl fill">stars</span>
                <span className="text-4xl md:text-5xl font-black text-[#e9b44c]" id="calc-points">
                  {points.toLocaleString('en-US')}
                </span>
                <span className="text-sm font-bold text-white/80">نقطة</span>
              </div>

              <div className="pt-4 border-t border-white/15">
                <div className="text-xs text-white/70 mb-1">قيمة الخصم المباشر المسترد:</div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                  <span id="calc-cash">{cashback}</span> ₪ <span className="text-xs font-normal text-[#e9b44c]">(كاش باك)</span>
                </div>
                <p className="text-[11px] text-white/80 leading-normal bg-white/10 p-2.5 rounded-xl">
                  هذا الوفر يغطي تكلفة توصيل طلبية كاملة أو قطعة إكسسوار إضافية مجاناً في طلبك التالي!
                </p>
              </div>

              <Link
                to="/register"
                className="mt-5 w-full py-3 rounded-xl bg-[#e9b44c] hover:bg-[#d69f37] text-[#12302b] font-black text-sm block text-center shadow active:scale-95 transition-all cursor-pointer"
              >
                ابدأ جمع نقاطك الآن مجاناً
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
