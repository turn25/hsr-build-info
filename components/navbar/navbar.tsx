import { GithubIcon } from '@/components/icons';
import { Logo } from '@/components/logo';
import { config } from '@/config';
import { Button } from '@/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/tooltip';
import { MusicToggleButton } from './music-toggle';

const Navbar = () => {
  return (
    <header className='background sticky top-0 z-[1000] border-b'>
      <div className='base-container flex h-[65px] items-center justify-between'>
        <Logo />

        <TooltipProvider delayDuration={200}>
          <div className='flex space-x-2'>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  size='icon'
                  variant='plain'
                  className='max-lg:h-10 max-lg:w-10 max-lg:p-0'
                >
                  <a
                    href={config.github.githubRepoUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center'
                  >
                    <GithubIcon />
                    <span className='sr-only'>Github Repo</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>⭐ on Github if this helpful</TooltipContent>
            </Tooltip>

            <Tooltip defaultOpen={true}>
              <TooltipTrigger asChild>
                <MusicToggleButton />
              </TooltipTrigger>
              <TooltipContent>Toggle music</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </header>
  );
};

export { Navbar };
