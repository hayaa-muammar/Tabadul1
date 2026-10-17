const BASE_URL = 'http://localhost:5173';

const routes = [
  '/',
  '/login',
  '/customer/login',
  '/customer/verify-otp',
  '/customer/register',
  '/customer/otp-error',
  '/customer/reset-password',
  '/merchant/login',
  '/merchant/verify-otp',
  '/merchant/register',
  '/merchant/otp-error',
  '/merchant/reset-password',
  '/customer/home',
  '/customer/store',
  '/customer/product/1',
  '/customer/product/2',
  '/customer/product/3',
  '/customer/cart',
  '/customer/checkout',
  '/customer/order-confirmation',
  '/stores',
  '/rewards',
  '/cart',
  '/checkout',
  '/terms',
  '/privacy',
  '/help',
  '/faq',
];

async function probeAll() {
  console.log(`Starting automated route probe against ${BASE_URL}...`);
  let passed = 0;
  let failed = 0;

  for (const route of routes) {
    const url = `${BASE_URL}${route}`;
    try {
      const res = await fetch(url);
      const text = await res.text();
      
      const isHtml = res.headers.get('content-type')?.includes('text/html');
      const hasRoot = text.includes('<div id="root">');
      const hasMain = text.includes('/src/main.jsx');

      if (res.status === 200 && isHtml && hasRoot && hasMain) {
        console.log(`✅ [200 OK] ${route}`);
        passed++;
      } else {
        console.error(`❌ [FAILED] ${route} - Status: ${res.status}, isHtml: ${isHtml}, hasRoot: ${hasRoot}`);
        failed++;
      }
    } catch (err) {
      console.error(`❌ [ERROR] ${route} - ${err.message}`);
      failed++;
    }
  }

  console.log(`\nProbe Results: ${passed} Passed, ${failed} Failed.`);
  if (failed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

probeAll();
