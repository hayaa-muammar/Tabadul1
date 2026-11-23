import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function StoreBrandingStepPage() {
  const navigate = useNavigate();
  const [tagline, setTagline] = useState('أرقى صيحات الأزياء النسائية والعبايات الخليجية والأحذية العصرية في قطاع غزة');
  const [about, setAbout] = useState(
    'تأسس بوتيك لمسة لتقديم تشكيلات أزياء حصرية ومختارة بعناية للمرأة العصرية في غزة. نضمن جودة الأقمشة الفاخرة وتطابق المقاسات ونوفر خدمة التبديل السريع مع مكافآت ولاء مميزة لكل متسوقة.'
  );
  const [instagram, setInstagram] = useState('instagram.com/lamsa_fashion_gaza');
  const [whatsapp, setWhatsapp] = useState('+970 59 912 3456');
  const [error, setError] = useState('');

  const handleContinue = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setError('');

    if (!tagline.trim()) {
      setError('يرجى إدخال الشعار التسويقي للمتجر.');
      return;
    }
    if (!about.trim() || about.trim().length < 20) {
      setError('يرجى كتابة نبذة تعريفية وافية عن المتجر (20 حرفاً على الأقل).');
      return;
    }

    navigate('/merchant/onboarding/delivery-fees');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col gap-5 sm:gap-6">
        {/* Step Progress Tracker Card */}
        <div className="bg-white rounded-2xl p-5 md:p-6 border border-[#E1DACB] shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF7F4] flex items-center justify-center text-[#1F7A6E]">
                <span className="material-symbols-outlined text-[24px]">store</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-[#12302B]">إعداد وتأهيل متجر الأزياء والأحذية</h2>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E9B44C]/20 text-[#12302B] border border-[#E9B44C]/50">
                    إنجاز 50% من ملف المتجر
                  </span>
                </div>
                <p className="text-xs text-[#576b66] mt-0.5">الخطوة الحالية: الهوية والوصف والواجهة البصرية في قطاع غزة</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#12302B]">التقدم الإجمالي:</span>
              <div className="w-36 h-2.5 bg-[#F6F3EC] rounded-full overflow-hidden border border-[#E1DACB]">
                <div className="bg-gradient-to-r from-[#1F7A6E] to-[#E9B44C] h-full rounded-full w-1/2"></div>
              </div>
              <span className="text-xs font-bold text-[#1F7A6E]">3 من 6</span>
            </div>
          </div>

          {/* Steps Flow Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 border-t border-[#F6F3EC]">
            {/* Step 1: Done */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F6F3EC] border border-[#E1DACB]">
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm font-bold">check</span>
              </div>
              <div className="truncate">
                <div className="text-[11px] text-gray-500 font-medium">الخطوة 1</div>
                <div className="text-xs text-[#12302B] font-bold truncate">التحقق من الهاتف</div>
              </div>
            </div>

            {/* Step 2: Done */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F6F3EC] border border-[#E1DACB]">
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm font-bold">check</span>
              </div>
              <div className="truncate">
                <div className="text-[11px] text-gray-500 font-medium">الخطوة 2</div>
                <div className="text-xs text-[#12302B] font-bold truncate">بيانات المتجر وفئاته</div>
              </div>
            </div>

            {/* Step 3: Current (Active) */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#12302B] text-white shadow-md ring-2 ring-[#E9B44C] relative overflow-hidden">
              <div className="w-7 h-7 rounded-full bg-[#E9B44C] text-[#12302B] flex items-center justify-center font-bold text-xs shrink-0">
                3
              </div>
              <div className="truncate">
                <div className="text-[10px] text-[#E9B44C] font-bold">الخطوة الحالية النشطة</div>
                <div className="text-xs text-white font-bold truncate">الهوية والوصف</div>
              </div>
            </div>

            {/* Step 4: Next */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#E1DACB] opacity-75">
              <div className="w-7 h-7 rounded-full bg-[#E1DACB] text-[#12302B] flex items-center justify-center font-bold text-xs shrink-0">
                4
              </div>
              <div className="truncate">
                <div className="text-[11px] text-gray-400 font-medium">الخطوة القادمة</div>
                <div className="text-xs text-[#12302B] font-bold truncate">التوصيل والرسوم</div>
              </div>
            </div>

            {/* Step 5: Upcoming */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#E1DACB] opacity-60">
              <div className="w-7 h-7 rounded-full bg-[#E1DACB] text-[#12302B] flex items-center justify-center font-bold text-xs shrink-0">
                5
              </div>
              <div className="truncate">
                <div className="text-[11px] text-gray-400 font-medium">خطوة لاحقة</div>
                <div className="text-xs text-gray-600 font-medium truncate">المستحقات والتحويل</div>
              </div>
            </div>

            {/* Step 6: Final */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#E1DACB] opacity-60">
              <div className="w-7 h-7 rounded-full bg-[#E1DACB] text-[#12302B] flex items-center justify-center font-bold text-xs shrink-0">
                6
              </div>
              <div className="truncate">
                <div className="text-[11px] text-gray-400 font-medium">الخطوة الأخيرة</div>
                <div className="text-xs text-gray-600 font-medium truncate">المراجعة والاعتماد</div>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Grid: Form (Col 8) & Sidebar (Col 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form Column (8 cols) */}
          <section className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-7 border border-[#E1DACB] shadow-xs">
              <div className="border-b border-[#F6F3EC] pb-5 mb-5">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg sm:text-xl font-bold text-[#12302B]">الخطوة 3: هوية المتجر البصرية والوصف التعريفي</h1>
                  <span className="px-3 py-1 bg-[#EBF7F4] text-[#1F7A6E] rounded-full text-xs font-bold border border-[#BCE7DF]">
                    متجر نشط: بوتيك لمسة
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#576b66] mt-2 leading-relaxed">
                  الصور والوصف هي واجهة متجرك أمام آلاف المتسوقين في تبادل، احرص على الجودة والوضوح لجذب العملاء في قطاع غزة وتحقيق نسب تحويل أعلى ومكافآت مستمرة.
                </p>
              </div>

              {error && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs sm:text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">error</span>
                  <span>{error}</span>
                </div>
              )}

              {/* Component: Store Logo Dropzone & Preview */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm sm:text-base font-bold text-[#12302B] flex items-center gap-2">
                    <span>شعار المتجر (Store Logo)</span>
                    <span className="text-[#ba1a1a] text-sm font-bold">*</span>
                  </label>
                  <span className="text-xs text-[#576b66] font-medium">مطلوب للظهور في قوائم البحث والبطاقات</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Current Logo Preview */}
                  <div className="md:col-span-4 p-4 rounded-xl bg-[#F6F3EC] border border-[#E1DACB] flex flex-col items-center justify-center text-center">
                    <div className="relative group mb-3">
                      <div className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-[#12302B] text-[#E9B44C] flex items-center justify-center text-3xl font-black">
                        لمسة
                      </div>
                      <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-[#E9B44C] text-[#12302B] flex items-center justify-center shadow" title="موثق">
                        <span className="material-symbols-outlined text-[14px] font-bold">verified</span>
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#12302B]">شعار بوتيك لمسة</span>
                    <span className="text-xs text-[#1F7A6E] font-medium mt-0.5">جاهز للاستخدام الفوري</span>
                    <div className="flex items-center gap-2 mt-3 w-full">
                      <button className="flex-1 py-1.5 px-2 bg-white text-[#12302B] border border-[#E1DACB] rounded-lg text-xs font-bold hover:bg-gray-50 transition" type="button">
                        تغيير الشعار
                      </button>
                    </div>
                  </div>

                  {/* Upload Dropzone */}
                  <div className="md:col-span-8 border-2 border-dashed border-[#1F7A6E]/40 hover:border-[#1F7A6E] bg-[#FAFAF8] rounded-xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center group">
                    <div className="w-12 h-12 rounded-full bg-[#EBF7F4] text-[#1F7A6E] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">cloud_upload</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#12302B] mb-1">
                      اسحب وأفلت صورة الشعار هنا أو <span className="text-[#1F7A6E] underline">استعرض الملفات</span>
                    </div>
                    <p className="text-xs text-[#576b66] mb-2">يدعم صيغ PNG, JPG, SVG عالية الدقة بحد أقصى 5 ميجابايت</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-[#E1DACB] text-[11px] text-[#12302B] font-medium">
                      <span className="material-symbols-outlined text-[14px] text-[#E9B44C]">info</span>
                      <span>المقاس الموصى به: مربع 500×500 بكسل بخلفية شفافة أو بيضاء نقية</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Component: Store Cover / Banner */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <label className="text-sm sm:text-base font-bold text-[#12302B] flex items-center gap-2">
                      <span>صورة الغلاف أو واجهة العرض (Store Banner)</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-normal">موصى به</span>
                    </label>
                    <p className="text-xs text-[#576b66] mt-0.5">تظهر بأعلى صفحة متجرك لعرض تشكيلة الفساتين والعبايات والأحذية بأسلوب بوتيك راقٍ</p>
                  </div>
                  <span className="text-xs font-semibold text-[#1F7A6E]">نسبة 16:9 أو 1200×400 بكسل</span>
                </div>

                <div className="relative w-full h-48 rounded-xl overflow-hidden border border-[#E1DACB] group bg-[#12302B]">
                  <div className="w-full h-full bg-gradient-to-r from-[#12302B] via-[#1F3A5F] to-[#1F7A6E] flex items-center justify-center">
                    <div className="text-center text-white/90">
                      <span className="material-symbols-outlined text-4xl text-[#E9B44C] mb-2">storefront</span>
                      <h3 className="text-lg font-bold">بوتيك لمسة للأزياء والعبايات الفاخرة</h3>
                      <p className="text-xs text-white/70">غزة - شارع عمر المختار • تشكيلة مواسم 2026</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex flex-col justify-between p-4">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-1 rounded-md bg-black/50 backdrop-blur text-white text-xs font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">aspect_ratio</span>
                        1200 × 400 بكسل
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-700/80 backdrop-blur text-white text-xs font-bold">معاينة الغلاف الحالي</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="px-3.5 py-1.5 bg-white text-[#12302B] rounded-lg text-xs font-bold hover:bg-gray-100 transition shadow flex items-center gap-1.5" type="button">
                        <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                        <span>استبدال صورة الغلاف</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Component: Store Short Tagline */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-bold text-[#12302B] flex items-center gap-1.5" htmlFor="tagline">
                    <span>الوصف التعريفي القصير (Tagline)</span>
                    <span className="text-[#ba1a1a] text-sm font-bold">*</span>
                  </label>
                  <span className="text-xs text-[#1F7A6E] font-bold">{tagline.length} / 100 حرف</span>
                </div>
                <div className="relative">
                  <input
                    id="tagline"
                    type="text"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    placeholder="اكتب عبارة جذابة تلخص اختصاص متجرك..."
                    className="w-full h-12 px-4 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] text-xs sm:text-sm focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition outline-none"
                  />
                  <div className="absolute left-3 top-3 text-emerald-600">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  </div>
                </div>
                <p className="text-xs text-[#576b66] mt-1.5">هذا الوصف يظهر أسفل اسم المتجر مباشرة في شاشات العرض والبحث وبطاقات الولاء.</p>
              </div>

              {/* Component: Extended Store Description */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs sm:text-sm font-bold text-[#12302B] flex items-center gap-1.5" htmlFor="about">
                    <span>النبذة التعريفية الموسعة وقصة المتجر (About Store)</span>
                    <span className="text-[#ba1a1a] text-sm font-bold">*</span>
                  </label>
                  <span className="text-xs text-gray-500 font-bold">{about.length} / 400 حرف</span>
                </div>
                <textarea
                  id="about"
                  rows="4"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="اكتب نبذة عن تأسيس المتجر، الضمانات، مصادر الأقمشة وجودة المنتجات..."
                  className="w-full p-4 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] text-xs sm:text-sm focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20 transition outline-none leading-relaxed"
                ></textarea>
                <div className="flex items-center justify-between mt-1.5 text-xs text-[#576b66]">
                  <span>النبذة المتقنة ترفع معدل ثقة الزبائن في برنامج المكافآت بنسبة 38%.</span>
                </div>
              </div>

              {/* Component: Social & Verification Links */}
              <div className="pt-6 border-t border-[#F6F3EC]">
                <h3 className="text-sm sm:text-base font-bold text-[#12302B] mb-1">روابط ووسائل التواصل للتأكيد والمصداقية</h3>
                <p className="text-xs text-[#576b66] mb-4">تساعد فريق التفتيش والاعتماد في التحقق السريع من نشاط متجرك الفعلي.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Instagram */}
                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">حساب إنستغرام المتجر</label>
                    <div className="relative flex items-center">
                      <span className="absolute right-3 text-pink-600 flex items-center">
                        <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                      </span>
                      <input
                        dir="ltr"
                        type="text"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        className="w-full h-11 pr-10 pl-10 rounded-xl border border-emerald-500/60 bg-[#FBFDFB] text-[#12302B] text-xs font-medium focus:border-[#1F7A6E] focus:ring-1 focus:ring-[#1F7A6E] outline-none"
                      />
                      <span className="absolute left-3 text-emerald-600 flex items-center" title="حساب متصل ومؤكد">
                        <span className="material-symbols-outlined text-[18px]">verified_user</span>
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">رقم واتساب خدمة الزبائن</label>
                    <div className="relative flex items-center">
                      <span className="absolute right-3 text-emerald-600 flex items-center">
                        <span className="material-symbols-outlined text-[20px]">chat</span>
                      </span>
                      <input
                        dir="ltr"
                        type="text"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full h-11 pr-10 pl-10 rounded-xl border border-[#E1DACB] bg-white text-[#12302B] text-xs font-medium focus:border-[#1F7A6E] focus:ring-1 focus:ring-[#1F7A6E] outline-none"
                      />
                      <span className="absolute left-3 text-gray-400 text-xs">فلسطين</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alert Note */}
              <div className="mt-6 p-4 rounded-xl bg-[#EBF7F4] border border-[#BCE7DF] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1F7A6E] text-[22px] shrink-0 mt-0.5">auto_awesome</span>
                <div className="text-xs text-[#12302B] leading-relaxed">
                  <strong className="font-bold">فحص الجودة التلقائي:</strong> تم فحص الشعار والغلاف بنجاح وتطابق المعايير التقنية لمنصة تبادل. لن تحتاج للمراجعة اليدوية المطولة وستنتقل للمرحلة التالية مباشرة.
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar & Live Preview (4 cols) */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            {/* Card: Live App Preview Mockup */}
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F6F3EC]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1F7A6E] text-[20px]">smartphone</span>
                  <h3 className="text-xs sm:text-sm font-bold text-[#12302B]">معاينة حية في تطبيق الزبائن</h3>
                </div>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-bold border border-emerald-200">مباشر</span>
              </div>

              {/* Customer Phone Card Simulation */}
              <div className="rounded-2xl border border-[#E1DACB] overflow-hidden bg-[#FAFAF8] shadow-sm">
                <div className="relative h-28 w-full bg-gradient-to-r from-[#12302B] to-[#1F7A6E]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  {/* Cashback Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-[#E9B44C] text-[#12302B] px-2 py-0.5 rounded-full text-[10px] font-black flex items-center gap-1 shadow">
                    <span className="material-symbols-outlined text-[12px]">stars</span>
                    <span>كاش باك 5% نقاط</span>
                  </div>
                  {/* Rating Badge */}
                  <div className="absolute bottom-2 left-2.5 bg-black/60 backdrop-blur text-white px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>4.9 (جديد)</span>
                  </div>
                </div>

                {/* Store Details Area */}
                <div className="p-4 pt-0 relative">
                  <div className="-mt-8 mb-2 flex items-end justify-between">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-2 border-white shadow bg-[#12302B] text-[#E9B44C] flex items-center justify-center font-bold text-lg">
                        لمسة
                      </div>
                      <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#E9B44C] text-[#12302B] flex items-center justify-center text-[10px] font-bold border border-white">✓</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#1F7A6E] bg-[#EBF7F4] px-2 py-1 rounded-full">شريك معتمد</span>
                  </div>

                  <h4 className="text-sm font-bold text-[#12302B]">بوتيك لمسة (Lamsa)</h4>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-1 leading-relaxed">
                    {tagline}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#E1DACB] flex items-center justify-between">
                    <span className="text-[11px] text-[#576b66]">غزة - الرمال</span>
                    <Link
                      to="/stores/lamsa-boutique"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[#1F7A6E] hover:underline"
                    >
                      زيارة المتجر ←
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Box */}
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#12302B]">
                <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">support_agent</span>
                <h3 className="text-xs sm:text-sm font-bold">دليل المعالجة والمساعدة الفورية</h3>
              </div>
              <p className="text-xs text-[#12302B] leading-relaxed">
                ارفع الشعار بصيغة دائرية واضحة، واجعل الغلاف يركز على عينات الملابس بدقة عالية مع تجنب ملء الصورة بالنصوص الإعلانية المزدحمة.
              </p>
              <a
                href="https://wa.me/970599123456"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-[#E1DACB] hover:bg-[#F6F3EC] text-[#12302B] rounded-xl text-xs font-bold transition w-full"
              >
                <span className="material-symbols-outlined text-[18px] text-[#1F7A6E]">support_agent</span>
                <span>مساعدة فورية من فريق التجار في غزة</span>
              </a>
            </div>

            {/* Brand Protection Card */}
            <div className="bg-[#12302B] rounded-2xl p-5 text-white shadow-md">
              <div className="flex items-center gap-2.5 mb-2 text-[#E9B44C]">
                <span className="material-symbols-outlined text-[20px]">shield</span>
                <h4 className="text-xs sm:text-sm font-bold">حماية علامتك التجارية</h4>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                تلتزم منصة تبادل بحماية الملكية الفكرية والعلامة التجارية لمتجرك، ولن يُسمح لأي متجر آخر بنسخ اسمك التجاري أو صورك المرفوعة داخل المنظومة.
              </p>
            </div>
          </aside>
        </div>

        {/* ================= Bottom Navigation / Actions Ribbon ================= */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E1DACB] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-4 z-40">
          {/* Previous Step Button */}
          <button
            type="button"
            onClick={() => navigate('/merchant/onboarding/store-info')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#E1DACB] text-[#12302B] text-xs sm:text-sm font-bold hover:bg-[#F6F3EC] transition active:scale-95 shadow-xs cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            <span>السابق (بيانات المتجر وفئات الأزياء)</span>
          </button>

          {/* Middle Saved Indicator */}
          <div className="flex items-center gap-2 text-xs font-medium text-[#1F7A6E]">
            <span className="material-symbols-outlined text-[16px]">done_all</span>
            <span>جميع التعديلات على الهوية والوصف محفوظة تلقائياً كمسودة</span>
          </div>

          {/* Next Step Button (Golden CTA) */}
          <button
            type="button"
            onClick={handleContinue}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-xl bg-[#E9B44C] hover:bg-[#dca43b] text-[#12302B] text-xs sm:text-sm font-bold transition active:scale-95 shadow-xs cursor-pointer"
          >
            <span>متابعة إلى التوصيل والرسوم (الخطوة 4)</span>
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
