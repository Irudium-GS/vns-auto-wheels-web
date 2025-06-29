
import { Settings, Car, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhatWeDoSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Complete Servicing",
      description: "Comprehensive motorcycle and scooter maintenance including periodic servicing, engine tune-ups, and performance optimization.",
      features: ["Oil Change & Filter Replacement", "Chain Cleaning & Lubrication", "Brake System Check", "Electrical System Diagnosis"]
    },
    {
      icon: Car,
      title: "Genuine Spare Parts",
      description: "Authentic spare parts and accessories for all major two-wheeler brands ensuring quality and reliability.",
      features: ["Engine Components", "Brake Parts & Clutch", "Electrical Components", "Body Parts & Accessories"]
    },
    {
      icon: Wrench,
      title: "Premium Engine Oils",
      description: "High-quality engine oils from leading brands for optimal engine performance and longevity.",
      features: ["Synthetic & Semi-Synthetic Oils", "Brand Specific Recommendations", "Performance Grade Oils", "Competitive Pricing"]
    }
  ];

  return (
    <section className="py-20 bg-auto-black-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Complete two-wheeler solutions with professional expertise and quality assurance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-auto-black-700 border-auto-red-600/20 hover:border-auto-red-500/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white text-center">{service.title}</h3>
                <p className="text-gray-400 mb-6 text-center">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-auto-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
