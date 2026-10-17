import React from 'react';

export default function PwaCapabilitiesBar() {
  return (
    <section className="bg-[#12302b] text-white py-12 border-y border-[#e9b44c]/20 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-[#e9b44c]/20 text-[#e9b44c] flex items-center justify-center font-bold mb-3">
              <span className="material-symbols-outlined text-xl">wifi_off</span>
            </div>
            <h3 className="font-black text-sm text-white mb-1">يعمل مع أضعف إنترنت</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              أولوية عرض الأسعار والمقاسات والنصوص قبل الصور، مع استهلاك لا يتجاوز بضعة كيلوبايتات لحفظ باقات البيانات.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-[#1f7a6e]/30 text-[#8df8bd] flex items-center justify-center font-bold mb-3">
              <span className="material-symbols-outlined text-xl">savings</span>
            </div>
            <h3 className="font-black text-sm text-white mb-1">كاش باك 5% حقيقي</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              10 نقاط لكل 1 ₪. (200 نقطة = 1 ₪) صالحة لمدة 30 يوماً وتُستبدل في منتجك المفضل من ملابس وأحذية.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-[#e9b44c]/20 text-[#e9b44c] flex items-center justify-center font-bold mb-3">
              <span className="material-symbols-outlined text-xl">security</span>
            </div>
            <h3 className="font-black text-sm text-white mb-1">أمان مالي كامل</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              حجز المبلغ لدى المنصة حتى تأكيد استلام القطعة برمز الـ 4 أرقام وفحص المقاس والجودة براحة تامة.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-[#1f7a6e]/30 text-[#8df8bd] flex items-center justify-center font-bold mb-3">
              <span className="material-symbols-outlined text-xl">chat</span>
            </div>
            <h3 className="font-black text-sm text-white mb-1">دعم مباشر عبر واتساب</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              إشعارات وتقارير ميسرة تصل للتاجر والمشتري بدون الحاجة لتحميل تطبيقات ثقيلة أو التسجيل المعقد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
