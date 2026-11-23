import React, { createContext, useContext, useState } from 'react';

const PointsContext = createContext();

export function PointsProvider({ children }) {
  const [pointsBalance, setPointsBalance] = useState(3000); // Sarah's 3,000 points
  const [isRedeemed, setIsRedeemed] = useState(true);

  // 3,000 points = 15.00 NIS discount (200 pts = 1 NIS)
  const discountAmount = isRedeemed ? 15.00 : 0.00;

  const toggleRedemption = () => {
    setIsRedeemed((prev) => !prev);
  };

  const addPoints = (amount) => {
    setPointsBalance((prev) => prev + amount);
  };

  const redeemPoints = (cost) => {
    setPointsBalance((prev) => Math.max(0, prev - cost));
  };

  return (
    <PointsContext.Provider
      value={{
        pointsBalance,
        isRedeemed,
        discountAmount,
        toggleRedemption,
        addPoints,
        redeemPoints
      }}
    >
      {children}
    </PointsContext.Provider>
  );
}

export function usePoints() {
  const context = useContext(PointsContext);
  if (!context) {
    throw new Error("usePoints must be used within a PointsProvider");
  }
  return context;
}
