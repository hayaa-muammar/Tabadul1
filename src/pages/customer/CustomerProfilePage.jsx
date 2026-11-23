import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerHeader from '../../components/common/CustomerHeader';
import Footer from '../../components/common/Footer';

export default function CustomerProfilePage() {
  const [activeTab, setActiveTab] = useState('personal');
  const [name, setName] = useState('سارة أحمد خليل');
  const [phone, setPhone] = useState('0599-876543');
  const [email, setEmail] = useState('sara.khalil@example.com');
  const [city, setCity] = useState('غزة');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#1F7A6E] selection:text-white">
      <CustomerHeader />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        {/* Breadcrumb */}
        <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-xs font-medium text-[#12302B]/60 mb-6">
          <Link to="/shopper" className="hover:text-[#1F7A6E] transition-colors">
            الرئيسية
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <Link to="/shopper" className="hover:text-[#1F7A6E] transition-colors">
            لوحة التحكم
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <span className="text-[#1F7A6E] font-bold">البيانات الشخصية وإعدادات الحساب</span>
        </nav>

        {/* Profile Hero Card */}
        <section className="bg-gradient-to-br from-[#12302B] via-[#1F3A5F] to-[#162842] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl mb-8 border border-white/10">
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#E9B44C]/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#1F7A6E]/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* User Info Segment */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-right gap-6">
              <div className="relative group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#E9B44C] text-[#12302B] flex items-center justify-center text-4xl font-black shadow-2xl ring-4 ring-[#E9B44C]">
                  س
                </div>
                <div className="absolute -top-2 -right-2 bg-emerald-500 text-white p-1 rounded-full shadow border-2 border-white" title="حساب موثق">
                  <span className="material-symbols-outlined text-sm">verified</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{name}</h1>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E9B44C] text-[#2a1800] shadow-sm">
                    <span className="material-symbols-outlined text-sm">workspace_premium</span>
                    المستوى الذهبي (Gold Tier)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">متسوقة مميزة في أرقى بوتيكات الأزياء والموضة</p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-gray-300/80 pt-1">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-[#E9B44C]">calendar_today</span>
                    عضو منذ: مارس 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-[#E9B44C]">fingerprint</span>
                    معرف العميل: <span className="font-mono font-bold text-white">#TBD-USR-8821</span>
                  </span>
                  <span className="flex items-center gap-1 text-emerald-300 font-bold">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    الهوية موثقة
                  </span>
                </div>
              </div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
              <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-center backdrop-blur-md">
                <span className="material-symbols-outlined text-[#E9B44C] text-2xl mb-1">savings</span>
                <div className="text-lg font-black text-white">480 ₪</div>
                <div className="text-[11px] text-gray-300 font-medium">إجمالي التوفير</div>
                <div className="text-[10px] text-[#E9B44C] mt-1 font-bold">+96,000 نقطة كسب</div>
              </div>

              <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-center backdrop-blur-md">
                <span className="material-symbols-outlined text-emerald-400 text-2xl mb-1">local_mall</span>
                <div className="text-lg font-black text-white">14</div>
                <div className="text-[11px] text-gray-300 font-medium">طلبات أزياء مكتملة</div>
                <div className="text-[10px] text-emerald-300 mt-1 font-bold">نسبة نجاح 100%</div>
              </div>

              <div className="bg-white/10 border border-white/15 p-4 rounded-2xl text-center backdrop-blur-md">
                <span className="material-symbols-outlined text-rose-300 text-2xl mb-1">storefront</span>
                <div className="text-lg font-black text-white">4</div>
                <div className="text-[11px] text-gray-300 font-medium">متاجر مفضلة</div>
                <div className="text-[10px] text-gray-300 mt-1 truncate">لمسة، دار الياقوت</div>
              </div>

              <div className="bg-white/10 border border-[#E9B44C]/40 p-4 rounded-2xl text-center backdrop-blur-md">
                <span className="material-symbols-outlined text-[#E9B44C] text-2xl mb-1">stars</span>
                <div className="text-lg font-black text-[#E9B44C]">5%</div>
                <div className="text-[11px] text-gray-300 font-medium">كاش باك دائم</div>
                <div className="text-[10px] text-[#E9B44C] mt-1 font-bold">ميزة ذهبية حصرية</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Bar */}
        <div className="flex items-center overflow-x-auto pb-3 mb-8 gap-2 border-b border-[#E1DACB]">
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'personal'
                ? 'bg-[#1F7A6E] text-white shadow-md'
                : 'text-[#12302B]/70 hover:bg-white hover:text-[#1F7A6E]'
            }`}
          >
            <span className="material-symbols-outlined text-lg">person</span>
            <span>البيانات الشخصية</span>
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'addresses'
                ? 'bg-[#1F7A6E] text-white shadow-md'
                : 'text-[#12302B]/70 hover:bg-white hover:text-[#1F7A6E]'
            }`}
          >
            <span className="material-symbols-outlined text-lg">local_shipping</span>
            <span>العناوين المحفوظة</span>
            <span className="px-2 py-0.5 rounded-full text-xs bg-[#E1DACB] text-[#12302B]">2</span>
          </button>

          <button
            onClick={() => setActiveTab('payments')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'payments'
                ? 'bg-[#1F7A6E] text-white shadow-md'
                : 'text-[#12302B]/70 hover:bg-white hover:text-[#1F7A6E]'
            }`}
          >
            <span className="material-symbols-outlined text-lg">credit_card</span>
            <span>المحفظة وطرق الدفع</span>
          </button>

          <button
            onClick={() => setActiveTab('preferences')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'preferences'
                ? 'bg-[#1F7A6E] text-white shadow-md'
                : 'text-[#12302B]/70 hover:bg-white hover:text-[#1F7A6E]'
            }`}
          >
            <span className="material-symbols-outlined text-lg">style</span>
            <span>تفضيلات الأزياء والمقاسات</span>
          </button>

          <Link
            to="/customer/logout"
            className="mr-auto px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-1.5 text-[#B3261E] hover:bg-[#B3261E]/10 transition-colors whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            <span>تسجيل الخروج</span>
          </Link>
        </div>

        {/* Tab 1: Personal Info */}
        {activeTab === 'personal' && (
          <form onSubmit={handleSave} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E1DACB] shadow-sm max-w-3xl space-y-6">
            <h2 className="text-lg font-bold text-[#12302B] pb-3 border-b border-[#E1DACB]">
              تعديل المعلومات الأساسية
            </h2>

            {savedSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-base">check_circle</span>
                <span>تم حفظ التعديلات بنجاح!</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#12302B] mb-1.5">الاسم الكامل</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/40 p-3 text-xs sm:text-sm text-[#12302B] focus:border-[#1F7A6E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12302B] mb-1.5">رقم الجوال الموثق</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/40 p-3 text-xs sm:text-sm text-[#12302B] focus:border-[#1F7A6E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12302B] mb-1.5">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/40 p-3 text-xs sm:text-sm text-[#12302B] focus:border-[#1F7A6E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12302B] mb-1.5">المدينة</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/40 p-3 text-xs sm:text-sm text-[#12302B] focus:border-[#1F7A6E] focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#12302B] hover:bg-[#1F7A6E] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                حفظ التغييرات
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Addresses */}
        {activeTab === 'addresses' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E1DACB] shadow-sm max-w-3xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E1DACB]">
              <h2 className="text-lg font-bold text-[#12302B]">عناوين التوصيل المسجلة</h2>
              <button
                onClick={() => alert('إضافة عنوان جديد متاحة في التحديث القادم')}
                className="px-3 py-1.5 rounded-lg bg-[#1F7A6E] text-white text-xs font-bold hover:bg-[#18453e] cursor-pointer"
              >
                + إضافة عنوان جديد
              </button>
            </div>

            <div className="p-4 rounded-xl border-2 border-[#1F7A6E] bg-[#1F7A6E]/5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#1F7A6E]">العنوان الافتراضي (المنزل)</span>
                <span className="text-xs text-[#005232] font-bold">نشط</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#12302B]">حي الرمال الشمالي، بالقرب من مجمع الهدى، عمارة الأمل</p>
              <p className="text-xs text-[#576b66]">الطابق الثالث، شقة 7 • جوال: 0599-876543</p>
            </div>

            <div className="p-4 rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/30 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#576b66]">عنوان العمل</span>
                <button className="text-xs text-[#1F7A6E] font-bold">تعيين كافتراضي</button>
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#12302B]">شارع عمر المختار، برج الشروق، الطابق الرابع</p>
              <p className="text-xs text-[#576b66]">مكتب 12 • جوال: 0599-876543</p>
            </div>
          </div>
        )}

        {/* Tab 3: Payments */}
        {activeTab === 'payments' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E1DACB] shadow-sm max-w-3xl space-y-4">
            <h2 className="text-lg font-bold text-[#12302B] pb-3 border-b border-[#E1DACB]">
              المحفظة الإلكترونية وطرق الدفع
            </h2>

            <div className="p-4 rounded-xl bg-[#12302B] text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-white/70 block">رصيد محفظة تبادل الرقمية</span>
                <span className="text-2xl font-black text-[#E9B44C]">5,750 نقطة (28.75 ₪)</span>
              </div>
              <Link
                to="/customer/wallet"
                className="px-4 py-2 rounded-xl bg-[#E9B44C] text-[#12302B] font-bold text-xs"
              >
                إدارة المحفظة
              </Link>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-[#12302B] block">المحافظ البنكية المربوطة:</span>
              <div className="p-3 rounded-xl border border-[#E1DACB] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600">account_balance_wallet</span>
                  <span className="text-xs sm:text-sm font-bold">جوال باي (Jawwal Pay) - 0599***543</span>
                </div>
                <span className="text-xs text-[#005232] font-bold bg-[#71dba2]/20 px-2 py-0.5 rounded">مفعل</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Fashion Preferences */}
        {activeTab === 'preferences' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E1DACB] shadow-sm max-w-3xl space-y-4">
            <h2 className="text-lg font-bold text-[#12302B] pb-3 border-b border-[#E1DACB]">
              تفضيلات المقاسات والأزياء
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/30">
                <span className="text-xs text-[#576b66] block">مقاس الفساتين المفضل</span>
                <span className="text-base font-bold text-[#12302B]">38 (M) - 40 (L)</span>
              </div>
              <div className="p-3 rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/30">
                <span className="text-xs text-[#576b66] block">مقاس الأحذية</span>
                <span className="text-base font-bold text-[#12302B]">38 EU</span>
              </div>
              <div className="p-3 rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/30">
                <span className="text-xs text-[#576b66] block">الألوان المفضلة</span>
                <span className="text-base font-bold text-[#12302B]">شامبين، زمردي، كحلي</span>
              </div>
              <div className="p-3 rounded-xl border border-[#E1DACB] bg-[#F6F3EC]/30">
                <span className="text-xs text-[#576b66] block">فئة التسوق المفضلة</span>
                <span className="text-base font-bold text-[#12302B]">أزياء سهرة وعبايات راقية</span>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
