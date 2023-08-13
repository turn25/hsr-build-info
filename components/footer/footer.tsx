import { HertaDance } from '@/components/image';
import { config } from '@/config';
import { FollowCard } from '../card';
import { GithubIcon } from '../icons';

const Footer = () => {
  return (
    <footer className='background relative border-t'>
      <div className='absolute -top-[1px] left-0 right-0 z-50 -translate-y-full overflow-hidden'>
        <HertaDance className='-translate-x-full ease-linear repeat-infinite data-animate:duration-4s data-animate:animate-in data-animate:slide-in-from-right-[100vw] data-animate:lg:duration-12s' />
      </div>

      <div className='base-container space-y-2 py-4'>
        <div className='grid grid-cols-2 gap-4'>
          <FollowCard
            href={config.github.githubAuthorUrl}
            target='_blank'
            rel='noopener noreferrer'
            icon={<HertaDance />}
            iconText='turn25'
            description='Hello'
          />

          <FollowCard
            href={config.github.githubRepoUrl}
            target='_blank'
            rel='noopener noreferrer'
            icon={<GithubIcon />}
            iconText='Project Repo'
            description='To report bugs, request features, or contribute to this project...'
          />
        </div>

        <p className='text-center'>
          This is a fanmade website. Game assets are property of COGNOSPHERE
          PTE. LTD.
        </p>

        <p className='space-x-2 text-center'>
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
