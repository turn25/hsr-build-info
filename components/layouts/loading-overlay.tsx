import hertaDanceGif from '@/public/images/kurukuru.gif';
import { Portal } from '@radix-ui/react-portal';
import { useNProgress } from '@tanem/react-nprogress';
import Image from 'next/image';
import Router from 'next/router';
import { memo, useEffect, useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

const toBarPercent = (n: number) => (-1 + n) * 100;

const LoadingProgressBar = () => {
  const {
    animationDuration,
    isFinished,
    progress = 0,
  } = useNProgress({
    isAnimating: true,
  });

  return (
    <div>
      <div
        role='progressbar'
        className='fixed left-0 right-0 top-0 h-[6px] transform-gpu bg-white shadow-medium transition-[transform,opacity] ease-in-out'
        style={{
          opacity: isFinished ? 0 : 1,
          transform: `translate3d(${toBarPercent(progress) ?? 0}%, 0px, 0px)`,
          transitionDuration: animationDuration + 'ms',
        }}
      />

      <svg
        className='fixed right-4 top-4 h-5 w-5 animate-spin text-white'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'
        />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  );
};

const LoadingOverlayLayout = () => {
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
      <Portal
        id='herta-loading-overlay'
        className='fixed inset-0 z-[999999] flex items-center justify-center bg-black/25 backdrop-blur-md delay-300 animate-in fade-in fill-mode-both'
      >
        <LoadingProgressBar />

        <Image
          src={hertaDanceGif}
          alt='loading image'
          className='h-auto w-[25vw] max-w-[200px]'
        />
      </Portal>
    </RemoveScroll>
  );
};

const LoadingOverlay = memo(LoadingOverlayLayout);

export { LoadingOverlay };
