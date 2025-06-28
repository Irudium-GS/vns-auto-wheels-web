
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import LocationSection from '@/components/sections/LocationSection';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <LocationSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
