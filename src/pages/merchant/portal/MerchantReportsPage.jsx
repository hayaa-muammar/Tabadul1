import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function MerchantReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const reportRows = [
    {
      period: 'الأسبوع 4 (10 - 16 أكتوبر)',
      orders: 28,
      sales: '6,420.00 ₪',
      commission: '192.60 ₪ (3%)',
      pointsRedeemed: '420 نقطة (42.00 ₪)',
      netPayout: '6,269.40 ₪',
      status: 'تمت التسوية'
    },
    {
      period: 'الأسبوع 3 (03 - 09 أكتوبر)',
      orders: 34,
      sales: '7,850.00 ₪',
      commission: '235.50 ₪ (3%)',
      pointsRedeemed: '580 نقطة (58.00 ₪)',
      netPayout: '7,672.50 ₪',
      status: 'تمت التسوية'
    },
    {
      period: 'الأسبوع 2 (26 سبتمبر - 02 أكتوبر)',
      orders: 26,
      sales: '5,340.00 ₪',
      commission: '160.20 ₪ (3%)',
      pointsRedeemed: '390 نقطة (39.00 ₪)',
      netPayout: '5,218.80 ₪',
      status: 'تمت التسوية'
    },
    {
      period: 'الأسبوع 1 (19 - 25 سبتمبر)',
      orders: 26,
      sales: '5,240.00 ₪',
      commission: '157.20 ₪ (3%)',
      pointsRedeemed: '450 نقطة (45.00 ₪)',
      netPayout: '5,127.80 ₪',
      status: 'تمت التسوية'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 flex-1 flex flex-col gap-6">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E1DACB] shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] bg-[#12302B]/10 text-[#12302B] font-bold">M-14</span>
              <h1 className="text-xl sm:text-2xl font-black text-[#12302B]">التقارير ومؤشرات الأداء المالي</h1>
            </div>
            <p className="text-xs text-gray-600">تحليل مالي ومحاسبي شامل للمبيعات، معدل تكرار الشراء، وتسوية نقاط الولاء لبوتيك لمسة في غزة.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alert('جاري تحميل التقرير المحاسبي بصيغة PDF / Excel...')}
              type="button"
              className="px-4 py-2.5 bg-white border border-[#E1DACB] text-[#12302B] hover:bg-[#F6F3EC] text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base">download</span>
              <span>تصدير التقرير المالي (PDF)</span>
            </button>
          </div>
        </div>

        {/* 4 Performance Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#E1DACB] shadow-sm flex flex-col justify-between">
            <span className="text-xs text-gray-500 font-medium">إجمالي المبيعات المحققة</span>
            <div className="flex items-baseline gap-1 my-2">
              <span className="text-2xl sm:text-3xl font-black text-[#12302B]">24,850.00</span>
              <span className="text-xs font-bold text-gray-500">₪</span>
            </div>
            <span className="text-xs font-bold text-[#1F7A6E] flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              +22% نمو مقارنة بالشهر السابق
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E1DACB] shadow-sm flex flex-col justify-between">
            <span className="text-xs text-gray-500 font-medium">الطلبات المسلمة بنجاح</span>
            <div className="flex items-baseline gap-1 my-2">
              <span className="text-2xl sm:text-3xl font-black text-[#12302B]">114</span>
              <span className="text-xs font-bold text-gray-500">طلباً</span>
            </div>
            <span className="text-xs font-bold text-emerald-700">100% موثقة بنظام كود PIN</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E1DACB] shadow-sm flex flex-col justify-between">
            <span className="text-xs text-gray-500 font-medium">متوسط قيمة سلة الشراء</span>
            <div className="flex items-baseline gap-1 my-2">
              <span className="text-2xl sm:text-3xl font-black text-[#12302B]">218.00</span>
              <span className="text-xs font-bold text-gray-500">₪</span>
            </div>
            <span className="text-xs text-gray-500">للطلب الواحد في غزة</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E1DACB] shadow-sm flex flex-col justify-between">
            <span className="text-xs text-gray-500 font-medium">معدل الزبائن الدائمين</span>
            <div className="flex items-baseline gap-1 my-2">
              <span className="text-2xl sm:text-3xl font-black text-[#E9B44C]">68%</span>
            </div>
            <span className="text-xs font-bold text-[#835400]">يكررون الشراء بسبب النقاط</span>
          </div>
        </div>

        {/* Detailed Breakdown Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Table (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-[#E1DACB] shadow-sm overflow-hidden space-y-4">
            <div className="p-5 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <h2 className="text-sm font-bold text-[#12302B]">كشف التسويات الدورية الأسبوعية (شهر أكتوبر 2026)</h2>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedPeriod('monthly')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    selectedPeriod === 'monthly' ? 'bg-[#12302B] text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  شهري
                </button>
                <button
                  onClick={() => setSelectedPeriod('weekly')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    selectedPeriod === 'weekly' ? 'bg-[#12302B] text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  أسبوعي
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead className="bg-[#F6F3EC] text-gray-600 font-bold border-b border-[#E1DACB]">
                  <tr>
                    <th className="p-3.5">الفترة الزمنية</th>
                    <th className="p-3.5">الطلبات</th>
                    <th className="p-3.5">المبيعات الإجمالية</th>
                    <th className="p-3.5">العمولة (3%)</th>
                    <th className="p-3.5">الصافي المحول</th>
                    <th className="p-3.5">الحالة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium">
                  {reportRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F6F3EC]/50 transition-colors">
                      <td className="p-3.5 font-bold text-[#12302B]">{row.period}</td>
                      <td className="p-3.5">{row.orders}</td>
                      <td className="p-3.5 font-bold">{row.sales}</td>
                      <td className="p-3.5 text-gray-500">{row.commission}</td>
                      <td className="p-3.5 font-bold text-[#1F7A6E]">{row.netPayout}</td>
                      <td className="p-3.5">
                        <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-bold text-[10px]">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sales by Category (4 cols) */}
          <aside className="lg:col-span-4 bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm space-y-4 text-xs">
            <h3 className="font-bold text-sm text-[#12302B] pb-2 border-b border-gray-100">
              توزيع المبيعات حسب فئات الأزياء
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1 text-gray-700">
                  <span className="font-bold">العبايات الخليجية والمطرزة</span>
                  <span className="font-bold text-[#12302B]">45% (11,180 ₪)</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#12302B] h-full rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1 text-gray-700">
                  <span className="font-bold">الأحذية النسائية الراقية</span>
                  <span className="font-bold text-[#1F7A6E]">30% (7,455 ₪)</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#1F7A6E] h-full rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1 text-gray-700">
                  <span className="font-bold">فساتين السهرة والمناسبات</span>
                  <span className="font-bold text-[#E9B44C]">25% (6,215 ₪)</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#E9B44C] h-full rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-gray-500">
              <span>تقييم رضا الزبائن:</span>
              <span className="font-bold text-[#835400] text-sm">4.9 / 5.0 ★</span>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
