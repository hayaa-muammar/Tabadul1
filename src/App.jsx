import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import LoginPage from './pages/auth/LoginPage';
import MerchantLogin from './pages/merchant/MerchantLogin';
import MerchantVerifyOTP from './pages/merchant/MerchantVerifyOTP';
import CustomerLogin from './pages/customer/CustomerLogin';
import CustomerVerifyOTP from './pages/customer/CustomerVerifyOTP';
import ResetPassword from './pages/auth/ResetPassword';
import CustomerRegister from './pages/customer/CustomerRegister';
import CustomerOTPError from './pages/customer/CustomerOTPError';
import MerchantOTPError from './pages/merchant/MerchantOTPError';
import CustomerHomePage from './pages/customer/CustomerHomePage';
import CustomerStorePage from './pages/customer/CustomerStorePage';
import ProductDetailsPage from './pages/customer/ProductDetailsPage';
import CustomerCartPage from './pages/customer/CustomerCartPage';
import CustomerCheckoutPage from './pages/customer/CustomerCheckoutPage';
import MerchantRegister from './pages/merchant/MerchantRegister';
import InfoPage from './pages/info/InfoPage';
function App() {
  return (
    <Routes>

      {/* الصفحة الرئيسية */}
      <Route
        path="/"
        element={<HomePage />}
      />

      {/* تسجيل الدخول */}
      <Route
        path="/login"
        element={<LoginPage />}
      />

      {/* تسجيل دخول المتسوق */}
      <Route
        path="/customer/login"
        element={<CustomerLogin />}
      />

      {/* التحقق من رقم جوال المتسوق */}
      <Route
        path="/customer/verify-otp"
        element={<CustomerVerifyOTP />}
      />

      {/* تسجيل دخول التاجر */}
      <Route
        path="/merchant/login"
        element={<MerchantLogin />}
      />

      {/* التحقق من بيانات التاجر */}
      <Route
        path="/merchant/verify-otp"
        element={<MerchantVerifyOTP />}
      />

      {/* استعادة كلمة المرور للمتسوق */}
      <Route
        path="/customer/reset-password"
        element={<ResetPassword />}
      />

      {/* استعادة كلمة المرور للتاجر */}
      <Route
        path="/merchant/reset-password"
        element={<ResetPassword />}
      />
<Route
  path="/customer/register"
  element={<CustomerRegister />}
/>
      {/* تسجيل التاجر */}
      <Route
        path="/merchant/register"
        element={<MerchantRegister />}
      />
<Route
  path="/customer/otp-error"
  element={<CustomerOTPError />}
/>
<Route
  path="/merchant/otp-error"
  element={<MerchantOTPError />}
/>
<Route
  path="/customer/home"
  element={<CustomerHomePage />}
/>
<Route
  path="/stores"
  element={<Navigate to="/customer/home" replace />}
/>
<Route
  path="/rewards"
  element={<Navigate to="/customer/home" replace />}
/>
<Route
  path="/terms"
  element={<InfoPage />}
/>
<Route
  path="/privacy"
  element={<InfoPage />}
/>
<Route
  path="/help"
  element={<InfoPage />}
/>
<Route
  path="/faq"
  element={<InfoPage />}
/>
<Route
  path="/customer/store"
  element={<CustomerStorePage />}
/>
<Route
  path="/customer/product/:id"
  element={<ProductDetailsPage />}
/>
<Route
  path="/customer/cart"
  element={<CustomerCartPage />}
/>
<Route
  path="/cart"
  element={<Navigate to="/customer/cart" replace />}
/>
<Route
  path="/customer/checkout"
  element={<CustomerCheckoutPage />}
/>
<Route
  path="/checkout"
  element={<Navigate to="/customer/checkout" replace />}
/>
<Route
  path="/customer/order-confirmation"
  element={<CustomerCheckoutPage />}
/>
      {/* أي مسار غير معروف */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>
  );
}

export default App;