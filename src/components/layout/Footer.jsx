function Footer() {
  const footerLinks = [
    { label: 'شروط الاستخدام', href: '/terms' },
    { label: 'سياسة الخصوصية', href: '/privacy' },
    { label: 'بوابة التجار', href: '/merchant/login' },
    { label: 'مركز الدعم الفني', href: '/help' },
    { label: 'الأسئلة الشائعة', href: '/faq' },
  ];

  return (
    <footer
      dir="rtl"
      className="mt-auto w-full bg-[#ecedf6]"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-8">

        {/* Copyright */}
        <p className="text-center text-sm leading-6 text-[#43474e] md:text-right">
          جميع الحقوق محفوظة © منصة تبادل لمكافآت المتاجر في غزة 2026
        </p>

        {/* Footer Links */}
        <nav
          aria-label="روابط التذييل"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold"
        >
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#43474e] transition-colors duration-200 hover:text-[#032448]"
            >
              {link.label}
            </a>
          ))}
        </nav>

      </div>
    </footer>
  );
}

export default Footer;