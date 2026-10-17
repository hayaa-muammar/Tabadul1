import React from 'react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      icon: "call",
      title: "تسوّق واذكر رقم جوالك فقط",
      description: "عند الشراء من أي متجر ملابس أو أحذية معتمد بغزة (في المعرض أو أونلاين عبر واتساب)، يكفي ذكر رقم هاتفك لتسجيل مشترياتك دون بطاقات.",
      tag: "سهولة فورية"
    },
    {
      num: "02",
      icon: "percent",
      title: "اكسب 10 نقاط لكل شيكل (كاش باك 5%)",
      description: "تتحول قيمة مشترياتك فوراً لنقاط موحدة تتراكم في محفظتك الرقمية. 100 شيكل تمنحك 1,000 نقطة مضمونة في حسابك.",
      tag: "عائد مضمون"
    },
    {
      num: "03",
      icon: "redeem",
      title: "استبدل نقاطك بخصم كاش عند أي متجر",
      description: "النقاط التي كسبتها من محل الأحذية يمكنك استبدالها لخصم فستان أو عباية من متجر آخر! خصم مباشر يُحسم من الفاتورة فوراً.",
      tag: "حرية الاستبدال"
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white text-right" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs sm:text-sm font-bold text-[#1f7a6e] bg-[#1f7a6e]/10 px-3.5 py-1 rounded-full">
            خطوات بسيطة جداً
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#12302b]">
            كيف تعمل منصة تبادل في غزة؟
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-on-surface-variant max-w-xl mx-auto">
            نظام صُمم ليكون الأسهل والأسرع لكل متسوق وتاجر في غزة بدون تعقيدات التطبيقات الثقيلة.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#f6f3ec] rounded-3xl p-6 sm:p-8 border border-[#12302b]/10 relative flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#12302b] text-[#e9b44c] flex items-center justify-center font-bold shadow-xs">
                    <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                  </div>
                  <span className="font-numeral-hero text-3xl sm:text-4xl font-black text-[#12302b]/20 group-hover:text-[#1f7a6e]/40 transition-colors">
                    {step.num}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-[#1f7a6e] bg-[#1f7a6e]/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  {step.tag}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#12302b] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#12302b]/10 flex items-center justify-between text-xs font-bold text-[#12302b]">
                <span>المرحلة {idx + 1} من 3</span>
                <span className="material-symbols-outlined text-sm text-[#1f7a6e]">check_circle</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
