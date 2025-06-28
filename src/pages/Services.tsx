
import { Settings, Car, Clock, Star, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "General Servicing",
      description: "Complete motorcycle and scooter maintenance including oil change, filter replacement, and basic tune-up",
      features: ["Oil Change", "Filter Replacement", "Chain Lubrication", "Basic Tune-up", "Safety Check"]
    },
    {
      icon: Car,
      title: "Engine Tune-up",
      description: "Professional engine optimization for better performance and fuel efficiency",
      features: ["Carburetor Cleaning", "Spark Plug Replacement", "Air Filter Service", "Fuel System Cleaning", "Performance Check"]
    },
    {
      icon: Settings,
      title: "Electrical Repair",
      description: "Expert electrical system diagnosis and repair for all motorcycle electrical issues",
      features: ["Battery Testing", "Wiring Repair", "Light Systems", "Ignition Service", "Charging System"]
    },
    {
      icon: Car,
      title: "Brake & Clutch Service",
      description: "Safety-critical brake and clutch system maintenance and repair",
      features: ["Brake Pad Replacement", "Brake Fluid Change", "Clutch Adjustment", "Cable Service", "Safety Inspection"]
    }
  ];

  const benefits = [
    "Experienced technicians with years of expertise",
    "Use of genuine parts and quality materials",
    "Competitive pricing with transparent billing",
    "Quick turnaround time for most services",
    "Warranty on all repair work",
    "Free basic inspection with every service"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-auto-black-900 via-auto-black-800 to-auto-red-900/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional motorcycle and scooter servicing with years of experience. 
            We provide comprehensive maintenance and repair services to keep your vehicle running smoothly.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-auto-black-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-auto-black-700 border-auto-red-600/20 hover:border-auto-red-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-auto-red-500 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-auto-black-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Why Choose Our Services?</h2>
              <p className="text-xl text-gray-400 mb-8">
                At VNS Auto Spares, we combine expertise with quality parts and transparent service 
                to ensure your motorcycle receives the best care possible.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-auto-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-auto-black-700 p-8 rounded-lg border border-auto-red-600/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Service Process</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-auto-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Inspection</h4>
                    <p className="text-gray-400 text-sm">Thorough inspection of your motorcycle to identify issues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-auto-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Diagnosis</h4>
                    <p className="text-gray-400 text-sm">Professional diagnosis with transparent cost estimation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-auto-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Service</h4>
                    <p className="text-gray-400 text-sm">Quality service using genuine parts and expert techniques</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-auto-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Quality Check</h4>
                    <p className="text-gray-400 text-sm">Final quality check and test ride before delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section className="py-20 bg-auto-black-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white">Service Timing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-auto-black-700 p-6 rounded-lg border border-auto-red-600/20">
                <Clock className="w-8 h-8 text-auto-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Regular Service</h3>
                <p className="text-gray-400">2-3 hours</p>
              </div>
              <div className="bg-auto-black-700 p-6 rounded-lg border border-auto-red-600/20">
                <Settings className="w-8 h-8 text-auto-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Major Repair</h3>
                <p className="text-gray-400">1-2 days</p>
              </div>
              <div className="bg-auto-black-700 p-6 rounded-lg border border-auto-red-600/20">
                <Star className="w-8 h-8 text-auto-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Emergency</h3>
                <p className="text-gray-400">Same day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-auto-red-600 to-auto-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Book Your Service Today</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait for problems to get worse. Schedule your motorcycle service now 
            and keep your ride in perfect condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-auto-red-600 border-white hover:bg-red-50 px-8 py-6" asChild>
              <a href="https://wa.me/918220960516?text=Hi,%20I%20would%20like%20to%20book%20a%20service%20appointment">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-auto-red-600 px-8 py-6" asChild>
              <a href="tel:+918220960516">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
