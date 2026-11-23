import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validatePhoneNumber } from '../../utils/phoneValidation';

export default function AdminMerchantsPage() {
  const navigate = useNavigate();

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [segmentTab, setSegmentTab] = useState('all'); // all | vip | basic | active | suspended
  const [categoryFilter, setCategoryFilter] = useState('');
  const [govFilter, setGovFilter] = useState('');
  const [sortFilter, setSortFilter] = useState('sales_desc');
  const [selectedMerchants, setSelectedMerchants] = useState({});

  // Add Merchant Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newStoreName, setNewStoreName] = useState('');
  const [newOwnerName, setNewOwnerName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newCategory, setNewCategory] = useState('فساتين وسهرة فاخرة');
  const [newGov, setNewGov] = useState('غزة');
  const [newAddress, setNewAddress] = useState('');
  const [newPlan, setNewPlan] = useState('vip');
  const [formErrors, setFormErrors] = useState({});
  const [toastMessage, setToastMessage] = useState(null);

  // Merchants Data
  const [merchants, setMerchants] = useState([
    {
      id: 'TBD-STR-0482',
      slug: 'lamsa-boutique',
      name: 'بوتيك لمسة فاشون',
      initials: 'LF',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
      owner: 'ندى القدوة',
      phone: '059-9481230',
      instagram: '@lamsa_fashion_ps',
      location: 'خانيونس - شارع جلال التجاري',
      gov: 'خانيونس',
      category: 'فساتين وسهرة راقية',
      categoryKey: 'فساتين وسهرة فاخرة',
      itemsCount: 42,
      plan: 'vip',
      planLabel: 'VIP Pro (79 ₪)',
      planRenewal: 'تجديد: 28 أكتوبر',
      monthlySales: 24800,
      pointsIssued: 248000,
      rating: 4.9,
      reviewsCount: 142,
      compliance: 98,
      status: 'active',
      statusLabel: 'نشط / امتياز',
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      dotColor: 'bg-emerald-600',
    },
    {
      id: 'TBD-STR-0519',
      slug: 'yasmeen-boutique',
      name: 'بوتيك الياسمين للأزياء',
      initials: 'YF',
      badgeColor: 'bg-pink-100 text-pink-900 border-pink-200',
      owner: 'سارة عبد الرحمن',
      phone: '059-8123490',
      instagram: '@yasmeen_boutique_gz',
      location: 'غزة - الرمال، شارع عمر المختار',
      gov: 'غزة',
      category: 'عبايات وشالات عصرية',
      categoryKey: 'عبايات وشالات خليجية',
      itemsCount: 68,
      plan: 'vip',
      planLabel: 'VIP Pro (79 ₪)',
      planRenewal: 'تجديد: 15 نوفمبر',
      monthlySales: 36400,
      pointsIssued: 364000,
      rating: 4.9,
      reviewsCount: 210,
      compliance: 99,
      status: 'active',
      statusLabel: 'نشط / الأكثر طلباً',
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      dotColor: 'bg-emerald-600',
    },
    {
      id: 'TBD-STR-0388',
      slug: 'nasr-sneakers',
      name: 'أحذية النصر سنيكرز',
      initials: 'NS',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
      owner: 'م. إبراهيم كمال',
      phone: '059-9304112',
      instagram: '@nasr_sneakers',
      location: 'غزة - شارع النصر العام',
      gov: 'غزة',
      category: 'أحذية وسنيكرز رياضية',
      categoryKey: 'أحذية رياضية وسنيكرز',
      itemsCount: 54,
      plan: 'basic',
      planLabel: 'باقة أساسية (مجانية)',
      planRenewal: 'نسبة عمولة: 6%',
      monthlySales: 19200,
      pointsIssued: 192000,
      rating: 4.8,
      reviewsCount: 98,
      compliance: 95,
      status: 'active',
      statusLabel: 'نشط ومستقر',
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      dotColor: 'bg-emerald-600',
    },
    {
      id: 'TBD-STR-0294',
      slug: 'dare-alhareer',
      name: 'دار الحرير للمطرزات',
      initials: 'DH',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      owner: 'أمينة صالحة',
      phone: '059-7754321',
      instagram: '@dare_alhareer',
      location: 'دير البلح - السوق القديم',
      gov: 'الوسطى',
      category: 'تطريز تراثي يدوي',
      categoryKey: 'تطريز فلسطيني وتراثي',
      itemsCount: 31,
      plan: 'vip',
      planLabel: 'VIP Pro (79 ₪)',
      planRenewal: 'تجديد: 02 نوفمبر',
      monthlySales: 15600,
      pointsIssued: 156000,
      rating: 4.7,
      reviewsCount: 84,
      compliance: 92,
      status: 'active',
      statusLabel: 'قيد تسوية الرصيد',
      statusColor: 'bg-blue-50 text-blue-800 border-blue-200',
      dotColor: 'bg-blue-600',
    },
    {
      id: 'TBD-STR-0610',
      slug: 'kids-land',
      name: 'كيدز لاند للأطفال',
      initials: 'KL',
      badgeColor: 'bg-orange-100 text-orange-900 border-orange-200',
      owner: 'رامي الشوا',
      phone: '059-5501982',
      instagram: '@kidsland_gaza',
      location: 'غزة - مفترق الأمن العام',
      gov: 'غزة',
      category: 'ملابس وأحذية أطفال',
      categoryKey: 'ملابس أطفال ومواليد',
      itemsCount: 49,
      plan: 'basic',
      planLabel: 'باقة أساسية (مجانية)',
      planRenewal: 'نسبة عمولة: 6%',
      monthlySales: 14300,
      pointsIssued: 143000,
      rating: 4.8,
      reviewsCount: 76,
      compliance: 96,
      status: 'active',
      statusLabel: 'نشط ومستقر',
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      dotColor: 'bg-emerald-600',
    },
    {
      id: 'TBD-STR-0441',
      slug: 'saada-men',
      name: 'أزياء السعادة الرجالية',
      initials: 'AS',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
      owner: 'طارق النجار',
      phone: '059-6612984',
      instagram: '@saada_men_gaza',
      location: 'غزة - شارع الوحدة بجوار برج الشفاء',
      gov: 'غزة',
      category: 'بدلات وأزياء رجالية',
      categoryKey: 'أزياء وبدلات رجالية',
      itemsCount: 37,
      plan: 'basic',
      planLabel: 'باقة أساسية (مجانية)',
      planRenewal: 'نسبة عمولة: 6%',
      monthlySales: 11800,
      pointsIssued: 118000,
      rating: 4.6,
      reviewsCount: 51,
      compliance: 88,
      status: 'active',
      statusLabel: 'نشط ومستقر',
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      dotColor: 'bg-emerald-600',
    },
    {
      id: 'TBD-STR-0712',
      slug: 'top-fashion',
      name: 'متجر توب فاشون',
      initials: 'TF',
      badgeColor: 'bg-red-100 text-red-900 border-red-200',
      owner: 'إيمان حلس',
      phone: '059-4328891',
      instagram: '@top_fashion_gz',
      location: 'غزة - الرمال الجنوبي، شارع الصناعة',
      gov: 'غزة',
      category: 'أزياء يومية وكاجوال',
      categoryKey: 'فساتين وسهرة فاخرة',
      itemsCount: 22,
      plan: 'basic',
      planLabel: 'باقة أساسية (مجانية)',
      planRenewal: 'مستحقات معلقة',
      monthlySales: 8400,
      pointsIssued: 84000,
      rating: 4.2,
      reviewsCount: 34,
      compliance: 74,
      status: 'suspended',
      statusLabel: 'معلق مؤقتاً (تسوية)',
      statusColor: 'bg-amber-50 text-amber-900 border-amber-200',
      dotColor: 'bg-amber-500',
    },
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Filter & sort logic
  const filteredMerchants = merchants
    .filter((m) => {
      // Segment tabs
      if (segmentTab === 'vip' && m.plan !== 'vip') return false;
      if (segmentTab === 'basic' && m.plan !== 'basic') return false;
      if (segmentTab === 'active' && m.status !== 'active') return false;
      if (segmentTab === 'suspended' && m.status !== 'suspended') return false;

      // Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = m.name.toLowerCase().includes(q);
        const matchOwner = m.owner.toLowerCase().includes(q);
        const matchPhone = m.phone.includes(q);
        const matchId = m.id.toLowerCase().includes(q);
        if (!matchName && !matchOwner && !matchPhone && !matchId) return false;
      }

      // Category filter
      if (categoryFilter && m.categoryKey !== categoryFilter) return false;

      // Governorate filter
      if (govFilter && !m.location.includes(govFilter)) return false;

      return true;
    })
    .sort((a, b) => {
      if (sortFilter === 'sales_desc') return b.monthlySales - a.monthlySales;
      if (sortFilter === 'rating_desc') return b.rating - a.rating;
      if (sortFilter === 'points_desc') return b.pointsIssued - a.pointsIssued;
      return 0;
    });

  // Export CSV
  const handleExportCsv = () => {
    const headers = 'رمز المتجر,اسم المتجر,المالك,رقم الهاتف,الموقع,التصنيف,الباقة,المبيعات الشهرية,النقاط الصادرة,التقييم,الالتزام,الحالة\n';
    const rows = merchants
      .map(
        (m) =>
          `"${m.id}","${m.name}","${m.owner}","${m.phone}","${m.location}","${m.category}","${m.planLabel}",${m.monthlySales},${m.pointsIssued},${m.rating},"${m.compliance}%","${m.statusLabel}"`
      )
      .join('\n');
    const blob = new Blob(['\uFEFF' + headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `tabadul_merchants_A06_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('تم تصدير كشف التجار المعتمدين بنجاح بصيغة CSV!');
  };

  // Add Merchant Form Submit with Validation
  const handleAddMerchantSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!newStoreName.trim()) {
      errors.storeName = 'يرجى إدخال اسم المتجر أو البوتيك.';
    } else if (newStoreName.trim().length < 3) {
      errors.storeName = 'اسم المتجر يجب أن يحتوي على 3 أحرف على الأقل.';
    }

    if (!newOwnerName.trim()) {
      errors.ownerName = 'يرجى إدخال اسم المالك المسؤول.';
    }

    const phoneValidation = validatePhoneNumber(newPhone, 'PS', { required: true });
    if (!phoneValidation.isValid) {
      errors.phone = phoneValidation.error || 'يرجى إدخال رقم هاتف فلسطيني صحيح يبدأ بـ 059 أو 056.';
    }

    if (!newAddress.trim()) {
      errors.address = 'يرجى تحديد عنوان المتجر والمقر التجاري.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    const newMerchantObj = {
      id: `TBD-STR-0${Math.floor(100 + Math.random() * 900)}`,
      slug: `store-${Date.now().toString().slice(-4)}`,
      name: newStoreName.trim(),
      initials: newStoreName.slice(0, 2),
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      owner: newOwnerName.trim(),
      phone: phoneValidation.formatted || newPhone,
      instagram: `@${newStoreName.trim().replace(/\s+/g, '_')}`,
      location: `${newGov} - ${newAddress.trim()}`,
      gov: newGov,
      category: newCategory,
      categoryKey: newCategory,
      itemsCount: 0,
      plan: newPlan,
      planLabel: newPlan === 'vip' ? 'VIP Pro (79 ₪)' : 'باقة أساسية (مجانية)',
      planRenewal: 'تجديد: بعد شهر',
      monthlySales: 0,
      pointsIssued: 0,
      rating: 5.0,
      reviewsCount: 0,
      compliance: 100,
      status: 'active',
      statusLabel: 'نشط جديد',
      statusColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      dotColor: 'bg-emerald-600',
    };

    setMerchants([newMerchantObj, ...merchants]);
    showToast(`تم اعتماد وإضافة متجر "${newMerchantObj.name}" بنجاح!`);
    setIsAddModalOpen(false);
    setNewStoreName('');
    setNewOwnerName('');
    setNewPhone('');
    setNewAddress('');
  };

  // Toggle selection
  const toggleSelectAll = (checked) => {
    if (checked) {
      const all = {};
      merchants.forEach((m) => {
        all[m.id] = true;
      });
      setSelectedMerchants(all);
    } else {
      setSelectedMerchants({});
    }
  };

  const toggleSelectOne = (id) => {
    setSelectedMerchants((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isAllSelected =
    merchants.length > 0 &&
    merchants.every((m) => selectedMerchants[m.id]);

  return (
    <div className="min-h-screen bg-[#f6f3ec] text-[#191c22] antialiased flex selection:bg-[#835400] selection:text-white font-tajawal">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#12302b] text-white px-6 py-3.5 rounded-2xl shadow-2xl border border-[#e9b44c] flex items-center gap-3 animate-bounce">
          <span className="material-symbols-outlined text-[#e9b44c] text-xl">check_circle</span>
          <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-white/60 hover:text-white mr-2">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}

      {/* ================= SOVEREIGN RIGHT SIDEBAR (SHARED COMPONENT ANCHOR) ================= */}
      <aside className="fixed top-0 right-0 h-screen w-64 flex flex-col z-30 bg-[#12302b] text-white border-l border-[#1a443d] shadow-sm select-none">
        {/* Brand Header */}
        <div className="p-5 border-b border-[#1c4d44] flex items-center justify-between">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e9b44c] text-[#12302b] flex items-center justify-center font-bold shadow-md">
              <span className="material-symbols-outlined text-2xl">storefront</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight leading-tight">تبادل للمشغلين</h1>
              <p className="text-[11px] text-[#71dba2]/80 mt-0.5">الإدارة المركزية العامة</p>
            </div>
          </Link>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#1f7a6e] text-emerald-100">
            غزة v2.4
          </span>
        </div>

        {/* CTA Primary Action Button */}
        <div className="px-4 pt-4">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#e9b44c] hover:bg-[#ffc663] text-[#12302b] rounded-xl text-sm font-bold shadow transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">add_business</span>
            <span>إضافة متجر جديد</span>
          </button>
        </div>

        {/* Navigation Menu (Categorized with exact anchors) */}
        <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto text-sm">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-3.5 py-2.5 text-[#e1e2ea] hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined text-xl">dashboard</span>
            <span>لوحة التحكم</span>
          </Link>

          {/* ACTIVE NAVIGATION TARGET: المتاجر والشركاء */}
          <Link
            to="/admin/merchants"
            className="flex items-center justify-between px-3.5 py-2.5 bg-[#1f7a6e] text-white rounded-xl font-bold shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                storefront
              </span>
              <span>المتاجر والشركاء</span>
            </div>
            <span className="text-xs bg-[#e9b44c] text-[#12302b] font-black px-2 py-0.5 rounded-full">مفعل</span>
          </Link>

          <Link
            to="/admin/applications"
            className="flex items-center justify-between px-3.5 py-2.5 text-[#e1e2ea] hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-xl">inbox</span>
              <span>طلبات الانضمام</span>
            </div>
            <span className="text-[11px] bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.5 rounded-full font-bold">
              3 جديدة
            </span>
          </Link>

          <Link
            to="/admin/customers"
            className="flex items-center gap-3 px-3.5 py-2.5 text-[#e1e2ea] hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined text-xl">groups</span>
            <span>إدارة العملاء</span>
          </Link>

          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-3.5 py-2.5 text-[#e1e2ea] hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined text-xl">receipt_long</span>
            <span>العمليات والطلبات</span>
          </Link>

          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-3.5 py-2.5 text-[#e1e2ea] hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined text-xl">loyalty</span>
            <span>برنامج المكافآت</span>
          </Link>

          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-3.5 py-2.5 text-[#e1e2ea] hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined text-xl">payments</span>
            <span>التقارير المالية</span>
          </Link>

          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-3.5 py-2.5 text-[#e1e2ea] hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined text-xl">account_balance</span>
            <span>التحويلات والتسويات</span>
          </Link>

          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-3.5 py-2.5 text-[#e1e2ea] hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined text-xl">verified_user</span>
            <span>سجل التدقيق والامتثال</span>
          </Link>

          <div className="pt-3 pb-1 border-t border-[#1c4d44] my-2"></div>

          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-3.5 py-2.5 text-[#e1e2ea] hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined text-xl">settings</span>
            <span>إعدادات النظام</span>
          </Link>

          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 px-3.5 py-2.5 text-[#e1e2ea] hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined text-xl">help_center</span>
            <span>مركز المساعدة والتوثيق</span>
          </Link>
        </nav>

        {/* Sidebar Footer / Admin State */}
        <div className="p-3 border-t border-[#1c4d44] bg-[#0c2420]">
          <div className="flex items-center justify-between px-2 py-1 mb-2.5">
            <div className="flex items-center gap-1.5 text-[11px] text-[#71dba2]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>خادم غزة المحلي: متصل 100%</span>
            </div>
            <span className="text-[10px] text-gray-400">Ping 18ms</span>
          </div>
          <div className="flex items-center justify-between bg-[#153832] p-2.5 rounded-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#1f7a6e] text-white flex items-center justify-center font-bold text-sm border border-emerald-400/30">
                أ.م
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">أحمد المقيد</p>
                <p className="text-[10px] text-gray-300">المشرف العام - منصة تبادل</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/admin/login')}
              className="p-1.5 text-gray-300 hover:text-red-300 rounded-lg hover:bg-black/20 transition-colors cursor-pointer"
              title="تسجيل الخروج"
            >
              <span className="material-symbols-outlined text-lg">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT CANVAS ================= */}
      <main className="mr-64 flex-1 min-h-screen flex flex-col bg-[#f6f3ec]">
        {/* 1. TOP HEADER BAR */}
        <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-[#e4dfd3] shadow-sm px-8 py-3.5 flex items-center justify-between">
          {/* Breadcrumbs & Directory Identity */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-[#43474e]">
              <Link to="/admin/dashboard" className="hover:text-[#032448] cursor-pointer">
                الإدارة العامة
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-[#12302b] font-bold bg-[#f1ede4] px-2 py-0.5 rounded-md">
                قائمة التجار المعتمدين (A-06)
              </span>
            </div>
            <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              قطاع الأزياء والأحذية الحصري
            </span>
          </div>

          {/* Actions & Search & Controls */}
          <div className="flex items-center gap-3">
            {/* Search bar */}
            <div className="relative w-72">
              <input
                className="w-full pr-10 pl-4 py-2 bg-[#fcfbf9] border border-[#e4dfd3] rounded-xl text-xs text-[#191c22] focus:outline-none focus:border-[#1f7a6e] focus:ring-2 focus:ring-[#1f7a6e]/20 transition-all"
                placeholder="بحث بالمتجر، الهاتف 059... أو المالك"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="material-symbols-outlined absolute right-3 top-2.5 text-gray-400 text-lg">search</span>
            </div>

            {/* Export CSV Button */}
            <button
              onClick={handleExportCsv}
              className="flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-gray-50 border border-[#e4dfd3] text-[#12302b] rounded-xl text-xs font-semibold transition-all shadow-2xs cursor-pointer"
            >
              <span className="material-symbols-outlined text-base text-gray-600">file_download</span>
              <span>تصدير كشف التجار (CSV)</span>
            </button>

            {/* Notification Bell */}
            <button className="relative p-2 text-gray-600 hover:text-[#12302b] hover:bg-gray-100 rounded-xl transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            {/* Primary CTA: Add Merchant */}
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#e9b44c] hover:bg-[#dfa73a] text-[#12302b] rounded-xl text-xs font-bold shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">add</span>
              <span>إضافة متجر معتمد جديد</span>
            </button>
          </div>
        </header>

        {/* CONTENT BODY CONTAINER */}
        <div className="p-8 space-y-6 max-w-[1520px] mx-auto w-full">
          {/* 2. HERO KPI STATS GRID */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* KPI 1 */}
            <div className="bg-white rounded-2xl p-5 border border-[#e4dfd3] shadow-xs hover:border-[#1f7a6e]/40 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-1">إجمالي المتاجر المعتمدة</p>
                  <h3 className="text-3xl font-extrabold text-[#12302b] font-mono leading-tight">{merchants.length}</h3>
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#12302b]/10 text-[#12302b] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">storefront</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">100% قطاع فاشون</span>
                <span className="text-gray-400">متاجر نشطة بغزة</span>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="bg-white rounded-2xl p-5 border border-[#e4dfd3] shadow-xs hover:border-[#e9b44c]/60 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-1">متاجر باقة VIP Pro (79 ₪)</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-extrabold text-[#12302b] font-mono leading-tight">
                      {merchants.filter((m) => m.plan === 'vip').length}
                    </h3>
                    <span className="text-xs font-bold text-[#835400] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      38% من الشبكة
                    </span>
                  </div>
                </div>
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-[#835400] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    workspace_premium
                  </span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-600">عائد اشتراكات شهري</span>
                <span className="font-bold text-[#12302b]">1,422 ₪ / شهر</span>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="bg-white rounded-2xl p-5 border border-[#e4dfd3] shadow-xs hover:border-[#1f7a6e]/40 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-1">إجمالي المبيعات هذا الشهر (GMV)</p>
                  <div className="flex items-baseline gap-1.5">
                    <h3 className="text-3xl font-extrabold text-[#12302b] font-mono leading-tight">284,500</h3>
                    <span className="text-xs font-bold text-gray-500">₪</span>
                  </div>
                </div>
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#1f7a6e] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">arrow_upward</span>
                  16.4%+
                </span>
                <span className="text-gray-400">مقارنة بالشهر السابق</span>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="bg-white rounded-2xl p-5 border border-[#e4dfd3] shadow-xs hover:border-red-200 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-1">المستحقات المعلقة للتسوية</p>
                  <div className="flex items-baseline gap-1.5">
                    <h3 className="text-3xl font-extrabold text-[#ba1a1a] font-mono leading-tight">42,180</h3>
                    <span className="text-xs font-bold text-gray-500">₪</span>
                  </div>
                </div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#ba1a1a] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md font-bold">تسوية 25 من الشهر</span>
                <span className="text-gray-500">جاهز للتصدير البنكي</span>
              </div>
            </div>
          </section>

          {/* 3. ADVANCED FILTER & SEGMENTATION BAR */}
          <section className="bg-white rounded-2xl p-4 border border-[#e4dfd3] shadow-xs space-y-4">
            {/* Segment Tabs */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 flex-wrap gap-3">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold">
                <button
                  onClick={() => setSegmentTab('all')}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                    segmentTab === 'all'
                      ? 'bg-[#12302b] text-white shadow-xs'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span>الكل</span>
                  <span className="bg-white/20 text-white text-[11px] px-2 py-0.5 rounded-full">{merchants.length}</span>
                </button>
                <button
                  onClick={() => setSegmentTab('vip')}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                    segmentTab === 'vip'
                      ? 'bg-[#12302b] text-white shadow-xs'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm text-[#e9b44c]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span>باقة VIP Pro</span>
                  <span className="bg-amber-100 text-[#835400] text-[11px] px-2 py-0.5 rounded-full font-bold">
                    {merchants.filter((m) => m.plan === 'vip').length}
                  </span>
                </button>
                <button
                  onClick={() => setSegmentTab('basic')}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                    segmentTab === 'basic'
                      ? 'bg-[#12302b] text-white shadow-xs'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span>الباقة الأساسية</span>
                  <span className="bg-gray-200 text-gray-700 text-[11px] px-2 py-0.5 rounded-full">
                    {merchants.filter((m) => m.plan === 'basic').length}
                  </span>
                </button>
                <button
                  onClick={() => setSegmentTab('active')}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                    segmentTab === 'active'
                      ? 'bg-[#12302b] text-white shadow-xs'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>متاجر نشطة</span>
                  <span className="bg-emerald-50 text-emerald-800 text-[11px] px-2 py-0.5 rounded-full font-bold">
                    {merchants.filter((m) => m.status === 'active').length}
                  </span>
                </button>
                <button
                  onClick={() => setSegmentTab('suspended')}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                    segmentTab === 'suspended'
                      ? 'bg-[#12302b] text-white shadow-xs'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>معلقة مؤقتاً</span>
                  <span className="bg-red-50 text-red-700 text-[11px] px-2 py-0.5 rounded-full font-bold">
                    {merchants.filter((m) => m.status === 'suspended').length}
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
                <span>تحديث فوري للبيانات: <strong>قبل دقيقتين</strong></span>
              </div>
            </div>

            {/* Filter Selectors Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center text-xs">
              {/* Category Filter */}
              <div className="md:col-span-4">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full py-2 px-3 bg-white border border-[#e4dfd3] rounded-xl text-xs text-gray-700 focus:ring-1 focus:ring-[#1f7a6e]"
                >
                  <option value="">جميع تصنيفات الأزياء</option>
                  <option value="فساتين وسهرة فاخرة">فساتين وسهرة فاخرة</option>
                  <option value="عبايات وشالات خليجية">عبايات وشالات خليجية</option>
                  <option value="أحذية رياضية وسنيكرز">أحذية رياضية وسنيكرز</option>
                  <option value="أزياء وبدلات رجالية">أزياء وبدلات رجالية</option>
                  <option value="ملابس أطفال ومواليد">ملابس أطفال ومواليد</option>
                  <option value="تطريز فلسطيني وتراثي">تطريز فلسطيني وتراثي</option>
                </select>
              </div>

              {/* Governorate Filter */}
              <div className="md:col-span-4">
                <select
                  value={govFilter}
                  onChange={(e) => setGovFilter(e.target.value)}
                  className="w-full py-2 px-3 bg-white border border-[#e4dfd3] rounded-xl text-xs text-gray-700 focus:ring-1 focus:ring-[#1f7a6e]"
                >
                  <option value="">كافة المحافظات</option>
                  <option value="غزة">محافظة غزة (الرمال، النصر، الوحدة)</option>
                  <option value="الوسطى">محافظة الوسطى (دير البلح، النصيرات)</option>
                  <option value="خانيونس">محافظة خانيونس</option>
                  <option value="الشمال">محافظة الشمال</option>
                  <option value="رفح">محافظة رفح</option>
                </select>
              </div>

              {/* Sort Filter */}
              <div className="md:col-span-3">
                <select
                  value={sortFilter}
                  onChange={(e) => setSortFilter(e.target.value)}
                  className="w-full py-2 px-3 bg-white border border-[#e4dfd3] rounded-xl text-xs text-gray-700 focus:ring-1 focus:ring-[#1f7a6e]"
                >
                  <option value="sales_desc">الفرز: الأعلى مبيعات</option>
                  <option value="rating_desc">الفرز: الأكثر تقييماً</option>
                  <option value="points_desc">الفرز: أعلى نقاط ولاء مصدرة</option>
                </select>
              </div>

              {/* Reset Filter Button */}
              <div className="md:col-span-1 flex justify-end">
                <button
                  onClick={() => {
                    setCategoryFilter('');
                    setGovFilter('');
                    setSearchQuery('');
                    setSegmentTab('all');
                  }}
                  className="w-full py-2 px-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl text-xs flex items-center justify-center gap-1 border border-[#e4dfd3] transition-colors cursor-pointer"
                  title="إعادة الضبط"
                >
                  <span className="material-symbols-outlined text-sm">restart_alt</span>
                  <span>مسح</span>
                </button>
              </div>
            </div>
          </section>

          {/* 4. MASTER MERCHANTS TABLE (A-06 High-Fidelity Data Grid) */}
          <section className="bg-white rounded-2xl border border-[#e4dfd3] shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-[#fcfbf9] border-b border-[#e4dfd3] text-gray-600 text-xs font-bold">
                    <th className="py-3.5 px-4 w-12 text-center">
                      <input
                        checked={isAllSelected}
                        onChange={(e) => toggleSelectAll(e.target.checked)}
                        className="rounded text-[#1f7a6e] focus:ring-[#1f7a6e] border-gray-300 cursor-pointer"
                        type="checkbox"
                      />
                    </th>
                    <th className="py-3.5 px-4">المتجر والشعار</th>
                    <th className="py-3.5 px-4">المالك والاتصال</th>
                    <th className="py-3.5 px-4">التصنيف والأصناف</th>
                    <th className="py-3.5 px-4">باقة الاشتراك</th>
                    <th className="py-3.5 px-4">المبيعات الشهرية & النقاط</th>
                    <th className="py-3.5 px-4">التقييم والالتزام</th>
                    <th className="py-3.5 px-4">الحالة التشغيلية</th>
                    <th className="py-3.5 px-4 text-center">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f1ede4] text-xs">
                  {filteredMerchants.map((merch) => {
                    const isSelected = selectedMerchants[merch.id];
                    return (
                      <tr
                        key={merch.id}
                        className={`transition-colors hover:bg-[#fbfaf6] ${
                          merch.status === 'suspended' ? 'bg-amber-50/20' : ''
                        }`}
                      >
                        <td className="py-4 px-4 text-center">
                          <input
                            checked={!!isSelected}
                            onChange={() => toggleSelectOne(merch.id)}
                            className="rounded text-[#1f7a6e] focus:ring-[#1f7a6e] border-gray-300 cursor-pointer"
                            type="checkbox"
                          />
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shadow-2xs border ${merch.badgeColor}`}
                            >
                              {merch.initials}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <Link
                                  to={`/admin/merchants/${merch.id}`}
                                  className="font-bold text-[#12302b] text-sm hover:underline cursor-pointer"
                                >
                                  {merch.name}
                                </Link>
                                <span
                                  className={`material-symbols-outlined text-base ${
                                    merch.status === 'suspended' ? 'text-amber-500' : 'text-[#1f7a6e]'
                                  }`}
                                  style={{ fontVariationSettings: "'FILL' 1" }}
                                >
                                  {merch.status === 'suspended' ? 'warning' : 'verified'}
                                </span>
                              </div>
                              <p className="text-gray-500 text-[11px] flex items-center gap-1 mt-0.5">
                                <span className="material-symbols-outlined text-[13px] text-gray-400">location_on</span>
                                {merch.location}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <p className="font-bold text-gray-800">{merch.owner}</p>
                          <p className="text-gray-500 text-[11px] font-mono mt-0.5">{merch.phone}</p>
                          <p className="text-[11px] text-[#1f7a6e] mt-0.5">{merch.instagram}</p>
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-block bg-purple-50 text-purple-800 border border-purple-200 px-2.5 py-0.5 rounded-md text-[11px] font-semibold">
                            {merch.category}
                          </span>
                          <p className="text-gray-400 text-[11px] mt-1">{merch.itemsCount} صنف معتمد</p>
                        </td>
                        <td className="py-4 px-4">
                          {merch.plan === 'vip' ? (
                            <span className="inline-flex items-center gap-1 bg-amber-50 text-[#835400] border border-amber-200 px-2.5 py-1 rounded-full text-[11px] font-bold">
                              <span className="material-symbols-outlined text-xs text-[#e9b44c]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                crown
                              </span>
                              {merch.planLabel}
                            </span>
                          ) : (
                            <span className="inline-block bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-[11px] font-semibold">
                              {merch.planLabel}
                            </span>
                          )}
                          <p className={`text-[10px] mt-1 ${merch.status === 'suspended' ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
                            {merch.planRenewal}
                          </p>
                        </td>
                        <td className="py-4 px-4">
                          <p className={`font-extrabold text-sm ${merch.status === 'suspended' ? 'text-[#ba1a1a]' : 'text-[#12302b]'}`}>
                            {merch.monthlySales.toLocaleString()} ₪
                          </p>
                          <div className="flex items-center gap-1 text-[11px] text-[#2E9E6B] font-semibold mt-0.5">
                            <span className="material-symbols-outlined text-xs">stars</span>
                            <span>{merch.pointsIssued.toLocaleString()} نقطة</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1 text-amber-600 font-bold">
                            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                              star
                            </span>
                            <span>{merch.rating}</span>
                            <span className="text-gray-400 font-normal text-[11px]">({merch.reviewsCount})</span>
                          </div>
                          <div className="w-24 bg-gray-100 rounded-full h-1.5 mt-1.5 overflow-hidden">
                            <div
                              className={`h-1.5 rounded-full ${merch.compliance >= 90 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                              style={{ width: `${merch.compliance}%` }}
                            ></div>
                          </div>
                          <span className="text-[10px] text-gray-500">التزام {merch.compliance}%</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${merch.statusColor}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${merch.dotColor}`}></span>
                            {merch.statusLabel}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Link
                              to={`/admin/merchants/${merch.id}`}
                              className="p-1.5 text-gray-600 hover:text-[#12302b] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                              title="الملف الشامل A-07"
                            >
                              <span className="material-symbols-outlined text-base">visibility</span>
                            </Link>
                            <button
                              onClick={() => showToast(`كشف الحساب المالي لمتجر "${merch.name}": جاهز للتنزيل`)}
                              className="p-1.5 text-gray-600 hover:text-[#1f7a6e] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                              title="كشف الحساب المالي"
                            >
                              <span className="material-symbols-outlined text-base">account_balance_wallet</span>
                            </button>
                            <button
                              onClick={() => showToast(`خيارات الإدارة السريعة لمتجر "${merch.name}"`)}
                              className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                              title="خيارات أخرى"
                            >
                              <span className="material-symbols-outlined text-base">more_vert</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* 5. TABLE PAGINATION & SUMMARY FOOTER */}
            <div className="p-4 bg-[#fcfbf9] border-t border-[#e4dfd3] flex items-center justify-between flex-wrap gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2 text-gray-600">
                <span>عرض <strong>{filteredMerchants.length}</strong> من أصل <strong>{merchants.length}</strong> متجراً معتمداً في قطاع الأزياء</span>
                <span className="text-gray-300">|</span>
                <div className="flex items-center gap-1">
                  <span>عرض في الصفحة:</span>
                  <select className="py-1 px-2 border border-gray-200 rounded-md bg-white text-xs text-gray-700">
                    <option>10</option>
                    <option defaultValue>20</option>
                    <option>50</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-400 bg-white hover:bg-gray-50 disabled:opacity-50 cursor-not-allowed flex items-center gap-1"
                  disabled
                >
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                  <span>السابق</span>
                </button>
                <button className="w-8 h-8 rounded-lg bg-[#12302b] text-white font-bold flex items-center justify-center cursor-pointer">
                  1
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-700 flex items-center justify-center cursor-pointer">
                  2
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-700 flex items-center justify-center cursor-pointer">
                  3
                </button>
                <span className="px-1 text-gray-400">...</span>
                <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-700 flex items-center justify-center cursor-pointer">
                  7
                </button>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-1 transition-colors cursor-pointer">
                  <span>التالي</span>
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
              </div>
            </div>
          </section>

          {/* 6. BOTTOM STRATEGIC INSIGHT & POLICY BANNERS (Bento Card Layout) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {/* Banner 1: Fashion Exclusivity Policy */}
            <div className="bg-gradient-to-br from-emerald-900 to-[#12302b] rounded-2xl p-5 text-white flex items-start gap-4 shadow-sm border border-emerald-800">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#71dba2] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">policy</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-white text-sm">سياسة الالتزام بقطاع الأزياء والأحذية (Gaza Fashion Mandate)</h4>
                  <span className="text-[10px] bg-[#e9b44c] text-[#12302b] px-2 py-0.5 rounded font-black">إلزامي</span>
                </div>
                <p className="text-xs text-emerald-100/80 mt-1.5 leading-relaxed">
                  تؤكد منصة تبادل على اقتصار الشبكة الحالية على متاجر الفاشون، العبايات، المطرزات والأحذية واستبعاد العطور
                  ومستحضرات التجميل حرصاً على تركيز الهوية التسويقية للمنصة وضمان أعلى كفاءة استبدال لنقاط الولاء بين
                  المتاجر الشريكة.
                </p>
              </div>
            </div>

            {/* Banner 2: Settlement Cycle Info */}
            <div className="bg-white rounded-2xl p-5 border border-[#e4dfd3] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#835400] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">calendar_month</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-[#12302b] text-sm">دورة التسوية المالية الأسبوعية القادمة</h4>
                  <span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-bold">25 أكتوبر 2024</span>
                </div>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  سيتم تفريغ الدفعات المستحقة مباشرة عبر محفظة <strong>PalPay</strong> وحسابات بنك فلسطين المعتمدة لكافة
                  المتاجر النشطة المؤهلة. تأكد من مطابقة سجل التحويلات قبل إقفال الدورة بالساعة 18:00 بتوقيت غزة.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={() => showToast('جداول التسويات البنكية محدثة')}
                    className="text-xs font-bold text-[#1f7a6e] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>مراجعة جداول التسويات البنكية</span>
                    <span className="material-symbols-outlined text-xs">arrow_back</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* ADD MERCHANT MODAL (Interactive & Validated Form)                         */}
      {/* ========================================================================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl border border-[#e4dfd3] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-150">
            <div className="bg-[#12302b] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#e9b44c]">add_business</span>
                <h3 className="font-bold text-sm">إضافة واعتماد متجر جديد في منصة تبادل</h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-white/70 hover:text-white cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleAddMerchantSubmit} className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#12302b] mb-1">
                    اسم المتجر التجاري: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newStoreName}
                    onChange={(e) => setNewStoreName(e.target.value)}
                    placeholder="مثال: بوتيك الأناقة الملكية"
                    className={`w-full border rounded-xl p-2.5 outline-none ${
                      formErrors.storeName ? 'border-red-500 bg-red-50/50' : 'border-[#e4dfd3] focus:border-[#12302b]'
                    }`}
                  />
                  {formErrors.storeName && (
                    <span className="text-red-500 text-[11px] block mt-1">{formErrors.storeName}</span>
                  )}
                </div>

                <div>
                  <label className="block font-bold text-[#12302b] mb-1">
                    اسم المالك المسؤول: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newOwnerName}
                    onChange={(e) => setNewOwnerName(e.target.value)}
                    placeholder="الاسم الرباعي للمالك"
                    className={`w-full border rounded-xl p-2.5 outline-none ${
                      formErrors.ownerName ? 'border-red-500 bg-red-50/50' : 'border-[#e4dfd3] focus:border-[#12302b]'
                    }`}
                  />
                  {formErrors.ownerName && (
                    <span className="text-red-500 text-[11px] block mt-1">{formErrors.ownerName}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#12302b] mb-1">
                    رقم الهاتف / الواتساب: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder="059xxxxxxx أو 056xxxxxxx"
                    className={`w-full border rounded-xl p-2.5 outline-none font-mono ${
                      formErrors.phone ? 'border-red-500 bg-red-50/50' : 'border-[#e4dfd3] focus:border-[#12302b]'
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-red-500 text-[11px] block mt-1">{formErrors.phone}</span>
                  )}
                </div>

                <div>
                  <label className="block font-bold text-[#12302b] mb-1">
                    تصنيف الأزياء: <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full border border-[#e4dfd3] rounded-xl p-2.5 bg-white text-xs outline-none"
                  >
                    <option value="فساتين وسهرة فاخرة">فساتين وسهرة فاخرة</option>
                    <option value="عبايات وشالات خليجية">عبايات وشالات خليجية</option>
                    <option value="أحذية رياضية وسنيكرز">أحذية رياضية وسنيكرز</option>
                    <option value="أزياء وبدلات رجالية">أزياء وبدلات رجالية</option>
                    <option value="ملابس أطفال ومواليد">ملابس أطفال ومواليد</option>
                    <option value="تطريز فلسطيني وتراثي">تطريز فلسطيني وتراثي</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#12302b] mb-1">
                    المحافظة: <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={newGov}
                    onChange={(e) => setNewGov(e.target.value)}
                    className="w-full border border-[#e4dfd3] rounded-xl p-2.5 bg-white text-xs outline-none"
                  >
                    <option value="غزة">محافظة غزة</option>
                    <option value="خانيونس">محافظة خانيونس</option>
                    <option value="الوسطى">المحافظة الوسطى</option>
                    <option value="الشمال">محافظة الشمال</option>
                    <option value="رفح">محافظة رفح</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#12302b] mb-1">
                    باقة الاشتراك المعتمدة: <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <label
                      className={`p-2 rounded-xl border flex items-center gap-1.5 cursor-pointer text-xs ${
                        newPlan === 'vip' ? 'border-[#e9b44c] bg-amber-50 font-bold text-[#835400]' : 'border-[#e4dfd3]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="plan"
                        checked={newPlan === 'vip'}
                        onChange={() => setNewPlan('vip')}
                        className="accent-[#e9b44c]"
                      />
                      <span>VIP Pro (79 ₪)</span>
                    </label>
                    <label
                      className={`p-2 rounded-xl border flex items-center gap-1.5 cursor-pointer text-xs ${
                        newPlan === 'basic' ? 'border-[#12302b] bg-gray-100 font-bold text-[#12302b]' : 'border-[#e4dfd3]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="plan"
                        checked={newPlan === 'basic'}
                        onChange={() => setNewPlan('basic')}
                        className="accent-[#12302b]"
                      />
                      <span>أساسية (مجانية)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#12302b] mb-1">
                  العنوان التفصيلي ومقر المتجر: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  placeholder="مثال: شارع الرمال، بالقرب من دوار أنصار"
                  className={`w-full border rounded-xl p-2.5 outline-none ${
                    formErrors.address ? 'border-red-500 bg-red-50/50' : 'border-[#e4dfd3] focus:border-[#12302b]'
                  }`}
                />
                {formErrors.address && (
                  <span className="text-red-500 text-[11px] block mt-1">{formErrors.address}</span>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#f0ece3]">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-[#e4dfd3] rounded-xl text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#12302b] hover:bg-[#1f7a6e] text-white rounded-xl font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm text-[#e9b44c]">verified</span>
                  <span>اعتماد وإضافة المتجر فوراً</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
