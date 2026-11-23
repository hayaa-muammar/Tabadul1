import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function StoreInfoStepPage() {
  const navigate = useNavigate();
  const [storeName, setStoreName] = useState('بوتيك لمسة للأزياء الراقية');
  const [storeSocial, setStoreSocial] = useState('instagram.com/lamsa_fashion_gaza');
  const [categories, setCategories] = useState({
    women: true,
    men: false,
    abayas: true,
    shoes: true,
    kids: false,
  });
  const [error, setError] = useState('');

  const toggleCategory = (key) => {
    setCategories((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleContinue = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setError('');

    if (!storeName.trim()) {
      setError('يرجى إدخال اسم المتجر أو البوتيك.');
      return;
    }
    if (!storeSocial.trim()) {
      setError('يرجى إدخال رابط صفحة المتجر على وسائل التواصل الاجتماعي.');
      return;
    }
    const hasCategory = Object.values(categories).some(Boolean);
    if (!hasCategory) {
      setError('يرجى اختيار فئة أزياء واحدة على الأقل للاستمرار.');
      return;
    }

    navigate('/merchant/onboarding/branding');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-6 py-6 sm:py-8">
        {/* Stepper (6 Steps) */}
        <section aria-label="شريط التقدم" className="bg-white rounded-2xl p-5 md:p-6 border border-[#E1DACB] shadow-xs mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <p className="text-xs text-[#576b66] mb-1 font-medium">مسار انضمام متجر أزياء وأحذية</p>
              <h1 className="text-lg md:text-xl font-bold text-[#12302B]">الخطوة 2: بيانات المتجر وفئات الأزياء</h1>
            </div>
            <div className="bg-[#E9B44C]/20 text-[#835400] border border-[#E9B44C]/40 rounded-full px-3.5 py-1 text-xs font-bold flex items-center gap-1.5 shadow-xs self-start md:self-auto">
              <span className="material-symbols-outlined text-[16px]">store</span>
              <span>إنجاز 33% من ملف المتجر</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 p-2 bg-[#F6F3EC] rounded-xl border border-[#E1DACB]">
            {/* Step 1: Done */}
            <div className="p-2.5 rounded-lg flex items-center justify-between gap-1.5 text-xs border border-[#1F7A6E]/30 bg-emerald-50/60">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#1F7A6E] font-medium">الخطوة 1</span>
                <span className="font-bold text-[#12302B]">التحقق ✓</span>
              </div>
              <span className="w-6 h-6 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm font-bold">check</span>
              </span>
            </div>

            {/* Step 2: Active */}
            <div className="p-2.5 rounded-lg flex items-center justify-between gap-1.5 text-xs bg-[#12302B] text-white shadow-sm font-bold">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#E9B44C]">الخطوة الحالية</span>
                <span className="font-bold text-white text-xs">بيانات المتجر</span>
              </div>
              <span className="w-6 h-6 rounded-full bg-[#E9B44C] text-[#12302B] flex items-center justify-center font-bold text-xs shrink-0">
                2
              </span>
            </div>

            {/* Step 3: Upcoming */}
            <div className="p-2.5 rounded-lg flex items-center justify-between gap-1.5 text-xs bg-white/80 border border-transparent">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#576b66]">الخطوة 3</span>
                <span className="font-medium text-[#12302B]">الهوية والوصف</span>
              </div>
              <span className="w-6 h-6 rounded-full bg-[#E1DACB] text-[#576b66] flex items-center justify-center font-bold text-xs shrink-0">
                3
              </span>
            </div>

            {/* Step 4 */}
            <div className="p-2.5 rounded-lg flex items-center justify-between gap-1.5 text-xs bg-white/50 opacity-70">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#576b66]">الخطوة 4</span>
                <span className="font-medium text-[#576b66]">التوصيل والرسوم</span>
              </div>
              <span className="w-6 h-6 rounded-full bg-[#E1DACB] text-[#576b66] flex items-center justify-center font-bold text-xs shrink-0">
                4
              </span>
            </div>

            {/* Step 5 */}
            <div className="p-2.5 rounded-lg flex items-center justify-between gap-1.5 text-xs bg-white/50 opacity-70">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#576b66]">الخطوة 5</span>
                <span className="font-medium text-[#576b66]">المستحقات</span>
              </div>
              <span className="w-6 h-6 rounded-full bg-[#E1DACB] text-[#576b66] flex items-center justify-center font-bold text-xs shrink-0">
                5
              </span>
            </div>

            {/* Step 6 */}
            <div className="p-2.5 rounded-lg flex items-center justify-between gap-1.5 text-xs bg-white/50 opacity-70">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#576b66]">الخطوة الأخيرة</span>
                <span className="font-medium text-[#576b66]">الاعتماد</span>
              </div>
              <span className="w-6 h-6 rounded-full bg-[#E1DACB] text-[#576b66] flex items-center justify-center font-bold text-xs shrink-0">
                6
              </span>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Form Column */}
          <section className="lg:col-span-8 bg-white rounded-2xl p-5 sm:p-6 md:p-7 border border-[#E1DACB] shadow-xs">
            <form onSubmit={handleContinue} className="space-y-5">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs sm:text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">error</span>
                  <span>{error}</span>
                </div>
              )}

              {/* 1. Store Name Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs sm:text-sm font-bold text-[#12302B] flex items-center gap-1.5" htmlFor="storeName">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-[20px]">storefront</span>
                    اسم المتجر التجاري أو البوتيك
                    <span className="text-[#ba1a1a] text-sm">*</span>
                  </label>
                  <span className="text-xs text-[#576b66]">كما سيظهر لزبائنك في غزة</span>
                </div>
                <div className="relative rounded-xl shadow-xs">
                  <input
                    id="storeName"
                    name="storeName"
                    type="text"
                    required
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    placeholder="مثال: بوتيك لمسة للأزياء"
                    className="w-full h-12 pr-11 pl-4 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] font-medium focus:ring-2 focus:ring-[#1F7A6E] focus:border-[#1F7A6E] transition-all text-xs sm:text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#1F7A6E]">
                    <span className="material-symbols-outlined text-[20px]">badge</span>
                  </div>
                </div>
                <p className="text-xs text-[#576b66]">
                  يُفضّل كتابة الاسم الدقيق المستخدم على واجهة محلك أو صفحات التواصل.
                </p>
              </div>

              {/* 2. Social Media Link */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs sm:text-sm font-bold text-[#12302B] flex items-center gap-1.5" htmlFor="storeSocial">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-[20px]">link</span>
                    رابط صفحة المتجر على إنستغرام أو فيسبوك
                    <span className="text-[#ba1a1a] text-sm">*</span>
                  </label>
                  <span className="text-xs text-[#576b66]">للتحقق السريع وتفعيل البوتيك</span>
                </div>
                <div className="relative rounded-xl shadow-xs" dir="ltr">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1F7A6E]">
                    <span className="material-symbols-outlined text-[20px]">public</span>
                  </div>
                  <input
                    id="storeSocial"
                    name="storeSocial"
                    type="text"
                    required
                    value={storeSocial}
                    onChange={(e) => setStoreSocial(e.target.value)}
                    placeholder="instagram.com/boutique_lamsa"
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] font-medium text-left focus:ring-2 focus:ring-[#1F7A6E] focus:border-[#1F7A6E] transition-all text-xs sm:text-sm"
                  />
                </div>
                <p className="text-xs text-[#576b66]">
                  سيقوم فريقنا بالاطلاع على تشكيلة ملابسك الحالية لاعتماد جودة الصور والمنتجات.
                </p>
              </div>

              {/* 3. Fashion Categories */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <label className="text-xs sm:text-sm font-bold text-[#12302B] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-[20px]">checkroom</span>
                    فئات الأزياء التي يبيعها المتجر حصراً
                    <span className="text-[#ba1a1a] text-sm">*</span>
                  </label>
                  <span className="text-xs text-[#1F7A6E] font-semibold">(يمكنك اختيار أكثر من فئة)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {/* Category 1 */}
                  <label
                    onClick={() => toggleCategory('women')}
                    className={`relative flex items-center p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                      categories.women
                        ? 'border-[#1F7A6E] bg-emerald-50/40'
                        : 'border-[#E1DACB] bg-white'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={categories.women}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-[#1F7A6E] ml-3"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#12302B]">أزياء نسائية</div>
                      <div className="text-[11px] text-[#576b66]">فساتين، أطقم، ملابس يومية</div>
                    </div>
                  </label>

                  {/* Category 2 */}
                  <label
                    onClick={() => toggleCategory('men')}
                    className={`relative flex items-center p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                      categories.men
                        ? 'border-[#1F7A6E] bg-emerald-50/40'
                        : 'border-[#E1DACB] bg-white'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={categories.men}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-[#1F7A6E] ml-3"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#12302B]">أزياء رجالية</div>
                      <div className="text-[11px] text-[#576b66]">رسمي، كاجوال، قمصان</div>
                    </div>
                  </label>

                  {/* Category 3 */}
                  <label
                    onClick={() => toggleCategory('abayas')}
                    className={`relative flex items-center p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                      categories.abayas
                        ? 'border-[#1F7A6E] bg-emerald-50/40'
                        : 'border-[#E1DACB] bg-white'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={categories.abayas}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-[#1F7A6E] ml-3"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#12302B]">عبايات وشالات</div>
                      <div className="text-[11px] text-[#576b66]">عبايات خليجية، حجابات</div>
                    </div>
                  </label>

                  {/* Category 4 */}
                  <label
                    onClick={() => toggleCategory('shoes')}
                    className={`relative flex items-center p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                      categories.shoes
                        ? 'border-[#1F7A6E] bg-emerald-50/40'
                        : 'border-[#E1DACB] bg-white'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={categories.shoes}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-[#1F7A6E] ml-3"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#12302B]">أحذية وسنيكرز</div>
                      <div className="text-[11px] text-[#576b66]">رياضية، أحذية كعب، سهرة</div>
                    </div>
                  </label>

                  {/* Category 5 */}
                  <label
                    onClick={() => toggleCategory('kids')}
                    className={`relative flex items-center p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                      categories.kids
                        ? 'border-[#1F7A6E] bg-emerald-50/40'
                        : 'border-[#E1DACB] bg-white'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={categories.kids}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-[#1F7A6E] ml-3"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#12302B]">أزياء أطفال</div>
                      <div className="text-[11px] text-[#576b66]">بناتي وولادي للمناسبات</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-[#E1DACB] flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => navigate('/merchant/otp')}
                  className="w-full sm:w-auto px-5 h-11 rounded-xl border border-[#12302B]/30 hover:bg-[#F6F3EC] text-[#12302B] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  <span>السابق (التحقق من الهاتف)</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 h-11 rounded-xl bg-[#E9B44C] hover:bg-[#dda437] text-[#12302B] font-bold text-xs sm:text-sm shadow-sm hover:shadow flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>متابعة إلى شعار ووصف المتجر (الخطوة 3)</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                </button>
              </div>
            </form>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#12302B]">
                <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">support_agent</span>
                <h3 className="text-sm font-bold">دليل المعالجة والمساعدة الفورية</h3>
              </div>
              <div className="p-3 rounded-xl bg-[#F6F3EC] border border-[#E1DACB] text-xs">
                <span className="font-bold text-[#12302B] block mb-1">ما المشكلة الشائعة؟</span>
                عدم تطابق اسم البوتيك مع رابط صفحة إنستغرام أو إدخال رابط مغلق.
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/60 border border-[#1F7A6E]/20 text-xs">
                <span className="font-bold text-[#1F7A6E] block mb-1">كيف تصلحها ببساطة؟</span>
                اكتب معرف الحساب فقط مثل <span className="font-mono bg-white px-1 py-0.5 rounded border border-[#1F7A6E]/30">@boutique_name</span> وسيقوم النظام بتنسيقه تلقائياً.
              </div>
            </div>

            <div className="bg-[#12302B] text-white rounded-2xl p-5 shadow-md space-y-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E9B44C] text-xl">verified_user</span>
                <span className="text-xs font-bold text-[#E9B44C]">بياناتك محمية وموثقة</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                تلتزم منصة تبادل بسرية بيانات المبيعات والمواقع الجغرافية لمستودعات البوتيكات الشريكة في غزة، وتستخدم المعلومات المرفوعة فقط لإعداد حساب التاجر.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
