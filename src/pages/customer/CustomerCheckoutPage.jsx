import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import { useCartStore } from '../../store/useCartStore';
import { useSessionStore } from '../../store/useSessionStore';
import { formatCurrency, formatPoints } from '../../utils/loyalty';
import {
  ShieldCheck,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  CheckCircle2,
  User,
  Truck,
  Banknote,
  Gift,
  Store,
  AlertCircle,
} from 'lucide-react';

const gazaDeliveryAreas = [
  'غزة — الرمال ومحيط الجامعات',
  'غزة — تل الهوا والنصر',
  'غزة — الشيخ عجلين والميناء',
  'الوسطى — دير البلح',
  'الوسطى — مخيم النصيرات والبريج',
  'الجنوب — خانيونس والسطر',
  'الجنوب — رفح',
  'الشمال — جباليا وبيت لاهيا',
];

export default function CustomerCheckoutPage() {

  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const totalPoints = useCartStore((state) => state.getTotalPoints());
  const totalCashback = useCartStore((state) => state.getTotalCashback());
  const clearCart = useCartStore((state) => state.clearCart);

  const sessionPhone = useSessionStore((state) => state.identifier);

  // Form Fields
  const [recipientName, setRecipientName] = useState(
    typeof window !== 'undefined' ? sessionStorage.getItem('customerFullName') || '' : ''
  );
  const [phone, setPhone] = useState(sessionPhone || '059');
  const [cityArea, setCityArea] = useState(gazaDeliveryAreas[0]);
  const [addressDetails, setAddressDetails] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [errors, setErrors] = useState({});

  // Submission / Success State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccessData, setOrderSuccessData] = useState(null);

  // Check if cart is empty before ordering
  if (items.length === 0 && !orderSuccessData) {
    return (
      <MainLayout headerVariant="customer">
        <div dir="rtl" className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
          <div className="rounded-full bg-[#f6f3ec] p-6 text-[#1f7a6e] mb-4">
            <ShoppingBag size={48} strokeWidth={1.5} />
          </div>
          <h1 className="text-2xl font-extrabold text-[#12302b]">سلة المشتريات فارغة</h1>
          <p className="mt-2 text-sm text-[#74777f] max-w-md">
            يرجى إضافة قطعة أو أكثر من متجر بوتيك لمسة قبل متابعة إتمام الطلب التجريبي.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/customer/store"
              className="inline-flex items-center gap-2 rounded-xl bg-[#12302b] px-6 py-3 text-sm font-bold text-white hover:bg-[#1f7a6e] transition"
            >
              <Store size={18} />
              <span>تصفح متجر بوتيك لمسة</span>
            </Link>
            <Link
              to="/customer/home"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-[#12302b] hover:bg-neutral-50 transition"
            >
              <span>دليل المتاجر المعتمدة</span>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Handle Form Submission
  const handleSubmitOrder = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!recipientName.trim()) {
      newErrors.recipientName = 'يرجى إدخال اسم المستلم الكامل.';
    }

    const cleanPhone = phone.trim().replace(/[\s-]/g, '');
    const validPhone = /^(059|056)\d{7}$/.test(cleanPhone);
    if (!validPhone) {
      newErrors.phone = 'يرجى إدخال رقم جوال فلسطيني معتمد يبدأ بـ 059 أو 056 ومكون من 10 أرقام.';
    }

    if (!addressDetails.trim() || addressDetails.trim().length < 5) {
      newErrors.addressDetails = 'يرجى إدخال العنوان بالتفصيل (الشارع، المعلم القريب).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate demo order placement (frontend demonstration only)
    setTimeout(() => {
      const demoOrderRef = `TBD-GZ-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderSummary = {
        orderId: demoOrderRef,
        createdAt: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
        recipientName: recipientName.trim(),
        phone: cleanPhone,
        cityArea,
        addressDetails: addressDetails.trim(),
        notes: notes.trim(),
        paymentMethod: paymentMethod === 'cod' ? 'الدفع عند الاستلام التجريبي' : 'رصيد محفظة النقاط التجريبي',
        items: [...items],
        subtotal,
        totalPoints,
        totalCashback,
        deliveryFee: 0,
        totalAmount: subtotal,
      };

      setOrderSuccessData(orderSummary);
      clearCart();
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  // If order was successfully simulated, render the Demo Confirmation Screen
  if (orderSuccessData) {
    return (
      <MainLayout headerVariant="customer">
        <div
          dir="rtl"
          className="min-h-screen bg-[#f6f3ec] font-[Tajawal,sans-serif] text-[#191c22] py-8 sm:py-12"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-6">

            {/* Confirmation Banner */}
            <div className="overflow-hidden rounded-3xl border border-emerald-200 bg-white p-6 sm:p-10 text-center shadow-lg relative">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700 mb-4 shadow-inner">
                <CheckCircle2 size={46} />
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800 mb-2">
                <span>نموذج طلب تجريبي ناجح</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-[#12302b]">
                تم تأكيد طلبك التجريبي بنجاح!
              </h1>

              <p className="mt-2 text-sm text-[#43474e] max-w-lg mx-auto leading-relaxed">
                رقم التتبع التجريبي: <strong className="text-[#12302b] font-mono text-base">{orderSuccessData.orderId}</strong>
              </p>

              {/* Explicit Demo Protocol Notice */}
              <div className="mt-5 rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs leading-6 text-amber-900 text-right space-y-1">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertCircle size={16} className="shrink-0 text-amber-700" />
                  <span>تنبيه المقيّم — محاكاة تجريبية (Prototype Demonstration):</span>
                </div>
                <p>
                  هذا الطلب هو محاكاة لواجهة وتجربة المستخدم (Frontend Prototype). لم يتم سحب أي أموال، ولم يتم إرسال إشعار تجاري حقيقي لمتاجر غزة. كافة الحسابات ونقاط الولاء محسوبة بدقة لأغراض التقييم الفني.
                </p>
              </div>

              {/* Points Earned Showcase */}
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#12302b] to-[#1f7a6e] p-5 text-white shadow-md text-right flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#e9b44c] flex items-center gap-1.5">
                    <Gift size={16} />
                    مكافأة الولاء المتوقعة لهذا الطلب
                  </span>
                  <p className="text-sm text-white/90">
                    ستضاف <strong className="text-white text-base">+{formatPoints(orderSuccessData.totalPoints)}</strong> نقطة تبادل (تعادل <strong>{formatCurrency(orderSuccessData.totalCashback)}</strong> كاش باك 5%) فور تأكيد تسليم الشحنة الميدانية برمز OTP.
                  </p>
                </div>
                <div className="shrink-0 rounded-xl bg-white/10 px-4 py-2 border border-white/20 text-center">
                  <span className="block text-[11px] text-white/70">حالة المكافأة</span>
                  <span className="text-xs font-black text-[#e9b44c]">قيد الانتظار</span>
                </div>
              </div>

              {/* Order Details Breakdown */}
              <div className="mt-6 rounded-2xl border border-[#e1e2ea] bg-[#fafafa] p-5 text-right space-y-4 text-xs">
                <h3 className="font-extrabold text-[#12302b] text-sm border-b border-gray-200 pb-2">
                  تفاصيل المستلم والتوصيل التجريبي:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#43474e]">
                  <div>
                    <span className="block text-gray-400">اسم المستلم:</span>
                    <strong className="text-[#12302b] text-sm">{orderSuccessData.recipientName}</strong>
                  </div>
                  <div>
                    <span className="block text-gray-400">رقم الجوال:</span>
                    <strong className="text-[#12302b] text-sm" dir="ltr">{orderSuccessData.phone}</strong>
                  </div>
                  <div>
                    <span className="block text-gray-400">منطقة التوصيل:</span>
                    <span className="text-[#12302b] font-medium">{orderSuccessData.cityArea}</span>
                  </div>
                  <div>
                    <span className="block text-gray-400">طريقة الدفع التجريبية:</span>
                    <span className="text-[#12302b] font-medium">{orderSuccessData.paymentMethod}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <span className="block text-gray-400">العنوان بالتفصيل:</span>
                  <p className="text-[#12302b] font-medium mt-0.5">{orderSuccessData.addressDetails}</p>
                </div>

                {orderSuccessData.notes && (
                  <div className="border-t border-gray-200 pt-2">
                    <span className="block text-gray-400">ملاحظات التوصيل:</span>
                    <p className="text-[#43474e] mt-0.5">{orderSuccessData.notes}</p>
                  </div>
                )}
              </div>

              {/* Items Summary */}
              <div className="mt-6 rounded-2xl border border-[#e1e2ea] bg-white p-5 text-right space-y-3 text-xs">
                <h3 className="font-extrabold text-[#12302b] text-sm border-b border-gray-100 pb-2">
                  القطع المشمولة في هذا الطلب ({orderSuccessData.items.length}):
                </h3>
                <div className="space-y-2">
                  {orderSuccessData.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 border-b last:border-b-0 border-gray-50">
                      <div>
                        <span className="font-bold text-[#12302b]">{item.name}</span>
                        <span className="text-gray-400 mr-2">({item.size} / {item.color} × {item.quantity})</span>
                      </div>
                      <span className="font-black text-[#12302b]">{formatCurrency(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-3 flex justify-between items-center text-sm font-extrabold text-[#12302b]">
                  <span>إجمالي الطلب:</span>
                  <span className="text-lg font-black">{formatCurrency(orderSuccessData.totalAmount)}</span>
                </div>
              </div>

              {/* Navigation CTAs */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/customer/home"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#12302b] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#1f7a6e] transition"
                >
                  <Store size={18} />
                  <span>العودة إلى دليل المتاجر</span>
                </Link>

                <Link
                  to="/customer/store"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-[#12302b] hover:bg-neutral-50 transition"
                >
                  <span>تصفح بوتيك لمسة مجددًا</span>
                  <ArrowLeft size={16} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout headerVariant="customer">
      <div
        dir="rtl"
        className="min-h-screen bg-[#f6f3ec] font-[Tajawal,sans-serif] text-[#191c22] py-6 sm:py-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-[#74777f]">
              <Link to="/customer/home" className="hover:text-[#12302b] transition-colors">منصة تبادل</Link>
              <ChevronLeft size={14} />
              <Link to="/customer/store" className="hover:text-[#12302b] transition-colors">بوتيك لمسة</Link>
              <ChevronLeft size={14} />
              <Link to="/customer/cart" className="hover:text-[#12302b] transition-colors">سلة المشتريات</Link>
              <ChevronLeft size={14} />
              <span className="font-bold text-[#12302b]">إتمام الطلب التجريبي</span>
            </nav>

            <Link
              to="/customer/cart"
              className="inline-flex items-center gap-1.5 rounded-xl border border-gray-300 bg-white px-3.5 py-2 text-xs font-bold text-[#12302b] shadow-sm hover:bg-neutral-50 transition"
            >
              <ArrowRight size={15} />
              <span>العودة لمراجعة السلة</span>
            </Link>
          </div>

          {/* Page Title */}
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#12302b]/10 px-3 py-1 text-xs font-bold text-[#12302b] mb-2">
              <Truck size={14} />
              <span>تأكيد التوصيل والاستلام</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#12302b]">
              إتمام الطلب ومعاينة التوصيل (Demo Checkout)
            </h1>
          </div>

          {/* Form and Summary Grid */}
          <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 items-start">

            {/* Delivery & Payment Form (8 cols) */}
            <div className="space-y-6 lg:col-span-8">

              {/* Recipient Details Section */}
              <div className="rounded-3xl border border-[#e1e2ea] bg-white p-6 sm:p-8 shadow-sm space-y-5">
                <h2 className="text-lg font-extrabold text-[#12302b] flex items-center gap-2 border-b border-[#f0f0f5] pb-3">
                  <User size={20} className="text-[#1f7a6e]" />
                  <span>بيانات المستلم والتواصل في قطاع غزة</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Recipient Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="recipientName" className="block text-xs font-bold text-[#12302b]">
                      اسم المستلم بالكامل <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="recipientName"
                      type="text"
                      required
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="مثال: ريم محمود الأسطل"
                      className={`h-12 w-full rounded-xl border px-3.5 text-sm outline-none transition ${
                        errors.recipientName
                          ? 'border-rose-400 bg-rose-50/30'
                          : 'border-[#e1e2ea] bg-[#fdfdfd] focus:border-[#1f7a6e] focus:bg-white'
                      }`}
                    />
                    {errors.recipientName && (
                      <p className="text-xs text-rose-600 font-bold">{errors.recipientName}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="checkoutPhone" className="block text-xs font-bold text-[#12302b]">
                      رقم الجوال للتأكيد (جوال / أوريدو) <span className="text-rose-600">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <input
                        id="checkoutPhone"
                        type="tel"
                        dir="ltr"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="059XXXXXXX أو 056XXXXXXX"
                        className={`h-12 w-full rounded-xl border px-3.5 text-right text-sm outline-none transition ${
                          errors.phone
                            ? 'border-rose-400 bg-rose-50/30'
                            : 'border-[#e1e2ea] bg-[#fdfdfd] focus:border-[#1f7a6e] focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-rose-600 font-bold">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* City / Area */}
                <div className="space-y-1.5">
                  <label htmlFor="cityArea" className="block text-xs font-bold text-[#12302b]">
                    المنطقة أو الحي في غزة <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="cityArea"
                    value={cityArea}
                    onChange={(e) => setCityArea(e.target.value)}
                    className="h-12 w-full rounded-xl border border-[#e1e2ea] bg-[#fdfdfd] px-3.5 text-sm outline-none focus:border-[#1f7a6e] focus:bg-white"
                  >
                    {gazaDeliveryAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Address Details */}
                <div className="space-y-1.5">
                  <label htmlFor="addressDetails" className="block text-xs font-bold text-[#12302b]">
                    العنوان بالتفصيل (الشارع، البناية، المعلم القريب) <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="addressDetails"
                    rows={2}
                    required
                    value={addressDetails}
                    onChange={(e) => setAddressDetails(e.target.value)}
                    placeholder="مثال: شارع النصر، مقابل حديقة البلدية، عمارة الأمل، الطابق الثالث"
                    className={`w-full rounded-xl border p-3 text-sm outline-none transition ${
                      errors.addressDetails
                        ? 'border-rose-400 bg-rose-50/30'
                        : 'border-[#e1e2ea] bg-[#fdfdfd] focus:border-[#1f7a6e] focus:bg-white'
                    }`}
                  />
                  {errors.addressDetails && (
                    <p className="text-xs text-rose-600 font-bold">{errors.addressDetails}</p>
                  )}
                </div>

                {/* Delivery Notes */}
                <div className="space-y-1.5">
                  <label htmlFor="notes" className="block text-xs font-bold text-[#74777f]">
                    ملاحظات لمندوب التوصيل (اختياري)
                  </label>
                  <input
                    id="notes"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="مثال: يرجى الاتصال قبل الوصول بنصف ساعة"
                    className="h-11 w-full rounded-xl border border-[#e1e2ea] bg-[#fdfdfd] px-3.5 text-sm outline-none focus:border-[#1f7a6e] focus:bg-white"
                  />
                </div>
              </div>

              {/* Payment Method Section (Demonstration Only) */}
              <div className="rounded-3xl border border-[#e1e2ea] bg-white p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#f0f0f5] pb-3">
                  <h2 className="text-lg font-extrabold text-[#12302b] flex items-center gap-2">
                    <Banknote size={20} className="text-[#1f7a6e]" />
                    <span>طريقة الدفع التجريبية (Demo Payment)</span>
                  </h2>
                  <span className="rounded-full bg-amber-100 text-amber-900 px-2.5 py-0.5 text-[11px] font-bold">
                    معاينة بروتوكول
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <label
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition ${
                      paymentMethod === 'cod'
                        ? 'border-[#12302b] bg-[#12302b]/5'
                        : 'border-[#e1e2ea] bg-white hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="mt-1 accent-[#12302b]"
                    />
                    <div>
                      <span className="block text-sm font-bold text-[#12302b]">
                        الدفع نقداً عند الاستلام (COD)
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-[#74777f]">
                        الدفع الفعلي عند مطابقة واستلام الطلب وفحص المقاس.
                      </span>
                    </div>
                  </label>

                  <label
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition ${
                      paymentMethod === 'points'
                        ? 'border-[#12302b] bg-[#12302b]/5'
                        : 'border-[#e1e2ea] bg-white hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="points"
                      checked={paymentMethod === 'points'}
                      onChange={() => setPaymentMethod('points')}
                      className="mt-1 accent-[#12302b]"
                    />
                    <div>
                      <span className="block text-sm font-bold text-[#12302b]">
                        محفظة مكافآت تبادل (تجريبية)
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-[#74777f]">
                        رصيد تجريبي (2,400 نقطة) للمعاينة وإبراز نظام الولاء.
                      </span>
                    </div>
                  </label>
                </div>

                <div className="rounded-xl bg-[#f6f3ec] p-3 text-xs text-[#74777f] flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#1f7a6e] shrink-0" />
                  <span>
                    لا يتطلب هذا النموذج إدخال أي بيانات بطاقات بنكية أو تفاصيل حساسة إطلاقاً.
                  </span>
                </div>
              </div>

            </div>

            {/* Order Review Sidebar (4 cols) */}
            <div className="space-y-4 lg:col-span-4">
              <div className="rounded-3xl border border-[#e1e2ea] bg-white p-6 shadow-sm space-y-5">
                <h3 className="text-lg font-extrabold text-[#12302b] border-b border-[#f0f0f5] pb-3">
                  مراجعة الطلب ({items.length} قطع)
                </h3>

                {/* Items Compact List */}
                <div className="max-h-60 overflow-y-auto space-y-3 divide-y divide-gray-100 text-xs pr-1">
                  {items.map((item) => (
                    <div key={item.cartItemId} className="pt-2 first:pt-0 flex justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-[#12302b] truncate">{item.name}</p>
                        <p className="text-gray-400 text-[11px]">
                          {item.size} · {item.color} · الكمية: {item.quantity}
                        </p>
                      </div>
                      <span className="font-extrabold text-[#12302b] whitespace-nowrap">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals Breakdown */}
                <div className="space-y-2.5 border-t border-[#f0f0f5] pt-3 text-xs">
                  <div className="flex justify-between text-[#43474e]">
                    <span>قيمة المشتريات:</span>
                    <strong className="text-[#12302b]">{formatCurrency(subtotal)}</strong>
                  </div>
                  <div className="flex justify-between text-[#43474e]">
                    <span>التوصيل التجريبي:</span>
                    <strong className="text-emerald-700">مجاني 0 ₪</strong>
                  </div>
                  <div className="border-t border-[#f0f0f5] pt-2 flex justify-between items-baseline text-sm font-extrabold text-[#12302b]">
                    <span>المبلغ المستحق:</span>
                    <span className="text-2xl font-black">{formatCurrency(subtotal)}</span>
                  </div>
                </div>

                {/* Expected Points Reward */}
                <div className="rounded-2xl border border-[#1f7a6e]/30 bg-emerald-50/60 p-4 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-emerald-900 font-bold">
                    <span className="flex items-center gap-1">
                      <Gift size={15} />
                      رصيد الولاء المتوقع:
                    </span>
                    <span className="rounded-full bg-[#1f7a6e] px-2 py-0.5 text-white font-extrabold text-[11px]">
                      +{formatPoints(totalPoints)} نقطة
                    </span>
                  </div>
                  <p className="text-[11px] leading-5 text-emerald-800">
                    كاش باك 5% يعادل {formatCurrency(totalCashback)} يضاف لمحفظتك بعد تأكيد الاستلام.
                  </p>
                </div>

                {/* Submit Order Button */}
                <div className="space-y-2.5 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#12302b] px-6 text-base font-extrabold text-white shadow-lg transition hover:bg-[#1a443d] active:scale-[0.99] disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'جاري تسجيل الطلب التجريبي...' : 'تأكيد الطلب التجريبي 🛍️'}</span>
                    <ArrowLeft size={18} />
                  </button>

                  <Link
                    to="/customer/cart"
                    className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-gray-300 bg-white text-xs font-bold text-[#12302b] hover:bg-neutral-50 transition"
                  >
                    <span>تعديل السلة والكميات</span>
                  </Link>
                </div>

                <p className="text-[11px] text-center text-[#74777f] leading-5">
                  🔒 زر التأكيد أعلاه يقوم بمحاكاة مكتملة للطلب التجريبي دون أي التزامات مالية.
                </p>
              </div>
            </div>

          </form>

        </div>
      </div>
    </MainLayout>
  );
}
