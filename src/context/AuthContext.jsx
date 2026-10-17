import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Default logged-in shopper matching Sarah Ahmad in the original HTML mockups
  const [user, setUser] = useState({
    id: "usr-sarah-2026",
    name: "سارة أحمد",
    firstName: "سارة",
    phone: "059-9123456",
    role: "shopper",
    tier: "المستوى الذهبي",
    tierCode: "VIP",
    points: 2400,
    walletBalance: 12.00,
    address: "شارع النصر الرئيسي، بجوار مجمع النخيل الطبي، عمارة الأمل، الطابق الثالث",
    city: "غزة",
    isGuest: false
  });

  const loginAsShopper = (customPhone = "059-9123456", customName = "سارة أحمد") => {
    setUser({
      id: "usr-sarah-2026",
      name: customName,
      firstName: customName.split(' ')[0] || "سارة",
      phone: customPhone,
      role: "shopper",
      tier: "المستوى الذهبي",
      tierCode: "VIP",
      points: 2400,
      walletBalance: 12.00,
      address: "شارع النصر الرئيسي، بجوار مجمع النخيل الطبي، عمارة الأمل، الطابق الثالث",
      city: "غزة",
      isGuest: false
    });
  };

  const loginAsMerchant = (storePhone = "059-8342190", storeName = "بوتيك لمسة للأزياء") => {
    setUser({
      id: "m-lamsa-2026",
      name: storeName,
      firstName: "التاجر",
      phone: storePhone,
      role: "merchant",
      tier: "شريك مميز Pro",
      points: 48500,
      walletBalance: 485.00,
      isGuest: false
    });
  };

  const setGuestMode = () => {
    setUser({
      id: null,
      name: "متسوق غير مسجل",
      firstName: "زائر",
      phone: "",
      role: "guest",
      tier: "غير مسجل",
      points: 0,
      walletBalance: 0,
      isGuest: true
    });
  };

  const logout = () => {
    setGuestMode();
  };

  return (
    <AuthContext.Provider value={{ user, loginAsShopper, loginAsMerchant, setGuestMode, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
