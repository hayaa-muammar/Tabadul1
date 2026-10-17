import React from 'react';

export default function SmartRetentionSection() {
  return (
    <section className="py-20 bg-[#f6f3ec] text-right" id="smart-ai">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-wider text-[#1f7a6e] bg-[#1f7a6e]/10 px-3.5 py-1.5 rounded-full">
            الذكاء الاصطناعي للمحافظة على الزبائن
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#12302b] mt-3">المساعد الذكي التلقائي لمتجرك</h2>
          <p className="text-[#52606d] text-base mt-2">نظام مؤتمت يعمل خلف الكواليس لإعادة تنشيط الزبائن وزيادة تكرار الشراء دون أي مجهود إضافي منك.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tool 1 */}
          <div className="bg-white rounded-3xl p-8 border border-[#12302b]/10 shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#e9b44c]/20 text-[#c7922d] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl fill">hourglass_top</span>
            </div>
            <h3 className="text-xl font-black text-[#12302b] mb-3">حارس الصلاحية (Expiry Guard)</h3>
            <p className="text-[#52606d] text-sm leading-relaxed mb-4">
              يرسل تنبيهاً ذكياً ولطيفاً عبر واتساب للزبون قبل 15 يوماً من موعد انتهاء صلاحية نقاطه: «معك 15 ₪ خصم في رصيدك ينتهي قريباً، اطلب اليوم واستفد منه!»
            </p>
            <div className="text-xs font-bold text-[#1f7a6e] flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>يرفع معدل الشراء المتكرر بنسبة +34%</span>
            </div>
          </div>

          {/* Tool 2 */}
          <div className="bg-white rounded-3xl p-8 border border-[#12302b]/10 shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#1f7a6e]/20 text-[#1f7a6e] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl fill">shopping_cart_checkout</span>
            </div>
            <h3 className="text-xl font-black text-[#12302b] mb-3">منبّه النية للسلات المتروكة</h3>
            <p className="text-[#52606d] text-sm leading-relaxed mb-4">
              إذا استفسرت الزبونة عن سعر فستان أو عطر ولم تكمل الطلب، يرسل النظام حافزاً فورياً بنقاط مضاعفة أو خصم تشجيعي لإتمام الشراء خلال ساعات محددة.
            </p>
            <div className="text-xs font-bold text-[#1f7a6e] flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>استعادة 22% من المبيعات المفقودة</span>
            </div>
          </div>

          {/* Tool 3 */}
          <div className="bg-white rounded-3xl p-8 border border-[#12302b]/10 shadow-sm hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#1f3a5f]/20 text-[#1f3a5f] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl fill">replay</span>
            </div>
            <h3 className="text-xl font-black text-[#12302b] mb-3">مُرجع الزبائن الغائبين (Win-Back)</h3>
            <p className="text-[#52606d] text-sm leading-relaxed mb-4">
              يكتشف الزبائن الذين لم يشتروا منذ أكثر من 45 يوماً، ويبادر بإهدائهم 100 نقطة مجانية صالحة لمدة محدودة لتحفيزهم على العودة للتسوق من متجرك.
            </p>
            <div className="text-xs font-bold text-[#1f7a6e] flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>بناء ولاء حقيقي مستدام</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
