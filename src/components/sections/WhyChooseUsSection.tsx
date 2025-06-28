
import { Star, Clock, Users } from 'lucide-react';

const WhyChooseUsSection = () => {
  const whyChooseUs = [
    {
      icon: Star,
      title: "Quality Service",
      description: "Professional technicians with years of experience",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick and efficient service to get you back on road",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Users,
      title: "Trusted by Many",
      description: "Serving Palayam and Karur community with dedication",
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-auto-black-900 relative overflow-hidden">
      {/* Background pattern with images */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-4 gap-8 h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-8">
              <img 
                src="https://images.unsplash.com/photo-1572297054963-c4324ce15c49?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Pattern" 
                className="w-full h-32 object-cover rounded"
              />
              <img 
                src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Pattern" 
                className="w-full h-32 object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Why Choose VNS Auto Spares?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your motorcycle deserves the best care and attention
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((reason, index) => (
            <div key={index} className="text-center group relative">
              {/* Background image for each reason */}
              <div className="absolute inset-0 opacity-10 rounded-lg overflow-hidden">
                <img 
                  src={reason.image} 
                  alt={reason.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="relative z-10 p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
