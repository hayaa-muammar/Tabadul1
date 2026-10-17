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
    <article className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between text-right">
      <div>
        {/* Product Media */}
        <Link to={`/products/${product.id}`} className="block relative aspect-4/5 w-full bg-surface-container-low overflow-hidden">
          <img
            src={product.images ? product.images[0] : ""}
            alt={product.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 items-start">
            <span className="px-2 py-0.5 rounded-md bg-primary/90 text-white text-[10px] font-bold backdrop-blur-xs">
              {product.storeName}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-700 text-white text-[10px] font-bold">
              كاش باك 5%
            </span>
          </div>
        </Link>

        {/* Product Details */}
        <div className="p-4 space-y-2">
          <Link to={`/products/${product.id}`} className="block">
            <h3 className="font-bold text-sm sm:text-base text-primary group-hover:text-gaza-teal transition-colors line-clamp-1">
              {product.title}
            </h3>
          </Link>
          <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
            {product.subtitle || product.fabric}
          </p>

          {/* Pricing & Points */}
          <div className="pt-2 flex items-baseline justify-between">
            <div className="flex items-baseline gap-1 text-primary">
              <span className="font-numeral-hero font-extrabold text-xl sm:text-2xl">{product.price}</span>
              <span className="text-xs font-bold">₪</span>
              {product.originalPrice && (
                <span className="text-xs text-outline line-through mr-1.5 font-numeral-hero">{product.originalPrice} ₪</span>
              )}
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              +{product.pointsReward} نقطة
            </span>
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="p-4 pt-0">
        <button
          type="button"
          onClick={handleQuickAdd}
          className="w-full py-2.5 px-3 rounded-xl bg-surface-container-low hover:bg-primary hover:text-white text-primary text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer border border-outline-variant/40"
        >
          <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
          <span>إضافة سريعة للسلة</span>
        </button>
      </div>
    </article>
  );
}
