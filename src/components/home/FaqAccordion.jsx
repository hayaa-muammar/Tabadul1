import React from 'react';

export default function FaqAccordion() {
  const faqs = [
    {
      num: 1,
      q: 'هل أحتاج لتحميل تطبيق أو استهلاك ذاكرة الهاتف؟',
      a: 'لا، إطلاقاً. منصة «تبادل» في نسختها الأولى هي منصة ويب خفيفة 100% تعمل على أي متصفح بأقل استهلاك للإنترنت. رقم جوالك هو حسابك، وتصلك تفاصيل الرصيد والطلبات مباشرة عبر واتساب.'
    },
    {
      num: 2,
      q: 'ما هي معادلة الكاش باك والقيمة النقدية الفعلية للنقاط؟',
      a: 'المعادلة شفافة ومحددة: تكسب 10 نقاط عن كل 1 ₪ تدفعه (ما يعادل 5% كاش باك). كل 200 نقطة تساوي 1 ₪ كاش مباشر يُخصم من فاتورتك عند الشراء من أي متجر ملابس أو أحذية شريك.'
    },
    {
      num: 3,
      q: 'كيف يحميني رمز الأمان المكون من 4 أرقام؟',
      a: 'عند طلب أي قطعة أزياء أو حذاء، يتم توليد رمز أمان خاص بالطلب من 4 أرقام. لا تسلّم هذا الرمز لمندوب التوصيل إلا بعد معاينة القطعة والتأكد من مطابقة المقاس والجودة، مما يضمن حقك الكامل قبل تحويل المبلغ.'
    },
    {
      num: 4,
      q: 'ما هي المتاجر المشمولة في المنصة؟',
      a: 'المنصة مخصصة حصرياً لقطاع الأزياء، الملابس النسائية، العبايات، الأزياء الرجالية، ملابس الأطفال، وبوتيكات الأحذية والبلاطين لضمان أعلى درجات التخصص والجودة.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#12302b]/10 text-right" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-black uppercase text-[#1f7a6e] bg-[#1f7a6e]/10 px-3.5 py-1 rounded-full">
            كل ما تحتاج معرفته
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#12302b] mt-2">الأسئلة الشائعة</h2>
          <p className="text-[#52606d] text-sm mt-1">إجابات مباشرة ومحددة لمتسوقي وتجار الملابس والأحذية.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.num} className="bg-[#f6f3ec] rounded-xl border border-[#12302b]/10 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-[#12302b] font-bold text-base mb-1.5">
                <span className="w-6 h-6 rounded-full bg-[#1f7a6e] text-white flex items-center justify-center text-xs font-black flex-shrink-0">
                  {faq.num}
                </span>
                <span>{faq.q}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#52606d] leading-relaxed pr-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
