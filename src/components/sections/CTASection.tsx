
import { MessageCircle, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-auto-red-600 to-auto-red-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Ready to Service Your Vehicle?</h2>
        <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
          Don't wait for small problems to become big repairs. Book your motorcycle or scooter service today 
          and ensure optimal performance, safety, and longevity of your vehicle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Clock className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Quick Booking</h3>
            <p className="text-red-100 text-sm">WhatsApp or call us for instant appointment scheduling</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <MessageCircle className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Free Consultation</h3>
            <p className="text-red-100 text-sm">Get expert advice on your vehicle's maintenance needs</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Phone className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Emergency Service</h3>
            <p className="text-red-100 text-sm">24/7 support for urgent breakdown assistance</p>
          </div>
        </div>

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
              Call for Emergency: +91 8220960516
            </a>
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-red-100 text-sm">
            <strong>Working Hours:</strong> Monday - Saturday: 9:00 AM - 7:00 PM | Sunday: Closed
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
