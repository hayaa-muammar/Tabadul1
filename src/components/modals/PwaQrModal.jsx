import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { usePoints } from '../../context/PointsContext';

export default function PwaQrModal({ isOpen, onClose }) {
  const { user } = useAuth();
  const { pointsBalance } = usePoints();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl text-center space-y-4 border-2 border-[#12302b]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="إغلاق النافذة"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Header */}
        <div className="pt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1f7a6e]/10 text-[#1f7a6e] text-xs font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#1f7a6e] animate-pulse"></span>
            <span>جاهز للاستخدام دون إنترنت ⚡</span>
          </span>
          <h3 className="text-xl font-black text-[#12302b]">باركود الدفع والاستبدال المباشر</h3>
          <p className="text-xs text-gray-500 mt-1">امسح الكود عند كاشير أي متجر معتمد</p>
        </div>

        {/* QR Code Graphic Mockup */}
        <div className="p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-[#12302b]/20 flex flex-col items-center justify-center">
          <div className="w-48 h-48 bg-white p-2 rounded-xl shadow-sm border border-gray-200 flex items-center justify-center relative">
            {/* Visual SVG QR representation */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#12302b]">
              <path fill="currentColor" d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z M22,22 h6 v6 h-6 z" />
              <path fill="currentColor" d="M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z M72,22 h6 v6 h-6 z" />
              <path fill="currentColor" d="M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z M22,72 h6 v6 h-6 z" />
              <rect x="50" y="15" width="5" height="15" fill="currentColor" />
              <rect x="60" y="50" width="10" height="10" fill="currentColor" />
              <rect x="75" y="60" width="15" height="10" fill="currentColor" />
              <rect x="50" y="75" width="20" height="15" fill="currentColor" />
              <rect x="75" y="80" width="15" height="10" fill="currentColor" />
              <rect x="50" y="60" width="5" height="10" fill="currentColor" />
              <circle cx="50" cy="50" r="6" fill="#e9b44c" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[10px] font-black bg-[#12302b] text-[#e9b44c] px-1.5 py-0.5 rounded shadow">
                تبادل
              </span>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-gray-700 mt-2 dir-ltr">
            ID: {user.phone || "059-9123456"}
          </span>
        </div>

        {/* User Balances */}
        <div className="bg-[#f6f3ec] p-3 rounded-xl flex items-center justify-between text-xs">
          <div className="text-right">
            <span className="text-gray-500 block text-[10px]">الرصيد المتاح:</span>
            <span className="font-extrabold text-primary text-sm font-numeral-hero">{pointsBalance.toLocaleString()} نقطة</span>
          </div>
          <div className="text-left">
            <span className="text-gray-500 block text-[10px]">قيمة الخصم المباشر:</span>
            <span className="font-extrabold text-[#e9b44c] text-sm">{(pointsBalance / 200).toFixed(2)} ₪ كاش</span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={onClose}
          className="w-full py-3 bg-[#12302b] text-white rounded-xl font-bold text-sm hover:bg-[#1f3a5f] transition-all cursor-pointer active:scale-95 shadow-md"
        >
          تم، إغلاق الباركود
        </button>
      </div>
    </div>
  );
}
