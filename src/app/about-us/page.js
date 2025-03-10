'use client';
import { ThemeUIProvider } from 'theme-ui';
import theme from 'theme';
import { StickyProvider } from '../../contexts/app/app.provider';
import Layout from 'components/layout';
import BannerAboutUs from 'sections/banner-about-us';

export default function AboutUs() {
  return (
    <>
      <ThemeUIProvider theme={theme}>
        <StickyProvider>
          <Layout>
            <BannerAboutUs />
          </Layout>
        </StickyProvider>
      </ThemeUIProvider>
    </>
  );
}
