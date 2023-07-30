import { HandShakeIcon, StarIcon } from '@/components/icons';

export interface CharacterCardProps {
  id: string;
  src: string;
  alt: string;
  name: string;
  level: number;
  onSelect?: () => void;
}

const MainCharacterCard = (props: CharacterCardProps) => {
  const { src, alt, name, level = '---', onSelect = () => {} } = props;

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
      className='group relative cursor-pointer select-none bg-gradient-to-tr from-[#bc7a60] to-[#c5a977] transition-all hover:grayscale-[20%]'
    >
      <div className='aspect-h-6 aspect-w-16' />

      <img
        src={src}
        alt={alt}
        loading='eager'
        className='s-translate-x-1/2 absolute right-0 top-1/2 w-[45%] -translate-y-1/2 object-cover transition-all duration-200 group-hover:scale-105 group-hover:brightness-110'
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
  const {
    src = '/',
    alt = '',
    name = '--',
    level = '--',
    onSelect = () => {},
  } = props;

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
      className='group relative cursor-pointer select-none overflow-hidden rounded-b-md bg-gradient-to-tr from-[#e2c38c] to-[#dd9a91] transition-all hover:grayscale-[20%]'
    >
      <div className='aspect-h-10 aspect-w-8 w-full transition-all duration-200 group-hover:scale-110 group-hover:brightness-110'>
        <img
          src={src}
          alt={alt}
          loading='lazy'
          className='top-3 scale-105 object-cover'
        />
      </div>
      <div className='absolute bottom-0 left-0 right-0 bg-black/60 pt-1 text-center'>
        <h3 className='text-xl'>{name}</h3>
        <p className='text-lg'>Lv{level}</p>
      </div>
    </div>
  );
};

export interface CharacterCardsProps {
  itemList: CharacterCardProps[];
  onItemSelect: (id: string) => void;
}

const CharacterCards = (props: CharacterCardsProps) => {
  const { itemList = [], onItemSelect = () => {} } = props;

  const firstItem = itemList?.[0];

  if (itemList?.length === 0) return null;

  return (
    <div className='flex-1 space-y-5'>
      <div className='overflow-hidden rounded-md'>
        <h2 className='flex items-center bg-primary-dark px-3 py-2 text-xl text-primary-light'>
          <HandShakeIcon className='mr-2 h-6 w-6' />
          Support Character
        </h2>
        <MainCharacterCard
          onSelect={() => onItemSelect(firstItem.id)}
          id={firstItem?.id}
          src={firstItem?.src}
          alt={firstItem?.alt}
          name={firstItem?.name}
          level={firstItem?.level}
        />
      </div>

      {itemList?.length > 1 && (
        <div className='overflow-hidden rounded-md'>
          <h2 className='flex items-center bg-primary-dark px-3 py-2 text-xl text-primary-light'>
            <StarIcon className='mr-2 h-6 w-6' />
            Starfaring Companions
          </h2>
          <div className='grid grid-cols-3 gap-2'>
            {itemList.map((char, index) => {
              if (index === 0) return null;

              return (
                <CharacterCard
                  key={index}
                  onSelect={() => onItemSelect(char.id)}
                  id={char.id}
                  src={char.src}
                  alt={char.alt}
                  name={char.name}
                  level={char.level}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export { CharacterCard, CharacterCards, MainCharacterCard };
