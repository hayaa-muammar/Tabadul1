import React from 'react';

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white text-right" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase text-[#1f7a6e] bg-[#1f7a6e]/10 px-3.5 py-1 rounded-full">
            بسيط ومباشر
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#12302b] mt-3">كيف يعمل «تبادل» بخطوات واضحة؟</h2>
          <p className="text-[#52606d] text-sm mt-1.5">3 خطوات بسيطة لحماية حقك والحصول على كاش باك فوري في كل عملية تسوق.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-[#f6f3ec] rounded-2xl p-6 border border-[#12302b]/10 hover:shadow transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#12302b] text-white flex items-center justify-center font-black text-xl mb-4">
              1
            </div>
            <span className="text-xs font-bold text-[#1f7a6e] block mb-1">الخطوة الأولى</span>
            <h3 className="text-lg font-black text-[#12302b] mb-2">اطلب من متجر الأزياء المعتمد وادفع بأمان</h3>
            <p className="text-[#52606d] text-xs leading-relaxed">
              تصفح تشكيلة الملابس والأحذية من متاجر غزة المعتمدة عبر المنصة أو إنستغرام، واختر طريقة الدفع (عند الاستلام أو جوال باي).
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#f6f3ec] rounded-2xl p-6 border border-[#12302b]/10 hover:shadow transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#1f7a6e] text-white flex items-center justify-center font-black text-xl mb-4">
              2
            </div>
            <span className="text-xs font-bold text-[#1f7a6e] block mb-1">الخطوة الثانية</span>
            <h3 className="text-lg font-black text-[#12302b] mb-2">استلم القطعة وتأكد من المقاس وأعطِ المندوب رمز 4 أرقام</h3>
            <p className="text-[#52606d] text-xs leading-relaxed">
              المبلغ يبقى محفوظاً ومحمياً حتى تعاين طلبيتك. عند الرضا التام، زوّد مندوب التوصيل برمز الأمان لتأكيد إتمام العملية فوراً.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#f6f3ec] rounded-2xl p-6 border-2 border-[#e9b44c] hover:shadow transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#e9b44c] text-[#12302b] flex items-center justify-center font-black text-xl mb-4">
              3
            </div>
            <span className="text-xs font-bold text-[#c7922d] block mb-1">الخطوة الثالثة</span>
            <h3 className="text-lg font-black text-[#12302b] mb-2">اكسب نقاطك واستبدلها بخصم مباشر في مشترياتك القادمة</h3>
            <p className="text-[#52606d] text-xs leading-relaxed">
              تُضاف نقاط الكاش باك 5% تلقائياً لمحفظتك (200 نقطة = 1 ₪) وتستبدلها كخصم نقدي في أي متجر أزياء أو أحذية شريك داخل غزة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
