import { useMemo, useState } from 'react';
import {
  Search,
  Star,
  Heart,
  Wallet,
  Gift,
  ShieldCheck,
  BadgeCheck,
  Clock3,
  LockKeyhole,
  CheckCircle2,
  RefreshCw,
  MapPin,
  ShoppingBag,
  Bell,
  Store,
  Award,
  Sparkles,
  SlidersHorizontal,
  X,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  MessageCircle,
  History,
  QrCode,
  Menu,
  Tag,
} from 'lucide-react';

import MainLayout from '../../layouts/MainLayout';

const initialProducts = [
  {
    id: 1,
    code: 'LM-104',
    name: 'فستان حرير شامبين بقصة انسيابية',
    category: 'فساتين وأطقم سهرة',
    description:
      'فستان أنيق بقصة انسيابية وتفاصيل ناعمة، مناسب للمناسبات الخاصة والسهرات.',
    price: 190,
    points: 1900,
    status: 'متوفر للتسليم الفوري',
    statusType: 'available',
    color: 'شامبين عاجي',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    code: 'LM-088',
    name: 'بليزر نسائي كحلي بقصة كلاسيكية',
    category: 'بليزرات وتنانير كاجوال',
    description:
      'بليزر نسائي أنيق بتصميم كلاسيكي يناسب الإطلالات الرسمية واليومية.',
    price: 145,
    points: 1450,
    status: 'تبقت 3 قطع فقط',
    statusType: 'limited',
    color: 'كحلي ملكي',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    code: 'LM-201',
    name: 'فستان سهرة مخملي خمري',
    category: 'فساتين وأطقم سهرة',
    description:
      'فستان سهرة أنيق بتصميم راقٍ وتفاصيل ناعمة للمناسبات والأعراس.',
    price: 220,
    points: 2200,
    status: 'تصميم حصري للبوتيك',
    statusType: 'available',
    color: 'خمري',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 4,
    code: 'LM-042',
    name: 'تنورة بليسيه زمردية ماكسي',
    category: 'بليزرات وتنانير كاجوال',
    description:
      'تنورة طويلة بكسرات أنيقة تناسب الإطلالات اليومية والمناسبات.',
    price: 85,
    points: 850,
    status: 'قطعة أنيقة',
    statusType: 'available',
    color: 'زمردي',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 5,
    code: 'LM-RW01',
    name: 'عباية شيفون مطرزة بخيوط ذهبية',
    category: 'عبايات راقية',
    description:
      'عباية أنيقة بتفاصيل تطريز ذهبية وتصميم يجمع بين الاحتشام والأناقة.',
    price: 160,
    points: 3200,
    status: 'مكافأة نقاط',
    statusType: 'reward',
    color: 'أسود',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 6,
    code: 'LM-156',
    name: 'طقم نسائي كاجوال بلون ساج',
    category: 'أزياء نسائية',
    description:
      'طقم نسائي مريح بتصميم عصري يناسب الزيارات والإطلالات النهارية.',
    price: 120,
    points: 1200,
    status: 'تصميم مميز',
    statusType: 'available',
    color: 'أخضر ساج',
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

const categories = [
  'كافة القطع',
  'فساتين وأطقم سهرة',
  'عبايات راقية',
  'بليزرات وتنانير كاجوال',
  'أزياء نسائية',
];

function ImagePlaceholder({ className = '' }) {
  return (
    <div
      className={`flex items-center justify-center bg-[#ecebe5] text-[#85877f] ${className}`}
      aria-label="مساحة فارغة لإضافة الصورة لاحقًا"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-3xl font-light">＋</span>
        <span className="text-xs">مساحة الصورة</span>
      </div>
    </div>
  );
}

function CustomerStorePage() {
  const [products, setProducts] = useState(initialProducts);
  const [activeCategory, setActiveCategory] = useState('كافة القطع');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductSize, setSelectedProductSize] = useState('');
  const [cart, setCart] = useState([]);
  const [notice, setNotice] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [showWallet, setShowWallet] = useState(false);

  const walletPoints = 2400;
  const walletValue = walletPoints / 200;

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === 'كافة القطع' ||
        product.category === activeCategory;

      const query = searchTerm.trim().toLowerCase();

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.code.toLowerCase().includes(query);

      const matchesSize =
        !selectedSize || product.sizes.includes(selectedSize);

      const matchesColor =
        !selectedColor || product.color === selectedColor;

      const matchesMinPrice =
        minPrice === '' || product.price >= Number(minPrice);

      const matchesMaxPrice =
        maxPrice === '' || product.price <= Number(maxPrice);

      return (
        matchesCategory &&
        matchesSearch &&
        matchesSize &&
        matchesColor &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });

    if (sortBy === 'priceLow') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHigh') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'points') {
      result.sort((a, b) => b.points - a.points);
    }

    return result;
  }, [
    products,
    activeCategory,
    searchTerm,
    selectedSize,
    selectedColor,
    minPrice,
    maxPrice,
    sortBy,
  ]);

  const toggleFavorite = (productId) => {
    setFavorites((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId]
    );
  };

  const resetFilters = () => {
    setSearchTerm('');
    setActiveCategory('كافة القطع');
    setSelectedSize('');
    setSelectedColor('');
    setMinPrice('');
    setMaxPrice('');
    setSortBy('featured');
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setSelectedProductSize('');
    setNotice('');
  };

  const addToCart = () => {
    if (!selectedProduct) return;

    if (!selectedProductSize) {
      setNotice('يرجى اختيار المقاس أولًا.');
      return;
    }

    setCart((previous) => [
      ...previous,
      {
        ...selectedProduct,
        cartId: `${selectedProduct.id}-${Date.now()}`,
        selectedSize: selectedProductSize,
      },
    ]);

    setNotice('تمت إضافة القطعة إلى السلة بنجاح.');
  };

  const removeFromCart = (cartId) => {
    setCart((previous) =>
      previous.filter((item) => item.cartId !== cartId)
    );
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  const cartPoints = cart.reduce(
    (total, item) => total + item.points,
    0
  );

  const closeOverlays = () => {
    setSelectedProduct(null);
    setShowCart(false);
    setShowWallet(false);
  };

  return (
    <MainLayout>
      <div
        dir="rtl"
        className="min-h-screen bg-[#f6f3ec] font-[Tajawal] text-[#191c22]"
      >
        {/* Store Page */}
        <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">

          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-2 text-xs text-[#74777f]">
            <span>منصة تبادل</span>
            <ChevronLeft size={15} />
            <span>استكشاف المتاجر المعتمدة</span>
            <ChevronLeft size={15} />
            <span>الأزياء النسائية</span>
            <ChevronLeft size={15} />
            <span className="font-bold text-[#12302b]">
              بوتيك لمسة للأزياء والفساتين
            </span>
          </nav>

          {/* Store Hero */}
          <section className="overflow-hidden rounded-2xl border border-[#e1e2ea] bg-white shadow-sm">

            {/* Store Cover */}
            <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#0f2723] via-[#12302b] to-[#1f7a6e] sm:h-56">
              <ImagePlaceholder className="h-full w-full bg-transparent text-white/60" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#12302b]/90 via-transparent to-transparent" />

              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-bold text-[#12302b]">
                  <ShieldCheck size={16} />
                  حماية المشتريات
                </span>

                <span className="flex items-center gap-1.5 rounded-full bg-[#e9b44c] px-3 py-1.5 text-xs font-bold text-[#12302b]">
                  <BadgeCheck size={15} />
                  شريك معتمد
                </span>
              </div>
            </div>

            {/* Store Information */}
            <div className="px-5 pb-5 sm:px-6">
              <div className="-mt-9 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                  {/* Store Logo */}
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-md sm:h-28 sm:w-28">
                    <ImagePlaceholder className="h-full w-full rounded-xl" />

                    <span className="absolute bottom-1 left-1 rounded-full bg-[#e9b44c] p-1 text-[#12302b]">
                      <CheckCircle2 size={14} />
                    </span>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h1 className="text-xl font-extrabold text-[#12302b] sm:text-2xl">
                        بوتيك لمسة للأزياء والفساتين
                      </h1>

                      <span className="rounded-full bg-[#1f7a6e]/10 px-2.5 py-1 text-xs font-bold text-[#1f7a6e]">
                        متجر موثّق
                      </span>
                    </div>

                    <p className="max-w-2xl text-sm leading-7 text-[#43474e]">
                      أزياء نسائية وفساتين سهرة وعبايات عصرية
                      بتصاميم أنيقة وتفاصيل مميزة تناسب مختلف
                      المناسبات.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#43474e]">
                      <span className="flex items-center gap-1 font-bold text-[#191c22]">
                        <Star
                          size={17}
                          className="fill-[#e9b44c] text-[#b77a08]"
                        />
                        4.9
                        <span className="font-normal text-[#74777f]">
                          (140 تقييمًا)
                        </span>
                      </span>

                      <span className="hidden h-1 w-1 rounded-full bg-gray-400 sm:block" />

                      <span className="flex items-center gap-1">
                        <Clock3 size={16} />
                        10 صباحًا - 10 مساءً
                      </span>

                      <span className="hidden h-1 w-1 rounded-full bg-gray-400 sm:block" />

                      <span className="flex items-center gap-1">
                        <LockKeyhole size={15} />
                        تأكيد الاستلام برمز OTP
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cashback Card */}
                <div className="min-w-0 rounded-2xl bg-gradient-to-br from-[#12302b] to-[#1f7a6e] p-5 text-white shadow-lg sm:min-w-64">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-[#e9b44c] px-2.5 py-1 text-xs font-bold text-[#12302b]">
                      معدل المكافأة
                    </span>

                    <Gift size={21} className="text-[#e9b44c]" />
                  </div>

                  <p className="text-lg font-extrabold text-[#e9b44c]">
                    كاش باك 5%
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/80">
                    اكسبِي 10 نقاط تبادل لكل 1 ₪ تدفعينه.
                  </p>

                  <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-3 text-xs">
                    <span>رصيد النقاط</span>
                    <span className="font-bold text-[#e9b44c]">
                      حسب شروط البرنامج
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 grid grid-cols-1 gap-3 border-t border-[#e1e2ea] pt-5 sm:grid-cols-3">
                <TrustItem
                  icon={ShieldCheck}
                  title="تسليم آمن برمز OTP"
                  description="تأكيد الاستلام بعد مطابقة الرمز."
                />

                <TrustItem
                  icon={BadgeCheck}
                  title="حماية مشتريات تبادل"
                  description="إجراءات حماية وفق سياسة المنصة."
                />

                <TrustItem
                  icon={RefreshCw}
                  title="تجربة مقاس مريحة"
                  description="راجعي سياسة التبديل الخاصة بالمتجر."
                />
              </div>
            </div>
          </section>

          {/* Category Tabs */}
          <section className="space-y-4">
            <div className="flex flex-col gap-3 rounded-xl border border-[#e1e2ea] bg-white p-2 shadow-sm lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-1.5 overflow-x-auto pb-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`shrink-0 rounded-lg px-4 py-2.5 text-xs font-bold transition-colors ${
                      activeCategory === category
                        ? 'bg-[#12302b] text-white'
                        : 'text-[#43474e] hover:bg-[#f2f3fc]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex shrink-0 items-center gap-2 px-2">
                <SlidersHorizontal
                  size={16}
                  className="text-[#74777f]"
                />

                <label
                  htmlFor="sort-products"
                  className="text-xs text-[#74777f]"
                >
                  الترتيب:
                </label>

                <select
                  id="sort-products"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="min-w-0 rounded-lg border border-[#e1e2ea] bg-[#f9f9ff] px-3 py-2 text-xs text-[#12302b] focus:border-[#1f7a6e] focus:outline-none"
                >
                  <option value="featured">المنتجات المميزة</option>
                  <option value="points">أعلى نقاط</option>
                  <option value="priceLow">السعر: من الأقل للأعلى</option>
                  <option value="priceHigh">السعر: من الأعلى للأقل</option>
                </select>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="grid grid-cols-1 gap-3 rounded-xl border border-[#e1e2ea] bg-white p-4 shadow-sm md:grid-cols-2 lg:grid-cols-12">
              <div className="relative lg:col-span-4">
                <Search
                  size={19}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#74777f]"
                />

                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                  placeholder="ابحثي في منتجات المتجر..."
                  className="h-11 w-full rounded-xl border border-[#e1e2ea] bg-[#f9f9ff] pr-11 pl-3 text-sm outline-none transition focus:border-[#1f7a6e] focus:bg-white"
                />
              </div>

              <div className="lg:col-span-2">
                <select
                  aria-label="فلترة حسب المقاس"
                  value={selectedSize}
                  onChange={(event) =>
                    setSelectedSize(event.target.value)
                  }
                  className="h-11 w-full rounded-xl border border-[#e1e2ea] bg-[#f9f9ff] px-3 text-sm outline-none focus:border-[#1f7a6e]"
                >
                  <option value="">كل المقاسات</option>
                  <option value="S">Small (S)</option>
                  <option value="M">Medium (M)</option>
                  <option value="L">Large (L)</option>
                  <option value="XL">X-Large (XL)</option>
                </select>
              </div>

              <div className="lg:col-span-2">
                <select
                  aria-label="فلترة حسب اللون"
                  value={selectedColor}
                  onChange={(event) =>
                    setSelectedColor(event.target.value)
                  }
                  className="h-11 w-full rounded-xl border border-[#e1e2ea] bg-[#f9f9ff] px-3 text-sm outline-none focus:border-[#1f7a6e]"
                >
                  <option value="">جميع الألوان</option>
                  <option value="شامبين عاجي">شامبين عاجي</option>
                  <option value="كحلي ملكي">كحلي ملكي</option>
                  <option value="خمري">خمري</option>
                  <option value="زمردي">زمردي</option>
                  <option value="أسود">أسود</option>
                  <option value="أخضر ساج">أخضر ساج</option>
                </select>
              </div>

              <div className="flex items-center gap-2 lg:col-span-4">
                <input
                  type="number"
                  min="0"
                  value={minPrice}
                  onChange={(event) =>
                    setMinPrice(event.target.value)
                  }
                  placeholder="السعر من ₪"
                  aria-label="أقل سعر"
                  className="h-11 min-w-0 w-full rounded-xl border border-[#e1e2ea] bg-[#f9f9ff] px-3 text-sm outline-none focus:border-[#1f7a6e]"
                />

                <span className="text-xs text-gray-400">إلى</span>

                <input
                  type="number"
                  min="0"
                  value={maxPrice}
                  onChange={(event) =>
                    setMaxPrice(event.target.value)
                  }
                  placeholder="السعر إلى ₪"
                  aria-label="أعلى سعر"
                  className="h-11 min-w-0 w-full rounded-xl border border-[#e1e2ea] bg-[#f9f9ff] px-3 text-sm outline-none focus:border-[#1f7a6e]"
                />

                <button
                  type="button"
                  onClick={resetFilters}
                  title="إعادة تعيين الفلاتر"
                  aria-label="إعادة تعيين الفلاتر"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ecedf6] text-[#12302b] transition hover:bg-[#e1e2ea]"
                >
                  <RotateCcw size={17} />
                </button>
              </div>
            </div>
          </section>

          {/* Products and Sidebar */}
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">

            {/* Product Catalog */}
            <section className="lg:col-span-9">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-lg font-extrabold text-[#12302b]">
                  منتجات بوتيك لمسة
                </h2>

                <span className="text-xs text-[#74777f]">
                  {filteredProducts.length} منتجات
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isFavorite={favorites.includes(product.id)}
                    onFavorite={() => toggleFavorite(product.id)}
                    onOpen={() => openProduct(product)}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="rounded-2xl border border-[#e1e2ea] bg-white px-5 py-14 text-center">
                  <Search
                    size={36}
                    className="mx-auto mb-3 text-gray-400"
                  />

                  <h3 className="font-bold text-[#12302b]">
                    ما لقينا منتجات مطابقة
                  </h3>

                  <p className="mt-2 text-sm text-[#74777f]">
                    جرّبي تغيير كلمات البحث أو الفلاتر.
                  </p>

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-4 rounded-xl bg-[#12302b] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#1f4a43]"
                  >
                    عرض جميع المنتجات
                  </button>
                </div>
              )}

              {/* Pagination Placeholder */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#e1e2ea] bg-white p-4">
                <p className="text-xs text-[#74777f]">
                  عدد المنتجات المعروضة: {filteredProducts.length}
                </p>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    disabled
                    className="rounded-lg border border-[#e1e2ea] p-2 text-gray-300"
                    aria-label="الصفحة السابقة"
                  >
                    <ChevronRight size={17} />
                  </button>

                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#12302b] text-sm font-bold text-white">
                    1
                  </span>

                  <button
                    type="button"
                    disabled
                    className="rounded-lg border border-[#e1e2ea] p-2 text-gray-300"
                    aria-label="الصفحة التالية"
                  >
                    <ChevronLeft size={17} />
                  </button>
                </div>
              </div>
            </section>

            {/* Loyalty Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24 lg:col-span-3">

              {/* Wallet */}
              <section className="space-y-4 rounded-2xl border border-[#e1e2ea] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#12302b] text-[#e9b44c]">
                      <Wallet size={19} />
                    </span>

                    <h3 className="font-bold text-[#12302b]">
                      محفظة تبادل
                    </h3>
                  </div>

                  <span className="rounded-full bg-[#e9b44c]/20 px-2 py-1 text-[10px] font-bold text-[#835400]">
                    رصيد تجريبي
                  </span>
                </div>

                <div className="space-y-4 rounded-xl border border-[#1f7a6e]/20 bg-gradient-to-br from-[#e8f5f1] to-[#d5ece4] p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs text-[#1f7a6e]">
                        رصيدك المتاح
                      </span>

                      <p className="mt-1 text-xl font-extrabold text-[#0f3d35]">
                        {walletPoints.toLocaleString('en-US')}
                      </p>

                      <span className="text-xs text-[#185348]">
                        نقطة
                      </span>
                    </div>

                    <div className="text-left">
                      <span className="text-xs text-[#1f7a6e]">
                        القيمة النقدية
                      </span>

                      <p className="mt-1 text-xl font-extrabold text-[#0f3d35]">
                        {walletValue.toFixed(2)} ₪
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between text-[11px] text-[#185348]">
                      <span>المستوى الذهبي</span>
                      <span>80%</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-[#bfe3d8]">
                      <div className="h-full w-4/5 rounded-full bg-[#1f7a6e]" />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#e1e2ea] bg-[#f2f3fc] p-3.5">
                  <p className="mb-1 flex items-center gap-1.5 text-xs font-bold text-[#12302b]">
                    <Gift size={16} className="text-[#835400]" />
                    كيف تستفيدين من النقاط؟
                  </p>

                  <p className="text-xs leading-6 text-[#43474e]">
                    يمكنك استخدام رصيدك عند التسوق وفقًا لشروط
                    برنامج الولاء. الرصيد المعروض هنا تجريبي.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowWallet(true)}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#1f7a6e] px-3 text-xs font-bold text-white transition hover:bg-[#165a51]"
                >
                  <QrCode size={18} />
                  عرض تفاصيل المحفظة
                </button>

                <button
                  type="button"
                  onClick={() => setNotice('سجل النقاط يحتاج إلى ربط بيانات الحساب.')}
                  className="flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#12302b] text-xs font-bold text-[#12302b] transition hover:bg-[#f2f3fc]"
                >
                  <History size={17} />
                  سجل حركات النقاط
                </button>
              </section>

              {/* Store Guarantees */}
              <section className="space-y-4 rounded-2xl border border-[#e1e2ea] bg-white p-5 shadow-sm">
                <h3 className="font-bold text-[#12302b]">
                  معلومات وضمانات المتجر
                </h3>

                <ul className="space-y-3 text-xs leading-6 text-[#43474e]">
                  <li className="flex items-start gap-2">
                    <BadgeCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-[#835400]"
                    />
                    متجر شريك ضمن منصة تبادل.
                  </li>

                  <li className="flex items-start gap-2">
                    <MessageCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-[#1f7a6e]"
                    />
                    يمكنك الاستفسار عن المقاسات والخامات.
                  </li>

                  <li className="flex items-start gap-2">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-[#12302b]"
                    />
                    راجعي شروط التوصيل والاستبدال قبل الطلب.
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={() =>
                    setNotice('المحادثة مع المتجر تحتاج إلى ربط خدمة المحادثات.')
                  }
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#ecedf6] text-xs font-bold text-[#12302b] transition hover:bg-[#e1e2ea]"
                >
                  <MessageCircle size={18} />
                  التواصل مع المتجر
                </button>
              </section>
            </aside>
          </div>
        </main>

        {/* Product Details Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedProduct(null);
              }
            }}
          >
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-modal-title"
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#e1e2ea] p-4">
                <h2
                  id="product-modal-title"
                  className="font-bold text-[#12302b]"
                >
                  تفاصيل القطعة
                </h2>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  aria-label="إغلاق"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                >
                  <X size={21} />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
                <ImagePlaceholder className="min-h-72 w-full rounded-xl" />

                <div className="space-y-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#1f7a6e]/10 px-3 py-1 text-xs font-bold text-[#1f7a6e]">
                    <Store size={15} />
                    بوتيك لمسة
                  </span>

                  <h3 className="text-xl font-extrabold text-[#12302b]">
                    {selectedProduct.name}
                  </h3>

                  <p className="text-xs text-[#74777f]">
                    {selectedProduct.category} · كود:{' '}
                    {selectedProduct.code}
                  </p>

                  <p className="text-sm leading-7 text-[#43474e]">
                    {selectedProduct.description}
                  </p>

                  <div className="flex items-center justify-between rounded-xl bg-[#f2f3fc] p-3">
                    <span className="text-sm font-bold text-[#12302b]">
                      السعر
                    </span>

                    <span className="text-xl font-extrabold text-[#1f7a6e]">
                      {selectedProduct.price} ₪
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-[#1f7a6e]">
                    <Gift size={17} />
                    نقاط المكافأة: {selectedProduct.points}
                  </div>

                  <div>
                    <label
                      htmlFor="product-size"
                      className="mb-2 block text-sm font-bold text-[#12302b]"
                    >
                      اختاري المقاس
                    </label>

                    <select
                      id="product-size"
                      value={selectedProductSize}
                      onChange={(event) => {
                        setSelectedProductSize(event.target.value);
                        setNotice('');
                      }}
                      className="h-11 w-full rounded-xl border border-[#e1e2ea] bg-white px-3 text-sm outline-none focus:border-[#1f7a6e]"
                    >
                      <option value="">اختاري المقاس</option>

                      {selectedProduct.sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  {notice && (
                    <p
                      role="status"
                      className="rounded-lg bg-[#f2f3fc] p-3 text-xs leading-5 text-[#12302b]"
                    >
                      {notice}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={addToCart}
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1f7a6e] px-4 text-sm font-bold text-white transition hover:bg-[#165a51]"
                  >
                    <ShoppingBag size={18} />
                    إضافة إلى السلة
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Shopping Cart Modal */}
        {showCart && (
          <Modal
            title="سلة المشتريات"
            onClose={() => setShowCart(false)}
          >
            {cart.length === 0 ? (
              <div className="py-8 text-center">
                <ShoppingBag
                  size={38}
                  className="mx-auto mb-3 text-gray-400"
                />

                <p className="font-bold text-[#12302b]">
                  السلة فارغة حاليًا
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  اختاري قطعة من منتجات المتجر لإضافتها إلى السلة.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.cartId}
                    className="flex items-center gap-3 rounded-xl border border-[#e1e2ea] p-3"
                  >
                    <ImagePlaceholder className="h-20 w-16 shrink-0 rounded-lg" />

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-[#12302b]">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        المقاس: {item.selectedSize}
                      </p>

                      <p className="mt-1 text-sm font-extrabold text-[#1f7a6e]">
                        {item.price} ₪
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.cartId)}
                      className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                      aria-label="حذف القطعة من السلة"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}

                <div className="rounded-xl bg-[#f2f3fc] p-4">
                  <div className="flex justify-between text-sm">
                    <span>إجمالي المنتجات</span>
                    <strong>{cartTotal} ₪</strong>
                  </div>

                  <div className="mt-2 flex justify-between text-sm text-[#1f7a6e]">
                    <span>النقاط المتوقعة</span>
                    <strong>{cartPoints.toLocaleString('en-US')}</strong>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setShowCart(false);
                      setNotice(
                        'إتمام الطلب يحتاج إلى ربط نظام الطلبات والدفع.'
                      );
                    }}
                    className="mt-4 h-11 w-full rounded-xl bg-[#12302b] text-sm font-bold text-white"
                  >
                    متابعة الطلب
                  </button>
                </div>
              </div>
            )}
          </Modal>
        )}

        {/* Wallet Modal */}
        {showWallet && (
          <Modal
            title="محفظة تبادل"
            onClose={() => setShowWallet(false)}
          >
            <div className="space-y-4">
              <div className="rounded-xl bg-gradient-to-br from-[#12302b] to-[#1f7a6e] p-5 text-white">
                <Wallet size={28} className="mb-4 text-[#e9b44c]" />

                <p className="text-sm text-white/80">
                  الرصيد التجريبي
                </p>

                <p className="mt-1 text-3xl font-extrabold">
                  {walletPoints.toLocaleString('en-US')} نقطة
                </p>

                <p className="mt-2 text-sm text-[#e9b44c]">
                  القيمة المعروضة: {walletValue.toFixed(2)} ₪
                </p>
              </div>

              <p className="text-sm leading-7 text-[#43474e]">
                هذه بيانات تجريبية للواجهة. جلب الرصيد الفعلي
                وتطبيق الخصومات يحتاج إلى ربط المحفظة بالخادم.
              </p>
            </div>
          </Modal>
        )}

        {/* Cart and Notification Controls */}
        <div className="fixed bottom-5 left-4 z-40 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setShowCart(true)}
            aria-label="فتح سلة المشتريات"
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#12302b] text-white shadow-lg transition hover:bg-[#1f7a6e]"
          >
            <ShoppingBag size={21} />

            {cart.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#e9b44c] px-1 text-[10px] font-bold text-[#12302b]">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* General Notice */}
        {notice && !selectedProduct && (
          <div
            role="status"
            className="fixed bottom-5 left-20 right-4 z-[110] flex items-center justify-between gap-3 rounded-xl border border-[#1f7a6e]/20 bg-white p-4 text-sm text-[#12302b] shadow-xl sm:left-auto sm:right-6 sm:max-w-md"
          >
            <span>{notice}</span>

            <button
              type="button"
              onClick={() => setNotice('')}
              aria-label="إغلاق الرسالة"
              className="shrink-0 rounded-lg p-1 hover:bg-gray-100"
            >
              <X size={18} />
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

function TrustItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-[#e1e2ea] bg-[#f2f3fc] p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1f7a6e] shadow-sm">
        <Icon size={19} />
      </div>

      <div>
        <p className="text-xs font-bold text-[#12302b]">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-[#43474e]">
          {description}
        </p>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  isFavorite,
  onFavorite,
  onOpen,
}) {
  const isReward = product.statusType === 'reward';

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        isReward
          ? 'border-[#835400]/40'
          : 'border-[#e1e2ea] hover:border-[#1f7a6e]/50'
      }`}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#ecebe5]">
        <ImagePlaceholder className="h-full w-full transition-transform duration-300 group-hover:scale-105" />

        <span
          className={`absolute right-3 top-3 flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[10px] font-bold shadow-sm ${
            isReward
              ? 'bg-[#835400] text-white'
              : 'bg-[#12302b] text-[#e9b44c]'
          }`}
        >
          {isReward ? <Gift size={13} /> : <Sparkles size={13} />}

          {isReward
            ? 'مكافأة نقاط'
            : `اكسب ${product.points.toLocaleString('en-US')} نقطة`}
        </span>

        {!isReward && (
          <button
            type="button"
            onClick={onFavorite}
            aria-label={
              isFavorite
                ? 'إزالة المنتج من المفضلة'
                : 'إضافة المنتج إلى المفضلة'
            }
            className={`absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm transition ${
              isFavorite
                ? 'text-red-500'
                : 'text-[#12302b] hover:text-red-500'
            }`}
          >
            <Heart
              size={18}
              className={isFavorite ? 'fill-current' : ''}
            />
          </button>
        )}

        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1.5 text-[10px] font-bold text-[#12302b]">
          <span
            className={`h-2 w-2 rounded-full ${
              product.statusType === 'limited'
                ? 'bg-amber-500'
                : 'bg-emerald-500'
            }`}
          />

          {product.status}
        </span>
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2 text-[10px] text-[#74777f]">
          <span>{product.category}</span>
          <span className="shrink-0 font-bold">
            كود: {product.code}
          </span>
        </div>

        <h3 className="mt-2 line-clamp-2 min-h-12 text-sm font-extrabold leading-6 text-[#12302b] transition-colors group-hover:text-[#1f7a6e]">
          {product.name}
        </h3>

        <p className="mt-1 line-clamp-2 min-h-10 text-xs leading-5 text-[#43474e]">
          {product.description}
        </p>

        <div className="mt-3 flex items-end justify-between gap-2 border-t border-[#e1e2ea] pt-3">
          <div>
            <span className="text-2xl font-extrabold text-[#12302b]">
              {product.price}
            </span>

            <span className="mr-1 text-sm font-bold text-[#12302b]">
              ₪
            </span>
          </div>

          <div className="text-left text-[10px] font-bold leading-5 text-[#1f7a6e]">
            <span className="block">مكافآت تبادل</span>

            <span>
              {product.points.toLocaleString('en-US')} نقطة
            </span>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="px-4 pb-4">
        <button
          type="button"
          onClick={onOpen}
          className={`flex h-11 w-full items-center justify-center gap-2 rounded-xl text-xs font-bold text-white shadow-sm transition active:scale-95 ${
            isReward
              ? 'bg-[#835400] hover:bg-[#714800]'
              : 'bg-[#1f7a6e] hover:bg-[#165a51]'
          }`}
        >
          {isReward ? 'عرض المكافأة' : 'عرض التفاصيل واختيار المقاس'}

          <ArrowLeft size={17} />
        </button>
      </div>
    </article>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl"
      >
        <div className="mb-5 flex items-center justify-between border-b border-[#e1e2ea] pb-3">
          <h2 className="text-lg font-extrabold text-[#12302b]">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {children}
      </section>
    </div>
  );
}

export default CustomerStorePage;