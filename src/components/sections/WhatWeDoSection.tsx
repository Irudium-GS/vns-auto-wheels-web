
import { Car, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhatWeDoSection = () => {
  const services = [
    {
      icon: Settings,
      title: "General Servicing",
      description: "Complete motorcycle and scooter maintenance",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Car,
      title: "Spare Parts",
      description: "Genuine 2-wheeler parts and accessories",
      image: "https://images.unsplash.com/photo-1572297054963-c4324ce15c49?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Settings,
      title: "Engine Oil",
      description: "Premium quality engine oils for all bikes",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-auto-black-800 relative overflow-hidden">
      {/* Background decorative images */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
          alt="Motorcycle" 
          className="w-full h-full object-cover rounded-full blur-sm"
        />
      </div>
      <div className="absolute bottom-10 right-10 w-40 h-40 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
          alt="Tools" 
          className="w-full h-full object-cover rounded-full blur-sm"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">What We Do</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Complete motorcycle solutions under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-auto-black-700 border-auto-red-600/20 hover:border-auto-red-500/40 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-auto-black-700 via-transparent to-transparent"></div>
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-full flex items-center justify-center mx-auto mb-6 -mt-12 relative z-10">
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
