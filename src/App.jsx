import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { PointsProvider } from './context/PointsContext';
import { OfflineProvider } from './context/OfflineContext';

// Pages mapped strictly to original HTML files
import HomePage from './pages/HomePage'; // 2code.html
import StoresDirectoryPage from './pages/StoresDirectoryPage'; // 11code.html
import StoreDetailPage from './pages/StoreDetailPage'; // 12code.html
import ProductDetailPage from './pages/ProductDetailPage'; // 13code.html
import CartPage from './pages/CartPage'; // 14code.html (authenticated) & 16code.html (guest banner)
import CheckoutPage from './pages/CheckoutPage'; // 17code.html & 18code.html
import PaymentAlertPage from './pages/PaymentAlertPage'; // 19code.html

// Auth Pages
import ShopperLoginPage from './pages/auth/ShopperLoginPage'; // 1code.html & 3code.html
import ShopperRegisterPage from './pages/auth/ShopperRegisterPage'; // 8code.html
import ShopperOtpVerificationPage from './pages/auth/ShopperOtpVerificationPage'; // 4code.html
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'; // 7code.html
import ResetPasswordPage from './pages/auth/ResetPasswordPage'; // 9code.html
import MerchantLoginPage from './pages/auth/MerchantLoginPage'; // 5code.html & 1code.html
import MerchantOtpVerificationPage from './pages/auth/MerchantOtpVerificationPage'; // 1code.html & 6code.html
import OtpErrorStatePage from './pages/auth/OtpErrorStatePage'; // 10code.html

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <PointsProvider>
            <OfflineProvider>
              <Routes>
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
