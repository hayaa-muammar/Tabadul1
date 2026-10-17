import React, { useState } from 'react';
import HomeHeader from '../components/home/HomeHeader';
import HeroSection from '../components/home/HeroSection';
import PwaCapabilitiesBar from '../components/home/PwaCapabilitiesBar';
import HowItWorksSection from '../components/home/HowItWorksSection';
import PointsCalculator from '../components/home/PointsCalculator';
import FeaturedStoresPreview from '../components/home/FeaturedStoresPreview';
import MerchantPartnerSection from '../components/home/MerchantPartnerSection';
import SmartRetentionSection from '../components/home/SmartRetentionSection';
import FaqAccordion from '../components/home/FaqAccordion';
import HomeFooter from '../components/home/HomeFooter';
import MobileBottomNav from '../components/home/MobileBottomNav';
import PwaQrModal from '../components/modals/PwaQrModal';
import ToastNotification from '../components/common/ToastNotification';

export default function HomePage() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f3ec] text-[#12302b] antialiased selection:bg-[#e9b44c] selection:text-[#12302b] pb-20 md:pb-0 font-tajawal">
      <ToastNotification />

      {/* 1. TOP HEADER (PLATFORM & APP NAVIGATION) */}
      <HomeHeader />

      <main className="flex-1">
        {/* 2. HYBRID HERO */}
        <HeroSection />

        {/* 3. PWA & WEB HYBRID CAPABILITIES BAR */}
        <PwaCapabilitiesBar />

        {/* 4. HOW IT WORKS (FOR SHOPPERS & MERCHANTS) */}
        <HowItWorksSection />

        {/* 5. INTERACTIVE POINTS & CASHBACK CALCULATOR */}
        <PointsCalculator />

        {/* 6. FEATURED GAZA PARTNER STORES NETWORK */}
        <FeaturedStoresPreview />

        {/* 7. MERCHANT PORTAL & REGISTRATION */}
        <MerchantPartnerSection />

        {/* 8. SMART RETENTION & AUTOMATED LOYALTY TOOLS */}
        <SmartRetentionSection />

        {/* 9. FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <FaqAccordion />
      </main>

      {/* 10. FOOTER */}
      <HomeFooter onOpenPwaModal={() => setIsQrModalOpen(true)} />

      {/* 11. MOBILE DOCKED BOTTOM APP NAVIGATION */}
      <MobileBottomNav />

      {/* 12. PWA INSTALL MODAL & SMART BOTTOM SHEET */}
      <PwaQrModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
    </div>
  );
}
