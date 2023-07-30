import { SvgIconProps } from './types';

const StarIcon = (props: SvgIconProps) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z'></path>
      <path d='M5 3v4'></path>
      <path d='M19 17v4'></path>
      <path d='M3 5h4'></path>
      <path d='M17 19h4'></path>
    </svg>
  );
};

export { StarIcon };
