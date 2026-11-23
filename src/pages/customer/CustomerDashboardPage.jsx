import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { usePoints } from '../../context/PointsContext';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';

export default function CustomerDashboardPage() {
  const { user } = useAuth();
  const { pointsBalance, redeemPoints } = usePoints();
  const [showQrModal, setShowQrModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [redeemedVouchers, setRedeemedVouchers] = useState({});
  const [redeemSuccessMsg, setRedeemSuccessMsg] = useState(null);

  // Countdown timer for 2X flash banner (starts at 09:42:18)
  const [timeLeft, setTimeLeft] = useState({
    hours: 9,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const padZero = (n) => String(n).padStart(2, '0');

  // Format numbers with commas (Western Arabic 1, 2, 3...)
  const formatNumber = (num) => {
    return Number(num).toLocaleString('en-US');
  };

  // Convert points to ILS (e.g. 3000 -> "15.00")
  const pointsToIls = (pts) => {
    return (Number(pts) / 200).toFixed(2);
  };

  const vouchers = [
    {
      id: 'v1',
      title: 'قسيمة خصم نقدي 15 ₪',
      cost: 3000,
      description: 'تطبق فوراً عند الدفع لدى أي من متاجر الأزياء أو الأحذية الشريكة في المنصة دون حد أدنى.',
      validity: 'صالح لغاية 30 يوماً',
      badge: 'موصى به لكِ',
      isFeatured: true,
    },
    {
      id: 'v2',
      title: 'قسيمة خصم نقدي 10 ₪',
      cost: 2000,
      description: 'خصم مباشر عند شراء أي فستان أو سنيكرز، ويبقى في رصيدك 1,000 نقطة للمشتريات التالية.',
      validity: 'جاهز للاستبدال',
      badge: 'قسيمة متوسطة',
      isFeatured: false,
    },
    {
      id: 'v3',
      title: 'توصيل مجاني للطلب القادم',
      cost: 1500,
      description: 'توصيل سريع مجاني لباب المنزل لكافة محافظات قطاع غزة مع أي متجر شريك.',
      validity: 'صالح لـ 3 استخدامات',
      badge: 'توفير فوري',
      isFeatured: false,
    },
  ];

  const stores = [
    {
      id: 'lamsa',
      name: 'بوتيك لمسة للأزياء الراقية',
      slug: 'lamsa-boutique',
      category: 'dresses',
      categoryLabel: 'أزياء راقية وسهرة',
      location: 'غزة - شارع الرمال',
      description: 'أرقى الفساتين والتصاميم العصرية للمناسبات الخاصة مع ضمان المقاس والجودة الفاخرة.',
      cashback: 'كاش باك 10% نقاط',
      rating: '4.9',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBI-KwPt614r6Smxnqgw4tuOHc1qXjDN0tQI9uGS9rDiNpFweOnCGAa3CHBWhq4BrH0kjpzqEiy6xrB8JJypvPWXlXwdBRVSgLII7cEoC1dEW0Xw2nmb54J2gO5ATZADQLIfnqusUe9beozig1GSLDnzPyQYubNJgWfmk2y_FnbEFrIvBYqD2vUEouLSBHR8jtbh4xzFBZDNyqg6zlEBDPAuo8lfV8TJSWKxqJLZbo4CFgmPZEmk0i7YA',
    },
    {
      id: 'yaqoot',
      name: 'دار الياقوت للعبايات',
      slug: 'yaqoot-abayas',
      category: 'abayas',
      categoryLabel: 'عبايات وشالات مطرزة',
      location: 'غزة - الميناء',
      description: 'عبايات خليجية وتطريز فلسطيني فاخر مع شالات حريرية متناسقة بأعلى درجات الإتقان.',
      cashback: 'كاش باك 8% نقاط',
      rating: '4.95',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBUW-Z1A9dFmYAeglZgYEkpY280oURr84rD044IACCNhN3VHZLIxChKeAsSrz-5UafvTLQm1CnyTp2Q1xgTmcjkaN-8n3Aqw-HxX77E9AzULs20VlPwQ1pPxhAWfDSOd5tghm36hDxvjz3HvaXIM-bT_liNFPcSLRNVBRe_GlpVkXR1cnDEC6aafk80UbiY1Y8x8qX0AArYaZ4z51j_sHfEAyRIRi_TVRC8mIXaI_e9B4vPTTpPxIj2cQ',
    },
    {
      id: 'milano',
      name: 'ميلانو فوتوير للأحذية',
      slug: 'milano-footwear',
      category: 'shoes',
      categoryLabel: 'أحذية وسنيكرز رسمية',
      location: 'غزة - شارع عمر المختار',
      description: 'أحذية إيطالية طبية، وسنيكرز مريحة وعصرية للمشي والعمل والمناسبات اليومية.',
      cashback: 'كاش باك 7% نقاط',
      rating: '4.88',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBZguWpJ5Lmj6DSo0azYaaQ7mWuRGGDaABMVjGUXgNj3evYVngMliXtl2aU32vtv4XABQRA9NGe1s7pVKZzG-26NZhEkEXywRD3fkZNIyqJ3_T9wi5j1EgoVgiF6CUUtufCVX6oMnRp7xXYZMaogUEitT-bj-ec3INmV6w-fTLHxtsMorVPnBg70edK83mh08KD8hSb6KccrqT0iALq5Kk5ceZ8C1mMa384ib969AbUTOyBSvanBF7tAg',
    },
    {
      id: 'velvet-rose',
      name: 'بوتيك فيلفت روز',
      slug: 'velvet-rose',
      category: 'shoes',
      categoryLabel: 'حقائب وأحذية سهرة',
      location: 'غزة - تل الهوى',
      description: 'تشكيلات حصرية من حقائب اليد الجلدية والأحذية المتناسقة لإكمال إطلالتك الفاخرة.',
      cashback: 'كاش باك 5% نقاط',
      rating: '4.92',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAwWjt4zqdcxYhvSgega8HTOCSL0ejmjpnUqidA97TP37KcPkdM9dtwHpDyp5MABEnjLVwO0YVEmxgdEN__j3HWOaN1lT-GZxzqqxdTIWVVO8H89H_CnZMLFmmIbljoCeN4x-XvuUUpDkYw_JpM-RTXhn2mwGD-JbC-KjS4DYZI8wGoKHHpnPPI-4esyy1a6dsLUnhEHOSte-31ugzmrqmkvwj9Ci-5Ho10fJ-CsZ2tpuMyWhoX4BieBw',
    },
  ];

  const filteredStores =
    selectedCategory === 'all' ? stores : stores.filter((s) => s.category === selectedCategory);

  const handleRedeemVoucher = (voucher) => {
    if (pointsBalance < voucher.cost) {
      alert(`رصيد نقاطك (${formatNumber(pointsBalance)}) غير كافٍ لاستبدال هذه القسيمة (${formatNumber(voucher.cost)} نقطة).`);
      return;
    }

    const success = redeemPoints(voucher.cost, `استبدال ${voucher.title}`);
    if (success) {
      setRedeemedVouchers((prev) => ({ ...prev, [voucher.id]: true }));
      setRedeemSuccessMsg(`تم استبدال "${voucher.title}" بنجاح! تم خصم ${formatNumber(voucher.cost)} نقطة.`);
      setTimeout(() => setRedeemSuccessMsg(null), 5000);
    }
  };

  return (
    <div
      className="text-[#191c22] antialiased min-h-screen flex flex-col bg-[#f6f3ec] font-tajawal selection:bg-[#ffddb5] selection:text-[#2a1800]"
      style={{ fontFamily: 'Tajawal, sans-serif' }}
    >
      {/* ==================== TOP NAVIGATION BAR ==================== */}
      <CustomerHeader />

      {/* Global Toast Notification */}
      {redeemSuccessMsg && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 w-full">
          <div className="bg-[#12302b] text-white p-3.5 rounded-2xl flex items-center justify-between shadow-lg border border-[#e9b44c]">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#e9b44c] text-[20px]">check_circle</span>
              <span className="text-xs sm:text-sm font-bold">{redeemSuccessMsg}</span>
            </div>
            <button
              onClick={() => setRedeemSuccessMsg(null)}
              className="text-white/70 hover:text-white p-1"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
        </div>
      )}

      {/* ==================== MAIN DASHBOARD CONTENT ==================== */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* 1. HERO WALLET SECTION (Hero Wallet Card) */}
        <section className="w-full">
          <div className="relative overflow-hidden rounded-3xl bg-[#12302b] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-[#214b43]">
            {/* Decorative Ambient Watermark */}
            <div className="absolute -left-12 -bottom-16 w-64 h-64 rounded-full bg-[#1f7a6e]/20 blur-3xl pointer-events-none"></div>
            <div className="absolute -right-8 -top-8 w-60 h-60 rounded-full bg-[#e9b44c]/10 blur-2xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Balance Summary & Value Equations */}
              <div className="space-y-4 max-w-xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e9b44c] text-[#12302b] shadow-sm">
                    <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      stars
                    </span>
                    المستوى الذهبي المميّز
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-emerald-300 border border-emerald-400/20">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    {formatNumber(pointsBalance)} نقطة متاحة للاستبدال الفوري
                  </span>
                </div>

                {/* Points Big Number Display */}
                <div className="space-y-1">
                  <span className="text-xs text-white/70 block">إجمالي رصيد نقاط المكافآت المتاح</span>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h1
                      className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    >
                      {formatNumber(pointsBalance)}
                    </h1>
                    <span className="text-base sm:text-lg font-semibold text-white/80">نقطة كاش باك</span>
                    <span
                      className="text-xl sm:text-2xl font-bold text-[#e9b44c] flex items-center gap-1"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    >
                      ≈ {pointsToIls(pointsBalance)} ₪
                    </span>
                  </div>
                </div>

                {/* Conversion Rule Legend & Expiry Notice */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-white/80">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs">
                    <span className="material-symbols-outlined text-[#e9b44c] text-[18px]">swap_horizontal_circle</span>
                    <span>
                      كل <strong className="text-white font-bold" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>1 ₪</strong> مشتريات ={' '}
                      <strong className="text-white font-bold" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>10 نقاط</strong> كاش باك
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs">
                    <span className="material-symbols-outlined text-emerald-300 text-[18px]">schedule</span>
                    <span>
                      صلاحية النقاط تمتد حتى{' '}
                      <strong className="text-white font-bold" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>6 أشهر</strong> قادمة
                    </span>
                  </div>
                </div>

                {/* Total Savings Highlight Pill */}
                <div className="inline-flex items-center gap-2 bg-[#1f7a6e]/40 border border-[#1f7a6e] px-4 py-2 rounded-xl text-xs sm:text-sm text-emerald-200">
                  <span className="material-symbols-outlined text-[#e9b44c] text-[18px]">verified</span>
                  <span>
                    وفرتي حتى الآن{' '}
                    <strong className="text-white font-bold" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                      345 ₪
                    </strong>{' '}
                    عبر شبكة شركاء منصة تبادل
                  </span>
                </div>
              </div>

              {/* Quick Action Buttons Tray & QR Preview */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
                {/* Primary Gold Redeem Button */}
                <button
                  onClick={() => {
                    const voucherSection = document.getElementById('quick-redemptions');
                    if (voucherSection) {
                      voucherSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-[#e9b44c] via-[#feb64e] to-[#d49a32] text-[#12302b] hover:brightness-105 active:scale-95 transition-all text-sm font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#e9b44c]/20 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    redeem
                  </span>
                  <span>استبدل نقاطك الآن</span>
                </button>

                {/* Barcode / QR Direct Modal Trigger */}
                <button
                  onClick={() => setShowQrModal(true)}
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 active:scale-95 transition-all text-sm font-bold py-3 px-5 rounded-xl flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                  <span>رمز الاستبدال / الباركود المباشر</span>
                </button>

                {/* Ledger History Secondary Button */}
                <Link
                  to="/customer/wallet"
                  className="text-white/80 hover:text-white hover:bg-white/5 active:scale-95 transition-all py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 text-xs text-center"
                >
                  <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                  <span>سجل حركات المحفظة</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. DOUBLE POINTS FLASH BANNER (شريط عروض النقاط المضاعفة) */}
        <section className="w-full">
          <div className="bg-gradient-to-l from-[#1f7a6e] via-[#12302b] to-[#0f2420] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-[#2b6459] flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl bg-[#e9b44c] text-[#12302b] flex items-center justify-center font-extrabold text-xl shadow-md shrink-0"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                2X
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#e9b44c] text-[#12302b]">
                    عرض حصري ومحدود
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    عروض مضاعفة النقاط حتى 3X كاش باك!
                  </h2>
                </div>
                <p className="text-white/80 text-xs sm:text-sm">
                  احصلي على ضعف النقاط اليوم على تشكيلة: العبايات المطرزة، أحذية السنيكرز الإيطالية، وفساتين السهرة.
                </p>
              </div>
            </div>

            {/* Live Countdown & Action Button */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              {/* Countdown Clock Pills */}
              <div
                className="flex items-center gap-1.5 text-center text-xs"
                dir="ltr"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                <div className="bg-black/30 border border-white/10 rounded-lg px-2.5 py-1.5">
                  <span className="font-bold text-sm text-[#e9b44c] block">{padZero(timeLeft.hours)}</span>
                  <span className="block text-[9px] text-white/60 font-tajawal">ساعة</span>
                </div>
                <span className="text-[#e9b44c] font-bold">:</span>
                <div className="bg-black/30 border border-white/10 rounded-lg px-2.5 py-1.5">
                  <span className="font-bold text-sm text-[#e9b44c] block">{padZero(timeLeft.minutes)}</span>
                  <span className="block text-[9px] text-white/60 font-tajawal">دقيقة</span>
                </div>
                <span className="text-[#e9b44c] font-bold">:</span>
                <div className="bg-black/30 border border-white/10 rounded-lg px-2.5 py-1.5">
                  <span className="font-bold text-sm text-[#e9b44c] block">{padZero(timeLeft.seconds)}</span>
                  <span className="block text-[9px] text-white/60 font-tajawal">ثانية</span>
                </div>
              </div>

              <Link
                to="/stores"
                className="bg-white text-[#12302b] hover:bg-[#e9b44c] hover:text-[#12302b] transition-colors px-4 py-2 rounded-xl font-bold text-xs whitespace-nowrap shadow-sm cursor-pointer"
              >
                تسوّقي العرض
              </Link>
            </div>
          </div>
        </section>

        {/* 3. QUICK REDEMPTIONS (المكافآت السريعة الجاهزة للاستبدال برصيد سارة) */}
        <section id="quick-redemptions" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 rounded-full bg-[#e9b44c]"></span>
              <h2 className="text-xl font-bold text-[#032448]">
                مكافآت جاهزة للاستبدال برصيدك الحالي ({formatNumber(pointsBalance)} نقطة)
              </h2>
            </div>
            <Link
              to="/customer/wallet"
              className="text-xs font-bold text-[#1f7a6e] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>عرض جميع القسائم (14)</span>
              <span className="material-symbols-outlined text-[16px]">chevron_left</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {vouchers.map((v) => {
              const isRedeemed = redeemedVouchers[v.id];
              return (
                <div
                  key={v.id}
                  className={`bg-white rounded-2xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between transition-all ${
                    v.isFeatured
                      ? 'border-2 border-[#e9b44c]'
                      : 'border border-[#e2ddd3] hover:border-[#1f7a6e]'
                  }`}
                >
                  {v.isFeatured && (
                    <div className="absolute -left-6 -top-6 w-20 h-20 bg-[#e9b44c]/10 rounded-full pointer-events-none"></div>
                  )}

                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          v.isFeatured
                            ? 'bg-[#e9b44c]/20 text-[#643f00] border border-[#e9b44c]/30'
                            : 'bg-[#f2f3fc] text-[#43474e]'
                        }`}
                      >
                        {v.badge}
                      </span>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                          v.isFeatured
                            ? 'text-[#2e9e6b] bg-emerald-50'
                            : 'text-[#1f7a6e] bg-teal-50'
                        }`}
                        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                      >
                        {formatNumber(v.cost)} نقطة
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#12302b]">{v.title}</h3>
                      <p className="text-xs text-[#43474e] mt-1 leading-relaxed">{v.description}</p>
                    </div>
                  </div>

                  <div className="pt-4 mt-2 border-t border-[#f0eee6] flex items-center justify-between">
                    <span className="text-[11px] text-[#74777f]">{v.validity}</span>
                    {isRedeemed ? (
                      <span className="bg-emerald-50 text-[#2e9e6b] px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">check</span>
                        تم الاستبدال!
                      </span>
                    ) : (
                      <button
                        onClick={() => handleRedeemVoucher(v)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer ${
                          v.isFeatured
                            ? 'bg-[#12302b] hover:bg-[#1a403a] text-white shadow-sm'
                            : 'bg-white border border-[#12302b] hover:bg-[#12302b] hover:text-white text-[#12302b]'
                        }`}
                      >
                        <span>
                          {v.isFeatured ? 'استبدال القسيمة' : `استبدل بـ ${formatNumber(v.cost)} نقطة`}
                        </span>
                        <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. FEATURED FASHION & FOOTWEAR STORES (شبكة المتاجر المقترحة والشريكة) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 rounded-full bg-[#1f7a6e]"></span>
              <div>
                <h2 className="text-xl font-bold text-[#032448]">متاجر الأزياء والأحذية الشريكة</h2>
                <p className="text-xs text-[#43474e]">تسوّقي واكسبي نقاط كاش باك فورية مضافة لمحفظتك مع كل طلب</p>
              </div>
            </div>

            {/* Filter chips for desktop */}
            <div className="hidden sm:flex items-center gap-2 text-xs">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-colors cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#12302b] text-white'
                    : 'bg-white border border-[#e2ddd3] text-[#43474e] hover:text-[#032448]'
                }`}
              >
                الكل
              </button>
              <button
                onClick={() => setSelectedCategory('abayas')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-colors cursor-pointer ${
                  selectedCategory === 'abayas'
                    ? 'bg-[#12302b] text-white'
                    : 'bg-white border border-[#e2ddd3] text-[#43474e] hover:text-[#032448]'
                }`}
              >
                أزياء وعبايات
              </button>
              <button
                onClick={() => setSelectedCategory('shoes')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-colors cursor-pointer ${
                  selectedCategory === 'shoes'
                    ? 'bg-[#12302b] text-white'
                    : 'bg-white border border-[#e2ddd3] text-[#43474e] hover:text-[#032448]'
                }`}
              >
                أحذية وسنيكرز
              </button>
              <button
                onClick={() => setSelectedCategory('dresses')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-colors cursor-pointer ${
                  selectedCategory === 'dresses'
                    ? 'bg-[#12302b] text-white'
                    : 'bg-white border border-[#e2ddd3] text-[#43474e] hover:text-[#032448]'
                }`}
              >
                فساتين ومناسبات
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#e2ddd3] hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      src={store.image}
                      alt={store.name}
                      loading="lazy"
                    />
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#2e9e6b] flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-[14px]">
                        {store.id === 'milano' ? 'bolt' : 'local_fire_department'}
                      </span>
                      <span style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{store.cashback}</span>
                    </span>
                    <span
                      className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] px-2 py-0.5 rounded-md flex items-center gap-1 font-semibold"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    >
                      <span className="material-symbols-outlined text-[13px] text-[#e9b44c]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      {store.rating}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-[#1f7a6e] font-semibold">{store.categoryLabel}</span>
                      <span className="text-[10px] text-[#74777f]">{store.location}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#12302b]">{store.name}</h3>
                    <p className="text-xs text-[#43474e] line-clamp-2 leading-relaxed">{store.description}</p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    to={`/stores/${store.slug}`}
                    className="w-full bg-[#f6f3ec] hover:bg-[#12302b] hover:text-white text-[#12302b] py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>تسوق واكسب نقاط</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_back</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. RECENT POINTS ACTIVITY (سجل الحركات الأخير) */}
        <section className="bg-white rounded-2xl border border-[#e2ddd3] p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-[#f0eee6] pb-4">
            <div>
              <h2 className="text-lg font-bold text-[#032448]">آخر حركات النقاط والكاش باك</h2>
              <p className="text-xs text-[#43474e]">النقاط المكتسبة والمستبدلة خلال آخر 30 يوماً</p>
            </div>
            <Link
              to="/customer/wallet"
              className="text-xs font-bold text-[#1f7a6e] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>عرض الكشف الكامل</span>
              <span className="material-symbols-outlined text-[14px]">arrow_back</span>
            </Link>
          </div>

          <div className="divide-y divide-[#f5f3ec]">
            {/* Transaction 1 */}
            <div className="py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#2e9e6b] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#12302b]">شراء فستان سهرة - بوتيك لمسة</p>
                  <span className="text-[11px] text-[#74777f]">أمس، الساعة 05:40 م • فاتورة رقم #TB-9412</span>
                </div>
              </div>
              <div className="text-left" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                <span className="font-bold text-sm text-[#2e9e6b] block" dir="ltr">
                  +600 PTS
                </span>
                <span className="text-[11px] text-[#74777f]">+3.00 ₪ كاش باك</span>
              </div>
            </div>

            {/* Transaction 2 */}
            <div className="py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 text-[#1f7a6e] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">redeem</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#12302b]">استبدال قسيمة شراء بقيمة 10 ₪</p>
                  <span className="text-[11px] text-[#74777f]">12 فبراير 2026 • ميلانو فوتوير</span>
                </div>
              </div>
              <div className="text-left" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                <span className="font-bold text-sm text-[#12302b] block" dir="ltr">
                  -2,000 PTS
                </span>
                <span className="text-[11px] text-[#74777f] font-tajawal">تم الاستخدام بنجاح</span>
              </div>
            </div>

            {/* Transaction 3 */}
            <div className="py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#2e9e6b] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#12302b]">شراء عباءة مطرزة - دار الياقوت</p>
                  <span className="text-[11px] text-[#74777f]">04 فبراير 2026 • فاتورة رقم #TB-8841</span>
                </div>
              </div>
              <div className="text-left" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                <span className="font-bold text-sm text-[#2e9e6b] block" dir="ltr">
                  +850 PTS
                </span>
                <span className="text-[11px] text-[#74777f]">+4.25 ₪ كاش باك</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* QR / Barcode Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-4 shadow-2xl relative border-2 border-[#e9b44c]">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 left-4 p-2 text-[#74777f] hover:text-[#12302b] cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="w-12 h-12 rounded-2xl bg-[#12302b] text-[#e9b44c] flex items-center justify-center mx-auto text-2xl font-bold">
              ت
            </div>
            <h3 className="text-lg font-bold text-[#12302b]">رمز الاستبدال الشخصي المباشر</h3>
            <p className="text-xs text-[#43474e]">
              أظهري هذا الكود عند كاشير المتجر لاستبدال نقاطك فورياً بخصم مباشر:
            </p>
            <div className="bg-[#f6f3ec] p-4 rounded-2xl border border-[#e2ddd3] space-y-2">
              <div className="h-20 bg-[repeating-linear-gradient(90deg,#12302b,#12302b_3px,transparent_3px,transparent_6px,#12302b_6px,#12302b_10px,transparent_10px,transparent_13px)] w-full rounded"></div>
              <span
                className="text-base font-black text-[#12302b] tracking-widest block"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                #TBD-8821-3000
              </span>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
              <p className="text-xs text-emerald-800 font-bold">
                الرصيد المتاح:{' '}
                <span style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  {formatNumber(pointsBalance)}
                </span>{' '}
                نقطة (
                <span style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  {pointsToIls(pointsBalance)} ₪
                </span>
                )
              </p>
            </div>
            <button
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 bg-[#12302b] hover:bg-[#1f7a6e] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
