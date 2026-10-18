import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function InteractivePhoneMockup({ onOpenQr }) {
  const [clock, setClock] = useState("23:10");
  const [points, setPoints] = useState(2200);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setClock(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setPoints((prev) => prev + 100);
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto text-right select-none">
      {/* Outer Phone Frame */}
      <div className="relative rounded-[44px] bg-[#12302b] p-3 shadow-2xl border-4 border-[#12302b]/90 ring-1 ring-white/20">
        
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2 h-2 rounded-full bg-[#1f7a6e]/90" />
        </div>

        {/* Screen Container */}
        <div className="relative rounded-[36px] bg-[#f6f3ec] text-[#12302b] overflow-hidden border border-white/20 flex flex-col h-[580px] sm:h-[620px]">
          
          {/* Mobile App Status Bar */}
          <div className="bg-[#12302b] text-white px-5 pt-3 pb-2 flex items-center justify-between text-[11px] font-bold select-none z-20">
            <span>{clock}</span>
            <div className="flex items-center gap-1.5 text-[#8df8bd]">
              <span className="material-symbols-outlined text-[13px]">wifi</span>
              <span className="text-[10px] font-mono">4G</span>
              <span className="material-symbols-outlined text-[14px] text-white">battery_charging_full</span>
            </div>
          </div>

          {/* Mobile App Mini Bar */}
          <div className="bg-[#12302b] text-white px-4 py-2.5 flex items-center justify-between border-b border-white/10 z-20">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white p-0.5 flex items-center justify-center overflow-hidden">
                <img
                  alt="تبادل"
                  className="w-full h-full object-contain"
                  src="/logo.png"
                />
              </div>
              <div>
                <div className="text-xs font-black leading-none">تـبـادل غـزة</div>
                <div className="text-[9px] text-[#e9b44c]">تطبيق الويب التقدمي PWA</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8df8bd] animate-pulse" />
              <span className="text-[10px] text-white/80 font-bold">جاهز دون إنترنت</span>
            </div>
          </div>

          {/* Scrollable App Content Inside Phone */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 pb-16 text-right">
            
            {/* User Profile Header Inside App */}
            <div className="bg-white rounded-2xl p-3 shadow-xs border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#1f7a6e] to-[#e9b44c] text-white flex items-center justify-center font-black text-sm">
                  س
                </div>
                <div>
                  <h4 className="font-black text-xs text-[#12302b]">سارة أحمد</h4>
                  <p className="text-[10px] text-[#52606d]">عضوية ذهبية معتمدة</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#1f7a6e]/10 text-[#1f7a6e] text-[10px] font-bold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-xs icon-fill">verified</span>
                <span>موثقة</span>
              </span>
            </div>

            {/* Main Loyalty Pass Card */}
            <div className="rounded-2xl p-4 bg-gradient-to-br from-[#12302b] via-[#1f3a5f] to-[#12302b] text-white shadow-md relative overflow-hidden">
              <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-[#e9b44c]/20 rounded-full blur-xl pointer-events-none" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[10px] text-white/75 block">رصيد نقاط تبادل المتاح (يعمل أوفلاين)</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-3xl font-black text-[#e9b44c] tracking-tight font-numeral-hero">
                      {points.toLocaleString()}
                    </span>
                    <span className="text-xs text-white/85 font-bold">نقطة</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-lg bg-white/10 text-[10px] font-bold text-[#e9b44c] flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-xs icon-fill">star</span>
                  <span>المستوى الذهبي</span>
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/15 flex items-center justify-between mb-3 text-xs">
                <span className="text-[11px] text-white/90 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-[#8df8bd]">check_circle</span>
                  <span>قيمة الخصم المباشر الآن:</span>
                </span>
                <span className="text-sm font-black text-[#e9b44c]">{(points / 200).toFixed(2)} ₪ كاش</span>
              </div>

              {/* Phone Touch Actions */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={onOpenQr}
                  className="py-2 px-2 bg-[#e9b44c] hover:bg-[#d69f37] text-[#12302b] rounded-xl font-black flex items-center justify-center gap-1 shadow-xs active:scale-95 text-[11px] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm icon-fill">qr_code_2</span>
                  <span>باركود الدفع QR</span>
                </button>
                <button
                  type="button"
                  onClick={handleRefresh}
                  className="py-2 px-2 bg-white/15 hover:bg-white/20 text-white rounded-xl font-bold flex items-center justify-center gap-1 active:scale-95 text-[11px] transition-all cursor-pointer"
                >
                  <span className={`material-symbols-outlined text-sm ${isRefreshing ? 'animate-spin' : ''}`}>
                    refresh
                  </span>
                  <span>تحديث الرصيد</span>
                </button>
              </div>
            </div>

            {/* Quick Stores Slider in Mockup */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-[#12302b] mb-1.5 px-0.5">
                <span>متاجر شريكة قريبة منك:</span>
                <Link to="/stores" className="text-[10px] text-[#1f7a6e] hover:underline">عرض الكل</Link>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/stores/lamsa-boutique" className="bg-white p-2 rounded-xl border border-gray-100 shadow-xs flex items-center gap-2 hover:border-[#1f7a6e]">
                  <span className="w-7 h-7 rounded-lg bg-[#e9b44c]/20 text-[#c7922d] flex items-center justify-center font-bold text-xs shrink-0">
                    <span className="material-symbols-outlined text-sm">checkroom</span>
                  </span>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-black truncate">بوتيك لمسة</div>
                    <div className="text-[9px] text-[#1f7a6e] font-bold">10 نقاط / 1 ₪</div>
                  </div>
                </Link>

                <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-xs flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#1f7a6e]/20 text-[#1f7a6e] flex items-center justify-center font-bold text-xs shrink-0">
                    <span className="material-symbols-outlined text-sm">styler</span>
                  </span>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-black truncate">سلطانة العبايات</div>
                    <div className="text-[9px] text-[#1f7a6e] font-bold">خصم 25 ₪ كاش</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity Feed */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#52606d] px-0.5">
                <span>آخر العمليات (مخزنة محلياً):</span>
                <span className="text-[9px] text-[#1f7a6e]">أوفلاين ⚡</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-gray-100 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-[#1f7a6e]">
                    <span className="material-symbols-outlined text-sm">shopping_bag</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#12302b]">بوتيك لمسة فاشن</div>
                    <div className="text-[9px] text-[#52606d]">شراء فستان شيفون (180 ₪)</div>
                  </div>
                </div>
                <span className="text-[10px] font-black text-[#1f7a6e] bg-[#1f7a6e]/10 px-1.5 py-0.5 rounded">+1,800 نقطة</span>
              </div>
            </div>

          </div>

          {/* Docked Mini Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xs border-t border-gray-200 py-1.5 px-3 flex items-center justify-around z-20">
            <Link to="/" className="flex flex-col items-center text-[#1f7a6e]">
              <span className="material-symbols-outlined text-lg icon-fill">home</span>
              <span className="text-[8px] font-bold">الرئيسية</span>
            </Link>
            <Link to="/stores" className="flex flex-col items-center text-[#52606d]">
              <span className="material-symbols-outlined text-lg">storefront</span>
              <span className="text-[8px] font-bold">المتاجر</span>
            </Link>
            <button type="button" onClick={onOpenQr} className="flex flex-col items-center -mt-3 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-[#12302b] text-[#e9b44c] flex items-center justify-center shadow">
                <span className="material-symbols-outlined text-sm icon-fill">qr_code_scanner</span>
              </div>
              <span className="text-[8px] font-bold text-[#12302b] mt-0.5">الدفع</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
