import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import backgroundSrc from '@/public/images/bg.jpg';
import Image from 'next/image';
import { ReactNode } from 'react';

export interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  return (
    <div className='relative flex min-h-screen flex-col'>
      {/* RemoveScroll.className.fullWidth */}
      <div className='width-before-scroll-bar pointer-events-none fixed inset-0 -z-1 overflow-hidden opacity-80'>
        <Image
          tabIndex={0}
          src={backgroundSrc}
          alt={'background image'}
          placeholder='blur'
          width={120}
          quality={50}
          priority
          className='scale-110 object-cover blur-xl'
        />
      </div>
      <div className='background-overlay-pattern width-before-scroll-bar pointer-events-none fixed inset-0 -z-1 opacity-10 blur-sm' />

      <Navbar />
      <main id='main-content' className='flex-1 py-16'>
        <p className='base-container background mb-8 rounded-xl border p-4 text-center text-5xl'>
          WIP
        </p>

        {children}
      </main>
      <Footer />
    </div>
  );
};

export { MainLayout };
