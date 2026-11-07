import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function ProductDraftSavedPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 flex-1 flex flex-col items-center justify-center">
        <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-[#E1DACB] shadow-lg text-center relative overflow-hidden">
          <div className="w-20 h-20 rounded-3xl bg-[#E9B44C]/20 text-[#835400] flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#E9B44C]/40">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              bookmark_check
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E9B44C]/20 text-[#835400] border border-[#E9B44C]/50 mb-3">
            <span className="material-symbols-outlined text-sm">visibility_off</span>
            مسودة آمنة (غير معروضة للزبائن)
          </span>

          <h1 className="text-2xl sm:text-3xl font-black text-[#12302B] mb-2">
            تم حفظ المنتج كمسودة بنجاح في متجرك
          </h1>

          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed mb-6">
            تم حفظ كافة تفاصيل ومقاسات وأسعار <strong className="text-[#12302B]">"فستان سهرة مخملي مطرز يدوياً"</strong> كمسودة خاصة بكتالوج بوتيك لمسة. يمكنك استكمال التعديل أو النشر متى شئت.
          </p>

          {/* Meta Info Pill */}
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#F6F3EC] border border-[#E1DACB] text-xs space-y-2 mb-8 text-right">
            <div className="flex justify-between items-center text-gray-600">
              <span>رمز التخزين:</span>
              <span className="font-mono font-bold text-[#12302B]">SKU-DR-2026-105</span>
            </div>
            <div className="flex justify-between items-center text-gray-600">
              <span>القسم:</span>
              <span className="font-bold">أزياء نسائية &gt; فساتين سهرة</span>
            </div>
            <div className="flex justify-between items-center text-emerald-800">
              <span>حالة التخزين:</span>
              <span className="font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">cloud_done</span>
                محفوظ سحابياً ومحلياً في غزة
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate('/merchant/products/add')}
              type="button"
              className="px-6 py-3.5 bg-[#12302B] hover:bg-[#1F7A6E] text-[#E9B44C] font-extrabold text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">edit</span>
              <span>استكمال التعديل والنشر الآن</span>
            </button>

            <button
              onClick={() => navigate('/merchant/products')}
              type="button"
              className="px-6 py-3.5 bg-white border border-[#12302B] text-[#12302B] hover:bg-[#F6F3EC] font-bold text-xs rounded-xl shadow-sm transition-all"
            >
              الذهاب لقائمة المنتجات
            </button>

            <Link
              to="/merchant/dashboard"
              className="px-4 py-3.5 border border-[#E1DACB] text-gray-600 hover:bg-gray-50 text-xs font-bold rounded-xl transition-all"
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
