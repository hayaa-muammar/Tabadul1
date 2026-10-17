import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BackButton from '../components/common/BackButton';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CartItemRow from '../components/cart/CartItemRow';
import PointsWalletCard from '../components/cart/PointsWalletCard';
import BillSummaryCard from '../components/cart/BillSummaryCard';
import GuaranteesCard from '../components/cart/GuaranteesCard';
import GuestAlertBanner from '../components/cart/GuestAlertBanner';
import ToastNotification from '../components/common/ToastNotification';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function CartPage() {
  const { items, itemCount } = useCart();
  const { user, loginAsShopper, setGuestMode } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  // Support URL-based guest mode toggle (?guest=true)
  useEffect(() => {
    if (searchParams.get('guest') === 'true' && !user.isGuest) {
      setGuestMode();
    }
  }, [searchParams, user.isGuest, setGuestMode]);

  const toggleUserRole = () => {
    if (user.isGuest) {
      loginAsShopper();
      setSearchParams({});
    } else {
      setGuestMode();
      setSearchParams({ guest: 'true' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f3ec] text-on-surface text-right">
      <Header />
      <ToastNotification />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Navigation Breadcrumbs & Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant/30 pb-3">
          <Breadcrumbs
            items={[
              { label: "استكشاف المتاجر", to: "/stores" },
              { label: "بوتيك لمسة للأزياء", to: "/stores/lamsa-boutique" },
              { label: "سلة المشتريات" }
            ]}
          />
          <div className="flex items-center gap-3">
            {/* Quick Demo Switcher Button */}
            <button
              type="button"
              onClick={toggleUserRole}
              className="text-xs font-bold px-3 py-1.5 rounded-xl border border-primary/30 text-primary bg-white hover:bg-surface-container transition-all cursor-pointer shadow-xs"
              title="التبديل بين تجربة المتسوق المسجل والزائر غير المسجل"
            >
              {user.isGuest ? "تبديل إلى: متسوق مسجل (سارة)" : "تبديل إلى: متسوق غير مسجل (Guest)"}
            </button>
            <BackButton label="متابعة التسوق" fallbackRoute="/stores/lamsa-boutique" />
          </div>
        </div>

        {/* Guest Warning Banner (if guest mode) */}
        {user.isGuest && <GuestAlertBanner />}

        {/* Empty Cart State */}
        {items.length === 0 ? (
          <div className="bg-surface-container-lowest rounded-3xl p-10 sm:p-14 text-center space-y-4 border border-outline-variant">
            <div className="w-16 h-16 rounded-full bg-surface-container-low text-outline flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">shopping_cart_off</span>
            </div>
            <h2 className="text-xl font-bold text-primary">سلة المشتريات فارغة</h2>
            <p className="text-sm text-on-surface-variant max-w-sm mx-auto">
              لم تقومي بإضافة أي قطع إلى سلتك حتى الآن. استكشفي أحدث فساتين السهرة والأحذية في شبكة تبادل.
            </p>
            <div className="pt-2">
              <Link
                to="/stores"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-container transition-all shadow-sm"
              >
                <span>تصفح المتاجر والبوتيكات</span>
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              </Link>
            </div>
          </div>
        ) : (
          /* 2-Column Cart Layout (8 cols items + 4 cols bill summary) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Right Column: Items List & Guarantees (7-8 cols) */}
            <section className="lg:col-span-7 xl:col-span-8 space-y-5">
              
              {/* Cart Header Card */}
              <div className="bg-surface rounded-2xl p-5 sm:p-6 shadow-xs border border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-black text-primary">سلة المشتريات</h1>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                      {itemCount} قطع
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                    القطع المختارة من <strong className="text-primary font-bold">بوتيك لمسة للأزياء الراقية</strong>
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold self-start sm:self-auto">
                  <span className="material-symbols-outlined text-base icon-fill text-emerald-600">shield</span>
                  <span>تسليم مباشر مضمون</span>
                </div>
              </div>

              {/* Items Rows */}
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItemRow key={item.id} item={item} />
                ))}
              </div>

              {/* Continue Shopping Direct Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-surface rounded-2xl border border-dashed border-outline-variant hover:border-primary transition-colors">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gaza-teal text-2xl">storefront</span>
                  <div>
                    <p className="font-bold text-xs sm:text-sm text-primary">هل ترغبين في استكمال إطلالتك؟</p>
                    <p className="text-[11px] sm:text-xs text-on-surface-variant">تصفحي تشكيلة الحقائب والإكسسوارات الفاخرة المكملة لدى بوتيك لمسة.</p>
                  </div>
                </div>
                <Link
                  to="/stores/lamsa-boutique"
                  className="px-4 py-2 rounded-xl text-primary font-bold text-xs border border-primary hover:bg-primary hover:text-white transition-all text-center shrink-0"
                >
                  متابعة التسوق من المتجر
                </Link>
              </div>

              {/* Guarantees */}
              <GuaranteesCard />
            </section>

            {/* Left Column: Points Wallet & Bill Summary (4-5 cols) */}
            <aside className="lg:col-span-5 xl:col-span-4 space-y-5 lg:sticky lg:top-24">
              
              {/* Points Wallet Card (if Registered user) */}
              {!user.isGuest ? (
                <PointsWalletCard />
              ) : (
                <div className="bg-surface rounded-2xl p-5 border border-outline-variant text-right space-y-2">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                    <span className="material-symbols-outlined text-xl">lock</span>
                    <span>استبدال النقاط مقفل حالياً</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    تسجيل الدخول يتيح لك تطبيق رصيد نقاطك لخصم فوري يصل إلى 12 ₪ من هذه الطلبية.
                  </p>
                  <Link
                    to="/login"
                    className="inline-block text-xs font-bold text-primary underline pt-1"
                  >
                    تسجيل الدخول لتفعيل الخصم ➔
                  </Link>
                </div>
              )}

              {/* Bill Financial Summary */}
              <BillSummaryCard />
            </aside>

          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
