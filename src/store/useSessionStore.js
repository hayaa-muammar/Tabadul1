import { create } from 'zustand';

/**
 * Minimal shared client session store for UI state coordination.
 * Note: Real authentication and financial authorization require backend integration.
 */
export const useSessionStore = create((set) => ({
  role:
    typeof window !== 'undefined'
      ? sessionStorage.getItem('accountRole') || 'public'
      : 'public',
  identifier:
    typeof window !== 'undefined'
      ? sessionStorage.getItem('customerPhone') ||
        sessionStorage.getItem('merchantIdentifier') ||
        ''
      : '',
  otpChannel:
    typeof window !== 'undefined'
      ? sessionStorage.getItem('customerOtpMethod') ||
        sessionStorage.getItem('merchantOtpChannel') ||
        'whatsapp'
      : 'whatsapp',

  setSession: ({ role, identifier, otpChannel }) => {
    if (typeof window !== 'undefined') {
      if (role) sessionStorage.setItem('accountRole', role);
      if (identifier) {
        if (role === 'customer') {
          sessionStorage.setItem('customerPhone', identifier);
        } else if (role === 'merchant') {
          sessionStorage.setItem('merchantIdentifier', identifier);
        }
      }
      if (otpChannel) {
        if (role === 'customer') {
          sessionStorage.setItem('customerOtpMethod', otpChannel);
        } else if (role === 'merchant') {
          sessionStorage.setItem('merchantOtpChannel', otpChannel);
        }
      }
    }
    set((state) => ({
      role: role ?? state.role,
      identifier: identifier ?? state.identifier,
      otpChannel: otpChannel ?? state.otpChannel,
    }));
  },

  clearSession: () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('accountRole');
      sessionStorage.removeItem('customerPhone');
      sessionStorage.removeItem('customerOtpMethod');
      sessionStorage.removeItem('merchantIdentifier');
      sessionStorage.removeItem('merchantOtpChannel');
      sessionStorage.removeItem('merchantLoginMode');
    }
    set({ role: 'public', identifier: '', otpChannel: 'whatsapp' });
  },
}));
