import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function MerchantProductsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'عباءة حريرية ملكية مطرزة',
      category: 'abayas',
      categoryLabel: 'عبايات',
      sku: 'AB-8821',
      price: 240,
      pointsCashback: 12,
      stock: 14,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['زيتي ملكي', 'أسود فحمي'],
      status: 'active',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWO5D3-d3RBw-6-1qMa8jqBxFbR13IlmwMFbh7-jqpfTy3-toSn0ttO8RKMUGFYI5CtaN8O6DpNJDM_AohFzvrv6ZELCWV9J6cZCPUvm3MFFzHQv5TESQU7KJ0J7lf0BUUAVj_b6-bQakw_BztJN-3cNinhrIGVVyBmbwiBlb5rp2Z9GuH1Ptlnr91oQSqQGfda4AH6puUCWafDKXkoGRQGY4XCDPVVD5Fcn_G0t0e'
    },
    {
      id: 2,
      name: 'حذاء جلدي أنيق - كعب مريح',
      category: 'shoes',
      categoryLabel: 'أحذية',
      sku: 'SH-3104',
      price: 180,
      pointsCashback: 9,
      stock: 2,
      sizes: ['37', '38', '39', '40'],
      colors: ['بيج نود', 'أسود كلاسيك'],
      status: 'low_stock',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4Ln6kzbwfH_Vp02O54vF59vVcGELKAm2wGQdETKduwwRICztqbf66N_LwX2JdLVXlKipFnIV9htFcVtkG-Q_VhPr2JWssuqMgp2id5KGzQzt-YzJlcYZ1yLxoh499RO5kI3ZiVJKsAumyv8XnhiEBHJedFHcoTBavLDlCIqJFQgum46GrPRXBaLhWJpBBjNU5UfaVVejpxov3gYrcuCoCYWpI6d0gaMpms5FSWl9'
    },
    {
      id: 3,
      name: 'فستان سهرة مخملي أسود مطرز باللؤلؤ',
      category: 'dresses',
      categoryLabel: 'فساتين',
      sku: 'DR-4402',
      price: 320,
      pointsCashback: 16,
      stock: 6,
      sizes: ['38', '40', '42'],
      colors: ['أسود لؤلؤي'],
      status: 'active',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBECh1TZmj1Z8Hui_pJpZONKrDetWex8opbRCQRUu5hTTbF10yXovWZ82yjrosQnTjte-ZVLVR6xPDoWKGTUN8UjgS7coRKsrv6eu6ScGg-0yvlY9Em6MQhvoQdhb7QAJNbFlg1CW4w2tmt_iPEmvKbgojM7ec8StBH6A3vNd7vGMW1yuVjPB_FG3cqcspGP_FeUB_nTYc4Mjcj3M5ZpsKTVGf1NMupsxxwbW51MFqg'
    },
    {
      id: 4,
      name: 'صندل نسائي صيفي مفتوح ناعم',
      category: 'shoes',
      categoryLabel: 'أحذية',
      sku: 'SH-9012',
      price: 130,
      pointsCashback: 6,
      stock: 1,
      sizes: ['38', '39'],
      colors: ['ذهبي فاتح'],
      status: 'low_stock',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs-cCktfjhcPwWH3Mv4iNq8PC5OswLS1EpegzTk8WL3B2wuYUM6nQ70LU8-hec0z6qw6nprbTn0nNZwEc1al6qnzL7FqLfC5HclzJacxpqzKnMTyUlDURHDC83H70nsKbx8vAv3G-Kw3IM1DLxCx0dPff7QTFu7BUpEXvBw4_5eA3KhaiwgdY545e9gxe-9G3CCjIX19NW83T_xxbZirWGffGA2d6vpDGE_GPRed-C'
    }
  ]);

  const toggleStatus = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === 'hidden' ? 'active' : 'hidden' }
          : item
      )
    );
  };

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.name.includes(searchQuery) || p.sku.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex-1 flex flex-col gap-6">
        {/* Page Title & Hero Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E1DACB] shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[11px] bg-[#12302B]/10 text-[#12302B] font-bold">M-06</span>
              <h1 className="text-xl sm:text-2xl font-black text-[#12302B]">إدارة المنتجات والمخزون</h1>
            </div>
            <p className="text-xs text-gray-600">إدارة تشكيلة الأزياء والأحذية، ضبط المقاسات والألوان، وتحديد نسب الكاش باك وقبول نقاط الولاء.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alert('جاري تصدير كشف الجرد بصيغة Excel / PDF...')}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E1DACB] text-[#12302B] text-xs font-bold hover:bg-[#F6F3EC] transition-all bg-white shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>تصدير كشف الجرد</span>
            </button>

            <button
              onClick={() => navigate('/merchant/products/add')}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] text-xs font-extrabold shadow-md transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              <span>+ إضافة منتج جديد</span>
            </button>
          </div>
        </div>

        {/* Metrics & KPI Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#E1DACB] shadow-sm flex items-start justify-between gap-3">
            <div className="flex-1">
              <span className="text-xs text-gray-500 font-medium block mb-1">إجمالي المنتجات المسجلة</span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#12302B]">28</span>
                <span className="text-xs text-gray-500 font-semibold">صنف نشط</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#1F7A6E]/10 text-[#1F7A6E] text-[11px] font-bold">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                <span>معروضة للمتسوقين</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-xl bg-[#12302B]/5 flex items-center justify-center text-[#12302B] flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">inventory_2</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E9B44C] shadow-sm flex items-start justify-between gap-3 bg-amber-50/30">
            <div className="flex-1">
              <span className="text-xs text-[#835400] font-bold block mb-1">أوشكت على النفاد</span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#835400]">3</span>
                <span className="text-xs text-[#835400] font-bold">أصناف بحاجة لتوريد</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#E9B44C]/30 text-[#835400] text-[11px] font-bold">
                <span className="material-symbols-outlined text-[14px]">warning</span>
                <span>أقل من 3 قطع بالمخزن</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-xl bg-[#E9B44C]/25 flex items-center justify-center text-[#835400] flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">production_quantity_limits</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E1DACB] shadow-sm flex items-start justify-between gap-3">
            <div className="flex-1">
              <span className="text-xs text-gray-500 font-medium block mb-1">مؤهل لبرنامج النقاط</span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#1F7A6E]">24</span>
                <span className="text-xs text-gray-500 font-semibold">صنف يقبل الاستبدال</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-bold">
                <span className="material-symbols-outlined text-[14px]">stars</span>
                <span>5% كاش باك للزبائن</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-xl bg-[#1F7A6E]/10 flex items-center justify-center text-[#1F7A6E] flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">loyalty</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E1DACB] shadow-sm flex items-start justify-between gap-3">
            <div className="flex-1">
              <span className="text-xs text-gray-500 font-medium block mb-1">الأكثر مبيعاً هذا الأسبوع</span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-lg font-bold text-[#12302B]">العبايات الحريرية</span>
              </div>
              <div className="text-[11px] text-gray-500">18 قطعة مباعة خلال 7 أيام</div>
            </div>
            <div className="w-11 h-11 rounded-xl bg-[#12302B]/5 flex items-center justify-center text-[#12302B] flex-shrink-0">
              <span className="material-symbols-outlined text-[22px]">local_fire_department</span>
            </div>
          </div>
        </div>

        {/* Toolbar & Filters */}
        <div className="bg-white p-5 rounded-2xl border border-[#E1DACB] shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 text-nowrap">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'all' ? 'bg-[#12302B] text-white' : 'bg-[#F6F3EC] text-gray-700 hover:bg-gray-200'
                }`}
              >
                الكل (28)
              </button>
              <button
                onClick={() => setSelectedCategory('abayas')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'abayas' ? 'bg-[#12302B] text-white' : 'bg-[#F6F3EC] text-gray-700 hover:bg-gray-200'
                }`}
              >
                عبايات (12)
              </button>
              <button
                onClick={() => setSelectedCategory('dresses')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'dresses' ? 'bg-[#12302B] text-white' : 'bg-[#F6F3EC] text-gray-700 hover:bg-gray-200'
                }`}
              >
                فساتين (8)
              </button>
              <button
                onClick={() => setSelectedCategory('shoes')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'shoes' ? 'bg-[#12302B] text-white' : 'bg-[#F6F3EC] text-gray-700 hover:bg-gray-200'
                }`}
              >
                أحذية راقية (8)
              </button>
            </div>

            <div className="relative w-full sm:w-72">
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث باسم المنتج أو الرمز..."
                className="w-full pl-3 pr-9 py-2 rounded-xl border border-[#E1DACB] bg-[#F6F3EC] text-xs focus:bg-white focus:border-[#12302B]"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-[#E1DACB] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="h-44 bg-gray-100 relative overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 right-2 bg-[#12302B]/80 backdrop-blur-sm text-[#E9B44C] text-[10px] font-bold px-2 py-0.5 rounded-full">
                  +{p.pointsCashback} نقطة كاش باك
                </span>
                {p.status === 'low_stock' && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                    مخزون حرج ({p.stock})
                  </span>
                )}
                {p.status === 'hidden' && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xs font-bold">
                    مخفي من واجهة الزبائن
                  </div>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1">
                    <span>{p.categoryLabel}</span>
                    <span className="font-mono">{p.sku}</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#12302B] line-clamp-1">{p.name}</h3>

                  <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                    <span className="text-[10px] text-gray-500">المقاسات:</span>
                    {p.sizes.map((s) => (
                      <span key={s} className="bg-[#F6F3EC] px-1.5 py-0.5 rounded text-[10px] font-bold text-gray-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-base font-black text-[#12302B]">₪ {p.price}.00</span>
                    <span className="text-[10px] text-gray-500 block">المتوفر: {p.stock} قطع</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleStatus(p.id)}
                      title={p.status === 'hidden' ? 'إظهار المنتج' : 'إخفاء المنتج'}
                      className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 text-xs"
                    >
                      <span className="material-symbols-outlined text-base">
                        {p.status === 'hidden' ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                    <button
                      onClick={() => navigate('/merchant/products/add', { state: { editProduct: p } })}
                      className="p-1.5 rounded-lg bg-[#12302B] text-white hover:bg-[#1F7A6E] text-xs cursor-pointer"
                      title="تعديل المنتج"
                    >
                      <span className="material-symbols-outlined text-base">edit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
