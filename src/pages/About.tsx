
import { Star, Users, Clock, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const About = () => {
  const values = [
    {
      icon: Star,
      title: "Quality First",
      description: "We never compromise on the quality of our service or parts"
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority and drives everything we do"
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Dependable service you can count on, every time"
    }
  ];

  const achievements = [
    "5+ Years of Experience",
    "500+ Satisfied Customers",
    "Expert Technicians",
    "Genuine Parts Guaranteed",
    "Quick Turnaround Time",
    "Trusted by Local Community"
  ];

  const services = [
    "Complete motorcycle servicing",
    "Scooter maintenance and repair",
    "Engine oil sales and change",
    "Genuine spare parts supply",
    "Emergency repair services",
    "Customer consultation and advice"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-auto-black-900 via-auto-black-800 to-auto-red-900/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gradient">About VNS Auto Spares</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for motorcycle servicing, spare parts, and engine oils in Palayam, Karur. 
            Committed to keeping your ride smooth and reliable.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-auto-black-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  VNS Auto Spares was established with a simple mission: to provide reliable, 
                  professional motorcycle servicing and genuine spare parts to the people of 
                  Palayam, Karur, and surrounding areas.
                </p>
                <p>
                  What started as a small workshop has grown into a trusted service center, 
                  thanks to our commitment to quality, honesty, and customer satisfaction. 
                  We understand that your motorcycle is not just a vehicle – it's your 
                  daily companion, your freedom, and often your livelihood.
                </p>
                <p>
                  Over the years, we have built strong relationships with our customers 
                  by providing transparent, reliable service at fair prices. Our team of 
                  experienced technicians treats every motorcycle with the same care and 
                  attention they would give their own.
                </p>
                <p>
                  Today, VNS Auto Spares is proud to be a part of the Palayam community, 
                  serving hundreds of satisfied customers who trust us with their 
                  motorcycle service needs.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-auto-black-700 p-6 rounded-lg border border-auto-red-600/20">
                <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400">
                  To provide exceptional motorcycle servicing and genuine spare parts 
                  with honesty, expertise, and dedication to customer satisfaction.
                </p>
              </div>
              
              <div className="bg-auto-black-700 p-6 rounded-lg border border-auto-red-600/20">
                <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-400">
                  To be the most trusted motorcycle service center in Karur, known for 
                  quality work, fair pricing, and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-auto-black-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-auto-black-700 border-auto-red-600/20 hover:border-auto-red-500/40 transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-auto-black-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">What We Offer</h2>
              <p className="text-xl text-gray-400 mb-8">
                Comprehensive motorcycle services designed to keep your bike in perfect condition
              </p>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-auto-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Our Achievements</h2>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-auto-black-700 p-4 rounded-lg border border-auto-red-600/20 text-center">
                    <p className="text-auto-red-400 font-semibold">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-auto-black-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experienced professionals dedicated to excellent service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-auto-black-700 border-auto-red-600/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">V</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">VNS Auto Spares Team</h3>
                <p className="text-auto-red-400 mb-4">Expert Technicians & Customer Service</p>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Our team consists of experienced motorcycle technicians who are passionate about 
                  their work. We continuously update our skills and knowledge to provide the best 
                  service for all types of motorcycles and scooters. Every team member is committed 
                  to maintaining the highest standards of workmanship and customer service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-auto-red-600 to-auto-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Experience the VNS Difference</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust VNS Auto Spares for their 
            motorcycle service needs. Experience quality service with personal attention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-auto-red-600 border-white hover:bg-red-50 px-8 py-6" asChild>
              <a href="https://wa.me/918220960516?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Us
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

export default About;
