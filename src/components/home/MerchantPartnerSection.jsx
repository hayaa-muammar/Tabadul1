import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MerchantPartnerSection() {
  const [storeName, setStoreName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (storeName && phone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setStoreName("");
        setPhone("");
      }, 4000);
    }
  };

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#12302b] text-white relative overflow-hidden text-right" id="merchants-section">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e9b44c]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1f7a6e]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Right Column: Proposition & Perks (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs sm:text-sm font-bold text-[#e9b44c] bg-[#e9b44c]/10 border border-[#e9b44c]/30 px-3.5 py-1 rounded-full inline-block">
              بوابة التجار والشركاء 2026
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight text-white">
              ضاعف مبيعات متجرك ووفّر عمولات الإعلانات المهدورة!
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-white/85 leading-relaxed max-w-xl">
              انضم لأقوى شبكة ولاء تجارية متكاملة في قطاع غزة. اربط زبائنك بعائد حقيقي، واكسب متسوقين جدد يفضلون الشراء منك لكسب نقاط تبادل.
            </p>

            {/* Merchant Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
                <div className="flex items-center gap-2 text-[#e9b44c] font-bold text-sm">
                  <span className="material-symbols-outlined text-[20px]">percent</span>
                  <span>عمولة 3% فقط بعد البيع</span>
                </div>
                <p className="text-xs text-white/75">
                  بدون رسوم تسجيل وبدون اشتراكات شهرية، تدفع فقط عند تحقيق مبيعات فعلية.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
                <div className="flex items-center gap-2 text-[#8df8bd] font-bold text-sm">
                  <span className="material-symbols-outlined text-[20px]">sync</span>
                  <span>يعمل دون إنترنت (Offline POS)</span>
                </div>
                <p className="text-xs text-white/75">
                  لوحة تاجر خفيفة تعمل على أي جوال أو تابلت وتسجل النقاط حتى مع انقطاع الشبكة.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
                <div className="flex items-center gap-2 text-[#8df8bd] font-bold text-sm">
                  <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                  <span>تسويات نقدية يومية</span>
                </div>
                <p className="text-xs text-white/75">
                  استلم مستحقاتك المالية فوراً عبر محفظة جوال باي أو نقداً بشكل دوري ومضمون.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
                <div className="flex items-center gap-2 text-[#e9b44c] font-bold text-sm">
                  <span className="material-symbols-outlined text-[20px]">verified_user</span>
                  <span>تسليم محمي بكود OTP</span>
                </div>
                <p className="text-xs text-white/75">
                  حماية كاملة من الطلبات الوهمية، كل طلب مؤكد برمز استلام فريد برقم الزبون.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/merchant/login"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#e9b44c] hover:underline"
              >
                <span>لديك حساب تاجر مسجل بالفعل؟ تسجيل الدخول للوحة التحكم</span>
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              </Link>
            </div>
          </div>

          {/* Left Column: Quick Join Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white text-[#12302b] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 border-2 border-[#e9b44c]/30">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#12302b]">
                  سجّل متجرك في تبادل الآن
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  انضم لأكثر من 85 متجراً معتمداً وابدأ باستقبال زبائن شبكة تبادل فوراً.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-center space-y-2">
                  <span className="material-symbols-outlined text-3xl icon-fill text-emerald-600">check_circle</span>
                  <p className="font-bold text-sm">تم استلام طلب انضمام متجرك بنجاح!</p>
                  <p className="text-xs text-emerald-700">سيتواصل معك فريق تجار تبادل خلال 24 ساعة لتفعيل حسابك وتدريب فريق مبيعاتك.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#12302b] mb-1.5">
                      اسم المتجر أو البوتيك <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      placeholder="مثال: بوتيك الأناقة للأزياء"
                      className="w-full h-11 px-3.5 rounded-xl border border-gray-300 text-sm focus:border-[#1f7a6e] focus:ring-2 focus:ring-[#1f7a6e]/20 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#12302b] mb-1.5">
                      رقم جوال المسؤول (واتساب) <span className="text-error">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="059xxxxxxx"
                      dir="ltr"
                      className="w-full h-11 px-3.5 rounded-xl border border-gray-300 text-sm text-left font-numeral-hero focus:border-[#1f7a6e] focus:ring-2 focus:ring-[#1f7a6e]/20 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#12302b] hover:bg-[#1f3a5f] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    تقديم طلب انضمام كشريك معتمد 🚀
                  </button>

                  <p className="text-[10px] text-gray-500 text-center leading-tight">
                    بالتسجيل فإنك توافق على ميثاق جودة المنتجات وحماية الزبائن لمنصة تبادل 2026.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
