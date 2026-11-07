import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function OfferPublishedSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 flex-1 flex flex-col items-center justify-center">
        <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-[#E1DACB] shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#1F7A6E] via-[#E9B44C] to-[#12302B]"></div>

          <div className="w-20 h-20 rounded-3xl bg-amber-100 text-[#835400] flex items-center justify-center mx-auto mb-6 shadow-sm border border-amber-200">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              campaign
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E9B44C]/20 text-[#835400] border border-[#E9B44C]/40 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E9B44C] animate-pulse"></span>
            العرض نشط ومباشر الآن
          </span>

          <h1 className="text-2xl sm:text-3xl font-black text-[#12302B] mb-2">
            تم إطلاق وتفعيل العرض الترويجي بنجاح!
          </h1>

          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed mb-6">
            تم بث العرض الترويجي <strong className="text-[#12302B]">"نقاط مضاعفة 2X على تشكيلة العبايات والفساتين"</strong> بنجاح، ويظهر الآن في الواجهة الرئيسية لتطبيق متسوقي غزة.
          </p>

          <div className="max-w-md mx-auto p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-bold mb-8 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-lg">send</span>
            <span>تم إرسال إشعار ترويجي فوري (Push Notification) إلى 15,420 متسوق نشط!</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate('/merchant/offers')}
              type="button"
              className="px-6 py-3.5 bg-[#12302B] hover:bg-[#1F7A6E] text-[#E9B44C] font-extrabold text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">format_list_bulleted</span>
              <span>الانتقال لإدارة العروض</span>
            </button>

            <button
              onClick={() => navigate('/merchant/offers/create')}
              type="button"
              className="px-5 py-3.5 bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] font-bold text-xs rounded-xl shadow-sm transition-all"
            >
              + إنشاء عرض آخر
            </button>

            <Link
              to="/merchant/dashboard"
              className="px-4 py-3.5 border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-bold rounded-xl transition-all"
            >
              الرئيسية
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
