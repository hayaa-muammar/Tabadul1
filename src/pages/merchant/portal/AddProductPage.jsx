import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function AddProductPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const editProduct = location.state?.editProduct;

  const [productName, setProductName] = useState(editProduct?.name || 'عباءة حريرية مطرزة يدوياً');
  const [category, setCategory] = useState(editProduct?.category || 'abayas');
  const [sku, setSku] = useState(editProduct?.sku || 'SKU-AB-2026-88');
  const [price, setPrice] = useState(editProduct?.price || 240);
  const [selectedSizes, setSelectedSizes] = useState(editProduct?.sizes || ['M', 'L', 'XL']);
  const [selectedColors, setSelectedColors] = useState(editProduct?.colors || ['زيتي ملكي', 'أسود']);
  const [stock, setStock] = useState(editProduct?.stock || 12);
  const [acceptsPoints, setAcceptsPoints] = useState(true);
  const [exchangeGuarantee, setExchangeGuarantee] = useState(true);
  const [description, setDescription] = useState(editProduct?.description || 'عباءة راقية من الحرير الخالص مع تطريز يدوي على الأكمام، تصميم عصري محتشم يناسب الإطلالات والمناسبات الراقية.');

  const pointsEarned = Math.floor(price * 0.05);

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handlePublish = (e) => {
    e.preventDefault();
    navigate('/merchant/products/published');
  };

  const handleSaveDraft = (e) => {
    e.preventDefault();
    navigate('/merchant/products/draft');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 flex-1 flex flex-col gap-6">
        {/* Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E1DACB] shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] bg-[#12302B]/10 text-[#12302B] font-bold">M-06</span>
              <h1 className="text-xl sm:text-2xl font-black text-[#12302B]">
                {editProduct ? 'تعديل بيانات المنتج' : 'إضافة منتج أزياء جديد'}
              </h1>
            </div>
            <p className="text-xs text-gray-600">
              {editProduct
                ? 'تعديل مواصفات المنتج والأسعار والمخزون الحالي في متجرك.'
                : 'أدخل مواصفات المنتج، الأسعار، والمقاسات المتوفرة بالمحل في غزة لنشره في كتالوج تبادل.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSaveDraft}
              type="button"
              className="px-4 py-2.5 rounded-xl border border-[#E1DACB] text-[#12302B] hover:bg-[#F6F3EC] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base">bookmark_border</span>
              <span>حفظ كمسودة</span>
            </button>

            <button
              onClick={handlePublish}
              type="button"
              className="px-6 py-2.5 rounded-xl bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] text-xs font-black shadow-md transition-all active:scale-95 flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base">cloud_upload</span>
              <span>{editProduct ? 'حفظ التعديلات' : 'نشر المنتج الآن'}</span>
            </button>
          </div>
        </div>

        <form onSubmit={handlePublish} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Form Fields (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* 1. Basic Info */}
            <div className="bg-white p-6 rounded-2xl border border-[#E1DACB] shadow-sm space-y-4">
              <h2 className="text-base font-bold text-[#12302B] pb-3 border-b border-gray-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1F7A6E]">feed</span>
                البيانات الأساسية للمنتج
              </h2>

              <div>
                <label className="block text-xs font-bold text-[#12302B] mb-1.5">اسم المنتج الكامل</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] text-xs focus:bg-white focus:border-[#12302B]"
                  placeholder="مثال: عباءة حريرية مطرزة يدوياً"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#12302B] mb-1.5">التصنيف التجاري</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] text-xs focus:bg-white focus:border-[#12302B]"
                  >
                    <option value="abayas">عبايات خليجية ومطرزة</option>
                    <option value="dresses">فساتين سهرة ومناسبات</option>
                    <option value="shoes">أحذية نسائية راقية</option>
                    <option value="accessories">شالات وإكسسوارات</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#12302B] mb-1.5">رمز التخزين التعريفي (SKU)</label>
                  <input
                    type="text"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] text-xs font-mono focus:bg-white focus:border-[#12302B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12302B] mb-1.5">وصف المنتج وتفاصيل الخامة</label>
                <textarea
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] text-xs focus:bg-white focus:border-[#12302B]"
                ></textarea>
              </div>
            </div>

            {/* 2. Sizes & Inventory */}
            <div className="bg-white p-6 rounded-2xl border border-[#E1DACB] shadow-sm space-y-4">
              <h2 className="text-base font-bold text-[#12302B] pb-3 border-b border-gray-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1F7A6E]">straighten</span>
                المقاسات والألوان والمخزون
              </h2>

              <div>
                <label className="block text-xs font-bold text-[#12302B] mb-2">المقاسات المتوفرة بالمحل</label>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL', '37', '38', '39', '40'].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => toggleSize(sz)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        selectedSizes.includes(sz)
                          ? 'bg-[#12302B] text-white border-[#12302B]'
                          : 'bg-[#F6F3EC] text-gray-700 border-[#E1DACB] hover:bg-gray-200'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#12302B] mb-1.5">إجمالي الكمية المتوفرة بالمحل</label>
                  <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] text-xs font-bold"
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#12302B] mb-1.5">الألوان المتاحة</label>
                  <input
                    type="text"
                    value={selectedColors.join('، ')}
                    onChange={(e) => setSelectedColors(e.target.value.split('،'))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] text-xs"
                    placeholder="مثال: أسود، زيتي ملكي"
                  />
                </div>
              </div>

              {/* Size swap guarantee checkbox */}
              <label className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F6F3EC] border border-[#E1DACB] cursor-pointer">
                <input
                  type="checkbox"
                  checked={exchangeGuarantee}
                  onChange={(e) => setExchangeGuarantee(e.target.checked)}
                  className="mt-0.5 rounded text-[#1F7A6E] focus:ring-[#1F7A6E]"
                />
                <div className="text-xs">
                  <span className="font-bold text-[#12302B] block">ضمان استبدال المقاس خلال 24 ساعة (معتمد بتبادل)</span>
                  <span className="text-gray-500">ميزة تزيد ثقة المتسوقين وتمنح المنتج شارة "مقاس مضمون".</span>
                </div>
              </label>
            </div>

            {/* 3. Pricing & Points */}
            <div className="bg-white p-6 rounded-2xl border border-[#E1DACB] shadow-sm space-y-4">
              <h2 className="text-base font-bold text-[#12302B] pb-3 border-b border-gray-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E9B44C]">payments</span>
                التسعير وحوافز برنامج النقاط
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#12302B] mb-1.5">سعر البيع النهائي (₪)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E1DACB] text-sm font-bold pl-8"
                      min="1"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500">₪</span>
                  </div>
                </div>

                <div className="p-3 bg-amber-50/50 rounded-xl border border-[#E9B44C]/40 flex flex-col justify-center">
                  <span className="text-[11px] text-[#835400] font-bold block">كاش باك نقاط الزبون التلقائي (5%):</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-lg font-black text-[#835400]">+{pointsEarned}</span>
                    <span className="text-xs text-[#835400] font-bold">نقطة ولاء</span>
                  </div>
                  <span className="text-[10px] text-gray-500">حافز أساسي يجذب المتسوق لاختيار متجرك</span>
                </div>
              </div>

              <label className="flex items-center gap-2 text-xs font-bold text-[#12302B]">
                <input
                  type="checkbox"
                  checked={acceptsPoints}
                  onChange={(e) => setAcceptsPoints(e.target.checked)}
                  className="rounded text-[#1F7A6E]"
                />
                <span>قبول استبدال قسائم نقاط الولاء عند الشراء (المنصة تعوضك نقدياً عنها أسبوعياً)</span>
              </label>
            </div>
          </div>

          {/* Sidebar / Photo Upload (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-[#E1DACB] shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-[#12302B] pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1F7A6E]">add_photo_alternate</span>
                صور المنتج (Retina)
              </h3>

              <div className="border-2 border-dashed border-[#E1DACB] hover:border-[#1F7A6E] rounded-2xl p-6 text-center transition-all bg-[#F6F3EC] cursor-pointer">
                <span className="material-symbols-outlined text-3xl text-gray-400 block mb-2">cloud_upload</span>
                <span className="text-xs font-bold text-[#12302B] block">اسحب وأفلت الصور هنا</span>
                <span className="text-[10px] text-gray-500 block mt-1">أو تصفح جهازك (JPG, PNG بحد أقصى 5MB)</span>
              </div>

              {/* Preview Thumbnail */}
              <div className="rounded-xl border border-gray-200 overflow-hidden relative group">
                <img
                  src={editProduct?.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuDWO5D3-d3RBw-6-1qMa8jqBxFbR13IlmwMFbh7-jqpfTy3-toSn0ttO8RKMUGFYI5CtaN8O6DpNJDM_AohFzvrv6ZELCWV9J6cZCPUvm3MFFzHQv5TESQU7KJ0J7lf0BUUAVj_b6-bQakw_BztJN-3cNinhrIGVVyBmbwiBlb5rp2Z9GuH1Ptlnr91oQSqQGfda4AH6puUCWafDKXkoGRQGY4XCDPVVD5Fcn_G0t0e"}
                  alt="معاينة المنتج"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  الصورة الرئيسية
                </div>
              </div>
            </div>

            <div className="bg-[#12302B] text-white p-5 rounded-2xl shadow-md space-y-2 text-xs">
              <h4 className="font-bold text-[#E9B44C] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">auto_awesome</span>
                فحص جودة النشر الذكي
              </h4>
              <p className="text-white/80 leading-relaxed text-[11px]">
                سيتم فحص دقة الصور ووضوح الأسعار والتصنيف آلياً فور الضغط على نشر للتأكد من مطابقتها لمعايير الجودة لمتسوقي تبادل 2026.
              </p>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
