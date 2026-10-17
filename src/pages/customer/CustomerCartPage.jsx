import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import { useCartStore } from '../../store/useCartStore';
import { formatCurrency, formatPoints } from '../../utils/loyalty';
import {
  ShoppingBag,
  Store,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Gift,
  ArrowLeft,
  ChevronLeft,
} from 'lucide-react';

function ImagePlaceholder({ className = '' }) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-[#ecebe5] to-[#e0ded8] text-[#85877f] ${className}`}
    >
      <span className="text-xl font-light text-[#1f7a6e]/40">＋</span>
    </div>
  );
}

export default function CustomerCartPage() {
  const navigate = useNavigate();

  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const subtotal = useCartStore((state) => state.getSubtotal());
  const totalPoints = useCartStore((state) => state.getTotalPoints());
  const totalCashback = useCartStore((state) => state.getTotalCashback());
  const itemCount = useCartStore((state) => state.getItemCount());

  const deliveryFee = 0; // عرض مجاني
  const totalAmount = subtotal + deliveryFee;

  return (
    <MainLayout headerVariant="customer">
      <div
        dir="rtl"
        className="min-h-screen bg-[#f6f3ec] font-[Tajawal,sans-serif] text-[#191c22] py-6 sm:py-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Breadcrumbs & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-[#74777f]">
              <Link to="/customer/home" className="hover:text-[#12302b] transition-colors">منصة تبادل</Link>
              <ChevronLeft size={14} />
              <Link to="/customer/home" className="hover:text-[#12302b] transition-colors">المتاجر المعتمدة</Link>
              <ChevronLeft size={14} />
              <Link to="/customer/store" className="hover:text-[#12302b] transition-colors">بوتيك لمسة</Link>
              <ChevronLeft size={14} />
              <span className="font-bold text-[#12302b]">سلة المشتريات</span>
            </nav>

            <Link
              to="/customer/store"
              className="inline-flex items-center gap-1.5 rounded-xl border border-gray-300 bg-white px-3.5 py-2 text-xs font-bold text-[#12302b] shadow-sm hover:bg-neutral-50 transition"
            >
              <ArrowRight size={15} />
              <span>متابعة التسوق وإضافة قطع</span>
            </Link>
          </div>

          {/* Page Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e1e2ea] pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#12302b]/10 px-3 py-1 text-xs font-bold text-[#12302b] mb-2">
                <ShoppingBag size={14} />
                <span>سلة المشتريات والمكافآت</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#12302b]">
                سلة مشترياتك في منصة تبادل
              </h1>
            </div>

            {items.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 hover:text-rose-900 transition self-start sm:self-auto"
              >
                <Trash2 size={14} />
                <span>تفريغ السلة</span>
              </button>
            )}
          </div>

          {/* Cart Content: Empty State vs Populated */}
          {items.length === 0 ? (
            <div className="rounded-3xl border border-[#e1e2ea] bg-white p-8 sm:p-16 text-center shadow-sm">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-[#f6f3ec] text-[#1f7a6e]">
                <ShoppingBag size={48} strokeWidth={1.5} />
              </div>

              <h2 className="mt-6 text-xl sm:text-2xl font-extrabold text-[#12302b]">
                سلة المشتريات فارغة حاليًا
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#74777f]">
                لم تقومي بإضافة أي قطع إلى سلتك بعد. تفضلي بتصفح تشكيلة الأزياء والفساتين في بوتيك لمسة أو استكشفي بقية المتاجر الشريكة.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/customer/store"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#12302b] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#1f7a6e] transition"
                >
                  <Store size={18} />
                  <span>تصفح منتجات بوتيك لمسة</span>
                </Link>

                <Link
                  to="/customer/home"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-[#12302b] hover:bg-neutral-50 transition"
                >
                  <span>استكشاف دليل المتاجر</span>
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 items-start">

              {/* Items List (8 cols) */}
              <div className="space-y-4 lg:col-span-8">
                <div className="rounded-2xl border border-[#e1e2ea] bg-white p-4 sm:p-6 shadow-sm divide-y divide-[#f0f0f5]">
                  {items.map((item) => {
                    const itemLineTotal = item.price * item.quantity;
                    const itemLinePoints = (item.points || item.price * 10) * item.quantity;

                    return (
                      <div
                        key={item.cartItemId}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                      >
                        {/* Thumbnail & Basic Info */}
                        <div className="flex items-center gap-3.5 min-w-0 flex-1">
                          <Link
                            to={`/customer/product/${item.productId}`}
                            className="relative h-20 w-18 shrink-0 overflow-hidden rounded-xl border border-[#e1e2ea] hover:opacity-90 transition"
                          >
                            <ImagePlaceholder className="h-full w-full" />
                          </Link>

                          <div className="min-w-0 flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-bold text-[#1f7a6e]">{item.storeName}</span>
                              <span className="text-[10px] text-gray-400">·</span>
                              <span className="text-[10px] font-medium text-gray-500">كود: {item.code}</span>
                            </div>

                            <Link
                              to={`/customer/product/${item.productId}`}
                              className="block text-sm sm:text-base font-extrabold text-[#12302b] hover:text-[#1f7a6e] transition truncate"
                            >
                              {item.name}
                            </Link>

                            {/* Variant Pills */}
                            <div className="flex flex-wrap items-center gap-2 pt-0.5">
                              <span className="rounded-md bg-[#f6f3ec] px-2 py-0.5 text-xs font-bold text-[#12302b]">
                                المقاس: {item.size}
                              </span>
                              <span className="rounded-md bg-[#f6f3ec] px-2 py-0.5 text-xs font-bold text-[#12302b]">
                                اللون: {item.color}
                              </span>
                              <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-800">
                                +{formatPoints(itemLinePoints)} نقطة
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Quantity Controls & Line Price */}
                        <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">

                          {/* Stepper */}
                          <div className="flex items-center rounded-xl border border-gray-200 bg-[#f9f9fb] p-1">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 hover:bg-white hover:shadow-xs transition"
                              aria-label="إنقاص الكمية"
                            >
                              <Minus size={14} />
                            </button>

                            <span className="w-9 text-center text-sm font-black text-[#12302b]">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 hover:bg-white hover:shadow-xs transition"
                              aria-label="زيادة الكمية"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          {/* Line Price */}
                          <div className="text-left min-w-[80px]">
                            <span className="block text-base font-black text-[#12302b]">
                              {formatCurrency(itemLineTotal)}
                            </span>
                            <span className="block text-[11px] text-gray-500">
                              {formatCurrency(item.price)} للقطعة
                            </span>
                          </div>

                          {/* Delete Item */}
                          <button
                            type="button"
                            onClick={() => removeItem(item.cartItemId)}
                            className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                            aria-label={`حذف ${item.name} من السلة`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Trust & Guarantee Banner */}
                <div className="rounded-2xl border border-[#e1e2ea] bg-white p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#43474e]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1f7a6e]/10 text-[#1f7a6e]">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="font-extrabold text-[#12302b]">حماية المشتريات والاستلام الآمن</p>
                      <p className="text-gray-500">لا يتم تأكيد استلام أي طلب إلا بعد إدخال رمز الأمان المخصص (OTP).</p>
                    </div>
                  </div>

                  <Link
                    to="/customer/store"
                    className="text-xs font-bold text-[#1f7a6e] hover:underline whitespace-nowrap"
                  >
                    + إضافة قطع أخرى من البوتيك
                  </Link>
                </div>
              </div>

              {/* Order Summary Box (4 cols) */}
              <div className="space-y-4 lg:col-span-4">
                <div className="rounded-3xl border border-[#e1e2ea] bg-white p-6 shadow-sm space-y-5">
                  <h3 className="text-lg font-extrabold text-[#12302b] border-b border-[#f0f0f5] pb-3">
                    ملخص الطلب التجريبي
                  </h3>

                  {/* Calculations breakdown */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-[#43474e]">
                      <span>مجموع قيمة القطع ({itemCount})</span>
                      <span className="font-extrabold text-[#12302b]">{formatCurrency(subtotal)}</span>
                    </div>

                    <div className="flex justify-between text-[#43474e]">
                      <span>رسوم التوصيل التجريبي</span>
                      <span className="font-extrabold text-emerald-700">مجاني (عرض تدشين)</span>
                    </div>

                    <div className="border-t border-[#f0f0f5] pt-3 flex justify-between items-baseline">
                      <span className="text-base font-extrabold text-[#12302b]">الإجمالي النهائي</span>
                      <span className="text-2xl font-black text-[#12302b]">{formatCurrency(totalAmount)}</span>
                    </div>
                  </div>

                  {/* Loyalty Points Preview Box */}
                  <div className="rounded-2xl border border-[#1f7a6e]/30 bg-gradient-to-br from-[#f2f9f8] to-[#e4f3f0] p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1f7a6e] flex items-center gap-1.5">
                        <Gift size={16} />
                        مكافآت هذا الطلب:
                      </span>
                      <span className="rounded-full bg-[#1f7a6e] px-2.5 py-0.5 text-xs font-extrabold text-white">
                        +{formatPoints(totalPoints)} نقطة
                      </span>
                    </div>

                    <p className="text-xs leading-5 text-[#12302b]">
                      تكسبين <strong>5% كاش باك</strong> يعادل <strong>{formatCurrency(totalCashback)}</strong> يضاف لرصيد محفظتك التجريبية بمجرد تأكيد استلام الطلب.
                    </p>
                  </div>

                  {/* Checkout CTA */}
                  <div className="space-y-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => navigate('/customer/checkout')}
                      className="flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-[#12302b] px-6 text-base font-extrabold text-white shadow-lg transition hover:bg-[#1a443d] active:scale-[0.99]"
                    >
                      <span>متابعة إتمام الطلب التجريبي</span>
                      <ArrowLeft size={18} />
                    </button>

                    <Link
                      to="/customer/store"
                      className="flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-gray-300 bg-white text-xs font-bold text-[#12302b] hover:bg-neutral-50 transition"
                    >
                      <span>متابعة التسوق في بوتيك لمسة</span>
                    </Link>
                  </div>

                  <div className="rounded-xl bg-[#f6f3ec] p-3 text-center text-[11px] leading-5 text-[#74777f]">
                    🔒 نموذج تجريبي: عملية الشراء للمعاينة وتجربة تدفق الشاشات دون اقتطاع مالي حقيقي.
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </MainLayout>
  );
}
