
import { Settings, Car, MessageCircle, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const SpareParts = () => {
  const categories = [
    {
      icon: Settings,
      title: "Engine Parts",
      description: "Pistons, rings, valves, gaskets and complete engine components",
      items: ["Pistons & Rings", "Valves", "Gaskets", "Cylinder Heads", "Crankshafts"],
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Car,
      title: "Brake System",
      description: "Brake pads, discs, shoes and complete braking system parts",
      items: ["Brake Pads", "Brake Discs", "Brake Shoes", "Brake Cables", "Master Cylinders"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Settings,
      title: "Electrical Parts",
      description: "Batteries, lights, wiring and electrical system components",
      items: ["Batteries", "LED Lights", "Wiring Harness", "Switches", "Indicators"],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Car,
      title: "Body Parts",
      description: "Panels, mirrors, handles and exterior body components",
      items: ["Side Panels", "Mirrors", "Handle Grips", "Footrests", "Mudguards"],
      image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Settings,
      title: "Transmission",
      description: "Clutch plates, chains, sprockets and transmission parts",
      items: ["Clutch Plates", "Drive Chains", "Sprockets", "Gear Cables", "Chain Covers"],
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Car,
      title: "Suspension",
      description: "Shock absorbers, springs and suspension system parts",
      items: ["Shock Absorbers", "Springs", "Bushings", "Fork Seals", "Swing Arms"],
      image: "https://images.unsplash.com/photo-1609979341138-db60a4c73332?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const brands = [
    "Honda", "Yamaha", "Bajaj", "TVS", "Hero", "Royal Enfield", 
    "KTM", "Suzuki", "Kawasaki", "Mahindra"
  ];

  const features = [
    "Genuine OEM parts available",
    "Compatible aftermarket options",
    "Quality tested components",
    "Warranty on all parts",
    "Competitive pricing",
    "Quick availability check via WhatsApp"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-auto-black-900 via-auto-black-800 to-auto-red-900/20 relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Spare parts background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Spare Parts</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Genuine and compatible spare parts for all major 2-wheeler brands. 
            Quality components to keep your motorcycle running at its best.
          </p>
        </div>
      </section>

      {/* Parts Categories */}
      <section className="py-20 bg-auto-black-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Parts Categories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We stock a comprehensive range of motorcycle parts for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="bg-auto-black-700 border-auto-red-600/20 hover:border-auto-red-500/40 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-auto-red-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="mt-4 w-full bg-auto-red-600 hover:bg-auto-red-700" 
                    asChild
                  >
                    <a href={`https://wa.me/918220960516?text=Hi,%20I%20need%20${category.title.toLowerCase()}%20for%20my%20motorcycle`}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Enquire via WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="py-20 bg-auto-black-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Supported Brands</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We stock parts for all major motorcycle and scooter brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="bg-auto-black-700 p-6 rounded-lg text-center border border-auto-red-600/20 hover:border-auto-red-500/40 transition-colors">
                <h3 className="text-lg font-semibold text-white">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-auto-black-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Why Choose Our Parts?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Quality is our priority. We source genuine OEM parts and high-quality 
                aftermarket alternatives to ensure your motorcycle performs at its best.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-auto-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Quality motorcycle parts"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-auto-black-900/50 to-transparent rounded-lg"></div>
              
              <div className="bg-auto-black-700 p-8 rounded-lg border border-auto-red-600/20 mt-8">
                <h3 className="text-2xl font-bold mb-6 text-white">How to Order</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-auto-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Contact Us</h4>
                      <p className="text-gray-400 text-sm">Message us on WhatsApp with your requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-auto-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Check Availability</h4>
                      <p className="text-gray-400 text-sm">We'll check availability and provide pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-auto-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Confirm Order</h4>
                      <p className="text-gray-400 text-sm">Confirm your order and arrange pickup/delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-auto-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Installation</h4>
                      <p className="text-gray-400 text-sm">Professional installation service available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-auto-red-600 to-auto-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Need Spare Parts?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get genuine parts at competitive prices. Message us with your requirements 
            and we'll check availability for you right away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-auto-red-600 border-white hover:bg-red-50 px-8 py-6" asChild>
              <a href="https://wa.me/918220960516?text=Hi,%20I%20need%20spare%20parts%20for%20my%20motorcycle.%20Can%20you%20help?">
                <MessageCircle className="w-5 h-5 mr-2" />
                Check Availability
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpareParts;
