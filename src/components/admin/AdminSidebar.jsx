import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AdminSidebar({ activeItem = '', mobileOpen = false, onCloseMobile }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { id: 'dashboard', code: 'A-02', title: 'لوحة التحكم', icon: 'dashboard', path: '/admin/dashboard' },
    { id: 'applications', code: 'A-03', title: 'طلبات الانضمام', icon: 'domain_add', badge: '12', badgeColor: 'bg-[#B3261E]', path: '/admin/applications' },
    { id: 'merchants', code: 'A-06', title: 'المتاجر والشركاء', icon: 'storefront', badge: '48', badgeColor: 'bg-[#1F7A6E]', path: '/admin/merchants' },
    { id: 'customers', code: 'A-08', title: 'العملاء والمستخدمين', icon: 'groups', path: '/admin/customers' },
    { id: 'ledger', code: 'A-09', title: 'الدفتر المالي والتسويات', icon: 'account_balance_wallet', path: '/admin/ledger' },
    { id: 'transfers', code: 'A-10', title: 'التحويلات وجدولة التجار', icon: 'payments', badge: '3 معلقة', badgeColor: 'bg-[#8A6420]', path: '/admin/transfers' },
    { id: 'disputes', code: 'A-11', title: 'العمليات المتنازع عليها', icon: 'gavel', badge: '3', badgeColor: 'bg-[#8A6420]', path: '/admin/disputes' },
    { id: 'complaints', code: 'A-12', title: 'الشكاوى وفض النزاعات', icon: 'support_agent', badge: '5', badgeColor: 'bg-[#B3261E]', path: '/admin/complaints' },
    { id: 'products', code: 'A-14', title: 'العروض والمنتجات', icon: 'loyalty', path: '/admin/products' },
    { id: 'reports', code: 'A-15', title: 'التقارير ومؤشرات الأداء', icon: 'bar_chart', path: '/admin/reports' },
    { id: 'rules', code: 'A-16', title: 'قواعد النقاط والإعدادات', icon: 'tune', path: '/admin/rules' },
    { id: 'roles', code: 'A-17', title: 'الأدوار والصلاحيات', icon: 'admin_panel_settings', path: '/admin/roles' },
    { id: 'audit-log', code: 'A-18', title: 'سجل الإجراءات والتدقيق', icon: 'history', path: '/admin/audit-log' },
    { id: 'reviews', code: 'A-19', title: 'التقييمات وضبط المحتوى', icon: 'star', path: '/admin/reviews' },
    { id: 'packages', code: 'A-20', title: 'الباقات والاشتراكات', icon: 'inventory_2', path: '/admin/packages' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 right-0 h-screen w-64 bg-[#12302b] text-white flex flex-col z-40 border-l border-[#1a443d] shadow-xl justify-between transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header Logo */}
        <div className="p-4 border-b border-[#1f4a43] flex items-center justify-between">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e9b44c] text-[#12302b] flex items-center justify-center font-bold shadow-md shrink-0">
              <span className="material-symbols-outlined text-2xl font-black">hub</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white tracking-wide flex items-center gap-1.5">
                تبادل <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#e9b44c] text-[#12302b] font-black">المشرف</span>
              </span>
              <span className="text-[11px] text-[#8df8bd] opacity-80">الإدارة المركزية العامة</span>
            </div>
          </Link>
          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1.5 rounded-lg text-white/70 hover:text-white"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          )}
        </div>

        {/* Navigation list */}
        <nav className="flex-1 overflow-y-auto px-2.5 py-2 space-y-1 text-xs">
          {navItems.map((item) => {
            const isActive = activeItem === item.id || currentPath === item.path || currentPath.startsWith(item.path + '/');
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={onCloseMobile}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-l from-[#1f7a6e] to-[#17524a] text-white font-bold shadow-md border-r-4 border-[#e9b44c]'
                    : 'text-[#b5cbca] hover:text-white hover:bg-[#1a423b]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`material-symbols-outlined text-[19px] ${
                      isActive ? 'text-[#e9b44c]' : 'text-[#8fa3a0]'
                    }`}
                    style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                  >
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full text-white font-bold ${item.badgeColor || 'bg-white/20'}`}>
                      {item.badge}
                    </span>
                  )}
                  <span className="text-[10px] text-white/40 font-mono">{item.code}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* User profile & Logout */}
        <div className="p-3 border-t border-[#1f4a43] bg-black/15">
          <div className="flex items-center justify-between mb-2 px-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1f7a6e] border border-[#e9b44c]/40 flex items-center justify-center font-bold text-xs text-white">
                أم
              </div>
              <div>
                <p className="text-xs font-bold text-white">المدير العام (Super Admin)</p>
                <p className="text-[10px] text-white/50">admin@tabadul.ps</p>
              </div>
            </div>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <Link
              to="/admin/login"
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-[#B3261E]/20 hover:bg-[#B3261E]/30 text-rose-300 rounded-lg text-xs font-bold transition-colors"
            >
              <span className="material-symbols-outlined text-sm">logout</span>
              <span>تسجيل الخروج</span>
            </Link>
            <Link
              to="/"
              className="px-2.5 py-1.5 bg-white/10 hover:bg-white/15 text-white/80 rounded-lg text-xs font-bold transition-colors"
              title="عرض المتجر العام"
            >
              <span className="material-symbols-outlined text-sm">home</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
