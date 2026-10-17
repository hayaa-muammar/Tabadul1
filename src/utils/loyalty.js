/**
 * Centralized Loyalty & Currency Utility for Tabadul
 * 
 * Rules:
 * - Cashback rate: 5%
 * - 10 points earned per 1 ILS spent
 * - 200 points equivalent to 1 ILS
 */

export const LOYALTY_RULES = {
  CASHBACK_PERCENT: 5,
  POINTS_PER_ILS: 10,
  POINTS_PER_ILS_VALUE: 200,
  DEMO_DEFAULT_DELIVERY_FEE: 0, // توصيل تجريبي مجاني في العرض
};

/**
 * Calculates loyalty points earned from a given amount in ILS.
 * @param {number} ilsAmount 
 * @returns {number} Integer points earned
 */
export function calculateEarnedPoints(ilsAmount) {
  if (!ilsAmount || isNaN(ilsAmount) || ilsAmount < 0) return 0;
  return Math.round(ilsAmount * LOYALTY_RULES.POINTS_PER_ILS);
}

/**
 * Calculates monetary cashback equivalent from points in ILS.
 * @param {number} points 
 * @returns {number} Value in ILS rounded to 2 decimals
 */
export function calculateCashbackValue(points) {
  if (!points || isNaN(points) || points < 0) return 0;
  return Number((points / LOYALTY_RULES.POINTS_PER_ILS_VALUE).toFixed(2));
}

/**
 * Formats a number as ILS currency string.
 * @param {number} amount 
 * @returns {string} e.g. "190 ₪"
 */
export function formatCurrency(amount) {
  const safe = Number(amount) || 0;
  return `${safe.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} ₪`;
}

/**
 * Formats points with thousands separator.
 * @param {number} points 
 * @returns {string} e.g. "1,900"
 */
export function formatPoints(points) {
  const safe = Math.round(Number(points) || 0);
  return safe.toLocaleString('en-US');
}
