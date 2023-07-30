import { HertaDance } from '@/components/image';
import { config } from '@/config';

const Footer = () => {
  return (
    <footer className='background relative border-t'>
      <HertaDance className='absolute left-0 top-0 z-20 -translate-x-full -translate-y-full ease-linear repeat-infinite data-animate:duration-4s data-animate:animate-in data-animate:slide-in-from-right-[100vw] data-animate:slide-in-from-top-full data-animate:lg:duration-12s' />

      <div className='base-container space-y-2 py-4 text-center'>
        <p>
          This is a fanmade website. Game assets are property of COGNOSPHERE
          PTE. LTD.
        </p>

        <p className='space-x-2'>
          <span>© {new Date().getFullYear()}</span>
          <span>Craft by</span>
          <a
            href={config.github.githubAuthorUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='underline underline-offset-4'
          >
            {config.github.author}
          </a>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
