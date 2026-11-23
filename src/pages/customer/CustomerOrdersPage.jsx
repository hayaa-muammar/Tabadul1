import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';
import ToastNotification from '../../components/common/ToastNotification';
import { useAuth } from '../../context/AuthContext';
import { usePoints } from '../../context/PointsContext';

/**
 * CustomerOrdersPage
 * Exact React implementation of 28 طلباتيcode.html
 * Customer Orders & Live Shipment Tracking Hub
 */
export default function CustomerOrdersPage() {
  const { user } = useAuth();
  const { pointsBalance } = usePoints();
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'in_transit' | 'pending' | 'completed' | 'cancelled'
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  return (
    <div className="bg-[#f6f3ec] text-[#12302b] font-tajawal antialiased min-h-screen flex flex-col justify-between selection:bg-[#e9b44c]/30 selection:text-[#12302b] text-right">
      {/* Customer Header */}
      <CustomerHeader />
      <ToastNotification />

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        
        {/* Breadcrumbs Navigation */}
        <nav aria-label="مسار التصفح" className="flex items-center gap-2 text-[#576b66] text-xs font-semibold mb-6">
          <Link to="/shopper" className="hover:text-[#1f7a6e] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-base">home</span>
            <span>الرئيسية</span>
          </Link>
          <span className="material-symbols-outlined text-xs text-[#a4a99f]">chevron_left</span>
          <Link to="/customer/profile" className="hover:text-[#1f7a6e] transition-colors">حسابي</Link>
          <span className="material-symbols-outlined text-xs text-[#a4a99f]">chevron_left</span>
          <span className="text-[#12302b] font-bold">طلباتي</span>
        </nav>

        {/* Page Title & Micro Summary Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#12302b] tracking-tight">
              سجل الطلبات وتتبع الشحنات
            </h1>
            <p className="text-sm text-[#576b66] mt-1">
              تابعي مسار مشترياتكِ الفاخرة مباشرة خطوة بخطوة، واحصلي على نقاط الولاء النقدية مع كل طلب.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1f7a6e]/15 border border-[#1f7a6e]/30 text-[#12302b] text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#1f7a6e] animate-ping"></span>
              <span>طلب نشط الآن برسم التسليم</span>
            </span>
          </div>
        </div>

        {/* Filters, Tabs & Search Hub */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e1dacb] mb-8 space-y-4">
          {/* Status Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-[#e1dacb] scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap shadow-xs transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#12302b] text-white'
                  : 'text-[#576b66] hover:text-[#12302b] hover:bg-[#ede8dd]'
              }`}
            >
              <span>الكل</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === 'all' ? 'bg-[#1f7a6e] text-white' : 'bg-[#ede8dd] text-[#12302b]'}`}>
                4
              </span>
            </button>

            <button
              onClick={() => setActiveTab('in_transit')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'in_transit'
                  ? 'bg-[#12302b] text-white'
                  : 'text-[#576b66] hover:text-[#12302b] hover:bg-[#ede8dd]'
              }`}
            >
              <span>قيد التوصيل والانتظار</span>
              <span className="bg-[#e9b44c] text-[#12302b] font-bold text-xs px-2 py-0.5 rounded-full">
                1
              </span>
            </button>

            <button
              onClick={() => setActiveTab('pending')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'pending'
                  ? 'bg-[#12302b] text-white'
                  : 'text-[#576b66] hover:text-[#12302b] hover:bg-[#ede8dd]'
              }`}
            >
              <span>بانتظار التأكيد</span>
              <span className="bg-[#ede8dd] text-[#12302b] text-xs px-2 py-0.5 rounded-full">
                1
              </span>
            </button>

            <button
              onClick={() => setActiveTab('completed')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'completed'
                  ? 'bg-[#12302b] text-white'
                  : 'text-[#576b66] hover:text-[#12302b] hover:bg-[#ede8dd]'
              }`}
            >
              <span>مكتملة ومستلمة</span>
              <span className="bg-[#ede8dd] text-[#12302b] text-xs px-2 py-0.5 rounded-full">
                2
              </span>
            </button>

            <button
              onClick={() => setActiveTab('cancelled')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer opacity-70 ${
                activeTab === 'cancelled'
                  ? 'bg-[#12302b] text-white'
                  : 'text-[#576b66] hover:text-[#12302b] hover:bg-[#ede8dd]'
              }`}
            >
              <span>مرتجعة / ملغاة</span>
              <span className="bg-[#ede8dd] text-[#12302b] text-xs px-2 py-0.5 rounded-full">
                0
              </span>
            </button>
          </div>

          {/* Search & Sorting Toolbar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            <div className="relative w-full sm:w-96">
              <input
                className="w-full h-11 pr-11 pl-4 rounded-xl bg-[#ede8dd] border border-[#e1dacb] text-[#12302b] placeholder:text-[#576b66]/60 text-xs focus:outline-none focus:ring-2 focus:ring-[#1f7a6e] focus:border-transparent transition-all"
                placeholder="ابحثي برقم الطلب، اسم البوتيك، أو نوع القطعة..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="material-symbols-outlined absolute right-3.5 top-2.5 text-[#576b66] text-xl">search</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#576b66] whitespace-nowrap">ترتيب حسب:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-11 px-3 pl-8 rounded-xl bg-[#ede8dd] border border-[#e1dacb] text-[#12302b] text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#1f7a6e] transition-all"
                >
                  <option value="newest">الأحدث أولاً (تلقائي)</option>
                  <option value="oldest">الأقدم تاريخاً</option>
                  <option value="highest_points">الأعلى كسباً للنقاط</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid Layout: Orders Canvas + Aside Insight Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Orders Stream (8 Columns) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* CARD 1: ACTIVE ORDER HIGHLIGHT */}
            <article className="bg-white rounded-2xl border-2 border-[#1f7a6e]/40 shadow-md overflow-hidden relative transition-all duration-200 hover:shadow-lg">
              {/* Top Accent Ribbon */}
              <div className="bg-[#12302b] text-white px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="bg-[#e9b44c] text-[#12302b] text-xs font-black px-2.5 py-1 rounded-lg">
                    شحنة نشطة
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-[#ede8dd]/80">رقم الطلب:</span>
                    <span className="text-sm font-bold tracking-wider text-white" dir="ltr">#TBD-2026-7841</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#ede8dd]/90 text-xs">
                  <span className="material-symbols-outlined text-base text-[#e9b44c]">calendar_today</span>
                  <span>اليوم، 14 فبراير 2026 - 02:45 مساءً</span>
                </div>
              </div>

              {/* Merchant & Live Status Headline */}
              <div className="p-6 border-b border-[#e1dacb] bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#e9b44c]/20 border border-[#e9b44c]/40 flex items-center justify-center p-2 text-[#e9b44c] shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-3xl icon-fill">diamond</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-[#12302b]">بوتيك لمسة للأزياء الراقية</h3>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#fce09e] text-[#12302b]">
                        <span className="material-symbols-outlined text-xs icon-fill text-[#12302b]">verified</span>
                        <span>شريك ماسي معتمد</span>
                      </span>
                    </div>
                    <p className="text-xs text-[#576b66] mt-0.5">غزة - شارع الرمال التجاري | الدفع: تم السداد إلكترونياً (محفظة جوال باي)</p>
                  </div>
                </div>

                {/* Live ETA Pill */}
                <div className="flex items-center gap-2.5 bg-[#1f7a6e]/15 border border-[#1f7a6e]/30 px-4 py-2 rounded-xl self-start md:self-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1f7a6e] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1f7a6e]"></span>
                  </span>
                  <div className="flex flex-col text-right">
                    <span className="text-xs text-[#12302b] font-bold">قيد التوصيل مع المندوب</span>
                    <span className="text-xs text-[#12302b] font-black">وصول متوقع خلال 25 دقيقة</span>
                  </div>
                </div>
              </div>

              {/* 4-Stage Visual Shipment Stepper */}
              <div className="px-6 py-6 bg-[#ede8dd]/40">
                <h4 className="text-xs font-bold text-[#12302b] mb-6 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#e9b44c] text-lg">local_shipping</span>
                  <span>مسار الشحنة والتسليم في الوقت الفعلي</span>
                </h4>
                <div className="relative">
                  <div className="absolute top-5 right-6 left-6 h-1 bg-[#e1dacb] -z-0"></div>
                  <div className="absolute top-5 right-6 w-2/3 h-1 bg-[#12302b] -z-0 transition-all duration-500"></div>
                  <div className="grid grid-cols-4 gap-2 relative z-10 text-center">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#12302b] text-white flex items-center justify-center font-bold shadow-md ring-4 ring-white">
                        <span className="material-symbols-outlined text-xl">check</span>
                      </div>
                      <span className="text-xs font-bold text-[#12302b] mt-2">تأكيد الدفع والخصم</span>
                      <span className="text-[11px] text-[#576b66] mt-0.5">02:46 م - مكتمل</span>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#12302b] text-white flex items-center justify-center font-bold shadow-md ring-4 ring-white">
                        <span className="material-symbols-outlined text-xl">inventory_2</span>
                      </div>
                      <span className="text-xs font-bold text-[#12302b] mt-2">تجهيز البوتيك وتغليف</span>
                      <span className="text-[11px] text-[#576b66] mt-0.5">03:15 م - بعناية تامة</span>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#e9b44c] text-[#12302b] flex items-center justify-center font-bold shadow-lg ring-4 ring-white animate-bounce">
                        <span className="material-symbols-outlined text-xl">two_wheeler</span>
                      </div>
                      <span className="text-xs font-bold text-[#12302b] mt-2">مع مندوب التوصيل</span>
                      <span className="text-[11px] text-[#1f7a6e] font-black mt-0.5">المسار الحالي (بالقرب منك)</span>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center opacity-70">
                      <div className="w-10 h-10 rounded-full bg-[#e1dacb] text-[#576b66] flex items-center justify-center font-bold ring-4 ring-white">
                        <span className="material-symbols-outlined text-xl">how_to_reg</span>
                      </div>
                      <span className="text-xs font-medium text-[#576b66] mt-2">التسليم والمعاينة</span>
                      <span className="text-[11px] text-[#576b66] mt-0.5">بانتظار الاستلام والـ PIN</span>
                    </div>
                  </div>
                </div>

                {/* Delivery PIN Reveal Banner */}
                <div className="mt-8 bg-white border border-[#e9b44c]/60 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#e9b44c]/20 text-[#12302b] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-2xl text-[#e9b44c]">key</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#12302b]">رمز التسليم والمعاينة السري (Delivery PIN)</span>
                        <span className="bg-[#ffdad6] text-[#ba1a1a] text-[11px] font-bold px-2 py-0.5 rounded">خاص بكِ فقط</span>
                      </div>
                      <p className="text-xs text-[#576b66] mt-0.5">أعطِ هذا الرمز للمندوب عند استلام شحنتك والتأكد من مطابقة المقاس والجودة.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-[#ede8dd] px-3 py-2 rounded-xl border border-[#e1dacb]" dir="ltr">
                    <span className="w-9 h-11 bg-[#12302b] text-white text-xl font-bold flex items-center justify-center rounded-lg shadow-inner">9</span>
                    <span className="w-9 h-11 bg-[#12302b] text-white text-xl font-bold flex items-center justify-center rounded-lg shadow-inner">1</span>
                    <span className="w-9 h-11 bg-[#12302b] text-white text-xl font-bold flex items-center justify-center rounded-lg shadow-inner">8</span>
                    <span className="w-9 h-11 bg-[#12302b] text-white text-xl font-bold flex items-center justify-center rounded-lg shadow-inner">4</span>
                  </div>
                </div>
              </div>

              {/* Ordered Items Summary Grid */}
              <div className="p-6 border-t border-[#e1dacb] space-y-4">
                <h5 className="text-xs font-bold text-[#12302b]">القطع المشمولة في هذه الشحنة (قطعتان):</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Item A */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#ede8dd]/40 border border-[#e1dacb]">
                    <img
                      alt="فستان حرير شامبين راقي"
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5xtCuTJZLkWzTLY9fOgBv5SK88Pcf1HqJeTD5rFDc6EceUJRx7WWQdZjT_DuW9KVbAbQ8igTVHTb-yrJIWI9Es9L2c2w1lhSEI7gBZOhWeBqTBYCI4eVFBiOM00Da7iCG_xyGpwf9ouhZ6eMQsWSbS7cXXNcegerr-3VGyuw4gBsX_KXvbPUTsRNR1xOsurgC21FPNvjuudW9RfFTRJELK9RhQFQEGMZIeVm0qMVrmd_3g9lHBdNwrA"
                    />
                    <div className="flex-1 min-w-0">
                      <h6 className="text-xs font-bold text-[#12302b] truncate">فستان حرير شامبين راقي</h6>
                      <p className="text-[11px] text-[#576b66]">المقاس: M | اللون: ذهبي شامبين</p>
                      <p className="text-xs font-bold text-[#12302b] mt-1">340.00 ₪</p>
                    </div>
                  </div>

                  {/* Item B */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#ede8dd]/40 border border-[#e1dacb]">
                    <img
                      alt="حذاء كعب سهرة ذهبي مرصع"
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxvBgYp59RSpJckLxMbvA9j-LXupbTM8NumZlzeo8jYWBApEAk0zQ8l47yZy_ZCsNojYuAlHNj0K6HumrAQtViVsPS4M8UDTlAvszr6iUzuo3LLCPlbSk0cDfq9AfGzVQsfNY91RTvBs6dwncq2JrVduPJsjX0NfEV7Kj-WvD30WZtvhz-x3jcQVd3xFXQ3iQaqtbgy4NkKZP36wDO1JUskbshuHLy2JdlCcomeTx7Q86IzQhKQeZuNw"
                    />
                    <div className="flex-1 min-w-0">
                      <h6 className="text-xs font-bold text-[#12302b] truncate">حذاء كعب سهرة مرصع</h6>
                      <p className="text-[11px] text-[#576b66]">المقاس: 38 | الكعب: 8.5 سم</p>
                      <p className="text-xs font-bold text-[#12302b] mt-1">210.00 ₪</p>
                    </div>
                  </div>
                </div>

                {/* Loyalty Banner for Active Order */}
                <div className="bg-[#fce09e]/30 border border-[#e9b44c]/60 rounded-xl p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#e9b44c] icon-fill">stars</span>
                    <span className="text-xs font-bold text-[#12302b]">
                      كسبتِ 3,350 نقطة معلّقة (قيمتها 16.75 ₪ كاش باك 5%)
                    </span>
                  </div>
                  <span className="text-[11px] text-[#12302b] font-bold bg-white px-2.5 py-1 rounded-full shadow-xs border border-[#e1dacb]">
                    تتحول لرصيدكِ فور تأكيد الاستلام
                  </span>
                </div>
              </div>

              {/* Bottom Actions Tray */}
              <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Link
                    to="/orders/TBD-2026-7841"
                    className="h-11 px-5 rounded-xl bg-[#1f7a6e] text-white text-xs font-bold hover:bg-[#18453e] transition-colors flex items-center gap-2 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">visibility</span>
                    <span>عرض تفاصيل الطلب الكاملة</span>
                  </Link>

                  <Link
                    to="/orders/TBD-2026-7841/confirm-delivery"
                    className="h-11 px-4 rounded-xl border border-[#1f7a6e] text-[#1f7a6e] text-xs font-bold hover:bg-[#ede8dd] transition-colors flex items-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">task_alt</span>
                    <span>تأكيد استلام وفحص القطع (31code)</span>
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to="/orders/TBD-2026-7841/exchange"
                    className="h-11 px-3.5 rounded-xl border border-[#e1dacb] text-[#576b66] hover:text-[#12302b] text-xs font-medium hover:bg-[#ede8dd] transition-colors flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base text-[#1f7a6e]">sync_alt</span>
                    <span>تبديل مقاس (33code)</span>
                  </Link>

                  <Link
                    to="/orders/TBD-2026-7841/cancel"
                    className="h-11 px-3.5 rounded-xl border border-[#ba1a1a]/30 text-[#ba1a1a] hover:bg-[#ffdad6]/40 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">cancel</span>
                    <span>إلغاء الطلب (34code)</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* CARD 2: RECENT COMPLETED ORDER */}
            <article className="bg-white rounded-2xl border border-[#e1dacb] shadow-sm overflow-hidden hover:border-[#1f7a6e]/50 transition-all">
              <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e1dacb]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#ede8dd] flex items-center justify-center text-[#12302b] shrink-0">
                    <span className="material-symbols-outlined text-2xl">storefront</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-[#12302b]">متجر السنيكرز العصري (Urban Sneaks)</h3>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#ede8dd] text-[#12302b]">
                        طلب مكتمل
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[#576b66] text-xs mt-0.5">
                      <span className="font-bold" dir="ltr">#TBD-2026-6210</span>
                      <span>•</span>
                      <span>تم التسليم: 08 فبراير 2026</span>
                    </div>
                  </div>
                </div>

                {/* Confirmed Status Badge */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1f7a6e]/15 text-[#12302b] text-xs font-bold self-start md:self-center">
                  <span className="material-symbols-outlined text-base icon-fill text-[#1f7a6e]">check_circle</span>
                  <span>تم التسليم بنجاح وتأكيد المقاس</span>
                </div>
              </div>

              {/* Item Details & Unlocked Reward Points */}
              <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <img
                    alt="حذاء رياضي مريح جلد أبيض كلاسيك"
                    className="w-20 h-20 rounded-xl object-cover border border-[#e1dacb] shrink-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyBYPOt8PSSYcVspwDD-4VoNJZAlrETuaog6DbRbxFZ4hZxdtACvUwT90eHrjLp6uEPUNhdqSG6mtjTu7ZAhD6PPji1Ma8GMTneFkXomrbL2xPepiwAW1bKhEK4qujbzay_hKyKmChpBm-SBB29emBw5im0uSzetRKtT3nJDpEosw6iR4XbnaCyUUXesC2Ti5BhkOdFrpjpO4BFXB8MZeGJ5rZHwup9JsfCKKL8GlYlkGYF8xBz6pQRQ"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#12302b]">حذاء رياضي مريح جلد أبيض كلاسيك</h4>
                    <p className="text-xs text-[#576b66] mt-0.5">المقاس: 39 | النوع: أحذية رياضية مريحة للمشي اليومي</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-sm font-bold text-[#12302b]">180.00 ₪</span>
                      <span className="text-xs bg-[#1f7a6e]/15 text-[#12302b] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#1f7a6e]/20">
                        <span className="material-symbols-outlined text-[13px] icon-fill text-[#1f7a6e]">savings</span>
                        <span>+1,800 نقطة أضيفت لمحفظتك وتم تحريرها</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <Link
                    to="/orders/TBD-2026-6210"
                    className="h-10 px-3.5 rounded-xl border border-[#e1dacb] hover:bg-[#ede8dd] text-[#12302b] text-xs font-medium transition-colors flex items-center justify-center cursor-pointer"
                  >
                    عرض التفاصيل
                  </Link>
                  <Link
                    to="/orders/TBD-2026-6210/exchange"
                    className="h-10 px-3.5 rounded-xl border border-[#d4cebf] hover:border-[#1f7a6e] text-[#12302b] text-xs font-medium transition-colors flex items-center justify-center cursor-pointer"
                  >
                    طلب استبدال مقاس
                  </Link>
                </div>
              </div>
            </article>

          </div>

          {/* Sidebar Column: Wallet Snapshot, Order Stats (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Loyalty Balance Hero Card */}
            <div className="bg-gradient-to-br from-[#12302b] via-[#18453e] to-[#0c221e] text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#e9b44c]/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-[#c0ede4] font-semibold">محفظة الولاء «تبادل»</span>
                <span className="inline-flex items-center gap-1 bg-[#e9b44c] text-[#12302b] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  <span className="material-symbols-outlined text-[14px] icon-fill text-[#12302b]">workspace_premium</span>
                  <span>المستوى الذهبي VIP</span>
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-numeral-hero text-3xl font-extrabold text-white">
                    {(pointsBalance || 2400).toLocaleString()}
                  </span>
                  <span className="text-sm font-bold text-[#e9b44c]">نقطة متاحة</span>
                </div>
                <p className="text-xs text-[#c0ede4] mt-1">
                  تُعادل رصيد شراء نقدي فوري بقيمة <span className="text-white font-bold">{((pointsBalance || 2400) / 200).toFixed(2)} ₪</span> في أي متجر شريك.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <Link
                  to="/customer/wallet"
                  className="h-11 rounded-xl bg-[#e9b44c] text-[#12302b] text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#fce09e] transition-transform duration-150 active:scale-95 shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base icon-fill text-[#12302b]">redeem</span>
                  <span>المحفظة الشاملة (40code)</span>
                </Link>
                <Link
                  to="/customer/profile"
                  className="h-11 rounded-xl bg-white/10 text-white border border-white/20 text-xs font-medium hover:bg-white/20 transition-transform duration-150 active:scale-95 flex items-center justify-center cursor-pointer"
                >
                  <span>الملف الشخصي (39code)</span>
                </Link>
              </div>
            </div>

            {/* Fast Stats Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#e1dacb] shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-[#12302b]">إحصائيات مشترياتكِ</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#ede8dd]/50 border border-[#e1dacb]/60">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#e9b44c]">pending_actions</span>
                    <span className="text-xs text-[#12302b]">النقاط المعلّقة بالطلبات:</span>
                  </div>
                  <span className="text-xs font-bold text-[#12302b]">3,350 نقطة</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#ede8dd]/50 border border-[#e1dacb]/60">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#1f7a6e]">savings</span>
                    <span className="text-xs text-[#12302b]">إجمالي التوفير التراكمي:</span>
                  </div>
                  <span className="text-xs font-bold text-[#1f7a6e]">142.50 ₪</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#ede8dd]/50 border border-[#e1dacb]/60">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#12302b]">task_alt</span>
                    <span className="text-xs text-[#12302b]">الطلبات المستلمة بنجاح:</span>
                  </div>
                  <span className="text-xs font-bold text-[#12302b]">18 طلب</span>
                </div>
              </div>
            </div>

            {/* Direct Customer Care Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#e1dacb] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#1f7a6e]/15 text-[#1f7a6e] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-2xl">support_agent</span>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#12302b]">خدمة العملاء المباشرة 24/7</h5>
                  <p className="text-[11px] text-[#576b66]">مساعدة فورية حول التوصيل والاستبدال</p>
                </div>
              </div>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 rounded-xl bg-[#1f7a6e] hover:bg-[#18453e] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>تواصل مباشر عبر واتساب</span>
              </a>
            </div>

          </aside>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
