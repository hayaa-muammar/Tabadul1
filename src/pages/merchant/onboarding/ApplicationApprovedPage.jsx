import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function ApplicationApprovedPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6">
        {/* Approved Celebration Banner */}
        <section className="w-full bg-white border border-[#E1DACB] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-emerald-500 via-[#E9B44C] to-[#1F7A6E]"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-right">
              <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 px-4 py-1.5 rounded-full text-emerald-800 text-xs font-bold">
                <span className="material-symbols-outlined text-base">verified</span>
                <span>تم اعتماد وتفعيل متجركم رسمياً في شبكة تبادل 2026</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-[#12302B] leading-tight">
                تهانينا! متجر <span className="text-[#1F7A6E]">بوتيك لمسة</span> أصبح نشطاً وجاهزاً للبيع
              </h1>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                تمت مراجعة جميع الوثائق، وتفعيل فترة الـ 14 يوماً المعفاة من العمولات، وإتاحة متجركم ضمن قائمة المتاجر الشريكة للزبائن في تطبيق تبادل لجمع واستبدال النقاط.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => navigate('/merchant/dashboard')}
                  className="px-6 py-3.5 rounded-xl bg-[#12302B] hover:bg-[#1F7A6E] text-[#E9B44C] font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <span className="material-symbols-outlined text-lg">dashboard</span>
                  <span>الدخول إلى لوحة إدارة المتجر</span>
                </button>

                <button
                  onClick={() => navigate('/merchant/products/add')}
                  className="px-5 py-3.5 rounded-xl bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] font-extrabold text-sm shadow-sm transition-all flex items-center gap-2 active:scale-95"
                >
                  <span className="material-symbols-outlined text-lg">add_box</span>
                  <span>إضافة أول منتج أزياء</span>
                </button>

                <Link
                  to="/stores/lamsa-boutique"
                  className="px-4 py-3.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-bold transition-colors"
                >
                  معاينة واجهة المتجر للمتسوقين
                </Link>
              </div>
            </div>

            {/* Merchant Identity Card Badge */}
            <div className="w-full max-w-sm bg-[#12302B] text-white rounded-2xl p-6 shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-[#E9B44C]/20 rounded-full blur-2xl"></div>
              
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#E9B44C] text-[#12302B] flex items-center justify-center font-black text-xl">
                    لمسة
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">بوتيك لمسة (Lamsa)</h3>
                    <span className="text-[11px] text-emerald-400 font-medium">نشط ومعتمد • قطاع غزة</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-emerald-400 text-2xl">check_circle</span>
              </div>

              <div className="space-y-3 py-4 text-xs">
                <div className="flex justify-between items-center text-white/80">
                  <span>الرقم المرجعي للمتجر:</span>
                  <span className="font-mono text-[#E9B44C] font-bold">#TBD-M-2026-4892</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span>فترة التجربة المجانية:</span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">14 يوماً متبقية</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span>حساب الأرباح:</span>
                  <span className="font-medium text-white">جوال باي (0599-876543)</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                <span className="text-white/60">كود QR المتجر المباشر:</span>
                <span className="text-[#E9B44C] font-bold flex items-center gap-1 cursor-pointer hover:underline">
                  <span className="material-symbols-outlined text-sm">qr_code</span>
                  تحميل وطباعة QR
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Quick Action Steps for new merchants */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E1DACB] rounded-2xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#1F7A6E]/10 text-[#1F7A6E] flex items-center justify-center mb-4 font-bold text-base">
              1
            </div>
            <h3 className="text-base font-bold text-[#12302B] mb-2">إضافة المنتجات والمقاسات</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              ارفع صور العبايات والفساتين والأحذية مع تحديد الألوان والمقاسات المتوفرة بالمحل في غزة.
            </p>
            <Link to="/merchant/products/add" className="inline-block mt-4 text-xs font-bold text-[#1F7A6E] hover:underline">
              ابدأ بإضافة منتج ←
            </Link>
          </div>

          <div className="bg-white border border-[#E1DACB] rounded-2xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#E9B44C]/20 text-[#835400] flex items-center justify-center mb-4 font-bold text-base">
              2
            </div>
            <h3 className="text-base font-bold text-[#12302B] mb-2">طباعة ملصق تبادل QR</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              اطبع رمز الاستجابة السريعة (QR) وضعه على كاونتر المحل ليقوم الزبائن بمسحه وجمع نقاط الشراء فوراً.
            </p>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-block mt-4 text-xs font-bold text-[#835400] hover:underline cursor-pointer"
            >
              طباعة ملصق الكاونتر ←
            </button>
          </div>

          <div className="bg-white border border-[#E1DACB] rounded-2xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#12302B]/10 text-[#12302B] flex items-center justify-center mb-4 font-bold text-base">
              3
            </div>
            <h3 className="text-base font-bold text-[#12302B] mb-2">إطلاق أول عرض ترويجي</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              أنشئ عرض نقاط مضاعفة (Double Points) لجذب أكثر من 15,000 متسوق نشط في منصة تبادل.
            </p>
            <Link to="/merchant/offers/create" className="inline-block mt-4 text-xs font-bold text-[#12302B] hover:underline">
              إنشاء عرض ترويجي ←
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
