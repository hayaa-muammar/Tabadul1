import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-[#12302b] text-white border-t border-[#1f7a6e]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand & Description */}
          <div className="md:col-span-5 space-y-3 text-right">
            <div className="flex items-center gap-3">
              <div className="h-9 flex items-center justify-center">
                <img
                  alt="شعار تبادل"
                  className="h-8 w-auto object-contain"
                  src="/logo.png"
                />
              </div>
              <span className="text-xl font-black text-[#e9b44c] tracking-tight">تبادل | Tabadul</span>
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
              المنصة والتطبيق الموحد لمكافآت وولاء متاجر قطاع غزة 2026. اجمع نقاط كاش باك 5% من أرقى محلات الأزياء والأحذية واستبدلها فورياً برقم جوالك بدون بطاقات.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-[#8df8bd]">
              <span className="w-2 h-2 rounded-full bg-[#8df8bd] animate-pulse"></span>
              <span>نظام مباشر ومحمي بتشفير مالي 256-bit</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation Links */}
          <div className="md:col-span-3 space-y-2.5 text-right">
            <h4 className="text-xs font-black text-[#e9b44c] tracking-wider uppercase">روابط المنصة</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/85">
              <li>
                <Link to="/" className="hover:text-[#e9b44c] transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/stores" className="hover:text-[#e9b44c] transition-colors">استكشاف المتاجر الشريكة</Link>
              </li>
              <li>
                <Link to="/stores/lamsa-boutique" className="hover:text-[#e9b44c] transition-colors">بوتيك لمسة للأزياء</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-[#e9b44c] transition-colors">سلة المشتريات وإتمام الطلب</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Merchants & Support */}
          <div className="md:col-span-4 space-y-2.5 text-right">
            <h4 className="text-xs font-black text-[#e9b44c] tracking-wider uppercase">بوابة الشركاء والدعم</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/85">
              <li>
                <Link to="/merchant/login" className="hover:text-[#e9b44c] transition-colors flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#e9b44c]">storefront</span>
                  <span>دخول لوحة تحكم التاجر</span>
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-[#e9b44c] transition-colors">إنشاء حساب متسوق جديد (+200 نقطة هدية)</Link>
              </li>
              <li>
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-[#e9b44c] transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-emerald-400">chat</span>
                  <span>الدعم الفني المباشر عبر واتساب</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70 text-center sm:text-right">
          <div>
            جميع الحقوق محفوظة © منصة تبادل لمكافآت المتاجر في غزة 2026
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="hover:text-white cursor-pointer">شروط الاستخدام</span>
            <span className="hover:text-white cursor-pointer">سياسة الخصوصية</span>
            <span className="hover:text-white cursor-pointer">الأسئلة الشائعة</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
