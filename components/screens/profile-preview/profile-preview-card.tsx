import { HandShakeIcon } from '@/components/icons';
import PreviewCharProfileBg from '@/public/images/preview-profile-char-bg.png';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

export interface ProfilePreviewAvatarProps {
  src: string;
  alt: string;
  level: number;
}

const ProfilePreviewAvatar = (props: ProfilePreviewAvatarProps) => {
  const { src, alt, level } = props;

  return (
    <div className='relative w-14 shrink-0 rounded-full border border-dotted border-text-default/25 p-1 lg:w-20'>
      <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-full bg-white'>
        <img
          width={80}
          height={80}
          alt={alt}
          src={src}
          className='object-cover'
        />
      </div>
      <span className='absolute bottom-0 right-0 inline-flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-white text-xs text-text-bold lg:h-6 lg:w-6 lg:text-base'>
        {level}
      </span>
    </div>
  );
};

export interface ProfilePreviewCharacterProps {
  level: number;
  src: string;
  alt: string;
}

const ProfilePreviewCharacter = (props: ProfilePreviewCharacterProps) => {
  const { alt, level, src } = props;

  return (
    <div className='relative hidden flex-1 shrink-0 bg-primary-light pl-4 lg:block'>
      <div className='gradient-overlay absolute bottom-0 left-0 right-0 z-1 px-2'>
        Lv {level}
      </div>

      <Image
        width={64}
        src={PreviewCharProfileBg}
        alt='bg'
        className='absolute inset-0 z-0 h-full w-full object-cover'
      />
      <img
        src={src}
        alt={alt}
        className='absolute -top-1/4 right-0 z-0 w-4/5 object-cover'
      />

      <div className='absolute left-0 top-1/2 z-10 inline-flex -translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#A8796A] to-[#AE7B64] p-1.5 mix-blend-darken before:h-6 before:w-6' />
      <div className='absolute left-0 top-1/2 z-20 inline-flex -translate-x-1/3 -translate-y-1/2 p-1.5'>
        <HandShakeIcon className='h-6 w-6' />
      </div>
    </div>
  );
};

export interface ProfilePreviewSearchIconProps {
  title: string;
}

const ProfilePreviewSearchIcon = (props: ProfilePreviewSearchIconProps) => {
  const { title } = props;

  return (
    <div className='flex items-center justify-center px-6 lg:px-12'>
      <button
        aria-label={title}
        title={title}
        tabIndex={-1}
        className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white p-1 text-text-bold shadow-small'
      >
        <MagnifyingGlassIcon className='h-8 w-8 rounded-full border border-black/10 stroke-current stroke-[0.25] p-1' />
        <span className='sr-only'>Search For UID Profile Info</span>
      </button>
    </div>
  );
};

export interface ProfilePreviewCardProps {
  uid: string;
  name: string;
  description: string;
  level: number;
  slug: string;
  characterImg: string;
  characterLevel: number;
  avatarImg: string;
}

const ProfilePreviewCard = (props: ProfilePreviewCardProps) => {
  const {
    uid,
    slug,
    avatarImg,
    characterImg,
    description,
    level,
    characterLevel,
    name,
  } = props;

  const title = `Search for ${name}'s Profile Info`;

  return (
    <Link
      href={'/profile/' + uid}
      tabIndex={0}
      title={title}
      className='block cursor-pointer overflow-hidden rounded-se-4xl border-l-4 border-[#DDE1E4]/95 bg-white/95 shadow-small transition-all hover:brightness-105 focus-visible:brightness-105'
    >
      <div className='ml-3 grid grid-cols-12 rounded-s-full bg-[#DDE1E4]/95'>
        <div className='col-span-10 flex items-center overflow-hidden p-3 md:col-span-8'>
          <ProfilePreviewAvatar
            src={avatarImg}
            alt={name + "'s Avatar"}
            level={level}
          />

          <div className='flex min-w-0 flex-col justify-between px-4 text-sm lg:text-base'>
            <p className='truncate text-base text-text-bold lg:text-xl'>
              {name}
            </p>
            <div className='flex items-center text-text-default'>
              <ChatBubbleOvalLeftEllipsisIcon className='rotate-y-180 mr-1 h-5 w-5 shrink-0' />
              <p className='truncate'>{description}</p>
            </div>
            <p className='truncate text-[#35a328]'>UID: {uid}</p>
          </div>
        </div>

        <div className='col-span-2 flex justify-end md:col-span-4'>
          <ProfilePreviewCharacter
            src={characterImg}
            level={characterLevel}
            alt={name + "'s Main Character Avatar"}
          />

          <ProfilePreviewSearchIcon title={title} />
        </div>
      </div>
    </Link>
  );
};

export { ProfilePreviewCard };
