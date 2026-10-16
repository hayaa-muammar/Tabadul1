import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function AuthLayout({ children, role = 'public' }) {
  const headerVariant =
    role === 'customer'
      ? 'customer'
      : role === 'merchant'
        ? 'merchant'
        : 'auth';

  return (
    <div
      dir="rtl"
      className="flex min-h-screen flex-col bg-white"
    >
      <Header variant={headerVariant} />

      <main className="flex flex-1 flex-col">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default AuthLayout;