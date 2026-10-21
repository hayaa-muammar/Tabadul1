import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.colors ? product.colors[0].name : "Standard", product.sizes ? product.sizes[0] : "Standard", 1);
  };

  return (
    <article className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between text-right h-full">
      <div className="flex flex-col flex-1">
        {/* Product Media - Compact, proportional, non-cropping container */}
        <Link 
          to={`/products/${product.id}`} 
          className="block relative w-full h-48 sm:h-52 md:h-56 lg:h-60 bg-[#f8f6f0] overflow-hidden flex items-center justify-center p-3"
        >
          <img
            src={product.images ? product.images[0] : ""}
            alt={product.title}
            className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-2.5 right-2.5 flex flex-col gap-1 items-start z-10 pointer-events-none">
            <span className="px-2 py-0.5 rounded-md bg-primary/90 text-white text-[10px] font-bold backdrop-blur-xs shadow-xs">
              {product.storeName}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-700 text-white text-[10px] font-bold shadow-xs">
              كاش باك 5%
            </span>
          </div>
        </Link>

        {/* Product Details - Compact & Aligned */}
        <div className="p-3.5 sm:p-4 space-y-1.5 sm:space-y-2 flex-1 flex flex-col justify-between">
          <div>
            <Link to={`/products/${product.id}`} className="block">
              <h3 className="font-bold text-xs sm:text-sm text-primary group-hover:text-gaza-teal transition-colors line-clamp-1 leading-snug">
                {product.title}
              </h3>
            </Link>
            <p className="text-[11px] sm:text-xs text-on-surface-variant line-clamp-1 leading-relaxed mt-1">
              {product.subtitle || product.fabric}
            </p>
          </div>

          {/* Pricing & Points */}
          <div className="pt-2 flex items-baseline justify-between gap-1">
            <div className="flex items-baseline gap-1 text-primary">
              <span className="font-numeral-hero font-extrabold text-lg sm:text-xl leading-none">{product.price}</span>
              <span className="text-xs font-bold">₪</span>
              {product.originalPrice && (
                <span className="text-[11px] text-outline line-through mr-1 font-numeral-hero">{product.originalPrice} ₪</span>
              )}
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 shrink-0">
              +{product.pointsReward} نقطة
            </span>
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="p-3.5 sm:p-4 pt-0">
        <button
          type="button"
          onClick={handleQuickAdd}
          className="w-full py-2 px-3 rounded-xl bg-surface-container-low hover:bg-primary hover:text-white text-primary text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer border border-outline-variant/40"
        >
          <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
          <span>إضافة سريعة للسلة</span>
        </button>
      </div>
    </article>
  );
}
