import { calculateEarnedPoints, calculateCashbackValue, formatCurrency, formatPoints, LOYALTY_RULES } from '../src/utils/loyalty.js';

let failedTests = 0;
let passedTests = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ ASSERTION FAILED: ${message}`);
    failedTests++;
  } else {
    console.log(`✅ PASS: ${message}`);
    passedTests++;
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.error(`❌ ASSERTION FAILED: ${message} (Expected: ${expected}, Got: ${actual})`);
    failedTests++;
  } else {
    console.log(`✅ PASS: ${message} (Value: ${actual})`);
    passedTests++;
  }
}

console.log('--- STARTING FINANCIAL & LOYALTY LOGIC VERIFICATION ---');

// 1. Fundamental Constants
assertEqual(LOYALTY_RULES.CASHBACK_PERCENT, 5, 'Cashback percent must be 5%');
assertEqual(LOYALTY_RULES.POINTS_PER_ILS, 10, 'Must award 10 points per 1 ILS');
assertEqual(LOYALTY_RULES.POINTS_PER_ILS_VALUE, 200, 'Must redeem 200 points per 1 ILS value');

// 2. Fundamental Math: (10 points / ILS) * (1 ILS / 200 points) = 10 / 200 = 0.05 (5%)
const calculatedRate = (LOYALTY_RULES.POINTS_PER_ILS / LOYALTY_RULES.POINTS_PER_ILS_VALUE) * 100;
assertEqual(calculatedRate, 5, 'Derived cashback percentage must exactly equal 5.0%');

// 3. calculateEarnedPoints
assertEqual(calculateEarnedPoints(0), 0, '0 ILS gives 0 points');
assertEqual(calculateEarnedPoints(-50), 0, 'Negative amount gives 0 points');
assertEqual(calculateEarnedPoints(null), 0, 'null amount gives 0 points');
assertEqual(calculateEarnedPoints(undefined), 0, 'undefined amount gives 0 points');
assertEqual(calculateEarnedPoints(NaN), 0, 'NaN amount gives 0 points');
assertEqual(calculateEarnedPoints(1), 10, '1 ILS gives 10 points');
assertEqual(calculateEarnedPoints(10), 100, '10 ILS gives 100 points');
assertEqual(calculateEarnedPoints(100), 1000, '100 ILS gives 1,000 points');
assertEqual(calculateEarnedPoints(190), 1900, '190 ILS gives 1,900 points');
assertEqual(calculateEarnedPoints(29.5), 295, '29.5 ILS gives 295 points');
assertEqual(calculateEarnedPoints(99.99), 1000, '99.99 ILS rounded gives 1,000 points');

// 4. calculateCashbackValue
assertEqual(calculateCashbackValue(0), 0, '0 points gives 0 ILS cashback');
assertEqual(calculateCashbackValue(-200), 0, 'Negative points gives 0 ILS cashback');
assertEqual(calculateCashbackValue(null), 0, 'null points gives 0 ILS cashback');
assertEqual(calculateCashbackValue(200), 1.0, '200 points gives 1.00 ILS cashback');
assertEqual(calculateCashbackValue(1000), 5.0, '1,000 points gives 5.00 ILS cashback');
assertEqual(calculateCashbackValue(1900), 9.5, '1,900 points gives 9.50 ILS cashback');
assertEqual(calculateCashbackValue(295), 1.48, '295 points gives 1.48 ILS cashback (rounded to 2 decimals)');

// 5. Verification of End-to-End 5% Cashback on Sample Carts
const testPurchases = [10, 50, 75, 100, 190, 250, 500, 1000];
for (const amount of testPurchases) {
  const points = calculateEarnedPoints(amount);
  const cashback = calculateCashbackValue(points);
  const expectedCashback = Number((amount * 0.05).toFixed(2));
  assertEqual(cashback, expectedCashback, `Purchase of ${amount} ILS gives exact 5% cashback (${cashback} ILS)`);
}

// 6. Formatting utilities
const formattedCurrency = formatCurrency(190);
assert(formattedCurrency.includes('190') && formattedCurrency.includes('₪'), `formatCurrency(190) includes 190 and ₪: ${formattedCurrency}`);

const formattedPoints = formatPoints(1900);
assertEqual(formattedPoints, '1,900', 'formatPoints(1900) produces "1,900"');

console.log(`\n--- SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED ---`);

if (failedTests > 0) {
  console.error(`💥 Verification FAILED with ${failedTests} failure(s).`);
  process.exit(1);
} else {
  console.log('🎉 All financial and loyalty rules strictly verified.');
  process.exit(0);
}
