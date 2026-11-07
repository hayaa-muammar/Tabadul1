import React from 'react';
import { Link } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function DisbursementVoucherPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <div className="no-print">
        <MerchantHeader />
      </div>

      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 flex-1 flex flex-col gap-6">
        {/* Navigation & Actions Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/merchant/wallet" className="hover:text-[#12302B]">المحفظة والتحويلات</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <Link to="/merchant/wallet/transfers" className="hover:text-[#12302B]">سجل التحويلات</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="font-bold text-[#1F7A6E]">سند الصرف المالي #VCH-2026-9941</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              type="button"
              className="px-5 py-2.5 bg-[#12302B] hover:bg-[#1F7A6E] text-[#E9B44C] font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">print</span>
              <span>طباعة سند الصرف</span>
            </button>

            <Link
              to="/merchant/wallet"
              className="px-4 py-2.5 bg-white border border-[#E1DACB] text-[#12302B] hover:bg-gray-50 font-bold text-xs rounded-xl transition-all"
            >
              العودة للمحفظة
            </Link>
          </div>
        </div>

        {/* OFFICIAL VOUCHER CARD */}
        <div
          id="official-voucher-card"
          className="bg-white rounded-3xl border-2 border-[#12302B] p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-6"
        >
          {/* Header of Voucher */}
          <div className="flex items-start justify-between pb-6 border-b-2 border-[#12302B]">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#12302B] text-[#E9B44C] flex items-center justify-center font-black text-xl">
                  تبادل
                </div>
                <div>
                  <h1 className="text-xl font-black text-[#12302B]">منصة تبادل لبرامج مكافآت وولاء المتاجر</h1>
                  <span className="text-xs text-[#1F7A6E] font-bold">بوابة تسوية المستحقات المالية الرسمية 2026</span>
                </div>
              </div>
            </div>

            <div className="text-left text-xs space-y-1">
              <span className="bg-[#E9B44C]/20 text-[#835400] font-mono font-bold px-3 py-1 rounded-full inline-block">
                #VCH-2026-9941
              </span>
              <span className="text-gray-500 block">تاريخ الإصدار: 14 أكتوبر 2026</span>
            </div>
          </div>

          {/* Title Banner */}
          <div className="text-center py-2 bg-[#F6F3EC] rounded-xl border border-[#E1DACB]">
            <h2 className="text-lg font-black text-[#12302B]">سند صرف وتحويل مالي رسمي (Disbursement Voucher)</h2>
          </div>

          {/* Key Particulars Table */}
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl border border-gray-100 bg-[#F6F3EC]/40">
              <div>
                <span className="text-gray-500 block mb-1">اسم المتجر المستفيد:</span>
                <span className="font-bold text-sm text-[#12302B]">بوتيك لمسة (Lamsa Boutique)</span>
                <span className="text-gray-500 block mt-0.5">سجل تجاري / ترخيص: غزة - الرمال #4892</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">الجهة المالية المستلمة:</span>
                <span className="font-bold text-sm text-[#12302B]">بنك فلسطين - فرع الرمال، غزة</span>
                <span className="font-mono text-gray-600 block mt-0.5 dir-ltr text-right">PS04PALS00001234567890123456</span>
              </div>
            </div>

            {/* Amount Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#12302B] to-[#1F7A6E] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#E9B44C] font-bold block mb-1">المبلغ الصافي المصروف رقماً:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">4,850.00</span>
                  <span className="text-base text-[#E9B44C] font-bold">شيكل جديد (ILS)</span>
                </div>
              </div>
              <div className="text-left sm:text-right border-t sm:border-t-0 sm:border-r border-white/20 pt-3 sm:pt-0 sm:pr-6">
                <span className="text-xs text-white/70 block mb-1">المبلغ كتابة بالحروف:</span>
                <span className="font-bold text-sm text-white">أربعة آلاف وثمانمائة وخمسون شيكلاً لا غير.</span>
              </div>
            </div>

            {/* Description */}
            <div className="p-4 rounded-xl border border-gray-200 space-y-1">
              <span className="text-gray-500 font-bold block">بيان الصرف وتفاصيل التسوية:</span>
              <p className="text-gray-700 leading-relaxed">
                قيمة تسوية مبيعات منتجات الأزياء والأحذية عبر تطبيق ومنصة تبادل للفترة من 07 أكتوبر 2026 إلى 14 أكتوبر 2026، بعد تأكيد استلام كافة الطلبات بنظام كود التحقق السري (PIN)، متضمنةً تعويضات قسائم نقاط الولاء المستبدلة.
              </p>
            </div>
          </div>

          {/* Signatures & Seal */}
          <div className="pt-6 border-t-2 border-dashed border-[#12302B] grid grid-cols-1 sm:grid-cols-3 gap-6 items-end text-xs text-center">
            <div>
              <span className="text-gray-500 block mb-3">إعداد وتدقيق الحسابات</span>
              <span className="font-bold text-[#12302B] block">الدائرة المالية لمنصة تبادل</span>
              <span className="text-[10px] text-emerald-700 font-bold">مصادق عليه إلكترونياً ✓</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#E9B44C] p-1 flex items-center justify-center bg-amber-50 shadow-inner">
                <div className="w-full h-full rounded-full border border-dashed border-[#835400] flex flex-col items-center justify-center text-[9px] text-[#835400] font-black leading-tight">
                  <span>منصة تبادل</span>
                  <span>معتمد 2026</span>
                  <span>SEAL</span>
                </div>
              </div>
              <span className="text-[10px] text-gray-400 mt-1">الختم المالي الرقمي</span>
            </div>

            <div>
              <span className="text-gray-500 block mb-3">توقيع المستفيد (المتجر)</span>
              <span className="font-bold text-[#12302B] block">بوتيك لمسة - غزة</span>
              <span className="text-[10px] text-gray-400">سند موثق إلكترونياً</span>
            </div>
          </div>
        </div>
      </main>

      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
}
