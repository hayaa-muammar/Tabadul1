import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative pt-10 pb-20 md:py-20 overflow-hidden bg-gradient-to-b from-[#f6f3ec] via-white to-[#f6f3ec]" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Right: Clear Value Proposition */}
          <div className="lg:col-span-7 space-y-5 text-right">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#12302b] leading-[1.3]">
              منصة تبادل للأزياء والأحذية — <br />
              <span className="text-[#1f7a6e]">تسوّق بذكاء واكسب بولاء</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#52606d] leading-relaxed">
              منصة ويب خفيفة وسريعة تعمل بسلاسة مع الإنترنت الضعيف. كاش باك 5% كنقاط تراكمية (200 نقطة = 1 ₪) تمشي معك عبر متاجر الملابس والأحذية بدون تعقيد.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/stores"
                className="px-6 py-3 rounded-xl bg-[#12302b] text-white font-bold text-sm shadow hover:bg-[#1f7a6e] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#e9b44c] text-lg">shopping_bag</span>
                <span>تصفح متاجر الأزياء</span>
              </Link>
              <a
                className="px-5 py-3 rounded-xl bg-white border border-[#12302b]/20 hover:border-[#12302b] text-[#12302b] font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
                href="#merchants-section"
              >
                <span className="material-symbols-outlined text-[#1f7a6e] text-lg">add_business</span>
                <span>سجل متجرك مجاناً (تجربة 14 يوماً)</span>
              </a>
            </div>

            {/* Key highlights row */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#12302b]/10 text-center">
              <div className="p-2.5 rounded-xl bg-white border border-[#12302b]/10">
                <div className="font-black text-sm text-[#12302b]">5% كاش باك</div>
                <div className="text-[11px] text-[#52606d]">200 نقطة = 1 ₪</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#12302b]/10">
                <div className="font-black text-sm text-[#12302b]">رمز 4 أرقام</div>
                <div className="text-[11px] text-[#52606d]">حماية أمان الاستلام</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#12302b]/10">
                <div className="font-black text-sm text-[#12302b]">3% عمولة</div>
                <div className="text-[11px] text-[#52606d]">فقط بعد نجاح التسليم</div>
              </div>
            </div>
          </div>

          {/* Left: Structured, ultra-fast loading live metrics summary card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 border border-[#12302b]/15 shadow-sm space-y-4 text-right">
              <div className="flex items-center justify-between pb-3 border-b border-[#12302b]/10">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#1f7a6e]/15 text-[#1f7a6e] flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
                  </span>
                  <div>
                    <div className="font-black text-sm text-[#12302b]">محفظة المتسوق الموحدة</div>
                    <div className="text-[10px] text-[#52606d]">مربوطة برقم جوالك مباشرة</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#8df8bd]/30 text-[#12302b] text-[10px] font-bold">نشطة</span>
              </div>

              {/* Metric items */}
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#f6f3ec] border border-[#12302b]/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#52606d]">محفظة واحدة تمشي معك:</div>
                    <div className="text-xs font-black text-[#12302b] mt-0.5">2,000 نقطة معلقة في رصيدك</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-[#1f7a6e]">= 10.00 ₪</div>
                    <div className="text-[10px] text-[#c7922d] font-bold">رصيد خصم متاح</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#f6f3ec] border border-[#12302b]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#1f7a6e] text-lg">pin</span>
                    <div>
                      <div className="text-xs font-black text-[#12302b]">حماية العملية برمز 4 أرقام</div>
                      <div className="text-[10px] text-[#52606d]">ضمان استلام القطعة وفحص المقاس قبل السداد</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#12302b] bg-white px-2 py-1 rounded border border-[#12302b]/10"># # # #</span>
                </div>

                <div className="p-3 rounded-xl bg-[#f6f3ec] border border-[#12302b]/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#e9b44c] text-lg">percent</span>
                    <div>
                      <div className="text-xs font-black text-[#12302b]">عمولة 3% فقط للتاجر عند البيع الناجح</div>
                      <div className="text-[10px] text-[#52606d]">بدون أي اشتراكات أو رسوم شهرية مسبقة</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#1f7a6e]">0 ₪ تأسيس</span>
                </div>
              </div>

              <div className="pt-2 text-center text-xs text-[#52606d]">
                <span className="material-symbols-outlined text-xs align-middle text-[#1f7a6e] ml-1">check_circle</span>
                <span>محسّن ليعمل بكفاءة فائقة على شبكات 2G/3G وانقطاع التيار</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
