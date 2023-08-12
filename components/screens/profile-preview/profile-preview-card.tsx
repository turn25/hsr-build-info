import { HandShakeIcon } from '@/components/icons';
import PreviewCharProfileBg from '@/public/images/preview-profile-char-bg.png';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

const HandShakeMixBg = () => {
  return (
    <>
      <div className='absolute left-0 top-1/2 z-10 inline-flex -translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#A07062] to-primary-light p-1.5 mix-blend-overlay'>
        <HandShakeIcon className='h-6 w-6' />
      </div>
      <div className='absolute left-0 top-1/2 z-20 inline-flex -translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#A07062] to-primary-light p-1.5 mix-blend-darken'>
        <HandShakeIcon className='h-6 w-6' />
      </div>
    </>
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
  searchDate: string | Date;
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
    searchDate,
  } = props;

  const title = `Search for ${name}'s Profile Info`;

  const formatDate = useMemo(() => {
    if (!searchDate) return;
    return dayjs(searchDate).format('YYYY/DD/MM');
  }, [searchDate]);

  return (
    <Link
      href={'/profile/' + uid}
      tabIndex={0}
      title={title}
      className='block cursor-pointer overflow-hidden rounded-se-4xl border-l-4 border-[#DDE1E4] bg-[#F5F5F5] shadow-small transition-all hover:brightness-105 focus-visible:brightness-105'
    >
      <div className='ml-3 flex rounded-s-full bg-[#DDE1E4]'>
        <div className='flex flex-1 overflow-hidden p-3'>
          {/* avatar */}
          <div className='relative w-20 shrink-0 rounded-full border border-dotted border-text-default/25 p-1'>
            <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-full bg-white'>
              <img
                width={80}
                height={80}
                alt='profile'
                src={avatarImg}
                className='object-cover'
              />
            </div>
            <span className='absolute bottom-0 right-0 inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white text-text-bold'>
              {level}
            </span>
          </div>

          {/* detail */}
          <div className='flex min-w-0 flex-col justify-between px-4'>
            <p className='truncate text-xl text-text-bold'>
              {name} (UID: {uid})
            </p>
            <div className='flex items-center text-text-default'>
              <ChatBubbleOvalLeftEllipsisIcon
                className='mr-1 h-5 w-5 shrink-0'
                style={{ transform: 'rotateY(180deg)' }}
              />
              <p className='truncate'>{description}</p>
            </div>
            <p className='text-[#35a328]'>Search at: {formatDate}</p>
          </div>
        </div>

        {/* char */}
        <div className='relative w-1/4 shrink-0 bg-primary-light pl-4'>
          <Image
            width={64}
            src={PreviewCharProfileBg}
            alt='bg'
            className='absolute inset-0 z-0 object-cover'
          />
          <img
            src={characterImg}
            alt=''
            className='absolute -top-1/4 right-0 z-1 w-4/5 object-cover'
          />
          <HandShakeMixBg />
        </div>

        {/* icon */}
        <div className='flex items-center justify-center px-12'>
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
      </div>
    </Link>
  );
};

export { ProfilePreviewCard };
