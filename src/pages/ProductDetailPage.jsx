import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BackButton from '../components/common/BackButton';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ProductGallery from '../components/catalog/ProductGallery';
import ToastNotification from '../components/common/ToastNotification';
import { productsData } from '../data/productsData';
import { useCart } from '../context/CartContext';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  // Lookup product by ID or fallback to the champagne silk dress
  const product = productsData.find((p) => p.id === productId) || productsData[0];

  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0].name : "");
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : "");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    addItem(product, selectedColor, selectedSize, quantity);
  };

  const handleBuyNow = () => {
    addItem(product, selectedColor, selectedSize, quantity);
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-on-surface text-right">
      <Header />
      <ToastNotification />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Navigation Breadcrumbs & Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3">
          <Breadcrumbs
            items={[
              { label: "استكشاف المتاجر", to: "/stores" },
              { label: product.storeName, to: `/stores/${product.storeId}` },
              { label: product.title }
            ]}
          />
          <BackButton label={`العودة لـ ${product.storeName}`} fallbackRoute={`/stores/${product.storeId}`} />
        </div>

        {/* 2-Column Product Main Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Gallery Column (6 cols) */}
          <div className="lg:col-span-6">
            <ProductGallery images={product.images} title={product.title} />
          </div>

          {/* Details & Purchasing Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-xs">
            
            {/* Header / Store Tag */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Link
                  to={`/stores/${product.storeId}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gaza-teal bg-gaza-teal/10 px-3 py-1 rounded-full hover:underline"
                >
                  <span className="material-symbols-outlined text-[15px]">storefront</span>
                  <span>{product.storeName}</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsWishlisted((prev) => !prev)}
                  className={`p-2 rounded-full border transition-all cursor-pointer ${
                    isWishlisted 
                      ? 'border-error/40 bg-error-container/20 text-error' 
                      : 'border-outline-variant text-outline hover:text-error'
                  }`}
                  aria-label="إضافة للمفضلة"
                >
                  <span className={`material-symbols-outlined text-[20px] ${isWishlisted ? 'icon-fill' : ''}`}>
                    favorite
                  </span>
                </button>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-primary leading-tight">
                {product.title}
              </h1>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {product.subtitle}
              </p>

              {/* Rating & Stock */}
              <div className="flex items-center gap-4 text-xs pt-1">
                <div className="flex items-center gap-1 font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  <span className="material-symbols-outlined text-[14px] text-amber-500 icon-fill">star</span>
                  <span>{product.rating}</span>
                  <span className="text-gray-400 font-normal">({product.reviewsCount} تقييم)</span>
                </div>
                <span>•</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">check_circle</span>
                  <span>متوفر للتسليم الفوري ({product.remainingStock} قطع فقط)</span>
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-1.5">
              <div className="flex items-baseline gap-2">
                <span className="font-numeral-hero text-3xl sm:text-4xl font-black text-primary">
                  {product.price}
                </span>
                <span className="text-base font-bold text-primary">شيكل</span>
                {product.originalPrice && (
                  <span className="text-sm text-outline line-through font-numeral-hero mr-2">
                    {product.originalPrice} ₪
                  </span>
                )}
              </div>

              {/* Points Accrual Callout */}
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 pt-1">
                <span className="material-symbols-outlined text-[18px] text-emerald-600 icon-fill">redeem</span>
                <span>تكسبين فوراً +{product.pointsReward} نقطة ولاء (كاش باك 5% بقيمة {product.cashbackShekels} ₪)</span>
              </div>
            </div>

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-on-surface block">
                  اللون المختار: <strong className="text-primary">{selectedColor}</strong>
                </span>
                <div className="flex items-center gap-3">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 p-1.5 pr-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        selectedColor === c.name 
                          ? 'border-gaza-teal bg-gaza-teal/5 ring-2 ring-gaza-teal/20 text-gaza-teal' 
                          : 'border-outline-variant hover:border-outline text-on-surface'
                      }`}
                    >
                      <span 
                        className="w-4 h-4 rounded-full border border-black/20" 
                        style={{ backgroundColor: c.code }} 
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-on-surface">
                    المقاس: <strong className="text-primary">{selectedSize}</strong>
                  </span>
                  <span className="text-gaza-teal font-medium cursor-pointer hover:underline">
                    دليل المقاسات
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {product.sizes.map((s, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`min-w-[48px] h-11 px-3 rounded-xl font-bold text-xs sm:text-sm border transition-all cursor-pointer ${
                        selectedSize === s 
                          ? 'bg-primary text-white border-primary shadow-xs' 
                          : 'bg-surface-container-low text-on-surface border-outline-variant hover:bg-surface-container'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-on-surface block">الكمية:</span>
              <div className="inline-flex items-center border border-outline-variant rounded-xl overflow-hidden bg-surface-container-low">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-on-surface hover:bg-surface-container cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-base">remove</span>
                </button>
                <span className="w-12 text-center font-bold text-base text-primary font-numeral-hero">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-on-surface hover:bg-surface-container cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-base">add</span>
                </button>
              </div>
            </div>

            {/* Action Buttons: Add to Cart & Buy Now */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full h-13 sm:h-14 bg-primary hover:bg-primary-container text-white rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">shopping_bag</span>
                <span>إضافة إلى سلة المشتريات</span>
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full h-12 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                <span className="material-symbols-outlined text-xl">bolt</span>
                <span>شراء فوري مع كود الأمان OTP</span>
              </button>
            </div>

            {/* Guarantee Callout */}
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-950">
              <span className="material-symbols-outlined text-amber-700 text-lg shrink-0 icon-fill">shield</span>
              <p className="leading-relaxed">
                <strong>ضمان تبادل الذهبي:</strong> قيسي الفستان في بيتك مع خدمة استبدال المقاس مجاناً خلال 24 ساعة، ودفع محمي بالأمانة حتى استلامك للقطعة والتأكد منها.
              </p>
            </div>

          </div>
        </div>

        {/* Specifications & Fabric Care Accordion */}
        <section className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-xs space-y-4">
          <h2 className="font-bold text-base sm:text-lg text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-gaza-teal">info</span>
            <span>تفاصيل ومواصفات القطعة والعناية بها</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-on-surface-variant">
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
              <strong className="text-primary block">تركيب القماش والخامات:</strong>
              <p>{product.fabric}</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-1">
              <strong className="text-primary block">إرشادات الغسيل والعناية:</strong>
              <p>{product.careInstructions}</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
