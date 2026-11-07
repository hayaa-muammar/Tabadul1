import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function DeliveryFeesStepPage() {
  const navigate = useNavigate();
  const [deliveryMechanism, setDeliveryMechanism] = useState('internal_courier');
  const [gazaFee, setGazaFee] = useState(10);
  const [middleFee, setMiddleFee] = useState(15);
  const [khanyounisFee, setKhanyounisFee] = useState(20);
  const [rafahFee, setRafahFee] = useState(20);
  const [northFee, setNorthFee] = useState(15);
  const [allowExchangeAtDoor, setAllowExchangeAtDoor] = useState(true);

  const handleContinue = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    navigate('/merchant/onboarding/payouts');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-8 py-8">
        {/* Stepper Progress */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#E1DACB] shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-[#12302B]">إعداد وتأهيل متجر الأزياء والأحذية</h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E9B44C]/20 text-[#12302B] border border-[#E9B44C]/50">
                  إنجاز 66% من ملف المتجر
                </span>
              </div>
              <p className="text-xs text-[#576b66] mt-1">الخطوة الحالية: مناطق التغطية والرسوم وسياسة التوصيل الميداني</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#12302B]">التقدم الإجمالي:</span>
              <div className="w-36 h-2.5 bg-[#F6F3EC] rounded-full overflow-hidden border border-[#E1DACB]">
                <div className="bg-gradient-to-r from-[#1F7A6E] to-[#E9B44C] h-full rounded-full w-2/3"></div>
              </div>
              <span className="text-xs font-bold text-[#1F7A6E]">4 من 6</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 p-2 bg-[#F6F3EC] rounded-xl border border-[#E1DACB]">
            <div className="p-2 rounded-lg flex items-center gap-2 bg-white/70 border border-[#E1DACB] text-xs">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">✓</span>
              <div><span className="text-[10px] text-gray-500 block">خطوة 1</span><span className="font-bold">التحقق</span></div>
            </div>
            <div className="p-2 rounded-lg flex items-center gap-2 bg-white/70 border border-[#E1DACB] text-xs">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">✓</span>
              <div><span className="text-[10px] text-gray-500 block">خطوة 2</span><span className="font-bold">بيانات المتجر</span></div>
            </div>
            <div className="p-2 rounded-lg flex items-center gap-2 bg-white/70 border border-[#E1DACB] text-xs">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">✓</span>
              <div><span className="text-[10px] text-gray-500 block">خطوة 3</span><span className="font-bold">الهوية والوصف</span></div>
            </div>
            <div className="p-2 rounded-lg flex items-center gap-2 bg-[#12302B] text-white shadow-sm ring-2 ring-[#E9B44C] text-xs">
              <span className="w-6 h-6 rounded-full bg-[#E9B44C] text-[#12302B] flex items-center justify-center font-bold text-xs">4</span>
              <div><span className="text-[10px] text-[#E9B44C] block">النشطة</span><span className="font-bold text-white">التوصيل والرسوم</span></div>
            </div>
            <div className="p-2 rounded-lg flex items-center gap-2 bg-white/40 opacity-70 text-xs">
              <span className="w-6 h-6 rounded-full bg-[#E1DACB] text-gray-600 flex items-center justify-center font-bold text-xs">5</span>
              <div><span className="text-[10px] text-gray-400 block">خطوة 5</span><span className="font-medium">المستحقات</span></div>
            </div>
            <div className="p-2 rounded-lg flex items-center gap-2 bg-white/40 opacity-70 text-xs">
              <span className="w-6 h-6 rounded-full bg-[#E1DACB] text-gray-600 flex items-center justify-center font-bold text-xs">6</span>
              <div><span className="text-[10px] text-gray-400 block">الأخيرة</span><span className="font-medium">الاعتماد</span></div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <section className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-8 border border-[#E1DACB] shadow-sm space-y-6">
            <form onSubmit={handleContinue} className="space-y-6">
              {/* Delivery Mechanism */}
              <div>
                <h3 className="text-base font-bold text-[#12302B] mb-1">آلية التوصيل المعتمدة للمتجر</h3>
                <p className="text-xs text-[#576b66] mb-4">حدد كيف يستلم عملاء منصة «تبادل» مشترياتهم وتطبيقات تجربة المقاسات</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    onClick={() => setDeliveryMechanism('internal_courier')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      deliveryMechanism === 'internal_courier'
                        ? 'border-[#1F7A6E] bg-[#FBF5E8]/40 shadow-xs'
                        : 'border-[#E1DACB] bg-white hover:border-[#1F7A6E]/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="material-symbols-outlined text-2xl text-[#1F7A6E]">sports_motorsports</span>
                        <input
                          type="radio"
                          name="delivery_mechanism"
                          checked={deliveryMechanism === 'internal_courier'}
                          onChange={() => setDeliveryMechanism('internal_courier')}
                          className="text-[#1F7A6E]"
                        />
                      </div>
                      <span className="text-sm font-bold text-[#12302B] block">مندوب المتجر الخاص</span>
                      <p className="text-xs text-[#576b66] mt-1">كادر التوصيل تابع لمعرضكم ولديه دراية بتجربة مقاس الأحذية والملابس</p>
                    </div>
                    <span className="mt-3 inline-block text-[10px] font-bold text-[#1F7A6E] bg-[#1F7A6E]/10 px-2 py-0.5 rounded w-fit">
                      الأكثر تفضيلاً للزبائن
                    </span>
                  </label>

                  <label
                    onClick={() => setDeliveryMechanism('partner_company')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      deliveryMechanism === 'partner_company'
                        ? 'border-[#1F7A6E] bg-[#FBF5E8]/40 shadow-xs'
                        : 'border-[#E1DACB] bg-white hover:border-[#1F7A6E]/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="material-symbols-outlined text-2xl text-[#576b66]">local_shipping</span>
                        <input
                          type="radio"
                          name="delivery_mechanism"
                          checked={deliveryMechanism === 'partner_company'}
                          onChange={() => setDeliveryMechanism('partner_company')}
                          className="text-[#1F7A6E]"
                        />
                      </div>
                      <span className="text-sm font-bold text-[#12302B] block">شركة شحن محلية</span>
                      <p className="text-xs text-[#576b66] mt-1">التعاقد مع شركات النقل السريع المرخصة داخل قطاع غزة</p>
                    </div>
                    <span className="mt-3 inline-block text-[10px] text-[#576b66] bg-[#f6f3ec] px-2 py-0.5 rounded w-fit">
                      ربط لوجستي متاح
                    </span>
                  </label>

                  <label
                    onClick={() => setDeliveryMechanism('store_pickup')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      deliveryMechanism === 'store_pickup'
                        ? 'border-[#1F7A6E] bg-[#FBF5E8]/40 shadow-xs'
                        : 'border-[#E1DACB] bg-white hover:border-[#1F7A6E]/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="material-symbols-outlined text-2xl text-[#576b66]">store</span>
                        <input
                          type="radio"
                          name="delivery_mechanism"
                          checked={deliveryMechanism === 'store_pickup'}
                          onChange={() => setDeliveryMechanism('store_pickup')}
                          className="text-[#1F7A6E]"
                        />
                      </div>
                      <span className="text-sm font-bold text-[#12302B] block">استلام ذاتي من المحل</span>
                      <p className="text-xs text-[#576b66] mt-1">يقوم المشتري بالاستلام والتجربة مباشرة داخل الفرع</p>
                    </div>
                    <span className="mt-3 inline-block text-[10px] text-[#576b66] bg-[#f6f3ec] px-2 py-0.5 rounded w-fit">
                      بدون رسوم توصيل
                    </span>
                  </label>
                </div>
              </div>

              {/* Delivery Zones & Fixed Fees */}
              <div className="pt-4 border-t border-[#E1DACB] space-y-3">
                <h3 className="text-base font-bold text-[#12302B]">مناطق التغطية ورسوم التوصيل الثابتة (بالشيكل ₪)</h3>
                <p className="text-xs text-[#576b66]">الرسوم المحددة تظهر للزبون عند إتمام الطلب وتُحوّل مباشرة لصالح التوصيل</p>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6F3EC]/50 border border-[#E1DACB]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#1F7A6E]">location_city</span>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#12302B] block">مدينة غزة (الرمال، النصر، تل الهوا)</span>
                        <span className="text-[11px] text-[#576b66]">نطاق المتجر الرئيسي</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="number"
                        value={gazaFee}
                        onChange={(e) => setGazaFee(Number(e.target.value))}
                        className="w-16 h-9 text-center font-bold rounded-lg border border-[#E1DACB] bg-white text-xs"
                      />
                      <span className="text-xs font-bold text-[#12302B]">₪</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6F3EC]/50 border border-[#E1DACB]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#1F7A6E]">location_on</span>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#12302B] block">المحافظة الوسطى (دير البلح، النصيرات)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="number"
                        value={middleFee}
                        onChange={(e) => setMiddleFee(Number(e.target.value))}
                        className="w-16 h-9 text-center font-bold rounded-lg border border-[#E1DACB] bg-white text-xs"
                      />
                      <span className="text-xs font-bold text-[#12302B]">₪</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6F3EC]/50 border border-[#E1DACB]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#1F7A6E]">location_on</span>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#12302B] block">خانيونس</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="number"
                        value={khanyounisFee}
                        onChange={(e) => setKhanyounisFee(Number(e.target.value))}
                        className="w-16 h-9 text-center font-bold rounded-lg border border-[#E1DACB] bg-white text-xs"
                      />
                      <span className="text-xs font-bold text-[#12302B]">₪</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6F3EC]/50 border border-[#E1DACB]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#1F7A6E]">location_on</span>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#12302B] block">شمال غزة (جباليا، بيت لاهيا)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="number"
                        value={northFee}
                        onChange={(e) => setNorthFee(Number(e.target.value))}
                        className="w-16 h-9 text-center font-bold rounded-lg border border-[#E1DACB] bg-white text-xs"
                      />
                      <span className="text-xs font-bold text-[#12302B]">₪</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service commitment */}
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-[#1F7A6E]/30 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="door-exchange"
                  checked={allowExchangeAtDoor}
                  onChange={(e) => setAllowExchangeAtDoor(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-[#1F7A6E]"
                />
                <label htmlFor="door-exchange" className="text-xs text-[#12302B] leading-relaxed cursor-pointer">
                  <strong>الالتزام ببروتوكول المعاينة الفورية:</strong> أوافق على إتاحة تجربة القطع للمشتري لـ 10 دقائق مع المندوب قبل إدخال رمز التسليم السري (PIN)، وتوفير التبديل المجاني للمقاس خلال 24 ساعة.
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#E1DACB] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/merchant/onboarding/branding')}
                  className="w-full sm:w-auto px-6 h-12 rounded-xl border border-[#12302B]/30 hover:bg-[#F6F3EC] text-[#12302B] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  <span>السابق (الهوية والوصف)</span>
                </button>

                <button
                  type="submit"
                  onClick={handleContinue}
                  className="w-full sm:w-auto px-8 h-12 rounded-xl bg-[#E9B44C] hover:bg-[#dda437] text-[#12302B] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>متابعة إلى المستحقات والتحويل المالي (الخطوة 5)</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                </button>
              </div>
            </form>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-[#E1DACB] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#12302B]">
                <span className="material-symbols-outlined text-[#1F7A6E] text-2xl">local_shipping</span>
                <h3 className="text-sm font-bold">معايير التوصيل في منصة تبادل</h3>
              </div>
              <p className="text-xs text-[#576b66] leading-relaxed">
                التزامك بأسعار توصيل ثابتة ومعاينة المقاس يزيد من نسبة إتمام الطلبات إلى 98% ويقلل من نسب الإرجاع.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
