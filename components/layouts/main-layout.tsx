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
      <div className='width-before-scroll-bar fixed inset-0 -z-[1] overflow-hidden opacity-80'>
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
      <main id='main-content' className='flex-1 py-16'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export { MainLayout };
