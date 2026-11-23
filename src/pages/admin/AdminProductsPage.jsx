import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminProductsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // all | reported | active | suspended
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Suspend Modal
  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [suspendReason, setSuspendReason] = useState('quality_defect');
  const [suspendNotes, setSuspendNotes] = useState('');
  const [suspendError, setSuspendError] = useState('');

  // Initial Products Data
  const [products, setProducts] = useState([
    {
      id: 'PRD-801',
      title: 'فستان مخمل كحلي ملكي مطرز',
      sku: 'DRS-VEL-09',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=300&q=80',
      merchantName: 'بوتيك لمسة فاشون',
      merchantLocation: 'غزة - الرمال',
      category: 'فساتين وسهرة راقية',
      price: 280,
      pointsReward: '140 نقطة (5%)',
      status: 'reported',
      statusLabel: 'مبلّغ عنه (تلف خياطة)',
      statusColor: 'bg-red-100 text-red-800 border-red-300',
      reportsCount: 3,
      reportDetail: '3 شكاوى من عملاء تفيد بوجود تمزق جانبي في نسيج المخمل',
    },
    {
      id: 'PRD-802',
      title: 'عباية كريب حريري + طرحة مطرزة',
      sku: 'ABY-SLK-44',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80',
      merchantName: 'دار شال وشيلة للعبايات',
      merchantLocation: 'غزة - النصر',
      category: 'عبايات ومحجبات',
      price: 320,
      pointsReward: '160 نقطة (5%)',
      status: 'active',
      statusLabel: 'معتمد ونشط',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      reportsCount: 0,
    },
    {
      id: 'PRD-803',
      title: 'سنيكرز إيطالي أبيض طبي للمشي',
      sku: 'SH-ITA-21',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=300&q=80',
      merchantName: 'ميلانو فوتوير',
      merchantLocation: 'خانيونس - البلد',
      category: 'أحذية رياضية وطبية',
      price: 180,
      pointsReward: '90 نقطة (5%)',
      status: 'active',
      statusLabel: 'معتمد ونشط',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      reportsCount: 0,
    },
    {
      id: 'PRD-804',
      title: 'خاتم فضة إيطالي عيار 925 مرصع بالزركون',
      sku: 'RNG-SLV-02',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=300&q=80',
      merchantName: 'مجوهرات الأناقة',
      merchantLocation: 'خانيونس - البلد',
      category: 'مجوهرات وإكسسوارات',
      price: 150,
      pointsReward: '75 نقطة (5%)',
      status: 'reported',
      statusLabel: 'مبلّغ عنه (اشتباه عيار)',
      statusColor: 'bg-amber-100 text-amber-800 border-amber-300',
      reportsCount: 1,
      reportDetail: 'بلاغ من زبون يشكك في ختم الفضة 925 مقارنة بالوزن',
    },
    {
      id: 'PRD-805',
      title: 'بدلة رجالية صوف كحلي سليم فيت',
      sku: 'SUT-SLM-77',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=300&q=80',
      merchantName: 'دار الأناقة للأزياء',
      merchantLocation: 'غزة - شارع عمر المختار',
      category: 'أزياء رجالية وبدل',
      price: 490,
      pointsReward: '245 نقطة (5%)',
      status: 'suspended',
      statusLabel: 'موقوف إدارياً',
      statusColor: 'bg-gray-100 text-gray-700 border-gray-300',
      reportsCount: 4,
      reportDetail: 'تم الإيقاف لعدم توفر المقاسات المعلنة وتكرار إلغاء الطلبات',
    },
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  // Approve product & clear reports
  const handleApproveProduct = (prodId) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === prodId
          ? {
              ...p,
              status: 'active',
              statusLabel: 'معتمد ونشط',
              statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
              reportsCount: 0,
            }
          : p
      )
    );
    showToast('تم اعتماد المنتج وفض البلاغات المرتبطة به بنجاح');
  };

  // Open Suspend Modal
  const openSuspendModal = (prod) => {
    setSelectedProduct(prod);
    setSuspendReason('quality_defect');
    setSuspendNotes('');
    setSuspendError('');
    setIsSuspendModalOpen(true);
  };

  // Confirm Suspend
  const handleConfirmSuspend = (e) => {
    e.preventDefault();
    setSuspendError('');

    if (!suspendNotes.trim() || suspendNotes.trim().length < 8) {
      setSuspendError('يرجى كتابة سبب إداري ومذكرة توثيقية وافية (8 أحرف على الأقل).');
      return;
    }

    setProducts((prev) =>
      prev.map((p) =>
        p.id === selectedProduct.id
          ? {
              ...p,
              status: 'suspended',
              statusLabel: 'موقوف إدارياً',
              statusColor: 'bg-gray-100 text-gray-700 border-gray-300',
              reportDetail: `سبب الإيقاف: ${suspendReason} • ملاحظة المشرف: ${suspendNotes}`,
            }
          : p
      )
    );

    setIsSuspendModalOpen(false);
    showToast(`تم إيقاف عرض المنتج "${selectedProduct.title}" وتوثيق القرار في سجل التدقيق A-18.`);
  };

  // Filter products
  const filteredProducts = products.filter((p) => {
    if (statusFilter !== 'all' && p.status !== statusFilter) return false;
    if (categoryFilter !== 'all' && !p.category.includes(categoryFilter)) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        p.title.toLowerCase().includes(q) ||
        p.merchantName.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  return (
    <div className="bg-[#f6f3ec] text-[#191c22] min-h-screen flex antialiased select-none font-tajawal">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#12302b] text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-[#e9b44c] flex items-center gap-3 animate-bounce">
          <span className="material-symbols-outlined text-[#e9b44c] text-xl">check_circle</span>
          <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-white/60 hover:text-white mr-2">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}

      {/* Sovereign Sidebar Navigation */}
      <AdminSidebar activeItem="products" mobileOpen={mobileOpen} onCloseMobile={() => setMobileOpen(false)} />

      {/* Main Workspace */}
      <main className="flex-1 lg:mr-64 flex flex-col min-w-0 pb-16">
        {/* Sticky Header */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 lg:px-8 py-3.5 border-b border-[#e6e2d8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-2 text-xs bg-[#faf8f4] border border-[#ded9cd] rounded-xl text-gray-800 placeholder:text-gray-400 focus:bg-white focus:border-[#12302b] outline-none transition-all shadow-sm"
                placeholder="ابحث باسم المنتج، كود SKU، أو اسم المتجر..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/admin/audit-log"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#12302b] hover:bg-[#183d37] text-white rounded-xl text-xs font-bold shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base text-[#e9b44c]">history_edu</span>
              <span>سجل الإجراءات A-18</span>
            </Link>
          </div>
        </header>

        {/* Canvas Body */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1440px] mx-auto w-full">
          {/* Breadcrumb & Title */}
          <div>
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <Link to="/admin/dashboard" className="hover:text-[#12302b]">الإدارة العامة</Link>
              <span className="material-symbols-outlined text-xs">chevron_left</span>
              <span className="text-gray-400">الكتالوج والعروض</span>
              <span className="material-symbols-outlined text-xs">chevron_left</span>
              <span className="text-[#12302b] font-bold">مراجعة العروض والمنتجات (A-14)</span>
            </nav>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#12302b] tracking-tight">
                  مراجعة العروض والمنتجات
                </h1>
                <p className="text-xs text-gray-500 mt-0.5">
                  مراقبة جودة المنتجات، ضبط الامتثال لقطاع الأزياء والأحذية، والتحقق من مصداقية العروض ونقاط الكاش باك في قطاع غزة.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[#2e9e6b]/10 text-[#2e9e6b] px-3 py-1.5 rounded-full text-xs font-bold w-fit">
                <span className="material-symbols-outlined text-base">task_alt</span>
                <span>تم حسم 4 منتجات مبلّغ عنها اليوم بنجاح</span>
              </div>
            </div>
          </div>

          {/* 4 TOP KPI CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* KPI 1 */}
            <div className="bg-white p-5 rounded-2xl border border-[#e4dfd3] shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">إجمالي المنتجات النشطة</span>
                <div className="w-9 h-9 rounded-xl bg-[#1f7a6e]/10 text-[#1f7a6e] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">checkroom</span>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12302b]">1,420</h3>
                <p className="text-xs text-gray-400 mt-0.5">أزياء وأحذية نسائية، رجالية، أطفال</p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center gap-1 text-[11px] text-[#2e9e6b] font-bold">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span>+34 منتج مضاف هذا الأسبوع</span>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="bg-white p-5 rounded-2xl border border-[#e4dfd3] shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">العروض والحملات النشطة</span>
                <div className="w-9 h-9 rounded-xl bg-[#e9b44c]/20 text-[#835400] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    local_offer
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12302b]">38</h3>
                <p className="text-xs text-gray-400 mt-0.5">نقاط مضاعفة، كاش باك فوري وهدايا</p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center gap-1 text-[11px] text-[#835400] font-bold">
                <span className="material-symbols-outlined text-sm">stars</span>
                <span>تغطية 14 متجراً مشاركاً</span>
              </div>
            </div>

            {/* KPI 3: Alert Flagged */}
            <div className="bg-white p-5 rounded-2xl border-2 border-red-300 shadow-sm relative overflow-hidden flex flex-col justify-between bg-red-50/20">
              <div className="flex items-center justify-between">
                <span className="text-xs text-red-700 font-bold">مبلّغ عنها وتتطلب فحصاً</span>
                <div className="w-9 h-9 rounded-xl bg-red-100 text-red-700 flex items-center justify-center animate-pulse">
                  <span className="material-symbols-outlined text-xl">flag</span>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-red-700">2</h3>
                <p className="text-xs text-red-600 mt-0.5">مراجعة فورية قبل استمرار الإتاحة</p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-red-200 flex items-center gap-1 text-[11px] text-red-700 font-bold">
                <span className="material-symbols-outlined text-sm">warning</span>
                <span>تتطلب إجراء إداري حاسم</span>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="bg-white p-5 rounded-2xl border border-[#e4dfd3] shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">منتجات موقوفة إدارياً</span>
                <div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">block</span>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12302b]">12</h3>
                <p className="text-xs text-gray-400 mt-0.5">مخالفة لسياسة الفاشون ونظام النقاط</p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center gap-1 text-[11px] text-gray-500">
                <span className="material-symbols-outlined text-sm">history</span>
                <span>2 قيد التظلم والاستئناف</span>
              </div>
            </div>
          </div>

          {/* FILTER TOOLBAR */}
          <div className="bg-white p-4 rounded-2xl border border-[#e4dfd3] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  statusFilter === 'all' ? 'bg-[#12302b] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                الكل ({products.length})
              </button>
              <button
                onClick={() => setStatusFilter('reported')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  statusFilter === 'reported' ? 'bg-red-700 text-white' : 'bg-red-50 text-red-700 hover:bg-red-100'
                }`}
              >
                مبلّغ عنها (2)
              </button>
              <button
                onClick={() => setStatusFilter('active')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  statusFilter === 'active' ? 'bg-emerald-700 text-white' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                }`}
              >
                معتمد ونشط (2)
              </button>
              <button
                onClick={() => setStatusFilter('suspended')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                  statusFilter === 'suspended' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                موقوف (1)
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-500">الفئة:</span>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-[#faf8f4] border border-[#ded9cd] px-3 py-1.5 rounded-xl font-bold text-[#12302b] outline-none"
              >
                <option value="all">كافة الفئات</option>
                <option value="فساتين">فساتين وسهرة</option>
                <option value="عبايات">عبايات ومحجبات</option>
                <option value="أحذية">أحذية وحقائب</option>
                <option value="مجوهرات">مجوهرات وإكسسوارات</option>
                <option value="رجالية">أزياء رجالية</option>
              </select>
            </div>
          </div>

          {/* PRODUCTS LIST TABLE */}
          <div className="bg-white rounded-2xl border border-[#e4dfd3] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse text-xs">
                <thead>
                  <tr className="bg-[#faf8f4] text-gray-600 font-bold border-b border-[#e6e2d8] whitespace-nowrap">
                    <th className="py-3 px-4">المنتج والرمز</th>
                    <th className="py-3 px-3">المتجر</th>
                    <th className="py-3 px-3">الفئة</th>
                    <th className="py-3 px-3 text-center">السعر</th>
                    <th className="py-3 px-3 text-center">نقاط الكاش باك</th>
                    <th className="py-3 px-3 text-center">الحالة الإدارية</th>
                    <th className="py-3 px-4 text-center">إجراءات المراقبة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ece8df]">
                  {filteredProducts.map((p) => (
                    <tr
                      key={p.id}
                      className={`hover:bg-gray-50/80 transition-colors ${
                        p.status === 'reported' ? 'bg-red-50/30' : ''
                      }`}
                    >
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-12 h-12 rounded-xl object-cover border border-gray-200 shrink-0"
                          />
                          <div>
                            <div className="font-bold text-[#12302b]">{p.title}</div>
                            <div className="text-[11px] text-gray-400 font-mono">
                              SKU: {p.sku} • #{p.id}
                            </div>
                            {p.reportDetail && (
                              <div className="text-[11px] text-red-600 mt-0.5 max-w-xs truncate">
                                ⚠ {p.reportDetail}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <div className="font-bold text-[#191c22]">{p.merchantName}</div>
                        <div className="text-[11px] text-gray-400">{p.merchantLocation}</div>
                      </td>

                      <td className="py-3.5 px-3 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md bg-[#f6f3ec] text-gray-700 text-[11px] font-medium border border-[#ded9cd]">
                          {p.category}
                        </span>
                      </td>

                      <td className="py-3.5 px-3 text-center whitespace-nowrap font-bold font-mono text-[#12302b] text-sm">
                        {p.price} ₪
                      </td>

                      <td className="py-3.5 px-3 text-center whitespace-nowrap">
                        <span className="text-[#835400] font-bold font-mono text-xs">
                          {p.pointsReward}
                        </span>
                      </td>

                      <td className="py-3.5 px-3 text-center whitespace-nowrap">
                        <span className={`inline-flex px-2.5 py-1 rounded-full font-bold text-[10px] border ${p.statusColor}`}>
                          {p.statusLabel}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1.5">
                          {p.status === 'reported' ? (
                            <>
                              <button
                                onClick={() => handleApproveProduct(p.id)}
                                className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] flex items-center gap-1 shadow-sm"
                                title="اعتماد المنتج وتبرئته من البلاغ"
                              >
                                <span className="material-symbols-outlined text-[14px]">check</span>
                                <span>اعتماد</span>
                              </button>
                              <button
                                onClick={() => openSuspendModal(p)}
                                className="px-2.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] flex items-center gap-1 shadow-sm"
                                title="تعليق وإيقاف ظهور المنتج"
                              >
                                <span className="material-symbols-outlined text-[14px]">block</span>
                                <span>إيقاف</span>
                              </button>
                            </>
                          ) : p.status === 'suspended' ? (
                            <button
                              onClick={() => handleApproveProduct(p.id)}
                              className="px-2.5 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-800 text-white font-bold text-[11px] flex items-center gap-1 shadow-sm"
                            >
                              <span className="material-symbols-outlined text-[14px]">undo</span>
                              <span>فك الإيقاف</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => openSuspendModal(p)}
                              className="px-2.5 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold text-[11px] flex items-center gap-1"
                            >
                              <span className="material-symbols-outlined text-[14px]">flag</span>
                              <span>إيقاف إداري</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* SUSPEND PRODUCT MODAL */}
      {isSuspendModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-5 bg-red-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-2xl">block</span>
                <h3 className="font-bold text-base">إيقاف المنتج إدارياً</h3>
              </div>
              <button onClick={() => setIsSuspendModalOpen(false)} className="text-white/80 hover:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleConfirmSuspend} className="p-6 space-y-4 text-xs">
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900 leading-relaxed">
                أنت على وشك إيقاف عرض منتج <strong>"{selectedProduct.title}"</strong> لمتجر{' '}
                <strong>{selectedProduct.merchantName}</strong>. سيتم حجبه فوراً من منصة المتسوقين.
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#12302b]">
                  سبب الإيقاف الإلزامي <span className="text-red-500">*</span>
                </label>
                <select
                  value={suspendReason}
                  onChange={(e) => setSuspendReason(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-gray-300 bg-[#faf8f4] font-bold text-[#12302b] outline-none"
                >
                  <option value="quality_defect">عيب مصنعي أو تلف في الخامة</option>
                  <option value="wrong_specifications">عدم مطابقة المقاس والمواصفات</option>
                  <option value="fraudulent_offer">اشتباه في مصداقية العرض أو السعر</option>
                  <option value="trademark_violation">انتهاك علامة تجارية أو حقوق فكرية</option>
                  <option value="other">مخالفة أخرى لسياسات المنصة</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#12302b]">
                  سند الإجراء والملاحظات التدقيقية <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={suspendNotes}
                  onChange={(e) => setSuspendNotes(e.target.value)}
                  rows="3"
                  placeholder="دوّن حيثيات قرار الإيقاف لتسجيلها في سجل التدقيق A-18..."
                  className={`w-full p-3 rounded-xl border ${
                    suspendError ? 'border-red-500' : 'border-gray-300'
                  } outline-none bg-[#faf8f4] resize-none`}
                />
                {suspendError && <span className="text-[11px] text-red-500">{suspendError}</span>}
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsSuspendModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-sm"
                >
                  تأكيد الإيقاف الفوري
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
