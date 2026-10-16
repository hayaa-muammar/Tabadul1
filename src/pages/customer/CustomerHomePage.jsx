import { useMemo, useState } from 'react';
import {
  Search,
  Store,
  MapPin,
  Star,
  Gift,
  ShieldCheck,
  BadgeCheck,
  Wallet,
  Heart,
  SlidersHorizontal,
  X,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  ChevronLeft,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

/* =========================
   بيانات المتاجر النسائية
========================= */

const stores = [
  {
    id: 1,
    name: 'بوتيك لمسة للأزياء والفساتين',
    category: 'أزياء نسائية وفساتين',
    location: 'الفرع الرئيسي - المجمع التجاري',
    rating: 4.9,
    reviews: 140,
    cashback: 5,
    badge: 'شريك مميز Pro',
    description:
      'أحدث تشكيلات فساتين السهرة والأطقم الكلاسيكية النسائية بقصات أنيقة وخامات مميزة.',
    products: [
      { name: 'فستان حرير شامبين', price: 190 },
      { name: 'بليزر نسائي كلاسيك', price: 145 },
      { name: 'تنورة بليسيه', price: 85 },
    ],
  },

  {
    id: 2,
    name: 'دانتيلا للعبايات والشالات',
    category: 'عبايات وشالات',
    location: 'المنطقة الغربية - جادة الموضة',
    rating: 4.95,
    reviews: 210,
    cashback: 5,
    badge: 'شريك مميز Pro',
    description:
      'عبايات راقية بتطريز فلسطيني أنيق وشالات بألوان هادئة تناسب مختلف المناسبات.',
    products: [
      { name: 'عباية مطرزة', price: 230 },
      { name: 'عباية كتان يومية', price: 160 },
      { name: 'شال شيفون تركي', price: 45 },
    ],
  },

  {
    id: 3,
    name: 'روز ستايل للأزياء النسائية',
    category: 'أزياء نسائية وكاجوال',
    location: 'المنطقة المركزية',
    rating: 4.85,
    reviews: 98,
    cashback: 5,
    badge: 'متجر موثّق',
    description:
      'تشكيلة عصرية من الملابس النسائية اليومية والقطع الكاجوال والإطلالات المريحة.',
    products: [
      { name: 'طقم نسائي ساج', price: 120 },
      { name: 'بلوزة ناعمة', price: 75 },
      { name: 'تنورة ميدي', price: 95 },
    ],
  },

  {
    id: 4,
    name: 'أناقة بوتيك للملابس النسائية',
    category: 'أزياء نسائية وكلاسيك',
    location: 'جادة الأزياء الراقية',
    rating: 4.88,
    reviews: 112,
    cashback: 5,
    badge: 'شريك مميز Pro',
    description:
      'ملابس نسائية أنيقة تشمل البليزرات والقمصان والتنانير والقطع المناسبة للعمل والمناسبات.',
    products: [
      { name: 'قميص نسائي كلاسيك', price: 95 },
      { name: 'بنطال نسائي بيج', price: 110 },
      { name: 'بليزر كريمي', price: 150 },
    ],
  },

  {
    id: 5,
    name: 'ليلك للفساتين والسهرات',
    category: 'فساتين وسهرة',
    location: 'المنطقة الشمالية',
    rating: 4.8,
    reviews: 86,
    cashback: 5,
    badge: 'متجر موثّق',
    description:
      'فساتين سهرة ومناسبات بتفاصيل ناعمة وألوان متنوعة لتناسب مختلف الأذواق.',
    products: [
      { name: 'فستان سهرة خمري', price: 220 },
      { name: 'فستان ساتان', price: 175 },
      { name: 'فستان مناسبات', price: 200 },
    ],
  },

  {
    id: 6,
    name: 'حرير وشيفون',
    category: 'عبايات وشالات',
    location: 'المنطقة الجنوبية',
    rating: 4.87,
    reviews: 74,
    cashback: 5,
    badge: 'متجر موثّق',
    description:
      'عبايات وشالات وقطع محتشمة بخامات مريحة وتفاصيل عصرية.',
    products: [
      { name: 'عباية شيفون', price: 160 },
      { name: 'شال ناعم', price: 40 },
      { name: 'عباية يومية', price: 135 },
    ],
  },
];

/* =========================
   الأقسام
========================= */

const categories = [
  'الكل',
  'أزياء نسائية وفساتين',
  'فساتين وسهرة',
  'عبايات وشالات',
  'أزياء نسائية وكاجوال',
  'أزياء نسائية وكلاسيك',
];

/* =========================
   مساحة الصور الفارغة
========================= */

function ImagePlaceholder({ className = '' }) {
  return (
    <div
      className={`flex items-center justify-center bg-[#ecebe5] text-[#85877f] ${className}`}
    >
      <div className="flex flex-col items-center gap-1">
        <span className="text-3xl font-light">＋</span>
        <span className="text-xs">مساحة الصورة</span>
      </div>
    </div>
  );
}

/* =========================
   الصفحة الرئيسية للعميلة
========================= */

export default function CustomerHomePage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('all');
  const [category, setCategory] = useState('الكل');
  const [sort, setSort] = useState('featured');

  const [favorites, setFavorites] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [showRewards, setShowRewards] = useState(null);
  const [notice, setNotice] = useState('');

  /* =========================
     البحث والفلاتر والترتيب
  ========================= */

  const visibleStores = useMemo(() => {
    let result = stores.filter((store) => {
      const query = search.trim().toLowerCase();

      const searchableText = [
        store.name,
        store.category,
        store.description,
        store.location,
        ...store.products.map((product) => product.name),
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch =
        !query || searchableText.includes(query);

      const matchesCategory =
        category === 'الكل' || store.category === category;

      let matchesLocation = true;

      if (location === 'central') {
        matchesLocation = store.location.includes('المركزية');
      } else if (location === 'north') {
        matchesLocation = store.location.includes('الشمالية');
      } else if (location === 'south') {
        matchesLocation = store.location.includes('الجنوبية');
      } else if (location === 'mall') {
        matchesLocation = store.location.includes('المجمع التجاري');
      }

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLocation
      );
    });

    if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === 'cashback') {
      result.sort((a, b) => b.cashback - a.cashback);
    }

    if (sort === 'name') {
      result.sort((a, b) =>
        a.name.localeCompare(b.name, 'ar')
      );
    }

    return result;
  }, [search, location, category, sort]);

  /* =========================
     إعادة ضبط البحث والفلاتر
  ========================= */

  const resetFilters = () => {
    setSearch('');
    setLocation('all');
    setCategory('الكل');
    setSort('featured');
  };

  /* =========================
     إضافة متجر للمفضلة
  ========================= */

  const toggleFavorite = (id) => {
    setFavorites((previousFavorites) => {
      if (previousFavorites.includes(id)) {
        return previousFavorites.filter(
          (favoriteId) => favoriteId !== id
        );
      }

      return [...previousFavorites, id];
    });
  };

  /* =========================
     فتح المتجر
  ========================= */

  const openStore = (store) => {
    // المتجر الأول مرتبط بصفحة المتجر الموجودة بالمشروع.
    if (store.id === 1) {
      navigate('/customer/store');
      return;
    }

    // بقية المتاجر تعرض تفاصيلها دون الانتقال
    // إلى مسارات غير موجودة في المشروع.
    setSelectedStore(store);
  };

  /* =========================
     إغلاق النوافذ
  ========================= */

  const closeModals = () => {
    setSelectedStore(null);
    setShowRewards(null);
  };

  return (
    <MainLayout>
      <div
        dir="rtl"
        className="min-h-screen bg-[#f6f3ec] font-[Tajawal] text-[#191c22]"
      >
        <main className="mx-auto w-full max-w-7xl space-y-7 px-4 py-6 sm:px-6 lg:px-8">

          {/* =========================
              القسم الرئيسي والبحث
          ========================= */}

          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#12302b] via-[#1a443d] to-[#1f7a6e] p-6 text-center text-white shadow-lg md:p-10">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#e9b44c]/10 blur-3xl" />

            <div className="relative mx-auto max-w-4xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-amber-300">
                <BadgeCheck size={16} />
                منصة الأزياء النسائية والعبايات المعتمدة
              </span>

              <h1 className="text-2xl font-extrabold leading-relaxed sm:text-4xl">
                اكتشفي أفضل بوتيكات ومتاجر الأزياء النسائية
              </h1>

              <p className="mx-auto max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
                فساتين وعبايات وأطقم وقطع عصرية من متاجر شريكة.
                اكسبِي نقاط تبادل مع مشترياتك.
                <span className="font-bold text-[#e9b44c]">
                  {' '}
                  كل 1 ₪ = 10 نقاط وفق شروط البرنامج.
                </span>
              </p>

              {/* نموذج البحث */}

              <form
                onSubmit={(event) => event.preventDefault()}
                className="mx-auto flex max-w-3xl flex-col gap-2 rounded-2xl border border-gray-200/80 bg-white p-2 shadow-xl sm:flex-row sm:items-center"
              >
                <div className="flex min-w-0 flex-1 items-center gap-2 px-3">
                  <Search
                    size={22}
                    className="shrink-0 text-gray-400"
                  />

                  <input
                    value={search}
                    onChange={(event) =>
                      setSearch(event.target.value)
                    }
                    placeholder="ابحثي باسم المتجر أو نوع القطعة..."
                    aria-label="البحث عن متجر أو قطعة"
                    className="w-full border-0 bg-transparent py-3 text-sm text-[#191c22] outline-none ring-0 placeholder:text-gray-400 focus:ring-0"
                  />
                </div>

                <select
                  value={location}
                  onChange={(event) =>
                    setLocation(event.target.value)
                  }
                  aria-label="اختيار المنطقة"
                  className="rounded-xl border-gray-200 px-3 py-3 text-sm text-[#43474e] focus:border-[#1f7a6e] focus:ring-[#1f7a6e]"
                >
                  <option value="all">
                    كافة المناطق والفروع
                  </option>

                  <option value="central">
                    المنطقة المركزية
                  </option>

                  <option value="north">
                    المنطقة الشمالية
                  </option>

                  <option value="south">
                    المنطقة الجنوبية
                  </option>

                  <option value="mall">
                    المجمعات التجارية
                  </option>
                </select>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#1f7a6e] px-7 py-3 font-bold text-white transition hover:bg-[#165a51]"
                >
                  ابحثي الآن
                  <ArrowLeft size={17} />
                </button>
              </form>

              {/* المميزات */}

              <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-2 text-xs text-emerald-100">
                <span className="flex items-center gap-1">
                  <ShieldCheck
                    size={15}
                    className="text-[#e9b44c]"
                  />
                  متاجر موثقة
                </span>

                <span className="flex items-center gap-1">
                  <Gift
                    size={15}
                    className="text-[#e9b44c]"
                  />
                  نقاط ولاء موحدة
                </span>

                <span className="flex items-center gap-1">
                  <CheckCircle2
                    size={15}
                    className="text-[#e9b44c]"
                  />
                  تجربة تسوق آمنة
                </span>
              </div>
            </div>
          </section>

          {/* =========================
              تصنيف الأزياء
          ========================= */}

          <section className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="flex items-center gap-2 text-lg font-extrabold text-[#12302b]">
                <Store
                  size={21}
                  className="text-[#1f7a6e]"
                />
                تصفحي حسب قسم الأزياء
              </h2>

              <span className="text-xs text-[#74777f]">
                تشكيلة مخصصة للأزياء النسائية
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`shrink-0 rounded-xl border px-4 py-3 text-sm font-bold transition ${
                    category === item
                      ? 'border-[#12302b] bg-[#12302b] text-white'
                      : 'border-gray-200 bg-white text-[#43474e] hover:border-[#1f7a6e]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          {/* =========================
              ترتيب النتائج
          ========================= */}

          <section className="flex flex-col gap-4 rounded-xl border border-gray-200/80 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-sm text-[#43474e]">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

              عرض

              <strong className="text-[#1f7a6e]">
                {visibleStores.length} متاجر
              </strong>

              أزياء نسائية
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <SlidersHorizontal
                size={17}
                className="text-[#1f7a6e]"
              />

              <label
                htmlFor="store-sort"
                className="text-xs text-[#74777f]"
              >
                ترتيب حسب:
              </label>

              <select
                id="store-sort"
                value={sort}
                onChange={(event) =>
                  setSort(event.target.value)
                }
                className="rounded-lg border-gray-200 text-sm focus:border-[#1f7a6e] focus:ring-[#1f7a6e]"
              >
                <option value="featured">
                  الأكثر تميزًا
                </option>

                <option value="rating">
                  الأعلى تقييمًا
                </option>

                <option value="cashback">
                  أعلى كاش باك
                </option>

                <option value="name">
                  الاسم
                </option>
              </select>

              <button
                type="button"
                onClick={resetFilters}
                className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-xs font-bold text-[#43474e] hover:bg-gray-50"
              >
                <RotateCcw size={14} />
                إعادة ضبط
              </button>
            </div>
          </section>

          {/* =========================
              بطاقات المتاجر
          ========================= */}

          {visibleStores.length > 0 ? (
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleStores.map((store) => (
                <article
                  key={store.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* صورة المتجر */}

                  <div className="relative h-44 bg-[#ecebe5]">
                    <ImagePlaceholder className="h-full w-full transition group-hover:bg-[#e4e4dc]" />

                    <div className="absolute right-3 top-3 flex flex-wrap gap-2">
                      <span className="flex items-center gap-1 rounded-full bg-[#12302b] px-3 py-1.5 text-[11px] font-bold text-amber-300">
                        <Sparkles size={13} />
                        {store.badge}
                      </span>

                      <span className="flex items-center gap-1 rounded-full bg-emerald-600 px-2 py-1 text-[10px] font-bold text-white">
                        <BadgeCheck size={12} />
                        موثّق
                      </span>
                    </div>

                    <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-black/50 px-2 py-1 text-xs text-white">
                      <MapPin size={13} />
                      {store.location}
                    </span>

                    {/* زر المفضلة */}

                    <button
                      type="button"
                      onClick={() => toggleFavorite(store.id)}
                      aria-label={
                        favorites.includes(store.id)
                          ? 'إزالة من المفضلة'
                          : 'إضافة إلى المفضلة'
                      }
                      className={`absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full shadow transition ${
                        favorites.includes(store.id)
                          ? 'bg-rose-50 text-rose-600'
                          : 'bg-white text-[#74777f] hover:text-rose-600'
                      }`}
                    >
                      <Heart
                        size={18}
                        className={
                          favorites.includes(store.id)
                            ? 'fill-current'
                            : ''
                        }
                      />
                    </button>
                  </div>

                  {/* تفاصيل المتجر */}

                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-extrabold leading-7 text-[#12302b]">
                        {store.name}
                      </h3>

                      <span className="flex shrink-0 items-center gap-1 rounded-md border border-amber-200 bg-amber-50 px-2 py-1 text-xs font-bold text-amber-800">
                        <Star
                          size={13}
                          className="fill-amber-400 text-amber-500"
                        />
                        {store.rating}
                      </span>
                    </div>

                    <p className="mt-1 text-xs font-bold text-[#1f7a6e]">
                      {store.category}
                      {' · '}
                      ({store.reviews} تقييم)
                    </p>

                    {/* الكاش باك */}

                    <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800">
                      <Gift size={15} />
                      كاش باك {store.cashback}%
                    </span>

                    <p className="mt-3 min-h-12 text-sm leading-6 text-[#43474e]">
                      {store.description}
                    </p>

                    {/* المنتجات المعروضة */}

                    <div className="mt-3 border-t border-gray-100 pt-3">
                      <span className="mb-2 block text-[11px] font-bold text-gray-500">
                        أحدث القطع المعروضة
                      </span>

                      <div className="grid grid-cols-3 gap-2">
                        {store.products.map((product) => (
                          <div
                            key={product.name}
                            className="rounded-lg border border-gray-100 bg-gray-50 p-2 text-center"
                          >
                            <ImagePlaceholder className="mb-2 h-12 rounded" />

                            <span className="block truncate text-[10px] font-medium text-gray-700">
                              {product.name}
                            </span>

                            <span className="text-xs font-bold text-[#1f7a6e]">
                              {product.price} ₪
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* أزرار المتجر */}

                    <div className="mt-auto flex gap-2 pt-4">
                      <button
                        type="button"
                        onClick={() => openStore(store)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#12302b] px-3 py-3 text-sm font-bold text-white transition hover:bg-[#1f7a6e]"
                      >
                        تصفح المتجر
                        <ChevronLeft size={17} />
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowRewards(store)}
                        title="المكافآت المتاحة"
                        aria-label={`المكافآت المتاحة في ${store.name}`}
                        className="rounded-xl border border-gray-200 p-3 text-[#1f7a6e] transition hover:bg-emerald-50"
                      >
                        <Gift size={19} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          ) : (
            /* لا توجد نتائج */

            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-14 text-center">
              <Search
                size={32}
                className="mx-auto text-[#1f7a6e]"
              />

              <h3 className="mt-3 font-extrabold text-[#12302b]">
                ما لقينا متاجر مطابقة
              </h3>

              <p className="mt-2 text-sm text-[#74777f]">
                جرّبي تغيير البحث أو القسم أو المنطقة.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 rounded-xl bg-[#12302b] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1f7a6e]"
              >
                عرض جميع المتاجر
              </button>
            </div>
          )}

          {/* =========================
              مميزات المنصة
          ========================= */}

          <section className="grid gap-4 rounded-2xl border border-gray-200 bg-white p-5 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 shrink-0 text-[#1f7a6e]" />

              <div>
                <h3 className="font-bold text-[#12302b]">
                  تسوّقي بثقة
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#74777f]">
                  متاجر شريكة ومعلومات واضحة عن كل متجر.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Wallet className="mt-1 shrink-0 text-[#1f7a6e]" />

              <div>
                <h3 className="font-bold text-[#12302b]">
                  نقاط تبادل
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#74777f]">
                  رصيد النقاط تجريبي حاليًا إلى حين ربط النظام الخلفي.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Gift className="mt-1 shrink-0 text-[#1f7a6e]" />

              <div>
                <h3 className="font-bold text-[#12302b]">
                  مكافآت المتاجر
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#74777f]">
                  راجعي شروط المكافآت قبل إتمام الشراء.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* =========================
            نوافذ المتجر والمكافآت
        ========================= */}

        {(selectedStore || showRewards) && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeModals();
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="store-modal-title"
              className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2
                    id="store-modal-title"
                    className="text-xl font-extrabold text-[#12302b]"
                  >
                    {(showRewards || selectedStore).name}
                  </h2>

                  <p className="mt-1 text-sm text-[#74777f]">
                    {showRewards
                      ? 'المكافآت المتاحة بالنقاط'
                      : selectedStore.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeModals}
                  aria-label="إغلاق"
                  className="rounded-lg p-2 transition hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              {showRewards ? (
                /* نافذة المكافآت */

                <div className="mt-5 rounded-xl bg-[#f6f3ec] p-4">
                  <p className="flex items-center gap-2 font-bold text-[#12302b]">
                    <Gift className="text-[#b77a08]" />
                    كاش باك {showRewards.cashback}%
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#74777f]">
                    تفاصيل الاستبدال الفعلية تعتمد على شروط برنامج الولاء،
                    وستظهر بعد ربط النظام الخلفي.
                  </p>
                </div>
              ) : (
                /* نافذة تفاصيل المتجر */

                <>
                  <div className="mt-4">
                    <ImagePlaceholder className="h-36 w-full rounded-xl" />
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#43474e]">
                    {selectedStore.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-[#43474e]">
                    <span className="flex items-center gap-1">
                      <MapPin size={15} />
                      {selectedStore.location}
                    </span>

                    <span className="flex items-center gap-1">
                      <Star
                        size={15}
                        className="text-amber-500"
                      />
                      {selectedStore.rating}
                      {' '}
                      ({selectedStore.reviews} تقييم)
                    </span>
                  </div>

                  <div className="mt-4 rounded-xl bg-[#f6f3ec] p-4">
                    <p className="text-sm font-bold text-[#12302b]">
                      أحدث القطع
                    </p>

                    <div className="mt-3 space-y-2">
                      {selectedStore.products.map((product) => (
                        <div
                          key={product.name}
                          className="flex items-center justify-between gap-3 text-sm"
                        >
                          <span className="text-[#43474e]">
                            {product.name}
                          </span>

                          <span className="shrink-0 font-bold text-[#1f7a6e]">
                            {product.price} ₪
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedStore(null);

                      setNotice(
                        'صفحة هذا المتجر غير مضافة إلى المشروع بعد.'
                      );
                    }}
                    className="mt-5 w-full rounded-xl bg-[#12302b] px-4 py-3 font-bold text-white transition hover:bg-[#1f7a6e]"
                  >
                    زيارة صفحة المتجر بالكامل
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={closeModals}
                className="mt-3 w-full rounded-xl border border-gray-200 px-4 py-3 font-bold text-[#43474e] transition hover:bg-gray-50"
              >
                إغلاق
              </button>
            </div>
          </div>
        )}

        {/* =========================
            إشعار المستخدم
        ========================= */}

        {notice && (
          <div
            role="status"
            className="fixed bottom-5 left-5 z-[60] flex items-center gap-3 rounded-xl bg-[#12302b] px-4 py-3 text-sm text-white shadow-xl"
          >
            <span>{notice}</span>

            <button
              type="button"
              onClick={() => setNotice('')}
              className="font-bold text-amber-300"
            >
              إغلاق
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}