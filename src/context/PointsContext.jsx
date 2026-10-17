import React, { createContext, useContext, useState } from 'react';

const PointsContext = createContext();

export function PointsProvider({ children }) {
  const [pointsBalance, setPointsBalance] = useState(2400); // Sarah's 2,400 points
  const [isRedeemed, setIsRedeemed] = useState(true); // Default checked as in 14code.html

  // 2,400 points = 12.00 NIS discount (200 pts = 1 NIS)
  const discountAmount = isRedeemed ? 12.00 : 0.00;

  const toggleRedemption = () => {
    setIsRedeemed((prev) => !prev);
  };

  const addPoints = (amount) => {
    setPointsBalance((prev) => prev + amount);
  };

  return (
    <PointsContext.Provider
      value={{
        pointsBalance,
        isRedeemed,
        discountAmount,
        toggleRedemption,
        addPoints
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
