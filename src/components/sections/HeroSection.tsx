
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-auto-black-900 via-auto-black-800 to-auto-red-900/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">VNS Auto Spares</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            Professional Motorcycle & Scooter Service Center
          </p>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            Located on Palayam to Dindigul Road, Karur - We specialize in comprehensive two-wheeler maintenance, 
            genuine spare parts supply, and premium engine oil services for all motorcycle and scooter brands.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-auto-black-800/50 p-6 rounded-lg border border-auto-red-600/20">
              <h3 className="text-lg font-semibold text-white mb-2">Expert Servicing</h3>
              <p className="text-gray-400 text-sm">Complete maintenance for all two-wheeler brands with experienced technicians</p>
            </div>
            <div className="bg-auto-black-800/50 p-6 rounded-lg border border-auto-red-600/20">
              <h3 className="text-lg font-semibold text-white mb-2">Genuine Parts</h3>
              <p className="text-gray-400 text-sm">Original spare parts and accessories at competitive prices</p>
            </div>
            <div className="bg-auto-black-800/50 p-6 rounded-lg border border-auto-red-600/20">
              <h3 className="text-lg font-semibold text-white mb-2">Quality Oils</h3>
              <p className="text-gray-400 text-sm">Premium engine oils from trusted brands for optimal performance</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-auto-red-600 hover:bg-auto-red-700 text-lg px-8 py-6" asChild>
              <a href="https://wa.me/918220960516?text=Hi,%20I%20would%20like%20to%20enquire%20about%20your%20services">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Service on WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-auto-red-500 text-auto-red-500 hover:bg-auto-red-600 hover:text-white text-lg px-8 py-6" asChild>
              <a href="tel:+918220960516">
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 8220960516
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
