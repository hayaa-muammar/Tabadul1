import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';

export default function ConfirmDeliveryPage() {
  const navigate = useNavigate();
  const [rated, setRated] = useState(false);

  const handleRate = () => {
    setRated(true);
    alert('شكراً لتقييمك لبوتيك لمسة! تم تسجيل تقييمك 5 نجوم بنجاح.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] antialiased selection:bg-[#1F7A6E] selection:text-white font-tajawal text-[#191c22]">
      <CustomerHeader />

      {/* ==================== MAIN CONTENT CANVAS ==================== */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* 1. Breadcrumbs Trail */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-[#74777f] font-medium flex-wrap">
          <Link to="/" className="hover:text-[#1F7A6E] transition-colors">
            الرئيسية
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <Link to="/customer/profile" className="hover:text-[#1F7A6E] transition-colors">
            حسابي
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <Link to="/customer/orders" className="hover:text-[#1F7A6E] transition-colors">
            طلباتي
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <Link to="/customer/orders/TBD-2026-7841" className="text-[#74777f] hover:text-[#1F7A6E]">
            طلب #TBD-2026-7841
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <span className="text-[#12302B] font-bold">تأكيد الاستلام وفحص القطع</span>
        </nav>

        {/* Page Title Header with Quick Help & SLA Tag */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E1DACB] pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F7A6E]/15 border border-[#1F7A6E]/30 text-[#1F7A6E] text-xs font-bold shadow-sm">
              <span className="material-symbols-outlined text-base">verified</span>
              <span>رمز التسليم تم التحقق منه بنجاح (PIN: 9184) ✓</span>
              <span className="px-2 py-0.5 rounded-full bg-[#E9B44C] text-[#12302B] text-xs font-black">مكتمل</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#12302B] tracking-tight">
              تم تأكيد الاستلام بنجاح وتطابق الرمز - جاري ترحيل النقاط
            </h1>
            <p className="text-sm text-[#576b66] max-w-3xl leading-relaxed">
              تم تسليم الشحنة وتأكيد فحص القطع بنجاح، وجميع الأمور ممتازة. مكافأة الكاش باك (3,350 نقطة تعادل 16.75 ₪) قيد الترحيل والإيداع الآن في محفظتك مع سريان ضمان التبديل المجاني لـ 24 ساعة.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start md:self-auto">
            <a
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E1DACB] text-[#12302B] text-xs sm:text-sm font-medium hover:bg-[#F2ECE1] transition-all shadow-sm"
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-lg text-[#1F7A6E]">support_agent</span>
              <span>خدمة العملاء (24/7)</span>
            </a>
          </div>
        </div>

        {/* 2. Order Status & Logistics Timeline Bento Card */}
        <section className="bg-white rounded-2xl border border-[#E1DACB] p-6 lg:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E1DACB]">
            {/* Order Meta Info */}
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F6F3EC] border border-[#E1DACB] flex items-center justify-center text-[#12302B] shadow-inner shrink-0">
                <span className="material-symbols-outlined text-3xl">storefront</span>
              </div>
              <div>
                <div className="flex items-center flex-wrap gap-2.5 mb-1">
                  <span className="text-lg font-bold text-[#12302B]">بوتيك لمسة للأزياء الراقية</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E9B44C]/20 text-[#835400] text-xs font-bold border border-[#E9B44C]/30 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    متجر شريك معتمد
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#576b66] flex-wrap">
                  <span>
                    رقم الطلب: <strong className="text-[#12302B] font-mono font-bold">#TBD-2026-7841</strong>
                  </span>
                  <span>•</span>
                  <span>تاريخ الشحن: اليوم، 02:45 م</span>
                  <span>•</span>
                  <span className="text-[#1F7A6E] font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">local_shipping</span>
                    مندوب التسليم السريع (غزة - الرمال)
                  </span>
                </div>
              </div>
            </div>

            {/* Active Inspection Status Pill */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1F7A6E]/10 border border-[#1F7A6E]/20 self-start lg:self-auto">
              <div className="w-9 h-9 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-xl">task_alt</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-sm font-bold text-[#12302B] flex items-center gap-1.5">
                  تم تسليم واستلام الشحنة بنجاح <span className="text-[#1F7A6E]">✓</span>
                </span>
                <span className="text-xs text-[#1F7A6E] font-medium">الرمز 9184 معتمد • ضمان الجودة سارٍ لمدة 24 ساعة</span>
              </div>
            </div>
          </div>

          {/* Stepper Tracking Timeline */}
          <div className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Step 1 */}
              <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                <div className="flex items-center md:w-full">
                  <div className="w-10 h-10 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0 ring-4 ring-[#1F7A6E]/15">
                    <span className="material-symbols-outlined text-lg">check</span>
                  </div>
                  <div className="hidden md:block flex-1 h-1 bg-[#1F7A6E] mx-2 rounded"></div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#12302B]">تم تجهيز الطلب وتغليفه</p>
                  <p className="text-xs text-[#74777f]">10:30 ص - متجر لمسة ✓</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                <div className="flex items-center md:w-full">
                  <div className="w-10 h-10 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0 ring-4 ring-[#1F7A6E]/15">
                    <span className="material-symbols-outlined text-lg">check</span>
                  </div>
                  <div className="hidden md:block flex-1 h-1 bg-[#1F7A6E] mx-2 rounded"></div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#12302B]">خروج الشحنة مع المندوب</p>
                  <p className="text-xs text-[#74777f]">01:15 م - كابتن أحمد ✓</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                <div className="flex items-center md:w-full">
                  <div className="w-10 h-10 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0 ring-4 ring-[#1F7A6E]/15">
                    <span className="material-symbols-outlined text-lg">check</span>
                  </div>
                  <div className="hidden md:block flex-1 h-1 bg-[#1F7A6E] mx-2 rounded"></div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#12302B]">وصول المندوب ومطابقة الرمز</p>
                  <p className="text-xs text-[#1F7A6E] font-bold">تم التحقق من PIN: 9184 بنجاح ✓</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                <div className="flex items-center md:w-full">
                  <div className="w-10 h-10 rounded-full bg-[#12302B] text-[#E9B44C] flex items-center justify-center font-bold text-sm shadow-lg shrink-0 ring-4 ring-[#E9B44C]/40">
                    <span className="material-symbols-outlined text-xl">stars</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#12302B]">تم تأكيد الاستلام وفحص القطع</p>
                  <p className="text-xs text-[#835400] font-bold">مكتملة الآن وترحيل النقاط جاري ✓</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Inspection Checklist Section for Shipped Items */}
        <section className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-[#12302B] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1F7A6E]">task_alt</span>
                <span>القطع المستلمة والمفحوصة بنجاح (تم القبول التام)</span>
              </h2>
              <p className="text-sm text-[#576b66]">
                تمت مراجعة وفحص القطع وخلوها من أي عيوب ومطابقتها للمقاس المطلوب:
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9B44C]/15 text-[#835400] text-xs font-bold">
              <span className="material-symbols-outlined text-sm">published_with_changes</span>
              سياسة الاستبدال المجاني سارية لـ 24 ساعة
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Item 1 */}
            <article className="bg-white rounded-2xl border-2 border-[#1F7A6E]/30 p-5 shadow-sm hover:border-[#1F7A6E] transition-all flex flex-col justify-between">
              <div className="flex gap-4">
                <div className="w-24 sm:w-28 h-32 sm:h-36 rounded-xl overflow-hidden shrink-0 border border-[#E1DACB] relative bg-[#F6F3EC]">
                  <img
                    className="w-full h-full object-cover"
                    alt="فستان حرير شامبين راقي"
                    src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&auto=format&fit=crop&q=80"
                  />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#12302B]/85 text-[#E9B44C] text-[10px] font-bold backdrop-blur-sm">
                    المقاس 38
                  </span>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs text-[#1F7A6E] font-bold">أزياء مسائية راقية</span>
                      <h3 className="text-base font-bold text-[#12302B]">فستان حرير شامبين راقي</h3>
                    </div>
                    <span className="text-base font-extrabold text-[#12302B]">190.00 ₪</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#576b66] bg-[#F6F3EC] p-2.5 rounded-lg border border-[#E1DACB]/60">
                    <div><span className="text-[#74777f]">اللون:</span> ذهبي شامبين ملكي</div>
                    <div><span className="text-[#74777f]">القماش:</span> حرير ساتان ناعم 100%</div>
                    <div><span className="text-[#74777f]">كود القطعة:</span> DSK-8812</div>
                    <div><span className="text-[#74777f]">حالة الطرد:</span> مغلف بعناية فائقة</div>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                    <span className="material-symbols-outlined text-base">stars</span>
                    <span>تكسبين من هذه القطعة: 1,900 نقطة ولاء</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E1DACB] bg-[#F6F3EC]/50 -mx-5 -mb-5 p-4 rounded-b-2xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs sm:text-sm font-bold text-[#12302B] flex items-center gap-1.5">
                        تم الفحص والقبول التام بنجاح <span className="text-[#1F7A6E]">✓</span>
                      </span>
                      <p className="text-xs text-[#74777f]">المقاس 38 مطابق، القماش ممتاز، وخالٍ من أي ملاحظات.</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#1F7A6E]/10 text-[#1F7A6E] text-xs font-bold shrink-0">
                    الضمان سارٍ 24h
                  </span>
                </div>
              </div>
            </article>

            {/* Item 2 */}
            <article className="bg-white rounded-2xl border-2 border-[#1F7A6E]/30 p-5 shadow-sm hover:border-[#1F7A6E] transition-all flex flex-col justify-between">
              <div className="flex gap-4">
                <div className="w-24 sm:w-28 h-32 sm:h-36 rounded-xl overflow-hidden shrink-0 border border-[#E1DACB] relative bg-[#F6F3EC]">
                  <img
                    className="w-full h-full object-cover"
                    alt="حذاء كعب سهرة مرصع"
                    src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&auto=format&fit=crop&q=80"
                  />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#12302B]/85 text-[#E9B44C] text-[10px] font-bold backdrop-blur-sm">
                    المقاس 38
                  </span>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs text-[#1F7A6E] font-bold">أحذية مناسبات فاخرة</span>
                      <h3 className="text-base font-bold text-[#12302B]">حذاء كعب سهرة مرصع</h3>
                    </div>
                    <span className="text-base font-extrabold text-[#12302B]">145.00 ₪</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#576b66] bg-[#F6F3EC] p-2.5 rounded-lg border border-[#E1DACB]/60">
                    <div><span className="text-[#74777f]">ارتفاع الكعب:</span> 8.5 سم مبطن مريح</div>
                    <div><span className="text-[#74777f]">الترصيع:</span> كريستال زجاجي فاخر</div>
                    <div><span className="text-[#74777f]">كود الموديل:</span> SH-9940-GLD</div>
                    <div><span className="text-[#74777f]">البطانة:</span> جلد طبيعي مريح للقدم</div>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                    <span className="material-symbols-outlined text-base">stars</span>
                    <span>تكسبين من هذه القطعة: 1,450 نقطة ولاء</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E1DACB] bg-[#F6F3EC]/50 -mx-5 -mb-5 p-4 rounded-b-2xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs sm:text-sm font-bold text-[#12302B] flex items-center gap-1.5">
                        تم الفحص والقبول التام بنجاح <span className="text-[#1F7A6E]">✓</span>
                      </span>
                      <p className="text-xs text-[#74777f]">الكعب سليم، الترصيع متكامل، والمقاس مريح تماماً.</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#1F7A6E]/10 text-[#1F7A6E] text-xs font-bold shrink-0">
                    الضمان سارٍ 24h
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 4. HIGHLIGHT REWARD & INSTANT RELEASE HERO CARD (CENTERPIECE) */}
        <section className="bg-gradient-to-br from-[#1A423B] to-[#12302B] rounded-3xl p-8 lg:p-10 border-2 border-[#E9B44C]/40 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#E9B44C]/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#1F7A6E]/30 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-[#E9B44C] text-[#12302B] text-xs sm:text-sm font-black shadow-xl ring-4 ring-[#E9B44C]/30 animate-pulse">
              <span className="material-symbols-outlined text-xl">celebration</span>
              <span>رائع! تم التحقق بنجاح والنقاط قيد الإيداع الفوري</span>
              <span className="material-symbols-outlined text-xl">stars</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#E9B44C] animate-bounce">bolt</span>
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#E9B44C] tracking-tight drop-shadow-md">
                  3,350 نقطة كاش باك
                </span>
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#E9B44C] animate-bounce">bolt</span>
              </div>
              <p className="text-base sm:text-xl font-bold text-white">
                قيد الإيداع والترحيل إلى محفظتك الآن! (تعادل 16.75 ₪ رصيد نقدي متاح)
              </p>
            </div>

            {/* Live Transfer Progress Tracker Card */}
            <div className="bg-black/30 backdrop-blur-md rounded-2xl border border-white/15 p-6 w-full max-w-2xl space-y-4">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                <span className="flex items-center gap-2 text-[#8df8bd]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8df8bd] animate-ping"></span>
                  حالة الرصيد: جاري التحويل من معلّق ⏳ إلى متاح في المحفظة
                </span>
                <span className="text-[#E9B44C] font-mono font-bold">95% مكتمل</span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-[#E9B44C] to-[#8df8bd] rounded-full transition-all duration-1000"
                  style={{ width: '95%' }}
                ></div>
              </div>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed text-right md:text-center">
                تم إيداع مستحقات <strong>«بوتيك لمسة»</strong> بنجاح. رصيد نقاطك الجديد سيصبح{' '}
                <strong className="text-[#E9B44C]">5,750 نقطة (28.75 ₪)</strong> خلال لحظات. خيار التبديل المجاني مضمون لمدة 24 ساعة.
              </p>
            </div>

            {/* Action Buttons Cluster */}
            <div className="w-full max-w-2xl pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to="/customer/wallet"
                className="w-full sm:flex-1 py-4 px-6 rounded-2xl text-white text-sm sm:text-base font-extrabold flex items-center justify-center gap-2.5 border border-[#E9B44C]/60 shadow-xl bg-gradient-to-r from-[#228477] to-[#1F7A6E] hover:from-[#269889] hover:to-[#17655B] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-2xl text-[#E9B44C]">account_balance_wallet</span>
                <span>عرض محفظتي وسجل النقاط</span>
                <span className="material-symbols-outlined text-xl">arrow_left_alt</span>
              </Link>
              <Link
                to="/customer/orders"
                className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border border-white/20 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">list_alt</span>
                <span>قائمة طلباتي</span>
              </Link>
              <button
                onClick={handleRate}
                className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-[#E9B44C]/20 hover:bg-[#E9B44C]/30 text-[#E9B44C] text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 border border-[#E9B44C]/40 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">star</span>
                <span>{rated ? 'تم التقييم (5★)' : 'تقييم المتجر (5★)'}</span>
              </button>
            </div>
          </div>
        </section>

        {/* 5. Alternative Transparent Options & Invoice Summary (Bento Grid) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Action Card A: Size Exchange Option */}
          <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#1F7A6E]/40 transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E9B44C]/15 text-[#835400] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">change_circle</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12302B]">
                هل ترغبين بتبديل المقاس؟
              </h3>
              <p className="text-xs sm:text-sm text-[#576b66] leading-relaxed">
                خدمة التبديل مجانية تماماً ومتاحة خلال 24 ساعة. عند اختيار التبديل سيتم تجميد النقاط مؤقتاً لحين استلام وتسليم المقاس البديل.
              </p>
            </div>
            <button
              onClick={() => navigate('/customer/orders/TBD-2026-7841/exchange')}
              className="w-full py-3 px-4 rounded-xl border border-[#12302B] text-[#12302B] text-xs sm:text-sm font-bold hover:bg-[#F6F3EC] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">sync_alt</span>
              <span>طلب تبديل المقاس (متاح ومجاني)</span>
            </button>
          </div>

          {/* Action Card B: Issue Escalation & Report */}
          <div className="bg-white rounded-2xl border border-[#E1DACB] p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-red-300 transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">report_problem</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12302B]">
                هل واجهتِ أي مشكلة في الشحنة؟
              </h3>
              <p className="text-xs sm:text-sm text-[#576b66] leading-relaxed">
                فريق الجودة والأمانة في منصة تبادل متواجد على مدار الساعة لضمان حقوقك كاملة وحل أي ملاحظة فوراً.
              </p>
            </div>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl border border-red-200 text-red-700 text-xs sm:text-sm font-bold hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">support_agent</span>
              <span>فتح تذكرة دعم مباشر عبر واتساب</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
