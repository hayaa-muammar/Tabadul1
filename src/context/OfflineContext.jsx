import React, { createContext, useContext, useState } from 'react';

const OfflineContext = createContext();

export function OfflineProvider({ children }) {
  const [isOffline, setIsOffline] = useState(false);

  const toggleOffline = () => {
    setIsOffline((prev) => !prev);
  };

  return (
    <OfflineContext.Provider value={{ isOffline, toggleOffline }}>
      {children}
    </OfflineContext.Provider>
  );
}

export function useOffline() {
  const context = useContext(OfflineContext);
  if (!context) {
    throw new Error("useOffline must be used within an OfflineProvider");
  }
  return context;
}
