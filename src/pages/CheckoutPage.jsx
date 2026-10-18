import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BackButton from '../components/common/BackButton';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ToastNotification from '../components/common/ToastNotification';
import { useCart } from '../context/CartContext';
import { usePoints } from '../context/PointsContext';
import { useAuth } from '../context/AuthContext';

export default function CheckoutPage() {
  const { subtotal } = useCart();
  const { isRedeemed, discountAmount } = usePoints();
  const { user } = useAuth();

  const finalTotal = Math.max(0, subtotal - discountAmount);

  const [recipientName, setRecipientName] = useState(user.name || "سارة أحمد");
  const [recipientPhone, setRecipientPhone] = useState(user.phone || "+970 59 123 4567");
  const [addressDetails, setAddressDetails] = useState(user.address || "شارع النصر الرئيسي، بجوار مجمع النخيل الطبي، عمارة الأمل، الطابق الثالث");
  const [deliveryNotes, setDeliveryNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("wallet");
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOrderConfirmed(true);
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f3ec] text-on-surface text-right">
      <Header />
      <ToastNotification />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Navigation Breadcrumbs & Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
          <Breadcrumbs
            items={[
              { label: "استكشاف المتاجر", to: "/stores" },
              { label: "بوتيك لمسة", to: "/stores/lamsa-boutique" },
              { label: "سلة المشتريات", to: "/cart" },
              { label: "عنوان التوصيل والدفع" }
            ]}
          />
          <BackButton label="العودة إلى سلة المشتريات" fallbackRoute="/cart" />
        </div>

        {/* 2-Column Desktop Grid */}
        <form onSubmit={handleConfirmOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column: Customer Details & Payment Methods (7 cols) */}
          <section className="lg:col-span-7 space-y-6">
            
            {/* Recipient & Delivery Address Card */}
            <div className="bg-surface-container-lowest rounded-2xl p-5 sm:p-6 border border-outline-variant/60 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-2xl">local_shipping</span>
                  <h2 className="font-bold text-base sm:text-lg text-primary">بيانات المستلم وعنوان التوصيل</h2>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <span className="material-symbols-outlined text-[13px]">check_circle</span>
                  <span>عنوان معتمد</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-bold text-on-surface mb-1.5">اسم المستلم</label>
                  <input
                    type="text"
                    required
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface focus:outline-none focus:border-gaza-teal"
                  />
                </div>

                <div>
                  <label className="block font-bold text-on-surface mb-1.5">رقم الهاتف المسجل</label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={recipientPhone}
                    onChange={(e) => setRecipientPhone(e.target.value)}
                    className="w-full h-11 px-3.5 text-right font-numeral-hero rounded-xl border border-outline-variant bg-surface-container-low text-on-surface focus:outline-none focus:border-gaza-teal"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-on-surface mb-1.5">تفاصيل العنوان في قطاع غزة</label>
                  <input
                    type="text"
                    required
                    value={addressDetails}
                    onChange={(e) => setAddressDetails(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:border-gaza-teal focus:ring-2 focus:ring-gaza-teal/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-on-surface mb-1.5">ملاحظات تسليم خاصة للمندوب (اختياري)</label>
                  <input
                    type="text"
                    value={deliveryNotes}
                    onChange={(e) => setDeliveryNotes(e.target.value)}
                    placeholder="مثال: يرجى الاتصال قبل الوصول بـ 15 دقيقة والتسليم بالفترة المسائية"
                    className="w-full h-11 px-3.5 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-gaza-teal"
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods Card */}
            <div className="bg-surface-container-lowest rounded-2xl p-5 sm:p-6 border border-outline-variant/60 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-2xl">payments</span>
                  <h2 className="font-bold text-base sm:text-lg text-primary">طريقة الدفع الإلكتروني المعتمدة</h2>
                </div>
                <span className="text-xs text-on-surface-variant flex items-center gap-1 font-bold">
                  <span className="material-symbols-outlined text-emerald-700 text-[16px]">lock</span>
                  <span>تشفير مصرفي 256-bit</span>
                </span>
              </div>

              <div className="space-y-3">
                {/* Option 1: Electronic Wallet */}
                <label className={`relative flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  paymentMethod === "wallet" 
                    ? 'border-gaza-teal bg-gaza-teal/5' 
                    : 'border-outline-variant bg-surface-container-lowest'
                }`}>
                  <input
                    type="radio"
                    name="payment_method"
                    value="wallet"
                    checked={paymentMethod === "wallet"}
                    onChange={() => setPaymentMethod("wallet")}
                    className="mt-1 text-gaza-teal focus:ring-gaza-teal"
                  />
                  <div className="flex-1 space-y-1 text-xs sm:text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-primary">رصيد المحفظة الإلكترونية (جوال باي / PalPay)</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          الخيار الموصى به
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-gaza-teal text-xl icon-fill">account_balance_wallet</span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      خصم مباشر وفوري وآمن دون أي عمولات إضافية مع إشعار استقطاع فوري.
                    </p>
                    <div className="mt-2 p-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-between text-xs">
                      <span className="text-emerald-800 font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">check_circle</span>
                        <span>الرصيد المتاح بالمحفظة: <strong>350.00 ₪</strong></span>
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          كافٍ لتغطية الفاتورة ({finalTotal.toFixed(2)} ₪)
                        </span>
                        <Link
                          to="/payment-alert"
                          className="text-[11px] text-[#ba1a1a] hover:underline flex items-center gap-0.5 font-bold"
                          title="محاكاة حالة رصيد المحفظة غير الكافي (19code.html)"
                        >
                          <span className="material-symbols-outlined text-[13px]">warning</span>
                          <span>حالة عجز الرصيد</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </label>

                {/* Option 2: Local Bank Cards */}
                <label className={`relative flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === "card" 
                    ? 'border-gaza-teal bg-gaza-teal/5 ring-1 ring-gaza-teal' 
                    : 'border-outline-variant bg-surface-container-lowest'
                }`}>
                  <input
                    type="radio"
                    name="payment_method"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="mt-1 text-gaza-teal focus:ring-gaza-teal"
                  />
                  <div className="flex-1 space-y-1 text-xs sm:text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-on-surface">بطاقة دفع بنكية محلية (Visa / Mastercard)</span>
                      <span className="material-symbols-outlined text-outline text-xl">credit_card</span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      تقبل بطاقات بنك فلسطين والبنك الإسلامي الفلسطيني وكافة البطاقات المصدرة محلياً.
                    </p>
                  </div>
                </label>
              </div>

              {/* Escrow Protection Notice */}
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 flex items-start gap-3 text-xs">
                <span className="material-symbols-outlined text-gaza-teal text-2xl shrink-0 icon-fill">verified_user</span>
                <div>
                  <h3 className="font-bold text-sm text-gaza-teal">دفع محمي بالأمانة (Escrow Protection)</h3>
                  <p className="text-on-surface-variant mt-0.5 leading-relaxed">
                    لا يتم تحرير المبلغ للبائع إلا بعد استلامك للقطع كاملة وفحص المقاس والخامة، وإعطاء رمز التسليم OTP المكون من 4 أرقام للمندوب شخصياً.
                  </p>
                </div>
              </div>
            </div>

          </section>

          {/* Left Column: Order Financial Summary & Confirm Button (5 cols) */}
          <aside className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">
            
            {/* Bill Summary Card */}
            <div className="bg-surface-container-lowest rounded-2xl p-5 sm:p-6 border border-outline-variant/60 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-2xl">receipt_long</span>
                  <h2 className="font-bold text-base sm:text-lg text-primary">ملخص الدفع المالي</h2>
                </div>
                <span className="text-xs font-bold text-gaza-teal bg-gaza-teal/10 px-2.5 py-0.5 rounded-full">
                  فاتورة نهائية
                </span>
              </div>

              {/* Financial Line Items */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span>سعر المنتجات (المختارة من السلة)</span>
                  <span className="font-bold text-on-surface font-numeral-hero text-sm sm:text-base">
                    {subtotal.toFixed(2)} ₪
                  </span>
                </div>

                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span>رسوم التوصيل المنزلي السريع</span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      مجاناً
                    </span>
                  </span>
                  <span className="font-bold text-emerald-800 font-numeral-hero">0.00 ₪</span>
                </div>

                {isRedeemed && (
                  <div className="flex justify-between items-center text-amber-900 bg-amber-50 p-2 rounded-lg border border-amber-200">
                    <span className="flex items-center gap-1 font-bold text-xs">
                      <span className="material-symbols-outlined text-base text-amber-600 icon-fill">loyalty</span>
                      <span>خصم رصيد نقاط الولاء المطبق</span>
                    </span>
                    <span className="font-bold font-numeral-hero text-sm">
                      -{discountAmount.toFixed(2)} ₪
                    </span>
                  </div>
                )}
              </div>

              {/* Net Total */}
              <div className="pt-3 border-t-2 border-dashed border-outline-variant flex justify-between items-baseline">
                <div>
                  <span className="block font-black text-base sm:text-lg text-primary">الإجمالي النهائي للدفع</span>
                  <span className="text-[11px] text-on-surface-variant">شامل الضريبة وكافة الرسوم</span>
                </div>
                <div className="text-left">
                  <span className="font-numeral-hero text-2xl sm:text-3xl font-black text-gaza-teal">
                    {finalTotal.toFixed(2)}
                  </span>
                  <span className="text-xs font-bold text-gaza-teal mr-1">₪</span>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-gaza-teal hover:bg-primary text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>جاري معالجة الدفع الآمن...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-xl">lock</span>
                      <span>تأكيد الدفع {finalTotal.toFixed(2)} ₪ وتسجيل الطلب</span>
                    </>
                  )}
                </button>

                <p className="mt-2 text-center text-[11px] text-on-surface-variant flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-gaza-teal">verified_user</span>
                  <span>عملية دفع فورية وآمنة عبر وساطة منصة تبادل</span>
                </p>
              </div>

            </div>

            {/* Post-Payment Clarification & Loyalty Points Notice (Direct conversion of 17code.html lines 393-423) */}
            <div className="bg-surface-container-lowest rounded-xl p-5 border border-surface-container-highest shadow-xs space-y-4">
              
              {/* Order Registration Status Clarification */}
              <div className={`flex items-start gap-3.5 p-3.5 rounded-xl border transition-all ${
                isOrderConfirmed
                  ? 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/20'
                  : 'bg-tertiary-container/10 border-tertiary-container/20'
              }`}>
                <div className={`w-9 h-9 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5 ${
                  isOrderConfirmed ? 'bg-emerald-600' : 'bg-tertiary-container'
                }`}>
                  <span className="material-symbols-outlined text-[20px]">
                    {isOrderConfirmed ? 'verified' : 'assignment_turned_in'}
                  </span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg font-bold text-tertiary-container">
                    {isOrderConfirmed ? 'تم تأكيد الدفع وتسجيل الطلب بنجاح!' : 'ماذا يحدث فور الضغط على تأكيد الدفع؟'}
                  </h4>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface leading-relaxed">
                    {isOrderConfirmed
                      ? 'تم تسجيل طلبك رسمياً برقم #TRD-2026-GZ84، وتبدأ الآن مرحلة التجهيز والتعقيم في بوتيك لمسة للأزياء تمهيداً للإرسال مع المندوب.'
                      : 'بصير مسجل عندك طلب جديد بنجاح في حسابك، وتبدأ فوراً مرحلة التجهيز والتعقيم في بوتيك لمسة للأزياء تمهيداً للإرسال مع المندوب.'}
                  </p>
                </div>
              </div>

              {/* Pending Loyalty Points Box (17code.html lines 409-422) */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-secondary-fixed/30 border border-secondary-container/40">
                <div className="w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">stars</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <h4 className="font-label-lg text-label-lg font-bold text-on-secondary-container">النقاط المتوقعة المعلقة</h4>
                    <span className="font-bold text-secondary text-sm font-numeral-hero bg-secondary-container/40 px-2 py-0.5 rounded">
                      +1,615 نقطة معلقة
                    </span>
                  </div>
                  <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    تضاف تلقائياً إلى محفظتك كنقاط معلقة، وتتحرر كلياً وتصبح جاهزة للاستخدام فور استلام القطع وتأكيد رمز الاستلام OTP (الـ 4 أرقام) مع المندوب.
                  </p>
                </div>
              </div>

            </div>

          </aside>

        </form>

      </main>

      <Footer />
    </div>
  );
}
