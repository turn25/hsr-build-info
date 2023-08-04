import hertaDanceGif from '@/public/images/kurukuru.gif';
import { Portal } from '@radix-ui/react-portal';
import Image from 'next/image';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouterChange = (url, { shallow }) => {
      if (shallow) return;
      setIsLoading(true);
    };
    const handleRouterChangeComplete = () => {
      setIsLoading(false);
    };

    Router.events.on('routeChangeStart', handleRouterChange);
    Router.events.on('routeChangeComplete', handleRouterChangeComplete);
    Router.events.on('routeChangeError', handleRouterChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', handleRouterChange);
      Router.events.off('routeChangeComplete', handleRouterChangeComplete);
      Router.events.off('routeChangeError', handleRouterChangeComplete);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <RemoveScroll>
      <Portal className='fixed inset-0 z-[999999] flex items-center justify-center bg-black/25 backdrop-blur-md delay-300 animate-in fade-in fill-mode-both'>
        <Image
          src={hertaDanceGif}
          alt='loading image'
          className='h-auto w-[25vw] max-w-[200px]'
        />
      </Portal>
    </RemoveScroll>
  );
};

export { LoadingOverlay };
