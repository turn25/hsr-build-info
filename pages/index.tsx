import { FollowCard } from '@/components/card';
import { GithubIcon } from '@/components/icons';
import { HertaDance } from '@/components/image';
import { SearchForm } from '@/components/search-form';
import { config } from '@/config';

const HomePage = () => {
  return (
    <div className='base-container relative space-y-8'>
      <h1 className='px-4 text-center text-2xl lg:text-4xl'>
        Star Rail Profile Build Info
      </h1>

      <SearchForm />

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
    </div>
  );
};

export default HomePage;
