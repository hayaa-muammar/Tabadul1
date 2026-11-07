import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function CreateOfferPage() {
  const navigate = useNavigate();
  const [offerType, setOfferType] = useState('double_points');
  const [offerTitle, setOfferTitle] = useState('نقاط مضاعفة 2X على تشكيلة العبايات والفساتين');
  const [discountPercent, setDiscountPercent] = useState(15);
  const [targetCategory, setTargetCategory] = useState('all');
  const [startDate, setStartDate] = useState('2026-10-15');
  const [endDate, setEndDate] = useState('2026-10-18');
  const [minSpend, setMinSpend] = useState(150);
  const [broadcastNotification, setBroadcastNotification] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/merchant/offers/published');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 flex-1 flex flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Link to="/merchant/dashboard" className="hover:text-[#12302B]">لوحة التحكم</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_left</span>
          <Link to="/merchant/offers" className="hover:text-[#12302B]">العروض والحملات</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_left</span>
          <span className="font-bold text-[#1F7A6E]">إنشاء عرض ترويجي جديد</span>
        </div>

        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E1DACB] shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] bg-[#12302B]/10 text-[#12302B] font-bold">M-08</span>
              <h1 className="text-xl sm:text-2xl font-black text-[#12302B]">إنشاء وإطلاق عرض ترويجي جديد</h1>
            </div>
            <p className="text-xs text-gray-600">خصص حوافز ونقاط ولاء مضاعفة لزبائن غزة لزيادة المبيعات والطلب عبر منصة تبادل.</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/merchant/offers"
              className="px-4 py-2.5 rounded-xl border border-[#E1DACB] text-[#12302B] hover:bg-[#F6F3EC] text-xs font-bold transition-all"
            >
              إدارة العروض الحالية
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Offer Type Selection */}
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm space-y-4">
              <h2 className="text-sm font-bold text-[#12302B] pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1F7A6E]">category</span>
                نوع الحافز الترويجي
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div
                  onClick={() => setOfferType('double_points')}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center ${
                    offerType === 'double_points'
                      ? 'border-[#1F7A6E] bg-[#1F7A6E]/5 text-[#1F7A6E]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="material-symbols-outlined text-3xl mb-1 text-[#E9B44C]">stars</span>
                  <span className="font-bold text-xs block text-[#12302B]">نقاط مضاعفة 2X</span>
                  <span className="text-[10px] text-gray-500 block mt-0.5">كاش باك 10% نقاط للزبون</span>
                </div>

                <div
                  onClick={() => setOfferType('discount')}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center ${
                    offerType === 'discount'
                      ? 'border-[#1F7A6E] bg-[#1F7A6E]/5 text-[#1F7A6E]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="material-symbols-outlined text-3xl mb-1 text-[#1F7A6E]">percent</span>
                  <span className="font-bold text-xs block text-[#12302B]">خصم مالي مباشر</span>
                  <span className="text-[10px] text-gray-500 block mt-0.5">تخفيض فوري على الفاتورة</span>
                </div>

                <div
                  onClick={() => setOfferType('free_delivery')}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center ${
                    offerType === 'free_delivery'
                      ? 'border-[#1F7A6E] bg-[#1F7A6E]/5 text-[#1F7A6E]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="material-symbols-outlined text-3xl mb-1 text-[#835400]">local_shipping</span>
                  <span className="font-bold text-xs block text-[#12302B]">توصيل مجاني</span>
                  <span className="text-[10px] text-gray-500 block mt-0.5">لكافة محافظات غزة</span>
                </div>
              </div>
            </div>

            {/* Offer Details */}
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm space-y-4 text-xs">
              <h2 className="text-sm font-bold text-[#12302B] pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1F7A6E]">edit_note</span>
                تفاصيل وشروط الحملة
              </h2>

              <div>
                <label className="block font-bold text-[#12302B] mb-1">عنوان العرض الترويجي</label>
                <input
                  type="text"
                  value={offerTitle}
                  onChange={(e) => setOfferTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] font-bold text-xs focus:border-[#12302B]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#12302B] mb-1">القسم المستهدف</label>
                  <select
                    value={targetCategory}
                    onChange={(e) => setTargetCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] text-xs font-semibold"
                  >
                    <option value="all">كافة منتجات المتجر</option>
                    <option value="abayas">العبايات فقط</option>
                    <option value="dresses">فساتين السهرة</option>
                    <option value="shoes">الأحذية الراقية</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#12302B] mb-1">الحد الأدنى للطلب (₪)</label>
                  <input
                    type="number"
                    value={minSpend}
                    onChange={(e) => setMinSpend(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] text-xs font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#12302B] mb-1">تاريخ بدء العرض</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#12302B] mb-1">تاريخ انتهاء العرض</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] text-xs"
                  />
                </div>
              </div>

              <label className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F6F3EC] border border-[#E1DACB] cursor-pointer">
                <input
                  type="checkbox"
                  checked={broadcastNotification}
                  onChange={(e) => setBroadcastNotification(e.target.checked)}
                  className="mt-0.5 rounded text-[#1F7A6E]"
                />
                <div>
                  <span className="font-bold text-[#12302B] block">إرسال إشعار فوري (Push Notification) لأكثر من 15,000 متسوق</span>
                  <span className="text-gray-500">يظهر العرض في البانر الرئيسي لتطبيق الزبائن مع وسم "عرض مميز".</span>
                </div>
              </label>

              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] font-black text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">rocket_launch</span>
                  <span>إطلاق ونشر العرض الترويجي الآن</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar / Live Preview (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 text-xs">
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="font-bold text-gray-500">معاينة مباشرة</span>
                <span className="bg-[#12302B] text-[#E9B44C] px-2 py-0.5 rounded-full text-[10px] font-bold">
                  في تطبيق الزبون
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#12302B] to-[#1F7A6E] text-white shadow-md space-y-2 relative overflow-hidden">
                <span className="bg-[#E9B44C] text-[#12302B] font-black text-[10px] px-2 py-0.5 rounded-full inline-block">
                  {offerType === 'double_points' ? 'نقاط مضاعفة 2X' : 'عرض خاص'}
                </span>
                <h3 className="font-bold text-sm text-white">{offerTitle}</h3>
                <p className="text-[11px] text-white/80">
                  لدى: بوتيك لمسة • للطلبات فوق {minSpend} ₪
                </p>
                <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[10px] text-white/70">
                  <span>ساري حتى: {endDate}</span>
                  <span className="text-[#E9B44C] font-bold">اطلب الآن</span>
                </div>
              </div>
            </div>
          </aside>
        </form>
      </main>

      <Footer />
    </div>
  );
}
