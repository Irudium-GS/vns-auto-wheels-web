
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-auto-black-900 via-auto-black-800 to-auto-red-900/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-red-600/5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">VNS Auto Spares</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Servicing, Spares & Oil — All in One Place
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Professional motorcycle and scooter servicing in Palayam, Karur. 
            Your trusted partner for quality repairs, genuine spare parts, and premium engine oils.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-auto-red-600 hover:bg-auto-red-700 text-lg px-8 py-6" asChild>
              <a href="https://wa.me/918220960516?text=Hi,%20I%20would%20like%20to%20enquire%20about%20your%20services">
                <MessageCircle className="w-5 h-5 mr-2" />
                Message Us on WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-auto-red-600 text-auto-red-500 hover:bg-auto-red-600 hover:text-white text-lg px-8 py-6" asChild>
              <a href="tel:+918220960516">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
