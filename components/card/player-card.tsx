import { StarIcon } from '@/components/icons';
import { cn } from '@/libs';
import AvatarFrameBG from '@/public/images/avatar-frame-bg.png';
import SkillIcon from '@/public/images/skill-icon.png';
import { Button } from '@/ui/button';
import { ClipboardDocumentIcon, PencilIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';

export interface PlayerCardLevelProps {
  text: string;
  level: number;
}

const PlayerCardLevel = (props: PlayerCardLevelProps) => {
  const { text, level } = props;

  return (
    <div className='relative select-none'>
      <Image
        src={SkillIcon}
        width={120}
        alt='skill icon bg'
        className='absolute z-0 h-full w-full scale-[130%] object-contain opacity-20'
      />
      <h3>{text}</h3>
      <p className='mt-4 text-xl text-black'>{level}</p>
    </div>
  );
};

export interface PlayerCardRecordProps {
  text: string;
  count: number;
}

const PlayerCardRecord = (props: PlayerCardRecordProps) => {
  const { text, count } = props;

  return (
    <div className='relative'>
      <div className='absolute inset-0 h-[80%] rounded-sm bg-neutral-light' />
      <div className='flex -translate-y-[40%] justify-between px-2'>
        <h3>{text}</h3>
        <p className='text-lg text-text-bold'>{count}</p>
      </div>
    </div>
  );
};

export interface PlayerAvatarFrameProps {
  src: string;
  alt: string;
  name: string;
}

const PlayerAvatarFrame = (props: PlayerAvatarFrameProps) => {
  const { src, alt, name } = props;
  const [username, setUsername] = useState(name);
  const [isShowUsernameInput, setIsShowUsernameInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (['Escape', 'Enter'].includes(e.key)) {
      setIsShowUsernameInput(false);
    }
  }, []);

  useEffect(() => {
    if (isShowUsernameInput && inputRef.current) {
      inputRef.current?.focus();
    }
  }, [isShowUsernameInput]);

  return (
    <div className='relative flex flex-col items-center'>
      <div className='absolute inset-0 -z-1 overflow-hidden rounded-ss-3xl bg-[#45423d]'>
        <Image
          src={AvatarFrameBG}
          alt='avatar frame bg'
          width={300}
          className='scale-[108%] object-cover opacity-75'
        />
      </div>
      <div className='w-[84px] -translate-y-[20%] overflow-hidden rounded-full border-[2px] border-[#98937f] bg-[#8b8279]'>
        <div className='aspect-h-1 aspect-w-1'>
          <img src={src} alt={alt} loading='lazy' className='object-cover' />
        </div>
      </div>
      <div className='relative mx-auto -mt-2 mb-4 h-10 w-full max-w-[70%] text-ellipsis text-center text-2xl text-contrast'>
        <input
          ref={inputRef}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
          onBlur={() => setIsShowUsernameInput(false)}
          type='text'
          maxLength={20}
          className={cn(
            'absolute left-0 top-0 w-full bg-transparent text-center',
            isShowUsernameInput ? 'opacity-1' : 'pointer-events-none opacity-0'
          )}
        />
        <div
          className={cn(
            'relative inline-flex h-full max-w-full',
            !isShowUsernameInput ? 'opacity-1' : 'pointer-events-none opacity-0'
          )}
        >
          <h2>{username}</h2>

          <button
            onClick={() => setIsShowUsernameInput((state) => !state)}
            className='absolute -right-2 top-1 z-10 translate-x-full rounded-full border-2 border-text-contrast/25 bg-black/25 p-1 backdrop-blur-lg'
          >
            <PencilIcon className='h-3 w-3' />
          </button>
        </div>
      </div>
    </div>
  );
};

export interface PlayerCardProps {
  src: string;
  alt: string;
  name: string;
  uid: string | number;
  trailblazerLevel: number;
  equilibriumLevel: number;
  birthDay: string;
  signature: string;
  charactersCount: number;
  achievementsCount: number;
  className?: string;
}

const PlayerCard = (props: PlayerCardProps) => {
  const {
    src,
    alt,
    name,
    uid,
    trailblazerLevel,
    equilibriumLevel,
    birthDay = 'N/A',
    signature,
    charactersCount,
    achievementsCount,
    className,
  } = props;

  return (
    <div
      className={cn(
        'relative flex w-full max-w-sm shrink-0 flex-col',
        className
      )}
    >
      <div className='absolute bottom-0 left-0 -z-1 h-[65%] w-[80%] -rotate-[5deg] bg-[#a5a29d]' />

      <PlayerAvatarFrame src={src} alt={alt} name={name} />

      {/* other */}
      <div className='space-y-4 bg-[#f2f2f2] px-4 pb-2 pt-6 text-text-default'>
        <h2 className='sr-only'>Player Info</h2>
        <div className='grid grid-cols-2 text-center'>
          <PlayerCardLevel text='Trailblazer Level' level={trailblazerLevel} />
          <PlayerCardLevel text='Equilibrium Level' level={equilibriumLevel} />
        </div>

        <div className='relative p-2 text-text-bold'>
          <div className='absolute inset-0 -translate-x-1 translate-y-1 rounded-sm bg-neutral-light' />
          <div className='absolute inset-0 rounded-sm border border-dotted border-text-bold opacity-25' />
          <textarea
            defaultValue={signature}
            className='relative min-h-[5ch] resize-none bg-transparent outline-none scrollbar-none'
          />
        </div>

        <h2 className='flex items-center text-xl text-primary-default'>
          <StarIcon className='mr-2 h-6 w-6 fill-current' />
          Trailblazer Records
        </h2>

        <PlayerCardRecord text='Characters Owned' count={charactersCount} />

        <PlayerCardRecord
          text='Achievements Unlocked'
          count={achievementsCount}
        />

        <div className='h-8' aria-hidden />

        <div className='flex items-center text-xl'>
          UID: {uid}
          <Button size='icon-sm' className='ml-2 bg-[#909090] text-[#fdfdfd]'>
            <ClipboardDocumentIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export { PlayerCard };
