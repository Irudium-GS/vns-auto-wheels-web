
import { MapPin, Phone, MessageCircle, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/Layout';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 8220960516",
      action: "tel:+918220960516",
      buttonText: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+91 8220960516",
      action: "https://wa.me/918220960516",
      buttonText: "Message Us"
    },
    {
      icon: Mail,
      title: "Email",
      details: "nandhavnsnandhu@gmail.com",
      action: "mailto:nandhavnsnandhu@gmail.com",
      buttonText: "Send Email"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Palayam to Dindigul Road, Palayam, Karur, Tamil Nadu",
      action: "#map",
      buttonText: "View on Map"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    const whatsappMessage = `Hi, I'm ${name}. Phone: ${phone}. Message: ${message}`;
    const whatsappUrl = `https://wa.me/918220960516?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-auto-black-900 via-auto-black-800 to-auto-red-900/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with VNS Auto Spares for all your motorcycle servicing needs. 
            We're here to help and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-auto-black-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Multiple ways to reach us. Choose what's convenient for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-auto-black-700 border-auto-red-600/20 hover:border-auto-red-500/40 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-auto-red-500 to-auto-red-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4 text-sm">{info.details}</p>
                  <Button size="sm" className="bg-auto-red-600 hover:bg-auto-red-700 w-full" asChild>
                    <a href={info.action} target={info.action.startsWith('http') ? '_blank' : undefined} rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {info.buttonText}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-auto-black-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                Or message us directly on WhatsApp for faster response.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Full Name *</Label>
                  <Input 
                    id="name" 
                    name="name"
                    required
                    className="bg-auto-black-700 border-auto-red-600/20 text-white focus:border-auto-red-500" 
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel"
                    required
                    className="bg-auto-black-700 border-auto-red-600/20 text-white focus:border-auto-red-500" 
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email (Optional)</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    className="bg-auto-black-700 border-auto-red-600/20 text-white focus:border-auto-red-500" 
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Message *</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    required
                    rows={5}
                    className="bg-auto-black-700 border-auto-red-600/20 text-white focus:border-auto-red-500" 
                    placeholder="Tell us about your motorcycle service needs..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-auto-red-600 hover:bg-auto-red-700">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>

              <div className="mt-6 p-4 bg-auto-black-700 rounded-lg border border-auto-red-600/20">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Note:</strong> This form will redirect you to WhatsApp 
                  with your message pre-filled for faster communication.
                </p>
              </div>
            </div>

            {/* Map and Business Hours */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="bg-auto-black-700 border-auto-red-600/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-auto-red-500" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Monday - Friday</span>
                      <span className="text-white">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Saturday</span>
                      <span className="text-white">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Sunday</span>
                      <span className="text-auto-red-400">Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-auto-black-800 rounded-lg">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">Emergency Services:</strong> Available on call 
                      for urgent repairs. Additional charges may apply.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <div id="map" className="h-96 bg-auto-black-700 rounded-lg overflow-hidden border border-auto-red-600/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234567890123!2d78.0766!3d10.9577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85c9c1d2c1d2c%3A0x1d2c1d2c1d2c1d2c!2sPalayam%2C%20Karur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VNS Auto Spares Location - Palayam, Karur"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-auto-red-600 to-auto-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Need Immediate Help?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            For urgent motorcycle repairs or immediate assistance, 
            call us directly or message us on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-auto-red-600 border-white hover:bg-red-50 px-8 py-6" asChild>
              <a href="https://wa.me/918220960516?text=Hi,%20I%20need%20immediate%20help%20with%20my%20motorcycle">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-auto-red-600 px-8 py-6" asChild>
              <a href="tel:+918220960516">
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
