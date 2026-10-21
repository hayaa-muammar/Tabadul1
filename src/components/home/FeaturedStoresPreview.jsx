import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedStoresPreview() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'women', label: 'ملابس نسائية وعبايات' },
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP3-XUQwMHRQUt1XvhjNhDTFMrazEbR0zlEiQJZXrObkHdfXKE80xd7nf7XJHJ6EbC6BrGyD6ckC09rp-6LZI9uQdty8PKZ2ANpZShB1oyJeNmm-YZNrnMaS_QPZjkWVuPbfB-RGGWdNPoFfuxw3ThZrSTRd3XTIdQsZwA4-4okiV1q7nz1NK8cxHc7qywNDsmjpeDU6uqW-AR9rQfki2n9rYtRYz2t91d3nU9uGVcNgZk9RPuNYmg3A'
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGXJXbnT7SF8byoEqAYReTuAhhgDFCO6qJYylPi85oYiw2X855g7ucZfa-jONdDQXrHq7_ghxDZiobPvpw5mypUWiGnH5aGSI4XV1fu4lnfHWJzrbWNOfDRsJBBk-tXT5Gs1rO6jxbKcLJfMAjGFFfYuBVwuZazqJyZPmvWAKMJhznmPUQ6NHQ_Euozra8K3XIaS-k8hCGnLwzlwRBdDGIkyi2HmE1JKFazAyGjoQ1Zx2i4hnEiTQsXg'
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXubLGyPKfCt5wHWOIixwTwfD4UGBRkapYWC6jmuiWyysI68WqUijVaASNd_OGVoINjPNPflaCGkqWaLWB-k2wXektCwBsrNUstnOu1k6GO6SC06a-manyVANGKc6hUSrGE8oEhvDDMjdAO9lhkTWxJArBREsRK3ie5hh9QH-kEXJJVJa-8AtSfpbmCJeL8Ogh6njaadAgHVBIYg_r5iKoSBetEu50AWjnu88E-iFy3YnABiUhQB-21A'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5 lg:gap-5">
          {displayedStores.map((store) => (
            <Link
              key={store.id}
              to={store.link}
              className="bg-white rounded-xl overflow-hidden border border-[#12302b]/15 shadow-xs hover:shadow-md transition-all flex flex-col group cursor-pointer h-full"
            >
              {/* Compact Store Banner Image */}
              <div className="h-32 sm:h-34 relative bg-[#f6f3ec] overflow-hidden">
                <img
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  src={store.image}
                />
                <span className="absolute top-2 right-2 bg-[#12302b] text-white text-[9.5px] font-black px-2 py-0.5 rounded shadow-xs">
                  كاش باك 5%
                </span>
                <span className="absolute bottom-2 left-2 bg-white/95 text-[#1f7a6e] text-[9.5px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-xs backdrop-blur-xs">
                  <span className="material-symbols-outlined text-[13px] fill">verified</span>
                  <span>{store.location}</span>
                </span>
              </div>

              {/* Compact Card Details */}
              <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10.5px] font-bold text-[#c7922d] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">{store.icon}</span>
                    <span>{store.categoryLabel}</span>
                  </div>
                  <h3 className="text-sm sm:text-[15px] font-black text-[#12302b] mt-0.5 line-clamp-1 group-hover:text-[#1f7a6e] transition-colors">
                    {store.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#52606d] mt-1 line-clamp-2 leading-relaxed">
                    {store.description}
                  </p>
                </div>

                {/* Cashback & Savings Equation */}
                <div className="mt-2.5 pt-2 border-t border-[#12302b]/10 flex items-center justify-between text-[11px] sm:text-xs">
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
