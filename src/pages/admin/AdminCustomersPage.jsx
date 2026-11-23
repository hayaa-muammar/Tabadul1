import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminCustomersPage() {
  const navigate = useNavigate();

  // Selected customer state
  const [selectedCustomerId, setSelectedCustomerId] = useState('CST-0814');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('orders'); // orders | ledger | wallet | complaints

  // Modals state
  const [isSmsModalOpen, setIsSmsModalOpen] = useState(false);
  const [smsType, setSmsType] = useState('sms');
  const [smsMessage, setSmsMessage] = useState('');
  const [smsError, setSmsError] = useState('');

  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
  const [suspendReason, setSuspendReason] = useState('');
  const [suspendNotes, setSuspendNotes] = useState('');
  const [suspendError, setSuspendError] = useState('');

  const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);
  const [complaintType, setComplaintType] = useState('return_issue');
  const [complaintDetails, setComplaintDetails] = useState('');
  const [complaintError, setComplaintError] = useState('');

  const [toastMessage, setToastMessage] = useState(null);

  // Initial customer data
  const [customers, setCustomers] = useState([
    {
      id: 'CST-0814',
      name: 'سارة شبير',
      initials: 'سش',
      avatarBg: 'bg-[#12302b]',
      phone: '059-9182341',
      rawPhone: '0599182341',
      joinDate: '14 أكتوبر 2024',
      ordersCount: 8,
      ordersSpend: 890,
      availablePoints: 2400,
      availablePointsValue: 12.0,
      pendingPoints: 1600,
      pendingPointsValue: 8.0,
      status: 'active',
      statusLabel: 'نشط وموثق',
      location: 'غزة - الرمال الجنوبي',
      recentOrders: [
        {
          id: 'ORD-9022',
          store: 'بوتيك لمسة أنيقة',
          item: 'فستان سهرة مخمل كحلي (مقاس 38)',
          price: 220,
          pin: '8831',
          pointsGained: '+110 نقطة مكتسبة (5%)',
          isDelivered: true,
        },
        {
          id: 'ORD-9184',
          store: 'دار شال وشيلة للعبايات',
          item: 'عباية كريب حريري + طرحة مطرزة',
          price: 320,
          pin: '4019',
          pointsPending: '1,600 نقطة معلقة',
          isDelivered: false,
        },
      ],
    },
    {
      id: 'CST-0922',
      name: 'مريم الأسطل',
      initials: 'ما',
      avatarBg: 'bg-[#3d4957]',
      phone: '059-8431092',
      rawPhone: '0598431092',
      joinDate: '02 نوفمبر 2024',
      ordersCount: 5,
      ordersSpend: 620,
      availablePoints: 1850,
      availablePointsValue: 9.25,
      pendingPoints: 0,
      pendingPointsValue: 0,
      status: 'active',
      statusLabel: 'نشط',
      location: 'خان يونس - البلد',
      recentOrders: [
        {
          id: 'ORD-8910',
          store: 'ميلانو فوتوير',
          item: 'سنيكرز إيطالي أبيض طبي',
          price: 180,
          pin: '7741',
          pointsGained: '+90 نقطة مكتسبة (5%)',
          isDelivered: true,
        },
      ],
    },
    {
      id: 'CST-0419',
      name: 'هند بربخ',
      initials: 'هب',
      avatarBg: 'bg-[#6d4c41]',
      phone: '056-7120934',
      rawPhone: '0567120934',
      joinDate: '28 أغسطس 2024',
      ordersCount: 14,
      ordersSpend: 1540,
      availablePoints: 5120,
      availablePointsValue: 25.6,
      pendingPoints: 400,
      pendingPointsValue: 2.0,
      status: 'vip',
      statusLabel: 'عميل VIP',
      location: 'خان يونس - السطر الشرقي',
      recentOrders: [
        {
          id: 'ORD-9302',
          store: 'دار الياقوت للعبايات',
          item: 'عباية تطريز فلسطيني فاخر',
          price: 350,
          pin: '6120',
          pointsGained: '+175 نقطة مكتسبة (5%)',
          isDelivered: true,
        },
      ],
    },
    {
      id: 'CST-0512',
      name: 'آلاء العقاد',
      initials: 'الع',
      avatarBg: 'bg-[#00695c]',
      phone: '059-3341872',
      rawPhone: '0593341872',
      joinDate: '19 ديسمبر 2025',
      ordersCount: 2,
      ordersSpend: 230,
      availablePoints: 640,
      availablePointsValue: 3.2,
      pendingPoints: 0,
      pendingPointsValue: 0,
      status: 'new',
      statusLabel: 'حساب جديد',
      location: 'خان يونس - حي الأمل',
      recentOrders: [
        {
          id: 'ORD-9450',
          store: 'بوتيك فيلفت روز',
          item: 'حقيبة يد جلد طبيعي مطرزة',
          price: 130,
          pin: '3310',
          pointsGained: '+65 نقطة مكتسبة (5%)',
          isDelivered: true,
        },
      ],
    },
    {
      id: 'CST-1033',
      name: 'هبة البيطار',
      initials: 'هب',
      avatarBg: 'bg-[#ba1a1a]',
      phone: '059-5509121',
      rawPhone: '0595509121',
      joinDate: '04 يناير 2026',
      ordersCount: 1,
      ordersSpend: 120,
      availablePoints: 1200,
      availablePointsValue: 6.0,
      pendingPoints: 0,
      pendingPointsValue: 0,
      status: 'suspended',
      statusLabel: 'موقوف: اشتباه استبدال',
      location: 'غزة - النصر',
      recentOrders: [
        {
          id: 'ORD-9104',
          store: 'أزياء السعادة',
          item: 'طقم بناتي كاجوال',
          price: 120,
          pin: '9041',
          pointsGained: 'نقاط محجوزة للتدقيق',
          isDelivered: false,
        },
      ],
    },
    {
      id: 'CST-1140',
      name: 'رنا الزهارنة',
      initials: 'رز',
      avatarBg: 'bg-[#4a148c]',
      phone: '056-9921045',
      rawPhone: '0569921045',
      joinDate: '11 فبراير 2026',
      ordersCount: 3,
      ordersSpend: 380,
      availablePoints: 920,
      availablePointsValue: 4.6,
      pendingPoints: 250,
      pendingPointsValue: 1.25,
      status: 'active',
      statusLabel: 'نشط',
      location: 'غزة - الشيخ عجلين',
      recentOrders: [
        {
          id: 'ORD-9512',
          store: 'ميلانو فوتوير',
          item: 'حذاء كعب كلاسيكي نبيذي',
          price: 190,
          pin: '5012',
          pointsPending: '250 نقطة معلقة',
          isDelivered: false,
        },
      ],
    },
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Filter logic
  const filteredCustomers = customers.filter((c) => {
    // Category pill filter
    if (categoryFilter === 'active' && c.status !== 'active' && c.status !== 'vip') return false;
    if (categoryFilter === 'new' && c.status !== 'new') return false;
    if (categoryFilter === 'suspended' && c.status !== 'suspended') return false;

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = c.name.toLowerCase().includes(q);
      const matchId = c.id.toLowerCase().includes(q);
      const matchPhone = c.phone.includes(q) || c.rawPhone.includes(q);
      if (!matchName && !matchId && !matchPhone) return false;
    }

    return true;
  });

  const selectedCustomer =
    customers.find((c) => c.id === selectedCustomerId) || customers[0];

  // CSV Export
  const handleExportCsv = () => {
    const headers = 'المعرف,الاسم,رقم الجوال,تاريخ الانضمام,عدد الطلبات,إجمالي الإنفاق,النقاط المتاحة,النقاط المعلقة,الحالة,الموقع\n';
    const rows = customers
      .map(
        (c) =>
          `"${c.id}","${c.name}","${c.phone}","${c.joinDate}",${c.ordersCount},${c.ordersSpend},${c.availablePoints},${c.pendingPoints},"${c.statusLabel}","${c.location}"`
      )
      .join('\n');
    const blob = new Blob(['\uFEFF' + headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `tabadul_customers_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('تم تصدير كشف العملاء بنجاح بصيغة CSV!');
  };

  // SMS / WhatsApp Handler
  const handleSendNotification = (e) => {
    e.preventDefault();
    setSmsError('');
    if (!smsMessage.trim()) {
      setSmsError('يرجى كتابة نص الرسالة قبل الإرسال.');
      return;
    }
    if (smsMessage.trim().length < 5) {
      setSmsError('نص الرسالة قصير جداً (5 أحرف على الأقل).');
      return;
    }
    showToast(`تم إرسال الإشعار بنجاح إلى ${selectedCustomer.name} (${selectedCustomer.phone})`);
    setSmsMessage('');
    setIsSmsModalOpen(false);
  };

  // Suspend Customer Handler
  const handleSuspendCustomer = (e) => {
    e.preventDefault();
    setSuspendError('');
    if (!suspendReason) {
      setSuspendError('يرجى اختيار سبب تعليق الحساب الإلزامي.');
      return;
    }
    if (!suspendNotes.trim()) {
      setSuspendError('يرجى تدوين سند التدقيق والملاحظات الإدارية لتسجيل الإجراء في A-18.');
      return;
    }

    setCustomers((prev) =>
      prev.map((c) =>
        c.id === selectedCustomer.id
          ? {
              ...c,
              status: 'suspended',
              statusLabel: `موقوف: ${suspendReason === 'fraud' ? 'اشتباه استبدال' : 'مخالفة الشروط'}`,
            }
          : c
      )
    );
    showToast(`تم تعليق حساب العميل ${selectedCustomer.name} وتوثيق القرار في سجل A-18`);
    setSuspendReason('');
    setSuspendNotes('');
    setIsSuspendModalOpen(false);
  };

  // Complaint Handler
  const handleCreateComplaint = (e) => {
    e.preventDefault();
    setComplaintError('');
    if (!complaintDetails.trim()) {
      setComplaintError('يرجى كتابة تفاصيل الشكوى أو النزاع.');
      return;
    }
    showToast(`تم تسجيل الشكوى بنجاح برقم #DIS-${Date.now().toString().slice(-4)}`);
    setComplaintDetails('');
    setIsComplaintModalOpen(false);
  };

  return (
    <div className="bg-[#f6f3ec] text-[#191c22] min-h-screen flex antialiased select-none font-tajawal">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#12302b] text-white px-6 py-3 rounded-2xl shadow-2xl border border-[#e9b44c] flex items-center gap-3">
          <span className="material-symbols-outlined text-[#e9b44c] text-xl">check_circle</span>
          <span className="text-xs sm:text-sm font-bold">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-white/60 hover:text-white mr-2">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SIDE NAVIGATION (RTL Right side, 260px wide, deep green brand anchor)     */}
      {/* ========================================================================= */}
      <aside className="fixed top-0 right-0 h-screen w-64 bg-[#12302b] text-white flex flex-col z-30 border-l border-[#1a443d] shadow-xl justify-between p-4">
        {/* Header Logo & Identification */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 px-2 py-1 border-b border-[#1f4a43] pb-3">
            <Link to="/admin/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e9b44c] via-[#1f7a6e] to-[#0d221e] flex items-center justify-center p-1.5 shadow-inner">
                <svg className="w-full h-full fill-white" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25,25 C40,25 65,28 75,40 C85,52 82,75 68,80 C54,85 45,72 45,60 C45,45 35,42 20,40 Z" fill="#ffffff" opacity="0.95" />
                  <circle cx="28" cy="85" fill="#e9b44c" r="7" />
                  <circle cx="48" cy="85" fill="#ffffff" r="7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-wide flex items-center gap-1">
                  تبادل <span className="text-xs px-1.5 py-0.5 rounded bg-[#e9b44c] text-[#12302b] font-black">المشرف</span>
                </span>
                <span className="text-[11px] text-[#8df8bd] opacity-80">الإدارة المركزية العامة</span>
              </div>
            </Link>
          </div>

          {/* Navigation Tabs Cluster */}
          <nav className="space-y-1 overflow-y-auto max-h-[calc(100vh-220px)] pr-0.5 text-xs">
            {/* لوحة التحكم A-02 */}
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 text-[#b5cbca] hover:text-white hover:bg-[#1a423b] rounded-xl transition-all font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              <span>لوحة التحكم</span>
              <span className="text-[10px] text-[#789d97] mr-auto font-mono">A-02</span>
            </Link>

            {/* طلبات الانضمام A-03 */}
            <Link
              to="/admin/applications"
              className="flex items-center gap-3 px-3 py-2.5 text-[#b5cbca] hover:text-white hover:bg-[#1a423b] rounded-xl transition-all font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">domain_add</span>
              <span>طلبات الانضمام</span>
              <span className="text-[10px] text-[#789d97] mr-auto font-mono">A-03</span>
            </Link>

            {/* المتاجر والشركاء A-06 */}
            <Link
              to="/admin/merchants"
              className="flex items-center gap-3 px-3 py-2.5 text-[#b5cbca] hover:text-white hover:bg-[#1a423b] rounded-xl transition-all font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">storefront</span>
              <span>المتاجر والشركاء</span>
              <span className="text-[10px] text-[#789d97] mr-auto font-mono">A-06</span>
            </Link>

            {/* العملاء A-08 [ACTIVE TAB AS MANDATED] */}
            <Link
              to="/admin/customers"
              className="flex items-center gap-3 px-3 py-2.5 bg-gradient-to-l from-[#1f7a6e] to-[#17524a] text-white rounded-xl font-bold shadow-md border-r-4 border-[#e9b44c] transition-all"
            >
              <span className="material-symbols-outlined text-[20px] text-[#e9b44c]" style={{ fontVariationSettings: "'FILL' 1" }}>
                groups
              </span>
              <span className="text-white">إدارة العملاء</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#e9b44c] text-[#12302b] mr-auto font-black">A-08</span>
            </Link>

            {/* العمليات والطلبات */}
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 text-[#b5cbca] hover:text-white hover:bg-[#1a423b] rounded-xl transition-all font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              <span>العمليات والطلبات</span>
            </Link>

            {/* برنامج المكافآت */}
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 text-[#b5cbca] hover:text-white hover:bg-[#1a423b] rounded-xl transition-all font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">loyalty</span>
              <span>برنامج المكافآت</span>
            </Link>

            {/* التقارير والتحويلات المالية A-09 */}
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 text-[#b5cbca] hover:text-white hover:bg-[#1a423b] rounded-xl transition-all font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">payments</span>
              <span>التقارير والتحويلات</span>
              <span className="text-[10px] text-[#789d97] mr-auto font-mono">A-09</span>
            </Link>

            {/* الشكاوى والنزاعات A-12 */}
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 text-[#b5cbca] hover:text-white hover:bg-[#1a423b] rounded-xl transition-all font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">report_problem</span>
              <span>الشكاوى والنزاعات</span>
              <span className="text-[10px] text-[#789d97] mr-auto font-mono">A-12</span>
            </Link>

            {/* سجل التدقيق A-18 */}
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 text-[#b5cbca] hover:text-white hover:bg-[#1a423b] rounded-xl transition-all font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">verified_user</span>
              <span>سجل التدقيق الأمني</span>
              <span className="text-[10px] text-[#789d97] mr-auto font-mono">A-18</span>
            </Link>

            {/* إعدادات النظام A-16 */}
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 text-[#b5cbca] hover:text-white hover:bg-[#1a423b] rounded-xl transition-all font-medium"
            >
              <span className="material-symbols-outlined text-[20px]">settings</span>
              <span>إعدادات النظام</span>
              <span className="text-[10px] text-[#789d97] mr-auto font-mono">A-16</span>
            </Link>
          </nav>
        </div>

        {/* Admin User Profile Footing */}
        <div className="border-t border-[#1a443d] pt-3 mt-2">
          <div className="flex items-center gap-3 p-2 bg-[#0c221e] rounded-xl border border-[#1f4a43]/60">
            <div className="w-9 h-9 rounded-full bg-[#1f7a6e] text-white flex items-center justify-center font-bold text-sm ring-2 ring-[#e9b44c]/40">
              أم
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-xs font-bold text-white truncate">أحمد المقيد</span>
              <span className="text-[11px] text-[#8df8bd] truncate">المشرف العام للشبكة</span>
            </div>
            <button
              onClick={() => navigate('/admin/login')}
              className="text-[#a0bbb6] hover:text-[#e9b44c] p-1 transition-colors cursor-pointer"
              title="تسجيل الخروج"
            >
              <span className="material-symbols-outlined text-lg">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* MAIN WORKSPACE CONTENT CONTAINER (Shifted 260px right for side-nav)       */}
      {/* ========================================================================= */}
      <main className="mr-64 flex-1 flex flex-col min-h-screen bg-[#f6f3ec]">
        {/* Top Navbar Bar with Breadcrumbs & Action controls */}
        <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-[#e4dfd3] px-6 py-3.5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            {/* Breadcrumb & System Screen Identification */}
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1f7a6e] text-2xl">groups</span>
              <div className="flex items-center gap-2 text-sm">
                <Link to="/admin/dashboard" className="text-[#43474e] font-medium hover:text-[#12302b]">
                  الإدارة العامة
                </Link>
                <span className="text-[#a09e96] text-xs">/</span>
                <span className="text-[#43474e] font-medium">العملاء</span>
                <span className="text-[#a09e96] text-xs">/</span>
                <span className="text-[#12302b] font-bold bg-[#eef4f2] px-2 py-0.5 rounded-lg border border-[#c6dfd9]">
                  إدارة حسابات المشترين (A-08)
                </span>
              </div>
            </div>

            {/* Quick Top Operational Actions */}
            <div className="flex items-center gap-3">
              <div className="relative w-64">
                <span className="material-symbols-outlined absolute right-3 top-2.5 text-[#74777f] text-lg">search</span>
                <input
                  className="w-full bg-[#f9f9ff] text-xs pr-9 pl-3 py-2 rounded-xl border border-[#e4dfd3] focus:border-[#12302b] focus:ring-1 focus:ring-[#12302b] transition-all outline-none"
                  placeholder="بحث برقم الهاتف، المعرف، الاسم..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                onClick={handleExportCsv}
                className="flex items-center gap-2 bg-[#12302b] hover:bg-[#1a423b] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base text-[#e9b44c]">file_download</span>
                <span>تصدير كشف العملاء CSV</span>
              </button>
              <button
                className="relative p-2 rounded-xl bg-[#f2f3fc] text-[#43474e] hover:bg-[#e4dfd3] transition-colors cursor-pointer"
                title="التنبيهات الفورية"
              >
                <span className="material-symbols-outlined text-xl">notifications</span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ba1a1a]"></span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Statistics Pills Banner */}
          <div className="mt-3 pt-3 border-t border-[#f0ece3] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-[#faf8f5] border border-[#e4dfd3] rounded-xl px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1f7a6e]"></span>
                <span className="text-[#43474e] font-medium">إجمالي العملاء المسجلين:</span>
              </div>
              <span className="font-bold text-[#12302b] text-sm">1,840 متسوق</span>
            </div>
            <div className="bg-[#faf8f5] border border-[#e4dfd3] rounded-xl px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2E9E6B]"></span>
                <span className="text-[#43474e] font-medium">العملاء النشطون:</span>
              </div>
              <span className="font-bold text-[#2E9E6B] text-sm">1,420 نشط</span>
            </div>
            <div className="bg-[#faf8f5] border border-[#e4dfd3] rounded-xl px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e9b44c]"></span>
                <span className="text-[#43474e] font-medium">النقاط المتداولة:</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-[#12302b] text-sm">842,500</span>
                <span className="text-[11px] text-[#835400] font-semibold">(4,212.5 ₪)</span>
              </div>
            </div>
            <div className="bg-[#fce9e7] border border-[#f5c6cb] rounded-xl px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ba1a1a]"></span>
                <span className="text-[#93000a] font-medium">حسابات موقوفة:</span>
              </div>
              <span className="font-bold text-[#ba1a1a] text-sm">12 حساباً</span>
            </div>
          </div>
        </header>

        {/* Main Dual Layout: Table (~65%) vs Dedicated Inspection Panel (~35%) */}
        <div className="p-6 grid grid-cols-12 gap-5 flex-1 items-start">
          {/* ===================================================================== */}
          {/* SECTION 1: CUSTOMERS DIRECTORY TABLE (Right column in RTL, ~65%)      */}
          {/* ===================================================================== */}
          <section className="col-span-12 lg:col-span-8 flex flex-col gap-4">
            {/* Filter & Query Control Console */}
            <div className="bg-white rounded-2xl p-4 border border-[#e4dfd3] shadow-sm flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg text-[#12302b] font-bold">دليل حسابات المشترين</span>
                  <span className="text-xs bg-[#eef4f2] text-[#12302b] px-2.5 py-0.5 rounded-full font-bold">
                    غزة وخان يونس
                  </span>
                </div>
                {/* Quick Category Pill Toggles */}
                <div className="flex items-center bg-[#f6f3ec] p-1 rounded-xl border border-[#e4dfd3] text-xs">
                  <button
                    onClick={() => setCategoryFilter('all')}
                    className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      categoryFilter === 'all'
                        ? 'bg-[#12302b] text-white shadow-xs'
                        : 'text-[#43474e] hover:text-black'
                    }`}
                  >
                    الكل (1,840)
                  </button>
                  <button
                    onClick={() => setCategoryFilter('active')}
                    className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                      categoryFilter === 'active'
                        ? 'bg-[#12302b] text-white font-bold'
                        : 'text-[#43474e] hover:text-black'
                    }`}
                  >
                    نشط (1,420)
                  </button>
                  <button
                    onClick={() => setCategoryFilter('new')}
                    className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                      categoryFilter === 'new'
                        ? 'bg-[#12302b] text-white font-bold'
                        : 'text-[#43474e] hover:text-black'
                    }`}
                  >
                    جديد (408)
                  </button>
                  <button
                    onClick={() => setCategoryFilter('suspended')}
                    className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                      categoryFilter === 'suspended'
                        ? 'bg-[#ba1a1a] text-white font-bold'
                        : 'text-[#ba1a1a] hover:bg-white/80'
                    }`}
                  >
                    موقوف (12)
                  </button>
                </div>
              </div>

              {/* Secondary Filters Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#f2eee6]">
                {/* Status Dropdown */}
                <div className="flex items-center gap-2 bg-[#f9f9ff] px-3 py-1.5 rounded-xl border border-[#e4dfd3]">
                  <span className="material-symbols-outlined text-[#74777f] text-sm">filter_alt</span>
                  <span className="text-[11px] text-[#43474e] whitespace-nowrap">حالة النشاط:</span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-[#12302b] border-none p-0 focus:ring-0 cursor-pointer"
                  >
                    <option value="all">جميع الحالات</option>
                    <option value="high">الأكثر تفاعلاً في المتاجر</option>
                    <option value="pending">نقاط معلقة تفوق 1,000</option>
                    <option value="review">محتجزة للتدقيق</option>
                  </select>
                </div>

                {/* Points Expiry / Accrual */}
                <div className="flex items-center gap-2 bg-[#f9f9ff] px-3 py-1.5 rounded-xl border border-[#e4dfd3]">
                  <span className="material-symbols-outlined text-[#74777f] text-sm">toll</span>
                  <span className="text-[11px] text-[#43474e] whitespace-nowrap">حركة النقاط:</span>
                  <select className="w-full bg-transparent text-xs font-semibold text-[#12302b] border-none p-0 focus:ring-0 cursor-pointer">
                    <option>الأعلى رصيداً إجمالياً</option>
                    <option>نقاط تنتهي قريباً (30 يوم)</option>
                    <option>استبدال أزياء أخير</option>
                  </select>
                </div>

                {/* Sorting */}
                <div className="flex items-center gap-2 bg-[#f9f9ff] px-3 py-1.5 rounded-xl border border-[#e4dfd3]">
                  <span className="material-symbols-outlined text-[#74777f] text-sm">sort</span>
                  <span className="text-[11px] text-[#43474e] whitespace-nowrap">الترتيب:</span>
                  <select className="w-full bg-transparent text-xs font-semibold text-[#12302b] border-none p-0 focus:ring-0 cursor-pointer">
                    <option>الأحدث انضماماً</option>
                    <option>الأكثر شراءً وقيمة</option>
                    <option>الأعلى نقاطاً متاحة</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Master Customers Table Container */}
            <div className="bg-white rounded-2xl border border-[#e4dfd3] shadow-sm overflow-hidden flex flex-col">
              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-[#faf8f5] border-b border-[#e4dfd3] text-[#43474e] text-xs">
                      <th className="py-3 px-4 font-bold text-[#12302b]">العميل والرمز</th>
                      <th className="py-3 px-3 font-bold text-[#12302b]">رقم الجوال</th>
                      <th className="py-3 px-3 font-bold text-[#12302b]">تاريخ الانضمام</th>
                      <th className="py-3 px-3 font-bold text-[#12302b] text-center">الطلبات</th>
                      <th className="py-3 px-3 font-bold text-[#12302b]">النقاط المتاحة</th>
                      <th className="py-3 px-3 font-bold text-[#12302b]">النقاط المعلقة</th>
                      <th className="py-3 px-3 font-bold text-[#12302b] text-center">حالة الحساب</th>
                      <th className="py-3 px-3 font-bold text-[#12302b] text-center">معاينة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f2eee6] text-xs">
                    {filteredCustomers.map((cust) => {
                      const isSelected = cust.id === selectedCustomer.id;
                      const isSuspended = cust.status === 'suspended';

                      return (
                        <tr
                          key={cust.id}
                          onClick={() => setSelectedCustomerId(cust.id)}
                          className={`transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#f0f7f5] hover:bg-[#e7f3f0] border-r-4 border-r-[#1f7a6e]'
                              : isSuspended
                              ? 'bg-[#fff8f7] hover:bg-[#fdf3f2] border-r-2 border-r-[#ba1a1a]'
                              : 'hover:bg-[#faf9f5]'
                          }`}
                        >
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm shadow-sm ${
                                  isSelected ? 'ring-2 ring-[#e9b44c]' : ''
                                } ${cust.avatarBg}`}
                              >
                                {cust.initials}
                              </div>
                              <div className="flex flex-col">
                                <span className={`font-bold text-sm flex items-center gap-1.5 ${isSuspended ? 'text-[#93000a]' : 'text-[#12302b]'}`}>
                                  {cust.name}
                                  {isSelected && (
                                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#e9b44c]/20 text-[#835400] font-black">
                                      المحددة
                                    </span>
                                  )}
                                </span>
                                <span className="text-[11px] text-[#1f7a6e] font-mono font-bold tracking-wider">
                                  #{cust.id}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-3 font-mono text-[#43474e] font-medium">{cust.phone}</td>
                          <td className="py-3.5 px-3 text-[#43474e]">{cust.joinDate}</td>
                          <td className="py-3.5 px-3 text-center">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full font-bold ${
                                isSuspended
                                  ? 'bg-white text-[#ba1a1a] border border-[#f5c6cb]'
                                  : 'bg-white text-[#12302b] border border-[#c4c6cf]/60'
                              }`}
                            >
                              {cust.ordersCount} طلب{cust.ordersCount > 1 ? 'ات' : ''}
                            </span>
                          </td>
                          <td className="py-3.5 px-3">
                            <div className="flex flex-col">
                              <span
                                className={`font-bold text-sm ${
                                  isSuspended ? 'text-[#ba1a1a] line-through' : 'text-[#2E9E6B]'
                                }`}
                              >
                                {cust.availablePoints.toLocaleString()} نقطة
                              </span>
                              <span className="text-[10px] text-[#74777f] font-semibold">
                                {isSuspended ? 'محجوزة' : `(${cust.availablePointsValue.toFixed(2)} ₪)`}
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-3">
                            <div className="flex flex-col">
                              <span
                                className={`font-bold text-sm ${
                                  cust.pendingPoints > 0 ? 'text-[#e07b2f]' : 'text-[#43474e]'
                                }`}
                              >
                                {cust.pendingPoints.toLocaleString()} نقطة
                              </span>
                              <span className="text-[10px] text-[#74777f] font-semibold">
                                ({cust.pendingPointsValue.toFixed(2)} ₪)
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-3 text-center">
                            {isSuspended ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#fce9e7] text-[#ba1a1a] font-bold text-[10px] border border-[#f5c6cb]">
                                <span className="material-symbols-outlined text-xs">block</span>
                                {cust.statusLabel}
                              </span>
                            ) : cust.status === 'vip' ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#e9b44c]/20 text-[#835400] font-bold text-[11px]">
                                <span className="material-symbols-outlined text-xs">grade</span>
                                {cust.statusLabel}
                              </span>
                            ) : cust.status === 'new' ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#1f7a6e]/10 text-[#1f7a6e] font-bold text-[11px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1f7a6e]"></span>
                                {cust.statusLabel}
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#2E9E6B]/10 text-[#2E9E6B] font-bold text-[11px] border border-[#2E9E6B]/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2E9E6B]"></span>
                                {cust.statusLabel}
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-3 text-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCustomerId(cust.id);
                              }}
                              className={`w-8 h-8 rounded-lg flex items-center justify-center mx-auto transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-[#12302b] text-white shadow-xs hover:bg-[#1a423b]'
                                  : 'bg-transparent hover:bg-[#e4dfd3] text-[#43474e]'
                              }`}
                              title="عرض تفاصيل الملف"
                            >
                              <span className="material-symbols-outlined text-base">
                                {isSelected ? 'visibility' : 'chevron_left'}
                              </span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Table Pagination & Operational Summary Footer */}
              <div className="bg-[#faf8f5] px-4 py-3 border-t border-[#e4dfd3] flex flex-wrap items-center justify-between text-xs">
                <span className="text-[#43474e] font-medium">
                  عرض <strong className="text-[#12302b]">1 إلى {filteredCustomers.length}</strong> من إجمالي{' '}
                  <strong className="text-[#12302b]">1,840</strong> متسوق مسجل في النظام
                </span>
                <div className="flex items-center gap-1.5">
                  <button className="px-2.5 py-1.5 rounded-lg border border-[#e4dfd3] bg-white text-[#191c22] hover:bg-[#f2eee6] disabled:opacity-50 cursor-pointer">
                    السابق
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-[#12302b] text-white font-bold cursor-pointer">1</button>
                  <button className="w-8 h-8 rounded-lg bg-white border border-[#e4dfd3] text-[#191c22] hover:bg-[#f2eee6] cursor-pointer">
                    2
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-white border border-[#e4dfd3] text-[#191c22] hover:bg-[#f2eee6] cursor-pointer">
                    3
                  </button>
                  <span className="px-1 text-[#74777f]">...</span>
                  <button className="w-8 h-8 rounded-lg bg-white border border-[#e4dfd3] text-[#191c22] hover:bg-[#f2eee6] cursor-pointer">
                    154
                  </button>
                  <button className="px-2.5 py-1.5 rounded-lg border border-[#e4dfd3] bg-white text-[#191c22] hover:bg-[#f2eee6] cursor-pointer">
                    التالي
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* SECTION 2: SELECTED CUSTOMER DETAIL PANEL (Left column in RTL, ~35%) */}
          {/* ===================================================================== */}
          <aside className="col-span-12 lg:col-span-4 sticky top-24 space-y-4">
            <div className="bg-white rounded-2xl border border-[#e4dfd3] shadow-md overflow-hidden">
              {/* Card Header & Badge Profile */}
              <div className="bg-gradient-to-l from-[#12302b] to-[#1f4a43] p-5 text-white relative">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e9b44c] to-[#b37a1c] p-0.5 shadow-md">
                      <div className="w-full h-full bg-[#12302b] rounded-[14px] flex items-center justify-center text-white font-extrabold text-xl">
                        {selectedCustomer.initials}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">{selectedCustomer.name}</h3>
                        <span
                          className={`text-white text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            selectedCustomer.status === 'suspended' ? 'bg-[#ba1a1a]' : 'bg-[#2E9E6B]'
                          }`}
                        >
                          {selectedCustomer.statusLabel}
                        </span>
                      </div>
                      <p className="text-xs text-[#8df8bd] font-mono mt-0.5 font-bold">#{selectedCustomer.id}</p>
                      <p className="text-[11px] text-[#e1e2ea] mt-0.5">انضمت في {selectedCustomer.joinDate}</p>
                    </div>
                  </div>

                  {/* Direct Phone Call Icon */}
                  <a
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#8df8bd] transition-colors cursor-pointer"
                    href={`tel:${selectedCustomer.rawPhone}`}
                    title="اتصال مباشر"
                  >
                    <span className="material-symbols-outlined text-lg">phone_enabled</span>
                  </a>
                </div>

                {/* Contact & Identity Sub-strip */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#cbd5e1] flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-[#e9b44c]">call</span>
                    <span className="font-mono" dir="ltr">
                      {selectedCustomer.phone}
                    </span>
                  </span>
                  <span className="text-[#cbd5e1] flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-[#8df8bd]">location_on</span>
                    <span>{selectedCustomer.location}</span>
                  </span>
                </div>
              </div>

              {/* Internal Summary KPI Widgets */}
              <div className="p-4 space-y-3 bg-[#faf9f5]">
                {/* Points Balance Breakdown Widget */}
                <div className="bg-white p-3.5 rounded-xl border border-[#e4dfd3] shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#12302b] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base text-[#e9b44c]">
                        account_balance_wallet
                      </span>
                      رصيد المحفظة الإجمالي
                    </span>
                    <span className="font-mono text-lg font-bold text-[#12302b]">
                      {(selectedCustomer.availablePoints + selectedCustomer.pendingPoints).toLocaleString()}{' '}
                      <span className="text-xs font-semibold text-[#74777f]">
                        نقطة ({(selectedCustomer.availablePointsValue + selectedCustomer.pendingPointsValue).toFixed(2)} ₪)
                      </span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-[#f0ece3]">
                    <div className="bg-[#eef8f3] p-2 rounded-lg border border-[#cbe8d9]">
                      <span className="text-[10px] text-[#2E9E6B] font-bold block">متاحة للاستبدال الفوري</span>
                      <span className="text-sm font-bold text-[#12302b]">
                        {selectedCustomer.availablePoints.toLocaleString()}{' '}
                        <span className="text-[10px] text-[#74777f]">
                          نقطة ({selectedCustomer.availablePointsValue.toFixed(2)} ₪)
                        </span>
                      </span>
                    </div>
                    <div className="bg-[#fef6ee] p-2 rounded-lg border border-[#fae2c8]">
                      <span className="text-[10px] text-[#e07b2f] font-bold block">معلقة بانتظار الاستلام</span>
                      <span className="text-sm font-bold text-[#12302b]">
                        {selectedCustomer.pendingPoints.toLocaleString()}{' '}
                        <span className="text-[10px] text-[#74777f]">
                          نقطة ({selectedCustomer.pendingPointsValue.toFixed(2)} ₪)
                        </span>
                      </span>
                    </div>
                  </div>

                  <p className="text-[10px] text-[#74777f] mt-2 leading-relaxed">
                    * النقاط المعلقة ناتجة عن طلب أزياء معلق: بانتظار استلام وتسليم فستان بوتيك لمسة.
                  </p>
                </div>

                {/* Spending & Orders Metric */}
                <div className="bg-white p-3 rounded-xl border border-[#e4dfd3] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-[#f0f7f5] text-[#1f7a6e] flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg">shopping_bag</span>
                    </span>
                    <div>
                      <span className="text-xs text-[#43474e] block">مشتريات الأزياء التراكمية</span>
                      <span className="text-[11px] text-[#74777f]">عبر متاجر شريكة موثقة</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-bold text-[#12302b] block">{selectedCustomer.ordersSpend} ₪</span>
                    <span className="text-[10px] font-bold text-[#1f7a6e]">{selectedCustomer.ordersCount} طلبات مكتملة</span>
                  </div>
                </div>
              </div>

              {/* Interactive Tabs Inside Customer Panel */}
              <div className="px-4 border-b border-[#e4dfd3] bg-white flex items-center gap-2 overflow-x-auto text-xs font-bold">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`py-2.5 border-b-2 flex items-center gap-1 transition-colors cursor-pointer ${
                    activeTab === 'orders'
                      ? 'border-[#12302b] text-[#12302b]'
                      : 'border-transparent text-[#74777f] hover:text-[#12302b]'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">receipt_long</span>
                  <span>طلباتها</span>
                </button>
                <button
                  onClick={() => setActiveTab('ledger')}
                  className={`py-2.5 border-b-2 flex items-center gap-1 transition-colors cursor-pointer ${
                    activeTab === 'ledger'
                      ? 'border-[#12302b] text-[#12302b]'
                      : 'border-transparent text-[#74777f] hover:text-[#12302b]'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">receipt</span>
                  <span>دفتر نقاطها</span>
                </button>
                <button
                  onClick={() => setActiveTab('wallet')}
                  className={`py-2.5 border-b-2 flex items-center gap-1 transition-colors cursor-pointer ${
                    activeTab === 'wallet'
                      ? 'border-[#12302b] text-[#12302b]'
                      : 'border-transparent text-[#74777f] hover:text-[#12302b]'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                  <span>رصيد المحفظة</span>
                </button>
                <button
                  onClick={() => setActiveTab('complaints')}
                  className={`py-2.5 border-b-2 flex items-center gap-1 transition-colors cursor-pointer ${
                    activeTab === 'complaints'
                      ? 'border-[#12302b] text-[#12302b]'
                      : 'border-transparent text-[#43474e] hover:text-[#12302b]'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm text-[#e07b2f]">report_problem</span>
                  <span>شكاوى ونزاعات</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-[#f2eee6] text-[#74777f] text-[10px] font-bold">0</span>
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="p-4 space-y-2.5 bg-white text-xs">
                {activeTab === 'orders' && (
                  <>
                    <div className="flex items-center justify-between pb-1">
                      <span className="text-xs font-bold text-[#12302b]">آخر طلبات الأزياء (PIN والتسليم):</span>
                      <span className="text-[11px] text-[#1f7a6e] font-bold">
                        إجمالي ({selectedCustomer.ordersCount})
                      </span>
                    </div>

                    {selectedCustomer.recentOrders.map((ord) => (
                      <div
                        key={ord.id}
                        className={`p-2.5 rounded-xl border transition-all ${
                          ord.isDelivered
                            ? 'border-[#e4dfd3] bg-[#fdfdfb] hover:border-[#1f7a6e]'
                            : 'border-[#fae2c8] bg-[#fffaf5]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-[#12302b] flex items-center gap-1">
                            <span
                              className={`material-symbols-outlined text-sm ${
                                ord.isDelivered ? 'text-[#1f7a6e]' : 'text-[#e07b2f]'
                              }`}
                            >
                              {ord.isDelivered ? 'check_circle' : 'hourglass_top'}
                            </span>
                            {ord.store}
                          </span>
                          <span
                            className={`font-mono text-[11px] px-1.5 py-0.2 rounded font-bold ${
                              ord.isDelivered
                                ? 'bg-[#f0f7f5] text-[#12302b]'
                                : 'bg-white text-[#e07b2f] border border-[#fae2c8]'
                            }`}
                          >
                            #{ord.id}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[#43474e]">
                          <span>{ord.item}</span>
                          <span className="font-bold text-[#12302b]">{ord.price} ₪</span>
                        </div>
                        <div className="mt-2 pt-1.5 border-t border-[#f2eee6] flex items-center justify-between text-[10px]">
                          <span className="text-[#74777f]">
                            رمز استلام العميل PIN:{' '}
                            <strong className="text-[#12302b] font-mono tracking-widest bg-gray-100 px-1 rounded">
                              {ord.pin}
                            </strong>
                          </span>
                          <span className={`font-bold ${ord.isDelivered ? 'text-[#2E9E6B]' : 'text-[#e07b2f]'}`}>
                            {ord.pointsGained || ord.pointsPending}
                          </span>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {activeTab === 'ledger' && (
                  <div className="space-y-2 py-2">
                    <p className="text-xs text-[#43474e]">حركات نقاط الولاء الأخيرة لحساب #{selectedCustomer.id}:</p>
                    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-800 flex justify-between">
                      <span>إيداع نقاط مشتريات (بوتيك لمسة)</span>
                      <span className="font-bold font-mono">+600 PTS</span>
                    </div>
                    <div className="p-2 bg-amber-50 rounded-lg text-amber-800 flex justify-between">
                      <span>استبدال قسيمة شراء (10 ₪)</span>
                      <span className="font-bold font-mono">-2,000 PTS</span>
                    </div>
                  </div>
                )}

                {activeTab === 'wallet' && (
                  <div className="space-y-2 py-2">
                    <div className="p-3 bg-[#f6f3ec] rounded-xl border border-[#e4dfd3] flex justify-between items-center">
                      <span className="font-bold">المحفظة الرقمية المربوطة:</span>
                      <span className="font-mono text-emerald-800 font-bold">{selectedCustomer.phone}</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#e4dfd3] flex justify-between items-center">
                      <span>الضمان النقدي المكافئ:</span>
                      <span className="font-bold text-[#12302b]">
                        {(selectedCustomer.availablePointsValue + selectedCustomer.pendingPointsValue).toFixed(2)} ₪
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'complaints' && (
                  <div className="text-center py-4 text-[#74777f]">
                    <span className="material-symbols-outlined text-3xl text-emerald-600 block mb-1">check_circle</span>
                    <p>لا توجد أي شكاوى أو نزاعات مفتوحة بحق هذا العميل.</p>
                  </div>
                )}
              </div>

              {/* Deep-Link to Financial Ledger */}
              <div className="px-4 pb-2">
                <Link
                  to="/admin/dashboard"
                  className="w-full py-2 px-3 rounded-xl bg-[#f0f7f5] hover:bg-[#e2f0ec] text-[#12302b] border border-[#cbe8d9] flex items-center justify-between text-xs font-bold transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-[#1f7a6e]">menu_book</span>
                    <span>الانتقال للدفتر المالي A-09 مفلتراً للعميل</span>
                  </span>
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                </Link>
              </div>

              {/* Audit & Compliance Security Note Banner */}
              <div className="p-4 pt-2">
                <div className="bg-[#fff9e6] rounded-xl p-3 border border-[#f3d98b] text-xs space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#835400] text-base shrink-0 mt-0.5">policy</span>
                    <div>
                      <p className="font-bold text-[#643f00] text-[11px]">تنبيه تدقيق وحوكمة:</p>
                      <p className="text-[10px] text-[#714800] leading-relaxed mt-0.5">
                        لا يمكن تعديل الأرصدة أو النقاط يدويًا إلا بقيد موثّق في الدفتر المحاسبي العام (A-09 / A-18)
                        لضمان مطابقة الضمانات النقدية.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => showToast('تم تحويل طلب التسوية الاستثنائية للمراجعة المالية')}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#835400] hover:text-[#2a1800] underline cursor-pointer"
                  >
                    <span>طلب قيد تسوية استثنائي</span>
                    <span className="material-symbols-outlined text-xs">launch</span>
                  </button>
                </div>
              </div>

              {/* Administrative Action Triggers */}
              <div className="p-4 bg-[#faf8f5] border-t border-[#e4dfd3] space-y-2">
                <button
                  onClick={() => setIsSmsModalOpen(true)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#12302b] hover:bg-[#1a423b] text-white flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base text-[#e9b44c]">sms</span>
                  <span>إرسال تنبيه أو إشعار SMS / واتساب</span>
                </button>
                <button
                  onClick={() => setIsComplaintModalOpen(true)}
                  className="w-full py-2.5 px-3 rounded-xl border border-[#fae2c8] bg-[#fffaf5] text-[#835400] hover:bg-[#fef6ee] flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base text-[#e07b2f]">support_agent</span>
                  <span>فتح شكوى أو نزاع للعميل (A-12)</span>
                </button>
                <button
                  onClick={() => setIsSuspendModalOpen(true)}
                  className="w-full py-2.5 px-3 rounded-xl border border-[#b3261e] text-[#b3261e] hover:bg-[#fce9e7] flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">lock_person</span>
                  <span>تعليق الحساب مؤقتاً (يتطلب سبب إلزامي وسند تدقيق)</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* MODAL 1: SEND SMS / WHATSAPP NOTIFICATION                                 */}
      {/* ========================================================================= */}
      {isSmsModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl border border-[#e4dfd3] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-150">
            <div className="bg-[#12302b] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#e9b44c]">sms</span>
                <h3 className="font-bold text-sm">إرسال إشعار مباشر إلى {selectedCustomer.name}</h3>
              </div>
              <button
                onClick={() => setIsSmsModalOpen(false)}
                className="text-white/70 hover:text-white cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSendNotification} className="p-5 space-y-4 text-xs">
              {smsError && (
                <div className="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 font-bold">
                  {smsError}
                </div>
              )}

              <div>
                <label className="block font-bold text-[#12302b] mb-1">
                  قناة الإرسال: <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                      smsType === 'sms'
                        ? 'border-[#12302b] bg-[#f0f7f5] font-bold text-[#12302b]'
                        : 'border-[#e4dfd3] text-[#43474e]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="smsChannel"
                      checked={smsType === 'sms'}
                      onChange={() => setSmsType('sms')}
                      className="accent-[#12302b]"
                    />
                    <span>رسالة نصية SMS مباشرة</span>
                  </label>
                  <label
                    className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                      smsType === 'whatsapp'
                        ? 'border-emerald-600 bg-emerald-50 font-bold text-emerald-900'
                        : 'border-[#e4dfd3] text-[#43474e]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="smsChannel"
                      checked={smsType === 'whatsapp'}
                      onChange={() => setSmsType('whatsapp')}
                      className="accent-emerald-600"
                    />
                    <span>واتساب رسمي (WhatsApp Business)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#12302b] mb-1">
                  رقم الهاتف المستلم:
                </label>
                <input
                  type="text"
                  readOnly
                  value={selectedCustomer.phone}
                  className="w-full bg-[#f9f9ff] border border-[#e4dfd3] rounded-xl p-2.5 text-[#43474e] font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-[#12302b] mb-1">
                  نص الرسالة / الإشعار: <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={smsMessage}
                  onChange={(e) => setSmsMessage(e.target.value)}
                  placeholder="اكتب التنبيه أو تفاصيل الحركة للعميل..."
                  className="w-full border border-[#e4dfd3] rounded-xl p-2.5 focus:border-[#12302b] focus:ring-1 focus:ring-[#12302b] outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#f0ece3]">
                <button
                  type="button"
                  onClick={() => setIsSmsModalOpen(false)}
                  className="px-4 py-2 border border-[#e4dfd3] rounded-xl text-[#43474e] hover:bg-gray-100 cursor-pointer"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#12302b] hover:bg-[#1a423b] text-white rounded-xl font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span className="material-symbols-outlined text-sm">send</span>
                  <span>إرسال الإشعار الآن</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: SUSPEND CUSTOMER CONFIRMATION (With mandatory fields)            */}
      {/* ========================================================================= */}
      {isSuspendModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl border border-red-300 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-150">
            <div className="bg-[#ba1a1a] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">warning</span>
                <h3 className="font-bold text-sm">تعليق حساب العميل: {selectedCustomer.name}</h3>
              </div>
              <button
                onClick={() => setIsSuspendModalOpen(false)}
                className="text-white/70 hover:text-white cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSuspendCustomer} className="p-5 space-y-4 text-xs">
              <div className="p-3 bg-red-50 text-[#93000a] rounded-xl border border-red-200">
                <p className="font-bold">تنبيه حرج:</p>
                <p className="mt-0.5 leading-relaxed">
                  سيتم تجميد استبدال النقاط ({selectedCustomer.availablePoints} نقطة) وتعليق أي طلبات جديدة حتى إشعار آخر،
                  وتسجيل الإجراء في سجل التدقيق الأمني A-18.
                </p>
              </div>

              {suspendError && (
                <div className="p-3 bg-red-100 text-red-800 rounded-xl border border-red-300 font-bold">
                  {suspendError}
                </div>
              )}

              <div>
                <label className="block font-bold text-[#12302b] mb-1">
                  سبب التعليق الإلزامي: <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={suspendReason}
                  onChange={(e) => setSuspendReason(e.target.value)}
                  className="w-full border border-[#e4dfd3] rounded-xl p-2.5 bg-[#f9f9ff] text-xs font-semibold focus:border-[#ba1a1a] focus:ring-1 focus:ring-[#ba1a1a] outline-none"
                >
                  <option value="">-- اختر السبب الإلزامي --</option>
                  <option value="fraud">اشتباه استبدال غير قانوني للنقاط أو تكرار باركود</option>
                  <option value="fake_orders">طلبات وهمية متكررة ورفض الاستلام عند المندوب</option>
                  <option value="abusive_behavior">سلوك مسيء بحق مندوبي التوصيل أو المتاجر الشريكة</option>
                  <option value="audit_request">قرار تدقيق مالي أو أمني مركزي</option>
                  <option value="other">أسباب رقابية وإدارية أخرى</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#12302b] mb-1">
                  سند التدقيق والملاحظات الإدارية: <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={suspendNotes}
                  onChange={(e) => setSuspendNotes(e.target.value)}
                  placeholder="دوّن رقم المحضر أو الواقعة المبررة لقرار التعليق لتوثيقها في سجل A-18..."
                  className="w-full border border-[#e4dfd3] rounded-xl p-2.5 focus:border-[#ba1a1a] focus:ring-1 focus:ring-[#ba1a1a] outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#f0ece3]">
                <button
                  type="button"
                  onClick={() => setIsSuspendModalOpen(false)}
                  className="px-4 py-2 border border-[#e4dfd3] rounded-xl text-[#43474e] hover:bg-gray-100 cursor-pointer"
                >
                  إلغاء وتراجع
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#ba1a1a] hover:bg-red-800 text-white rounded-xl font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span className="material-symbols-outlined text-sm">lock_person</span>
                  <span>تأكيد تعليق الحساب فوراً</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: OPEN COMPLAINT / DISPUTE (A-12)                                  */}
      {/* ========================================================================= */}
      {isComplaintModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl border border-[#fae2c8] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-150">
            <div className="bg-[#835400] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#feb64e]">support_agent</span>
                <h3 className="font-bold text-sm">فتح ملف شكوى أو نزاع (A-12)</h3>
              </div>
              <button
                onClick={() => setIsComplaintModalOpen(false)}
                className="text-white/70 hover:text-white cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleCreateComplaint} className="p-5 space-y-4 text-xs">
              {complaintError && (
                <div className="p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 font-bold">
                  {complaintError}
                </div>
              )}

              <div>
                <label className="block font-bold text-[#12302b] mb-1">
                  نوع النزاع / الشكوى: <span className="text-red-500">*</span>
                </label>
                <select
                  value={complaintType}
                  onChange={(e) => setComplaintType(e.target.value)}
                  className="w-full border border-[#e4dfd3] rounded-xl p-2.5 bg-[#f9f9ff] text-xs font-semibold focus:border-[#835400] outline-none"
                >
                  <option value="return_issue">نزاع استبدال مقاس فستان / عباية</option>
                  <option value="pin_issue">عدم مطابقة كود الاستلام PIN</option>
                  <option value="points_issue">عدم نزول نقاط الكاش باك</option>
                  <option value="delivery_delay">تأخر وصول المندوب</option>
                  <option value="other">نزاع آخر</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#12302b] mb-1">
                  تفاصيل الشكوى: <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={complaintDetails}
                  onChange={(e) => setComplaintDetails(e.target.value)}
                  placeholder="اكتب وقائع النزاع ورقم الطلب ذو الصلة بالتفصيل..."
                  className="w-full border border-[#e4dfd3] rounded-xl p-2.5 focus:border-[#835400] outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#f0ece3]">
                <button
                  type="button"
                  onClick={() => setIsComplaintModalOpen(false)}
                  className="px-4 py-2 border border-[#e4dfd3] rounded-xl text-[#43474e] hover:bg-gray-100 cursor-pointer"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#835400] hover:bg-[#643f00] text-white rounded-xl font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span className="material-symbols-outlined text-sm">gavel</span>
                  <span>تسجيل النزاع في A-12</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
