import React, { useState } from 'react';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function MerchantOrdersPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [pinInputs, setPinInputs] = useState(['', '', '', '']);
  const [pinVerified, setPinVerified] = useState(false);
  const [acceptedOrders, setAcceptedOrders] = useState({});

  const handlePinChange = (index, value) => {
    if (value.length > 1) return;
    const newInputs = [...pinInputs];
    newInputs[index] = value;
    setPinInputs(newInputs);
    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`merchant-pin-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerifyPin = () => {
    const code = pinInputs.join('');
    if (code.length === 4) {
      setPinVerified(true);
    } else {
      alert('يرجى إدخال رمز PIN المكون من 4 أرقام كاملاً.');
    }
  };

  const handleAcceptOrder = (orderId) => {
    setAcceptedOrders((prev) => ({ ...prev, [orderId]: true }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Top Greeting & Live Stats Strip */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-5 rounded-2xl border border-[#E1DACB] shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h1 className="text-xl sm:text-2xl font-bold text-[#12302B]">إدارة طلبات المتجر</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E9B44C]/20 text-[#835400] border border-[#E9B44C]/40">
                تحديث فوري مباشر
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              تابع تحضير طلبات الأزياء، واعتمد كود الاستلام (PIN 4-Digits) لتحرير مستحقاتك في محفظة المتجر فوراً.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <div className="flex-1 lg:flex-initial bg-[#F6F3EC] px-4 py-2.5 rounded-xl border border-[#E1DACB] text-center min-w-[130px]">
              <span className="text-xs text-gray-500 block">طلبات اليوم المكتملة</span>
              <span className="text-sm sm:text-base font-bold text-[#1F7A6E]">5 طلبات (₪ 1,480)</span>
            </div>
            <div className="flex-1 lg:flex-initial bg-[#12302B] text-white px-4 py-2.5 rounded-xl text-center min-w-[140px] shadow-sm">
              <span className="text-xs text-white/80 block">أرباح جاهزة للتحرير</span>
              <span className="text-base font-bold text-[#E9B44C]">₪ 620.00</span>
            </div>
          </div>
        </div>

        {/* Toolbar & Status Tabs */}
        <div className="bg-white p-5 rounded-2xl border border-[#E1DACB] shadow-sm space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-nowrap border-b border-[#E1DACB]">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all font-bold ${
                activeTab === 'all' ? 'bg-[#12302B] text-white' : 'text-gray-600 hover:bg-[#F6F3EC]'
              }`}
            >
              <span>الكل</span>
              <span className="bg-[#ECE7DC] text-[#12302B] px-2 py-0.5 rounded-full text-xs font-bold">12</span>
            </button>

            <button
              onClick={() => setActiveTab('pending')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all font-bold ${
                activeTab === 'pending' ? 'bg-[#12302B] text-white' : 'text-gray-600 hover:bg-[#F6F3EC]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#E9B44C] animate-pulse"></span>
              <span>بانتظار القبول</span>
              <span className="bg-[#E9B44C] text-[#12302B] px-2 py-0.5 rounded-full text-xs font-bold">2</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">مهلة 48 س</span>
            </button>

            <button
              onClick={() => setActiveTab('preparing')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all font-bold ${
                activeTab === 'preparing' ? 'bg-[#12302B] text-white' : 'text-gray-600 hover:bg-[#F6F3EC]'
              }`}
            >
              <span>قيد التجهيز</span>
              <span className="bg-[#ECE7DC] text-[#12302B] px-2 py-0.5 rounded-full text-xs font-bold">1</span>
            </button>

            <button
              onClick={() => setActiveTab('delivery')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all font-bold ${
                activeTab === 'delivery' ? 'bg-[#12302B] text-white' : 'text-[#1F7A6E] bg-[#1F7A6E]/10'
              }`}
            >
              <span className="material-symbols-outlined text-base">local_shipping</span>
              <span>قيد التوصيل مع المندوب</span>
              <span className="bg-[#1F7A6E]/20 text-[#1F7A6E] px-2 py-0.5 rounded-full text-xs font-bold">3</span>
              <span className="text-[10px] text-[#12302B] font-bold bg-[#E9B44C]/30 px-1.5 py-0.5 rounded">كود 4 أرقام</span>
            </button>

            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all font-bold ${
                activeTab === 'completed' ? 'bg-[#12302B] text-white' : 'text-gray-600 hover:bg-[#F6F3EC]'
              }`}
            >
              <span>مكتملة ومستلمة</span>
              <span className="bg-[#ECE7DC] text-[#12302B] px-2 py-0.5 rounded-full text-xs font-bold">5</span>
            </button>

            <button
              onClick={() => setActiveTab('exchanges')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all font-bold ${
                activeTab === 'exchanges' ? 'bg-[#12302B] text-white' : 'text-red-700 bg-red-50'
              }`}
            >
              <span className="material-symbols-outlined text-base">sync_problem</span>
              <span>طلبات تبديل ومشاكل</span>
              <span className="bg-red-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">1</span>
            </button>
          </div>

          {/* Search & Sorting Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <div className="relative w-full sm:w-96">
              <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">search</span>
              <input
                className="w-full pl-4 pr-11 py-2.5 rounded-xl border border-[#E1DACB] bg-[#F6F3EC] focus:bg-white focus:border-[#12302B] text-xs sm:text-sm transition-all placeholder:text-gray-400"
                placeholder="بحث برقم الطلب (مثال: TB-8419)، اسم الزبون، أو الجوال..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end text-xs">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">الفرز حسب:</span>
                <select className="rounded-xl border border-[#E1DACB] bg-white py-2 pl-6 pr-3 font-semibold text-gray-700">
                  <option>الأحدث وصولاً</option>
                  <option>الأقرب لانتهاء المهلة (48 ساعة)</option>
                  <option>الأعلى قيمة (₪)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Orders List Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            {/* ORDER CARD 1: PENDING ACCEPTANCE */}
            {(activeTab === 'all' || activeTab === 'pending') && (
              <article className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm relative overflow-hidden transition-all hover:border-[#12302B]/40">
                <div className="absolute top-0 right-0 left-0 h-1.5 bg-[#E9B44C]"></div>

                <div className="flex flex-wrap justify-between items-start gap-3 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#E9B44C]/15 text-[#835400] flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-2xl">hourglass_top</span>
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-base sm:text-lg font-bold text-[#12302B]">#TB-8419</h2>
                        <span className="bg-[#835400]/10 text-[#835400] border border-[#E9B44C]/40 text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">timer</span>
                          بانتظار القبول
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">اليوم، 11:42 صباحاً (قبل ساعتين)</p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl flex items-center gap-2 text-amber-900">
                    <span className="material-symbols-outlined text-base text-[#E9B44C]">schedule</span>
                    <span className="text-xs font-bold">متبقي على مهلة القبول: 46 ساعة</span>
                  </div>
                </div>

                {/* Customer & Delivery Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 text-xs border-b border-gray-100">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-gray-400 text-lg">person</span>
                    <div>
                      <span className="font-bold text-[#12302B] block">ريم خليل</span>
                      <span className="text-gray-500 block">غزة - شارع الجلاء، بجانب مفترق الطيران</span>
                      <span className="text-gray-500 dir-ltr inline-block mt-0.5 font-mono font-medium">+970 59 912 3456</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 bg-[#F6F3EC] p-3 rounded-xl border border-[#E1DACB]">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-lg">local_shipping</span>
                    <div className="flex-1">
                      <span className="font-bold text-[#12302B] block">شركة التوصيل السريع (غزة)</span>
                      <span className="text-gray-500 block">رسوم التوصيل: ₪ 15 (تُدفع من الزبونة)</span>
                      <span className="text-[#1F7A6E] flex items-center gap-1 mt-0.5 font-bold">
                        <span className="material-symbols-outlined text-xs">verified</span> توصيل موثق بنظام الكود PIN
                      </span>
                    </div>
                  </div>
                </div>

                {/* Item List */}
                <div className="py-4 space-y-3">
                  <div className="flex items-center justify-between gap-4 bg-[#F6F3EC] p-3 rounded-xl border border-[#E1DACB]">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-14 h-14 rounded-lg object-cover border border-gray-200"
                        alt="عباءة حريرية"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWO5D3-d3RBw-6-1qMa8jqBxFbR13IlmwMFbh7-jqpfTy3-toSn0ttO8RKMUGFYI5CtaN8O6DpNJDM_AohFzvrv6ZELCWV9J6cZCPUvm3MFFzHQv5TESQU7KJ0J7lf0BUUAVj_b6-bQakw_BztJN-3cNinhrIGVVyBmbwiBlb5rp2Z9GuH1Ptlnr91oQSqQGfda4AH6puUCWafDKXkoGRQGY4XCDPVVD5Fcn_G0t0e"
                      />
                      <div>
                        <h3 className="font-bold text-sm text-[#12302B]">عباءة حريرية ملكية مطرزة</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="bg-white text-gray-700 px-2 py-0.5 rounded text-[11px] border border-gray-200">المقاس: L</span>
                          <span className="bg-white text-gray-700 px-2 py-0.5 rounded text-[11px] border border-gray-200">اللون: زيتي ملكي</span>
                          <span className="bg-white text-gray-700 px-2 py-0.5 rounded text-[11px] border border-gray-200">الكمية: 1</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <span className="text-sm font-bold text-[#12302B] block">₪ 240.00</span>
                      <span className="text-[11px] text-[#1F7A6E] block font-medium">+كاش باك 12 نقطة</span>
                    </div>
                  </div>
                </div>

                {/* Total & Direct Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-500 block">الإجمالي الصافي لحساب المتجر:</span>
                    <span className="text-lg font-bold text-[#12302B]">₪ 240.00</span>
                    <span className="text-[11px] text-[#835400] block">(تحصيل نقدي عند التوصيل وتأكيد الكود)</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {acceptedOrders['TB-8419'] ? (
                      <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-200">
                        <span className="material-symbols-outlined text-base">check</span>
                        تم قبول الطلب وجاري تجهيزه!
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={() => handleAcceptOrder('TB-8419')}
                          className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#12302B] hover:bg-[#1F7A6E] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
                        >
                          <span className="material-symbols-outlined text-base">check_circle</span>
                          <span>قبول وتجهيز الطلب</span>
                        </button>
                        <button className="flex-1 sm:flex-initial px-4 py-2.5 border border-red-200 text-red-700 hover:bg-red-50 rounded-xl text-xs font-bold transition-colors">
                          اعتذار / رفض
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </article>
            )}

            {/* ORDER CARD 2: OUT FOR DELIVERY (CRITICAL: 4-Digit PIN Code Box) */}
            {(activeTab === 'all' || activeTab === 'delivery') && (
              <article className="bg-white rounded-2xl p-5 border border-[#1F7A6E]/50 shadow-sm relative overflow-hidden transition-all">
                <div className="absolute top-0 right-0 left-0 h-1.5 bg-[#1F7A6E]"></div>

                <div className="flex flex-wrap justify-between items-start gap-3 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#1F7A6E]/15 text-[#1F7A6E] flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-2xl">two_wheeler</span>
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-base sm:text-lg font-bold text-[#12302B]">#TB-8402</h2>
                        <span className="bg-[#1F7A6E]/10 text-[#1F7A6E] border border-[#1F7A6E]/30 text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">local_shipping</span>
                          قيد التوصيل مع المندوب
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">خرج للتسليم: اليوم، 02:15 مساءً | المندوب: أبو حمزة (+970 59 888 1234)</p>
                    </div>
                  </div>
                  <span className="bg-[#F6F3EC] px-3 py-1 rounded-xl text-xs text-gray-700 border border-[#E1DACB]">
                    المسافة المقدرة: حي النصر
                  </span>
                </div>

                <div className="py-4 space-y-3">
                  <div className="flex items-center justify-between gap-4 bg-[#F6F3EC] p-3 rounded-xl border border-[#E1DACB]">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-14 h-14 rounded-lg object-cover border border-gray-200"
                        alt="حذاء جلدي أنيق"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4Ln6kzbwfH_Vp02O54vF59vVcGELKAm2wGQdETKduwwRICztqbf66N_LwX2JdLVXlKipFnIV9htFcVtkG-Q_VhPr2JWssuqMgp2id5KGzQzt-YzJlcYZ1yLxoh499RO5kI3ZiVJKsAumyv8XnhiEBHJedFHcoTBavLDlCIqJFQgum46GrPRXBaLhWJpBBjNU5UfaVVejpxov3gYrcuCoCYWpI6d0gaMpms5FSWl9"
                      />
                      <div>
                        <h3 className="font-bold text-sm text-[#12302B]">حذاء جلدي أنيق - كعب مريح</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="bg-white text-gray-700 px-2 py-0.5 rounded text-[11px] border border-gray-200">المقاس: 38</span>
                          <span className="bg-white text-gray-700 px-2 py-0.5 rounded text-[11px] border border-gray-200">اللون: بيج نود</span>
                          <span className="bg-white text-gray-700 px-2 py-0.5 rounded text-[11px] border border-gray-200">الكمية: 1</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-left">
                      <span className="text-sm font-bold text-[#12302B] block">₪ 180.00</span>
                      <span className="text-[11px] text-[#1F7A6E] block font-medium">+كاش باك 9 نقاط</span>
                    </div>
                  </div>
                </div>

                {/* PIN 4-Digit Verification Box */}
                <div className="bg-gradient-to-r from-[#12302B]/5 via-[#1F7A6E]/10 to-[#E9B44C]/10 border-2 border-dashed border-[#1F7A6E] p-4 rounded-xl space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-[#12302B]">
                      <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">pin</span>
                      <div>
                        <span className="font-bold text-xs sm:text-sm block">إدخال رمز الاستلام السري (PIN 4 أرقام)</span>
                        <span className="text-xs text-gray-600">الرمز موجود لدى الزبونة عند استلام الطرد، أدخله لتحرير المبلغ فوراً لمحفظتك.</span>
                      </div>
                    </div>
                    <span className="text-xs text-[#1F7A6E] font-bold bg-white px-2.5 py-1 rounded border border-[#1F7A6E]/30">
                      تحرير فوري: ₪ 180.00
                    </span>
                  </div>

                  {pinVerified ? (
                    <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center gap-2 text-emerald-800 text-xs font-bold">
                      <span className="material-symbols-outlined text-lg">check_circle</span>
                      تم اعتماد كود الاستلام بنجاح! تم تحرير مبلغ ₪ 180.00 وإضافته إلى رصيد محفظتك المتاح.
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <div className="flex items-center gap-2 dir-ltr">
                        {[0, 1, 2, 3].map((idx) => (
                          <input
                            key={idx}
                            id={`merchant-pin-${idx}`}
                            className="w-11 h-12 text-center text-xl font-mono font-bold rounded-xl border border-[#E1DACB] bg-white focus:border-[#1F7A6E] focus:ring-2 focus:ring-[#1F7A6E]/20"
                            maxLength="1"
                            placeholder="•"
                            type="text"
                            value={pinInputs[idx]}
                            onChange={(e) => handlePinChange(idx, e.target.value)}
                          />
                        ))}
                      </div>
                      <button
                        onClick={handleVerifyPin}
                        type="button"
                        className="flex-1 sm:flex-initial px-6 py-3 bg-[#1F7A6E] hover:bg-[#12302B] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow transition-all active:scale-95"
                      >
                        <span className="material-symbols-outlined text-lg">verified_user</span>
                        <span>تأكيد الاستلام بالكود وتحرير المبلغ</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center pt-3 text-xs text-gray-500">
                  <span>الزبونة: سارة يوسف (حي النصر - 059 772 9011)</span>
                  <span>طريقة الدفع: الدفع عند الاستلام (COD)</span>
                </div>
              </article>
            )}

            {/* ORDER CARD 3: EXCHANGE REQUEST */}
            {(activeTab === 'all' || activeTab === 'exchanges') && (
              <article className="bg-white rounded-2xl p-5 border border-red-200 shadow-sm relative overflow-hidden transition-all">
                <div className="absolute top-0 right-0 left-0 h-1.5 bg-red-600"></div>

                <div className="flex flex-wrap justify-between items-start gap-3 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-2xl">sync_problem</span>
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-base sm:text-lg font-bold text-[#12302B]">#TB-8395</h2>
                        <span className="bg-red-50 text-red-700 border border-red-200 text-xs px-2.5 py-0.5 rounded-full font-bold">
                          طلب تبديل مقاس أزياء
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">طلب التبديل مقدم قبل: 4 ساعات (مهلة الرد: 20 ساعة)</p>
                    </div>
                  </div>
                  <span className="text-xs bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-xl font-bold">
                    النقاط مجمدة مؤقتاً (15 نقطة)
                  </span>
                </div>

                <div className="py-4 text-xs space-y-2">
                  <div className="p-3 bg-[#F6F3EC] rounded-xl border border-[#E1DACB] space-y-1">
                    <span className="font-bold text-[#12302B] block">المنتج المراد تبديله: فستان سهرة مخملي أسود</span>
                    <div className="flex items-center gap-3 text-gray-600">
                      <span>المقاس الحالي للزبونة: <strong>38 (ضيق)</strong></span>
                      <span>←</span>
                      <span className="text-[#1F7A6E] font-bold">المقاس المطلوب بدلاً عنه: <strong>40</strong></span>
                    </div>
                    <span className="text-[11px] text-emerald-700 font-medium block">
                      المخزون المتوفر لديك لمقاس 40: <strong>متوفر (3 قطع بالمحل)</strong>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">الزبونة: هدى حمدان (الرمال الجنوبي)</span>
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-[#1F7A6E] hover:bg-[#12302B] text-white text-xs font-bold rounded-xl transition-all shadow-sm">
                      الموافقة وتجهيز المقاس البديل
                    </button>
                    <button className="px-3 py-2 border border-gray-300 text-gray-600 hover:bg-gray-50 text-xs font-bold rounded-xl">
                      تواصل مع الزبونة هاتفياً
                    </button>
                  </div>
                </div>
              </article>
            )}
          </div>

          {/* Orders Sidebar Metrics (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E1DACB] rounded-2xl p-5 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-[#12302B] pb-3 border-b border-gray-100 flex items-center justify-between">
                <span>ملخص أداء التوصيل والتحصيل</span>
                <span className="text-xs text-[#1F7A6E]">هذا الأسبوع</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-500">إجمالي الطلبات المسلّمة</span>
                  <span className="font-bold text-[#12302B]">28 طلباً</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-500">نسبة الالتزام بكود PIN</span>
                  <span className="font-bold text-emerald-700">100% (أمان تام)</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-500">متوسط وقت التسليم في غزة</span>
                  <span className="font-bold text-[#12302B]">18 ساعة</span>
                </div>
                <div className="flex justify-between items-center py-1 border-t border-gray-100 pt-2">
                  <span className="text-gray-500 font-bold">إجمالي المبيعات المحصلة</span>
                  <span className="font-bold text-base text-[#12302B]">₪ 6,420.00</span>
                </div>
              </div>
            </div>

            <div className="bg-[#12302B] text-white rounded-2xl p-5 shadow-md space-y-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E9B44C]">headset_mic</span>
                <h4 className="text-sm font-bold text-white">طوارئ التوصيل ومندوبي غزة</h4>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                في حال تعذر الوصول للزبونة أو انقطاع شبكة الهاتف، تواصل مباشرة مع غرفة عمليات مناديب تبادل.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-mono text-[#E9B44C] font-bold">059-900-1122</span>
                <span className="text-white/60">متاح 24/7</span>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
