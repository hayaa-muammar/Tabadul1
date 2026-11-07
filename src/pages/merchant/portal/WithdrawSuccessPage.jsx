import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function WithdrawSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Link to="/merchant/dashboard" className="hover:text-[#12302B]">لوحة التحكم</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_left</span>
          <Link to="/merchant/wallet" className="hover:text-[#12302B]">المحفظة والتحويلات</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_left</span>
          <span className="font-bold text-[#1F7A6E]">نجاح عملية السحب</span>
        </div>

        {/* Primary Celebratory Hero Banner */}
        <section className="bg-gradient-to-l from-[#12302B] via-[#163c35] to-[#1F7A6E] text-white rounded-2xl p-6 lg:p-8 shadow-sm border border-[#1F7A6E]/40 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-right">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#F6F3EC] text-[#12302B] flex items-center justify-center shadow-lg ring-8 ring-[#E9B44C]/30">
              <span className="material-symbols-outlined text-[44px] text-[#1F7A6E]" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>

            <div className="flex-1 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9B44C]/25 text-[#E9B44C] text-xs font-bold border border-[#E9B44C]/30">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                اعتماد فوري معتمد #2026-PALPAY-SUCCESS
              </div>
              <h1 className="text-xl sm:text-3xl text-white font-bold">
                تم قبول طلب السحب وتحويل المبلغ بنجاح!
              </h1>
              <p className="text-xs sm:text-sm text-white/90 max-w-3xl leading-relaxed">
                تمت معالجة وتوثيق حوالتك بنجاح بقيمة{' '}
                <span className="font-bold text-[#E9B44C] text-base">4,850.00 ₪</span>{' '}
                إلى حسابك البنكي المعتمد في <strong className="text-white">بنك فلسطين</strong>، وتم تحديث رصيد محفظتك المتاح فوراً.
              </p>
            </div>
          </div>
        </section>

        {/* Official Bank Slip Receipt Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <section className="lg:col-span-8 bg-white rounded-2xl border border-[#E1DACB] shadow-sm overflow-hidden">
            <div className="bg-[#F6F3EC]/80 border-b border-[#E1DACB] p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#12302B] text-[#E9B44C] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[26px]">receipt_long</span>
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#12302B]">إشعار التسوية والحوالة البنكية الرسمية</h2>
                  <p className="text-xs text-gray-500">سند سحب مالي إلكتروني معتمد لدى سلطة النقد وشبكة تبادل 2026</p>
                </div>
              </div>

              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span>
                تم الصرف والتحويل
              </span>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                <div>
                  <span className="text-gray-400 block mb-1">الرقم المرجعي للحوالة:</span>
                  <span className="font-mono font-bold text-sm text-[#12302B]">TRX-PAYOUT-2026-9941</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1">وقت وتاريخ التنفيذ:</span>
                  <span className="font-bold text-[#12302B]">14 أكتوبر 2026 - 02:45 مساءً</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                <div>
                  <span className="text-gray-400 block mb-1">المبلغ المحول:</span>
                  <span className="text-lg font-black text-[#1F7A6E]">4,850.00 ₪</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1">رسوم المعالجة الفورية:</span>
                  <span className="text-emerald-700 font-bold">0.00 ₪ (مجاناً)</span>
                </div>
              </div>

              <div className="p-4 bg-[#F6F3EC] rounded-xl border border-[#E1DACB] space-y-1">
                <span className="text-gray-500 block">الحساب المستلم:</span>
                <span className="font-bold text-[#12302B] block text-sm">بنك فلسطين - فرع الرمال، غزة</span>
                <span className="font-mono text-gray-600 block dir-ltr text-right">PS04PALS00001234567890123456</span>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/merchant/wallet/disbursement-voucher"
                  className="px-5 py-2.5 rounded-xl bg-[#12302B] text-[#E9B44C] font-bold hover:bg-[#1F7A6E] transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">print</span>
                  <span>طباعة وعرض سند الصرف المالي</span>
                </Link>

                <button
                  onClick={() => navigate('/merchant/wallet')}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 text-[#12302B] hover:bg-gray-50 font-bold transition-all"
                >
                  العودة للمحفظة
                </button>
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6 text-xs">
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-[#12302B] pb-2 border-b border-gray-100">تحديث الأرصدة التلقائي</h3>
              <div className="flex justify-between items-center text-gray-600">
                <span>الرصيد المتبقي المتاح:</span>
                <span className="font-bold text-[#12302B] text-sm">0.00 ₪</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span>الرصيد المعلّق (أمانة):</span>
                <span className="font-bold text-[#835400] text-sm">1,320.00 ₪</span>
              </div>
              <p className="text-[11px] text-gray-400 pt-2 border-t border-gray-100 leading-relaxed">
                سيتجدد الرصيد المتاح للسحب فور إدخال أكواد الاستلام (PIN) للطلبات الجارية.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
