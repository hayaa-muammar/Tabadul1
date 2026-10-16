import { useEffect, useState } from 'react';
import {
  BadgeCheck,
  BatteryCharging,
  Calculator,
  CheckCircle,
  CircleUser,
  Coins,
  Download,
  Footprints,
  Gauge,
  Hand,
  Hourglass,
  House,
  MessageCircle,
  MonitorSmartphone,
  Percent,
  QrCode,
  RefreshCw,
  RotateCcw,
  ScanLine,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  UserRoundPlus,
  Wifi,
  WifiOff,
} from 'lucide-react';

import MainLayout from '../../layouts/MainLayout';

export default function HomePage() {
  const [calcAmount, setCalcAmount] = useState(100);
  const [offline, setOffline] = useState(false);
  const [pwaOpen, setPwaOpen] = useState(false);

  const calcPoints = calcAmount * 10;
  const calcCash = ((calcPoints / 1000) * 5).toFixed(1);

  useEffect(() => {
    const updateClock = () => {
      const clock = document.getElementById('mock-clock');

      if (clock) {
        const now = new Date();

        clock.textContent =
          `${now.getHours()}:` +
          String(now.getMinutes()).padStart(2, '0');
      }
    };

    updateClock();

    const timer = window.setInterval(updateClock, 30000);

    return () => window.clearInterval(timer);
  }, []);

  const handleCalcChange = (event) => {
    setCalcAmount(Number(event.target.value));
  };

  const openPwaModal = () => {
    setPwaOpen(true);
  };

  const closePwaModal = () => {
    setPwaOpen(false);
  };

  const toggleOfflineBanner = () => {
    setOffline((previous) => !previous);
  };

  const toggleMockUpdate = () => {
    window.alert(
      'هذا نموذج تجريبي لتحديث بيانات المحفظة محليًا.'
    );
  };

  return (
    <MainLayout>
      <main
        dir="rtl"
        lang="ar"
        className="min-h-screen bg-[#f6f3ec] text-[#12302b] antialiased selection:bg-[#e9b44c] selection:text-[#12302b] pb-20 md:pb-0 font-[Tajawal]"
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap');

          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            height: 24px;
            width: 24px;
            border-radius: 9999px;
            background: #e9b44c;
            border: 3px solid #12302b;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
          }

          .skeleton-shimmer {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.4) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            background-size: 200% 100%;
            animation: shimmer 1.8s infinite;
          }

          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }

            100% {
              background-position: 200% 0;
            }
          }

          .phone-screen-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .phone-screen-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* القسم الأول: الواجهة الرئيسية */}
        <section
          id="hero"
          className="relative overflow-hidden bg-gradient-to-b from-[#f6f3ec] via-white to-[#f6f3ec] pt-10 pb-20 md:py-20"
        >
          {/* تأثيرات الخلفية */}
          <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-[#e9b44c]/15 blur-3xl" />

          <div className="pointer-events-none absolute top-1/3 left-10 h-96 w-96 rounded-full bg-[#1f7a6e]/10 blur-3xl" />

          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">

            {/* العمود الأيمن: تعريف المنصة */}
            <div className="space-y-6 text-right lg:col-span-7">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#12302b]/10 bg-[#12302b]/5 px-4 py-2 text-xs font-bold text-[#12302b] md:text-sm">
                <span className="h-2.5 w-2.5 animate-ping rounded-full bg-[#1f7a6e]" />

                <span>
                  منصة ويب متكاملة + تطبيق جوال خفيف (PWA) لقطاع غزة 2026
                </span>
              </div>

              <h1 className="text-3xl font-black leading-[1.25] text-[#12302b] sm:text-4xl md:text-5xl lg:text-6xl">
                منصة وتطبيق تبادل...
                <br />

                <span className="bg-gradient-to-l from-[#1f7a6e] via-[#1f3a5f] to-[#e9b44c] bg-clip-text text-transparent">
                  نقاطك وكاش باك مشترياتك في كل متجر بغزة!
                </span>
              </h1>

              <p className="max-w-2xl text-base font-normal leading-relaxed text-[#52606d] sm:text-lg md:text-xl">
                محفظة رقمية موحدة تجمع مشترياتك من مئات متاجر وبوتيكات الأزياء،
                العبايات، ملابس الأطفال، والأحذية في غزة على إنستغرام وواتساب.
                بدون بطاقات بلاستيكية ولا تطبيقات ثقيلة:
                {' '}
                <strong className="font-bold text-[#12302b]">
                  رقم جوالك هو محفظتك
                </strong>
                ، تستبدل نقاطك بخصم فوري كاش عند الاستلام أو بجوال باي.
              </p>

              {/* أزرار الإجراءات */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">

                <a
                  href="#merchants"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#12302b] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#1f3a5f] active:scale-95 sm:text-base"
                >
                  <ShoppingBag
                    size={20}
                    className="text-[#e9b44c]"
                    aria-hidden="true"
                  />

                  <span>ابدأ واكسب 200 نقطة هدية</span>
                </a>

                <a
                  href="#merchant-signup"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#12302b]/20 bg-white px-6 py-3.5 text-sm font-bold text-[#12302b] shadow-sm transition-all hover:border-[#12302b] hover:shadow sm:text-base"
                >
                  <Store
                    size={20}
                    className="text-[#1f7a6e]"
                    aria-hidden="true"
                  />

                  <span>انضم كمتجر شريك</span>
                </a>

              </div>

              {/* مؤشرات المنصة */}
              <div className="grid grid-cols-2 gap-4 border-t border-[#12302b]/10 pt-6 sm:grid-cols-4">

                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e9b44c]/20 text-[#c7922d]">
                    <Percent size={22} aria-hidden="true" />
                  </div>

                  <div>
                    <div className="text-sm font-black text-[#12302b]">
                      5% استرجاع
                    </div>

                    <div className="text-[11px] text-[#52606d]">
                      كاش باك فوري
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1f7a6e]/15 text-[#1f7a6e]">
                    <Calculator size={22} aria-hidden="true" />
                  </div>

                  <div>
                    <div className="text-sm font-black text-[#12302b]">
                      1 ₪ = 10 نقاط
                    </div>

                    <div className="text-[11px] text-[#52606d]">
                      معادلة عادلة ومباشرة
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1f3a5f]/15 text-[#1f3a5f]">
                    <BadgeCheck size={22} aria-hidden="true" />
                  </div>

                  <div>
                    <div className="text-sm font-black text-[#12302b]">
                      0 ₪ رسوم اشتراك
                    </div>

                    <div className="text-[11px] text-[#52606d]">
                      انضمام مجاني 100%
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e9b44c]/20 text-[#c7922d]">
                    <Coins size={22} aria-hidden="true" />
                  </div>

                  <div>
                    <div className="text-sm font-black text-[#12302b]">
                      3% عمولة فقط
                    </div>

                    <div className="text-[11px] text-[#52606d]">
                      للتجار بعد البيع
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* العمود الأيسر: معاينة تطبيق الجوال */}
            <div className="flex justify-center lg:col-span-5">
              <div className="relative w-full max-w-[360px]">

                {/* إطار الهاتف */}
                <div className="relative rounded-[44px] border-4 border-[#12302b]/90 bg-[#12302b] p-3 shadow-[0_25px_60px_-15px_rgba(18,48,43,0.35)]">

                  {/* الكاميرا الأمامية */}
                  <div className="absolute left-1/2 top-5 z-30 flex h-4 w-28 -translate-x-1/2 items-center justify-end rounded-full bg-black px-3">
                    <div className="h-2 w-2 rounded-full bg-[#1f7a6e]/90" />
                  </div>

                  {/* شاشة الهاتف */}
                  <div className="flex h-[650px] flex-col overflow-hidden rounded-[36px] border border-white/20 bg-[#f6f3ec] text-[#12302b]">

                    {/* شريط حالة الهاتف */}
                    <div className="z-20 flex select-none items-center justify-between bg-[#12302b] px-5 pb-2 pt-3 text-[11px] font-bold text-white">

                      <span id="mock-clock">23:10</span>

                      <div className="flex items-center gap-1.5 text-[#8df8bd]">
                        <Wifi size={14} aria-hidden="true" />

                        <span className="font-mono text-[10px]">
                          4G
                        </span>

                        <BatteryCharging
                          size={16}
                          className="text-white"
                          aria-hidden="true"
                        />
                      </div>

                    </div>

                    {/* شريط تطبيق تبادل */}
                    <div className="z-20 flex items-center justify-between border-b border-white/10 bg-[#12302b] px-4 py-2.5 text-white">

                      <div className="flex items-center gap-2">

                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white p-0.5">
                          {/* مكان شعار تبادل */}
                          <div
                            role="img"
                            aria-label="شعار تبادل"
                            className="h-full w-full"
                          />
                        </div>

                        <div>
                          <div className="text-xs font-black leading-none">
                            تـبـادل غـزة
                          </div>

                          <div className="text-[9px] text-[#e9b44c]">
                            تطبيق الويب التقدمي PWA
                          </div>
                        </div>

                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#8df8bd]" />

                        <span className="text-[10px] font-bold text-white/80">
                          جاهز دون إنترنت
                        </span>
                      </div>

                    </div>
                    {/* محتوى التطبيق داخل الهاتف */}
                    <div className="phone-screen-scroll flex-1 space-y-3 overflow-y-auto p-3.5 pb-16">

                      {/* بيانات المستخدم */}
                      <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#1f7a6e] to-[#e9b44c] text-sm font-black text-white">
                            س
                          </div>

                          <div>
                            <h4 className="text-xs font-black text-[#12302b]">
                              سارة أحمد
                            </h4>

                            <p className="text-[10px] text-[#52606d]">
                              غزة — حي الرمال • عضوية ذهبية
                            </p>
                          </div>
                        </div>

                        <span className="flex items-center gap-0.5 rounded-full bg-[#1f7a6e]/10 px-2 py-0.5 text-[10px] font-bold text-[#1f7a6e]">
                          <BadgeCheck size={13} />
                          موثقة
                        </span>
                      </div>

                      {/* بطاقة رصيد النقاط */}
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#12302b] via-[#1f3a5f] to-[#12302b] p-4 text-white shadow-md">
                        <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#e9b44c]/20 blur-xl" />

                        <div className="mb-2 flex items-start justify-between">
                          <div>
                            <span className="block text-[10px] text-white/75">
                              رصيد نقاط تبادل المتاح
                            </span>

                            <div className="mt-0.5 flex items-baseline gap-1.5">
                              <span className="text-3xl font-black tracking-tight text-[#e9b44c]">
                                2,200
                              </span>

                              <span className="text-xs font-bold text-white/85">
                                نقطة
                              </span>
                            </div>
                          </div>

                          <span className="flex items-center gap-0.5 rounded-lg bg-white/10 px-2 py-0.5 text-[10px] font-bold text-[#e9b44c]">
                            <Star size={12} />
                            المستوى الذهبي
                          </span>
                        </div>

                        <div className="mb-3 flex items-center justify-between rounded-xl border border-white/15 bg-white/10 p-2.5 backdrop-blur">
                          <span className="flex items-center gap-1 text-[11px] text-white/90">
                            <CheckCircle size={13} className="text-[#8df8bd]" />
                            قيمة الخصم المباشر الآن:
                          </span>

                          <span className="text-base font-black text-[#e9b44c]">
                            11.00 ₪ كاش
                          </span>
                        </div>

                        {/* أزرار المحفظة */}
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <button
                            type="button"
                            onClick={openPwaModal}
                            className="flex items-center justify-center gap-1 rounded-xl bg-[#e9b44c] px-2 py-2 text-[11px] font-black text-[#12302b] shadow transition-all hover:bg-[#d69f37] active:scale-95"
                          >
                            <QrCode size={15} />
                            باركود الدفع QR
                          </button>

                          <button
                            type="button"
                            onClick={toggleMockUpdate}
                            className="flex items-center justify-center gap-1 rounded-xl bg-white/15 px-2 py-2 text-[11px] font-bold text-white transition-all hover:bg-white/20 active:scale-95"
                          >
                            <RefreshCw size={15} />
                            تحديث الرصيد
                          </button>
                        </div>
                      </div>

                      {/* المتاجر القريبة */}
                      <div>
                        <div className="mb-1.5 flex items-center justify-between px-0.5 text-xs font-bold text-[#12302b]">
                          <span>متاجر شريكة قريبة منك:</span>

                          <a
                            href="#merchants"
                            className="text-[10px] text-[#1f7a6e]"
                          >
                            عرض الكل
                          </a>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2 shadow-sm">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e9b44c]/20 text-[#c7922d]">
                              <Shirt size={15} />
                            </span>

                            <div className="overflow-hidden">
                              <div className="truncate text-[11px] font-black">
                                بيت الشال للأزياء
                              </div>

                              <div className="text-[9px] font-bold text-[#1f7a6e]">
                                10 نقاط / 1 ₪
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-2 shadow-sm">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1f7a6e]/20 text-[#1f7a6e]">
                              <Shirt size={15} />
                            </span>

                            <div className="overflow-hidden">
                              <div className="truncate text-[11px] font-black">
                                سلطانة العبايات
                              </div>

                              <div className="text-[9px] font-bold text-[#1f7a6e]">
                                خصم 25 ₪ كاش
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* آخر العمليات */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between px-0.5 text-[11px] font-bold text-[#52606d]">
                          <span>آخر العمليات:</span>

                          <span className="text-[9px] text-[#1f7a6e]">
                            أوفلاين ⚡
                          </span>
                        </div>

                        <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm">
                          <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-50 text-[#1f7a6e]">
                              <ShoppingBag size={15} />
                            </div>

                            <div>
                              <div className="text-[11px] font-bold text-[#12302b]">
                                بوتيك لمسة فاشن
                              </div>

                              <div className="text-[9px] text-[#52606d]">
                                شراء فستان شيفون (180 ₪)
                              </div>
                            </div>
                          </div>

                          <span className="rounded bg-[#1f7a6e]/10 px-1.5 py-0.5 text-[10px] font-black text-[#1f7a6e]">
                            +1,800 نقطة
                          </span>
                        </div>

                        <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm">
                          <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-50 text-[#1f3a5f]">
                              <Footprints size={15} />
                            </div>

                            <div>
                              <div className="text-[11px] font-bold text-[#12302b]">
                                سنيكرز غزة للأحذية
                              </div>

                              <div className="text-[9px] text-[#52606d]">
                                حذاء كاجوال خفيف (75 ₪)
                              </div>
                            </div>
                          </div>

                          <span className="rounded bg-[#1f7a6e]/10 px-1.5 py-0.5 text-[10px] font-black text-[#1f7a6e]">
                            +750 نقطة
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* شريط التنقل داخل الهاتف */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-around border-t border-gray-200 bg-white/95 px-3 py-1.5 backdrop-blur">

                      <div className="flex flex-col items-center text-[#1f7a6e]">
                        <House size={19} />
                        <span className="text-[8px] font-bold">الرئيسية</span>
                      </div>

                      <div className="flex flex-col items-center text-[#52606d]">
                        <Store size={19} />
                        <span className="text-[8px] font-bold">المتاجر</span>
                      </div>

                      <div className="-mt-3 flex flex-col items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12302b] text-[#e9b44c] shadow">
                          <ScanLine size={16} />
                        </div>

                        <span className="mt-0.5 text-[8px] font-bold text-[#12302b]">
                          الدفع
                        </span>
                      </div>

                      <div className="flex flex-col items-center text-[#52606d]">
                        <Calculator size={19} />
                        <span className="text-[8px] font-bold">الوفر</span>
                      </div>

                      <div className="flex flex-col items-center text-[#52606d]">
                        <CircleUser size={19} />
                        <span className="text-[8px] font-bold">حسابي</span>
                      </div>

                    </div>
                  </div>
                </div>

                {/* بطاقة QR خارج الهاتف */}
                <div className="absolute -bottom-6 -right-6 hidden items-center gap-3 rounded-2xl border border-[#12302b]/15 bg-white p-3 shadow-xl sm:flex">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#12302b] p-1 text-white">
                    <QrCode size={28} className="text-[#e9b44c]" />
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-black text-[#12302b]">
                      امسح لتجربة PWA
                    </div>

                    <div className="text-[10px] font-bold text-[#1f7a6e]">
                      يعمل على آيفون وأندرويد
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* القسم الثالث: مزايا المنصة */}
        <section className="border-y border-[#e9b44c]/20 bg-[#12302b] py-12 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e9b44c]/20 text-[#e9b44c]">
                  <WifiOff size={25} />
                </div>

                <div>
                  <h3 className="mb-1 text-base font-black text-white">
                    يعمل دون اتصال بالإنترنت
                  </h3>

                  <p className="text-xs leading-relaxed text-white/75">
                    محفظتك وباركود الخصم ورصيد النقاط محفوظ محليًا بتقنية Service Worker لظروف انقطاع الشبكة في غزة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1f7a6e]/30 text-[#8df8bd]">
                  <Hand size={25} />
                </div>

                <div>
                  <h3 className="mb-1 text-base font-black text-white">
                    وصول بلمسة واحدة
                  </h3>

                  <p className="text-xs leading-relaxed text-white/75">
                    تثبيت على شاشة الهاتف كتطبيق ويب تقدمي دون الحاجة إلى متجر Google Play أو App Store.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e9b44c]/20 text-[#e9b44c]">
                  <Gauge size={25} />
                </div>

                <div>
                  <h3 className="mb-1 text-base font-black text-white">
                    تجربة خفيفة وسريعة
                  </h3>

                  <p className="text-xs leading-relaxed text-white/75">
                    واجهة مصممة لتكون خفيفة وسهلة الاستخدام على الهواتف والأجهزة ذات الإمكانيات المحدودة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1f7a6e]/30 text-[#8df8bd]">
                  <MonitorSmartphone size={25} />
                </div>

                <div>
                  <h3 className="mb-1 text-base font-black text-white">
                    توافق مع الأجهزة
                  </h3>

                  <p className="text-xs leading-relaxed text-white/75">
                    تصميم متجاوب مع هواتف أندرويد وآيفون والأجهزة اللوحية والحواسيب.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* القسم الرابع: كيف يعمل تبادل */}
        <section id="how-it-works" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="rounded-full bg-[#1f7a6e]/10 px-3.5 py-1.5 text-xs font-black text-[#1f7a6e]">
                بسيط وسلس للجميع
              </span>

              <h2 className="mt-3 text-3xl font-black text-[#12302b] sm:text-4xl">
                كيف يعمل «تبادل» للمتسوق والتاجر؟
              </h2>

              <p className="mt-2 text-base text-[#52606d]">
                رحلة تسوقك المعتادة في غزة لكن مع قيمة مضافة حقيقية تعود إلى جيبك وتضاعف مبيعات المتاجر.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

              {/* الخطوة الأولى */}
              <div className="relative rounded-3xl border border-[#12302b]/10 bg-[#f6f3ec] p-8 shadow-sm transition-all hover:-translate-y-1.5">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#12302b] text-2xl font-black text-white shadow">
                  1
                </div>

                <span className="mb-1 block text-xs font-bold text-[#1f7a6e]">
                  الخطوة الأولى
                </span>

                <h3 className="mb-3 text-2xl font-black text-[#12302b]">
                  تسوّق بحرية
                </h3>

                <p className="text-sm leading-relaxed text-[#52606d]">
                  اطلب من صفحات ومتاجر غزة الشريكة للأزياء عبر إنستغرام أو واتساب،
                  وادفع كالمعتاد عند الاستلام أو بجوال باي.
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-[#12302b]/10 pt-4 text-xs font-bold text-[#12302b]">
                  <CheckCircle size={18} className="shrink-0 text-[#1f7a6e]" />

                  <span>
                    كل ما تحتاجه هو إعطاء التاجر رقم جوالك فقط
                  </span>
                </div>
              </div>

              {/* الخطوة الثانية */}
              <div className="relative rounded-3xl border border-[#12302b]/10 bg-[#f6f3ec] p-8 shadow-sm transition-all hover:-translate-y-1.5">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1f7a6e] text-2xl font-black text-white shadow">
                  2
                </div>

                <span className="mb-1 block text-xs font-bold text-[#1f7a6e]">
                  الخطوة الثانية
                </span>

                <h3 className="mb-3 text-2xl font-black text-[#12302b]">
                  اجمع نقاطك فوراً
                </h3>

                <p className="text-sm leading-relaxed text-[#52606d]">
                  تكسب 10 نقاط عن كل 1 ₪ تدفعه. تضاف النقاط إلى محفظتك بعد تأكيد
                  الاستلام، مع إشعار برصيدك المحدث.
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-[#12302b]/10 pt-4 text-xs font-bold text-[#12302b]">
                  <CheckCircle size={18} className="shrink-0 text-[#1f7a6e]" />

                  <span>
                    تعرف على رصيدك الجديد بعد كل عملية شراء
                  </span>
                </div>
              </div>

              {/* الخطوة الثالثة */}
              <div className="relative rounded-3xl border-2 border-[#e9b44c] bg-gradient-to-b from-[#f6f3ec] to-[#fbf7ee] p-8 shadow-sm transition-all hover:-translate-y-1.5">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e9b44c] text-2xl font-black text-[#12302b] shadow">
                  3
                </div>

                <span className="mb-1 block text-xs font-bold text-[#c7922d]">
                  الخطوة الثالثة
                </span>

                <h3 className="mb-3 text-2xl font-black text-[#12302b]">
                  استبدل ووفّر كاش
                </h3>

                <p className="text-sm leading-relaxed text-[#52606d]">
                  استبدل نقاطك بخصم نقدي لدى المتاجر الشريكة، واستفد من نقاطك
                  في أكثر من متجر ضمن شبكة تبادل.
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-[#e9b44c]/30 pt-4 text-xs font-bold text-[#12302b]">
                  <Sparkles size={18} className="shrink-0 text-[#e9b44c]" />

                  <span>
                    نقاط موحدة غير محبوسة في متجر واحد
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* القسم الخامس: حاسبة النقاط */}
        <section id="calculator" className="relative bg-[#f6f3ec] py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

            <div className="mx-auto mb-12 max-w-xl text-center">
              <span className="rounded-full bg-[#1f7a6e]/10 px-3.5 py-1.5 text-xs font-black text-[#1f7a6e]">
                حاسبة النقاط والوفر الذكية
              </span>

              <h2 className="mt-3 text-3xl font-black text-[#12302b] sm:text-4xl">
                احسب كم ستربح من كل تسوق
              </h2>

              <p className="mt-2 text-sm text-[#52606d] sm:text-base">
                حرّك المؤشر لمعرفة عدد النقاط وقيمة الخصم النقدي المتوقع.
              </p>
            </div>

            <div className="rounded-3xl border border-[#12302b]/10 bg-white p-6 shadow-xl sm:p-10 lg:p-12">

              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">

                {/* التحكم بقيمة المشتريات */}
                <div className="space-y-6 lg:col-span-7">

                  <div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <label
                        htmlFor="purchase-range"
                        className="text-base font-bold text-[#12302b]"
                      >
                        مشترياتك الشهرية المتوقعة:
                      </label>

                      <div className="flex items-baseline gap-1 text-2xl font-black text-[#1f7a6e] sm:text-3xl">
                        <span>{calcAmount.toLocaleString('en-US')}</span>

                        <span className="text-base font-normal text-[#52606d]">
                          ₪
                        </span>
                      </div>
                    </div>

                    <input
                      id="purchase-range"
                      type="range"
                      min="50"
                      max="2500"
                      step="50"
                      value={calcAmount}
                      onChange={handleCalcChange}
                      className="h-3.5 w-full cursor-pointer appearance-none rounded-lg bg-[#f6f3ec] focus:outline-none"
                    />

                    <div className="mt-2 flex justify-between text-xs font-bold text-[#52606d]">
                      <span>50 ₪</span>
                      <span>500 ₪</span>
                      <span>1,200 ₪</span>
                      <span>2,500 ₪</span>
                    </div>
                  </div>

                  {/* شرح المعادلة */}
                  <div className="space-y-2 rounded-2xl border border-[#12302b]/10 bg-[#f6f3ec] p-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#12302b]">
                      <BadgeCheck size={20} className="text-[#e9b44c]" />

                      <span>
                        معادلة النقاط والخصم
                      </span>
                    </div>

                    <p className="text-xs leading-relaxed text-[#52606d]">
                      كل 1 ₪ تصرفه يمنحك 10 نقاط. وكل 1,000 نقطة تمنحك خصماً
                      نقدياً بقيمة 5 ₪ وفق المعادلة المعروضة.
                    </p>
                  </div>

                </div>

                {/* بطاقة النتائج */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#12302b] via-[#1f3a5f] to-[#12302b] p-7 text-center text-white shadow-xl lg:col-span-5">

                  <div className="mb-1 text-xs text-white/70">
                    النقاط المكتسبة:
                  </div>

                  <div className="mb-4 flex items-center justify-center gap-2">
                    <Sparkles size={28} className="text-[#e9b44c]" />

                    <span className="text-4xl font-black text-[#e9b44c] md:text-5xl">
                      {calcPoints.toLocaleString('en-US')}
                    </span>

                    <span className="text-sm font-bold text-white/80">
                      نقطة
                    </span>
                  </div>

                  <div className="border-t border-white/15 pt-4">
                    <div className="mb-1 text-xs text-white/70">
                      قيمة الخصم النقدي المتوقع:
                    </div>

                    <div className="mb-2 text-3xl font-black text-white md:text-4xl">
                      {calcCash} ₪

                      <span className="mr-1 text-xs font-normal text-[#e9b44c]">
                        كاش باك
                      </span>
                    </div>

                    <p className="rounded-xl bg-white/10 p-2.5 text-[11px] leading-normal text-white/80">
                      تقدير توضيحي لقيمة النقاط حسب معادلة الحاسبة.
                    </p>
                  </div>

                  <a
                    href="#merchant-signup"
                    className="mt-5 block w-full rounded-xl bg-[#e9b44c] py-3 text-center text-sm font-black text-[#12302b] shadow transition-all hover:bg-[#d69f37] active:scale-95"
                  >
                    ابدأ جمع نقاطك الآن
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* القسم السادس: المتاجر الشريكة */}
        <section id="merchants" className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">

              <div>
                <span className="rounded-full bg-[#1f7a6e]/10 px-3.5 py-1.5 text-xs font-black text-[#1f7a6e]">
                  المتاجر الشريكة المعتمدة
                </span>

                <h2 className="mt-3 text-3xl font-black text-[#12302b] md:text-4xl">
                  تسوّق من أفضل متاجر غزة واكسب
                </h2>

                <p className="mt-1 text-base text-[#52606d]">
                  متاجر تمنحك نقاطاً عند الشراء ضمن شبكة تبادل.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-xl bg-[#12302b] px-4 py-2 text-xs font-bold text-white">
                  الكل
                </span>

                <span className="cursor-pointer rounded-xl bg-[#f6f3ec] px-4 py-2 text-xs font-bold text-[#52606d]">
                  ملابس نسائية وعبايات
                </span>

                <span className="cursor-pointer rounded-xl bg-[#f6f3ec] px-4 py-2 text-xs font-bold text-[#52606d]">
                  أزياء رجالية
                </span>

                <span className="cursor-pointer rounded-xl bg-[#f6f3ec] px-4 py-2 text-xs font-bold text-[#52606d]">
                  ملابس أطفال
                </span>

                <span className="cursor-pointer rounded-xl bg-[#f6f3ec] px-4 py-2 text-xs font-bold text-[#52606d]">
                  أحذية وحقائب
                </span>
              </div>

            </div>

            {/* بطاقات المتاجر */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {/* المتجر الأول */}
              <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#12302b]/10 bg-[#f6f3ec] transition-all duration-300 hover:shadow-xl">
                <div className="relative h-44 overflow-hidden bg-[#e9b44c]/20">
                  <div
                    role="img"
                    aria-label="صورة متجر بيت الشال للأزياء"
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute right-3 top-3 rounded-full bg-[#12302b] px-2.5 py-1 text-[11px] font-black text-white shadow">
                    اكسب 10 نقاط لكل 1 ₪
                  </span>

                  <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded bg-white/95 px-2 py-0.5 text-[10px] font-bold text-[#1f7a6e]">
                    <BadgeCheck size={13} />
                    متجر معتمد بغزة
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-xs font-bold text-[#c7922d]">
                      أزياء وشالات نسائية
                    </span>

                    <h3 className="mt-1 text-lg font-black text-[#12302b]">
                      متجر بيت الشال للأزياء
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-[#52606d]">
                      غزة — شارع عمر المختار • شالات حرير وعبايات عصرية.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#12302b]/10 pt-3 text-xs font-bold">
                    <span className="text-[#52606d]">الخصم المتاح:</span>
                    <span className="text-[#1f7a6e]">حتى 30%</span>
                  </div>
                </div>
              </article>

              {/* المتجر الثاني */}
              <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#12302b]/10 bg-[#f6f3ec] transition-all duration-300 hover:shadow-xl">
                <div className="relative h-44 overflow-hidden bg-[#1f7a6e]/20">
                  <div
                    role="img"
                    aria-label="صورة سلطانة العبايات الفاخرة"
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute right-3 top-3 rounded-full bg-[#12302b] px-2.5 py-1 text-[11px] font-black text-white shadow">
                    اكسب 10 نقاط لكل 1 ₪
                  </span>

                  <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded bg-white/95 px-2 py-0.5 text-[10px] font-bold text-[#1f7a6e]">
                    <BadgeCheck size={13} />
                    متجر معتمد بغزة
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-xs font-bold text-[#c7922d]">
                      عبايات وشالات خليجية
                    </span>

                    <h3 className="mt-1 text-lg font-black text-[#12302b]">
                      سلطانة العبايات الفاخرة
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-[#52606d]">
                      غزة — الرمال • تصاميم خليجية وأقمشة متنوعة.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#12302b]/10 pt-3 text-xs font-bold">
                    <span className="text-[#52606d]">الخصم المتاح:</span>
                    <span className="text-[#1f7a6e]">حتى 25 ₪</span>
                  </div>
                </div>
              </article>

              {/* المتجر الثالث */}
              <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#12302b]/10 bg-[#f6f3ec] transition-all duration-300 hover:shadow-xl">
                <div className="relative h-44 overflow-hidden bg-[#1f3a5f]/20">
                  <div
                    role="img"
                    aria-label="صورة بوتيك لمسة فاشن"
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute right-3 top-3 rounded-full bg-[#12302b] px-2.5 py-1 text-[11px] font-black text-white shadow">
                    اكسب 10 نقاط لكل 1 ₪
                  </span>

                  <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded bg-white/95 px-2 py-0.5 text-[10px] font-bold text-[#1f7a6e]">
                    <BadgeCheck size={13} />
                    متجر معتمد بغزة
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-xs font-bold text-[#c7922d]">
                      بوتيك إنستغرام نسائي
                    </span>

                    <h3 className="mt-1 text-lg font-black text-[#12302b]">
                      بوتيك لمسة Lamsa
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-[#52606d]">
                      طلب أونلاين وخيارات توصيل داخل قطاع غزة.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#12302b]/10 pt-3 text-xs font-bold">
                    <span className="text-[#52606d]">الخصم المتاح:</span>
                    <span className="text-[#1f7a6e]">حتى 20 ₪</span>
                  </div>
                </div>
              </article>

              {/* المتجر الرابع */}
              <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#12302b]/10 bg-[#f6f3ec] transition-all duration-300 hover:shadow-xl">
                <div className="relative h-44 overflow-hidden bg-[#e9b44c]/30">
                  <div
                    role="img"
                    aria-label="صورة سنيكرز غزة للأحذية"
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute right-3 top-3 rounded-full bg-[#12302b] px-2.5 py-1 text-[11px] font-black text-white shadow">
                    اكسب 10 نقاط لكل 1 ₪
                  </span>

                  <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded bg-white/95 px-2 py-0.5 text-[10px] font-bold text-[#1f7a6e]">
                    <BadgeCheck size={13} />
                    متجر معتمد بغزة
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-xs font-bold text-[#c7922d]">
                      أحذية وسنيكرز
                    </span>

                    <h3 className="mt-1 text-lg font-black text-[#12302b]">
                      سنيكرز غزة للأحذية
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-[#52606d]">
                      غزة — شارع النصر • أحذية رياضية ورسمية وحقائب.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#12302b]/10 pt-3 text-xs font-bold">
                    <span className="text-[#52606d]">الخصم المتاح:</span>
                    <span className="text-[#1f7a6e]">حتى 15 ₪</span>
                  </div>
                </div>
              </article>

            </div>

            {/* دعوة لانضمام المتاجر */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#1f7a6e]/20 bg-[#1f7a6e]/10 p-6 sm:flex-row">

              <div className="flex items-center gap-3">
                <Store size={32} className="shrink-0 text-[#1f7a6e]" />

                <div>
                  <div className="text-base font-extrabold text-[#12302b]">
                    هل تملك متجراً أو صفحة بيع على إنستغرام أو واتساب؟
                  </div>

                  <div className="text-xs text-[#52606d]">
                    انضم إلى شبكة تبادل واعرض متجرك أمام المتسوقين.
                  </div>
                </div>
              </div>

              <a
                href="#merchant-signup"
                className="whitespace-nowrap rounded-xl bg-[#1f7a6e] px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#12302b] active:scale-95"
              >
                أضف متجرك الآن
              </a>

            </div>
          </div>
        </section>
        {/* القسم السابع: بوابة التجار والتسجيل */}
        <section
          id="merchants-section"
          className="relative overflow-hidden bg-[#12302b] py-20 text-white md:py-28"
        >
          <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#1f7a6e]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[#e9b44c]/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

              {/* مميزات التاجر */}
              <div className="space-y-6 lg:col-span-7">
                <span className="rounded-full bg-[#e9b44c]/15 px-3.5 py-1.5 text-xs font-black text-[#e9b44c]">
                  أصحاب المتاجر ومشاريع إنستغرام بغزة
                </span>

                <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                  حوّل زبائن المرة الواحدة إلى
                  <br />
                  <span className="text-[#e9b44c]">
                    زبائن دائمين مدى الحياة!
                  </span>
                </h2>

                <p className="text-base font-normal leading-relaxed text-white/80 md:text-lg">
                  في سوق غزة المليء بالمنافسة، الخصم العشوائي يقلل أرباحك الصافية.
                  برنامج الولاء التشاركي في «تبادل» يساعدك على تشجيع الزبائن
                  للعودة إلى متجرك، ويمنحك فرصة لاستقطاب زبائن جدد من شبكة المتاجر.
                </p>

                <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-1.5 flex items-center gap-2 text-sm font-black text-[#e9b44c]">
                      <Coins size={20} />
                      <span>عمولة 3% بعد إتمام البيع</span>
                    </div>

                    <p className="text-xs leading-relaxed text-white/70">
                      لا توجد رسوم تسجيل في النموذج المعروض؛ العمولة مرتبطة
                      بإتمام البيع.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-1.5 flex items-center gap-2 text-sm font-black text-[#e9b44c]">
                      <MessageCircle size={20} />
                      <span>تقارير أسبوعية</span>
                    </div>

                    <p className="text-xs leading-relaxed text-white/70">
                      عرض ملخص للمبيعات والنمو لمساعدة التاجر على متابعة أداء متجره.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-1.5 flex items-center gap-2 text-sm font-black text-[#e9b44c]">
                      <ShieldCheck size={20} />
                      <span>متابعة المستحقات</span>
                    </div>

                    <p className="text-xs leading-relaxed text-white/70">
                      واجهة توضح فكرة متابعة التسويات المالية الخاصة بالمتجر.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-1.5 flex items-center gap-2 text-sm font-black text-[#e9b44c]">
                      <UserRoundPlus size={20} />
                      <span>الوصول إلى زبائن جدد</span>
                    </div>

                    <p className="text-xs leading-relaxed text-white/70">
                      استفد من وجود متجرك ضمن شبكة موحدة لبرامج الولاء.
                    </p>
                  </div>

                </div>
              </div>

              {/* نموذج تسجيل المتجر */}
              <div
                id="merchant-signup"
                className="rounded-3xl border border-white/20 bg-white p-6 text-[#12302b] shadow-2xl sm:p-8 lg:col-span-5"
              >
                <div className="mb-6 text-center">
                  <span className="rounded-full bg-[#1f7a6e]/10 px-3 py-1 text-xs font-black text-[#1f7a6e]">
                    عرض انطلاق 2026
                  </span>

                  <h3 className="mt-3 text-2xl font-black text-[#12302b]">
                    انضم كمتجر شريك
                  </h3>

                  <p className="mt-1 text-xs text-[#52606d]">
                    املأ البيانات الأساسية لتجربة نموذج التسجيل.
                  </p>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={(event) => {
                    event.preventDefault();

                    window.alert(
                      'تم التحقق من النموذج تجريبيًا. التسجيل غير متصل بالخادم حاليًا.'
                    );
                  }}
                >
                  <div>
                    <label
                      htmlFor="merchant-name"
                      className="mb-1 block text-xs font-bold text-[#12302b]"
                    >
                      اسم المتجر أو صفحة الإنستغرام
                    </label>

                    <input
                      id="merchant-name"
                      name="merchantName"
                      type="text"
                      required
                      placeholder="مثال: بوتيك غزة فاشن"
                      className="w-full rounded-xl border border-[#12302b]/15 bg-[#f6f3ec] px-4 py-3 text-sm outline-none transition-colors focus:border-[#1f7a6e] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="merchant-phone"
                      className="mb-1 block text-xs font-bold text-[#12302b]"
                    >
                      رقم الواتساب للتواصل
                    </label>

                    <input
                      id="merchant-phone"
                      name="phone"
                      type="tel"
                      dir="ltr"
                      required
                      placeholder="059xxxxxxx أو 056xxxxxxx"
                      className="w-full rounded-xl border border-[#12302b]/15 bg-[#f6f3ec] px-4 py-3 text-right text-sm outline-none transition-colors focus:border-[#1f7a6e] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="merchant-category"
                      className="mb-1 block text-xs font-bold text-[#12302b]"
                    >
                      نوع المنتجات
                    </label>

                    <select
                      id="merchant-category"
                      name="category"
                      className="w-full rounded-xl border border-[#12302b]/15 bg-[#f6f3ec] px-4 py-3 text-sm outline-none focus:border-[#1f7a6e] focus:bg-white"
                    >
                      <option>أزياء وملابس نسائية</option>
                      <option>أزياء رجالية</option>
                      <option>ملابس أطفال ومواليد</option>
                      <option>عبايات وشالات</option>
                      <option>أحذية وحقائب</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#e9b44c] py-4 text-base font-black text-[#12302b] shadow-md transition-all hover:bg-[#d69f37] active:scale-95"
                  >
                    تفعيل التجربة المجانية
                  </button>

                  <p className="mt-2 text-center text-[11px] text-[#52606d]">
                    🔒 بيانات النموذج تجريبية ولا تُرسل إلى خادم حاليًا.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* القسم الثامن: أدوات الولاء الذكية */}
        <section id="smart-ai" className="bg-[#f6f3ec] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="rounded-full bg-[#1f7a6e]/10 px-3.5 py-1.5 text-xs font-black text-[#1f7a6e]">
                الذكاء الاصطناعي للمحافظة على الزبائن
              </span>

              <h2 className="mt-3 text-3xl font-black text-[#12302b] md:text-4xl">
                المساعد الذكي التلقائي لمتجرك
              </h2>

              <p className="mt-2 text-base text-[#52606d]">
                أفكار وأدوات تساعد المتاجر على تشجيع الزبائن على تكرار الشراء.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

              <article className="rounded-3xl border border-[#12302b]/10 bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9b44c]/20 text-[#c7922d]">
                  <Hourglass size={30} />
                </div>

                <h3 className="mb-3 text-xl font-black text-[#12302b]">
                  حارس الصلاحية
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-[#52606d]">
                  فكرة إرسال تنبيه للزبون قبل انتهاء صلاحية نقاطه لتذكيره
                  بالاستفادة من رصيده.
                </p>

                <div className="flex items-center gap-1 text-xs font-bold text-[#1f7a6e]">
                  <TrendingUp size={16} />
                  <span>تشجيع الشراء المتكرر</span>
                </div>
              </article>

              <article className="rounded-3xl border border-[#12302b]/10 bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f7a6e]/20 text-[#1f7a6e]">
                  <ShoppingCart size={30} />
                </div>

                <h3 className="mb-3 text-xl font-black text-[#12302b]">
                  منبّه السلات المتروكة
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-[#52606d]">
                  فكرة تقديم حافز أو نقاط إضافية للزبون الذي استفسر عن منتج
                  ولم يكمل عملية الشراء.
                </p>

                <div className="flex items-center gap-1 text-xs font-bold text-[#1f7a6e]">
                  <TrendingUp size={16} />
                  <span>فرصة لاستعادة المبيعات</span>
                </div>
              </article>

              <article className="rounded-3xl border border-[#12302b]/10 bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f3a5f]/20 text-[#1f3a5f]">
                  <RotateCcw size={30} />
                </div>

                <h3 className="mb-3 text-xl font-black text-[#12302b]">
                  استعادة الزبائن الغائبين
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-[#52606d]">
                  اقتراح حملة ولاء تستهدف الزبائن الذين لم يشتروا منذ فترة
                  بهدف تشجيعهم على العودة.
                </p>

                <div className="flex items-center gap-1 text-xs font-bold text-[#1f7a6e]">
                  <TrendingUp size={16} />
                  <span>بناء ولاء مستدام</span>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* القسم التاسع: الأسئلة الشائعة */}
        <section
          id="faq"
          className="border-t border-[#12302b]/10 bg-white py-20 md:py-28"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

            <div className="mx-auto mb-16 max-w-xl text-center">
              <span className="rounded-full bg-[#1f7a6e]/10 px-3.5 py-1.5 text-xs font-black text-[#1f7a6e]">
                كل ما تحتاج معرفته
              </span>

              <h2 className="mt-3 text-3xl font-black text-[#12302b] md:text-4xl">
                الأسئلة الشائعة
              </h2>

              <p className="mt-2 text-base text-[#52606d]">
                إجابات واضحة للمتسوقين وأصحاب المتاجر.
              </p>
            </div>

            <div className="space-y-4">

              {[
                {
                  question: 'هل يحتاج المتسوق إلى تنزيل تطبيق على جواله؟',
                  answer:
                    'الفكرة تعتمد على تطبيق ويب تقدمي PWA يمكن الوصول إليه من المتصفح. أما التثبيت والعمل دون إنترنت فيحتاجان إلى إعداد تقني فعلي.',
                },
                {
                  question: 'كيف أستبدل نقاطي وما قيمتها النقدية؟',
                  answer:
                    'بحسب المعادلة المعروضة في الحاسبة، كل 1 ₪ يمنحك 10 نقاط، وكل 1,000 نقطة تعادل خصمًا بقيمة 5 ₪.',
                },
                {
                  question: 'هل يمكنني استخدام نقاطي في أكثر من متجر؟',
                  answer:
                    'نعم، هذه هي الفكرة الأساسية لمنصة تبادل: رصيد ولاء موحد يمكن استخدامه لدى المتاجر الشريكة وفق شروط الاستبدال.',
                },
                {
                  question: 'كيف أستلم مستحقاتي بصفتي تاجرًا؟',
                  answer:
                    'تعرض المنصة فكرة تسويات دورية للتجار، لكن تنفيذ التحويلات المالية يحتاج إلى نظام خلفي وآلية دفع متفق عليها.',
                },
                {
                  question: 'هل يوجد رسوم تسجيل للمتاجر؟',
                  answer:
                    'التصميم يعرض الانضمام دون رسوم تسجيل مع عمولة مقترحة على المبيعات. الشروط النهائية تعتمد على سياسة المنصة.',
                },
                {
                  question: 'ما مدة صلاحية النقاط؟',
                  answer:
                    'يمكن تحديد مدة صلاحية النقاط ضمن سياسة الولاء. يجب توضيح المدة النهائية للمستخدم قبل إطلاق المنصة.',
                },
              ].map((item, index) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-[#12302b]/15 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#12302b] sm:text-lg">
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1f7a6e]/10 text-sm font-black text-[#1f7a6e]">
                        {index + 1}
                      </span>

                      <span>{item.question}</span>
                    </span>

                    <span className="text-xl text-[#1f7a6e] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="pr-11 pt-4 text-sm leading-relaxed text-[#52606d]">
                    {item.answer}
                  </p>
                </details>
              ))}

            </div>
          </div>
        </section>

        {/* شريط التنقل السفلي للهواتف */}
        <nav
          aria-label="التنقل السفلي"
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#12302b]/15 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-lg md:hidden"
        >
          <div className="relative mx-auto flex h-16 max-w-md items-center justify-around px-4">

            <a
              href="#hero"
              className="flex min-h-[44px] flex-1 flex-col items-center justify-center text-[#1f7a6e] transition-transform active:scale-90"
            >
              <div className="mb-0.5 flex h-7 w-10 items-center justify-center rounded-full bg-[#1f7a6e]/15">
                <House size={21} />
              </div>

              <span className="text-[11px] font-black">الرئيسية</span>
            </a>

            <a
              href="#merchants"
              className="flex min-h-[44px] flex-1 flex-col items-center justify-center text-[#52606d] transition-transform active:scale-90"
            >
              <div className="mb-0.5 flex h-7 w-10 items-center justify-center">
                <Store size={21} />
              </div>

              <span className="text-[11px] font-bold">المتاجر</span>
            </a>

            <div className="-mt-6 flex flex-1 flex-col items-center justify-center">
              <button
                type="button"
                aria-label="محفظتي وباركود الدفع"
                onClick={openPwaModal}
                className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-tr from-[#12302b] via-[#1f7a6e] to-[#e9b44c] text-white shadow-xl transition-all hover:brightness-110 active:scale-90"
              >
                <ScanLine size={25} />
              </button>

              <span className="mt-0.5 text-[10px] font-black text-[#12302b]">
                الدفع
              </span>
            </div>

            <a
              href="#calculator"
              className="flex min-h-[44px] flex-1 flex-col items-center justify-center text-[#52606d] transition-transform active:scale-90"
            >
              <div className="mb-0.5 flex h-7 w-10 items-center justify-center">
                <Calculator size={21} />
              </div>

              <span className="text-[11px] font-bold">الوفر</span>
            </a>

            <button
              type="button"
              onClick={openPwaModal}
              className="flex min-h-[44px] flex-1 flex-col items-center justify-center text-[#52606d] transition-transform active:scale-90"
            >
              <div className="mb-0.5 flex h-7 w-10 items-center justify-center">
                <Download size={21} />
              </div>

              <span className="text-[11px] font-bold">التطبيق</span>
            </button>

          </div>

          <div className="mx-auto mb-1 h-1 w-32 rounded-full bg-black/20" />
        </nav>

        {/* نافذة باركود تجريبية */}
        {pwaOpen && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closePwaModal();
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="pwa-modal-title"
              className="w-full max-w-md rounded-t-3xl bg-white p-6 text-center shadow-2xl sm:rounded-3xl"
            >
              <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-gray-200 sm:hidden" />

              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1f7a6e]/10 text-[#1f7a6e]">
                  <QrCode size={38} />
                </div>
              </div>

              <h3
                id="pwa-modal-title"
                className="mb-2 text-2xl font-black text-[#12302b]"
              >
                محفظة تبادل
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-[#52606d]">
                هذه معاينة تجريبية. سيتم توفير باركود دفع حقيقي عند ربط المحفظة
                بنظام الحسابات والخادم.
              </p>

              <div className="mb-5 rounded-2xl border-2 border-dashed border-[#12302b]/20 bg-[#f6f3ec] p-6">
                <QrCode
                  size={100}
                  className="mx-auto text-[#12302b]"
                  aria-hidden="true"
                />

                <p className="mt-3 text-xs font-bold text-[#52606d]">
                  باركود توضيحي — غير صالح للدفع
                </p>
              </div>

              <button
                type="button"
                onClick={closePwaModal}
                className="w-full rounded-xl bg-[#12302b] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1f3a5f]"
              >
                إغلاق
              </button>
            </div>
          </div>
        )}

      </main>
    </MainLayout>
  );
}