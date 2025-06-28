
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-auto-black-900 text-white">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
