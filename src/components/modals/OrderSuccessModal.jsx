import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function OrderSuccessModal({ isOpen, orderDetails, onClose }) {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  if (!isOpen) return null;

  const handleFinish = (target = "/stores") => {
    clearCart();
    if (onClose) onClose();
    navigate(target);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-5 border-2 border-emerald-500">
        
        {/* Animated Celebration Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner animate-pulse">
          <span className="material-symbols-outlined text-4xl sm:text-5xl icon-fill">
            verified
          </span>
        </div>

        {/* Headline */}
        <div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            تم تسجيل الطلب وتأكيد الدفع بنجاح
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-primary mt-2">
            شكراً لطلبك من منصة تبادل!
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
            رقم العملية: <strong className="font-mono text-primary font-bold">#TRD-2026-GZ84</strong>
          </p>
        </div>

        {/* Secret 4-digit Delivery OTP Box */}
        <div className="bg-gradient-to-r from-primary to-[#1f7a6e] text-white p-4 sm:p-5 rounded-2xl shadow-md text-center space-y-1.5 relative overflow-hidden">
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#e9b44c] font-bold">
            <span className="material-symbols-outlined text-[16px] icon-fill">lock</span>
            <span>رمز الأمان السري للاستلام (OTP)</span>
          </div>
          <div className="text-3xl sm:text-4xl font-numeral-hero font-extrabold tracking-widest text-[#8df8bd] py-1 select-all">
            8 4 2 1
          </div>
          <p className="text-[11px] sm:text-xs text-white/90 leading-tight">
            لا تُسلّم هذا الكود لمندوب التوصيل إلا بعد فحص قطع الأزياء والتأكد من مطابقة المقاس والخامة 100%.
          </p>
        </div>

        {/* Financial & Pending Points Info */}
        <div className="bg-surface-container-low p-4 rounded-xl space-y-2 text-xs sm:text-sm text-right border border-outline-variant/40">
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant">المبلغ المدفوع (محفظة جوال باي):</span>
            <span className="font-bold text-primary font-numeral-hero">{orderDetails?.total || "323.00"} ₪</span>
          </div>
          <div className="flex justify-between items-center text-emerald-800 pt-1 border-t border-outline-variant/30">
            <span className="flex items-center gap-1 font-bold">
              <span className="material-symbols-outlined text-[16px] icon-fill">stars</span>
              <span>النقاط المكتسبة (المعلقة):</span>
            </span>
            <span className="font-black font-numeral-hero text-emerald-700">+1,615 نقطة</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={() => handleFinish("/stores")}
            className="w-full py-3 px-4 bg-primary hover:bg-primary-container text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
          >
            متابعة استكشاف المتاجر
          </button>
          <button
            type="button"
            onClick={() => handleFinish("/")}
            className="w-full py-3 px-4 bg-surface-container hover:bg-surface-container-high text-primary font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer border border-outline-variant/40"
          >
            العودة للرئيسية
          </button>
        </div>

      </div>
    </div>
  );
}
