import React from 'react';
import { useLocation } from 'react-router-dom';
import CustomerHeader from './CustomerHeader';
import MerchantHeader from './MerchantHeader';
import SpecializedHeader from './SpecializedHeader';

export { CustomerHeader, MerchantHeader, SpecializedHeader };

export default function Header({ variant, customSubtitle, customTitle }) {
  const location = useLocation();

  // Explicit or route-based determination
  if (variant === 'merchant' || location.pathname.startsWith('/merchant')) {
    return <MerchantHeader />;
  }

  if (variant === 'checkout' || location.pathname === '/checkout') {
    return <SpecializedHeader variant="checkout" customTitle={customTitle || customSubtitle} />;
  }

  if (
    variant === 'auth' ||
    [
      '/login',
      '/shopper/login',
      '/register',
      '/shopper/register',
      '/verify-otp',
      '/shopper/otp',
      '/forgot-password',
      '/reset-password'
    ].includes(location.pathname)
  ) {
    return <SpecializedHeader variant="auth" customTitle={customTitle || customSubtitle} />;
  }

  // Default to persistent Customer Header for all shopper & catalog pages
  return <CustomerHeader />;
}
