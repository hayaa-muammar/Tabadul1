import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';

export default function ExchangeApprovedPage() {
  const [copiedPin, setCopiedPin] = useState(false);

  const handleCopyPin = () => {
    navigator.clipboard.writeText('5193');
    setCopiedPin(true);
    setTimeout(() => setCopiedPin(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F6F3EC] text-[#191c22] font-tajawal antialiased selection:bg-[#1F7A6E] selection:text-white">
      <CustomerHeader />

      {/* MAIN CANVAS */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#74777f] mb-8 overflow-x-auto whitespace-nowrap pb-1">
          <Link to="/shopper" className="hover:text-[#12302B] flex items-center gap-1">
            <span className="material-symbols-outlined text-base">home</span>
            <span>الرئيسية</span>
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <Link to="/customer/orders" className="hover:text-[#12302B]">
            طلباتي
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <Link to="/customer/orders/TBD-2026-7841" className="hover:text-[#12302B]">
            طلب رقم #TBD-2026-7841
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <span className="text-[#1F7A6E] font-bold">تأكيد إرسال طلب التبديل</span>
        </nav>

        {/* SUCCESS HERO BANNER */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E1DACB] shadow-sm mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#12302B] via-[#1F7A6E] to-[#E9B44C]"></div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 w-full relative z-10">
            <div className="flex items-start gap-4 flex-grow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1F7A6E] to-[#12302B] text-white flex items-center justify-center shadow-md shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-2xl">check_circle</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1F7A6E]/10 text-[#1F7A6E] text-xs font-bold">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    <span>تم اعتماد الطلب وتجميد البديل بالمخزون</span>
                  </div>
                  <span className="text-xs text-[#74777f] font-medium">الطلب مؤكد وفوري</span>
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-[#12302B] leading-snug">
                  تم إرسال طلب تبديل المقاس بنجاح! وجاري تجهيز المقاس البديل لك
                </h1>
                <p className="text-xs md:text-sm text-[#43474e] leading-relaxed max-w-2xl">
                  شكراً سارة. فريق العمل في متجر «بوتيك لمسة للأزياء الراقية» يقوم حالياً بتغليف المقاس الجديد لتسليمه لك على باب المنزل.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-auto bg-[#F6F3EC] rounded-2xl p-4 border border-[#E1DACB] shrink-0 min-w-[280px]">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-xs font-medium text-[#74777f]">رقم طلب التبديل المرجعي:</span>
                <span className="text-base font-black text-[#1F7A6E] tracking-wider font-mono">
                  #EXC-2026-4419
                </span>
              </div>
              <div className="text-xs text-[#43474e] space-y-1.5 pt-2 border-t border-[#E1DACB]/70">
                <div className="flex justify-between items-center">
                  <span>الطلب الأصلي:</span>
                  <span className="font-bold text-[#12302B]">#TBD-2026-7841</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>المتجر الشريك:</span>
                  <span className="font-bold text-[#12302B]">بوتيك لمسة للأزياء</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>تاريخ الإرسال:</span>
                  <span className="font-bold text-[#12302B]">اليوم، 04:35 مساءً</span>
                </div>
                <div className="flex justify-between items-center text-[#1F7A6E] font-bold pt-1 border-t border-[#E1DACB]/50">
                  <span>الموعد المتوقع:</span>
                  <span>خلال 24-48 ساعة (مجاناً)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT GRID: 2 COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Details (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* LOYALTY POINTS FREEZE ALERT CARD */}
            <section className="bg-gradient-to-br from-[#FFFDF9] to-[#FFFFFF] rounded-2xl p-6 border-2 border-[#E9B44C]/50 shadow-sm relative overflow-hidden">
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-[#E9B44C]/20 border border-[#E9B44C] flex items-center justify-center text-[#835400] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl">lock</span>
                </div>
                <div className="flex-grow space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E9B44C]/20 text-[#714800] text-xs font-bold border border-[#E9B44C]/40 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">hourglass_top</span>
                        حالة كاش باك: مجمّدة مؤقتاً (Locked)
                      </span>
                      <span className="text-xs font-semibold text-[#1F7A6E] bg-[#1F7A6E]/10 px-2 py-0.5 rounded-md">
                        ميثاق التبديل الذهبي
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[#835400]">3,350 نقطة (16.75 ₪)</div>
                  </div>
                  <h2 className="text-base font-bold text-[#12302B]">
                    تجميد مؤقت لنقاط الكاش باك في محفظتك حتى تأكيد الاستلام
                  </h2>
                  <p className="text-xs text-[#43474e] leading-relaxed">
                    لحماية رصيدك وضمان دقة العمليات المحاسبية، تم قفل نقاط الكاش باك الخاصة بهذا المنتج تلقائياً حتى استلامك للمقاس البديل وفحصه مع المندوب.{' '}
                    <strong className="text-[#12302B]">لا يتم خصم أي نقطة أو فرض أي رسوم إضافية</strong>، فالتبديل مجاني 100%.
                  </p>
                  <div className="bg-[#F6F3EC] rounded-xl px-3.5 py-2.5 border border-[#E1DACB] flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-[#12302B]">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#1F7A6E] text-base">info</span>
                      <span>ستُعاد النقاط المجمّدة إلى رصيدك النشط بمجرد إدخال رمز التحقق (PIN) مع المندوب.</span>
                    </div>
                    <Link to="/customer/wallet" className="text-[#1F7A6E] font-bold hover:underline flex items-center gap-1">
                      <span>تفاصيل المحفظة</span>
                      <span>←</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* PRODUCT REPLACEMENT COMPARISON CARD */}
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E1DACB] shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E1DACB] flex-wrap gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-base font-bold text-[#12302B]">تفاصيل القطعة والمقاس المعتمد للبديل</h2>
                  <span className="text-xs text-[#74777f]">• تم حجز القطعة مباشرة من مستودع بوتيك لمسة</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-lg bg-[#1F7A6E]/10 text-[#1F7A6E] text-xs font-bold">
                  متوفر ومحجوز بالمخزون
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-5 items-start">
                <div className="w-full md:w-32 h-36 rounded-xl overflow-hidden bg-neutral-100 border border-[#E1DACB] shrink-0 relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="فستان حرير شامبين راقي"
                    src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&auto=format&fit=crop&q=80"
                  />
                  <div className="absolute top-2 right-2 bg-[#12302B]/80 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded font-bold">
                    حرير طبيعي
                  </div>
                </div>

                <div className="flex-grow space-y-3 w-full">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-[#835400] bg-[#E9B44C]/15 px-2 py-0.5 rounded-full">
                        بوتيك لمسة للأزياء الراقية
                      </span>
                      <h3 className="text-sm font-bold text-[#12302B]">
                        فستان حرير شامبين راقي - إصدار المناسبات
                      </h3>
                    </div>
                    <span className="text-[11px] text-[#74777f]">LMD-7729-CHAMP • شامبين ملكي</span>
                  </div>

                  <div className="bg-[#F6F3EC] rounded-xl p-3 border border-[#E1DACB] grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
                    <div className="flex items-center gap-2.5 bg-white p-2.5 rounded-lg border border-[#E1DACB]">
                      <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center font-bold text-neutral-500 text-xs border border-neutral-200">
                        M
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] text-[#74777f]">المقاس القديم:</span>
                        <span className="text-xs font-bold text-neutral-700">M - قياس 38 أوروبي</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 bg-[#1F7A6E]/10 p-2.5 rounded-lg border border-[#1F7A6E]/30">
                      <div className="w-8 h-8 rounded-lg bg-[#1F7A6E] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                        L
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] text-[#1F7A6E] font-medium flex items-center gap-1">
                          المقاس الجديد: <span className="material-symbols-outlined text-[12px]">lock</span>
                        </span>
                        <span className="text-xs font-black text-[#12302B]">L - قياس 40 أوروبي</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-neutral-50 p-2.5 rounded-lg border border-[#E1DACB] flex items-center justify-between">
                      <span className="text-[#74777f]">سبب التبديل:</span>
                      <span className="font-bold text-[#12302B]">المقاس ضيق عند الخصر والصدر</span>
                    </div>
                    <div className="bg-[#1F7A6E]/5 p-2.5 rounded-lg border border-[#1F7A6E]/20 flex items-center justify-between">
                      <span className="text-[#1F7A6E] font-medium">رسوم التبديل والتوصيل:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-[#1F7A6E]">0.00 ₪ (مجاناً)</span>
                        <span className="text-[10px] text-[#714800] bg-[#E9B44C]/20 px-1.5 py-0.5 rounded font-bold">
                          ولاء VIP
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* LOGISTICS & VERIFICATION PIN */}
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E1DACB] shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E1DACB]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#12302B] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">local_shipping</span>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#12302B]">خطة الاستلام ومقابلة مندوب التبديل</h2>
                  </div>
                </div>
                <span className="text-xs text-[#74777f]">خطوات سريعة وسلسة عند باب بيتك</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                <div className="bg-[#F6F3EC] p-3 rounded-xl border border-[#E1DACB] flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#12302B] text-white text-[11px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-[#12302B] mb-0.5">تجهيز القطعة القديمة</h4>
                    <p className="text-[11px] text-[#43474e] leading-snug">
                      الاحتفاظ بالفستان بالغلاف الأصلي مع التاغ والبطاقة لحين وصول المندوب.
                    </p>
                  </div>
                </div>

                <div className="bg-[#F6F3EC] p-3 rounded-xl border border-[#E1DACB] flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#12302B] text-white text-[11px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-[#12302B] mb-0.5">المعاينة والمبادلة</h4>
                    <p className="text-[11px] text-[#43474e] leading-snug">
                      تسليم القطعة واستلام المقاس L وفحصه في نفس اللحظة أمام المندوب.
                    </p>
                  </div>
                </div>

                <div className="bg-[#1F7A6E]/10 p-3 rounded-xl border border-[#1F7A6E]/30 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#1F7A6E] text-white text-[11px] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-[#1F7A6E] mb-0.5">تأكيد الرمز السري</h4>
                    <p className="text-[11px] text-[#43474e] leading-snug">
                      إعطاء المندوب رمز PIN لتأكيد المعاملة وفك تجميد نقاط الكاش باك فوراً.
                    </p>
                  </div>
                </div>
              </div>

              {/* PIN Box */}
              <div className="bg-gradient-to-r from-[#12302B] via-[#1F3A5F] to-[#12302B] text-white rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md border border-[#E9B44C]/40">
                <div className="space-y-1 text-center md:text-right">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E9B44C]/20 text-[#E9B44C] text-[11px] font-bold">
                    <span className="material-symbols-outlined text-xs">enhanced_encryption</span>
                    <span>رمز تأكيد استلام التبديل السري (Security PIN)</span>
                  </div>
                  <h3 className="text-sm font-bold">لا تشارك هذا الرمز إلا باليد مع مندوب التوصيل</h3>
                  <p className="text-[11px] text-white/70 max-w-md">
                    بمجرد استلام وتأكيد المقاس L الجديد، زوّد المندوب بالرمز التالي لإتمام التبديل بالكامل.
                  </p>
                </div>

                <div
                  onClick={handleCopyPin}
                  className="flex items-center gap-2 cursor-pointer"
                  dir="ltr"
                  title="انقر لنسخ رمز التبديل"
                >
                  <div className="w-10 h-12 rounded-lg bg-white/10 border-2 border-[#E9B44C] backdrop-blur-sm flex items-center justify-center text-xl font-black text-[#E9B44C] shadow-inner font-mono tracking-widest">
                    5
                  </div>
                  <div className="w-10 h-12 rounded-lg bg-white/10 border-2 border-[#E9B44C] backdrop-blur-sm flex items-center justify-center text-xl font-black text-[#E9B44C] shadow-inner font-mono tracking-widest">
                    1
                  </div>
                  <div className="w-10 h-12 rounded-lg bg-white/10 border-2 border-[#E9B44C] backdrop-blur-sm flex items-center justify-center text-xl font-black text-[#E9B44C] shadow-inner font-mono tracking-widest">
                    9
                  </div>
                  <div className="w-10 h-12 rounded-lg bg-white/10 border-2 border-[#E9B44C] backdrop-blur-sm flex items-center justify-center text-xl font-black text-[#E9B44C] shadow-inner font-mono tracking-widest">
                    3
                  </div>
                </div>
              </div>
              {copiedPin && (
                <p className="text-xs text-[#1F7A6E] font-bold text-center mt-2">
                  تم نسخ رمز التبديل السري بنجاح!
                </p>
              )}
            </section>
          </div>

          {/* SIDEBAR INFO & ACTIONS (4 COLS) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm space-y-4">
              <h3 className="text-base font-bold text-[#12302B]">الإجراءات السريعة</h3>
              
              <Link
                to="/customer/orders"
                className="w-full h-12 bg-gradient-to-r from-[#12302B] to-[#1F7A6E] hover:from-[#1F7A6E] hover:to-[#12302B] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all duration-200 text-sm cursor-pointer"
              >
                <span>متابعة تتبع طلب التبديل والشحنة</span>
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </Link>

              <Link
                to="/customer/orders"
                className="w-full h-12 bg-[#F6F3EC] hover:bg-[#E1DACB]/40 text-[#12302B] font-bold rounded-xl border border-[#E1DACB] flex items-center justify-center gap-2 transition-all duration-200 text-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">receipt_long</span>
                <span>العودة إلى سجل طلباتي</span>
              </Link>

              <button
                className="w-full text-center text-xs text-[#74777f] hover:text-[#12302B] flex items-center justify-center gap-1.5 py-1 cursor-pointer"
                onClick={() => window.print()}
              >
                <span className="material-symbols-outlined text-sm">print</span>
                <span>طباعة إشعار طلب التبديل (PDF)</span>
              </button>
            </div>

            {/* DELIVERY ADDRESS CARD */}
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E1DACB]">
                <div className="flex items-center gap-2 text-[#12302B] font-bold">
                  <span className="material-symbols-outlined text-[#1F7A6E]">location_on</span>
                  <h4 className="text-xs sm:text-sm">عنوان التوصيل المعتمد للبديل</h4>
                </div>
                <span className="text-xs bg-[#1F7A6E]/10 text-[#1F7A6E] font-bold px-2 py-0.5 rounded">
                  مؤكد
                </span>
              </div>
              <div className="space-y-2 text-xs text-[#43474e]">
                <div className="flex items-center gap-2 font-bold text-[#12302B] text-sm">
                  <span className="material-symbols-outlined text-base text-[#74777f]">person</span>
                  <span>سارة أحمد</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#74777f]">phone_iphone</span>
                  <span className="font-mono">0599-123456</span>
                </div>
                <div className="flex items-start gap-2 pt-1 leading-relaxed">
                  <span className="material-symbols-outlined text-base text-[#74777f] shrink-0 mt-0.5">home_pin</span>
                  <div>
                    غزة - حي الرمال الشمالي، شارع الشهداء، عمارة الأمل، الطابق الثالث، شقة 7.
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
