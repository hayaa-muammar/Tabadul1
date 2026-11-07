import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';

export default function OrderDetailPage() {
  const navigate = useNavigate();
  const [copiedPin, setCopiedPin] = useState(false);

  const handleCopyPin = () => {
    navigator.clipboard.writeText('9184');
    setCopiedPin(true);
    setTimeout(() => setCopiedPin(false), 2000);
  };

  return (
    <div className="bg-[#f6f3ec] text-[#12302b] antialiased min-h-screen flex flex-col font-tajawal selection:bg-[#e9b44c]/30 selection:text-[#12302b]">
      <CustomerHeader />

      {/* MAIN CANVAS */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* BREADCRUMBS */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-medium">
          <Link to="/" className="hover:text-[#1f7a6e] transition-colors flex items-center gap-1 text-[#576b66]">
            <span className="material-symbols-outlined text-base">home</span>
            <span>الرئيسية</span>
          </Link>
          <span className="material-symbols-outlined text-xs text-[#a4a99f]">chevron_left</span>
          <Link to="/customer/orders" className="hover:text-[#1f7a6e] transition-colors text-[#576b66]">
            طلباتي والمحفظة
          </Link>
          <span className="material-symbols-outlined text-xs text-[#a4a99f]">chevron_left</span>
          <span className="text-[#12302b] font-bold bg-[#ede8dd] px-2.5 py-1 rounded-lg text-xs border border-[#e1dacb]">
            تفاصيل الطلب #TBD-2026-7841
          </span>
        </nav>

        {/* 1. ORDER SUMMARY HERO CARD */}
        <section className="bg-gradient-to-br from-[#12302b] via-[#18453e] to-[#0c221e] text-[#ffffff] rounded-2xl p-6 sm:p-8 shadow-lg border border-[#18453e] relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#e9b44c]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#1f7a6e]/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#e9b44c] text-[#12302b] font-bold text-xs flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[15px] text-[#12302b]">verified</span>
                  طلب معتمد ومحمي بالأمانة
                </span>
                <div className="flex items-center gap-2 bg-[#ffffff]/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#71dba2] animate-pulse"></span>
                  <span className="text-[#71dba2]">قيد التوصيل مع المندوب - وصول متوقع خلال 25 دقيقة</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#ffffff]">
                    الطلب #TBD-2026-7841
                  </h1>
                  <span className="text-xs text-[#ede8dd]/80 font-medium">تاريخ الطلب: 18 مايو 2026 • 02:45 مساءً</span>
                </div>
                <p className="text-sm text-[#ede8dd]/90 max-w-2xl leading-relaxed">
                  تم حجز وتجميد المقابل المالي بأمان في حساب الضمان حتى فحص ومطابقة المنتجات وإدخال رمز PIN السري للمندوب عند بابك.
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4 border-t border-[#ffffff]/15 text-[#ffffff]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#ffffff] text-[#12302b] flex items-center justify-center font-bold text-xl shadow-sm">
                    ل
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#ffffff]">بوتيك لمسة للأزياء الراقية</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#e9b44c]/20 text-[#fce09e] text-[11px] font-bold border border-[#e9b44c]/30">
                        <span className="material-symbols-outlined text-xs text-[#fce09e]">verified_user</span>
                        شريك ماسي معتمد
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#ede8dd]/80 mt-0.5">
                      <span>غزة - شارع الرمال التجاري</span>
                      <span>•</span>
                      <div className="flex items-center text-[#e9b44c]">
                        <span className="material-symbols-outlined text-sm text-[#e9b44c]">star</span>
                        <span className="font-bold mr-0.5 text-xs">4.9</span>
                        <span className="text-[#ede8dd]/70 mr-1">(184 تقييم)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  className="mr-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1f7a6e] hover:bg-[#18453e] text-[#ffffff] text-xs font-bold transition-all border border-[#1f7a6e]/40 shadow-sm active:scale-95"
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>مراسلة المتجر عبر واتساب</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#ffffff]/10 backdrop-blur-md rounded-2xl p-5 border border-[#ffffff]/15 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#ede8dd]/90 font-medium">المبلغ الإجمالي المدفوع</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#1f7a6e]/30 text-[#71dba2] text-xs font-bold border border-[#1f7a6e]/40">
                  تم الخصم إلكترونياً
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-[#ffffff]/15 pb-3">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-black text-[#ffffff] tracking-tight">335.00</span>
                  <span className="text-lg font-bold text-[#e9b44c]">₪</span>
                </div>
                <span className="text-xs text-[#ede8dd]/80">محفظة تبادل الرقمية المعتمدة</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#e9b44c]/20 border border-[#e9b44c]/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#e9b44c] flex items-center justify-center text-[#12302b] shadow-xs">
                    <span className="material-symbols-outlined text-xl text-[#12302b]">stars</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#ffffff]">مكافأة كاش باك 5% مضاعفة</p>
                    <p className="text-[11px] text-[#ede8dd]/80">تُحرر فور إدخال رمز استلامك</p>
                  </div>
                </div>
                <div className="text-left font-bold text-[#e9b44c] text-sm">
                  +3,350 نقطة
                  <div className="text-[11px] font-normal text-[#ede8dd]/80">(16.75 ₪ كاش باك)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MAIN BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN (8 cols): Delivery Timeline & Included Items */}
          <div className="lg:col-span-8 space-y-6">
            {/* DELIVERY TIMELINE STEPPER CARD */}
            <section className="bg-[#ffffff] rounded-2xl border-2 border-[#1f7a6e]/30 shadow-md overflow-hidden relative">
              <div className="bg-[#ede8dd]/50 px-6 py-4 border-b border-[#e1dacb] flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1f7a6e] text-xl">local_shipping</span>
                  <h2 className="text-base font-bold text-[#12302b]">مسار الشحنة والتسليم في الوقت الفعلي</h2>
                </div>
                <span className="text-xs text-[#576b66] font-mono bg-[#ffffff] px-2.5 py-1 rounded-lg border border-[#e1dacb]">
                  رقم البوليصة: #TRK-GZ-20260518-88
                </span>
              </div>
              <div className="p-6">
                <div className="relative py-4">
                  <div className="absolute top-9 right-8 left-8 h-1 bg-[#e1dacb] -z-0"></div>
                  <div className="absolute top-9 right-8 w-2/3 h-1 bg-[#12302b] -z-0 transition-all duration-500"></div>
                  
                  <div className="grid grid-cols-4 gap-2 relative z-10 text-center">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-[#12302b] text-[#ffffff] flex items-center justify-center font-bold shadow-md shadow-[#12302b]/20 ring-4 ring-[#ffffff]">
                        <span className="material-symbols-outlined text-xl">check</span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#12302b] mt-2.5">تأكيد الدفع والخصم</span>
                      <span className="text-[11px] text-[#576b66] mt-0.5">02:46 م - مكتمل</span>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-[#12302b] text-[#ffffff] flex items-center justify-center font-bold shadow-md shadow-[#12302b]/20 ring-4 ring-[#ffffff]">
                        <span className="material-symbols-outlined text-xl">inventory_2</span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#12302b] mt-2.5">تجهيز وتغليف البوتيك</span>
                      <span className="text-[11px] text-[#576b66] mt-0.5">03:15 م - بعناية تامة</span>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-[#e9b44c] text-[#12302b] flex items-center justify-center font-bold shadow-lg shadow-[#e9b44c]/30 ring-4 ring-[#ffffff] animate-bounce">
                        <span className="material-symbols-outlined text-xl">two_wheeler</span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#12302b] mt-2.5">مع مندوب التوصيل</span>
                      <span className="text-[11px] text-[#1f7a6e] font-black mt-0.5">المسار الحالي (بالقرب منك)</span>
                      <span className="text-[10px] text-[#835400] font-bold bg-[#fce09e] px-1.5 py-0.5 rounded mt-1">
                        متبقي 25 دقيقة
                      </span>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center opacity-70">
                      <div className="w-11 h-11 rounded-full bg-[#e1dacb] text-[#576b66] flex items-center justify-center font-bold ring-4 ring-[#ffffff]">
                        <span className="material-symbols-outlined text-xl">how_to_reg</span>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#576b66] mt-2.5">التسليم والمعاينة</span>
                      <span className="text-[11px] text-[#576b66] mt-0.5">بانتظار الاستلام والـ PIN</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ITEMS INCLUDED TABLE & CARD LIST */}
            <section className="bg-[#ffffff] rounded-2xl p-6 border border-[#e1dacb] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#e1dacb]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1f7a6e] text-xl">checkroom</span>
                  <h2 className="text-base font-bold text-[#12302b]">قائمة القطع المشمولة في هذا الطلب (2)</h2>
                </div>
                <span className="text-xs text-[#12302b] bg-[#fce09e] px-2.5 py-1 rounded-full font-bold border border-[#e9b44c]/40">
                  تغليف هدايا ملكي مجاني
                </span>
              </div>

              <div className="space-y-4">
                {/* Item 1 */}
                <div className="p-4 rounded-xl border border-[#e1dacb] hover:border-[#1f7a6e]/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#ede8dd]/20">
                  <div className="flex items-center gap-4">
                    <img
                      alt="فستان حرير شامبين راقي"
                      className="w-20 h-24 rounded-lg object-cover border border-[#e1dacb] shadow-xs shrink-0"
                      src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&auto=format&fit=crop&q=80"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-[#12302b]">فستان حرير شامبين راقي</h3>
                        <span className="text-xs text-[#576b66] bg-[#ede8dd] px-2 py-0.5 rounded font-mono">SKU: LMA-2026-DRS</span>
                      </div>
                      <p className="text-xs text-[#576b66]">تطريز حاشية يدوي فاخر • حرير طبيعي 100%</p>
                      <div className="flex items-center gap-2 pt-1 text-xs">
                        <span className="bg-[#ede8dd] px-2 py-0.5 rounded text-[#12302b] font-bold">المقاس: Medium (M)</span>
                        <span className="bg-[#ede8dd] px-2 py-0.5 rounded text-[#12302b] font-medium">اللون: شامبين ملكي</span>
                        <span className="text-[#576b66]">الكمية: 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right sm:text-left self-end sm:self-center">
                    <div className="flex items-baseline gap-1 justify-end">
                      <span className="text-lg font-bold text-[#12302b]">190.00</span>
                      <span className="text-sm font-bold text-[#12302b]">₪</span>
                    </div>
                    <div className="inline-flex items-center gap-1 text-[11px] text-[#12302b] font-bold bg-[#1f7a6e]/15 px-2.5 py-0.5 rounded-full mt-1 border border-[#1f7a6e]/20">
                      <span className="material-symbols-outlined text-[13px] text-[#1f7a6e]">savings</span>
                      <span>كاش باك: +1,900 نقطة (9.50 ₪)</span>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-4 rounded-xl border border-[#e1dacb] hover:border-[#1f7a6e]/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#ede8dd]/20">
                  <div className="flex items-center gap-4">
                    <img
                      alt="حذاء كعب سهرة ذهبي مرصع بالكريستال"
                      className="w-20 h-24 rounded-lg object-cover border border-[#e1dacb] shadow-xs shrink-0"
                      src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&auto=format&fit=crop&q=80"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-[#12302b]">حذاء كعب سهرة ذهبي مرصع بالكريستال الناعم</h3>
                        <span className="text-xs text-[#576b66] bg-[#ede8dd] px-2 py-0.5 rounded font-mono">SKU: LMA-9912-SHS</span>
                      </div>
                      <p className="text-xs text-[#576b66]">مرصع بكريستال لامع • نعل داخلي طبي مبطن لراحة فائقة</p>
                      <div className="flex items-center gap-2 pt-1 text-xs">
                        <span className="bg-[#ede8dd] px-2 py-0.5 rounded text-[#12302b] font-bold">المقاس: EU 38</span>
                        <span className="bg-[#ede8dd] px-2 py-0.5 rounded text-[#12302b] font-medium">ارتفاع الكعب: 8 سم</span>
                        <span className="text-[#576b66]">الكمية: 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right sm:text-left self-end sm:self-center">
                    <div className="flex items-baseline gap-1 justify-end">
                      <span className="text-lg font-bold text-[#12302b]">145.00</span>
                      <span className="text-sm font-bold text-[#12302b]">₪</span>
                    </div>
                    <div className="inline-flex items-center gap-1 text-[11px] text-[#12302b] font-bold bg-[#1f7a6e]/15 px-2.5 py-0.5 rounded-full mt-1 border border-[#1f7a6e]/20">
                      <span className="material-symbols-outlined text-[13px] text-[#1f7a6e]">savings</span>
                      <span>كاش باك: +1,450 نقطة (7.25 ₪)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#ede8dd]/50 border border-[#e1dacb] flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#e9b44c] text-lg">sync_alt</span>
                  <span className="text-xs font-bold text-[#12302b]">خدمة تجربة المقاس الفورية متاحة مع المندوب</span>
                </div>
                <span className="text-xs text-[#576b66]">يحق لكِ قياس القطع في غضون 10 دقائق قبل إعطاء رمز التسليم.</span>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN (4 cols): Secure PIN, Courier Details & Invoice */}
          <div className="lg:col-span-4 space-y-6">
            {/* 3. DELIVERY PIN & ESCROW SECURITY CARD */}
            <section className="bg-[#ffffff] rounded-2xl p-6 border-2 border-[#e9b44c]/60 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-[#e1dacb]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#e9b44c]/20 flex items-center justify-center text-[#12302b]">
                    <span className="material-symbols-outlined text-lg text-[#e9b44c]">key</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#12302b]">رمز التسليم والمعاينة السري (PIN)</h3>
                </div>
                <span className="bg-[#ffdad6] text-[#ba1a1a] text-[11px] font-bold px-2 py-0.5 rounded">خاص بكِ فقط</span>
              </div>
              <div className="py-4 text-center space-y-3">
                <p className="text-xs text-[#576b66]">أعطِ هذا الرمز للمندوب عند استلام شحنتك والتأكد من مطابقة المقاس والجودة:</p>
                <div className="flex items-center justify-center gap-2.5 bg-[#ede8dd] p-3 rounded-xl border border-[#e1dacb] cursor-pointer" dir="ltr" onClick={handleCopyPin} title="انقر لنسخ الرمز">
                  <span className="w-11 h-14 bg-[#12302b] text-[#ffffff] text-2xl font-black flex items-center justify-center rounded-lg shadow-inner">9</span>
                  <span className="w-11 h-14 bg-[#12302b] text-[#ffffff] text-2xl font-black flex items-center justify-center rounded-lg shadow-inner">1</span>
                  <span className="w-11 h-14 bg-[#12302b] text-[#ffffff] text-2xl font-black flex items-center justify-center rounded-lg shadow-inner">8</span>
                  <span className="w-11 h-14 bg-[#12302b] text-[#ffffff] text-2xl font-black flex items-center justify-center rounded-lg shadow-inner">4</span>
                </div>
                {copiedPin && (
                  <span className="text-xs text-[#1f7a6e] font-bold block animate-fade-in">تم نسخ الرمز بنجاح!</span>
                )}
                <div className="p-3 rounded-xl bg-[#fce09e]/30 border border-[#e9b44c]/50 text-right">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#e9b44c] text-base mt-0.5">shield</span>
                    <p className="text-[11px] text-[#12302b] leading-relaxed">
                      <strong>حماية تامة:</strong> لن يتم تحويل المبلغ من حساب الأمانة للتاجر، ولن تُحرر نقاط الكاش باك إلا بعد إدخال هذا الرمز مع المندوب.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. RECIPIENT & COURIER DISPATCH CARD */}
            <section className="bg-[#ffffff] rounded-2xl p-6 border border-[#e1dacb] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#e1dacb]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1f7a6e] text-xl">location_on</span>
                  <h3 className="text-sm font-bold text-[#12302b]">عنوان التوصيل والمستلم</h3>
                </div>
              </div>
              <div className="space-y-1.5 text-[#12302b]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold">سارة أحمد خليل</span>
                  <span className="text-xs text-[#576b66] font-mono">0599-876543</span>
                </div>
                <p className="text-xs text-[#576b66] leading-relaxed">
                  غزة - حي الرمال الشمالي، بالقرب من مجمع الهدى السكني، عمارة الأمل، الطابق الثالث، شقة 7.
                </p>
              </div>
              <div className="pt-3 border-t border-[#e1dacb]">
                <span className="text-[11px] text-[#576b66] block mb-2 font-bold">مندوب تبادل إكسبرس المعتمد</span>
                <div className="flex items-center justify-between bg-[#ede8dd]/50 p-3 rounded-xl border border-[#e1dacb]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#12302b] text-[#e9b44c] flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-2xl">person</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#12302b]">محمود الناجي</h4>
                      <p className="text-[11px] text-[#576b66]">مندوب موثق • تقييم 4.95 ⭐</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      className="p-2 rounded-xl bg-[#ffffff] text-[#12302b] hover:bg-[#ede8dd] transition-colors border border-[#e1dacb]"
                      href="tel:0599000000"
                      title="اتصال هاتفي"
                    >
                      <span className="material-symbols-outlined text-base">call</span>
                    </a>
                    <a
                      className="p-2 rounded-xl bg-[#1f7a6e] text-[#ffffff] hover:bg-[#18453e] transition-colors shadow-xs"
                      href="https://wa.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="محادثة واتساب"
                    >
                      <span className="material-symbols-outlined text-base">chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. FINANCIAL INVOICE SUMMARY CARD */}
            <section className="bg-[#ffffff] rounded-2xl p-6 border border-[#e1dacb] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#e1dacb]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1f7a6e] text-xl">receipt_long</span>
                  <h3 className="text-sm font-bold text-[#12302b]">تفاصيل الفاتورة والحساب</h3>
                </div>
                <span className="text-[11px] font-mono text-[#576b66]">VAT Included</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between items-center text-[#576b66]">
                  <span>المجموع الفرعي للقطع (2)</span>
                  <span className="font-bold text-[#12302b]">335.00 ₪</span>
                </div>
                <div className="flex justify-between items-center text-[#576b66]">
                  <div className="flex items-center gap-1">
                    <span>رسوم التوصيل السريع لباب البيت</span>
                    <span className="material-symbols-outlined text-sm text-[#1f7a6e]">local_shipping</span>
                  </div>
                  <span className="text-[#1f7a6e] font-bold">مجاناً (يتحملها المتجر)</span>
                </div>
                <div className="flex justify-between items-center text-[#576b66]">
                  <span>خصم كود الترحيب أو القسيمة</span>
                  <span className="font-medium">0.00 ₪</span>
                </div>
                <div className="pt-3 border-t border-[#e1dacb] flex justify-between items-baseline">
                  <div>
                    <span className="text-sm font-bold text-[#12302b] block">الإجمالي النهائي المدفوع</span>
                    <span className="text-[11px] text-[#1f7a6e] font-bold">تم الخصم بالكامل إلكترونياً</span>
                  </div>
                  <div className="text-left">
                    <span className="text-2xl font-black text-[#12302b]">335.00</span>
                    <span className="text-sm font-bold text-[#835400] mr-0.5">₪</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-[#fce09e]/30 rounded-xl border border-[#e9b44c]/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#e9b44c] text-lg">stars</span>
                  <span className="text-xs font-bold text-[#12302b]">نقاط الكاش باك المحتسبة</span>
                </div>
                <span className="text-xs font-black text-[#12302b]">+3,350 نقطة (16.75 ₪)</span>
              </div>
            </section>
          </div>
        </div>

        {/* 6. BOTTOM EXECUTIVE ACTION BAR */}
        <section className="bg-[#ffffff] rounded-2xl p-8 border-2 border-[#1f7a6e]/40 shadow-lg text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-[#1f7a6e]/15 text-[#1f7a6e] flex items-center justify-center mx-auto mb-3 shadow-sm">
              <span className="material-symbols-outlined text-3xl">task_alt</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#12302b]">وصلتكِ الشحنة وقمتِ بتجربة المقاس؟</h3>
            <p className="text-sm text-[#576b66] leading-relaxed">
              تأكيدكِ الفوري يعزز ثقة التاجر ويحرر{' '}
              <span className="font-bold text-[#12302b] bg-[#fce09e] px-1.5 py-0.5 rounded">3,350 نقطة كاش باك</span>{' '}
              فوراً إلى محفظتكِ الرقمية لاستخدامها بالمشتريات القادمة.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <button
              onClick={() => navigate('/customer/orders/TBD-2026-7841/confirm-delivery')}
              className="w-full max-w-xl h-16 rounded-2xl bg-gradient-to-r from-[#12302b] via-[#1f7a6e] to-[#12302b] text-[#ffffff] text-base sm:text-lg font-black transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-[#1f7a6e]/25 ring-4 ring-[#1f7a6e]/20 border border-[#71dba2]/30 cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl text-[#e9b44c]">verified</span>
              <span>تأكيد استلام وفحص القطع (تحرير 3,350 نقطة)</span>
              <span className="material-symbols-outlined text-xl">arrow_back</span>
            </button>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => navigate('/customer/orders/TBD-2026-7841/exchange')}
                className="px-4 py-2.5 rounded-xl border border-[#e1dacb] hover:bg-[#ede8dd] text-[#12302b] text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-base text-[#1f7a6e]">published_with_changes</span>
                <span>طلب تبديل المقاس (مجاناً خلال 24 ساعة)</span>
              </button>

              <button
                onClick={() => alert('المندوب على بعد 1.2 كم من موقعك (الوصول متوقع بعد 25 دقيقة)')}
                className="px-4 py-2.5 rounded-xl border border-[#1f7a6e] bg-[#ffffff] hover:bg-[#ede8dd] text-[#1f7a6e] text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">pin_drop</span>
                <span>تتبع المندوب على الخريطة</span>
              </button>

              <button
                className="px-4 py-2.5 rounded-xl border border-[#e1dacb] bg-[#ffffff] hover:bg-[#ede8dd] text-[#576b66] hover:text-[#12302b] text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 shadow-xs cursor-pointer"
                onClick={() => window.print()}
              >
                <span className="material-symbols-outlined text-base">download</span>
                <span>طباعة الفاتورة PDF</span>
              </button>

              <button
                onClick={() => navigate('/customer/orders/TBD-2026-7841/cancel')}
                className="px-4 py-2.5 rounded-xl border border-[#ba1a1a]/30 hover:border-[#ba1a1a] bg-[#ffdad6]/40 hover:bg-[#ffdad6]/70 text-[#ba1a1a] text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-base text-[#ba1a1a]">cancel</span>
                <span>إلغاء الطلب (أجرة التوصيل 15.00 ₪)</span>
              </button>
            </div>

            <div className="w-full max-w-xl p-3.5 rounded-xl bg-[#ede8dd]/40 border border-[#e1dacb] text-right flex items-start gap-3 mt-1">
              <span className="material-symbols-outlined text-[#835400] text-lg mt-0.5 shrink-0">info</span>
              <div className="space-y-1 text-xs text-[#576b66] leading-relaxed">
                <span className="font-bold text-[#12302b] block">سياسة وشروط إلغاء الطلب:</span>
                <p>
                  في حال إلغاء الطلب عند وصول المندوب، يتم استرداد كامل قيمة المنتجات{' '}
                  <span className="font-bold text-[#12302b]">(335.00 ₪)</span> إلى محفظتك الإلكترونية فوراً، ويلتزم المشتري بدفع رسوم التوصيل المباشرة{' '}
                  <span className="font-bold text-[#ba1a1a]">(15.00 ₪)</span> للمندوب لتعويض مشوار التوصيل، كما تُلغى نقاط الكاش باك المعلقة{' '}
                  <span className="font-bold text-[#835400]">(+3,350 نقطة)</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
