import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function WithdrawFundsPage() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(4850);
  const [destination, setDestination] = useState('bank');
  const availableBalance = 4850;

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (amount > availableBalance) {
      navigate('/merchant/wallet/withdraw/failed');
    } else {
      navigate('/merchant/wallet/withdraw/success');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#E4DFD3] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-gray-500">
          <Link to="/merchant/dashboard" className="hover:text-[#12302B]">لوحة التحكم</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_left</span>
          <Link to="/merchant/wallet" className="hover:text-[#12302B]">المحفظة والتحويلات المالية</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_left</span>
          <span className="text-[#1F7A6E] font-bold">طلب سحب رصيد فوري</span>
        </div>
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Available Balance Hero Banner */}
        <section className="mb-8 rounded-2xl bg-[#12302B] text-white p-6 sm:p-8 shadow-xl relative overflow-hidden border border-[#12302B]/40">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs text-[#E9B44C] font-bold block mb-1">الرصيد المتاح للسحب الفوري اليوم</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-white">4,850.00</span>
                <span className="text-lg text-[#E9B44C] font-bold">₪ شيكل</span>
              </div>
              <p className="text-xs text-white/70 mt-1">متاح للصرف والتحويل الآن بدون عمولات إضافية</p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/merchant/wallet/transfers"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20"
              >
                سجل التحويلات السابقة
              </Link>
            </div>
          </div>
        </section>

        {/* Withdrawal Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <form onSubmit={handleWithdraw} className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-[#E4DFD3] shadow-sm space-y-6">
            <h2 className="text-base font-bold text-[#12302B] pb-3 border-b border-gray-100 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1F7A6E]">payments</span>
              بيانات ومقدار مبلغ السحب
            </h2>

            <div>
              <label className="block text-xs font-bold text-[#12302B] mb-2">المبلغ المطلوب سحبه (₪)</label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl border border-[#E4DFD3] text-lg font-bold text-[#12302B] pl-10 focus:border-[#12302B]"
                  max={10000}
                  min={50}
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-500 text-sm">₪</span>
              </div>
              <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                <span>الحد الأدنى للسحب: 50 ₪</span>
                <button
                  type="button"
                  onClick={() => setAmount(availableBalance)}
                  className="text-[#1F7A6E] font-bold hover:underline"
                >
                  سحب كامل الرصيد (4,850 ₪)
                </button>
              </div>
            </div>

            {/* Destination Selection */}
            <div>
              <label className="block text-xs font-bold text-[#12302B] mb-3">اختر جهة الإيداع المعتمدة</label>
              <div className="space-y-3">
                <label
                  onClick={() => setDestination('bank')}
                  className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    destination === 'bank'
                      ? 'border-[#12302B] bg-[#F6F3EC]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="dest"
                    checked={destination === 'bank'}
                    onChange={() => setDestination('bank')}
                    className="mt-1 text-[#12302B]"
                  />
                  <div className="flex-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#12302B]">بنك فلسطين (Bank of Palestine)</span>
                      <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">الحساب الأساسي</span>
                    </div>
                    <span className="font-mono text-gray-600 block mt-1 dir-ltr text-right">PS04PALS00001234567890123456</span>
                    <span className="text-gray-400 block mt-0.5">يصل خلال 12 إلى 24 ساعة عمل</span>
                  </div>
                </label>

                <label
                  onClick={() => setDestination('wallet')}
                  className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    destination === 'wallet'
                      ? 'border-[#12302B] bg-[#F6F3EC]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="dest"
                    checked={destination === 'wallet'}
                    onChange={() => setDestination('wallet')}
                    className="mt-1 text-[#12302B]"
                  />
                  <div className="flex-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#12302B]">محفظة جوال باي (Jawwal Pay)</span>
                      <span className="text-[11px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-bold">فوري 24/7</span>
                    </div>
                    <span className="font-mono text-gray-600 block mt-1 dir-ltr text-right">0599-876543</span>
                    <span className="text-gray-400 block mt-0.5">تحويل لحظي مباشر لمحفظتك</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-500">
                العمولة التشغيلية: <strong className="text-emerald-700 font-bold">0.00 ₪ (مجاناً)</strong>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] font-black text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">send</span>
                <span>تأكيد طلب السحب الفوري</span>
              </button>
            </div>
          </form>

          {/* Sidebar Guidelines (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 text-xs">
            <div className="bg-white rounded-2xl p-5 border border-[#E4DFD3] shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-[#12302B] pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1F7A6E]">verified_user</span>
                معايير الأمان المالي
              </h3>
              <p className="text-gray-600 leading-relaxed">
                يتم تنفيذ التحويلات عبر نظام المصادقة الثنائي المعتمد لشبكة تبادل لضمان وصول المبالغ لحساب المتجر المسجل حصراً.
              </p>
              <div className="p-3 bg-amber-50 rounded-xl text-amber-900 border border-amber-200">
                لا تشارك كود التحويل مع أي شخص. موظفو تبادل لن يطلبوا رمز المرور الخاص بك.
              </div>
            </div>

            <div className="bg-[#1F7A6E]/10 rounded-2xl p-5 border border-[#1F7A6E]/20 space-y-2">
              <h4 className="font-bold text-[#1F7A6E] text-sm">تحتاج رفع سقف السحب اليومي؟</h4>
              <p className="text-gray-600 leading-relaxed">
                يمكن للبوتيكات المعتمدة ذات التقييم المرتفع في غزة طلب زيادة السقف الفوري عبر التواصل مع مسؤول الحسابات.
              </p>
              <a href="https://wa.me/970599123456" target="_blank" rel="noreferrer" className="inline-block text-[#1F7A6E] font-bold hover:underline mt-1">
                تواصل مع مسؤول الحساب ←
              </a>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
