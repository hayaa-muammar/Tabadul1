import React, { useState } from 'react';

export default function MerchantPartnerSection() {
  const [storeName, setStoreName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [productType, setProductType] = useState('أزياء وملابس نسائية');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('شكراً لاهتمامك! سيتواصل معك فريق تبادل عبر واتساب خلال أقل من ساعتين لتفعيل متجرك ولوحة تحكم PWA.');
    setStoreName('');
    setWhatsapp('');
  };

  return (
    <section className="py-20 md:py-28 bg-[#12302b] text-white relative overflow-hidden text-right" id="merchants-section">
      <div className="absolute -right-20 top-0 w-96 h-96 bg-[#1f7a6e]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-96 h-96 bg-[#e9b44c]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black uppercase tracking-wider text-[#e9b44c] bg-[#e9b44c]/15 px-3.5 py-1.5 rounded-full inline-block">
              أصحاب المتاجر ومشاريع إنستغرام بغزة
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              حوّل زبائن المرة الواحدة إلى <br />
              <span className="text-[#e9b44c]">زبائن دائمين مدى الحياة!</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-normal">
              في سوق غزة المليء بالمنافسة، الخصم العشوائي يقلل أرباحك الصافية. برنامج الولاء التشاركي في «تبادل» يضمن عودة الزبونة للشراء منك مرة بعد أخرى، ويجلب لك زبائن جدد يحملون نقاطاً يريدون إنفاقها لديك.
            </p>

            {/* 4 Core Merchant Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-[#e9b44c] font-black text-sm mb-1.5">
                  <span className="material-symbols-outlined text-lg">paid</span>
                  <span>عمولة 3% فقط بعد إتمام البيع</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  لا توجد تكاليف تأسيس أو رسوم تسجيل؛ الدفع فقط عند اكتمال تسليم الطلب للزبون بنجاح.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-[#e9b44c] font-black text-sm mb-1.5">
                  <span className="material-symbols-outlined text-lg">chat</span>
                  <span>تقارير تسوية أسبوعية عبر واتساب</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  ملخص أسبوعي شفاف يصلك مباشرة على رقم واتساب الخاص بمتجرك، موضحاً المبيعات والنمو.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-[#e9b44c] font-black text-sm mb-1.5">
                  <span className="material-symbols-outlined text-lg">verified_user</span>
                  <span>تسويات نقدية وبنكية بانتظام</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  نظام تسوية مالية دقيق كل أسبوع، بتحويل بنكي فوري أو تسليم نقدي مباشر (كاش) داخل غزة.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-[#e9b44c] font-black text-sm mb-1.5">
                  <span className="material-symbols-outlined text-lg">group_add</span>
                  <span>تدفق زبائن جدد من الشبكة</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  زبائن المتاجر الأخرى يأتون إلى متجرك لإنفاق نقاطهم المجمعة لديك، مما يضاعف مبيعاتك مجاناً.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Merchant Signup Card */}
          <div className="lg:col-span-5 bg-white text-[#12302b] rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20" id="merchant-signup">
            <div className="text-center mb-6">
              <span className="text-xs font-black text-[#1f7a6e] bg-[#1f7a6e]/10 px-3 py-1 rounded-full">عرض انطلاق 2026</span>
              <h3 className="text-2xl font-black text-[#12302b] mt-2">انضم كمتجر شريك في دقيقة</h3>
              <p className="text-xs text-[#52606d] mt-1">تجربة مجانية 14 يوماً بدون أي التزام مالي أو بطاقات بنكية.</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-[#12302b] mb-1">اسم المتجر أو صفحة الإنستغرام</label>
                <input
                  className="w-full text-sm px-4 py-3 rounded-xl bg-[#f6f3ec] border border-[#12302b]/15 focus:border-[#1f7a6e] focus:bg-white focus:outline-none"
                  placeholder="مثال: بوتيك غزة فاشن"
                  required
                  type="text"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12302b] mb-1">رقم الواتساب للتواصل (غزة)</label>
                <input
                  className="w-full text-sm px-4 py-3 rounded-xl bg-[#f6f3ec] border border-[#12302b]/15 focus:border-[#1f7a6e] focus:bg-white focus:outline-none text-right"
                  dir="ltr"
                  placeholder="059xxxxxxx أو 056xxxxxxx"
                  required
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12302b] mb-1">نوع المنتجات</label>
                <select
                  className="w-full text-sm px-4 py-3 rounded-xl bg-[#f6f3ec] border border-[#12302b]/15 focus:border-[#1f7a6e] focus:bg-white focus:outline-none"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                >
                  <option>أزياء وملابس نسائية</option>
                  <option>أزياء رجالية</option>
                  <option>ملابس أطفال ومواليد</option>
                  <option>عبايات وشالات</option>
                  <option>أحذية وحقائب</option>
                </select>
              </div>

              <button
                className="w-full py-4 rounded-xl bg-[#e9b44c] hover:bg-[#d69f37] text-[#12302b] font-black text-base shadow-md active:scale-95 transition-all cursor-pointer"
                type="submit"
              >
                تفعيل التجربة المجانية (14 يوماً)
              </button>

              <p className="text-[11px] text-center text-[#52606d] mt-2">
                🔒 بياناتك محمية تماماً. سنرسل لك رابط لوحة التحكم البسيطة على الواتساب فوراً.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
