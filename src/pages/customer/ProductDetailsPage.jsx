import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import { getProductById, boutiqueLamsaStore } from '../../data/products';
import { useCartStore } from '../../store/useCartStore';
import { formatCurrency, formatPoints, calculateCashbackValue } from '../../utils/loyalty';
import {
  Store,
  Star,
  ShieldCheck,
  BadgeCheck,
  ChevronLeft,
  ArrowRight,
  ShoppingBag,
  Gift,
  Check,
  Plus,
  Minus,
  RotateCcw,
  Heart,
} from 'lucide-react';

function ImagePlaceholder({ className = '', label = 'مساحة صورة العرض' }) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#ecebe5] to-[#dedcd4] text-[#85877f] ${className}`}
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-2 p-6 text-center">
        <span className="text-4xl font-light text-[#1f7a6e]/40">＋</span>
        <span className="text-xs font-semibold text-[#666860]">{label}</span>
      </div>
    </div>
  );
}

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => getProductById(id), [id]);

  const addItemToCart = useCartStore((state) => state.addItem);
  const cartItemCount = useCartStore((state) => state.getItemCount());

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || 'شامبين عاجي'
  );
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || 'M'
  );
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) {
    return (
      <MainLayout headerVariant="customer">
        <div dir="rtl" className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
          <div className="rounded-full bg-amber-50 p-6 text-amber-700 mb-4">
            <Store size={48} />
          </div>
          <h1 className="text-2xl font-extrabold text-[#12302b]">عذرًا، القطعة غير متوفرة</h1>
          <p className="mt-2 text-sm text-[#74777f]">لم نتمكن من العثور على تفاصيل هذه القطعة ضمن دليل بوتيك لمسة.</p>
          <Link
            to="/customer/store"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#12302b] px-6 py-3 text-sm font-bold text-white hover:bg-[#1f7a6e] transition"
          >
            <ArrowRight size={18} />
            العودة إلى متجر بوتيك لمسة
          </Link>
        </div>
      </MainLayout>
    );
  }

  const lineSubtotal = product.price * quantity;
  const linePoints = product.points * quantity;
  const lineCashback = calculateCashbackValue(linePoints);

  const handleAddToCart = () => {
    addItemToCart(product, {
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
    }, 3000);
  };

  return (
    <MainLayout headerVariant="customer">
      <div
        dir="rtl"
        className="min-h-screen bg-[#f6f3ec] font-[Tajawal,sans-serif] text-[#191c22] py-6 sm:py-8"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Breadcrumbs & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-[#74777f]">
              <Link to="/customer/home" className="hover:text-[#12302b] transition-colors">منصة تبادل</Link>
              <ChevronLeft size={14} />
              <Link to="/customer/home" className="hover:text-[#12302b] transition-colors">المتاجر المعتمدة</Link>
              <ChevronLeft size={14} />
              <Link to="/customer/store" className="hover:text-[#12302b] transition-colors font-medium">
                {boutiqueLamsaStore.name}
              </Link>
              <ChevronLeft size={14} />
              <span className="font-bold text-[#12302b] truncate max-w-xs">{product.name}</span>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                to="/customer/store"
                className="inline-flex items-center gap-1.5 rounded-xl border border-gray-300 bg-white px-3.5 py-2 text-xs font-bold text-[#12302b] shadow-sm hover:bg-neutral-50 transition"
              >
                <ArrowRight size={15} />
                <span>العودة لمنتجات البوتيك</span>
              </Link>

              <Link
                to="/customer/cart"
                className="relative inline-flex items-center gap-1.5 rounded-xl bg-[#12302b] px-3.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#1f7a6e] transition"
              >
                <ShoppingBag size={15} />
                <span>سلة المشتريات</span>
                {cartItemCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#e9b44c] px-1 text-[11px] font-black text-[#12302b]">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Main Product Card */}
          <section className="overflow-hidden rounded-3xl border border-[#e1e2ea] bg-white p-5 sm:p-8 lg:p-10 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">

              {/* Media Gallery (5 cols) */}
              <div className="space-y-4 lg:col-span-5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-[#e1e2ea] bg-[#f9f9fb] shadow-inner">
                  <ImagePlaceholder
                    className="h-full w-full"
                    label={`${product.name} - زاوية العرض ${activeThumb + 1}`}
                  />

                  {/* Badges on image */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#12302b] shadow-sm backdrop-blur-sm">
                      <ShieldCheck size={15} className="text-[#1f7a6e]" />
                      معاينة قبل الاستلام
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#12302b]/90 px-3 py-1 text-xs font-bold text-[#e9b44c] shadow-sm">
                      كود: {product.code}
                    </span>
                  </div>

                  <div className="absolute top-3 left-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setIsFavorite(!isFavorite)}
                      aria-label="إضافة للمفضلة"
                      className={`flex h-10 w-10 items-center justify-center rounded-full border shadow-md transition ${
                        isFavorite ? 'bg-rose-50 text-rose-600 border-rose-200' : 'bg-white/90 text-gray-600 hover:text-rose-600'
                      }`}
                    >
                      <Heart size={18} className={isFavorite ? 'fill-rose-600' : ''} />
                    </button>
                  </div>

                  <div className="absolute bottom-3 inset-x-3 rounded-xl bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-xs">
                    <span className="font-semibold">{product.status}</span>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveThumb(idx)}
                      className={`relative aspect-square overflow-hidden rounded-xl border-2 transition ${
                        activeThumb === idx
                          ? 'border-[#1f7a6e] ring-2 ring-[#1f7a6e]/20'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <ImagePlaceholder className="h-full w-full text-[10px]" label={`لقطة ${idx + 1}`} />
                    </button>
                  ))}
                </div>

                {/* Trust Highlights */}
                <div className="rounded-2xl border border-[#e1e2ea] bg-[#f9f9fb] p-4 space-y-2.5 text-xs text-[#43474e]">
                  <div className="flex items-center gap-2">
                    <RotateCcw size={15} className="text-[#1f7a6e] shrink-0" />
                    <span>إمكانية معاينة ومطابقة المقاس عند الاستلام الميداني</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={15} className="text-[#1f7a6e] shrink-0" />
                    <span>تأكيد استلام الطلب برمز أمان OTP مخصص</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift size={15} className="text-[#e9b44c] shrink-0" />
                    <span>تضاف نقاط الولاء لمحفظتك مباشرة بعد إتمام العملية</span>
                  </div>
                </div>
              </div>

              {/* Product Info & Configuration (7 cols) */}
              <div className="space-y-6 lg:col-span-7">

                {/* Store Header */}
                <div className="flex items-center justify-between border-b border-[#f0f0f5] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#12302b] text-[#e9b44c] font-black">
                      <Store size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Link to="/customer/store" className="text-sm font-extrabold text-[#12302b] hover:text-[#1f7a6e] transition">
                          {boutiqueLamsaStore.name}
                        </Link>
                        <BadgeCheck size={16} className="text-[#1f7a6e]" />
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#74777f] mt-0.5">
                        <span className="flex items-center gap-1 font-bold text-amber-600">
                          <Star size={13} className="fill-amber-500 text-amber-500" />
                          4.9
                        </span>
                        <span>·</span>
                        <span>{boutiqueLamsaStore.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className="rounded-full bg-[#1f7a6e]/10 px-3 py-1 text-xs font-bold text-[#1f7a6e]">
                    {product.category}
                  </span>
                </div>

                {/* Product Title & Pricing */}
                <div className="space-y-3">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#12302b] leading-tight">
                    {product.name}
                  </h1>

                  <p className="text-sm leading-relaxed text-[#43474e]">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-[#f6f3ec] p-4 border border-[#e8e6dc]">
                    <div>
                      <span className="block text-xs font-bold text-[#74777f]">السعر للقطعة</span>
                      <span className="text-3xl font-black text-[#12302b]">{formatCurrency(product.price)}</span>
                    </div>

                    <div className="h-10 w-px bg-gray-300 hidden sm:block" />

                    <div>
                      <span className="block text-xs font-bold text-[#1f7a6e]">مكافأة الولاء للمشتريات</span>
                      <span className="inline-flex items-center gap-1.5 text-base font-extrabold text-[#1f7a6e]">
                        <Gift size={18} />
                        +{formatPoints(product.points)} نقطة تبادل
                      </span>
                    </div>

                    <div className="h-10 w-px bg-gray-300 hidden sm:block" />

                    <div className="rounded-xl bg-[#1f7a6e]/10 px-3 py-2 border border-[#1f7a6e]/20">
                      <span className="block text-[11px] font-bold text-[#1f7a6e]">معدل الكاش باك</span>
                      <span className="text-xs font-extrabold text-[#12302b]">
                        5% (يعادل {formatCurrency(calculateCashbackValue(product.points))} رصيد)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Variant Configuration */}
                <div className="space-y-5 border-t border-[#f0f0f5] pt-5">

                  {/* Color Selector */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-bold text-[#12302b]">
                        اللون المتاح: <span className="text-[#1f7a6e]">{selectedColor}</span>
                      </label>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setSelectedColor(color)}
                          className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-bold transition ${
                            selectedColor === color
                              ? 'border-[#12302b] bg-[#12302b] text-white shadow-sm'
                              : 'border-gray-200 bg-white text-[#43474e] hover:border-gray-400'
                          }`}
                        >
                          {selectedColor === color && <Check size={14} />}
                          <span>{color}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size Selector */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-bold text-[#12302b]">
                        المقاس: <span className="text-[#1f7a6e]">{selectedSize}</span>
                      </label>
                      <span className="text-xs text-[#74777f]">مطابق للقياسات المعتمدة للبوتيك</span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`flex h-11 min-w-[50px] items-center justify-center rounded-xl border px-4 text-sm font-black transition ${
                            selectedSize === size
                              ? 'border-[#1f7a6e] bg-[#1f7a6e] text-white shadow-sm'
                              : 'border-gray-200 bg-white text-[#191c22] hover:border-gray-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div className="space-y-2.5">
                    <label className="text-sm font-bold text-[#12302b]">الكمية المطلوبة</label>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center rounded-xl border border-gray-300 bg-white p-1 shadow-sm">
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                          disabled={quantity <= 1}
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-30"
                          aria-label="إنقاص الكمية"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="w-12 text-center text-base font-extrabold text-[#12302b]">
                          {quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => setQuantity((q) => q + 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100"
                          aria-label="زيادة الكمية"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="text-xs text-[#74777f]">
                        إجمالي هذه التشكيلة: <strong className="text-[#12302b]">{formatCurrency(lineSubtotal)}</strong>{' '}
                        (يكسبك <strong className="text-[#1f7a6e]">+{formatPoints(linePoints)}</strong> نقطة / {formatCurrency(lineCashback)} كاش باك)
                      </div>
                    </div>
                  </div>

                </div>

                {/* Add to Cart Actions */}
                <div className="space-y-3 border-t border-[#f0f0f5] pt-5">
                  {addedNotice && (
                    <div
                      role="status"
                      className="flex items-center justify-between rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-xs font-bold text-emerald-900 transition animate-fade-in"
                    >
                      <span className="flex items-center gap-2">
                        <Check size={16} className="text-emerald-600" />
                        تمت إضافة القطعة إلى سلة مشترياتك بنجاح ({selectedSize} / {selectedColor} × {quantity})!
                      </span>
                      <Link
                        to="/customer/cart"
                        className="underline text-emerald-800 hover:text-emerald-950 font-extrabold"
                      >
                        عرض السلة
                      </Link>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleAddToCart}
                      className="flex flex-1 h-13 items-center justify-center gap-2.5 rounded-2xl bg-[#12302b] px-6 py-3.5 text-base font-extrabold text-white shadow-lg transition hover:bg-[#1a443d] active:scale-[0.99]"
                    >
                      <ShoppingBag size={20} className="text-[#e9b44c]" />
                      <span>إضافة إلى سلة المشتريات</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        handleAddToCart();
                        navigate('/customer/cart');
                      }}
                      className="flex h-13 items-center justify-center gap-2 rounded-2xl border-2 border-[#12302b] bg-white px-6 py-3.5 text-base font-extrabold text-[#12302b] transition hover:bg-[#f6f3ec]"
                    >
                      <span>شراء فوري ومتابعة الطلب</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-[#74777f]">
                    🔒 نموذج طلب تجريبي: لن يتم سحب أي مبالغ مالية أو تنفيذ شحنات تجارية حقيقية.
                  </p>
                </div>

                {/* Product Specifications & Details */}
                <div className="space-y-3 rounded-2xl border border-[#e1e2ea] bg-[#fafafa] p-4 text-xs">
                  <h3 className="font-extrabold text-[#12302b] text-sm">مواصفات القطعة وتفاصيل التصميم:</h3>
                  <ul className="space-y-1.5 text-[#43474e]">
                    {product.details?.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1f7a6e]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </section>

        </div>
      </div>
    </MainLayout>
  );
}
