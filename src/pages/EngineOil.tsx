
import { Settings, Star, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const EngineOil = () => {
  const oilTypes = [
    {
      title: "Mineral Oil",
      description: "Cost-effective option for regular motorcycles with standard performance requirements",
      viscosity: "10W-30, 15W-40, 20W-50",
      suitable: "Standard motorcycles, older bikes, daily commuting",
      features: ["Budget-friendly", "Good protection", "Regular maintenance", "Wide availability"]
    },
    {
      title: "Semi-Synthetic Oil",
      description: "Perfect balance of performance and value, ideal for most modern motorcycles",
      viscosity: "10W-30, 10W-40, 15W-40",
      suitable: "Modern motorcycles, city riding, moderate performance",
      features: ["Better protection", "Improved performance", "Temperature stability", "Extended intervals"]
    },
    {
      title: "Fully Synthetic Oil",
      description: "Premium protection for high-performance motorcycles and extreme conditions",
      viscosity: "5W-30, 10W-40, 15W-50",
      suitable: "Sports bikes, premium motorcycles, high-performance engines",
      features: ["Maximum protection", "Superior performance", "Extreme temperatures", "Longest intervals"]
    }
  ];

  const brands = [
    {
      name: "Castrol",
      products: ["GTX", "Power1", "Activ"],
      specialty: "Trusted global brand with proven technology"
    },
    {
      name: "Motul",
      products: ["7100", "5100", "3000"],
      specialty: "High-performance oils for racing and sports bikes"
    },
    {
      name: "Shell",
      products: ["Helix", "Advance", "Rimula"],
      specialty: "Advanced formulations for all engine types"
    },
    {
      name: "Mobil 1",
      products: ["Racing", "V-Twin", "Synthetic"],
      specialty: "Premium synthetic oils for maximum protection"
    }
  ];

  const benefits = [
    "Genuine products from authorized dealers",
    "Wide range of viscosity grades available",
    "Competitive pricing with bulk discounts",
    "Expert advice on oil selection",
    "Oil change service available",
    "Used oil disposal service"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-auto-black-900 via-auto-black-800 to-auto-red-900/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Engine Oil</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium quality engine oils from trusted brands. Keep your motorcycle engine 
            running smoothly with the right oil for your bike.
          </p>
        </div>
      </section>

      {/* Oil Types */}
      <section className="py-20 bg-auto-black-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Types of Engine Oil</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the right oil type based on your motorcycle and riding conditions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {oilTypes.map((oil, index) => (
              <Card key={index} className="bg-auto-black-700 border-auto-red-600/20 hover:border-auto-red-500/40 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-white text-center">{oil.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 text-sm">{oil.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Viscosity Grades:</h4>
                    <p className="text-auto-red-400 text-sm">{oil.viscosity}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Suitable For:</h4>
                    <p className="text-gray-300 text-sm">{oil.suitable}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {oil.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-auto-red-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-auto-red-600 hover:bg-auto-red-700 mt-4" 
                    asChild
                  >
                    <a href={`https://wa.me/918220960516?text=Hi,%20I%20need%20${oil.title.toLowerCase()}%20for%20my%20motorcycle`}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Get Price Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Brands */}
      <section className="py-20 bg-auto-black-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Available Brands</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We stock premium engine oils from world-renowned manufacturers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand, index) => (
              <Card key={index} className="bg-auto-black-700 border-auto-red-600/20 hover:border-auto-red-500/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <span>{brand.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Popular Products:</h4>
                      <div className="flex flex-wrap gap-2">
                        {brand.products.map((product, productIndex) => (
                          <span key={productIndex} className="bg-auto-red-600/20 text-auto-red-400 px-3 py-1 rounded-full text-sm">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Specialty:</h4>
                      <p className="text-gray-400 text-sm">{brand.specialty}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Oils */}
      <section className="py-20 bg-auto-black-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Why Choose Our Engine Oils?</h2>
              <p className="text-xl text-gray-400 mb-8">
                We source only genuine engine oils from authorized dealers, ensuring 
                your motorcycle gets the protection it deserves.
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
              <h3 className="text-2xl font-bold mb-6 text-white">Oil Selection Guide</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">For Daily Commuting:</h4>
                  <p className="text-gray-400 text-sm">Mineral or Semi-synthetic 15W-40</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">For City Riding:</h4>
                  <p className="text-gray-400 text-sm">Semi-synthetic 10W-30 or 10W-40</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">For Highway Riding:</h4>
                  <p className="text-gray-400 text-sm">Semi-synthetic or Synthetic 10W-40</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">For Sports Bikes:</h4>
                  <p className="text-gray-400 text-sm">Fully Synthetic 10W-40 or 15W-50</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">For Older Bikes:</h4>
                  <p className="text-gray-400 text-sm">Mineral 20W-50</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-auto-red-600 hover:bg-auto-red-700" asChild>
                  <a href="https://wa.me/918220960516?text=Hi,%20I%20need%20help%20choosing%20the%20right%20engine%20oil%20for%20my%20motorcycle">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get Expert Advice
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-auto-red-600 to-auto-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Need Engine Oil?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get the best engine oil for your motorcycle at competitive prices. 
            We also offer oil change service with proper disposal of used oil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-auto-red-600 border-white hover:bg-red-50 px-8 py-6" asChild>
              <a href="https://wa.me/918220960516?text=Hi,%20I%20need%20engine%20oil%20for%20my%20motorcycle.%20Can%20you%20provide%20pricing?">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Price Quote
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-auto-red-600 px-8 py-6" asChild>
              <a href="tel:+918220960516">
                <Phone className="w-5 h-5 mr-2" />
                Call for Details
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EngineOil;
