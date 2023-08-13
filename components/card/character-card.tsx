import { cn } from '@/libs';
import MainCharacterBackground from '@/public/images/main-char-profile-bg.png';
import SubCharacterBackground from '@/public/images/sub-char-profile-bg.png';
import Image from 'next/image';
import { ReactNode } from 'react';

export interface CharacterCardProps {
  src: string;
  alt?: string;
  name: string;
  level: number;
  rarity: number;
  onSelect?: () => void;
}

const MainCharacterCard = (props: CharacterCardProps) => {
  const { src, alt, name, level, rarity, onSelect = () => {} } = props;

  return (
    <div
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          onSelect();
        }
      }}
      className='group relative cursor-pointer select-none rounded-sm bg-gradient-to-tr transition-all hover:grayscale-[20%]'
    >
      <div className='aspect-h-7 aspect-w-16' />

      <Image
        src={MainCharacterBackground}
        alt=''
        width={300}
        priority
        className={cn(
          'absolute inset-0 z-0 h-full w-full object-fill',
          rarity === 4 && '-hue-rotate-[110deg]'
        )}
      />

      <img
        src={src}
        alt={alt || name + 'build info'}
        className='mask-feather-image absolute right-0 top-1/2 w-[45%] -translate-y-1/2 object-cover transition-all duration-200 group-hover:scale-105 group-hover:brightness-110'
      />

      <div className='absolute bottom-0 left-0 right-0 z-0 flex bg-gradient-to-r from-black/60 to-transparent to-60% px-4 py-2'>
        <p className='relative text-lg before:absolute before:-left-2 before:-right-2 before:bottom-0 before:-z-1 before:mt-auto before:h-[60%] before:rounded-sm before:bg-black/20'>
          Lv{level}
        </p>
        <h3 className='mx-4 text-xl'>{name}</h3>
      </div>
    </div>
  );
};

const CharacterCard = (props: CharacterCardProps) => {
  const { src = '/', alt, name, level, rarity, onSelect = () => {} } = props;

  return (
    <div
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          onSelect();
        }
      }}
      className='group relative cursor-pointer select-none overflow-hidden rounded-sm rounded-b-md bg-gradient-to-tr transition-all hover:grayscale-[20%]'
    >
      <Image
        src={SubCharacterBackground}
        alt=''
        width={180}
        className={cn(
          'absolute inset-0 z-0 h-full w-full scale-105 object-cover',
          rarity === 4 && '-hue-rotate-[110deg]'
        )}
      />

      <div className='aspect-h-10 aspect-w-8 w-full transition-all duration-200 group-hover:scale-110 group-hover:brightness-110'>
        <img
          src={src}
          alt={alt || name + 'build info'}
          loading='lazy'
          className='scale-105 object-cover'
        />
      </div>
      <div className='absolute bottom-0 left-0 right-0 rounded-b-md border border-primary-light border-t-transparent bg-black/60 pt-1 text-center'>
        <h3 className='text-xl'>{name}</h3>
        <p className='text-lg'>Lv{level}</p>
      </div>
    </div>
  );
};

export interface CharacterCardWrapperProps {
  icon: ReactNode;
  children?: ReactNode;
  text: string;
}

const CharacterCardWrapper = (props: CharacterCardWrapperProps) => {
  const { icon, children, text } = props;

  return (
    <div className='overflow-hidden rounded-md bg-primary-dark/80'>
      <h2 className='flex items-center  bg-primary-dark px-3 py-2 text-xl text-primary-light'>
        <span className='mr-2 text-2xl'>{icon}</span>
        {text}
      </h2>
      {children}
    </div>
  );
};

export { CharacterCard, CharacterCardWrapper, MainCharacterCard };
