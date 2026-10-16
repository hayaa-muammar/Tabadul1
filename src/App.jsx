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
        element={<Navigate to="/login" replace />}
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
  path="/customer/store"
  element={<CustomerStorePage />}
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