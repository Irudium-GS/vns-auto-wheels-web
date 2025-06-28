
import { Car, Settings, Phone, MessageCircle, MapPin, Star, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Index = () => {
  const services = [
    {
      icon: Settings,
      title: "General Servicing",
      description: "Complete motorcycle and scooter maintenance"
    },
    {
      icon: Car,
      title: "Spare Parts",
      description: "Genuine 2-wheeler parts and accessories"
    },
    {
      icon: Settings,
      title: "Engine Oil",
      description: "Premium quality engine oils for all bikes"
    }
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: "Quality Service",
      description: "Professional technicians with years of experience"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick and efficient service to get you back on road"
    },
    {
      icon: Users,
      title: "Trusted by Many",
      description: "Serving Palayam and Karur community with dedication"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
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

      {/* What We Do Section */}
      <section className="py-20 bg-auto-black-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">What We Do</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Complete motorcycle solutions under one roof
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-auto-black-700 border-auto-red-600/20 hover:border-auto-red-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-auto-black-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Why Choose VNS Auto Spares?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your motorcycle deserves the best care and attention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-auto-black-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Visit Our Workshop</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Located on Palayam to Dindigul Road, easily accessible for all customers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
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

              <div className="mt-8">
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

            <div className="h-96 bg-auto-black-700 rounded-lg flex items-center justify-center">
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

      {/* CTA Section */}
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
    </Layout>
  );
};

export default Index;
