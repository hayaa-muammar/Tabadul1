import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { usePoints } from '../../context/PointsContext';

export default function BillSummaryCard({ onCheckout = null, buttonText = null }) {
  const navigate = useNavigate();
  const { subtotal, itemCount } = useCart();
  const { isRedeemed, discountAmount } = usePoints();

  const finalTotal = Math.max(0, subtotal - discountAmount);
  const earnedCashbackPoints = Math.round(finalTotal * 5); // 5% cashback = 10 pts per 1 NIS spent

  const handleProceed = () => {
    if (onCheckout) {
      onCheckout();
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="bg-surface rounded-2xl p-5 sm:p-6 shadow-xs border border-outline-variant space-y-5 text-right">
      <h3 className="font-bold text-base sm:text-lg text-primary pb-3 border-b border-outline-variant">
        ملخص الحساب المالي
      </h3>

      {/* Breakdown Line Items */}
      <div className="space-y-3 text-xs sm:text-sm">
        {/* Subtotal */}
        <div className="flex items-center justify-between text-on-surface-variant">
          <span>مجموع المنتجات ({itemCount} قطع)</span>
          <span className="font-bold text-on-surface font-numeral-hero text-sm sm:text-base">
            {subtotal.toFixed(2)} ₪
          </span>
        </div>

        {/* Shipping */}
        <div className="flex items-center justify-between text-on-surface-variant">
          <span className="flex items-center gap-1">
            <span>رسوم التوصيل المنزلي السريع</span>
            <span className="material-symbols-outlined text-xs text-outline" title="شحن مجاني للشروات فوق 200 ₪">
              help_outline
            </span>
          </span>
          <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded text-xs">
            مجاناً (يتحملها المتجر)
          </span>
        </div>

        {/* Points Discount (conditional) */}
        {isRedeemed && (
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50 border border-amber-200">
            <span className="flex items-center gap-1.5 text-amber-900 font-bold text-xs sm:text-sm">
              <span className="material-symbols-outlined text-base text-amber-600 icon-fill">stars</span>
              <span>خصم استبدال نقاط تبادل</span>
            </span>
            <span className="font-extrabold text-amber-900 font-numeral-hero text-sm sm:text-base">
              -{discountAmount.toFixed(2)} ₪
            </span>
          </div>
        )}
      </div>

      {/* Net Final Total */}
      <div className="pt-4 border-t-2 border-dashed border-outline-variant">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="font-extrabold text-base sm:text-lg text-primary block">
              الإجمالي النهائي
            </span>
            <span className="text-[11px] text-on-surface-variant">شامل الضريبة وكافة الرسوم</span>
          </div>
          <div className="text-left">
            <span className="font-numeral-hero text-2xl sm:text-3xl font-black text-primary">
              {finalTotal.toFixed(2)}
            </span>
            <span className="text-xs sm:text-sm font-bold text-primary mr-1">₪</span>
          </div>
        </div>
      </div>

      {/* Cash-back Accrual Notice */}
      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2 text-xs text-emerald-900">
        <span className="material-symbols-outlined text-emerald-700 text-lg shrink-0 icon-fill">
          add_circle
        </span>
        <p className="leading-relaxed">
          <strong>كاش باك هذه العملية:</strong> ستكتسبين <strong className="text-emerald-800 font-bold">+{earnedCashbackPoints} نقطة جديدة</strong> تضاف لمحفظتك فور تأكيد الاستلام برمز OTP.
        </p>
      </div>

      {/* Primary Action Button */}
      <button
        type="button"
        onClick={handleProceed}
        className="w-full h-13 sm:h-14 bg-primary hover:bg-primary-container text-white rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer group"
      >
        <span>{buttonText || `متابعة لإتمام الطلب والدفع الآمن (${finalTotal.toFixed(2)} ₪)`}</span>
        <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-1">
          arrow_forward
        </span>
      </button>

      {/* Escrow Subtext */}
      <div className="pt-1 text-center">
        <div className="flex items-center justify-center gap-1.5 text-on-surface-variant text-[11px] font-medium">
          <span className="material-symbols-outlined text-amber-600 text-sm icon-fill">lock</span>
          <span>مدفوعاتك محجوزة بالأمانة حتى فحص المقاس واستلام القطع</span>
        </div>
      </div>
    </div>
  );
}
