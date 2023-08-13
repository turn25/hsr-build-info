import { Roboto } from 'next/font/google';

const SRFont = Roboto({
  subsets: ['latin', 'vietnamese'],
  weight: ['500', '700'],
  variable: '--sr-font',
});

export { SRFont };
