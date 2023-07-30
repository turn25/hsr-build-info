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
    <div className='relative flex min-h-screen flex-col overflow-hidden'>
      <Image
        tabIndex={0}
        src={backgroundSrc}
        alt={'background'}
        placeholder='blur'
        width={120}
        priority
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-[1] scale-110 object-cover blur-xl'
      />
      <Navbar />
      <main id='main-content' className='mt-12 flex-1 py-8'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export { MainLayout };
