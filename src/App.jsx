import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { PointsProvider } from './context/PointsContext';
import { OfflineProvider } from './context/OfflineContext';

// Pages mapped strictly to original HTML files (1 - 19)
import HomePage from './pages/HomePage'; // 2code.html
import StoresDirectoryPage from './pages/StoresDirectoryPage'; // 11code.html
import StoreDetailPage from './pages/StoreDetailPage'; // 12code.html
import ProductDetailPage from './pages/ProductDetailPage'; // 13code.html
import CartPage from './pages/CartPage'; // 14code.html (authenticated) & 16code.html (guest banner)
import CheckoutPage from './pages/CheckoutPage'; // 17code.html & 18code.html
import PaymentAlertPage from './pages/PaymentAlertPage'; // 19code.html

// Auth Pages (1 - 19)
import ShopperLoginPage from './pages/auth/ShopperLoginPage'; // 1code.html & 3code.html
import ShopperRegisterPage from './pages/auth/ShopperRegisterPage'; // 8code.html
import ShopperOtpVerificationPage from './pages/auth/ShopperOtpVerificationPage'; // 4code.html
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'; // 7code.html
import ResetPasswordPage from './pages/auth/ResetPasswordPage'; // 9code.html
import MerchantLoginPage from './pages/auth/MerchantLoginPage'; // 5code.html & 1code.html
import MerchantOtpVerificationPage from './pages/auth/MerchantOtpVerificationPage'; // 1code.html & 6code.html
import OtpErrorStatePage from './pages/auth/OtpErrorStatePage'; // 10code.html

// Bundle 1: Updated Payment Interfaces (23, 24, 25, 26, 27)
import WalletCheckoutPage from './pages/payment/WalletCheckoutPage'; // 23 اختيار محفظةcode.html
import PaymentOtpPage from './pages/payment/PaymentOtpPage'; // 24 رمز تاكيد الدفعcode.html
import PaymentOtpErrorPage from './pages/payment/PaymentOtpErrorPage'; // غلط رمز التجقق25code.html
import InsufficientBalancePage from './pages/payment/InsufficientBalancePage'; // رصيد غير كاف26code.html
import InsufficientFundsErrorPage from './pages/payment/InsufficientFundsErrorPage'; // 27خطا الدفع بسبب الرصيد غير كافcode.html

// Bundle 2: Customer Hub Interfaces (28, 30, 31, 32, 33, 34, 35, 37, 39, 40, 41)
import CustomerOrdersPage from './pages/customer/CustomerOrdersPage'; // 28 طلباتيcode.html
import OrderDetailPage from './pages/customer/OrderDetailPage'; // 30 صفحة الطلب نفسهcode.html
import ConfirmDeliveryPage from './pages/customer/ConfirmDeliveryPage'; // تاكيد استلام الطلب 31code.html
import PointsClaimedPage from './pages/customer/PointsClaimedPage'; // 32 محفظة انو نقاط وصلتcode.html
import RequestExchangePage from './pages/customer/RequestExchangePage'; // 33 طلب تغيير مقاسcode.html
import CancelOrderPage from './pages/customer/CancelOrderPage'; // 34 صفحة الغاء الطلبcode.html
import ExchangeApprovedPage from './pages/customer/ExchangeApprovedPage'; // 35 اعتماد طلب تبديلcode.html
import OrderCancelledSuccessPage from './pages/customer/OrderCancelledSuccessPage'; // 37 صفحة تاكيد الغاء الطلبcode.html
import CustomerProfilePage from './pages/customer/CustomerProfilePage'; // 39 صفجة شخصية للزبونcode.html
import CustomerWalletPage from './pages/customer/CustomerWalletPage'; // 40 محفظة شاملةcode.html
import CustomerDashboardPage from './pages/customer/CustomerDashboardPage'; // 41 الرئيسية للزبونcode.html
import ShopperLogoutConfirmationPage from './pages/customer/ShopperLogoutConfirmationPage'; // تأكيد تسجيل الخروج للمتسوق
import ShopperLogoutSuccessPage from './pages/customer/ShopperLogoutSuccessPage'; // تم تسجيل الخروج بنجاح للمتسوق

// Bundle 3: Merchant Onboarding & Application States (42, 43, 44, 45, 46, 47, 48, 49, 50)
import StoreInfoStepPage from './pages/merchant/onboarding/StoreInfoStepPage'; // صفحة تانية بعد تحقق بيانات المتجر لتاجر 42code.html
import StoreBrandingStepPage from './pages/merchant/onboarding/StoreBrandingStepPage'; // 43 خطوة ثالثة شعار ووصف المتجرcode.html
import DeliveryFeesStepPage from './pages/merchant/onboarding/DeliveryFeesStepPage'; // والرسوم والتوصيل44 code.html
import PayoutInfoStepPage from './pages/merchant/onboarding/PayoutInfoStepPage'; // 45 المستحقات والتحويل الماليcode.html
import ReviewSubmitStepPage from './pages/merchant/onboarding/ReviewSubmitStepPage'; // 46 المراجعة والاعتمادcode.html
import ApplicationUnderReviewPage from './pages/merchant/onboarding/ApplicationUnderReviewPage'; // 47 حالة الطلب قيد التدقيق والمراجعةcode.html
import ApplicationApprovedPage from './pages/merchant/onboarding/ApplicationApprovedPage'; // 48 حالة الطلب مقبولcode.html
import ApplicationNeedsRevisionPage from './pages/merchant/onboarding/ApplicationNeedsRevisionPage'; // 49 طلب قيد تعديلcode.html
import ApplicationRejectedPage from './pages/merchant/onboarding/ApplicationRejectedPage'; // 50 طلب مرفوضcode.html

// Bundle 4: Merchant Portal & Management Interfaces (52, 53, 54, 55, 56, 57, 58, 59, 63, 64, 65, 66, 70, 71, 72, 73, 75)
import MerchantOrdersPage from './pages/merchant/portal/MerchantOrdersPage'; // 52الطلبات لتاجرcode.html
import MerchantLandingPage from './pages/merchant/portal/MerchantLandingPage'; // الهبوط لتاجر 53code.html
import MerchantProductsPage from './pages/merchant/portal/MerchantProductsPage'; // المنتجات54code.html
import MerchantWalletPage from './pages/merchant/portal/MerchantWalletPage'; // محفظة والتحويلات55code.html
import AddProductPage from './pages/merchant/portal/AddProductPage'; // اضافة منتج56code.html
import ProductAddedSuccessPage from './pages/merchant/portal/ProductAddedSuccessPage'; // تم اضافة منتج بنجاح57code.html
import ProductDraftSavedPage from './pages/merchant/portal/ProductDraftSavedPage'; // حفظ كمسودة58code.html
import WithdrawFundsPage from './pages/merchant/portal/WithdrawFundsPage'; // سحب نقود59 code.html
import WithdrawSuccessPage from './pages/merchant/portal/WithdrawSuccessPage'; // 63 تم السحب بنجاحcode.html
import WithdrawFailedPage from './pages/merchant/portal/WithdrawFailedPage'; // تعذر سحب المبلغ64code.html
import TransferHistoryPage from './pages/merchant/portal/TransferHistoryPage'; // 65 سجل التحويلات السابقةcode.html
import DisbursementVoucherPage from './pages/merchant/portal/DisbursementVoucherPage'; // 66  سند الصرف الماليcode.html
import CreateOfferPage from './pages/merchant/portal/CreateOfferPage'; // 70 انشاء عرضcode.html
import ManageOffersPage from './pages/merchant/portal/ManageOffersPage'; // 71 ادارة العروضcode.html
import OfferPublishedSuccessPage from './pages/merchant/portal/OfferPublishedSuccessPage'; // 72 نشر اعرض بنجاحcode.html
import MerchantDashboardPage from './pages/merchant/portal/MerchantDashboardPage'; // الرئيسة اتاجر73code.html
import MerchantReportsPage from './pages/merchant/portal/MerchantReportsPage'; // 75 التقاريرcode.html
import MerchantSubscriptionPage from './pages/merchant/portal/MerchantSubscriptionPage'; // M-16 باقات الاشتراك وترقية المتجر
import MerchantReviewsPage from './pages/merchant/portal/MerchantReviewsPage'; // M-13 إدارة تقييمات المتجر وتجارب الزبائن
import MerchantHelpPage from './pages/merchant/portal/MerchantHelpPage'; // M-12 مركز مساعدة ودعم المتاجر الشريكة
import MerchantSettingsPage from './pages/merchant/portal/MerchantSettingsPage'; // M-15 إعدادات المتجر والملف التجاري
import MerchantProfilePage from './pages/merchant/portal/MerchantProfilePage'; // M-09 الملف الشخصي وحساب التاجر
import MerchantEditProfilePage from './pages/merchant/portal/MerchantEditProfilePage'; // M-10 تعديل البيانات الشخصية للتاجر
import CreateTicketPage from './pages/merchant/portal/CreateTicketPage'; // M-12 إنشاء وتأكيد تذكرة دعم فني جديدة
import ConfirmSubscriptionPage from './pages/merchant/portal/ConfirmSubscriptionPage'; // تأكيد الاشتراك في باقة التاجر المميز Pro
import MerchantLogoutConfirmationPage from './pages/merchant/portal/MerchantLogoutConfirmationPage'; // تأكيد تسجيل الخروج لتاجر
import MerchantLogoutSuccessPage from './pages/merchant/portal/MerchantLogoutSuccessPage'; // تم تسجيل الخروج بنجاح

// Admin Sovereign Portal Interfaces (A-01, A-02, A-03, A-04 Security & Operations)
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminTwoFactorPage from './pages/admin/AdminTwoFactorPage';
import AdminSecurityLockoutPage from './pages/admin/AdminSecurityLockoutPage';
import AdminLoginErrorPage from './pages/admin/AdminLoginErrorPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminMerchantApplicationsPage from './pages/admin/AdminMerchantApplicationsPage';
import AdminApplicationDetailPage from './pages/admin/AdminApplicationDetailPage';
import AdminCustomersPage from './pages/admin/AdminCustomersPage'; // A-08 إدارة العملاء
import AdminMerchantsPage from './pages/admin/AdminMerchantsPage'; // A-06 قائمة التجار المعتمدين
import AdminMerchantDetailPage from './pages/admin/AdminMerchantDetailPage'; // A-07 تفاصيل التاجر
import AdminLedgerPage from './pages/admin/AdminLedgerPage'; // A-09 الدفتر المالي والتسويات
import AdminTransfersPage from './pages/admin/AdminTransfersPage'; // A-10 التحويلات وجدولة التجار
import AdminDisputesPage from './pages/admin/AdminDisputesPage'; // A-11 العمليات المتنازع عليها
import AdminComplaintsPage from './pages/admin/AdminComplaintsPage'; // A-12 الشكاوى وفض النزاعات
import AdminComplaintDetailPage from './pages/admin/AdminComplaintDetailPage'; // A-13 تفاصيل الشكوى والتحكيم
import AdminProductsPage from './pages/admin/AdminProductsPage'; // A-14 العروض والمنتجات
import AdminReportsPage from './pages/admin/AdminReportsPage'; // A-15 التقارير ومؤشرات الأداء
import AdminRulesPage from './pages/admin/AdminRulesPage'; // A-16 قواعد النقاط والإعدادات
import AdminRolesPage from './pages/admin/AdminRolesPage'; // A-17 الأدوار والصلاحيات
import AdminAuditLogPage from './pages/admin/AdminAuditLogPage'; // A-18 سجل الإجراءات والتدقيق
import AdminReviewsPage from './pages/admin/AdminReviewsPage'; // A-19 التقييمات وضبط المحتوى
import AdminPackagesPage from './pages/admin/AdminPackagesPage'; // A-20 الباقات والاشتراكات

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <PointsProvider>
            <OfflineProvider>
              <Routes>
                {/* ========================================================
                    Original Completed Interfaces (1 - 19) - Preserved Intact
                    ======================================================== */}
                {/* 2code.html: Home Landing Page */}
                <Route path="/" element={<HomePage />} />

                {/* 11code.html: Stores Directory */}
                <Route path="/stores" element={<StoresDirectoryPage />} />

                {/* 12code.html: Store Profile & Catalog */}
                <Route path="/stores/:storeId" element={<StoreDetailPage />} />

                {/* 13code.html: Product Detail View */}
                <Route path="/products/:productId" element={<ProductDetailPage />} />

                {/* 14code.html & 16code.html: Cart (Authenticated & Guest modes) */}
                <Route path="/cart" element={<CartPage />} />

                {/* 17code.html & 18code.html: Checkout & Escrow Payment */}
                <Route path="/checkout" element={<CheckoutPage />} />

                {/* 19code.html: Payment Insufficient Balance Alert */}
                <Route path="/payment-alert" element={<PaymentAlertPage />} />

                {/* 3code.html & 1code.html: Customer / Shopper Login */}
                <Route path="/login" element={<ShopperLoginPage />} />
                <Route path="/shopper/login" element={<ShopperLoginPage />} />

                {/* 8code.html: Customer / Shopper Registration */}
                <Route path="/register" element={<ShopperRegisterPage />} />
                <Route path="/shopper/register" element={<ShopperRegisterPage />} />

                {/* 4code.html: Shopper OTP Verification */}
                <Route path="/verify-otp" element={<ShopperOtpVerificationPage />} />
                <Route path="/shopper/otp" element={<ShopperOtpVerificationPage />} />

                {/* 7code.html: Forgot Password */}
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />

                {/* 9code.html: Reset Password */}
                <Route path="/reset-password" element={<ResetPasswordPage />} />

                {/* 5code.html & 1code.html: Merchant Login Portal */}
                <Route path="/merchant/login" element={<MerchantLoginPage />} />

                {/* 1code.html & 6code.html: Merchant OTP Verification */}
                <Route path="/merchant/otp" element={<MerchantOtpVerificationPage />} />
                <Route path="/merchant/verify-otp" element={<MerchantOtpVerificationPage />} />

                {/* 10code.html: Merchant OTP Error State */}
                <Route path="/merchant/otp-error" element={<OtpErrorStatePage />} />

                {/* ========================================================
                    Bundle 1: Updated Payment Process (Files 23, 24, 25, 26, 27)
                    ======================================================== */}
                <Route path="/checkout/wallet" element={<WalletCheckoutPage />} />
                <Route path="/payment/wallet" element={<WalletCheckoutPage />} />
                <Route path="/checkout/otp" element={<PaymentOtpPage />} />
                <Route path="/payment/otp" element={<PaymentOtpPage />} />
                <Route path="/checkout/otp-error" element={<PaymentOtpErrorPage />} />
                <Route path="/payment/otp-error" element={<PaymentOtpErrorPage />} />
                <Route path="/checkout/insufficient-balance" element={<InsufficientBalancePage />} />
                <Route path="/payment/insufficient-balance" element={<InsufficientBalancePage />} />
                <Route path="/checkout/payment-failed" element={<InsufficientFundsErrorPage />} />
                <Route path="/payment/failed" element={<InsufficientFundsErrorPage />} />
                <Route path="/payment/payment-failed" element={<InsufficientFundsErrorPage />} />

                {/* ========================================================
                    Bundle 2: Customer Hub & Orders (Files 28, 30, 31, 32, 33, 34, 35, 37, 39, 40, 41)
                    ======================================================== */}
                <Route path="/customer/orders" element={<CustomerOrdersPage />} />
                <Route path="/orders" element={<CustomerOrdersPage />} />
                <Route path="/customer/orders/:orderId" element={<OrderDetailPage />} />
                <Route path="/orders/:orderId" element={<OrderDetailPage />} />
                <Route path="/customer/orders/:orderId/confirm-delivery" element={<ConfirmDeliveryPage />} />
                <Route path="/orders/:orderId/confirm-delivery" element={<ConfirmDeliveryPage />} />
                <Route path="/customer/points-claimed" element={<PointsClaimedPage />} />
                <Route path="/customer/orders/:orderId/exchange" element={<RequestExchangePage />} />
                <Route path="/orders/:orderId/exchange" element={<RequestExchangePage />} />
                <Route path="/customer/orders/:orderId/cancel" element={<CancelOrderPage />} />
                <Route path="/orders/:orderId/cancel" element={<CancelOrderPage />} />
                <Route path="/customer/orders/:orderId/exchange-approved" element={<ExchangeApprovedPage />} />
                <Route path="/orders/:orderId/exchange-approved" element={<ExchangeApprovedPage />} />
                <Route path="/customer/orders/:orderId/cancelled-success" element={<OrderCancelledSuccessPage />} />
                <Route path="/customer/orders/:orderId/cancel-success" element={<OrderCancelledSuccessPage />} />
                <Route path="/orders/:orderId/cancelled-success" element={<OrderCancelledSuccessPage />} />
                <Route path="/orders/:orderId/cancel-success" element={<OrderCancelledSuccessPage />} />
                <Route path="/customer/profile" element={<CustomerProfilePage />} />
                <Route path="/customer/wallet" element={<CustomerWalletPage />} />
                <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
                <Route path="/shopper" element={<CustomerDashboardPage />} />
                <Route path="/shopper/dashboard" element={<CustomerDashboardPage />} />
                <Route path="/shopper-landing" element={<CustomerDashboardPage />} />
                <Route path="/shopper/rewards" element={<CustomerDashboardPage />} />
                <Route path="/customer/logout" element={<ShopperLogoutConfirmationPage />} />
                <Route path="/shopper/logout" element={<ShopperLogoutConfirmationPage />} />
                <Route path="/logout" element={<ShopperLogoutConfirmationPage />} />
                <Route path="/customer/logout/success" element={<ShopperLogoutSuccessPage />} />
                <Route path="/shopper/logout/success" element={<ShopperLogoutSuccessPage />} />
                <Route path="/shopper/logged-out" element={<ShopperLogoutSuccessPage />} />
                <Route path="/logout/success" element={<ShopperLogoutSuccessPage />} />

                {/* ========================================================
                    Bundle 3: Merchant Onboarding & Statuses (Files 42, 43, 44, 45, 46, 47, 48, 49, 50)
                    ======================================================== */}
                <Route path="/merchant/onboarding/store-info" element={<StoreInfoStepPage />} />
                <Route path="/merchant/onboarding/branding" element={<StoreBrandingStepPage />} />
                <Route path="/merchant/onboarding/delivery" element={<DeliveryFeesStepPage />} />
                <Route path="/merchant/onboarding/delivery-fees" element={<DeliveryFeesStepPage />} />
                <Route path="/merchant/onboarding/payouts" element={<PayoutInfoStepPage />} />
                <Route path="/merchant/onboarding/review" element={<ReviewSubmitStepPage />} />
                <Route path="/merchant/application/under-review" element={<ApplicationUnderReviewPage />} />
                <Route path="/merchant/application/approved" element={<ApplicationApprovedPage />} />
                <Route path="/merchant/application/needs-revision" element={<ApplicationNeedsRevisionPage />} />
                <Route path="/merchant/application/rejected" element={<ApplicationRejectedPage />} />

                {/* ========================================================
                    Bundle 4: Merchant Portal (Files 52, 53, 54, 55, 56, 57, 58, 59, 63, 64, 65, 66, 70, 71, 72, 73, 75)
                    ======================================================== */}
                <Route path="/merchant" element={<MerchantDashboardPage />} />
                <Route path="/merchant/dashboard" element={<MerchantDashboardPage />} />
                <Route path="/merchant/landing" element={<MerchantLandingPage />} />
                <Route path="/merchants" element={<MerchantLandingPage />} />
                <Route path="/merchant-landing" element={<MerchantLandingPage />} />
                <Route path="/merchant/join" element={<MerchantLandingPage />} />
                <Route path="/merchant/orders" element={<MerchantOrdersPage />} />
                <Route path="/merchant/products" element={<MerchantProductsPage />} />
                <Route path="/merchant/products/add" element={<AddProductPage />} />
                <Route path="/merchant/products/published" element={<ProductAddedSuccessPage />} />
                <Route path="/merchant/products/draft" element={<ProductDraftSavedPage />} />
                <Route path="/merchant/wallet" element={<MerchantWalletPage />} />
                <Route path="/merchant/wallet/withdraw" element={<WithdrawFundsPage />} />
                <Route path="/merchant/wallet/withdraw/success" element={<WithdrawSuccessPage />} />
                <Route path="/merchant/wallet/withdraw/failed" element={<WithdrawFailedPage />} />
                <Route path="/merchant/wallet/transfers" element={<TransferHistoryPage />} />
                <Route path="/merchant/wallet/disbursement-voucher" element={<DisbursementVoucherPage />} />
                <Route path="/merchant/offers" element={<ManageOffersPage />} />
                <Route path="/merchant/offers/create" element={<CreateOfferPage />} />
                <Route path="/merchant/offers/published" element={<OfferPublishedSuccessPage />} />
                <Route path="/merchant/reports" element={<MerchantReportsPage />} />
                <Route path="/merchant/subscription" element={<MerchantSubscriptionPage />} />
                <Route path="/merchant/plans" element={<MerchantSubscriptionPage />} />
                <Route path="/merchant/upgrade" element={<MerchantSubscriptionPage />} />
                <Route path="/merchant/reviews" element={<MerchantReviewsPage />} />
                <Route path="/merchant/ratings" element={<MerchantReviewsPage />} />
                <Route path="/merchant/feedback" element={<MerchantReviewsPage />} />
                <Route path="/merchant/help" element={<MerchantHelpPage />} />
                <Route path="/merchant/help/new-ticket" element={<CreateTicketPage />} />
                <Route path="/merchant/logout" element={<MerchantLogoutConfirmationPage />} />
                <Route path="/merchant/logout-confirm" element={<MerchantLogoutConfirmationPage />} />
                <Route path="/merchant/logout/success" element={<MerchantLogoutSuccessPage />} />
                <Route path="/merchant/logged-out" element={<MerchantLogoutSuccessPage />} />
                <Route path="/merchant/tickets/create" element={<CreateTicketPage />} />
                <Route path="/merchant/subscription/checkout" element={<ConfirmSubscriptionPage />} />
                <Route path="/merchant/subscription/confirm" element={<ConfirmSubscriptionPage />} />
                <Route path="/merchant/plans/pro" element={<ConfirmSubscriptionPage />} />
                <Route path="/merchant/support" element={<MerchantHelpPage />} />
                <Route path="/merchant/tickets" element={<MerchantHelpPage />} />
                <Route path="/merchant/settings" element={<MerchantSettingsPage />} />
                <Route path="/merchant/profile" element={<MerchantProfilePage />} />
                <Route path="/merchant/profile/edit" element={<MerchantEditProfilePage />} />
                <Route path="/merchant/edit-profile" element={<MerchantEditProfilePage />} />
                <Route path="/merchant/personal-info" element={<MerchantEditProfilePage />} />
                <Route path="/merchant/store-settings" element={<MerchantSettingsPage />} />

                {/* ========================================================
                    Admin Sovereign Portal & Security (A-01, A-02, A-03, A-04 Operations)
                    ======================================================== */}
                <Route path="/admin" element={<AdminLoginPage />} />
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route path="/admin/login-error" element={<AdminLoginErrorPage />} />
                <Route path="/admin/2fa" element={<AdminTwoFactorPage />} />
                <Route path="/admin/verify-2fa" element={<AdminTwoFactorPage />} />
                <Route path="/admin/two-factor" element={<AdminTwoFactorPage />} />
                <Route path="/admin/lockout" element={<AdminSecurityLockoutPage />} />
                <Route path="/admin/security-lockout" element={<AdminSecurityLockoutPage />} />
                <Route path="/admin/rate-limit" element={<AdminSecurityLockoutPage />} />
                <Route path="/admin/locked" element={<AdminSecurityLockoutPage />} />
                <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
                <Route path="/admin/operations" element={<AdminDashboardPage />} />
                <Route path="/admin/applications" element={<AdminMerchantApplicationsPage />} />
                <Route path="/admin/applications/:id" element={<AdminApplicationDetailPage />} />
                <Route path="/admin/applications/review" element={<AdminApplicationDetailPage />} />
                <Route path="/admin/applications/REQ-2026-0842" element={<AdminApplicationDetailPage />} />
                <Route path="/admin/review-application" element={<AdminApplicationDetailPage />} />

                {/* A-06: Approved Merchants Directory */}
                <Route path="/admin/merchants" element={<AdminMerchantsPage />} />
                <Route path="/admin/stores" element={<AdminMerchantsPage />} />

                {/* A-07: Merchant Details Dossier & Suspension Control */}
                <Route path="/admin/merchants/:id" element={<AdminMerchantDetailPage />} />
                <Route path="/admin/merchant-detail" element={<AdminMerchantDetailPage />} />

                {/* A-08: Customers Accounts & Inspection */}
                <Route path="/admin/customers" element={<AdminCustomersPage />} />
                <Route path="/admin/clients" element={<AdminCustomersPage />} />

                {/* A-09: Financial Ledger & Double-Entry Accounting */}
                <Route path="/admin/ledger" element={<AdminLedgerPage />} />
                <Route path="/admin/settlements" element={<AdminLedgerPage />} />

                {/* A-10: Merchant Transfers & Payout Scheduling */}
                <Route path="/admin/transfers" element={<AdminTransfersPage />} />
                <Route path="/admin/payouts" element={<AdminTransfersPage />} />

                {/* A-11: Disputed Operations & Financial Arbitration */}
                <Route path="/admin/disputes" element={<AdminDisputesPage />} />

                {/* A-12: Complaints & Dispute Resolution Hub */}
                <Route path="/admin/complaints" element={<AdminComplaintsPage />} />

                {/* A-13: Complaint Details & Case Arbitration Dossier */}
                <Route path="/admin/complaints/:id" element={<AdminComplaintDetailPage />} />

                {/* A-14: Offers & Products Moderation */}
                <Route path="/admin/products" element={<AdminProductsPage />} />
                <Route path="/admin/ads" element={<AdminProductsPage />} />

                {/* A-15: Performance Reports & Analytics */}
                <Route path="/admin/reports" element={<AdminReportsPage />} />
                <Route path="/admin/analytics" element={<AdminReportsPage />} />

                {/* A-16: Points Tokenomics & General Platform Settings */}
                <Route path="/admin/rules" element={<AdminRulesPage />} />
                <Route path="/admin/settings" element={<AdminRulesPage />} />

                {/* A-17: Governance Roles & Single Admin Permissions */}
                <Route path="/admin/roles" element={<AdminRolesPage />} />
                <Route path="/admin/permissions" element={<AdminRolesPage />} />

                {/* A-18: WORM Immutable Audit Log & Regulatory Compliance */}
                <Route path="/admin/audit-log" element={<AdminAuditLogPage />} />
                <Route path="/admin/audit" element={<AdminAuditLogPage />} />

                {/* A-19: Customer Reviews & Content Integrity Moderation */}
                <Route path="/admin/reviews" element={<AdminReviewsPage />} />

                {/* A-20: VIP Pro Packages & Subscriptions Management */}
                <Route path="/admin/packages" element={<AdminPackagesPage />} />
                <Route path="/admin/plans" element={<AdminPackagesPage />} />

                {/* General Policy and Help Aliases */}
                <Route path="/terms" element={<MerchantHelpPage />} />
                <Route path="/privacy" element={<MerchantHelpPage />} />

                {/* Fallback to Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </OfflineProvider>
          </PointsProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
