import React, { createContext, useContext, useState } from 'react';
import { productsData } from '../data/productsData';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Pre-loaded items matching 14code.html and 16code.html
  const [items, setItems] = useState([
    {
      id: "champagne-silk-dress",
      title: "فستان حرير شامبين راقي للسهرة والمناسبات",
      storeName: "بوتيك لمسة",
      price: 190,
      pointsReward: 950,
      quantity: 1,
      color: "شامبين ذهبي",
      colorCode: "#E5D3B3",
      size: "M",
      remainingStock: 4,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMaavdWob9Hv5L4cCxr8gazEepu2o-sqE26OxBJoVqwNLlNWRTTutZtQ4hOlsxGJMaQcxEz4uxUzLJvVNbBf7KJKBWTkEMn77tvuqI-p-K417VEkPkKqybcG8KtYiLBjBotp-u52yhkBdUKsWgLaGdd97sHHGfkyLx8a63YTbSAZ0ESHOznr8JZ-EzOkqhcrG6IUjzRRKBvNEFHxUE8S-_LlYoNET-21cVgigjzfjtmAsEJzvmguzdlA"
    },
    {
      id: "crystal-evening-heels",
      title: "حذاء كعب سهرة ذهبي مرصع بالكريستال",
      storeName: "بوتيك لمسة",
      price: 145,
      pointsReward: 725,
      quantity: 1,
      color: "ذهبي كريستال",
      colorCode: "#D4AF37",
      size: "38",
      remainingStock: 7,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRamPMyiCkdmjG-tikAXEyA01DZw0FOVPctvjVIKDOS67THo6uN2xObvH_67P90bxPZoLiIE32WHhhbLCdBK3fQo9p4zqBMfD7ZYUDJWg0hohBb_yOdvlX9ScGg9Dch-Maads9eSAMKdecPF2yOqJXtzOOw5S6PQOAaQwvEHOc_gUIGQZzQGE61_lLKLiJlSD98g3_KI48y1J1kP15WWGPP-wNQA-vzP0NimWGsSM0kHOD551YGKRJgQ"
    }
  ]);

  const [toast, setToast] = useState({ visible: false, title: "", message: "" });

  const showToast = (title, message) => {
    setToast({ visible: true, title, message });
    setTimeout(() => {
      setToast({ visible: false, title: "", message: "" });
    }, 3500);
  };

  const hideToast = () => {
    setToast({ visible: false, title: "", message: "" });
  };

  const addItem = (product, selectedColor = null, selectedSize = null, quantity = 1) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.size === selectedSize && item.color === selectedColor
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        const newItem = {
          id: product.id,
          title: product.title,
          storeName: product.storeName,
          price: product.price,
          pointsReward: product.pointsReward || (product.price * 5),
          quantity: quantity,
          color: selectedColor || (product.colors && product.colors[0]?.name) || "الافتراضي",
          colorCode: (product.colors && product.colors[0]?.code) || "#12302B",
          size: selectedSize || (product.sizes && product.sizes[0]) || "Standard",
          remainingStock: product.remainingStock || 5,
          image: product.images ? product.images[0] : (product.image || "")
        };
        return [...prevItems, newItem];
      }
    });

    showToast("تمت الإضافة بنجاح!", `تمت إضافة ${product.title} إلى سلتك بنجاح.`);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalPointsReward = items.reduce((total, item) => total + item.pointsReward * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        totalPointsReward,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toast,
        showToast,
        hideToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
