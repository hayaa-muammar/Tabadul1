import { useLocation, Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import {
  ShieldCheck,
  FileText,
  HelpCircle,
  HelpCircle as FaqIcon,
  MessageCircle,
  Phone,
  ArrowRight,
  Store,
} from 'lucide-react';

const sections = {
  terms: {
    id: 'terms',
    path: '/terms',
    title: 'شروط وأحكام استخدام منصة تبادل',
    subtitle: 'القواعد والسياسات المنظمة لبرنامج مكافآت المتاجر في قطاع غزة 2026',
    icon: FileText,
    content: [
      {
        heading: '١. قبول الشروط وتطبيقها',
        text: 'يعد استخدامك لمنصة وتطبيق تبادل بمثابة موافقة كاملة على هذه الشروط. المنصة مخصصة لربط المتاجر الشريكة في قطاع غزة بالمتسوقين لإتاحة استبدال نقاط الولاء والمكافآت.',
      },
      {
        heading: '٢. أهلية الحساب والبيانات المعتمدة',
        text: 'يجب أن يكون رقم الهاتف المستخدم في التسجيل مسجلاً برمز المشغل الفلسطيني المعتمد (059 أو 056). يتحمل المستخدم مسؤولية صحة بياناته وحماية رمز التحقق السريع (OTP).',
      },
      {
        heading: '٣. نقاط الولاء والمكافآت',
        text: 'تكتسب النقاط بناءً على سياسة كل متجر شريك. النقاط غير قابلة للتحويل إلى عملات نقدية ورقية خارج المنصة، وتستخدم حصرًا في المشتريات والخصومات لدى المتاجر المعتمدة.',
      },
      {
        heading: '٤. وضع المعاينة التجريبي (Demo Mode)',
        text: 'النسخة التجريبية الحالية مخصصة لتقييم واجهات وتجربة المستخدم، ولا تترتب عليها أي تسويات مالية حقيقية أو التزامات تعاقدية حتى التدشين الرسمي.',
      },
    ],
  },
  privacy: {
    id: 'privacy',
    path: '/privacy',
    title: 'سياسة الخصوصية وحماية البيانات',
    subtitle: 'نلتزم بأعلى معايير حماية سرية بيانات المتاجر والمتسوقين في فلسطين',
    icon: ShieldCheck,
    content: [
      {
        heading: '١. جمع البيانات واستخدامها',
        text: 'نجمع فقط البيانات الضرورية لتشغيل برنامج الولاء، وتحديداً رقم الهاتف، سجل استبدال النقاط المكتسبة، وقسائم الخصم المستخدمة لدى المتاجر الشريكة.',
      },
      {
        heading: '٢. تشفير الاتصالات وأمن البيانات',
        text: 'تخضع كافة البيانات لقنوات اتصال مشفرة بمعيار 256-bit، مع استضافة مؤمنة لضمان استمرارية الخدمة والوصول حتى في ظروف انقطاع الشبكات المتقطع.',
      },
      {
        heading: '٣. سرية العمليات وعدم مشاركة البيانات',
        text: 'لا نبيع ولا نشارك أي بيانات تخص المتسوقين أو المتاجر مع أي أطراف ثالثة أو شركات إعلانية، ويقتصر إرسال الإشعارات على تحديثات النقاط ورسائل OTP.',
      },
      {
        heading: '٤. حقوق المستخدم في التعديل والحذف',
        text: 'يحق لأي مستخدم أو تاجر طلب تحديث بياناته أو حذف حسابه نهائياً من خلال التواصل المباشر مع فريق الدعم الفني للمنصة.',
      },
    ],
  },
  help: {
    id: 'help',
    path: '/help',
    title: 'مركز المساعدة والدعم الفني',
    subtitle: 'فريق دعم محلي على مدار الساعة لخدمة المتسوقين والمتاجر الشريكة في غزة',
    icon: HelpCircle,
    content: [
      {
        heading: 'قنوات التواصل المباشرة',
        text: 'يمكنك التواصل مع فريق الدعم الفني عبر واتساب المعتمد أو الخط المباشر للاستفسار عن تفعيل الحسابات وتسوية رصيد المتاجر.',
      },
      {
        heading: 'أوقات العمل واستجابة الطوارئ',
        text: 'فريق الدعم الفني متاح يومياً من الساعة 9:00 صباحاً وحتى 9:00 مساءً بتوقيت القدس، مع خط طوارئ خاص بالتجار المعتمدين.',
      },
    ],
  },
  faq: {
    id: 'faq',
    path: '/faq',
    title: 'الأسئلة الشائعة (FAQ)',
    subtitle: 'إجابات وافية عن أكثر الأسئلة تداولاً حول منصة تبادل ونظام المكافآت',
    icon: FaqIcon,
    content: [
      {
        heading: 'كيف يعمل نظام احتساب النقاط؟',
        text: 'تحصل على نقطة ولاء مقابل كل شيكل أو نسبة مئوية محددة من مشترياتك في أي متجر شريك، ويمكنك لاحقاً استبدالها بخصومات فورية.',
      },
      {
        heading: 'هل يمكنني استخدام النقاط في متجر مختلف عن متجر الشراء؟',
        text: 'نعم! تتيح منصة تبادل شبكة مكافآت موحدة تسمح لك بجمع النقاط من متجر معين واستخدامها في متاجر أخرى شريكة في الشبكة.',
      },
      {
        heading: 'كيف ينضم متجري إلى شبكة شركاء تبادل؟',
        text: 'يمكنك الدخول إلى بوابة تسجيل التجار وتعبئة بيانات المتجر ورقم الجوال المعتمد، وسيقوم فريق العمل بالتواصل معك وتفعيل المتجر خلال 24 ساعة.',
      },
      {
        heading: 'ماذا أفعل في حال عدم وصول رمز التحقق (OTP)؟',
        text: 'يمكنك اختيار استقبال الرمز عبر تطبيق واتساب أو الرسائل القصيرة SMS، كما يمكنك التواصل الفوري مع الدعم الفني لمساعدتك في التحقق.',
      },
    ],
  },
};

export default function InfoPage() {
  const location = useLocation();

  // تحديد الصفحة النشطة وفق المسار
  let activeKey = 'help';
  if (location.pathname.includes('/terms')) activeKey = 'terms';
  else if (location.pathname.includes('/privacy')) activeKey = 'privacy';
  else if (location.pathname.includes('/faq')) activeKey = 'faq';
  else if (location.pathname.includes('/help')) activeKey = 'help';

  const section = sections[activeKey] || sections.help;
  const ActiveIcon = section.icon;

  return (
    <MainLayout headerVariant="public">
      <div
        dir="rtl"
        className="min-h-screen bg-[#f9f9fc] font-[Tajawal,sans-serif] text-[#191c22] py-8 sm:py-12"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#74777f]">
            <Link to="/" className="hover:text-[#032448] transition">الرئيسية</Link>
            <span>/</span>
            <span className="font-bold text-[#032448]">{section.title}</span>
          </nav>

          {/* Hero Header */}
          <div className="rounded-3xl border border-[#e1e2ea] bg-white p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#032448]/10 px-3.5 py-1.5 text-xs font-bold text-[#032448]">
                  <ActiveIcon size={16} />
                  <span>دليل معلومات منصة تبادل 2026</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#032448]">
                  {section.title}
                </h1>
                <p className="text-sm leading-6 text-[#43474e]">
                  {section.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <Link
                  to="/customer/home"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#12302b] px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#1a443d] transition"
                >
                  <Store size={15} />
                  استكشاف المتاجر المعتمدة
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#d1d5db] bg-white px-4 py-2.5 text-xs font-bold text-[#191c22] hover:bg-neutral-50 transition"
                >
                  الرئيسية
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="mt-8 flex flex-wrap gap-2 border-t border-[#f0f0f5] pt-6">
              {Object.values(sections).map((sec) => (
                <Link
                  key={sec.id}
                  to={sec.path}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    sec.id === activeKey
                      ? 'bg-[#032448] text-white shadow-sm'
                      : 'bg-[#ecedf6] text-[#43474e] hover:bg-[#dfe1ed] hover:text-[#032448]'
                  }`}
                >
                  <sec.icon size={15} />
                  {sec.id === 'terms' && 'شروط الاستخدام'}
                  {sec.id === 'privacy' && 'سياسة الخصوصية'}
                  {sec.id === 'help' && 'مركز المساعدة'}
                  {sec.id === 'faq' && 'الأسئلة الشائعة'}
                </Link>
              ))}
            </div>
          </div>

          {/* Main Content Articles */}
          <div className="space-y-4">
            {section.content.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#e1e2ea] bg-white p-6 shadow-sm space-y-2 hover:border-[#032448]/30 transition"
              >
                <h2 className="text-base font-extrabold text-[#032448] flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#032448]/10 text-xs font-bold text-[#032448]">
                    {idx + 1}
                  </span>
                  {item.heading}
                </h2>
                <p className="text-sm leading-7 text-[#43474e] pr-8">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Support Channels */}
          <div className="rounded-2xl border border-[#835400]/20 bg-gradient-to-br from-[#fff7ed] to-[#ffedd5]/50 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-sm font-extrabold text-[#714800]">
                  هل لديك استفسار إضافي أو تحتاج دعماً تقنياً مباشراً؟
                </h3>
                <p className="text-xs text-[#714800]/80">
                  فريقنا في غزة مستعد للإجابة عن أسئلتكم ومساعدة التجار في إعداد حملات الولاء.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://wa.me/970590000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition"
                >
                  <MessageCircle size={15} />
                  محادثة واتساب مباشرة
                </a>
                <Link
                  to="/customer/login"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#835400]/30 bg-white px-4 py-2.5 text-xs font-bold text-[#714800] hover:bg-[#fff7ed] transition"
                >
                  <Phone size={15} />
                  بوابة المتسوقين
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}
