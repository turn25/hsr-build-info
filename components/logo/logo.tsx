import { HertaDance } from '@/components/image';
import Router, { useRouter } from 'next/router';
import { MouseEvent, useCallback } from 'react';

const Logo = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      pathname === '/'
        ? window?.scrollTo({ top: 0, behavior: 'smooth' })
        : Router.push('/');
    },
    [pathname]
  );

  return (
    <a
      href='/'
      onClick={handleClick}
      className='inline-flex items-center rounded-xl'
    >
      <div className='relative mr-2 h-10 w-12 overflow-hidden'>
        <HertaDance
          alt='website logo'
          width={40}
          className='absolute -top-1 h-full w-full'
        />
      </div>
      SR Build Info
    </a>
  );
};

export { Logo };
