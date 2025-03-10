'use client';
import { ThemeUIProvider } from 'theme-ui';
import theme from 'theme';
import { StickyProvider } from '../contexts/app/app.provider';
import Banner from 'sections/banner';
import Layout from 'components/layout';
import KeyFeature from 'sections/key-feature';
import ServiceSection from 'sections/service-section';
import Feature from 'sections/feature';
import CoreFeature from 'sections/core-feature';
import WorkFlow from 'sections/workflow';
import Package from 'sections/package';
import TestimonialCard from 'sections/testimonial';
import PreLoader from 'components/preloader/preloader';
import WhyChooseUs from 'sections/why-choose-us';
import BannerHeader from 'sections/banner-header';
import Contact from 'sections/contact';

export default function Home() {
  return (
    <>
      <PreLoader />
      <ThemeUIProvider theme={theme}>
        <StickyProvider>
          <Layout>
            <BannerHeader />
            <WhyChooseUs />
            <KeyFeature />
            <ServiceSection />
            <Feature />
            <Package />
            <WorkFlow />
            <TestimonialCard />

            <Contact />
          </Layout>
        </StickyProvider>
      </ThemeUIProvider>
    </>
  );
}
