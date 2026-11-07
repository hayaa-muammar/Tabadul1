import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function ManageOffersPage() {
  const navigate = useNavigate();
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: 'نقاط مضاعفة 2X على تشكيلة العبايات الملكية',
      type: 'double_points',
      typeLabel: 'نقاط مضاعفة 2X',
      startDate: '14 أكتوبر 2026',
      endDate: '20 أكتوبر 2026',
      ordersCount: 19,
      salesVolume: '4,560 ₪',
      status: 'active',
      statusLabel: 'نشط الآن'
    },
    {
      id: 2,
      title: 'توصيل مجاني لكافة محافظات غزة للطلبات فوق 200 ₪',
      type: 'free_delivery',
      typeLabel: 'توصيل مجاني',
      startDate: '01 أكتوبر 2026',
      endDate: '31 أكتوبر 2026',
      ordersCount: 42,
      salesVolume: '9,820 ₪',
      status: 'active',
      statusLabel: 'نشط الآن'
    },
    {
      id: 3,
      title: 'خصم 15% بمناسبة إطلاق تشكيلة الأحذية الخريفية',
      type: 'discount',
      typeLabel: 'خصم مباشر',
      startDate: '20 سبتمبر 2026',
      endDate: '30 سبتمبر 2026',
      ordersCount: 28,
      salesVolume: '5,040 ₪',
      status: 'expired',
      statusLabel: 'منتهي'
    }
  ]);

  const toggleOfferStatus = (id) => {
    setOffers((prev) =>
      prev.map((o) =>
        o.id === id
          ? {
              ...o,
              status: o.status === 'active' ? 'paused' : 'active',
              statusLabel: o.status === 'active' ? 'موقوف مؤقتاً' : 'نشط الآن'
            }
          : o
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 flex-1 flex flex-col gap-6">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E1DACB] shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] bg-[#12302B]/10 text-[#12302B] font-bold">M-08</span>
              <h1 className="text-xl sm:text-2xl font-black text-[#12302B]">إدارة العروض والحملات الترويجية</h1>
            </div>
            <p className="text-xs text-gray-600">تابع أداء حملات النقاط المضاعفة والخصومات الحصرية لمتجركم في قطاع غزة.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/merchant/offers/create')}
              type="button"
              className="px-5 py-2.5 bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] font-black text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">add_circle</span>
              <span>+ إنشاء عرض ترويجي جديد</span>
            </button>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl border border-[#E1DACB] p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-[#E9B44C]/20 text-[#835400] font-bold px-2.5 py-0.5 rounded-full">
                    {offer.typeLabel}
                  </span>
                  <span
                    className={`font-bold px-2 py-0.5 rounded-full text-[11px] ${
                      offer.status === 'active'
                        ? 'bg-emerald-50 text-emerald-800'
                        : offer.status === 'paused'
                        ? 'bg-amber-50 text-amber-800'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {offer.statusLabel}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-[#12302B] line-clamp-2">{offer.title}</h3>
                <p className="text-[11px] text-gray-500">
                  الفترة: {offer.startDate} إلى {offer.endDate}
                </p>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100 text-xs">
                <div className="p-2 bg-[#F6F3EC] rounded-xl text-center">
                  <span className="text-[10px] text-gray-500 block">الطلبات المحققة</span>
                  <span className="font-bold text-[#12302B]">{offer.ordersCount} طلب</span>
                </div>
                <div className="p-2 bg-[#F6F3EC] rounded-xl text-center">
                  <span className="text-[10px] text-gray-500 block">حجم المبيعات</span>
                  <span className="font-bold text-[#1F7A6E]">{offer.salesVolume}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => toggleOfferStatus(offer.id)}
                  className="text-xs font-bold text-gray-600 hover:text-[#12302B]"
                >
                  {offer.status === 'active' ? 'إيقاف مؤقت' : 'تفعيل العرض'}
                </button>

                <Link
                  to="/merchant/offers/create"
                  className="text-xs font-bold text-[#1F7A6E] hover:underline"
                >
                  تعديل الحملة ←
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
