import { create } from 'zustand';
import { calculateEarnedPoints, calculateCashbackValue } from '../utils/loyalty.js';

const STORAGE_KEY = 'tabadul_demo_cart_items';

function getStoredItems() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveItems(items) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Ignore storage quota or disabled storage errors in demo
  }
}

export const useCartStore = create((set, get) => ({
  items: getStoredItems(),

  /**
   * Adds an item with selected variants (size, color, quantity).
   * Prevents duplicate lines for identical variants by incrementing quantity.
   */
  addItem: (product, { size = 'M', color = '', quantity = 1 } = {}) => {
    if (!product || !product.id) return;

    const safeQty = Math.max(1, Math.floor(Number(quantity) || 1));
    const safePrice = Math.max(0, Number(product.price) || 0);
    const safePoints = Number(product.points) || calculateEarnedPoints(safePrice);
    const selectedColor = color || (product.colors && product.colors[0]) || 'افتراضي';
    const selectedSize = size || (product.sizes && product.sizes[0]) || 'M';

    // Stable composite identifier for the variant
    const cartItemId = `${product.id}-${selectedSize}-${selectedColor}`;

    set((state) => {
      const existingIndex = state.items.findIndex((item) => item.cartItemId === cartItemId);
      let updatedItems;

      if (existingIndex > -1) {
        updatedItems = state.items.map((item, idx) => {
          if (idx === existingIndex) {
            return {
              ...item,
              quantity: item.quantity + safeQty,
            };
          }
          return item;
        });
      } else {
        const newItem = {
          cartItemId,
          productId: product.id,
          code: product.code || `LM-${product.id}`,
          name: product.name,
          category: product.category,
          storeName: product.storeName || 'بوتيك لمسة للأزياء والفساتين',
          price: safePrice,
          points: safePoints,
          size: selectedSize,
          color: selectedColor,
          quantity: safeQty,
          status: product.status || 'متوفر للتسليم',
        };
        updatedItems = [...state.items, newItem];
      }

      saveItems(updatedItems);
      return { items: updatedItems };
    });
  },

  /**
   * Removes a single line item by its variant identifier.
   */
  removeItem: (cartItemId) => {
    set((state) => {
      const updatedItems = state.items.filter((item) => item.cartItemId !== cartItemId);
      saveItems(updatedItems);
      return { items: updatedItems };
    });
  },

  /**
   * Updates line item quantity, ensuring positive integers.
   */
  updateQuantity: (cartItemId, newQuantity) => {
    const safeQty = Math.floor(Number(newQuantity) || 0);
    if (safeQty <= 0) {
      get().removeItem(cartItemId);
      return;
    }

    set((state) => {
      const updatedItems = state.items.map((item) => {
        if (item.cartItemId === cartItemId) {
          return {
            ...item,
            quantity: safeQty,
          };
        }
        return item;
      });

      saveItems(updatedItems);
      return { items: updatedItems };
    });
  },

  /**
   * Clears the cart (e.g. after successful demo order submission).
   */
  clearCart: () => {
    saveItems([]);
    set({ items: [] });
  },

  /**
   * Selectors and helper calculations
   */
  getSubtotal: () => {
    const items = get().items;
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getTotalPoints: () => {
    const items = get().items;
    return items.reduce((sum, item) => sum + ((item.points || calculateEarnedPoints(item.price)) * item.quantity), 0);
  },

  getTotalCashback: () => {
    const totalPoints = get().getTotalPoints();
    return calculateCashbackValue(totalPoints);
  },

  getItemCount: () => {
    const items = get().items;
    return items.reduce((sum, item) => sum + item.quantity, 0);
  },
}));
