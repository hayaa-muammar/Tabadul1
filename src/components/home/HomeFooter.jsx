import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeFooter({ onOpenPwaModal }) {
  return (
    <footer className="bg-[#12302b] text-white pt-16 pb-12 border-t border-[#e9b44c]/20 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-auto max-w-[140px] flex items-center p-1 rounded-lg">
                <img
                  alt="شعار تبادل"
                  className="h-full w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UzQQHoamC4yAS3SfYcwKKzuLsUQvju89zj2DorKREyzGtOhCHBGvsuOAgvSpv8FEadNFjncHuXs6zKVIPec3LRFLq1ROG7mjq7pS2_B8bUfq7hbY81mpeaYdWzSvg_HkLGyWxQ6g1cPBOWersB8WQQnMU5D49WBXWjB1YoXPARaWcDBplO2_aoDgdV-s3lFB7xo3jxg8yzv1UZUswrGr5rYof12WA288Ts53zmknZC9w"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white">تـبـادل | Tabadul</span>
                <span className="text-xs text-[#e9b44c] block font-bold">تسوّق بذكاء واكسب بولاء</span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              المنصة والتطبيق الموحد لمكافآت وولاء عملاء الأزياء، الملابس، العبايات، والأحذية في قطاع غزة 2026. نربط المتسوقين بأفضل متاجر البوتيك والموضة المحلية لتجربة تسوق مجزية ومستدامة.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[#e9b44c]">
              <span className="material-symbols-outlined text-sm">support_agent</span>
              <span className="text-xs font-bold text-white/90">دعم مباشر 24/7 عبر واتساب غزة: 0599000000</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-black text-[#e9b44c] mb-4">روابط سريعة</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a className="hover:text-white transition-colors" href="#hero">الرئيسية</a></li>
              <li><a className="hover:text-white transition-colors" href="#how-it-works">كيف يعمل النظام</a></li>
              <li><a className="hover:text-white transition-colors" href="#calculator">حاسبة النقاط والوفر</a></li>
              <li><Link className="hover:text-white transition-colors" to="/stores">شبكة المتاجر المعتمدة</Link></li>
              <li>
                <button
                  type="button"
                  className="hover:text-[#e9b44c] transition-colors text-right cursor-pointer"
                  onClick={onOpenPwaModal}
                >
                  تثبيت تطبيق PWA
                </button>
              </li>
            </ul>
          </div>

          {/* For Merchants */}
          <div>
            <h4 className="text-sm font-black text-[#e9b44c] mb-4">للتجار والشركاء</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a className="hover:text-white transition-colors" href="#merchant-signup">تجربة مجانية 14 يوماً</a></li>
              <li><a className="hover:text-white transition-colors" href="#smart-ai">المساعد الذكي للولاء</a></li>
              <li><a className="hover:text-white transition-colors" href="#merchants-section">مزايا شبكة تبادل</a></li>
              <li><a className="hover:text-white transition-colors" href="#merchants-section">سياسة التسويات الأسبوعية</a></li>
              <li><Link className="hover:text-white transition-colors" to="/merchant/login">لوحة تحكم التاجر</Link></li>
            </ul>
          </div>

          {/* Support & Terms */}
          <div>
            <h4 className="text-sm font-black text-[#e9b44c] mb-4">المساعدة والشروط</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a className="hover:text-white transition-colors" href="#faq">الأسئلة الشائعة</a></li>
              <li><a className="hover:text-white transition-colors" href="#faq">شروط الخدمة</a></li>
              <li><a className="hover:text-white transition-colors" href="#faq">سياسة الخصوصية</a></li>
              <li><a className="hover:text-white transition-colors" href="#faq">مركز حماية المتسوق</a></li>
              <li>
                <a
                  className="text-[#e9b44c] font-bold flex items-center gap-1 hover:underline"
                  href="https://wa.me/970599000000"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>تواصل عبر واتساب</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>
            © 2026 شبكة ومنصة تبادل للمكافآت والولاء. غزة، فلسطين. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-3 text-white/75">
            <span>صُمم خصيصاً لمجتمع وتجار قطاع غزة</span>
            <span>•</span>
            <span className="text-[#e9b44c] font-bold">النسخة الهجينة (Web &amp; PWA)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
