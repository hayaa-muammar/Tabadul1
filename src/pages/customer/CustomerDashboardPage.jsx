import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';

export default function CustomerDashboardPage() {
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <div className="text-[#191c22] antialiased min-h-screen flex flex-col bg-[#f6f3ec] font-tajawal selection:bg-[#e9b44c]/30 selection:text-[#12302b]">
      <CustomerHeader />

      {/* ==================== MAIN DASHBOARD CONTENT ==================== */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* 1. HERO WALLET SECTION */}
        <section className="w-full">
          <div className="relative overflow-hidden rounded-3xl bg-[#12302b] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-[#214b43]">
            <div className="absolute -left-12 -bottom-16 w-64 h-64 rounded-full bg-[#1f7a6e]/20 blur-3xl pointer-events-none"></div>
            <div className="absolute -right-8 -top-8 w-60 h-60 rounded-full bg-[#e9b44c]/10 blur-2xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Balance Summary */}
              <div className="space-y-4 max-w-xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e9b44c] text-[#12302b] shadow-sm">
                    <span className="material-symbols-outlined text-[15px]">stars</span>
                    المستوى الذهبي المميّز
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-emerald-300 border border-emerald-400/20">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    3,000 نقطة متاحة للاستبدال الفوري
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs text-white/70 block">إجمالي رصيد نقاط المكافآت المتاح</span>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                      3,000
                    </h1>
                    <span className="text-base sm:text-lg text-white/80">نقطة كاش باك</span>
                    <span className="text-xl sm:text-2xl font-bold text-[#e9b44c]">
                      ≈ 15.00 ₪
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-white/80">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs">
                    <span className="material-symbols-outlined text-[#e9b44c] text-[18px]">swap_horizontal_circle</span>
                    <span>كل <strong>1 ₪</strong> مشتريات = <strong>10 نقاط</strong> كاش باك</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs">
                    <span className="material-symbols-outlined text-emerald-300 text-[18px]">schedule</span>
                    <span>صلاحية النقاط تمتد حتى <strong>6 أشهر</strong> قادمة</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-[#1f7a6e]/40 border border-[#1f7a6e] px-4 py-2 rounded-xl text-xs sm:text-sm text-emerald-200">
                  <span className="material-symbols-outlined text-[#e9b44c] text-[18px]">verified</span>
                  <span>وفّرتِ حتى الآن <strong className="text-white font-bold">345 ₪</strong> عبر شبكة شركاء منصة تبادل</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
                <Link
                  to="/customer/wallet"
                  className="bg-[#e9b44c] hover:bg-[#d49a32] text-[#12302b] active:scale-95 transition-all text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#e9b44c]/20 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">redeem</span>
                  <span>استبدل نقاطك الآن</span>
                </Link>

                <button
                  onClick={() => setShowQrModal(true)}
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 active:scale-95 transition-all text-xs sm:text-sm font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                  <span>رمز الاستبدال / الباركود المباشر</span>
                </button>

                <Link
                  to="/customer/wallet"
                  className="text-white/80 hover:text-white hover:bg-white/5 active:scale-95 transition-all py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 text-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                  <span>سجل حركات المحفظة</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Modal QR */}
        {showQrModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-4 shadow-2xl relative border-2 border-[#e9b44c]">
              <button
                onClick={() => setShowQrModal(false)}
                className="absolute top-4 left-4 p-2 text-[#74777f] hover:text-[#12302B] cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <div className="w-12 h-12 rounded-2xl bg-[#12302B] text-[#e9b44c] flex items-center justify-center mx-auto text-2xl font-bold">
                ت
              </div>
              <h3 className="text-lg font-bold text-[#12302B]">رمز الاستبدال الشخصي</h3>
              <p className="text-xs text-[#576b66]">
                أظهري هذا الكود عند كاشير المتجر لاستبدال نقاطك فورياً بخصم مباشر:
              </p>
              <div className="bg-[#f6f3ec] p-4 rounded-2xl border border-[#e1dacb] space-y-2">
                <div className="h-20 bg-[repeating-linear-gradient(90deg,#12302b,#12302b_3px,transparent_3px,transparent_6px,#12302b_6px,#12302b_10px,transparent_10px,transparent_13px)] w-full rounded"></div>
                <span className="font-mono text-base font-black text-[#12302B] tracking-widest block">
                  #TBD-8821-3000
                </span>
              </div>
              <p className="text-xs text-emerald-700 font-bold">
                الرصيد المتاح: 3,000 نقطة (15.00 ₪)
              </p>
            </div>
          </div>
        )}

        {/* 2. DOUBLE POINTS FLASH BANNER */}
        <section className="w-full">
          <div className="bg-gradient-to-l from-[#1f7a6e] via-[#12302b] to-[#0f2420] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-[#2b6459] flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e9b44c] text-[#12302b] flex items-center justify-center font-extrabold text-xl shadow-md shrink-0">
                2X
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#e9b44c] text-[#12302b]">عرض حصري ومحدود</span>
                  <h2 className="text-base sm:text-lg font-bold text-white">عروض مضاعفة النقاط حتى 3X كاش باك!</h2>
                </div>
                <p className="text-white/80 text-xs sm:text-sm">
                  احصلي على ضعف النقاط اليوم على تشكيلة: العبايات المطرزة، أحذية السنيكرز الإيطالية، وفساتين السهرة.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center gap-1.5 text-center font-mono text-xs" dir="ltr">
                <div className="bg-black/30 border border-white/10 rounded-lg px-2.5 py-1.5">
                  <span className="font-bold text-sm text-[#e9b44c]">09</span>
                  <span className="block text-[9px] text-white/60">ساعة</span>
                </div>
                <span className="text-[#e9b44c] font-bold">:</span>
                <div className="bg-black/30 border border-white/10 rounded-lg px-2.5 py-1.5">
                  <span className="font-bold text-sm text-[#e9b44c]">42</span>
                  <span className="block text-[9px] text-white/60">دقيقة</span>
                </div>
              </div>

              <Link
                to="/stores"
                className="px-4 py-2.5 rounded-xl bg-white text-[#12302b] hover:bg-[#e9b44c] text-xs font-bold transition-colors whitespace-nowrap"
              >
                تصفح العروض
              </Link>
            </div>
          </div>
        </section>

        {/* 3. ACTIVE SHIPMENT QUICK TRACKER */}
        <section className="bg-white rounded-2xl p-6 border border-[#e1dacb] shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-[#e1dacb]">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#1f7a6e] text-2xl">local_shipping</span>
              <div>
                <h3 className="text-base font-bold text-[#12302b]">شحنتك الحالية قيد التوصيل</h3>
                <span className="text-xs text-[#576b66]">الطلب #TBD-2026-7841 • بوتيك لمسة</span>
              </div>
            </div>
            <Link
              to="/customer/orders/TBD-2026-7841"
              className="text-xs font-bold text-[#1f7a6e] hover:underline flex items-center gap-1"
            >
              <span>تفاصيل الطلب والـ PIN</span>
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </Link>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs sm:text-sm font-semibold text-[#12302b]">
                المندوب محمود الناجي يقترب من موقعك (الوصول متوقع بعد 25 دقيقة)
              </span>
            </div>
            <div className="flex items-center gap-2 bg-[#f6f3ec] px-3.5 py-1.5 rounded-xl border border-[#e1dacb] text-xs">
              <span className="text-[#576b66]">رمز الاستلام السري:</span>
              <span className="font-mono font-black text-sm text-[#12302b]">9184</span>
            </div>
          </div>
        </section>

        {/* 4. FEATURED PARTNER STORES */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#12302b]">المتاجر الشريكة الموصى بها</h2>
              <p className="text-xs text-[#576b66]">اكسب واستبدل نقاطك في أرقى بوتيكات ومحلات الأزياء</p>
            </div>
            <Link to="/stores" className="text-xs font-bold text-[#1f7a6e] hover:underline flex items-center gap-0.5">
              <span>عرض جميع المتاجر</span>
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Store 1 */}
            <div className="bg-white rounded-2xl border border-[#e1dacb] p-5 shadow-sm hover:border-[#1f7a6e] transition-all space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#12302b] text-white flex items-center justify-center font-bold text-lg">
                    ل
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#12302b]">بوتيك لمسة للأزياء</h3>
                    <span className="text-xs text-[#576b66]">فساتين سهرة وأطقم راقية</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#e9b44c] flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-sm">star</span>
                  4.9
                </span>
              </div>
              <p className="text-xs text-[#576b66] leading-relaxed">
                غزة - شارع الرمال التجاري • كاش باك 5% على كافة القطع
              </p>
              <div className="pt-2 border-t border-[#e1dacb] flex items-center justify-between">
                <span className="text-[11px] text-[#005232] font-bold bg-[#71dba2]/20 px-2.5 py-0.5 rounded-full">
                  شريك ماسي معتمد
                </span>
                <Link
                  to="/stores/lamsa-boutique"
                  className="text-xs font-bold text-[#12302b] hover:text-[#1f7a6e] flex items-center gap-1"
                >
                  <span>زيارة المتجر</span>
                  <span className="material-symbols-outlined text-sm">arrow_left_alt</span>
                </Link>
              </div>
            </div>

            {/* Store 2 */}
            <div className="bg-white rounded-2xl border border-[#e1dacb] p-5 shadow-sm hover:border-[#1f7a6e] transition-all space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#835400] text-white flex items-center justify-center font-bold text-lg">
                    ي
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#12302b]">دار الياقوت للعبايات</h3>
                    <span className="text-xs text-[#576b66]">عبايات خليجية وشيلات</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#e9b44c] flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-sm">star</span>
                  4.85
                </span>
              </div>
              <p className="text-xs text-[#576b66] leading-relaxed">
                غزة - تقاطع النصر • خصومات خاصة ونقاط مضاعفة
              </p>
              <div className="pt-2 border-t border-[#e1dacb] flex items-center justify-between">
                <span className="text-[11px] text-[#005232] font-bold bg-[#71dba2]/20 px-2.5 py-0.5 rounded-full">
                  شريك معتمد
                </span>
                <Link
                  to="/stores"
                  className="text-xs font-bold text-[#12302b] hover:text-[#1f7a6e] flex items-center gap-1"
                >
                  <span>زيارة المتجر</span>
                  <span className="material-symbols-outlined text-sm">arrow_left_alt</span>
                </Link>
              </div>
            </div>

            {/* Store 3 */}
            <div className="bg-white rounded-2xl border border-[#e1dacb] p-5 shadow-sm hover:border-[#1f7a6e] transition-all space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1f7a6e] text-white flex items-center justify-center font-bold text-lg">
                    أ
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#12302b]">أحذية الأميرة الفاخرة</h3>
                    <span className="text-xs text-[#576b66]">أحذية كعب وسنيكرز إيطالي</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#e9b44c] flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-sm">star</span>
                  4.92
                </span>
              </div>
              <p className="text-xs text-[#576b66] leading-relaxed">
                غزة - شارع عمر المختار • استبدال نقاط مباشر بدون حد أدنى
              </p>
              <div className="pt-2 border-t border-[#e1dacb] flex items-center justify-between">
                <span className="text-[11px] text-[#005232] font-bold bg-[#71dba2]/20 px-2.5 py-0.5 rounded-full">
                  شريك ذهبي
                </span>
                <Link
                  to="/stores"
                  className="text-xs font-bold text-[#12302b] hover:text-[#1f7a6e] flex items-center gap-1"
                >
                  <span>زيارة المتجر</span>
                  <span className="material-symbols-outlined text-sm">arrow_left_alt</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
