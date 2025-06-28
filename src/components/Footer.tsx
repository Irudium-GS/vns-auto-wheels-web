
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-auto-black-900 border-t border-auto-red-600/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">VNS Auto Spares</h1>
                <p className="text-sm text-auto-red-400">Your Trusted Motorcycle Service Center</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional motorcycle and scooter servicing, genuine spare parts, and quality engine oils. 
              Serving Palayam, Karur and surrounding areas with excellence since years.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="tel:+918220960516"
                className="bg-auto-red-600 hover:bg-auto-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/918220960516"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-auto-red-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-auto-red-400 transition-colors">Services</Link></li>
              <li><Link to="/spare-parts" className="text-gray-400 hover:text-auto-red-400 transition-colors">Spare Parts</Link></li>
              <li><Link to="/engine-oil" className="text-gray-400 hover:text-auto-red-400 transition-colors">Engine Oil</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-auto-red-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-auto-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-auto-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Palayam to Dindigul Road</p>
                  <p className="text-gray-400 text-sm">Palayam, Karur, Tamil Nadu</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-auto-red-500" />
                <a href="tel:+918220960516" className="text-gray-400 hover:text-auto-red-400 transition-colors">
                  +91 8220960516
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-auto-red-500" />
                <a href="mailto:nandhavnsnandhu@gmail.com" className="text-gray-400 hover:text-auto-red-400 transition-colors text-sm">
                  nandhavnsnandhu@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-auto-red-500 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-400 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-auto-red-600/20 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} VNS Auto Spares. All rights reserved. | 
            Professional Motorcycle Services in Palayam, Karur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
