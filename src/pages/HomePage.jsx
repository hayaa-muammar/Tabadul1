import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import OfflineAlertBanner from '../components/common/OfflineAlertBanner';
import HeroSection from '../components/home/HeroSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import PointsCalculator from '../components/home/PointsCalculator';
import FeaturedStoresPreview from '../components/home/FeaturedStoresPreview';
import MerchantPartnerSection from '../components/home/MerchantPartnerSection';
import FaqAccordion from '../components/home/FaqAccordion';
import PwaQrModal from '../components/modals/PwaQrModal';
import StoreQuickViewModal from '../components/modals/StoreQuickViewModal';
import ToastNotification from '../components/common/ToastNotification';

export default function HomePage() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-on-surface">
      <OfflineAlertBanner />
      <Header />
      <ToastNotification />

      <main className="flex-1">
        <HeroSection onOpenQr={() => setIsQrModalOpen(true)} />
        <HowItWorksSection />
        <PointsCalculator />
        <FeaturedStoresPreview onOpenModal={(store) => setSelectedStore(store)} />
        <MerchantPartnerSection />
        <FaqAccordion />
      </main>

      <Footer />

      {/* Modals */}
      <PwaQrModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
      <StoreQuickViewModal
        store={selectedStore}
        isOpen={!!selectedStore}
        onClose={() => setSelectedStore(null)}
      />
    </div>
  );
}
