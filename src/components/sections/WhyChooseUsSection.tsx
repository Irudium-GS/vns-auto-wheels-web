
import { Star, Clock, Users } from 'lucide-react';

const WhyChooseUsSection = () => {
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
  );
};

export default WhyChooseUsSection;
