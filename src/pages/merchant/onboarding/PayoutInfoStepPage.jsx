import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function PayoutInfoStepPage() {
  const navigate = useNavigate();
  const [payoutMethod, setPayoutMethod] = useState('bank');
  const [bankName, setBankName] = useState('bank_of_palestine');
  const [accountHolder, setAccountHolder] = useState('شركة لمسة للأزياء ذ.م.م');
  const [iban, setIban] = useState('PS04PALS00001234567890123456');
  const [jawwalPayPhone, setJawwalPayPhone] = useState('0599123456');
  const [payoutCycle, setPayoutCycle] = useState('weekly');
  const [error, setError] = useState('');

  const handleContinue = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setError('');

    if (payoutMethod === 'bank') {
      if (!accountHolder.trim()) {
        setError('يرجى إدخال اسم صاحب الحساب التجاري كما يظهر لدى البنك.');
        return;
      }
      if (!iban.trim() || iban.trim().length < 15) {
        setError('يرجى إدخال رقم آيبان (IBAN) صحيح ومكتمل.');
        return;
      }
    } else if (payoutMethod === 'jawwal_pay') {
      if (!jawwalPayPhone.trim() || jawwalPayPhone.trim().length < 9) {
        setError('يرجى إدخال رقم محفظة جوال باي (Jawwal Pay) صحيح ومكوّن من 9 أرقام على الأقل.');
        return;
      }
    }

    navigate('/merchant/onboarding/review');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-6 py-6 sm:py-8">
        {/* Stepper Progress */}
        <section className="bg-white rounded-2xl p-5 md:p-6 border border-[#E1DACB] shadow-xs mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg md:text-xl font-bold text-[#12302B]">إعداد وتأهيل متجر الأزياء والأحذية</h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E9B44C]/20 text-[#12302B] border border-[#E9B44C]/50">
                  إنجاز 83% من ملف المتجر
                </span>
              </div>
              <p className="text-xs text-[#576b66] mt-1">الخطوة الحالية: الحساب البنكي والمحفظة الرقمية لتحويل المستحقات المالية</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#12302B]">التقدم الإجمالي:</span>
              <div className="w-36 h-2.5 bg-[#F6F3EC] rounded-full overflow-hidden border border-[#E1DACB]">
                <div className="bg-gradient-to-r from-[#1F7A6E] to-[#E9B44C] h-full rounded-full w-5/6"></div>
              </div>
              <span className="text-xs font-bold text-[#1F7A6E]">5 من 6</span>
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
            <div className="p-2 rounded-lg flex items-center gap-2 bg-white/70 border border-[#E1DACB] text-xs">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">✓</span>
              <div><span className="text-[10px] text-gray-500 block">خطوة 4</span><span className="font-bold">التوصيل والرسوم</span></div>
            </div>
            <div className="p-2 rounded-lg flex items-center gap-2 bg-[#12302B] text-white shadow-sm ring-2 ring-[#E9B44C] text-xs">
              <span className="w-6 h-6 rounded-full bg-[#E9B44C] text-[#12302B] flex items-center justify-center font-bold text-xs">5</span>
              <div><span className="text-[10px] text-[#E9B44C] block">النشطة</span><span className="font-bold text-white">المستحقات</span></div>
            </div>
            <div className="p-2 rounded-lg flex items-center gap-2 bg-white/40 opacity-70 text-xs">
              <span className="w-6 h-6 rounded-full bg-[#E1DACB] text-gray-600 flex items-center justify-center font-bold text-xs">6</span>
              <div><span className="text-[10px] text-gray-400 block">الأخيرة</span><span className="font-medium">الاعتماد</span></div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          <section className="lg:col-span-8 bg-white rounded-2xl p-5 sm:p-6 md:p-7 border border-[#E1DACB] shadow-xs space-y-5">
            <form onSubmit={handleContinue} className="space-y-5">
              <div className="border-b border-[#E1DACB] pb-4">
                <h1 className="text-lg sm:text-xl font-bold text-[#12302B]">المستحقات والتحويل المالي</h1>
                <p className="text-xs text-[#576b66] mt-1">
                  أين ترغب في استلام أرباح مبيعاتك وقيم النقاط المستبدلة في متجرك؟
                </p>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs sm:text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">error</span>
                  <span>{error}</span>
                </div>
              )}

              {/* Method selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  onClick={() => setPayoutMethod('bank')}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                    payoutMethod === 'bank'
                      ? 'border-[#1F7A6E] bg-emerald-50/40 shadow-xs'
                      : 'border-[#E1DACB] bg-white hover:border-[#1F7A6E]/50'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl text-[#1F7A6E]">account_balance</span>
                  <div>
                    <span className="text-sm font-bold text-[#12302B] block">حساب بنكي رسمي (IBAN)</span>
                    <span className="text-xs text-[#576b66]">بنك فلسطين، البنك الإسلامي الفلسطيني</span>
                  </div>
                </label>

                <label
                  onClick={() => setPayoutMethod('jawwal_pay')}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                    payoutMethod === 'jawwal_pay'
                      ? 'border-[#1F7A6E] bg-emerald-50/40 shadow-xs'
                      : 'border-[#E1DACB] bg-white hover:border-[#1F7A6E]/50'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl text-[#1F7A6E]">phone_iphone</span>
                  <div>
                    <span className="text-sm font-bold text-[#12302B] block">محفظة جوال باي (Jawwal Pay)</span>
                    <span className="text-xs text-[#576b66]">إيداع فوري برقم الجوال المعتمد</span>
                  </div>
                </label>
              </div>

              {/* Bank Details */}
              {payoutMethod === 'bank' && (
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">اختر البنك</label>
                    <select
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-[#E1DACB] bg-white text-xs sm:text-sm text-[#12302B] focus:border-[#1F7A6E] focus:outline-none"
                    >
                      <option value="bank_of_palestine">بنك فلسطين (Bank of Palestine)</option>
                      <option value="palestine_islamic_bank">البنك الإسلامي الفلسطيني</option>
                      <option value="alquds_bank">بنك القدس</option>
                      <option value="arab_islamic_bank">البنك العربي الإسلامي</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">اسم صاحب الحساب التجاري (كما في البنك)</label>
                    <input
                      type="text"
                      value={accountHolder}
                      onChange={(e) => setAccountHolder(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-[#E1DACB] bg-white text-xs sm:text-sm text-[#12302B] focus:border-[#1F7A6E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">رقم الآيبان الدولي (IBAN)</label>
                    <input
                      type="text"
                      value={iban}
                      onChange={(e) => setIban(e.target.value)}
                      dir="ltr"
                      className="w-full h-11 px-3 rounded-xl border border-[#E1DACB] bg-white text-xs sm:text-sm text-[#12302B] font-mono focus:border-[#1F7A6E] focus:outline-none text-left"
                    />
                  </div>
                </div>
              )}

              {/* Jawwal Pay Details */}
              {payoutMethod === 'jawwal_pay' && (
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-[#12302B] mb-1.5">رقم محفظة جوال باي (Jawwal Pay)</label>
                    <input
                      type="text"
                      value={jawwalPayPhone}
                      onChange={(e) => setJawwalPayPhone(e.target.value)}
                      dir="ltr"
                      className="w-full h-11 px-3 rounded-xl border border-[#E1DACB] bg-white text-xs sm:text-sm text-[#12302B] font-mono focus:border-[#1F7A6E] focus:outline-none text-left"
                    />
                  </div>
                </div>
              )}

              {/* Settlement Cycle */}
              <div className="pt-4 border-t border-[#E1DACB] space-y-3">
                <label className="block text-xs font-bold text-[#12302B]">دورة التسوية المالية لتحويل المبالغ</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    onClick={() => setPayoutCycle('weekly')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs ${
                      payoutCycle === 'weekly'
                        ? 'border-[#1F7A6E] bg-emerald-50/40 text-[#1F7A6E] font-bold'
                        : 'border-[#E1DACB] bg-white text-[#12302B]'
                    }`}
                  >
                    <span>أسبوعياً (كل يوم خميس) - موصى به</span>
                    <input
                      type="radio"
                      name="payout_cycle"
                      checked={payoutCycle === 'weekly'}
                      onChange={() => setPayoutCycle('weekly')}
                      className="text-[#1F7A6E]"
                    />
                  </label>

                  <label
                    onClick={() => setPayoutCycle('biweekly')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs ${
                      payoutCycle === 'biweekly'
                        ? 'border-[#1F7A6E] bg-emerald-50/40 text-[#1F7A6E] font-bold'
                        : 'border-[#E1DACB] bg-white text-[#12302B]'
                    }`}
                  >
                    <span>كل أسبوعين (نصف شهري)</span>
                    <input
                      type="radio"
                      name="payout_cycle"
                      checked={payoutCycle === 'biweekly'}
                      onChange={() => setPayoutCycle('biweekly')}
                      className="text-[#1F7A6E]"
                    />
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-[#E1DACB] flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => navigate('/merchant/onboarding/delivery-fees')}
                  className="w-full sm:w-auto px-5 h-11 rounded-xl border border-[#12302B]/30 hover:bg-[#F6F3EC] text-[#12302B] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  <span>السابق (التوصيل والرسوم)</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 h-11 rounded-xl bg-[#E9B44C] hover:bg-[#dda437] text-[#12302B] font-bold text-xs sm:text-sm shadow-sm hover:shadow flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>متابعة إلى المراجعة والاعتماد (الخطوة الأخيرة)</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                </button>
              </div>
            </form>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#12302B] text-white rounded-2xl p-5 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-[#E9B44C]">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
                <h3 className="text-sm font-bold">نظام الضمان المالي Escrow</h3>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                تحفظ أموال المبيعات النقدية والإلكترونية بأمان في حساب تبادل الضامن حتى تأكيد الزبون لاستلام القطع بالرمز السري، مما يضمن تحصيل مستحقاتك بنسبة 100% بدون أي نزاعات.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
