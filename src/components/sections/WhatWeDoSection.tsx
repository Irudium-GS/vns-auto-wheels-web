
import { Car, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhatWeDoSection = () => {
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

  return (
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
  );
};

export default WhatWeDoSection;
