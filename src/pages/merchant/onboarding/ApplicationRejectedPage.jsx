import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function ApplicationRejectedPage() {
  const navigate = useNavigate();
  const [waitlistJoined, setWaitlistJoined] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Top Reference Strip */}
        <section className="bg-white rounded-xl p-4 mb-6 border border-[#E1DACB] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#F6F3EC] flex items-center justify-center text-[#12302B]">
              <span className="material-symbols-outlined">receipt_long</span>
            </div>
            <div>
              <div className="text-gray-500 text-xs">الرقم المرجعي لطلب انضمام المتجر</div>
              <div className="text-sm font-bold text-[#12302B] font-mono dir-ltr">#TBD-M-2026-4892</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              <span>تاريخ التقديم: 14 مارس 2026</span>
            </div>
            <div className="h-3 w-px bg-gray-300"></div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <span>النطاق الجغرافي: مدينة غزة - الرمال</span>
            </div>
          </div>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Status Column (8 cols) */}
          <section className="lg:col-span-8 flex flex-col gap-6">
            {/* 1. Core Decline Status Card */}
            <article className="bg-white rounded-2xl border border-red-200 p-6 md:p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-red-600"></div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-700 mb-5 border border-red-200">
                <span className="material-symbols-outlined text-lg">cancel</span>
                <span className="text-xs font-bold">نعتذر، لم يتم قبول طلب الانضمام في الوقت الحالي</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-xl md:text-2xl font-bold text-[#12302B] mb-3">
                حالة طلب انضمام متجر العناية والعطور
              </h1>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                نشكر لكم اهتمامكم بالانضمام إلى شبكة تبادل لبرامج الولاء ومكافآت المتاجر في قطاع غزة. نود مشاركتكم نتيجة التقييم التنظيمي لطلبكم بكل وضوح وشفافية.
              </p>

              {/* Explicit Polite Reason Box */}
              <div className="bg-[#F6F3EC] rounded-xl p-5 border-r-4 border-red-600 mb-5">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-600 mt-0.5">info</span>
                  <div>
                    <span className="text-sm font-bold text-[#12302B] block mb-1.5">سبب القرار التنظيمي:</span>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      النشاط التجاري المرفوع يختص بمنتجات العناية ومستحضرات التجميل والعطور، في حين تقتصر منصة تبادل في نسختها الحالية (V1) حصرياً على متاجر الملابس والأزياء والأحذية والعبايات في قطاع غزة.
                    </p>
                  </div>
                </div>
              </div>

              {/* Respectful Clarification Notice */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 text-gray-600 text-xs border border-gray-200">
                <span className="material-symbols-outlined text-[#1F7A6E]">verified</span>
                <p>
                  هذا القرار تنظيمي يتعلق بنطاق تخصص المنصة القطاعي ولا يقلل من جودة نشاطكم التجاري المميز.
                </p>
              </div>
            </article>

            {/* 2. Constructive Guidance & Alternative Options */}
            <article className="bg-white rounded-2xl border border-[#E1DACB] p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                <div>
                  <h2 className="text-base font-bold text-[#12302B]">المسارات البديلة والخطوات القادمة المتاحة لك</h2>
                  <p className="text-xs text-gray-500 mt-0.5">حرصنا على توفير خيارات عملية لدعم نمو متجركم ضمن منظومة تبادل</p>
                </div>
                <span className="material-symbols-outlined text-[#E9B44C]">route</span>
              </div>

              <div className="space-y-4">
                {/* Option 1: Re-apply under fashion */}
                <div className="p-5 rounded-xl border border-[#E1DACB] hover:border-[#1F7A6E] transition-all bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1F7A6E]/10 flex items-center justify-center text-[#1F7A6E] shrink-0">
                      <span className="material-symbols-outlined">checkroom</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-sm font-bold text-[#12302B]">الخيار الأول: إعادة التقديم بفئة أزياء وأحذية</h3>
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded">موصى به</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">
                        إذا كان لديكم فرع أو قسم متخصص بالملابس أو العبايات أو الأحذية النسائية/الرجالية، يمكنكم تعديل النشاط للبدء فوراً.
                      </p>
                      <button
                        onClick={() => navigate('/merchant/onboarding/store-info')}
                        className="px-4 py-2 rounded-lg bg-[#12302B] text-[#E9B44C] text-xs font-bold hover:bg-[#1F7A6E] transition-colors"
                      >
                        تعديل النشاط إلى أزياء وأحذية ←
                      </button>
                    </div>
                  </div>
                </div>

                {/* Option 2: Join Waitlist */}
                <div className="p-5 rounded-xl border border-[#E1DACB] bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E9B44C]/20 flex items-center justify-center text-[#835400] shrink-0">
                      <span className="material-symbols-outlined">upcoming</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-[#12302B] mb-1">الخيار الثاني: الانضمام لقائمة انتظار فئات العطور والتجميل</h3>
                      <p className="text-xs text-gray-600 mb-3">
                        سنقوم بإشعاركم بمجرد فتح التوسع للقطاعات التجارية الإضافية في غزة خلال التحديثات القادمة لمنصة تبادل.
                      </p>
                      {waitlistJoined ? (
                        <div className="flex items-center gap-2 text-xs text-emerald-700 font-bold">
                          <span className="material-symbols-outlined text-sm">check_circle</span>
                          تم تسجيلكم في قائمة الانتظار ذات الأولوية!
                        </div>
                      ) : (
                        <button
                          onClick={() => setWaitlistJoined(true)}
                          className="px-4 py-2 rounded-lg bg-[#F6F3EC] border border-[#E1DACB] text-[#12302B] text-xs font-bold hover:bg-white transition-colors"
                        >
                          تأكيد الانضمام لقائمة الانتظار
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Right Support Column (4 cols) */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white border border-[#E1DACB] rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-[#12302B] mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#1F7A6E]">support_agent</span>
                مركز دعم ومساندة التجار
              </h3>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                هل تعتقد أن هناك خطأ في تصنيف متجركم؟ فريقنا مستعد لمراجعة ملفكم يدوياً والتواصل معكم هاتفياً.
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/970599123456"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-[#12302B] text-[#12302B] text-xs font-bold hover:bg-[#12302B]/5 transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-base text-[#1F7A6E]">chat</span>
                  محادثة مسؤول المراجعة عبر واتساب
                </a>

                <Link
                  to="/"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F6F3EC] text-gray-700 text-xs font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-1"
                >
                  العودة للصفحة الرئيسية
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
