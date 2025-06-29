
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-auto-red-600 to-auto-red-700 relative overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 w-1/3 h-full">
          <img 
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Motorcycle service" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full">
          <img 
            src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Motorcycle parts" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-auto-red-600/90 via-auto-red-700/95 to-auto-red-600/90"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-1/4 w-16 h-16 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
          alt="Tools" 
          className="w-full h-full object-cover rounded-full blur-sm animate-pulse"
        />
      </div>
      <div className="absolute bottom-10 right-1/4 w-20 h-20 opacity-25">
        <img 
          src="https://images.unsplash.com/photo-1572297054963-c4324ce15c49?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
          alt="Parts" 
          className="w-full h-full object-cover rounded-full blur-sm animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-white">Ready to Service Your Bike?</h2>
        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          Get in touch with us today for professional motorcycle servicing, 
          genuine spare parts, and quality engine oils.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="bg-white text-auto-red-600 border-white hover:bg-red-50 px-8 py-6" asChild>
            <a href="https://wa.me/918220960516?text=Hi,%20I%20would%20like%20to%20book%20a%20service%20appointment">
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Service via WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-auto-red-600 px-8 py-6" asChild>
            <a href="tel:+918220960516">
              <Phone className="w-5 h-5 mr-2" />
              Call for Emergency
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
