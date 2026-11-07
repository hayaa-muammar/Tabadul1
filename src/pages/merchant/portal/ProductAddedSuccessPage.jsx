import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function ProductAddedSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 flex-1 flex flex-col items-center justify-center">
        <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-[#E1DACB] shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-emerald-500 via-[#E9B44C] to-[#1F7A6E]"></div>

          <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-200">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            نُشر مباشرة ومتاح للمتسوقين
          </span>

          <h1 className="text-2xl sm:text-3xl font-black text-[#12302B] mb-2">
            تم نشر وقبول المنتج بنجاح في متجرك!
          </h1>

          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed mb-6">
            أصبح منتج <strong className="text-[#12302B]">"عباءة حريرية مطرزة يدوياً"</strong> متاحاً الآن في واجهة كتالوج بوتيك لمسة، ويمكن لآلاف المتسوقين في غزة طلبه والاستفادة من كاش باك النقاط (12 نقطة).
          </p>

          {/* Product Snapshot Card */}
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#F6F3EC] border border-[#E1DACB] flex items-center gap-4 text-right mb-8">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWO5D3-d3RBw-6-1qMa8jqBxFbR13IlmwMFbh7-jqpfTy3-toSn0ttO8RKMUGFYI5CtaN8O6DpNJDM_AohFzvrv6ZELCWV9J6cZCPUvm3MFFzHQv5TESQU7KJ0J7lf0BUUAVj_b6-bQakw_BztJN-3cNinhrIGVVyBmbwiBlb5rp2Z9GuH1Ptlnr91oQSqQGfda4AH6puUCWafDKXkoGRQGY4XCDPVVD5Fcn_G0t0e"
              alt="عباءة حريرية"
              className="w-16 h-16 rounded-xl object-cover border border-gray-200"
            />
            <div className="flex-1 text-xs">
              <span className="font-bold text-[#12302B] text-sm block">عباءة حريرية مطرزة يدوياً</span>
              <span className="text-gray-500 block">السعر: <strong>240.00 ₪</strong> • المخزون: <strong>12 قطعة</strong></span>
              <span className="text-[#1F7A6E] font-bold mt-0.5 block">+كاش باك 12 نقطة مع كل شراء</span>
            </div>
          </div>

          {/* Navigation Action Cluster */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate('/merchant/products/add')}
              type="button"
              className="px-6 py-3.5 bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] font-extrabold text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">add_circle</span>
              <span>+ إضافة منتج آخر الآن</span>
            </button>

            <button
              onClick={() => navigate('/merchant/products')}
              type="button"
              className="px-6 py-3.5 bg-[#12302B] hover:bg-[#1F7A6E] text-white font-bold text-xs rounded-xl shadow-sm transition-all"
            >
              العودة لإدارة المنتجات
            </button>

            <Link
              to="/merchant/offers/create"
              className="px-4 py-3.5 border border-[#E1DACB] text-gray-700 hover:bg-gray-50 text-xs font-bold rounded-xl transition-all"
            >
              إنشاء عرض ترويجي للمنتج
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
