import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedStoresPreview() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'women', label: 'ملابس نسائية وعبايات' },
    { id: 'men', label: 'أزياء رجالية' },
    { id: 'kids', label: 'ملابس أطفال' },
    { id: 'shoes', label: 'أحذية وبلاطين' }
  ];

  const stores = [
    {
      id: 'store-1',
      link: '/stores',
      category: 'women',
      name: 'متجر بيت الشال للأزياء',
      categoryLabel: 'ملابس نسائية وشالات',
      icon: 'checkroom',
      location: 'عمر المختار',
      description: 'شارع عمر المختار • شالات حرير، فساتين، وتشكيلات أزياء محتشمة.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtQheYrdOHsQdS1Fj73UDx4QMkCV_5Yx_C2WFqx-acHO2_TGRJ43gq-JE2EOig4YNMM9DcJfQ4i1IgqcqY_RkFuuRBSqGRMY5Tg1G29HMxR-MNVQKYMHw6rVXEHt3lVfREb1bR21xt0aB1MfJxy7bxUJJKh6DThQu2Q03u32uliT_VRlyje-h4-zmtHB1KrCqnsRJw0ou-g4-PH-W1sCvx9FUesF8hSjMj4YbSpMy7JWgJDWqQcy-wCw'
    },
    {
      id: 'store-2',
      link: '/stores/sultana-abayas',
      category: 'women',
      name: 'سلطانة العبايات الفاخرة',
      categoryLabel: 'عبايات واستقبال',
      icon: 'styler',
      location: 'الرمال',
      description: 'حي الرمال • تصاميم خليجية، أقمشة كريب وشيفون مطرزة يدوياً.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8QEszdCp9E4PTPSiY4OtCN8FZkFNZjPaj_oD3wKxExcAcrrYGG6TyM5a8CIf1xswIY69B3EiDzQ62GEgOZouwYBEQOOpTAA6G5Q6ixBKL3IzKKxUXiIyY7ya69chrhDnN9ZP3LKlUAIgagQK9WBb0gKiYHX3wnF-wk6m1gLxcfYh9u4F207Dj7iIjJEOX7D4THmyeJAW7gxVPAuLEKquUCrrCqqsNaEEl-8WTCU0PFHO4HCG8gcTJZg'
    },
    {
      id: 'store-3',
      link: '/stores',
      category: 'shoes',
      name: 'سنيكرز للأحذية',
      categoryLabel: 'أحذية وبلاطين',
      icon: 'do_not_step',
      location: 'شارع النصر',
      description: 'شارع النصر • أحذية رياضية مريحة، سبورت كاجوال وبلاطين جينز.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm_YW-ys-YBhihc3B0P0KVn91QVnSWBS8DJd4fk7x7wVom-lnzqTuQSYtF07r9ULBTM1JOcV6p7_3mrRm1FUpa4hJ4_ioLexRYAemt6G3h3p1Fl7lXlQBoKqJyW4aS57sQ00Knv441Pq-qOuOmEOC5oAfBJAdcTwqpuBLIf4RfVe67t6cCTQposfPaN8IWg2eSQl91pM8Dntyqo9lHsrmqCYBToKTkaFLlXPprrnJP0vSiB2dVcxAvjg'
    },
    {
      id: 'store-4',
      link: '/stores/lamsa-boutique',
      category: 'kids',
      name: 'بوتيك لمسة Lamsa للأطفال',
      categoryLabel: 'ملابس أطفال وبوتيك',
      icon: 'child_care',
      location: 'الرمال الجنوبي',
      description: 'الرمال الجنوبي • تشكيلات أطفال ومواليد وأطقم ولادي وبناتي مميزة.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqr0Xk6CtkxiBQzT8iDTbXagaCQJOYTdxzbEcjAmLmdzwAmJRwiKqMKiakhmbvR9MjbiTdazf81OLd5FAjnbterhgsm3nOgC8I_hjDAV6eNGTgLmiBEL_TjQqynbZJTBkA0v9D3TZ6A_RpSDDPKtbCq1kCzdu8X8WqdaafyQJfRiOQx5TZXdYofcx7eVZnua51rQEWihl2bB_nqI3Fhjw_afj0cKzFnVKuMZwgs_KdN2NRsoH8BK-mBw'
    }
  ];

  const displayedStores = activeCategory === 'all'
    ? stores
    : stores.filter((s) => s.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-white text-right" id="merchants">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <span className="text-xs font-black uppercase text-[#1f7a6e] bg-[#1f7a6e]/10 px-3.5 py-1 rounded-full">
              شبكة المتاجر المعتمدة
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#12302b] mt-2">متاجر الأزياء والأحذية الموثقة</h2>
            <p className="text-[#52606d] text-sm mt-1">متاجر وبوتيكات تضمن الجودة والمقاس الصحيح مع كاش باك 5% فوري عند كل عملية شراء.</p>
          </div>

          {/* Clean Categories Filter (Strictly Fashion & Shoes) */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#12302b] text-white shadow-xs'
                    : 'bg-[#f6f3ec] text-[#52606d] hover:bg-[#12302b]/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Resilient Store Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedStores.map((store) => (
            <Link
              key={store.id}
              to={store.link}
              className="bg-white rounded-xl overflow-hidden border border-[#12302b]/15 shadow-sm hover:shadow-md transition-all flex flex-col group cursor-pointer"
            >
              <div className="h-40 relative bg-[#f6f3ec] overflow-hidden">
                <img
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  src={store.image}
                />
                <span className="absolute top-2.5 right-2.5 bg-[#12302b] text-white text-[10px] font-black px-2 py-0.5 rounded shadow">
                  كاش باك 5%
                </span>
                <span className="absolute bottom-2.5 left-2.5 bg-white/95 text-[#1f7a6e] text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-xs fill">verified</span>
                  <span>{store.location}</span>
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-[#c7922d] flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">{store.icon}</span>
                    <span>{store.categoryLabel}</span>
                  </div>
                  <h3 className="text-base font-black text-[#12302b] mt-1 group-hover:text-[#1f7a6e] transition-colors">{store.name}</h3>
                  <p className="text-xs text-[#52606d] mt-1 leading-relaxed">{store.description}</p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#12302b]/10 flex items-center justify-between text-xs">
                  <span className="text-[#52606d]">معادلة الوفر:</span>
                  <span className="text-[#1f7a6e] font-black">200 نقطة = 1 ₪</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
