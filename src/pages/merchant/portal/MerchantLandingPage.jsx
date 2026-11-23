import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function MerchantLandingPage() {
  const navigate = useNavigate();

  // Mobile drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Accordion state (single open, defaults to first open like the mockup)
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Onboarding Form state
  const [formData, setFormData] = useState({
    storeName: '',
    category: '',
    phone: '',
    socialLink: '',
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
    }, 900);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: 'متى وكيف أستلم أرباح مبيعاتي؟',
      a: 'تستلم أرباحك فور تأكيد تسليم الطلب للزبون وإدخال المندوب لرمز التسليم المكون من 4 أرقام، ومرور مهلة الـ 24 ساعة. يتم التحويل تلقائياً وبشكل دوري (يومي، أسبوعي، أو شهري بحسب اختيارك) مباشرة إلى محفظتك الإلكترونية المعتمدة في غزة (مثل جوال باي، كاش، أو الحساب البنكي).'
    },
    {
      q: 'ما هي عمولة الـ 3% بالضبط وهل توجد رسوم خفية؟',
      a: 'لا توجد أي رسوم خفية إطلاقاً. أول 14 يوماً مجانية 100% بدون أي اقتطاع. بعد انتهاء التجربة، لا تدفع أي رسوم شهرية إلا في حال اخترت باقة برو (79 ₪)، وتقتطع المنصة فقط عمولة 3% من قيمة المنتجات المباعة بعد إتمام التسليم الناجح. إذا لم تبع أي قطعة، فلن تدفع شيكلاً واحداً للمنصة.'
    },
    {
      q: 'من يتولى توصيل الطلبات وهل للمنصة نسبة من رسوم التوصيل؟',
      a: 'أنت من يتولى التوصيل بنفسك أو عبر شركة التوصيل / المندوب المعتاد الذي تتعامل معه في متجرك. أنت من يحدد رسوم التوصيل بحسب المنطقة، وتصلك رسوم التوصيل كاملة دون أن تقتطع المنصة أي نسبة منها.'
    },
    {
      q: 'ما الفرق بين الباقة المجانية وباقة نمو المتاجر (79 ₪/شهرياً)؟',
      a: 'الباقة المجانية تناسب المتاجر المبتدئة بعدد منتجات ومزايا أساسية. أما باقة الـ 79 ₪ شهرياً (Merchant Pro + AI) فهي تمنحك منتجات وطلبات غير محدودة، ومساعد الذكاء الاصطناعي الكامل الذي يتوقع طلبات المقاسات ويسترجع الزبائن الغائبين عبر واتساب، وأولوية الظهور في صدارة دليل المتاجر، وتقارير أرباح دقيقة.'
    },
    {
      q: 'ماذا لو واجهت انقطاعاً في الكهرباء أو الإنترنت في غزة؟',
      a: 'صُممت منصة تبادل بمرونة عالية وظروف خاصة: تعمل وتتزامن حتى مع سرعات الإنترنت الضعيفة جداً، وتُحفظ كافة البيانات محلياً على جهازك دون فقدان الطلبات، كما يمكنك تأكيد الطلبات عبر رسائل واتساب ورسائل الـ SMS بدون الحاجة لإنترنت فائق السرعة.'
    }
  ];

  return (
    <div className="bg-cream text-brand min-h-screen flex flex-col antialiased selection:bg-gold selection:text-brand font-tajawal pb-16 md:pb-0" dir="rtl">
      
      {/* 1. Header (Elevated, Crisp, Transparent Logo) */}
      <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-bordercol h-[76px] transition-all duration-200 shadow-sm">
        <div className="max-w-[1200px] h-full mx-auto px-4 md:px-6 flex items-center justify-between gap-10">
          
          {/* Brand Logo + Identity */}
          <Link
            to="/merchant/landing"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-teal rounded-xl p-1"
          >
            <img
              alt="شعار تبادل"
              className="w-auto object-contain transition-transform group-hover:scale-105 duration-200 h-9 sm:h-10 rounded-lg"
              src="/logo.png"
            />
            <div className="hidden sm:flex flex-col justify-center border-r-2 border-bordercol pr-3">
              <span className="text-xl font-black text-brand tracking-wide leading-tight">تبادل</span>
              <span className="text-[11px] text-teal font-medium whitespace-nowrap leading-tight mt-0.5">
                بع بذكاء واكسب عملاء بولاء
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-brand px-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-teal transition-colors py-2 relative group flex items-center gap-1.5 cursor-pointer"
            >
              <svg className="w-4 h-4 text-textmuted group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>الرئيسية</span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-teal transition-all duration-200 group-hover:w-full" />
            </button>

            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-teal transition-colors py-2 relative group flex items-center gap-1.5 cursor-pointer"
            >
              <svg className="w-4 h-4 text-textmuted group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>كيف تعمل المنصة</span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-teal transition-all duration-200 group-hover:w-full" />
            </button>

            <button
              onClick={() => scrollToSection('pricing')}
              className="hover:text-teal transition-colors py-2 relative group flex items-center gap-1.5 cursor-pointer"
            >
              <svg className="w-4 h-4 text-textmuted group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>باقات الاشتراك</span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-teal transition-all duration-200 group-hover:w-full" />
            </button>

            <button
              onClick={() => scrollToSection('ai-features')}
              className="hover:text-teal transition-colors py-2 relative group flex items-center gap-1.5 text-teal cursor-pointer"
            >
              <svg className="w-4 h-4 text-teal animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>مزايا الذكاء الاصطناعي</span>
            </button>

            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-teal transition-colors py-2 relative group flex items-center gap-1.5 cursor-pointer"
            >
              <svg className="w-4 h-4 text-textmuted group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>الأسئلة الشائعة</span>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-teal transition-all duration-200 group-hover:w-full" />
            </button>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-3.5">
            <Link
              to="/merchant/login"
              className="text-brand hover:text-teal font-bold text-[14px] min-h-[44px] flex items-center gap-1.5 px-3.5 transition-colors group"
            >
              <svg className="w-4 h-4 text-textmuted group-hover:text-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>تسجيل الدخول</span>
            </Link>

            <button
              onClick={() => scrollToSection('join-form')}
              className="btn-gold text-[14px] font-bold flex items-center gap-1.5"
            >
              <span>قدّم طلب الانضمام (14 يوماً مجاناً)</span>
              <span>✨</span>
            </button>
          </div>

          {/* Mobile Hamburger Button (<768px) */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              onClick={() => scrollToSection('join-form')}
              className="btn-gold text-xs px-3 py-2 min-h-[38px] font-bold"
            >
              انضمام مجاني
            </button>
            <button
              aria-label="فتح القائمة"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[42px] min-w-[42px] rounded-xl border border-bordercol text-brand hover:bg-cream flex items-center justify-center transition-colors"
              type="button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface border-b border-bordercol px-6 py-6 shadow-xl animate-fadeIn gap-10">
            <nav className="flex flex-col gap-3.5 text-base font-bold text-brand">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-2.5 border-b border-bordercol/50 hover:text-teal flex items-center justify-between text-right"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  الرئيسية
                </span>
                <span className="text-textmuted text-sm">←</span>
              </button>

              <button
                onClick={() => scrollToSection('how-it-works')}
                className="py-2.5 border-b border-bordercol/50 hover:text-teal flex items-center justify-between text-right"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-textmuted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  كيف تعمل المنصة
                </span>
                <span className="text-textmuted text-sm">←</span>
              </button>

              <button
                onClick={() => scrollToSection('pricing')}
                className="py-2.5 border-b border-bordercol/50 hover:text-teal flex items-center justify-between text-right"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-textmuted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  باقات الاشتراك (باقة 79 ₪)
                </span>
                <span className="text-gold text-xs bg-gold-soft px-2 py-0.5 rounded font-bold">مميز</span>
              </button>

              <button
                onClick={() => scrollToSection('ai-features')}
                className="py-2.5 border-b border-bordercol/50 hover:text-teal text-teal flex items-center justify-between text-right"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-teal animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  مزايا الذكاء الاصطناعي (AI)
                </span>
                <span className="text-xs bg-teal-light text-teal px-2 py-0.5 rounded font-bold">جديد</span>
              </button>

              <button
                onClick={() => scrollToSection('faq')}
                className="py-2.5 border-b border-bordercol/50 hover:text-teal flex items-center justify-between text-right"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-textmuted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  الأسئلة الشائعة
                </span>
                <span className="text-textmuted text-sm">←</span>
              </button>

              <div className="pt-3 flex flex-col gap-3">
                <Link
                  to="/merchant/login"
                  className="btn-secondary w-full text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  تسجيل الدخول للوحة التاجر
                </Link>

                <button
                  onClick={() => scrollToSection('join-form')}
                  className="btn-gold w-full text-center flex items-center justify-center gap-2"
                >
                  <span>قدّم طلب الانضمام (14 يوماً مجاناً)</span>
                  <span>✨</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* 2. Hero Section: Rich, High-Converting & Visual Mockup */}
        <section className="relative bg-gradient-to-b from-cream via-[#F4EFE6] to-cream py-14 md:py-24 border-b border-bordercol/80 overflow-hidden">
          {/* Decorative ambient backdrops */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              {/* Right Column: Hero Content & Direct Value */}
              <div className="lg:col-span-7 flex flex-col items-start text-right">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-light text-teal text-xs font-bold mb-6 border border-teal/20 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-teal animate-ping" />
                  <span>للمتاجر الإلكترونية الخاصة للأزياء والأحذية</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand leading-[1.25] mb-6 tracking-tight">
                  حوّل زبائن متجرك إلى <span className="text-teal underline decoration-gold/60 decoration-4 underline-offset-8">زبائن دائمين</span> واكسب عملاء جدد بلا تكاليف مسبقة
                </h1>

                <p className="text-base md:text-lg text-textmuted leading-relaxed mb-8 max-w-2xl font-normal">
                  شبكة الولاء الأولى والذكية المخصصة لمتاجر الموضة في غزة: يكسب زبونك نقاط كاش باك 5% مع كل فستان أو حذاء يشتريه، فيعود لمتجرك مجدداً. ويصلك زبائن جدد من مشتركي الشبكة بأمان مالي تام برمز تسليم معتمد.
                </p>

                {/* Actions CTA */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-9">
                  <button
                    onClick={() => scrollToSection('join-form')}
                    className="btn-gold text-base md:text-lg px-8 py-3.5 font-bold shadow-premium flex items-center justify-center gap-2"
                  >
                    <span>قدّم طلب الانضمام (14 يوماً مجاناً)</span>
                    <span className="text-xl">✨</span>
                  </button>

                  <button
                    onClick={() => scrollToSection('how-it-works')}
                    className="inline-flex items-center justify-center gap-2 text-teal hover:text-teal/80 font-bold text-base px-5 py-3 rounded-xl border border-teal/30 bg-surface/80 hover:bg-surface transition-all cursor-pointer"
                  >
                    <span>كيف تضاعف مبيعاتك؟</span>
                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    </svg>
                  </button>
                </div>

                {/* Micro Trust Badges Grid */}
                <div className="pt-6 border-t border-bordercol/80 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-xs font-bold text-brand">
                  <div className="flex items-center gap-2.5 bg-surface/60 p-2.5 rounded-xl border border-bordercol/60">
                    <div className="w-6 h-6 rounded-full bg-teal-light text-teal flex items-center justify-center shrink-0">✓</div>
                    <span>14 يومًا تجربة مجانية بالكامل</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-surface/60 p-2.5 rounded-xl border border-bordercol/60">
                    <div className="w-6 h-6 rounded-full bg-teal-light text-teal flex items-center justify-center shrink-0">✓</div>
                    <span>3% فقط عمولة عند البيع الفعلي</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-surface/60 p-2.5 rounded-xl border border-bordercol/60">
                    <div className="w-6 h-6 rounded-full bg-teal-light text-teal flex items-center justify-center shrink-0">✓</div>
                    <span>حماية وضمان رمز الـ 4 أرقام</span>
                  </div>
                </div>
              </div>

              {/* Left Column: Interactive-Feel 3D Merchant Dashboard Simulation */}
              <div className="lg:col-span-5 relative">
                {/* Floating Badge Accent */}
                <div className="absolute -top-4 -left-4 z-20 bg-surface border border-gold/40 shadow-premium px-3.5 py-2 rounded-2xl flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal animate-pulse" />
                  <span className="text-xs font-bold text-brand">إشعار بيع فوري جديد ⚡</span>
                </div>

                {/* Dashboard Card Container */}
                <div className="card-ledger p-6 bg-surface border-bordercol shadow-floating relative overflow-hidden transform lg:hover:-translate-y-1 transition-transform duration-300">
                  {/* Ledger Header */}
                  <div className="flex items-center justify-between border-b border-bordercol pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-teal text-white flex items-center justify-center font-black text-base shadow-sm">
                        لـم
                      </div>
                      <div>
                        <h3 className="text-sm font-extrabold text-brand leading-snug">بوتيك لمسة أنيقة للأزياء</h3>
                        <span className="text-[11px] text-teal font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                          متجر معتمد في شبكة غزة · متصل
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-teal-light text-teal border border-teal/20">
                      14 يوماً مجاناً مفعلة
                    </span>
                  </div>

                  {/* Live Metrics 2-Col */}
                  <div className="grid grid-cols-2 gap-3.5 mb-5">
                    <div className="bg-cream/70 p-3.5 rounded-xl border border-bordercol/70">
                      <span className="text-[11px] font-semibold text-textmuted block mb-1">صافي أرباح الأسبوع</span>
                      <div className="text-2xl font-black text-brand">2,850 ₪</div>
                      <div className="text-[11px] text-teal font-bold mt-1 flex items-center gap-1">
                        <span>↑ +24%</span>
                        <span className="text-textmuted font-normal">زبائن عائدون بالنقاط</span>
                      </div>
                    </div>
                    <div className="bg-cream/70 p-3.5 rounded-xl border border-bordercol/70">
                      <span className="text-[11px] font-semibold text-textmuted block mb-1">الطلبات المؤكدة</span>
                      <div className="text-2xl font-black text-brand">19 طلباً</div>
                      <div className="text-[11px] text-[#8A6420] font-bold mt-1 flex items-center gap-1">
                        <span>⭐ 4.9/5</span>
                        <span className="text-textmuted font-normal">تقييم المشترين</span>
                      </div>
                    </div>
                  </div>

                  {/* AI Alert Bar */}
                  <div className="bg-teal-light/70 border border-teal/30 rounded-xl p-3 mb-5 flex items-start gap-2.5">
                    <span className="text-base mt-0.5">🤖</span>
                    <div className="text-xs text-brand leading-relaxed">
                      <span className="font-extrabold text-teal">اقتراح الذكاء الاصطناعي اليوم:</span>{' '}
                      فستان الكتان مقاس (M) أوشك على النفاد، و3 عميلات ينتظرن الشراء.
                    </div>
                  </div>

                  {/* Mini Orders Ledger */}
                  <div className="space-y-2.5 mb-5">
                    <div className="text-xs font-extrabold text-brand mb-1 flex items-center justify-between">
                      <span>أحدث عمليات الزبائن بالمتجر</span>
                      <span className="text-[11px] font-bold text-teal">دورة التحويل: أسبوعي سريع</span>
                    </div>

                    {/* Item 1 */}
                    <div className="p-3 rounded-xl border border-bordercol/80 bg-surface flex items-center justify-between text-xs hover:border-teal/50 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center text-sm font-bold">👗</span>
                        <div>
                          <div className="font-extrabold text-brand">فستان سهرة كلاسيك (M)</div>
                          <div className="text-[10px] text-textmuted">الزبونة: سارة خ. · كود التسليم: <span className="font-mono font-bold text-brand">#8421</span></div>
                        </div>
                      </div>
                      <div className="text-left">
                        <span className="font-black text-brand text-sm block">240 ₪</span>
                        <span className="text-[10px] font-extrabold text-teal bg-teal-light px-2 py-0.5 rounded">مكتمل ومحرر</span>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="p-3 rounded-xl border border-bordercol/80 bg-surface flex items-center justify-between text-xs hover:border-gold transition-colors">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-cream flex items-center justify-center text-sm font-bold">👠</span>
                        <div>
                          <div className="font-extrabold text-brand">حذاء كعب عاجي رسمي (38)</div>
                          <div className="text-[10px] text-textmuted">الزبونة: رنا م. · المندوب قيد التوصيل</div>
                        </div>
                      </div>
                      <div className="text-left">
                        <span className="font-black text-brand text-sm block">195 ₪</span>
                        <span className="text-[10px] font-extrabold text-bronze bg-gold-soft px-2 py-0.5 rounded">محجوز بأمانة Escrow</span>
                      </div>
                    </div>
                  </div>

                  {/* Escrow Guarantee Footer */}
                  <div className="bg-[#EBF3F8] p-3 rounded-xl border border-[#246797]/20 flex items-center gap-2.5 text-xs text-[#1E567E]">
                    <svg className="w-4 h-4 shrink-0 text-[#1E567E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span className="text-[11px] font-bold leading-tight">
                      الأموال مضمونة ومودعة مسبقاً وتتحرر لحسابك فور إدخال رمز الـ 4 أرقام
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Key Benefits Strip (3 Cards) */}
        <section className="py-14 bg-surface border-b border-bordercol">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {/* Benefit 1 */}
              <div className="card-ledger p-7 flex flex-col items-start border-bordercol hover:border-teal/50 hover:shadow-soft transition-all">
                <div className="w-12 h-12 rounded-2xl bg-teal-light text-teal flex items-center justify-center mb-5 text-xl font-bold shadow-xs">
                  🔄
                </div>
                <h3 className="text-xl font-extrabold text-brand mb-2.5">عملاء دائمون بولاء حقيقي</h3>
                <p className="text-sm text-textmuted leading-relaxed">
                  يحصل الزبون على كاش باك 5% كنقاط مع كل فستان أو حذاء، فيملك حافزاً نفسياً ومالياً فورياً للعودة لمتجرك واستبدالها في قطعه القادمة بدلاً من التسوق من أي منافس.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="card-ledger p-7 flex flex-col items-start border-bordercol hover:border-teal/50 hover:shadow-soft transition-all">
                <div className="w-12 h-12 rounded-2xl bg-teal-light text-teal flex items-center justify-center mb-5 text-xl font-bold shadow-xs">
                  👥
                </div>
                <h3 className="text-xl font-extrabold text-brand mb-2.5">عملاء جدد دون إعلانات مدفوعة</h3>
                <p className="text-sm text-textmuted leading-relaxed">
                  يظهر متجرك ضمن دليل متاجر الأزياء المعتمدة، ويكتشفك آلاف المتسوقين في غزة الذين جمعوا نقاطاً من الشبكة ويبحثون عن ملابس جديدة لإنفاق نقاطهم فيها.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="card-ledger p-7 flex flex-col items-start border-bordercol hover:border-teal/50 hover:shadow-soft transition-all">
                <div className="w-12 h-12 rounded-2xl bg-teal-light text-teal flex items-center justify-center mb-5 text-xl font-bold shadow-xs">
                  🛡️
                </div>
                <h3 className="text-xl font-extrabold text-brand mb-2.5">دفع مضمون بعد التسليم 100%</h3>
                <p className="text-sm text-textmuted leading-relaxed">
                  وداعاً لتهرب الزبائن أو خسائر التوصيل المرتجع عند الباب. تُحجز قيمة الطلب مسبقاً وتتحرر لمحفظتك فور إدخال رمز التسليم المكون من 4 أرقام من قبل المندوب.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. How It Works (4 Clear Arabic Steps) */}
        <section className="py-18 md:py-24 bg-cream border-b border-bordercol" id="how-it-works">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-black text-teal tracking-wider uppercase bg-teal-light px-3.5 py-1.5 rounded-full border border-teal/20 inline-block mb-3">
                سلاسة وبساطة تامة
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand">
                كيف تعمل المنصة في 4 خطوات سهلة؟
              </h2>
              <p className="text-sm md:text-base text-textmuted mt-3">
                إجراءات واضحة مصممة لتناسب واقع وتحديات تجارة الأزياء في غزة دون أي تعقيد تقني.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Step 1 */}
              <div className="card-ledger p-6 text-center bg-surface relative flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-brand text-white flex items-center justify-center font-black text-xl mb-4 shadow-sm">
                  1
                </div>
                <h3 className="text-base font-extrabold text-brand mb-2">قدّم طلب الانضمام</h3>
                <p className="text-xs text-textmuted leading-relaxed">
                  سجّل متجرك في دقيقة واحدة عبر نموذج الواتساب المعتمد، واستفد من 14 يوماً تجربة مجانية فورية.
                </p>
              </div>

              {/* Step 2 */}
              <div className="card-ledger p-6 text-center bg-surface relative flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-teal text-white flex items-center justify-center font-black text-xl mb-4 shadow-sm">
                  2
                </div>
                <h3 className="text-base font-extrabold text-brand mb-2">أضف أزياءك وأحذيتك</h3>
                <p className="text-xs text-textmuted leading-relaxed">
                  ارفع صور الكتالوج، الألوان، مقاسات الفساتين والأحذية المتوفرة، وحدد رسوم التوصيل الخاصة بك بحرية كاملة.
                </p>
              </div>

              {/* Step 3 */}
              <div className="card-ledger p-6 text-center bg-surface relative flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-gold text-brand flex items-center justify-center font-black text-xl mb-4 shadow-sm">
                  3
                </div>
                <h3 className="text-base font-extrabold text-brand mb-2">يشتري الزبون ويكسب نقاطاً</h3>
                <p className="text-xs text-textmuted leading-relaxed">
                  تُحجز أموال الطلب بأمانة Escrow إلكترونياً، ويكسب الزبون نقاطه التشجيعية ليعود للشراء من متجرك لاحقاً.
                </p>
              </div>

              {/* Step 4 */}
              <div className="card-ledger p-6 text-center bg-surface relative flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-dark text-gold flex items-center justify-center font-black text-xl mb-4 shadow-sm">
                  4
                </div>
                <h3 className="text-base font-extrabold text-brand mb-2">سلّم الطلب واستلم مالك</h3>
                <p className="text-xs text-textmuted leading-relaxed">
                  يسلّم المندوب برمز الـ 4 أرقام، وتتحرر أموالك مباشرة إلى محفظتك وفق دورة التحويل التي تختارها.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PRICING & PLANS SECTION (Free Starter vs Merchant Pro + AI) */}
        <section className="py-18 md:py-24 bg-surface border-b border-bordercol relative" id="pricing">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-black text-teal tracking-wider uppercase bg-teal-light px-3.5 py-1.5 rounded-full border border-teal/20 inline-block mb-3">
                شفافية مالية مطلقة
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand">
                باقات اشتراك شفافة ومرنة صُممت لنمو متجرك
              </h2>
              <p className="text-sm md:text-base text-textmuted mt-3">
                اختر الباقة المناسبة لمرحلة متجرك الحالية، مع إمكانية الترقية أو الإلغاء في أي وقت دون أي التزام.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
              
              {/* Plan A: Free Starter */}
              <div className="card-ledger p-8 md:p-9 bg-surface border-bordercol flex flex-col justify-between hover:border-brand/40 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-textmuted uppercase tracking-wider bg-cream px-3 py-1 rounded-full border border-bordercol">
                      الباقة الأساسية
                    </span>
                    <span className="text-xs font-bold text-teal bg-teal-light px-2.5 py-1 rounded-full">
                      بدون أي تكاليف مسبقة
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-brand mb-2">المتجر الأساسي (Free Starter)</h3>
                  <p className="text-xs text-textmuted leading-relaxed mb-6">
                    الباقة المثالية لبدء تجربة ولاء العملاء في متجرك بدون أي اشتراك شهري ولا أي مخاطرة.
                  </p>

                  <div className="border-y border-bordercol/80 py-5 mb-6">
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-4xl md:text-5xl font-black text-brand">0</span>
                      <span className="text-xl font-black text-brand">₪</span>
                      <span className="text-xs text-textmuted font-semibold">/ شهرياً (مجاناً دائماً)</span>
                    </div>
                    <div className="text-xs font-bold text-teal mt-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                      <span>14 يوماً تجربة مجانية بالكامل بلا أي عمولة، ثم 3% فقط عند البيع الناجح</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-xs font-extrabold text-brand mb-2">المزايا المشمولة في الباقة:</div>
                    <div className="flex items-start gap-3 text-xs text-brand">
                      <div className="w-5 h-5 rounded-full bg-teal-light text-teal flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
                      <span><strong>14 يوماً تجربة مجانية كاملة</strong> بدون اقتطاع أي عمولة إطلاقاً.</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-brand">
                      <div className="w-5 h-5 rounded-full bg-teal-light text-teal flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
                      <span><strong>عمولة 3% فقط</strong> تقتطع من كل بيعة ناجحة بعد تسليم الطلب فقط.</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-brand">
                      <div className="w-5 h-5 rounded-full bg-teal-light text-teal flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
                      <span><strong>كاش باك 5% كنقاط ولاء</strong> تشجع الزبائن على تكرار الشراء من متجرك.</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-brand">
                      <div className="w-5 h-5 rounded-full bg-teal-light text-teal flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
                      <span><strong>إدارة الطلبات والتسليم</strong> محمي ومؤكد برمز التسليم المكون من 4 أرقام.</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-brand">
                      <div className="w-5 h-5 rounded-full bg-teal-light text-teal flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
                      <span><strong>عدد كافٍ من المنتجات الأساسية</strong> لعرض أهم تشكيلات الأزياء والأحذية.</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-brand">
                      <div className="w-5 h-5 rounded-full bg-teal-light text-teal flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
                      <span><strong>تقارير مبيعات دورية أساسية</strong> وكشوفات حساب العمليات المحررة.</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-brand">
                      <div className="w-5 h-5 rounded-full bg-teal-light text-teal flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
                      <span><strong>دعم فني قياسي</strong> عبر الواتساب للمساعدة في إعداد المتجر.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => scrollToSection('join-form')}
                    className="btn-secondary w-full text-center text-sm font-extrabold py-3.5"
                  >
                    ابدأ مجاناً الآن (14 يوماً تجربة)
                  </button>
                  <span className="text-[11px] text-textmuted text-center block mt-2.5">
                    لا يتطلب إدخال أي بطاقة بنكية للتسجيل
                  </span>
                </div>
              </div>

              {/* Plan B: Merchant Pro + AI (High-End Featured Card) */}
              <div className="card-ledger p-8 md:p-9 bg-surface border-2 border-gold flex flex-col justify-between relative shadow-premium hover:shadow-floating transition-all">
                {/* Pro Badge Header */}
                <div className="absolute -top-4 right-8 bg-gradient-to-r from-gold to-[#DC9E2E] text-brand font-black text-xs px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <span>الأكثر طلباً وتميزاً للمتاجر المتنامية ⭐</span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4 mt-2">
                    <span className="text-xs font-black text-bronze uppercase tracking-wider bg-gold-soft px-3 py-1 rounded-full border border-gold/40">
                      باقة المحترفين الذكية
                    </span>
                    <span className="text-xs font-extrabold text-teal bg-teal-light px-2.5 py-1 rounded-full">
                      مدعومة بالذكاء الاصطناعي AI
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-brand mb-2">نمو المتاجر الاحترافية (Merchant Pro + AI)</h3>
                  <p className="text-xs text-textmuted leading-relaxed mb-6">
                    للمتاجر الجادة التي ترغب في مضاعفة المبيعات، وأتمتة استرجاع الزبائن، والتحكم بمخزونها بذكاء فائق.
                  </p>

                  <div className="border-y border-bordercol/80 py-5 mb-6 bg-gradient-to-l from-gold-soft/50 via-transparent to-transparent rounded-xl px-2">
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-4xl md:text-5xl font-black text-brand">79</span>
                      <span className="text-xl font-black text-brand">₪</span>
                      <span className="text-xs text-textmuted font-semibold">/ شهرياً</span>
                    </div>
                    <div className="text-xs font-bold text-teal mt-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                      <span>(أو تجربة مجانية ضمن فترة الإطلاق لأول 5 متاجر مؤسسة)</span>
                    </div>
                  </div>

                  {/* High Value Features */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-xs font-extrabold text-brand mb-2 flex items-center gap-1.5">
                      <span className="text-gold">✨</span>
                      <span>كل مزايا الباقة الأساسية بالإضافة إلى:</span>
                    </div>

                    <div className="flex items-start gap-3 text-xs text-brand">
                      <div className="w-5 h-5 rounded-full bg-gold/20 text-bronze flex items-center justify-center shrink-0 font-bold mt-0.5">★</div>
                      <span><strong>عدد لا نهائي من المنتجات والأصناف (Unlimited SKUs)</strong> دون أي قيود على الصور والمقاسات والألوان.</span>
                    </div>

                    <div className="flex items-start gap-3 text-xs text-brand">
                      <div className="w-5 h-5 rounded-full bg-gold/20 text-bronze flex items-center justify-center shrink-0 font-bold mt-0.5">★</div>
                      <span><strong>مبيعات وطلبات غير محدودة</strong> بلا سقف مع أسرع دورة تحويل للأرباح.</span>
                    </div>

                    {/* AI Suite Points */}
                    <div className="p-3 bg-teal-light/60 rounded-xl border border-teal/20 space-y-2 mt-2">
                      <div className="text-xs font-black text-teal flex items-center gap-1.5">
                        <span>🤖</span>
                        <span>أدوات الذكاء الاصطناعي المتقدمة (AI Powered Tools):</span>
                      </div>
                      <p className="text-[11px] text-textmuted leading-relaxed">
                        • <strong>مساعد استرجاع الزبائن التلقائي:</strong> يحلل سلوك المتسوقين ويقترح توقيت إرسال رسالة واتساب للزبون الغائب مع عرضه المفضل.
                      </p>
                      <p className="text-[11px] text-textmuted leading-relaxed">
                        • <strong>التنبؤ بالطلب والمقاسات الأكثر مبيعاً:</strong> يحذرك قبل نفاد مقاسات الفساتين والأحذية الرائجة.
                      </p>
                      <p className="text-[11px] text-textmuted leading-relaxed">
                        • <strong>اقتراح العروض والنقاط المضاعفة:</strong> يقترح تلقائياً الخصومات التي تحقق أعلى عائد ربحي.
                      </p>
                      <p className="text-[11px] text-textmuted leading-relaxed">
                        • <strong>صياغة آلية ذكية لوصف الأزياء:</strong> توليد أوصاف جذابة للأقمشة والموديلات تزيد نسبة إتمام الشراء.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 text-xs text-brand pt-1">
                      <div className="w-5 h-5 rounded-full bg-gold/20 text-bronze flex items-center justify-center shrink-0 font-bold mt-0.5">★</div>
                      <span><strong>تقارير مالية وتحليلية شاملة (أسبوعية وشهرية):</strong> كشوفات دقيقة لصافي الأرباح ومعدل عودة المشترين (Retention Rate).</span>
                    </div>

                    <div className="flex items-start gap-3 text-xs text-brand">
                      <div className="w-5 h-5 rounded-full bg-gold/20 text-bronze flex items-center justify-center shrink-0 font-bold mt-0.5">★</div>
                      <span><strong>أولوية الظهور في دليل المتاجر</strong> والصفحة الرئيسية لمنصة تبادل لجذب آلاف المشترين الجدد.</span>
                    </div>

                    <div className="flex items-start gap-3 text-xs text-brand">
                      <div className="w-5 h-5 rounded-full bg-gold/20 text-bronze flex items-center justify-center shrink-0 font-bold mt-0.5">★</div>
                      <span><strong>مدير حساب ودعم فني مخصص VIP</strong> وأولوية في الحملات الترويجية الموجهة.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => scrollToSection('join-form')}
                    className="btn-gold w-full text-center text-base font-black py-4 shadow-premium"
                  >
                    اشترك في باقة برو (79 ₪/شهرياً)
                  </button>
                  <span className="text-[11px] text-textmuted text-center block mt-2.5">
                    فرصة الترقية مجانية متاحة لأول 5 متاجر تسجل اليوم
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. AI Features Deep-Dive Section */}
        <section className="py-18 md:py-24 bg-cream border-b border-bordercol" id="ai-features">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-black text-teal tracking-wider uppercase bg-teal-light px-3.5 py-1.5 rounded-full border border-teal/20 inline-block mb-3">
                تقنية الغد لمتاجر اليوم
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand">
                كيف يخدم الذكاء الاصطناعي متجرك على مدار الساعة؟
              </h2>
              <p className="text-sm md:text-base text-textmuted mt-3">
                مساعدك الرقمي الشخصي الذي يحلل، يتوقع، ويساعدك في اتخاذ قرارات تزيد دخلك دون إجهاد.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {/* AI Feature 1 */}
              <div className="card-ledger p-7 bg-surface border-bordercol hover:border-teal/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-teal-light text-teal flex items-center justify-center mb-5 text-2xl font-bold">
                  📦
                </div>
                <h3 className="text-lg font-extrabold text-brand mb-2.5">حارس المخزون والتنبؤ بالمقاسات</h3>
                <p className="text-xs text-textmuted leading-relaxed">
                  يقوم النظام بتحليل حركة مبيعات فساتينك وأحذيتك، وينبهك تلقائياً قبل نفاد المقاسات الأكثر طلباً (مثل مقاسات 38 للأحذية أو M للعبايات) لطلبها مبكراً وتجنب خسارة المبيعات.
                </p>
              </div>

              {/* AI Feature 2 */}
              <div className="card-ledger p-7 bg-surface border-bordercol hover:border-teal/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-gold-soft text-bronze flex items-center justify-center mb-5 text-2xl font-bold">
                  💬
                </div>
                <h3 className="text-lg font-extrabold text-brand mb-2.5">مرجّع الزبائن عبر واتساب</h3>
                <p className="text-xs text-textmuted leading-relaxed">
                  إذا مر 30 يوماً على آخر طلب لزبونة دون أن تعود، يقترح المساعد الذكي رسالة مخصصة مع كود نقاط مضاعفة على صنفها المفضل لتشجيعها على فتح المتجر والشراء فوراً.
                </p>
              </div>

              {/* AI Feature 3 */}
              <div className="card-ledger p-7 bg-surface border-bordercol hover:border-teal/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-teal-light text-teal flex items-center justify-center mb-5 text-2xl font-bold">
                  🪄
                </div>
                <h3 className="text-lg font-extrabold text-brand mb-2.5">صائغ أوصاف الأزياء وعروض التسعير</h3>
                <p className="text-xs text-textmuted leading-relaxed">
                  بنقرة واحدة، يكتب الذكاء الاصطناعي أوصافاً تسويقية باهرة لقطعك تبرز خامة القماش وجودة التفصيل، ويقترح عليك نسبة الخصم التي تمنحك أعلى صافي ربح ممكن.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. What You Control Grid (Autonomy) */}
        <section className="py-16 md:py-20 bg-surface border-b border-bordercol">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-black text-teal tracking-wider uppercase block mb-1">
                الاستقلالية الكاملة للتاجر
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-brand">ما الذي تتحكم به كتاجر في تبادل؟</h2>
              <p className="text-sm text-textmuted mt-1">
                المنصة أداة لتمكينك وتنمية مبيعاتك، وليست وسيطاً يتحكم في سياساتك أو يفرض عليك قيوداً.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-ledger p-6 bg-surface border-bordercol">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-light text-teal flex items-center justify-center font-black text-sm">
                    01
                  </div>
                  <h3 className="text-base font-extrabold text-brand">متجرك ومنتجاتك وأسعارك</h3>
                </div>
                <p className="text-xs text-textmuted leading-relaxed">
                  أنت من يحدد الملابس والأحذية المعروضة، المخزون، صور الكتالوج، الألوان، المقاسات، ورسوم التوصيل الخاصة بك لكل منطقة.
                </p>
              </div>

              <div className="card-ledger p-6 bg-surface border-bordercol">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-light text-teal flex items-center justify-center font-black text-sm">
                    02
                  </div>
                  <h3 className="text-base font-extrabold text-brand">عروضك الترويجية ونقاط المكافآت</h3>
                </div>
                <p className="text-xs text-textmuted leading-relaxed">
                  يمكنك إطلاق عروض تخفيض موسمية مباشرة، وتحديد المنتجات التي تقبل الاستبدال بالنقاط، ومضاعفة مكافآت زبائنك المميزين.
                </p>
              </div>

              <div className="card-ledger p-6 bg-surface border-bordercol">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-light text-teal flex items-center justify-center font-black text-sm">
                    03
                  </div>
                  <h3 className="text-base font-extrabold text-brand">دورات تحويل الأموال وأرباحك</h3>
                </div>
                <p className="text-xs text-textmuted leading-relaxed">
                  اختر دورة التحويل التي تناسب تدفقك النقدي (يومي، أسبوعي، أو شهري) مع كشف حساب دقيق يوضح كل عملية بيع وعمولتها.
                </p>
              </div>

              <div className="card-ledger p-6 bg-surface border-bordercol">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-light text-teal flex items-center justify-center font-black text-sm">
                    04
                  </div>
                  <h3 className="text-base font-extrabold text-brand">تقييمات وثقة المتسوقين</h3>
                </div>
                <p className="text-xs text-textmuted leading-relaxed">
                  تابع رضا المشترين، واستقبل ملاحظات المقاسات وتأكيدات الاستلام، وابنِ سمعة متجر موثوق يتصدر دليل الشبكة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ Section: 5 Detailed Arabic Questions */}
        <section className="py-18 md:py-24 bg-cream border-b border-bordercol" id="faq">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center mb-14">
              <span className="text-xs font-black text-teal tracking-wider uppercase bg-teal-light px-3.5 py-1.5 rounded-full border border-teal/20 inline-block mb-3">
                إجابات صريحة ومباشرة
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-brand">الأسئلة الشائعة للتاجر</h2>
              <p className="text-sm text-textmuted mt-2">
                كل ما يهمك معرفته حول الأموال، التوصيل، عمولة 3%، وباقة الـ 79 ₪.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`card-ledger p-5 bg-surface border-bordercol transition-all cursor-pointer ${
                      isOpen ? 'border-teal bg-surface shadow-sm' : ''
                    }`}
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="flex items-center justify-between font-extrabold text-base text-brand select-none">
                      <span>{faq.q}</span>
                      <span className={`faq-icon text-textmuted transition-transform duration-200 ${isOpen ? 'rotate-180 text-teal' : ''}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                        </svg>
                      </span>
                    </div>

                    {isOpen && (
                      <div className="pt-3 text-xs md:text-sm text-textmuted leading-relaxed border-t border-bordercol/50 mt-3 font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9. Quick Onboarding Form (Join in 30 Seconds) */}
        <section className="py-16 md:py-20 bg-surface" id="join-form">
          <div className="max-w-[620px] mx-auto px-4 md:px-6">
            <div className="card-ledger p-7 md:p-9 bg-cream/40 border-2 border-bordercol/90 shadow-soft">
              <div className="text-center mb-7">
                <div className="w-12 h-12 rounded-2xl bg-teal-light text-teal flex items-center justify-center mx-auto mb-3 font-bold text-2xl">
                  ✍️
                </div>
                <h3 className="text-2xl font-black text-brand">قدّم طلب انضمام متجرك الآن</h3>
                <p className="text-xs md:text-sm text-textmuted mt-1.5">
                  ابدأ تجربتك المجانية لمدة 14 يوماً خلال 30 ثانية بدون أي التزام مالي
                </p>
              </div>

              {formStatus === 'success' ? (
                <div className="bg-teal-light/80 border border-teal/40 rounded-2xl p-6 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-teal text-white rounded-full flex items-center justify-center mx-auto text-2xl font-black shadow-sm">
                    ✓
                  </div>
                  <h4 className="text-lg font-black text-brand">تم استلام طلب انضمام متجرك بنجاح!</h4>
                  <p className="text-xs md:text-sm text-textmuted leading-relaxed">
                    شكراً لانضمامك لمنصة تبادل. سيتواصل معك فريقنا المختص عبر الواتساب على الرقم المُسجل لتفعيل متجرك وبدء فترة الـ 14 يوماً مجاناً.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                      onClick={() => navigate('/merchant/onboarding/store-info')}
                      className="btn-gold text-xs font-extrabold py-3 px-5"
                    >
                      متابعة ملء بيانات المتجر والكتالوج الآن
                    </button>
                    <button
                      onClick={() => {
                        setFormStatus('idle');
                        setFormData({ storeName: '', category: '', phone: '', socialLink: '' });
                      }}
                      className="btn-secondary text-xs font-bold py-3 px-5"
                    >
                      إرسال طلب لمتجر آخر
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div>
                    <label className="block text-xs font-bold text-brand mb-1.5">
                      اسم المتجر أو البوتيك *
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-xl border border-bordercol text-sm focus:outline-none focus:ring-2 focus:ring-teal bg-surface font-tajawal text-brand"
                      name="storeName"
                      value={formData.storeName}
                      onChange={handleInputChange}
                      placeholder="مثال: بوتيك الأناقة للأزياء"
                      required
                      type="text"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand mb-1.5">
                      نوع المنتجات الأساسية *
                    </label>
                    <select
                      className="w-full h-11 px-3.5 rounded-xl border border-bordercol text-sm focus:outline-none focus:ring-2 focus:ring-teal bg-surface font-tajawal text-brand"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">اختر التخصص...</option>
                      <option value="fashion">أزياء وفساتين نسائية</option>
                      <option value="shoes">أحذية وحقائب</option>
                      <option value="abaya">عبايات وجلابيات</option>
                      <option value="mix">تشكيلة أزياء وأحذية متنوعة</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand mb-1.5">
                      رقم الجوال والواتساب للتواصل وتأكيد الحساب *
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-xl border border-bordercol text-sm focus:outline-none focus:ring-2 focus:ring-teal bg-surface text-left font-tajawal text-brand"
                      dir="ltr"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="059xxxxxxx أو 056xxxxxxx"
                      required
                      type="tel"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand mb-1.5">
                      رابط صفحة المتجر (إنستغرام أو فيسبوك) *
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-xl border border-bordercol text-sm focus:outline-none focus:ring-2 focus:ring-teal bg-surface text-left font-tajawal text-brand"
                      dir="ltr"
                      name="socialLink"
                      value={formData.socialLink}
                      onChange={handleInputChange}
                      placeholder="https://instagram.com/your_boutique"
                      required
                      type="url"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      className="btn-gold w-full text-base font-extrabold py-3.5 shadow-premium disabled:opacity-75 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={formStatus === 'loading'}
                    >
                      {formStatus === 'loading' ? 'جاري معالجة الطلب...' : 'إرسال الطلب وبدء الـ 14 يوماً مجاناً'}
                    </button>
                    <span className="text-[11px] text-textmuted text-center block mt-2.5 font-medium">
                      🔒 بياناتك محمية تماماً · لن يتم طلب أي بيانات دفع بنكية
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* 10. Final Call to Action Band: Deep Green (#12302B) with Gold Accents */}
        <section className="bg-[#12302B] text-[#F6F3EC] py-16 md:py-20 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#1F7A6E]/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#E9B44C]/15 rounded-full blur-2xl" />

          <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E9B44C] text-xs font-extrabold mb-5 border border-[#E9B44C]/30">
              <span>فرصة الإطلاق المحدودة للمتاجر المؤسسة</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#F6F3EC] mb-5 leading-tight">
              جاهز لتحويل مشتريات زبائنك إلى ولاء دائم؟
            </h2>

            <p className="text-base md:text-lg text-[#F6F3EC]/80 max-w-2xl mx-auto mb-9 leading-relaxed font-normal">
              انضم اليوم إلى شبكة متاجر الأزياء والأحذية الرائدة في غزة. تجربة مجانية كاملة لمدة 14 يوماً، بلا اشتراك إلزامي، وبلا أي عمولة إلا عند البيع والتسليم الفعلي.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection('join-form')}
                className="btn-gold text-base md:text-lg px-9 py-4 font-black min-w-[240px]"
              >
                قدّم طلب الانضمام الآن
              </button>

              <button
                onClick={() => scrollToSection('pricing')}
                className="inline-flex items-center justify-center gap-2 text-[#F6F3EC] hover:text-[#E9B44C] font-bold text-base px-6 py-3.5 rounded-xl border border-[#F6F3EC]/30 hover:border-[#E9B44C] transition-colors cursor-pointer"
              >
                استعرض باقات الاشتراك
              </button>
            </div>

            <p className="text-xs text-[#F6F3EC]/60 mt-8 tracking-wide">
              مخصص للمتاجر الإلكترونية الخاصة في غزة · ضمان استرداد الحقوق برمز التسليم 4 أرقام
            </p>
          </div>
        </section>
      </main>

      {/* 11. Footer: Formal, Rich, Transparent Logo, Clean Legal Links */}
      <footer className="bg-[#0B1E1B] text-[#F6F3EC] border-t border-[#12302B] py-14 text-xs font-tajawal">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand Info */}
            <div className="md:col-span-5 flex flex-col items-start">
              <img
                alt="تبادل"
                className="h-10 w-auto object-contain mb-4 rounded-lg"
                src="/logo.png"
              />
              <p className="text-[#F6F3EC]/70 text-xs leading-relaxed max-w-sm mb-4">
                المنصة الأولى المخصصة لولاء عملاء متاجر الأزياء والأحذية في قطاع غزة. نساعد المتاجر على مضاعفة تكرار الشراء والوصول لزبائن جدد بأمان مالي تام.
              </p>
              <div className="text-[11px] text-[#E9B44C] font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1F7A6E]" />
                <span>بوابة التاجر المعتمدة · شبكة غزة 2026</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-extrabold text-[#F6F3EC] mb-4 border-r-2 border-[#E9B44C] pr-2.5">روابط سريعة للتاجر</h4>
              <ul className="space-y-2.5 text-[#F6F3EC]/70 font-semibold">
                <li>
                  <button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#E9B44C] transition-colors text-right cursor-pointer">
                    كيف تعمل المنصة؟
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('pricing')} className="hover:text-[#E9B44C] transition-colors text-right cursor-pointer">
                    باقات الاشتراك (باقة 79 ₪)
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('ai-features')} className="hover:text-[#E9B44C] transition-colors text-right cursor-pointer">
                    مزايا الذكاء الاصطناعي (AI)
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('faq')} className="hover:text-[#E9B44C] transition-colors text-right cursor-pointer">
                    الأسئلة الشائعة للتاجر
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal & Policies */}
            <div className="md:col-span-4">
              <h4 className="text-sm font-extrabold text-[#F6F3EC] mb-4 border-r-2 border-[#1F7A6E] pr-2.5">السياسات والدعم الفني</h4>
              <ul className="space-y-2.5 text-[#F6F3EC]/70 font-semibold">
                <li>
                  <Link className="hover:text-[#E9B44C] transition-colors" to="/merchant/help">شروط وأحكام التجار</Link>
                </li>
                <li>
                  <Link className="hover:text-[#E9B44C] transition-colors" to="/merchant/help">سياسة الخصوصية وأمان البيانات</Link>
                </li>
                <li>
                  <Link className="hover:text-[#E9B44C] transition-colors" to="/merchant/help">اتفاقية حجز وضمان الأموال (Escrow)</Link>
                </li>
                <li>
                  <a
                    className="hover:text-[#E9B44C] transition-colors flex items-center gap-1.5 text-[#1F7A6E]"
                    href="https://wa.me/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>تواصل مباشر مع الدعم عبر واتساب</span>
                    <span>💬</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#F6F3EC]/60 text-[11px]">
            <div>
              جميع الحقوق محفوظة © 2026 لمنصة تبادل للولاء التجاري. صُمم لدعم تجار الأزياء في غزة.
            </div>
            <div className="flex items-center gap-4">
              <span>العملة المعتمدة: الشيكل (₪)</span>
              <span>•</span>
              <span>حماية التسليم بالرمز المكون من 4 أرقام</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom CTA for Mobile Viewports (<768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-bordercol p-3 shadow-floating">
        <button
          onClick={() => scrollToSection('join-form')}
          className="btn-gold w-full text-center text-sm py-3 font-extrabold flex items-center justify-center gap-2"
        >
          <span>قدّم طلب الانضمام (14 يوماً مجاناً)</span>
          <span>🚀</span>
        </button>
      </div>

    </div>
  );
}
