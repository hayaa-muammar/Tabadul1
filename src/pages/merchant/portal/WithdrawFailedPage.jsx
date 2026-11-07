import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function WithdrawFailedPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      {/* Breadcrumb Bar */}
      <div className="w-full bg-[#EFECE4] border-b border-[#E1DACB] px-4 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <Link to="/merchant/dashboard" className="hover:text-[#12302B]">لوحة التحكم</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <Link to="/merchant/wallet" className="hover:text-[#12302B]">المحفظة والتحويلات المالية</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="font-bold text-red-700 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">error</span>
              حالة طلب السحب: تعذر التحويل
            </span>
          </div>
          <div className="text-[11px] text-[#835400] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            آخر فحص وتحديث: اليوم، 11:42 صباحاً
          </div>
        </div>
      </div>

      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <section className="rounded-2xl border border-red-200 bg-red-50/70 p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  error
                </span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-red-900">
                    تعذر إتمام طلب السحب الفوري
                  </h1>
                  <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 font-bold text-xs px-3 py-1 rounded-full border border-red-200">
                    <span className="material-symbols-outlined text-xs">block</span>
                    الطلب معلق للتدقيق
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                  لم نتمكن من إتمام تحويل المبلغ المطلوب إلى <strong className="text-[#12302B]">الحساب البنكي / المحفظة</strong> في الوقت الحالي بسبب تجاوز سقف الرصيد المتاح أو وجود فحص أمني روتيني. <strong className="text-[#12302B]">رصيدك المالي محفوظ بالكامل في محفظتك ولم يُخصم منه أي شيكل.</strong>
                </p>

                <div className="mt-4 flex items-center gap-3 bg-white/90 p-3 rounded-xl border border-red-200 text-xs text-red-900">
                  <span className="material-symbols-outlined text-red-600 text-base">verified_user</span>
                  <span><strong>ضمان الأمان المالي:</strong> رصيد المبيعات مؤمن داخل حساب الضمان المصرفي لدى شبكة تبادل، ويمكنك السحب مجدداً فور التحقق.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Solution & Action Card */}
          <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 shadow-sm space-y-4 text-xs">
            <h2 className="text-sm font-bold text-[#12302B] pb-2 border-b border-gray-100">
              ما الذي يمكنك فعله الآن؟
            </h2>

            <div className="space-y-3">
              <div className="p-3.5 bg-[#F6F3EC] rounded-xl border border-[#E1DACB]">
                <strong className="text-[#12302B] block mb-1">1. التحقق من الرصيد المتاح للسحب:</strong>
                <p className="text-gray-600">
                  تأكد من أن المبلغ المطلوب لا يتجاوز الرصيد الحر الجاهز للتحويل (4,850 ₪)، حيث لا يمكن سحب مبالغ الأمانة المعلّقة (Escrow) حتى إدخال كود الاستلام من قبل الزبونة.
                </p>
              </div>

              <div className="p-3.5 bg-[#F6F3EC] rounded-xl border border-[#E1DACB]">
                <strong className="text-[#12302B] block mb-1">2. مطابقة رقم الآيبان أو محفظة جوال باي:</strong>
                <p className="text-gray-600">
                  تأكد من أن حساب التحويل لا يحتوي على أي حظر مصرفي نشط داخل القطاع.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate('/merchant/wallet/withdraw')}
                className="px-6 py-3 bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] font-bold text-xs rounded-xl shadow-sm transition-all active:scale-95 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-base">refresh</span>
                <span>إعادة محاولة السحب الآن</span>
              </button>

              <a
                href="https://wa.me/970599123456"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-white border border-[#12302B] text-[#12302B] hover:bg-[#F6F3EC] font-bold text-xs rounded-xl transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-base text-[#1F7A6E]">chat</span>
                <span>التواصل مع الدعم الفني المالي عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar (4 cols) */}
        <aside className="lg:col-span-4 space-y-6 text-xs">
          <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-[#12302B] pb-2 border-b border-gray-100">تفاصيل الحساب</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>المتجر:</span>
                <span className="font-bold text-[#12302B]">بوتيك لمسة غزة</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>الرصيد المالي المتاح:</span>
                <span className="font-bold text-[#1F7A6E]">4,850.00 ₪</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>الرصيد المعلّق:</span>
                <span className="font-bold text-[#835400]">1,320.00 ₪</span>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
