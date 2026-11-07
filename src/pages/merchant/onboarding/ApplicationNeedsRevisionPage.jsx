import React from 'react';
import { useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function ApplicationNeedsRevisionPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Top Reference & Quick Metric Strip */}
        <section className="bg-white rounded-2xl p-4 sm:p-5 mb-6 border border-[#E1DACB] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#F6F3EC] px-3 py-1 rounded-lg text-primary font-bold border border-[#E1DACB] text-xs">
              مرجع الطلب: #TBD-M-2026-4892
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-600">بوتيك لمسة (Lamsa Boutique)</span>
            <span className="text-gray-300">•</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs bg-[#E9B44C]/20 text-[#835400] font-bold">
              أزياء نسائية وأحذية • غزة - شارع الرمال
            </span>
          </div>

          <div className="flex items-center gap-3 bg-[#F6F3EC] px-4 py-2 rounded-xl border border-[#E1DACB]">
            <div className="text-left pl-3 border-l border-[#E1DACB]">
              <span className="block text-[11px] text-gray-500">اكتمال الطلب</span>
              <span className="text-base text-[#12302B] font-extrabold">85%</span>
            </div>
            <div className="w-24 bg-gray-200 h-2 rounded-full overflow-hidden">
              <div className="bg-[#E9B44C] h-full rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </section>

        {/* PROMINENT WARNING & ACTION-REQUIRED STATUS CARD */}
        <section className="bg-white rounded-2xl border-2 border-[#E9B44C] p-6 md:p-8 shadow-sm mb-8 relative overflow-hidden">
          <div className="relative z-10">
            {/* Status Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#E9B44C]/20 text-[#835400] text-sm font-bold border border-[#E9B44C]/40">
                <span className="material-symbols-outlined text-xl text-[#835400]">warning</span>
                <span>الطلب يحتاج تعديلاً لاستكمال الاعتماد</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-red-50 text-red-700 font-bold text-xs border border-red-200">
                <span className="material-symbols-outlined text-base">schedule</span>
                <span>مهلة التعديل المتاحة: 48 ساعة للحفاظ على أولوية مراجعة الطلب.</span>
              </div>
            </div>

            {/* Explanatory Statement */}
            <div className="bg-[#F6F3EC] border border-[#E1DACB] rounded-xl p-4 mb-6">
              <p className="text-sm md:text-base text-[#12302B] font-bold leading-relaxed">
                الطلب مكتمل بنسبة 85%، ولكن يلزم تعديل بندين أساسيين لاعتماد المتجر رسمياً:
              </p>
              <p className="text-xs text-gray-600 mt-1">
                قام فريق التحقق الفني بمراجعة وثائق متجركم بدقة، وتم تحديد ملاحظتين تتطلبان تصحيحاً بسيطاً قبل إطلاق رمز المكافآت الترويجي في منصة تبادل.
              </p>
            </div>

            {/* Issues and Exact Solutions List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Issue 1: Cover Image & Logo */}
              <div className="bg-white border border-[#E1DACB] rounded-xl p-5 hover:border-[#1F7A6E] transition-colors duration-200">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E9B44C]/20 text-[#835400] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl">photo_camera</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-bold text-[#12302B]">1. صورة الغلاف والشعار (الخطوة 3)</h3>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E9B44C]/30 text-[#835400]">مطلوب تعديل</span>
                    </div>
                    <div className="space-y-2 mt-2 text-xs text-[#12302B]">
                      <p className="text-red-600 font-semibold flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">cancel</span>
                        صورة غلاف واجهة المتجر الحالية منخفضة الدقة (أقل من 600 بكسل).
                      </p>
                      <div className="p-3 bg-[#F6F3EC] rounded-lg text-gray-700 text-xs border-r-2 border-[#12302B]">
                        <strong className="text-[#12302B] block mb-0.5">الحل المطلوب:</strong>
                        يُرجى رفع صورة واضحة بدقة 1200×600 بكسل على الأقل تعكس واجهة المحل أو تشكيلة الأزياء المتوفرة بمتجركم في الرمال.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Issue 2: Financial Wallet Data */}
              <div className="bg-white border border-[#E1DACB] rounded-xl p-5 hover:border-[#1F7A6E] transition-colors duration-200">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E9B44C]/20 text-[#835400] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-bold text-[#12302B]">2. بيانات المحفظة المالية (الخطوة 5)</h3>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E9B44C]/30 text-[#835400]">عدم تطابق الاسم</span>
                    </div>
                    <div className="space-y-2 mt-2 text-xs text-[#12302B]">
                      <p className="text-red-600 font-semibold flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">cancel</span>
                        الاسم الرباعي المدخل لمالك الحساب يختلف بحرف واحد عن الاسم المسجل رسمياً في محفظة جوال باي (Jawwal Pay).
                      </p>
                      <div className="p-3 bg-[#F6F3EC] rounded-lg text-gray-700 text-xs border-r-2 border-[#12302B]">
                        <strong className="text-[#12302B] block mb-0.5">الحل المطلوب:</strong>
                        يُرجى مطابقة الاسم تماماً كما يظهر في كشف المحفظة أو الهوية لتجنب تعليق الحوالات الأسبوعية ونقاط الاسترداد النقدي.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTION BAR */}
            <div className="pt-6 border-t border-[#E1DACB] flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={() => navigate('/merchant/onboarding/branding')}
                  type="button"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 h-12 bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] text-sm font-extrabold rounded-xl shadow-sm transition-all duration-150 active:scale-95"
                >
                  <span className="material-symbols-outlined text-base">edit</span>
                  <span>عدّل البيانات وأعد الإرسال الآن (خطوة 3 و 5)</span>
                </button>

                <a
                  href="https://wa.me/970599123456"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-5 h-12 bg-white border border-[#E1DACB] hover:border-[#12302B] text-[#12302B] text-xs font-bold rounded-xl transition-all duration-150"
                >
                  <span className="material-symbols-outlined text-lg text-[#1F7A6E]">chat</span>
                  <span>تواصل مع مسؤول التدقيق عبر واتساب</span>
                </a>
              </div>

              <div className="w-full lg:w-auto text-center lg:text-left text-xs text-gray-500">
                سيتم فحص التعديلات فور حفظها دون إعادة الانتظار في قائمة الطلبات الجديدة.
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
