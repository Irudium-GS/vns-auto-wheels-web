
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multiple Background Images */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
      </div>
      
      {/* Side Images for Visual Interest */}
      <div className="absolute left-0 top-1/4 w-40 h-60 opacity-20 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1572297054963-c4324ce15c49?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
          alt="Motorcycle parts" 
          className="w-full h-full object-cover rounded-r-2xl"
        />
      </div>
      <div className="absolute right-0 top-1/3 w-32 h-48 opacity-20 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
          alt="Motorcycle engine" 
          className="w-full h-full object-cover rounded-l-2xl"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-auto-black-900/90 via-auto-black-800/85 to-auto-red-900/50"></div>
      
      {/* Additional Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-auto-red-600/15 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Small decorative images around the title */}
          <div className="absolute -top-10 left-1/4 w-16 h-16 opacity-30 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
              alt="Wrench" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -top-8 right-1/4 w-12 h-12 opacity-25 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
              alt="Motorcycle gear" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient drop-shadow-lg">VNS Auto Spares</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 drop-shadow-md">
            Servicing, Spares & Oil — All in One Place
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-sm">
            Professional motorcycle and scooter servicing in Palayam, Karur. 
            Your trusted partner for quality repairs, genuine spare parts, and premium engine oils.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-auto-red-600 hover:bg-auto-red-700 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
              <a href="https://wa.me/918220960516?text=Hi,%20I%20would%20like%20to%20enquire%20about%20your%20services">
                <MessageCircle className="w-5 h-5 mr-2" />
                Message Us on WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-auto-red-500 bg-white/10 backdrop-blur-sm text-white hover:bg-auto-red-600 hover:border-auto-red-600 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
              <a href="tel:+918220960516">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
        
        {/* Floating elements with motorcycle theme */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-auto-red-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-auto-red-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-auto-red-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-8 h-8 bg-auto-red-300/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
