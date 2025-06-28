
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-auto-red-600 to-auto-red-700">
      <div className="container mx-auto px-4 text-center">
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
