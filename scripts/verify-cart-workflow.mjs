import { products, getProductById } from '../src/data/products.js';
import { calculateEarnedPoints, calculateCashbackValue } from '../src/utils/loyalty.js';

let passed = 0;
let failed = 0;

function assert(cond, msg) {
  if (!cond) {
    console.error(`❌ FAILED: ${msg}`);
    failed++;
  } else {
    console.log(`✅ PASS: ${msg}`);
    passed++;
  }
}

console.log('--- STARTING SHOPPING CART & VARIANT WORKFLOW VALIDATION ---');

// Mock in-memory cart store following the exact implementation in useCartStore.js
class MockCartStore {
  constructor() {
    this.items = [];
  }

  addItem(product, { size = 'M', color = '', quantity = 1 } = {}) {
    if (!product || !product.id) return;
    const safeQty = Math.max(1, Math.floor(Number(quantity) || 1));
    const safePrice = Math.max(0, Number(product.price) || 0);
    const safePoints = Number(product.points) || calculateEarnedPoints(safePrice);
    const selectedColor = color || (product.colors && product.colors[0]) || 'افتراضي';
    const selectedSize = size || (product.sizes && product.sizes[0]) || 'M';
    const cartItemId = `${product.id}-${selectedSize}-${selectedColor}`;

    const existingIndex = this.items.findIndex(item => item.cartItemId === cartItemId);
    if (existingIndex > -1) {
      this.items[existingIndex].quantity += safeQty;
    } else {
      this.items.push({
        cartItemId,
        productId: product.id,
        code: product.code || `LM-${product.id}`,
        name: product.name,
        price: safePrice,
        points: safePoints,
        size: selectedSize,
        color: selectedColor,
        quantity: safeQty,
      });
    }
  }

  updateQuantity(cartItemId, newQuantity) {
    const safeQty = Math.floor(Number(newQuantity) || 0);
    if (safeQty <= 0) {
      this.removeItem(cartItemId);
      return;
    }
    const item = this.items.find(i => i.cartItemId === cartItemId);
    if (item) item.quantity = safeQty;
  }

  removeItem(cartItemId) {
    this.items = this.items.filter(i => i.cartItemId !== cartItemId);
  }

  clearCart() {
    this.items = [];
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getTotalPoints() {
    return this.items.reduce((sum, item) => sum + (item.points * item.quantity), 0);
  }

  getTotalCashback() {
    return calculateCashbackValue(this.getTotalPoints());
  }

  getItemCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }
}

const cart = new MockCartStore();

// 1. Initial State
assert(cart.items.length === 0, 'Cart starts empty');
assert(cart.getSubtotal() === 0, 'Initial subtotal is 0');
assert(cart.getTotalPoints() === 0, 'Initial points is 0');
assert(cart.getTotalCashback() === 0, 'Initial cashback is 0');
assert(cart.getItemCount() === 0, 'Initial item count is 0');

// 2. Add Single Item with variant
const p1 = getProductById(1);
assert(p1 !== null, 'Product 1 found');
cart.addItem(p1, { size: 'M', color: 'شامبين عاجي', quantity: 1 });
assert(cart.items.length === 1, 'Cart has 1 line item');
assert(cart.items[0].cartItemId === '1-M-شامبين عاجي', 'Composite ID matches variant');
assert(cart.getSubtotal() === 190, 'Subtotal is 190 ILS');
assert(cart.getTotalPoints() === 1900, 'Total points earned is 1,900');
assert(cart.getTotalCashback() === 9.5, 'Total cashback is 9.50 ILS (5%)');
assert(cart.getItemCount() === 1, 'Total item count is 1');

// 3. Add Different Variant of Same Product (Size L)
cart.addItem(p1, { size: 'L', color: 'شامبين عاجي', quantity: 1 });
assert(cart.items.length === 2, 'Different variant creates a new distinct line item (2 items total)');
assert(cart.getSubtotal() === 380, 'Subtotal for 2 items is 380 ILS');
assert(cart.getTotalPoints() === 3800, 'Total points earned is 3,800');
assert(cart.getTotalCashback() === 19.0, 'Total cashback is 19.00 ILS');
assert(cart.getItemCount() === 2, 'Total item count is 2');

// 4. Add Duplicate of Existing Variant (Size M)
cart.addItem(p1, { size: 'M', color: 'شامبين عاجي', quantity: 2 });
assert(cart.items.length === 2, 'Cart still has 2 line items (incremented existing)');
assert(cart.items[0].quantity === 3, 'Size M quantity incremented from 1 to 3');
assert(cart.getItemCount() === 4, 'Total item count is now 4 (3 of M + 1 of L)');
assert(cart.getSubtotal() === 190 * 4, `Subtotal is 760 ILS (${cart.getSubtotal()})`);
assert(cart.getTotalPoints() === 1900 * 4, `Total points is 7,600 (${cart.getTotalPoints()})`);
assert(cart.getTotalCashback() === 38.0, `Total cashback is 38.00 ILS (${cart.getTotalCashback()})`);

// 5. Update Quantity
cart.updateQuantity('1-M-شامبين عاجي', 1);
assert(cart.items[0].quantity === 1, 'Size M quantity successfully updated to 1');
assert(cart.getItemCount() === 2, 'Total item count updated to 2');
assert(cart.getSubtotal() === 380, 'Subtotal updated to 380 ILS');

// 6. Update Quantity to 0 (auto-removes item)
cart.updateQuantity('1-L-شامبين عاجي', 0);
assert(cart.items.length === 1, 'Updating quantity to 0 removes the item');
assert(cart.items[0].cartItemId === '1-M-شامبين عاجي', 'Remaining item is Size M');

// 7. Remove Item
cart.removeItem('1-M-شامبين عاجي');
assert(cart.items.length === 0, 'Removing item leaves cart empty');
assert(cart.getSubtotal() === 0, 'Subtotal is reset to 0');

// 8. Add Another Product and Clear Cart
const p2 = getProductById(2);
cart.addItem(p2, { size: 'S', color: 'كحلي ملكي', quantity: 1 });
assert(cart.items.length === 1, 'Cart has 1 item from Product 2');
assert(cart.getSubtotal() === 145, 'Subtotal is 145 ILS');
cart.clearCart();
assert(cart.items.length === 0, 'clearCart() resets items to empty array');
assert(cart.getSubtotal() === 0, 'clearCart() resets subtotal to 0');

console.log(`\n--- WORKFLOW RESULTS: ${passed} Passed, ${failed} Failed ---`);
if (failed > 0) process.exit(1);
else process.exit(0);
