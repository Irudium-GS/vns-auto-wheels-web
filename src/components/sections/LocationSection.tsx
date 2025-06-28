
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  return (
    <section className="py-20 bg-auto-black-800 relative overflow-hidden">
      {/* Background decorative images */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Road background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-15 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
          alt="Workshop" 
          className="w-full h-full object-cover rounded-l-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Visit Our Workshop</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Located on Palayam to Dindigul Road, easily accessible for all customers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Decorative corner image */}
            <div className="absolute -top-8 -left-8 w-24 h-24 opacity-20 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Tools" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-auto-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Address</h3>
                  <p className="text-gray-400">
                    Palayam to Dindigul Road<br />
                    Palayam, Karur, Tamil Nadu
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-auto-red-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+918220960516" className="text-gray-400 hover:text-auto-red-400 transition-colors">
                    +91 8220960516
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-auto-red-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Working Hours</h3>
                  <p className="text-gray-400">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <Button size="lg" className="bg-auto-red-600 hover:bg-auto-red-700 mr-4" asChild>
                <a href="https://wa.me/918220960516?text=Hi,%20I%20would%20like%20to%20enquire%20about%20your%20services">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-auto-red-600 text-auto-red-500 hover:bg-auto-red-600 hover:text-white" asChild>
                <a href="tel:+918220960516">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          <div className="h-96 bg-auto-black-700 rounded-lg flex items-center justify-center relative overflow-hidden">
            {/* Map frame decoration */}
            <div className="absolute -top-4 -right-4 w-16 h-16 opacity-30">
              <img 
                src="https://images.unsplash.com/photo-1572297054963-c4324ce15c49?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Location pin" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234567890123!2d78.0766!3d10.9577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85c9c1d2c1d2c%3A0x1d2c1d2c1d2c1d2c!2sPalayam%2C%20Karur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VNS Auto Spares Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
