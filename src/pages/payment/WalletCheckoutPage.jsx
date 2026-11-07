import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';
import ToastNotification from '../../components/common/ToastNotification';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { usePoints } from '../../context/PointsContext';

/**
 * WalletCheckoutPage
 * Exact React implementation of 23 اختيار محفظةcode.html
 * Approved Payment Process - Step 1: Wallet Selection & Order Submission
 */
export default function WalletCheckoutPage() {
  const navigate = useNavigate();
  const { subtotal } = useCart();
  const { user } = useAuth();
  const { discountAmount } = usePoints();

  const [recipientName, setRecipientName] = useState('سارة أحمد');
  const [recipientPhone, setRecipientPhone] = useState('+970 59 123 4567');
  const [addressDetails, setAddressDetails] = useState(
    'شارع النصر الرئيسي، بجوار مجمع النخيل الطبي، عمارة الأمل، الطابق الثالث'
  );
  const [deliveryNotes, setDeliveryNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('wallet');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Financial calculations from 23code.html (products: 335, delivery: 0, points discount: -12, net: 323)
  const productsTotal = subtotal > 0 ? subtotal : 335.0;
  const pointsDiscount = discountAmount > 0 ? discountAmount : 12.0;
  const netTotal = Math.max(0, productsTotal - pointsDiscount);

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to approved payment OTP verification (File 24)
      navigate('/payment/otp');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#191c22] font-tajawal text-right selection:bg-[#ffddb5] selection:text-[#2a1800]">
      {/* Customer Header */}
      <CustomerHeader />
      <ToastNotification />

      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step Indicator Progress / Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center flex-wrap gap-2 text-xs md:text-sm text-[#4a5a56] font-medium">
          <Link to="/" className="hover:text-[#1f7a6e] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] leading-none">home</span>
            <span>الرئيسية</span>
          </Link>
          <span className="text-[#8a9a95]">/</span>
          <Link to="/stores" className="hover:text-[#1f7a6e] transition-colors">استكشاف المتاجر</Link>
          <span className="text-[#8a9a95]">/</span>
          <Link to="/stores/lamsa-boutique" className="hover:text-[#1f7a6e] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] leading-none">storefront</span>
            <span>بوتيك لمسة للأزياء</span>
          </Link>
          <span className="text-[#8a9a95]">/</span>
          <Link to="/cart" className="hover:text-[#1f7a6e] transition-colors">سلة المشتريات</Link>
          <span className="text-[#8a9a95]">/</span>
          <span className="text-[#12302b] font-bold">عنوان التوصيل والدفع</span>
        </nav>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* RIGHT COLUMN (Customer Details & Payment Methods) - 7 cols */}
          <section className="lg:col-span-7 space-y-6">
            
            {/* Recipient & Delivery Address Card */}
            <div className="bg-white rounded-xl p-6 border border-[#e1e2ea] shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#f2f3fc]">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#032448] text-[24px]">local_shipping</span>
                  <h2 className="text-lg font-bold text-[#032448]">بيانات المستلم وعنوان التوصيل</h2>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#71dba2]/20 text-[#004328] text-xs font-semibold">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  <span>عنوان مسجل</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#43474e] mb-1.5">اسم المستلم</label>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-4 rounded-xl border border-[#e1e2ea] bg-[#f2f3fc] text-sm text-[#191c22] focus:ring-0 focus:border-[#e1e2ea]"
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#74777f]">person</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#43474e] mb-1.5">رقم الهاتف المسجل</label>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-4 text-right rounded-xl border border-[#e1e2ea] bg-[#f2f3fc] text-sm text-[#191c22] focus:ring-0 focus:border-[#e1e2ea]"
                      dir="ltr"
                      type="text"
                      value={recipientPhone}
                      onChange={(e) => setRecipientPhone(e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#74777f]">call</span>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-[#43474e] mb-1.5">
                    تفاصيل العنوان (الشارع، البناية، المعلم القريب)
                  </label>
                  <div className="relative">
                    <input
                      className="w-full h-12 px-4 rounded-xl border border-[#c4c6cf] bg-white text-sm text-[#191c22] focus:outline-none focus:border-[#032448] focus:ring-2 focus:ring-[#d5e3ff]"
                      type="text"
                      value={addressDetails}
                      onChange={(e) => setAddressDetails(e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#74777f]">home_pin</span>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-[#43474e] mb-1.5">
                    ملاحظات تسليم خاصة للمندوب (اختياري)
                  </label>
                  <input
                    className="w-full h-12 px-4 rounded-xl border border-[#c4c6cf] bg-white text-sm text-[#191c22] placeholder:text-[#74777f] focus:outline-none focus:border-[#032448] focus:ring-2 focus:ring-[#d5e3ff]"
                    placeholder="مثال: يرجى الاتصال قبل الوصول بـ 15 دقيقة والتسليم بالفترة المسائية"
                    type="text"
                    value={deliveryNotes}
                    onChange={(e) => setDeliveryNotes(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods Card */}
            <div className="bg-white rounded-xl p-6 border border-[#e1e2ea] shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#f2f3fc]">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#032448] text-[24px]">payments</span>
                  <h2 className="text-lg font-bold text-[#032448]">طريقة الدفع الإلكتروني المعتمدة</h2>
                </div>
                <span className="text-xs text-[#43474e] flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[16px] text-[#004328]">lock</span>
                  <span>تشفير مصرفي 256-bit</span>
                </span>
              </div>

              <div className="space-y-3.5">
                {/* Option 1: Electronic Wallet (Selected) */}
                <label className="relative flex items-start gap-4 p-4 rounded-xl border-2 border-[#1f7a6e] bg-[#1f7a6e]/5 cursor-pointer transition-all block">
                  <div className="flex items-start gap-3 w-full">
                    <input
                      checked={paymentMethod === 'wallet'}
                      onChange={() => setPaymentMethod('wallet')}
                      className="mt-1 w-4 h-4 text-[#1f7a6e] focus:ring-[#1f7a6e] border-[#74777f]"
                      name="payment_method"
                      type="radio"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-[#032448] text-sm">رصيد المحفظة الإلكترونية (جوال باي / PalPay)</span>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#1f7a6e]/15 text-[#1f7a6e] text-[11px] font-bold">
                            الخيار الموصى به
                          </span>
                        </div>
                        <span className="material-symbols-outlined text-[#1f7a6e] icon-fill">account_balance_wallet</span>
                      </div>
                      <p className="mt-1 text-xs text-[#43474e]">خصم مباشر وفوري وآمن دون أي عمولات إضافية مع إشعار استقطاع فوري.</p>
                      
                      <div className="mt-2.5 p-2.5 rounded-lg bg-white border border-[#e1e2ea] flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 text-xs text-[#191c22]">
                          <span className="material-symbols-outlined text-[#004328] text-[18px]">check_circle</span>
                          <span>الرصيد المتاح بالمحفظة: <strong className="font-bold text-[#1f7a6e]">350.00 ₪</strong></span>
                        </div>
                        <span className="text-[11px] font-semibold text-[#004328] bg-[#71dba2]/20 px-2 py-0.5 rounded-md">
                          رصيد كافٍ لتغطية إجمالي الفاتورة ({netTotal.toFixed(2)} ₪)
                        </span>
                      </div>

                      {/* Error state test navigation links */}
                      <div className="mt-2.5 pt-2 border-t border-[#1f7a6e]/15 flex items-center gap-4 text-xs font-bold text-[#ba1a1a]">
                        <span className="text-[#52606d] font-normal">محاكاة حالات الدفع:</span>
                        <Link to="/payment/insufficient-balance" className="hover:underline flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">warning</span>
                          <span>شاشة عجز الرصيد (26code)</span>
                        </Link>
                        <Link to="/payment/insufficient-funds" className="hover:underline flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">error</span>
                          <span>خطأ تعذر الدفع (27code)</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              {/* Escrow Trust Assurance Badge */}
              <div className="mt-6 p-4 rounded-xl bg-[#f2f3fc] border border-[#e1e2ea] flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#004328]/15 text-[#004328] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[22px] icon-fill">verified_user</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#004328]">دفع محمي بالأمانة (Escrow Protection)</h3>
                  <p className="mt-1 text-xs text-[#43474e] leading-relaxed">
                    لا يتم تحرير المبلغ للبائع إلا بعد استلامك للقطع كاملة وفحص المقاس والخامة، وإعطاء رمز التسليم OTP المكون من 4 أرقام للمندوب شخصياً.
                  </p>
                </div>
              </div>
            </div>

            {/* Try-on Guarantees Banner */}
            <div className="bg-white rounded-xl p-5 border border-[#e1e2ea] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#835400] text-[22px]">health_and_safety</span>
                <h4 className="text-sm font-bold text-[#032448]">ضمانات تجربة الأزياء الراقية لدى تبادل</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#43474e]">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#f2f3fc]">
                  <span className="material-symbols-outlined text-[#004328] text-[18px]">cached</span>
                  <span className="text-xs">استبدال المقاس مجاناً خلال 24 ساعة</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#f2f3fc]">
                  <span className="material-symbols-outlined text-[#004328] text-[18px]">visibility</span>
                  <span className="text-xs">معاينة الفستان والحذاء قبل تسليم الرمز</span>
                </div>
              </div>
            </div>

          </section>

          {/* LEFT COLUMN (Order Summary, Rewards & CTA) - 5 cols */}
          <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Order Financial Summary Card */}
            <div className="bg-white rounded-xl p-6 border border-[#e1e2ea] shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#f2f3fc]">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#032448] text-[24px]">receipt_long</span>
                  <h2 className="text-lg font-bold text-[#032448]">ملخص الدفع المالي</h2>
                </div>
                <span className="text-xs text-[#1f7a6e] font-semibold bg-[#1f7a6e]/10 px-2.5 py-1 rounded-full">
                  فاتورة نهائية
                </span>
              </div>

              {/* Financial Rows */}
              <div className="space-y-3.5 pb-5 border-b border-[#e1e2ea]">
                <div className="flex justify-between items-center text-[#43474e] text-sm">
                  <span>سعر المنتجات (قطعتان فاخرتان)</span>
                  <span className="font-semibold text-[#191c22] font-numeral-hero text-base">
                    {productsTotal.toFixed(2)} ₪
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#43474e] text-sm">
                  <span className="flex items-center gap-1.5">
                    <span>رسوم التوصيل المنزلي السريع</span>
                    <span className="px-2 py-0.5 text-[10px] bg-[#71dba2]/20 text-[#004328] rounded font-bold">مجاناً</span>
                  </span>
                  <span className="font-bold text-[#004328] font-numeral-hero text-[15px]">0.00 ₪</span>
                </div>
                <div className="flex justify-between items-center text-[#43474e] text-sm">
                  <span className="flex items-center gap-1.5 text-[#835400]">
                    <span className="material-symbols-outlined text-[18px]">loyalty</span>
                    <span>خصم رصيد نقاط الولاء المطبق</span>
                  </span>
                  <span className="font-bold text-[#835400] font-numeral-hero text-base" dir="ltr">
                    -{pointsDiscount.toFixed(2)} ₪
                  </span>
                </div>
              </div>

              {/* Net Total */}
              <div className="pt-4 pb-2 flex justify-between items-baseline">
                <div>
                  <span className="block text-lg font-bold text-[#032448]">الإجمالي النهائي للدفع</span>
                  <span className="text-[11px] text-[#43474e]">شامل كافة الضرائب وتكاليف الفحص والتوصيل</span>
                </div>
                <div className="text-left">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#1f7a6e] font-numeral-hero">
                    {netTotal.toFixed(2)}
                  </span>
                  <span className="font-bold text-lg text-[#1f7a6e] mr-1">₪</span>
                </div>
              </div>

              {/* Primary Direct Payment Button */}
              <div className="mt-5 pt-4 border-t border-[#e1e2ea]">
                <button
                  type="button"
                  onClick={handleSubmitOrder}
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-[#1f7a6e] hover:bg-[#12302b] text-white font-bold rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 text-base cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>جاري معالجة تفويض الدفع...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[22px]">lock</span>
                      <span>تأكيد الدفع {netTotal.toFixed(2)} ₪ وتسجيل الطلب</span>
                    </>
                  )}
                </button>
                <p className="mt-2.5 text-center text-xs text-[#43474e] flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#004328]">verified_user</span>
                  <span>عملية دفع فورية وآمنة عبر نظام الوساطة المالي لمنصة تبادل</span>
                </p>
              </div>
            </div>

            {/* Post-Payment Clarification & Loyalty Points Notice */}
            <div className="bg-white rounded-xl p-5 border border-[#e1e2ea] shadow-sm space-y-4">
              {/* Order Registration Status Clarification */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#004328]/10 border border-[#004328]/20">
                <div className="w-9 h-9 rounded-full bg-[#004328] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#004328]">ماذا يحدث فور الضغط على تأكيد الدفع؟</h4>
                  <p className="mt-1 text-xs text-[#191c22] leading-relaxed">
                    بصير مسجل عندك طلب جديد بنجاح في حسابك، وتبدأ فوراً مرحلة التجهيز والتعقيم في بوتيك لمسة للأزياء تمهيداً للإرسال مع المندوب.
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
