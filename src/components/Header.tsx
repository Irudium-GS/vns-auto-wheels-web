
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Spare Parts', href: '/spare-parts' },
    { name: 'Engine Oil', href: '/engine-oil' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-auto-black-900/95 backdrop-blur-sm border-b border-auto-red-600/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">VNS Auto Spares</h1>
              <p className="text-xs text-auto-red-400">Motorcycle Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-auto-red-400 ${
                  isActive(item.href) ? 'text-auto-red-500' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild className="border-auto-red-600 text-auto-red-500 hover:bg-auto-red-600 hover:text-white">
              <a href="tel:+918220960516">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="sm" className="bg-auto-red-600 hover:bg-auto-red-700" asChild>
              <a href="https://wa.me/918220960516" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-auto-black-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-auto-red-600/20">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-auto-red-400 px-3 py-2 rounded-md ${
                    isActive(item.href) ? 'text-auto-red-500 bg-auto-red-600/10' : 'text-gray-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t border-auto-red-600/20">
                <Button variant="outline" size="sm" asChild className="border-auto-red-600 text-auto-red-500 hover:bg-auto-red-600 hover:text-white">
                  <a href="tel:+918220960516">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button size="sm" className="bg-auto-red-600 hover:bg-auto-red-700" asChild>
                  <a href="https://wa.me/918220960516" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
