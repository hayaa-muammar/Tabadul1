import React from 'react';
import { Link } from 'react-router-dom';
import InteractivePhoneMockup from './InteractivePhoneMockup';
import StatsTicker from './StatsTicker';

export default function HeroSection({ onOpenQr }) {
  return (
    <section className="relative pt-8 pb-14 md:py-20 overflow-hidden bg-gradient-to-b from-[#f6f3ec] via-white to-[#f6f3ec] text-right" id="hero">
      {/* Ambient background glows */}
      <div className="absolute -top-24 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#e9b44c]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#1f7a6e]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Right Column: Web Platform Value Proposition (7 cols) */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12302b]/5 border border-[#12302b]/10 text-xs sm:text-sm font-bold text-[#12302b]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1f7a6e] animate-ping" />
            <span>منصة ويب متكاملة + تطبيق جوال خفيف (PWA) لقطاع غزة 2026</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#12302b] leading-[1.25]">
            منصة وتطبيق تبادل... <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#1f7a6e] via-[#1f3a5f] to-[#e9b44c]">
              نقاطك وكاش باك مشترياتك في كل متجر بغزة!
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#52606d] leading-relaxed max-w-2xl font-normal">
            محفظة رقمية موحدة تجمع مشترياتك من مئات متاجر وبوتيكات الأزياء، العبايات، ملابس الأطفال، والأحذية في غزة على إنستغرام وواتساب. بدون بطاقات بلاستيكية ولا تطبيقات ثقيلة: <strong className="text-[#12302b] font-bold">رقم جوالك هو محفظتك</strong>، تستبدل نقاطك بخصم فوري كاش عند الاستلام أو بجوال باي.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#12302b] text-white font-bold text-xs sm:text-sm md:text-base shadow-lg hover:bg-[#1f3a5f] active:scale-95 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#e9b44c] icon-fill">shopping_bag</span>
              <span>ابدأ واكسب 200 نقطة هدية</span>
            </Link>

            <Link
              to="/merchant/login"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white border-2 border-[#12302b]/20 hover:border-[#12302b] text-[#12302b] font-bold text-xs sm:text-sm md:text-base shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#1f7a6e]">storefront</span>
              <span>انضم كمتجر شريك</span>
            </Link>
          </div>

          {/* Trust Metrics Bar */}
          <StatsTicker />
        </div>

        {/* Left Column: Interactive Mobile PWA Mockup Frame (5 cols) */}
        <div className="lg:col-span-5 flex justify-center pt-4 lg:pt-0">
          <InteractivePhoneMockup onOpenQr={onOpenQr} />
        </div>

      </div>
    </section>
  );
}
