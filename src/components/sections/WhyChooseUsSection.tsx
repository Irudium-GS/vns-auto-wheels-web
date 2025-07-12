
import { Star, Clock, Users, Shield, Award, ThumbsUp } from 'lucide-react';

const WhyChooseUsSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All services come with quality assurance and warranty on parts and labor for complete peace of mind."
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Efficient service delivery with most repairs completed within 24 hours to minimize your downtime."
    },
    {
      icon: Star,
      title: "Competitive Pricing",
      description: "Transparent pricing with no hidden charges - quality service at affordable rates for all customers."
    },
    {
      icon: Users,
      title: "Trusted by Community",
      description: "Serving the Palayam and Dindigul community with dedication, building long-term relationships through reliable service."
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "High customer satisfaction rate with repeat customers who trust us for all their two-wheeler needs."
    },
    {
      icon: Award,
      title: "Certified Technicians",
      description: "Our skilled technicians are trained in the latest techniques and technologies to serve you better."
    }
  ];

  return (
    <section className="py-20 bg-auto-black-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Why Choose VNS Auto Spares?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your motorcycle deserves expert care. Here's why thousands of customers trust us with their two-wheelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group bg-auto-black-800/50 p-6 rounded-lg border border-auto-red-600/20 hover:border-auto-red-500/40 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{advantage.title}</h3>
              <p className="text-gray-400">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-auto-black-800 p-8 rounded-lg border border-auto-red-600/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Our Commitment to You</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              At VNS Auto Spares, we understand that your motorcycle or scooter is more than just a vehicle - it's your daily companion. 
              That's why we're committed to providing exceptional service, using only genuine parts, and ensuring your complete satisfaction. 
              Our skilled technicians stay updated with the latest techniques and technologies to serve you better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
