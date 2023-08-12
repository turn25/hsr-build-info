import '@/styles/index.css';

import { MainLayout } from '@/components/layouts';
import { defaultSEOConfig } from '@/components/seo';
import { SRFont } from '@/libs';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const LoadingOverlay = dynamic(
  () => import('@/components/layouts').then((mod) => mod.LoadingOverlay),
  {
    ssr: false,
  }
);

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <style jsx global>{`
        :root {
          --sr-font: ${SRFont.style.fontFamily};
        }
      `}</style>

      <DefaultSeo {...defaultSEOConfig} />

      <ThemeProvider
        enableSystem={false}
        attribute='data-theme'
        defaultTheme='dark'
      >
        <LoadingOverlay />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
