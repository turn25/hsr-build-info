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
      <div className='absolute inset-0 -z-[1] overflow-hidden '>
        <Image
          tabIndex={0}
          src={backgroundSrc}
          alt={'background image'}
          placeholder='blur'
          width={100}
          priority
          className='pointer-events-none scale-110 object-cover blur-xl'
        />
      </div>
      <Navbar />
      <main id='main-content' className='mt-12 flex-1 py-8'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export { MainLayout };
