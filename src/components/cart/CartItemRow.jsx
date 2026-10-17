import React from 'react';
import { useCart } from '../../context/CartContext';

export default function CartItemRow({ item }) {
  const { updateQuantity, removeItem, showToast } = useCart();

  const handleWishlist = () => {
    removeItem(item.id);
    showToast("تم النقل للمفضلة", `تم حفظ ${item.title} في قائمة مفضلاتك.`);
  };

  return (
    <article className="bg-surface rounded-2xl p-4 sm:p-6 shadow-xs border border-outline-variant hover:border-primary-container/40 transition-all text-right">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
        
        {/* Product Media */}
        <div className="relative w-full sm:w-32 h-44 sm:h-32 rounded-xl overflow-hidden shrink-0 bg-surface-container-low border border-outline-variant">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
          <span className="absolute top-2 right-2 bg-primary/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
            {item.storeName}
          </span>
        </div>

        {/* Details & Controls */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-primary">
                  {item.title}
                </h3>
                
                {/* Attributes: Color, Size, Stock */}
                <div className="flex items-center gap-2 sm:gap-3 mt-1.5 flex-wrap text-xs text-on-surface-variant">
                  <span className="inline-flex items-center gap-1">
                    <span 
                      className="w-3 h-3 rounded-full border border-black/10 inline-block" 
                      style={{ backgroundColor: item.colorCode || "#E5D3B3" }}
                    />
                    <span>اللون: <strong className="text-on-surface">{item.color}</strong></span>
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span>المقاس: <strong className="text-primary px-1.5 py-0.5 bg-surface-container rounded">{item.size}</strong></span>
                  <span className="text-outline-variant">•</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-[13px]">inventory_2</span>
                    <span>متبقي {item.remainingStock || 4} قطع</span>
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="text-left shrink-0 mt-2 sm:mt-0">
                <div className="flex items-baseline gap-0.5 justify-end">
                  <span className="font-numeral-hero text-xl sm:text-2xl text-primary font-black">{item.price}</span>
                  <span className="text-xs font-bold text-on-surface-variant">₪</span>
                </div>
                <span className="block text-[11px] text-on-surface-variant text-left">للقطعة الواحدة</span>
              </div>
            </div>

            {/* Rewards Accrual Badge */}
            <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <span className="material-symbols-outlined text-sm text-emerald-600 icon-fill">award_star</span>
              <span>تكسبين {item.pointsReward * item.quantity} نقطة كاش باك</span>
            </div>
          </div>

          {/* Stepper & Action Controls */}
          <div className="flex items-center justify-between pt-4 mt-3 border-t border-outline-variant/60">
            {/* Quantity Stepper */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs text-on-surface-variant font-medium">الكمية:</span>
              <div className="flex items-center border border-outline-variant rounded-xl overflow-hidden bg-surface-container-lowest">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all cursor-pointer"
                  aria-label="إنقاص الكمية"
                >
                  <span className="material-symbols-outlined text-base">remove</span>
                </button>
                <span className="w-8 text-center font-bold text-xs sm:text-sm text-primary font-numeral-hero">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all cursor-pointer"
                  aria-label="زيادة الكمية"
                >
                  <span className="material-symbols-outlined text-base">add</span>
                </button>
              </div>
            </div>

            {/* Secondary Actions */}
            <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold">
              <button
                type="button"
                onClick={handleWishlist}
                className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors py-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">favorite</span>
                <span className="hidden sm:inline">نقل للمفضلة</span>
              </button>
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="flex items-center gap-1 text-error hover:text-error/80 transition-colors py-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">delete</span>
                <span>حذف</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
