import localFont from 'next/font/local';

const SRFont = localFont({
  src: '/sr-font.ttf',
  display: 'swap',
  variable: '--sr-font',
});

export { SRFont };
