import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function ConfirmSubscriptionPage() {
  const navigate = useNavigate();

  // Payment method selection
  const [paymentMethod, setPaymentMethod] = useState('wallet_balance');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'GAZA2026' || promoCode.trim().toUpperCase() === 'GAZA2025') {
      setPromoApplied(true);
      showToast('تم تطبيق كود الخصم الترويجي بنجاح! خصم إضافي 10 ₪.');
    } else if (promoCode.trim()) {
      showToast('رمز الترقية غير صالح أو منتهي الصلاحية.');
    }
  };

  const handleConfirmUpgrade = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      showToast('مبروك! تم تأكيد ترقية متجرك بنجاح إلى باقة التاجر المميز Pro حتى نهاية 2026.');
      setTimeout(() => {
        navigate('/merchant/dashboard');
      }, 2000);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      {/* Top Header */}
      <MerchantHeader />

      {/* Floating Toast */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#12302B] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#E9B44C]/50 text-sm font-bold animate-bounce">
          <span className="material-symbols-outlined text-[#E9B44C] text-xl">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* MAIN CANVAS */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 md:px-6 py-6">
        {/* 1. BREADCRUMBS */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
          <Link to="/merchant/dashboard" className="hover:text-[#12302B] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">home</span>
            الرئيسية
          </Link>
          <span className="text-gray-300">/</span>
          <Link to="/merchant/settings" className="hover:text-[#12302B] transition-colors">
            إدارة الحساب والترقية
          </Link>
          <span className="text-gray-300">/</span>
          <Link to="/merchant/subscription" className="hover:text-[#12302B] transition-colors">
            باقات الاشتراك
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#1F7A6E] font-bold">تأكيد ترقية المتجر إلى باقة Pro</span>
        </nav>

        {/* 2. PAGE HERO HEADLINE & ASSURANCE BANNER */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1F7A6E]/10 px-3 py-1 rounded-full text-xs font-bold text-[#12302B] mb-3">
                <span className="material-symbols-outlined text-sm text-[#E9B44C] icon-fill">workspace_premium</span>
                <span>ترقية نوعية للمتاجر الريادية في قطاع غزة</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#12302B] tracking-tight">
                تأكيد ترقية المتجر إلى باقة التاجر المميز Pro
              </h1>
              <p className="text-xs md:text-sm text-gray-600 mt-2 max-w-3xl leading-relaxed">
                خطوة واحدة لتفعيل المبيعات المضاعفة، أولوية الظهور في دليل المتاجر، وسحب الرصيد اليومي الفوري دون قيود بنكية أو تأخير.
              </p>
            </div>
          </div>
        </div>

        {/* 3. TWO-COLUMN DESKTOP CHECKOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* RIGHT COLUMN: SUBSCRIPTION CHECKOUT & PAYMENT FORM (7 Cols) */}
          <section className="lg:col-span-7 space-y-6">
            {/* Summary Plan Overview Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm">
              <div className="flex items-center justify-between border-b border-[#E1DACB] pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#12302B] text-[#E9B44C] flex items-center justify-center font-bold text-xl shadow-inner">
                    <span className="material-symbols-outlined icon-fill">stars</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-[#12302B]">باقة التاجر المميز VIP Pro</h3>
                      <span className="bg-[#1F7A6E]/15 text-[#12302B] text-xs px-2 py-0.5 rounded-full font-bold">
                        الأكثر طلباً
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">الاشتراك المخصص لمتاجر الأزياء والأحذية المتنامية</p>
                  </div>
                </div>

                <div className="text-left">
                  <span className="text-3xl font-extrabold text-[#12302B] block leading-none">
                    79 <span className="text-sm font-bold">₪</span>
                  </span>
                  <span className="text-xs text-gray-400">شهرياً (شامل التفعيل)</span>
                </div>
              </div>

              {/* Billing timeline breakdown */}
              <div className="bg-[#F6F3EC]/70 rounded-xl p-4 border border-[#E1DACB] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1F7A6E] mt-0.5">event_repeat</span>
                <div className="text-xs text-gray-700 leading-relaxed">
                  <strong className="font-bold text-[#12302B]">دورة الفاتورة المعتمدة:</strong> تتجدد تلقائياً كل 30 يوماً.
                  <span className="text-[#1F7A6E] font-bold block mt-1">
                    ملاحظة ممتازة: لديك 12 يوماً متبقية في التجربة المجانية الحالية؛ سيبدأ احتساب الرسوم بعد انتهائها في 25 أبريل 2026.
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method Selection Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-[#12302B] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1F7A6E]">payments</span>
                  اختيار وسيلة سداد الاشتراك
                </h3>
                <span className="text-xs text-[#12302B] font-bold bg-[#1F7A6E]/15 px-2.5 py-1 rounded-full">
                  آمن ومشفر 100%
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-4">اختر القناة الأنسب لمتجرك لتغطية رسوم التجديد التلقائي الشهري:</p>

              <div className="space-y-3">
                {/* Option 1: Balance Deduct (Recommended) */}
                <label
                  onClick={() => setPaymentMethod('wallet_balance')}
                  className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'wallet_balance'
                      ? 'border-[#1F7A6E] bg-[#1F7A6E]/5'
                      : 'border-[#E1DACB] bg-white hover:border-[#1F7A6E]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      checked={paymentMethod === 'wallet_balance'}
                      onChange={() => setPaymentMethod('wallet_balance')}
                      className="w-4 h-4 text-[#1F7A6E] focus:ring-[#1F7A6E]"
                      name="payment_method"
                      type="radio"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#12302B]">
                          الخصم التلقائي من رصيد محفظة تبادل
                        </span>
                        <span className="bg-[#1F7A6E] text-white text-[10px] px-2 py-0.5 rounded font-bold">
                          موصى بها وفورية
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 block mt-0.5">
                        الرصيد المتاح حالياً: <span className="font-bold text-[#12302B]">3,420 ₪</span> (خصم فوري بدون أي عمولات إضافية)
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">account_balance_wallet</span>
                </label>

                {/* Option 2: PalPay Gaza */}
                <label
                  onClick={() => setPaymentMethod('palpay')}
                  className={`relative flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'palpay'
                      ? 'border-2 border-[#1F7A6E] bg-[#1F7A6E]/5'
                      : 'border-[#E1DACB] bg-white hover:border-[#1F7A6E]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      checked={paymentMethod === 'palpay'}
                      onChange={() => setPaymentMethod('palpay')}
                      className="w-4 h-4 text-[#1F7A6E] focus:ring-[#1F7A6E]"
                      name="payment_method"
                      type="radio"
                    />
                    <div>
                      <span className="text-sm font-bold text-[#12302B]">
                        محفظة بال باي (PalPay) الإلكترونية
                      </span>
                      <span className="text-xs text-gray-500 block mt-0.5">
                        الربط الآمن المعتمد للمحافظ الإلكترونية داخل قطاع غزة والضفة
                      </span>
                    </div>
                  </div>
                  <div className="font-bold text-xs text-[#1F7A6E] bg-gray-100 px-2.5 py-1 rounded">
                    PalPay
                  </div>
                </label>

                {/* Option 3: Bank Direct Transfer */}
                <label
                  onClick={() => setPaymentMethod('bank_wire')}
                  className={`relative flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'bank_wire'
                      ? 'border-2 border-[#1F7A6E] bg-[#1F7A6E]/5'
                      : 'border-[#E1DACB] bg-white hover:border-[#1F7A6E]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      checked={paymentMethod === 'bank_wire'}
                      onChange={() => setPaymentMethod('bank_wire')}
                      className="w-4 h-4 text-[#1F7A6E] focus:ring-[#1F7A6E]"
                      name="payment_method"
                      type="radio"
                    />
                    <div>
                      <span className="text-sm font-bold text-[#12302B]">
                        الإيداع المباشر أو التحويل البنكي المعتمد
                      </span>
                      <span className="text-xs text-gray-500 block mt-0.5">
                        بنك فلسطين أو البنك الإسلامي الفلسطيني (تفعيل خلال ساعتين عمل)
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-gray-400 text-2xl">account_balance</span>
                </label>
              </div>

              {/* Promo Code Input Group */}
              <div className="mt-6 pt-5 border-t border-[#E1DACB]">
                <label className="block text-xs font-bold text-[#12302B] mb-2">
                  هل لديك كود خصم أو رمز ترقية ترويجي؟
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-grow">
                    <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-lg">
                      loyalty
                    </span>
                    <input
                      className="w-full pr-10 pl-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs sm:text-sm font-medium focus:border-[#1F7A6E] focus:ring-1 focus:ring-[#1F7A6E]"
                      placeholder="أدخل الكود هنا (مثال: GAZA2026)"
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={handleApplyPromo}
                    className="px-5 py-2.5 rounded-xl bg-[#1F7A6E] hover:bg-[#12302B] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                    type="button"
                  >
                    تطبيق
                  </button>
                </div>
              </div>
            </div>

            {/* Invoice Breakdown & Final Action Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm">
              <h3 className="text-base font-bold text-[#12302B] mb-4">ملخص الفاتورة النهائية</h3>
              <div className="space-y-3 pb-4 border-b border-[#E1DACB] text-xs sm:text-sm">
                <div className="flex justify-between items-center text-gray-600">
                  <span>رسم الاشتراك الشهري لباقة Pro:</span>
                  <span className="font-bold text-[#12302B]">79.00 ₪</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>خصم استكمال فترة التجربة المجانية (12 يوماً):</span>
                  <span className="text-[#2E9E6B] font-bold">- 31.60 ₪</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between items-center text-gray-600">
                    <span>خصم الكود الترويجي (GAZA2026):</span>
                    <span className="text-[#2E9E6B] font-bold">- 10.00 ₪</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-gray-600">
                  <span>رسوم التأسيس والتجهيز الفني:</span>
                  <span className="text-[#2E9E6B] font-bold">مجاناً (0 ₪)</span>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="py-4 flex justify-between items-baseline">
                <div>
                  <span className="text-base font-bold text-[#12302B] block">المبلغ المستحق للدفع الآن:</span>
                  <span className="text-[11px] text-gray-400">
                    يبدأ الخصم الرسمي في تاريخ انتهاء الأيام الـ 12 المتبقية
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-3xl font-extrabold text-[#12302B]">0.00 ₪</span>
                  <span className="text-xs block text-gray-400">ثم 79 ₪ شهرياً</span>
                </div>
              </div>

              {/* Main CTA Trigger */}
              <div className="mt-4">
                <button
                  onClick={handleConfirmUpgrade}
                  disabled={isProcessing}
                  type="button"
                  className="w-full py-4 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 text-white bg-[#1F7A6E] hover:bg-[#12302B] shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-60"
                >
                  {isProcessing ? (
                    <>
                      <span className="material-symbols-outlined text-xl animate-spin">refresh</span>
                      <span>جاري تأكيد الترقية...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-xl icon-fill">lock</span>
                      <span>تأكيد الترقية والاشتراك في باقة Pro الآن</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </section>

          {/* LEFT COLUMN: VALUE PROPOSITION, STATS & FAQS (5 Cols) */}
          <aside className="lg:col-span-5 space-y-6">
            {/* Value Features Bento Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">rocket_launch</span>
                <h3 className="text-base font-bold text-[#12302B]">ماذا ستحصل عليه فور الترقية؟</h3>
              </div>
              <p className="text-xs text-gray-500 mb-5">
                مقارنة بالباقة التأسيسية المجانية، تم تصميم باقة Pro لتمكين متجرك من الهيمنة على سوق الأزياء المحلي:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2E9E6B]/15 text-[#2E9E6B] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm text-[#12302B] block font-bold">
                      أولوية الصدارة في دليل المتاجر والبحث
                    </strong>
                    <span className="text-xs text-gray-500">
                      ظهور متجرك كأول نتيجة أمام آلاف المتسوقين اليوميين في تطبيق تبادل.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2E9E6B]/15 text-[#2E9E6B] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm text-[#12302B] block font-bold">
                      منتجات غير محدودة مع إدارة المقاسات
                    </strong>
                    <span className="text-xs text-gray-500">
                      ارفع كامل تشكيلات المواسم، خيارات الألوان وتوفر المقاسات في الوقت الفعلي.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2E9E6B]/15 text-[#2E9E6B] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm text-[#12302B] block font-bold">
                      سحب الرصيد المالي يومياً وفورياً
                    </strong>
                    <span className="text-xs text-gray-500">
                      تحويل مباشر إلى محفظة بال باي أو حسابك البنكي دون انتظار التسوية الأسبوعية.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2E9E6B]/15 text-[#2E9E6B] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm text-[#12302B] block font-bold">
                      حملات ولاء وعروض نقاط مضاعفة
                    </strong>
                    <span className="text-xs text-gray-500">
                      إمكانية منح زبائنك كاش باك 5% - 10% لجذب المتسوقين وتكرار زياراتهم لمتجرك.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2E9E6B]/15 text-[#2E9E6B] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm text-[#12302B] block font-bold">
                      شارة «متجر مميز معتمد VIP» الذهبية
                    </strong>
                    <span className="text-xs text-gray-500">
                      تمنح متجرك ثقة ومصداقية استثنائية تشجع الزبائن الجدد على الشراء الفوري.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2E9E6B]/15 text-[#2E9E6B] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm text-[#12302B] block font-bold">
                      دعم فني خاص ذو أولوية عبر واتساب
                    </strong>
                    <span className="text-xs text-gray-500">
                      استجابة مباشرة في أقل من ساعتين مع مدير حساب مخصص لمساعدتك.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Proof & Gaza Merchant Growth Stat */}
            <div
              className="rounded-2xl p-6 text-white shadow-sm relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgb(18, 48, 43) 0%, rgb(31, 122, 110) 100%)',
              }}
            >
              <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-3xl text-[#8df8bd]">trending_up</span>
                <span className="text-xs uppercase tracking-wider text-[#aec8f4]">أثر باقة Pro في أرقام حقيقية</span>
              </div>
              <p className="text-base font-bold leading-snug mb-2">
                متاجر باقة Pro تحقق في المتوسط نمواً بنسبة{' '}
                <span className="text-2xl font-black text-[#8df8bd]">+45%</span> في المبيعات وتكرار زيارة الزبائن خلال أول شهر.
              </p>
              <p className="text-xs text-[#aec8f4]">
                بناءً على أداء أكثر من 80 متجر أزياء وأحذية ومستحضرات تجميل نشط في محافظات غزة.
              </p>
            </div>

            {/* Quick FAQ Accordion Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E1DACB] shadow-sm">
              <h3 className="text-base font-bold text-[#12302B] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1F7A6E]">help_outline</span>
                الأسئلة الشائعة حول ترقية الاشتراك
              </h3>
              <div className="space-y-4 text-xs">
                <div className="border-b border-[#E1DACB] pb-3">
                  <h4 className="font-bold text-[#12302B] mb-1">متى يتم خصم أول 79 شيكل فعلياً؟</h4>
                  <p className="text-gray-600 leading-relaxed">
                    إذا كان متجرك في فترة تجربة مجانية، لن يُخصم أي مبلغ حتى تنتهي الأيام المجانية الـ 12 المتبقية. في حال عدم وجود أيام متبقية، سيتم التفعيل والخصم فوراً.
                  </p>
                </div>
                <div className="border-b border-[#E1DACB] pb-3">
                  <h4 className="font-bold text-[#12302B] mb-1">كيف يمكنني إلغاء الاشتراك إذا رغبت بذلك؟</h4>
                  <p className="text-gray-600 leading-relaxed">
                    بضغطة واحدة من إعدادات المتجر ← إدارة الباقة، يمكنك التراجع للباقة المجانية في أي وقت دون الحاجة لمراجعة الدعم وبلا أي شروط.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#12302B] mb-1">هل توجد أي نسبة اقتطاع أو رسوم خفية؟</h4>
                  <p className="text-gray-600 leading-relaxed">
                    لا إطلاقاً. الـ 79 ₪ هي القيمة الكاملة للاشتراك الشهري، ولا نتقاضى عمولات إضافية على السحب المالي لحسابات بال باي.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
