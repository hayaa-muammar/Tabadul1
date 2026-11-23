import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MerchantHeader from '../../../components/common/MerchantHeader';
import Footer from '../../../components/common/Footer';

export default function ReviewSubmitStepPage() {
  const navigate = useNavigate();
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [agreedReturn, setAgreedReturn] = useState(true);
  const [agreedSettlement, setAgreedSettlement] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!agreedTerms || !agreedReturn || !agreedSettlement) {
      setError('يرجى الموافقة على جميع الشروط والإقرارات الإلزامية الثلاثة للمتابعة.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      navigate('/merchant/application/under-review');
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#12302B] font-tajawal antialiased selection:bg-[#E9B44C] selection:text-[#12302B]">
      <MerchantHeader />

      {/* Step Tracker Header Section */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-6 pb-2 w-full">
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-2 border border-gray-200/60">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-[#1F7A6E] uppercase tracking-wider">مسار انضمام متجر أزياء وأحذية</span>
              <h1 className="text-xl md:text-2xl font-bold text-[#12302B] mt-0.5">الخطوة 6: المراجعة النهائية واعتماد المتجر</h1>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold bg-[#fdf5e7] text-[#835400] px-3.5 py-1.5 rounded-full border border-[#E9B44C]/30">
              <span className="material-symbols-outlined text-[16px] text-[#835400]">verified</span>
              <span>إنجاز 100% من ملف المتجر</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F6F3EC] border border-[#EDE7DA]">
              <div className="w-7 h-7 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px] font-bold">check</span>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-500 truncate">الخطوة 1</p>
                <p className="text-xs font-bold text-[#12302B] truncate">التحقق ✓</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F6F3EC] border border-[#EDE7DA]">
              <div className="w-7 h-7 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px] font-bold">check</span>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-500 truncate">الخطوة 2</p>
                <p className="text-xs font-bold text-[#12302B] truncate">بيانات المتجر ✓</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F6F3EC] border border-[#EDE7DA]">
              <div className="w-7 h-7 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px] font-bold">check</span>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-500 truncate">الخطوة 3</p>
                <p className="text-xs font-bold text-[#12302B] truncate">الهوية والوصف ✓</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F6F3EC] border border-[#EDE7DA]">
              <div className="w-7 h-7 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px] font-bold">check</span>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-500 truncate">الخطوة 4</p>
                <p className="text-xs font-bold text-[#12302B] truncate">التوصيل والرسوم ✓</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F6F3EC] border border-[#EDE7DA]">
              <div className="w-7 h-7 rounded-full bg-[#1F7A6E] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px] font-bold">check</span>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-500 truncate">الخطوة 5</p>
                <p className="text-xs font-bold text-[#12302B] truncate">المستحقات والتحويل ✓</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#12302B] text-white shadow-sm border border-[#12302B]">
              <div className="w-7 h-7 rounded-full bg-[#E9B44C] text-[#12302B] font-bold flex items-center justify-center shrink-0 text-xs shadow-sm">6</div>
              <div className="min-w-0">
                <p className="text-[11px] text-[#E9B44C] truncate">الخطوة الحالية</p>
                <p className="text-xs font-bold text-white truncate">المراجعة والاعتماد</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Canvas Section */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 flex-1 w-full">
        <div className="grid grid-cols-12 gap-6">
          {/* Center Review Columns (8 cols) */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
            {/* 1. Store Identity & Profile Review Card */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-6 shadow-sm relative overflow-hidden">
              <div className="flex items-start justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#eaf4f2] text-[#1F7A6E] flex items-center justify-center">
                    <span className="material-symbols-outlined">storefront</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#12302B]">ملخص هوية وبيانات المتجر</h2>
                    <p className="text-xs text-gray-500">تم التحقق من الوصف وتصنيفات الأزياء والصور المرفقة</p>
                  </div>
                </div>
                <Link
                  to="/merchant/onboarding/store-info"
                  className="flex items-center gap-1 text-xs font-bold text-[#1F7A6E] hover:text-[#12302B] bg-[#f0f8f6] hover:bg-[#e4f3f0] px-3 py-1.5 rounded-lg transition-colors border border-[#1F7A6E]/20"
                >
                  <span className="material-symbols-outlined text-sm">edit</span>
                  <span>تعديل (الخطوة 2 و 3)</span>
                </Link>
              </div>

              {/* Store Identity Snapshot */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="md:col-span-1 flex flex-col gap-2">
                  <div className="relative w-full h-32 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                    <img
                      className="w-full h-full object-cover"
                      alt="بوتيك لمسة غزة"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDghBnFp_alkF7UQPQx7qsKdiUM-tGbZrSIPGxousk-3SLn2DSFryVxlcJWxIKD_wW3QJfIl7MNwSjpVP0B7OMy4sfv7_OC1RdU4uXA6nhoSo8x5kuY-i_D5Om23VYsr2-R5KcckxBNdyulbyaHCm7rAcZXSR7pvoVrYK_DHBKF0LErhTOJxQfLE9D00wCnu6BoQTed16LBzLVsHQ-eWgwD_GR4msY93Z2df84cfqSp"
                    />
                    <div className="absolute -bottom-2 right-3 w-14 h-14 rounded-xl border-2 border-white shadow-md overflow-hidden bg-white">
                      <img
                        className="w-full h-full object-cover"
                        alt="شعار بوتيك لمسة"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs-cCktfjhcPwWH3Mv4iNq8PC5OswLS1EpegzTk8WL3B2wuYUM6nQ70LU8-hec0z6qw6nprbTn0nNZwEc1al6qnzL7FqLfC5HclzJacxpqzKnMTyUlDURHDC83H70nsKbx8vAv3G-Kw3IM1DLxCx0dPff7QTFu7BUpEXvBw4_5eA3KhaiwgdY545e9gxe-9G3CCjIX19NW83T_xxbZirWGffGA2d6vpDGE_GPRed-C"
                      />
                    </div>
                  </div>
                  <div className="mt-2 text-[11px] text-gray-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs text-[#1F7A6E]">check_circle</span>
                    <span>الشعار والغلاف بجودة عالية (Retina)</span>
                  </div>
                </div>

                <div className="md:col-span-2 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <span className="text-lg font-black text-[#12302B]">بوتيك لمسة</span>
                      <span className="bg-[#1F7A6E]/10 text-[#1F7A6E] text-xs font-bold px-2.5 py-0.5 rounded-full">معتمد للمنصة</span>
                      <span className="bg-[#E9B44C]/20 text-[#835400] text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>hotel_class</span>
                        <span>فئة البوتيكات المتميزة</span>
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      وجهة متخصصة في أرقى تصاميم الأزياء النسائية المعاصرة، العبايات الخليجية والمطرزة، وتشكيلات الأحذية الفاخرة التي تلبي ذوق المرأة الأنيقة في غزة.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100 text-xs">
                    <div>
                      <span className="text-gray-400 block mb-1">النشاط التجاري المعتمد:</span>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded font-medium">أزياء نسائية</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded font-medium">عبايات</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded font-medium">أحذية راقية</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400 block mb-1">قنوات التواصل الموثقة:</span>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="flex items-center gap-0.5 font-medium"><span className="material-symbols-outlined text-xs text-[#1F7A6E]">chat</span> +970 59 987 6543</span>
                        <span className="flex items-center gap-0.5 font-medium"><span className="material-symbols-outlined text-xs text-[#1F7A6E]">alternate_email</span> @lamsa.boutique</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Delivery & Coverage Review Card */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fdf5e7] text-[#835400] flex items-center justify-center">
                    <span className="material-symbols-outlined">local_shipping</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#12302B]">سياسة التوصيل والتغطية الجغرافية</h2>
                    <p className="text-xs text-gray-500">تم ضبط مناطق التسليم السريع ورسوم الطلبات</p>
                  </div>
                </div>
                <Link
                  to="/merchant/onboarding/delivery"
                  className="flex items-center gap-1 text-xs font-bold text-[#1F7A6E] hover:text-[#12302B] bg-[#f0f8f6] hover:bg-[#e4f3f0] px-3 py-1.5 rounded-lg transition-colors border border-[#1F7A6E]/20"
                >
                  <span className="material-symbols-outlined text-sm">edit</span>
                  <span>تعديل (الخطوة 4)</span>
                </Link>
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#F6F3EC] p-3.5 rounded-xl border border-[#EDE7DA]">
                  <span className="text-xs text-gray-500 block mb-1">نطاق التغطية</span>
                  <span className="font-bold text-sm text-[#12302B] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-base">pin_drop</span>
                    كافة محافظات قطاع غزة
                  </span>
                  <p className="text-[11px] text-gray-500 mt-1">غزة، الشمال، الوسطى، خانيونس، ورفح</p>
                </div>
                <div className="bg-[#F6F3EC] p-3.5 rounded-xl border border-[#EDE7DA]">
                  <span className="text-xs text-gray-500 block mb-1">رسوم التوصيل المحددة</span>
                  <span className="font-bold text-sm text-[#12302B] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-base">payments</span>
                    10 - 15 شيكل ثابتة
                  </span>
                  <p className="text-[11px] text-[#1F7A6E] font-medium mt-1">توصيل مجاني للطلبات فوق 200 شيكل</p>
                </div>
                <div className="bg-[#F6F3EC] p-3.5 rounded-xl border border-[#EDE7DA]">
                  <span className="text-xs text-gray-500 block mb-1">مدة وصول الطلب للزبون</span>
                  <span className="font-bold text-sm text-[#12302B] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#1F7A6E] text-base">schedule</span>
                    24 إلى 48 ساعة كحد أقصى
                  </span>
                  <p className="text-[11px] text-gray-500 mt-1">متاح خيار استلام المقاس من المحل</p>
                </div>
              </div>
            </div>

            {/* 3. Financial & Loyalty Cash-Back Review Card */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#eaf4f2] text-[#1F7A6E] flex items-center justify-center">
                    <span className="material-symbols-outlined">account_balance_wallet</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#12302B]">الحساب المالي ونظام نقاط تبادل</h2>
                    <p className="text-xs text-gray-500">طريقة التحويل ونسب الحوافز التسويقية للزبائن</p>
                  </div>
                </div>
                <Link
                  to="/merchant/onboarding/payouts"
                  className="flex items-center gap-1 text-xs font-bold text-[#1F7A6E] hover:text-[#12302B] bg-[#f0f8f6] hover:bg-[#e4f3f0] px-3 py-1.5 rounded-lg transition-colors border border-[#1F7A6E]/20"
                >
                  <span className="material-symbols-outlined text-sm">edit</span>
                  <span>تعديل (الخطوة 5)</span>
                </Link>
              </div>

              <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border border-gray-100 rounded-xl p-3.5 bg-white">
                  <span className="text-[11px] text-gray-400 block mb-1">المحفظة الإلكترونية</span>
                  <div className="flex items-center gap-1.5 font-bold text-[#12302B] text-sm">
                    <span className="material-symbols-outlined text-sm text-[#1F7A6E]">contactless</span>
                    <span>جوال باي (Jawwal Pay)</span>
                  </div>
                  <span className="text-[11px] text-gray-500 font-mono mt-0.5 block">0599-876543</span>
                </div>
                <div className="border border-gray-100 rounded-xl p-3.5 bg-white">
                  <span className="text-[11px] text-gray-400 block mb-1">دورة التحويل النقدي</span>
                  <div className="flex items-center gap-1.5 font-bold text-[#12302B] text-sm">
                    <span className="material-symbols-outlined text-sm text-[#1F7A6E]">event_repeat</span>
                    <span>أسبوعية (كل خميس)</span>
                  </div>
                  <span className="text-[11px] text-[#1F7A6E] mt-0.5 block">تحويل بنكي / محفظة فوري</span>
                </div>
                <div className="border border-gray-100 rounded-xl p-3.5 bg-white">
                  <span className="text-[11px] text-gray-400 block mb-1">عمولة المنصة التشغيلية</span>
                  <div className="flex items-center gap-1.5 font-bold text-[#12302B] text-sm">
                    <span className="material-symbols-outlined text-sm text-[#E9B44C]">verified</span>
                    <span>3% فقط</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 font-medium mt-0.5 block">مجاناً لأول 14 يوماً</span>
                </div>
                <div className="border border-gray-100 rounded-xl p-3.5 bg-white">
                  <span className="text-[11px] text-gray-400 block mb-1">كاش باك نقاط الزبون</span>
                  <div className="flex items-center gap-1.5 font-bold text-[#835400] text-sm">
                    <span className="material-symbols-outlined text-sm text-[#E9B44C]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                    <span>5% رصيد نقاط</span>
                  </div>
                  <span className="text-[11px] text-gray-500 mt-0.5 block">محفز لإعادة الشراء</span>
                </div>
              </div>
            </div>

            {/* 4. Mandatory Terms & Legal Commitments */}
            <div className="bg-gradient-to-b from-white to-[#FDFBF7] border border-gray-200/90 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#E9B44C]/20 text-[#835400] flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">gavel</span>
                </div>
                <h3 className="text-base font-bold text-[#12302B]">
                  إقرارات الانضمام والتعهد بالمعايير (مطلوب للتفعيل)
                </h3>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs sm:text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">error</span>
                  <span>{error}</span>
                </div>
              )}

              <div className="space-y-3.5">
                <label className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#1F7A6E] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={agreedTerms}
                    onChange={(e) => setAgreedTerms(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded text-[#1F7A6E] focus:ring-[#1F7A6E] border-gray-300"
                  />
                  <div className="text-sm">
                    <span className="font-bold text-[#12302B] block">الموافقة على شروط الاستخدام وسياسة مكافحة الاحتيال لمنصة تبادل</span>
                    <span className="text-xs text-gray-500">أقر بأن جميع السلع المعروضة في بوتيك لمسة أصلية ومطابقة تماماً للأوصاف والصور المرفوعة دون تضليل.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#1F7A6E] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={agreedReturn}
                    onChange={(e) => setAgreedReturn(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded text-[#1F7A6E] focus:ring-[#1F7A6E] border-gray-300"
                  />
                  <div className="text-sm">
                    <span className="font-bold text-[#12302B] block">الالتزام بضمان استبدال المقاس خلال 24 ساعة للأزياء والأحذية</span>
                    <span className="text-xs text-gray-500">نتعهد بتوفير بديل قياس مناسب أو استرجاع نقدي سلس للمشترين حفاظاً على ثقة وتجربة متسوقي غزة.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#1F7A6E] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={agreedSettlement}
                    onChange={(e) => setAgreedSettlement(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded text-[#1F7A6E] focus:ring-[#1F7A6E] border-gray-300"
                  />
                  <div className="text-sm">
                    <span className="font-bold text-[#12302B] block">الموافقة على اتفاقية الشراكة للعام 2026 وتفويض المنصة بتسوية النقاط</span>
                    <span className="text-xs text-gray-500">قبول استبدال قسائم نقاط برنامج الولاء عند الشراء والمحاسبة عليها وفق التقرير الأسبوعي المعتمد.</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            {/* Customer Preview Card */}
            <div className="bg-white border border-gray-200/90 rounded-2xl p-5 border-t-4 border-t-[#E9B44C] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">معاينة مباشرة</span>
                <span className="bg-[#12302B] text-white text-[11px] px-2 py-0.5 rounded-full font-bold">كما يراه المتسوق</span>
              </div>

              <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                <div className="h-32 bg-gray-100 relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="عرض البوتيك"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBECh1TZmj1Z8Hui_pJpZONKrDetWex8opbRCQRUu5hTTbF10yXovWZ82yjrosQnTjte-ZVLVR6xPDoWKGTUN8UjgS7coRKsrv6eu6ScGg-0yvlY9Em6MQhvoQdhb7QAJNbFlg1CW4w2tmt_iPEmvKbgojM7ec8StBH6A3vNd7vGMW1yuVjPB_FG3cqcspGP_FeUB_nTYc4Mjcj3M5ZpsKTVGf1NMupsxxwbW51MFqg"
                  />
                  <span className="absolute top-2 left-2 bg-[#12302B]/85 text-[#E9B44C] text-[10px] font-extrabold px-2 py-0.5 rounded-md backdrop-blur-sm">
                    اكسب 5% نقاط
                  </span>
                  <div className="absolute -bottom-3 right-3 w-10 h-10 rounded-lg border-2 border-white bg-white overflow-hidden shadow">
                    <img
                      className="w-full h-full object-cover"
                      alt="شعار البوتيك"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxmfoHRFeYfR8B6d-WKG4tkxM3IsHc1_x2iTNdDzr0LO3MyFG_h6q8eZT--hZCZV-Z--XqRIEmoPT8ExRx1qfT_KICtClMLcECG9r4gYNImiOD9AoXIdKJ1Spf_Mw_wVE79hTSwALA1b6Rt-fNqshm1F72ivz4w5_c4uhMG6Jdt7Ktgfr3GNLeQDZNEXntLxsbjUGU12QsC_-gT08h8L_mXeR8SjF1kaHxANkpLFs1"
                    />
                  </div>
                </div>
                <div className="p-3.5 pt-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-[#12302B]">بوتيك لمسة</h4>
                    <div className="flex items-center text-[#E9B44C] text-xs font-bold">
                      <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span>جديد</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">أزياء نسائية • عبايات • أحذية فاخرة</p>
                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-600">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-[#1F7A6E]">timer</span>
                      توصيل 24-48 ساعة
                    </span>
                    <span className="text-[#1F7A6E] font-bold">غزة والمحافظات</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 text-center mt-3">
                سيظهر متجرك في واجهة تطبيق تبادل ضمن تصنيف الأزياء المميزة فور الاعتماد.
              </p>
            </div>

            {/* Post-Submission Next Steps Guide */}
            <div className="bg-[#12302B] text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#1F7A6E]/30 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[#E9B44C]">timeline</span>
                <h3 className="text-base font-bold text-white">ماذا يحدث بعد تقديم الطلب؟</h3>
              </div>
              <ol className="space-y-4 text-xs">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E9B44C] text-[#12302B] font-black flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">مراجعة الملف خلال 24 ساعة</strong>
                    <p className="text-[#c7dad4]">يقوم فريق شركاء تبادل بفحص الحساب والتأكد من وضوح المنتجات والأسعار.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#1F7A6E] text-white font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">تفعيل لوحة التاجر وتدريب مجاني</strong>
                    <p className="text-[#c7dad4]">إرسال بيانات تسجيل الدخول وتطبيق التاجر لإدارة الطلبات والمخزون بسهولة.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#1F7A6E] text-white font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">إطلاق حملة ترويجية للمشتركين</strong>
                    <p className="text-[#c7dad4]">إشعار أكثر من 15,000 مستخدم في منصة تبادل بانضمام بوتيك لمسة مع نقاط مضاعفة.</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Support Card */}
            <div className="bg-[#FDFBF7] border border-gray-200/90 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#1F7A6E]/10 text-[#1F7A6E] flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">support_agent</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#12302B]">تحتاج مساعدة قبل الاعتماد؟</h4>
                  <p className="text-xs text-gray-500">فريق تجار غزة متاح لمساندتك هاتفياً</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-gray-200/60">
                <span className="font-bold text-[#12302B]">الرقم المجاني: 1800-TABADOL</span>
                <a href="https://wa.me/970599123456" target="_blank" rel="noreferrer" className="text-[#1F7A6E] font-bold hover:underline">
                  محادثة واتساب مباشرة
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Action Bar */}
      <div className="w-full bg-white border-t border-[#e2ddd0] py-4 px-6 sticky bottom-0 z-40 shadow-[0_-4px_20px_rgba(18,48,43,0.06)]">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-[#12302B]">
              كافة الحقول والمرفقات مكتملة ومطابقة للمواصفات الفنية
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => navigate('/merchant/onboarding/payouts')}
              type="button"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-300 text-[#12302B] font-bold text-xs sm:text-sm hover:bg-[#F6F3EC] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">arrow_forward</span>
              <span>السابق (المستحقات والتحويل المالي)</span>
            </button>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              type="button"
              className="w-full sm:w-auto px-7 py-2.5 rounded-xl bg-[#E9B44C] hover:bg-[#dfa637] text-[#12302B] font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <span>{isSubmitting ? 'جاري الإرسال والاعتماد...' : 'إرسال طلب الانضمام واعتماد المتجر رسمياً'}</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
