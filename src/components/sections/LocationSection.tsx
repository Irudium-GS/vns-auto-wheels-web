
import { MapPin, Phone, Clock, MessageCircle, Navigation, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  return (
    <section className="py-20 bg-auto-black-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Visit Our Service Center</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Strategically located on Palayam to Dindigul Road for easy access from all parts of Dindigul District
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-auto-black-700 p-6 rounded-lg border border-auto-red-600/20">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-auto-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Location</h3>
                  <p className="text-gray-400 mb-4">
                    VNS Auto Spares<br />
                    Palayam to Dindigul Road<br />
                    Palayam, Dindigul District<br />
                    Tamil Nadu, India
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Navigation className="w-4 h-4" />
                    <span>Easy to locate on main road with clear signage</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-auto-black-700 p-6 rounded-lg border border-auto-red-600/20">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-auto-red-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Contact Information</h3>
                  <p className="text-gray-400 mb-2">
                    <strong>Phone:</strong> <a href="tel:+918220960516" className="text-auto-red-400 hover:text-auto-red-300">+91 8220960516</a>
                  </p>
                  <p className="text-gray-400 mb-4">
                    <strong>WhatsApp:</strong> <a href="https://wa.me/918220960516" className="text-auto-red-400 hover:text-auto-red-300">+91 8220960516</a>
                  </p>
                  <p className="text-sm text-gray-500">Available for both calls and WhatsApp messages</p>
                </div>
              </div>
            </div>

            <div className="bg-auto-black-700 p-6 rounded-lg border border-auto-red-600/20">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-auto-red-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Working Hours</h3>
                  <div className="space-y-1 text-gray-400">
                    <p><strong>Monday - Saturday:</strong> 9:00 AM - 7:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                    <p className="text-sm text-gray-500 mt-2">Emergency services available on call</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-auto-black-700 p-6 rounded-lg border border-auto-red-600/20">
              <div className="flex items-start space-x-4">
                <Car className="w-6 h-6 text-auto-red-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Parking & Facilities</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Ample parking space available</li>
                    <li>• Covered waiting area</li>
                    <li>• Easy vehicle drop-off and pickup</li>
                    <li>• Clean and organized workshop</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-auto-red-600 hover:bg-auto-red-700" asChild>
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

          <div className="h-96 bg-auto-black-700 rounded-lg overflow-hidden border border-auto-red-600/20">
            <iframe
              src="https://maps.google.com/maps?q=10.7257696%2C78.1348896&z=17&hl=en&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VNS Auto Spares Location - Palayam to Dindigul Road, Dindigul District"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
