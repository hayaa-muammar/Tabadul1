import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function TransferHistoryPage() {
  const [filterPeriod, setFilterPeriod] = useState('all');

  const transfers = [
    {
      id: 'TRX-PAYOUT-2026-9941',
      date: '14 أكتوبر 2026',
      time: '02:45 م',
      amount: '4,850.00 ₪',
      method: 'بنك فلسطين - IBAN',
      destination: 'PS04PALS00001234567890123456',
      status: 'success',
      statusLabel: 'مكتمل بنجاح',
      hasVoucher: true
    },
    {
      id: 'TRX-PAYOUT-2026-8812',
      date: '07 أكتوبر 2026',
      time: '10:15 ص',
      amount: '3,240.00 ₪',
      method: 'جوال باي (Jawwal Pay)',
      destination: '0599-876543',
      status: 'success',
      statusLabel: 'مكتمل بنجاح',
      hasVoucher: true
    },
    {
      id: 'TRX-PAYOUT-2026-7640',
      date: '30 سبتمبر 2026',
      time: '11:00 ص',
      amount: '5,180.00 ₪',
      method: 'بنك فلسطين - IBAN',
      destination: 'PS04PALS00001234567890123456',
      status: 'success',
      statusLabel: 'مكتمل بنجاح',
      hasVoucher: true
    },
    {
      id: 'TRX-PAYOUT-2026-6520',
      date: '23 سبتمبر 2026',
      time: '04:20 م',
      amount: '2,900.00 ₪',
      method: 'جوال باي (Jawwal Pay)',
      destination: '0599-876543',
      status: 'success',
      statusLabel: 'مكتمل بنجاح',
      hasVoucher: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 flex-1 flex flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Link to="/merchant/dashboard" className="hover:text-[#12302B]">لوحة التحكم</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_left</span>
          <Link to="/merchant/wallet" className="hover:text-[#12302B]">المحفظة والتحويلات</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_left</span>
          <span className="font-bold text-[#1F7A6E]">سجل التحويلات السابقة</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E1DACB] shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] bg-[#12302B]/10 text-[#12302B] font-bold">M-07</span>
              <h1 className="text-xl sm:text-2xl font-black text-[#12302B]">سجل التحويلات والسحوبات المالية</h1>
            </div>
            <p className="text-xs text-gray-600">أرشيف كافة دفعات الأرباح المحولة لحسابكم البنكي ومحفظتكم الإلكترونية مع سندات الصرف المعتمدة.</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/merchant/wallet/withdraw"
              className="px-5 py-2.5 bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] font-extrabold text-xs rounded-xl shadow-sm transition-all active:scale-95"
            >
              + طلب سحب رصيد فوري
            </Link>
          </div>
        </div>

        {/* Transfers Table / Cards */}
        <div className="bg-white rounded-2xl border border-[#E1DACB] shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-bold text-[#12302B]">إجمالي الحوالات المنفذة (4 حوالات بمجموع 16,170 ₪)</span>

            <div className="flex items-center gap-2">
              <span className="text-gray-500">الفترة:</span>
              <select
                value={filterPeriod}
                onChange={(e) => setFilterPeriod(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-[#E1DACB] text-xs font-semibold"
              >
                <option value="all">كافة الفترات (2026)</option>
                <option value="october">أكتوبر 2026</option>
                <option value="september">سبتمبر 2026</option>
              </select>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {transfers.map((t) => (
              <div key={t.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#F6F3EC]/50 transition-colors text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-[#12302B]">{t.id}</span>
                    <span className="bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">
                      {t.statusLabel}
                    </span>
                  </div>
                  <div className="text-gray-500 flex items-center gap-2">
                    <span>{t.date} - {t.time}</span>
                    <span>•</span>
                    <span>{t.method}</span>
                  </div>
                  <span className="font-mono text-gray-400 text-[11px] block dir-ltr text-right">{t.destination}</span>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6">
                  <div className="text-left">
                    <span className="text-lg font-black text-[#1F7A6E] block">{t.amount}</span>
                    <span className="text-[10px] text-gray-400">عمولة المعالجة: 0 ₪</span>
                  </div>

                  <Link
                    to="/merchant/wallet/disbursement-voucher"
                    className="px-4 py-2 bg-white border border-[#E1DACB] text-[#12302B] hover:bg-[#F6F3EC] rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-sm">receipt</span>
                    <span>سند الصرف</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
