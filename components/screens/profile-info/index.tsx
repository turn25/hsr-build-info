import {
  CharacterCard,
  CharacterCardWrapper,
  MainCharacterCard,
} from '@/components/card';
import { HandShakeIcon, StarIcon } from '@/components/icons';
import { CharacterVM, PlayerVM } from '@/services/vms';
import { PlayerCard } from './player-card';

export interface ProfileInfoScreenProps {
  player: PlayerVM;
  characters: CharacterVM[];
  onCharacterSelect: (id: any) => void;
}

const ProfileInfoScreen = (props: ProfileInfoScreenProps) => {
  const { player, characters = [], onCharacterSelect = () => {} } = props;

  const [firstCharacter, ...otherCharacters] = characters;

  return (
    <div className='grid grid-cols-9'>
      <div className='relative col-span-4 flex items-center pl-6 pr-10'>
        <div className='absolute inset-0 -z-1 rounded-e-3xl rounded-s-lg bg-[#181914] shadow-large' />

        <PlayerCard
          className='scale-110'
          // className='scale-[108%]'
          src={player.avatar.icon}
          alt={player.username + `'s avatar: ` + player.avatar?.name}
          name={player.username}
          uid={player.uid}
          trailblazerLevel={player.level}
          equilibriumLevel={player.worldLevel}
          birthDay={null}
          signature={player.signature}
          charactersCount={player.charactersCount}
          achievementsCount={player.achievementCount}
        />
      </div>

      <div className='relative col-span-5 flex items-center pl-12 pr-10'>
        <div className='absolute inset-0 -z-1 rounded-e-lg rounded-s-3xl bg-gradient-to-br from-[#282828] to-[#271f14] shadow-large' />

        <div className='flex-1 space-y-5 py-5'>
          <CharacterCardWrapper
            text='Support Character'
            icon={<HandShakeIcon />}
          >
            <MainCharacterCard
              onSelect={() => onCharacterSelect(0)}
              src={firstCharacter?.preview}
              name={firstCharacter?.name}
              level={firstCharacter?.level}
              rarity={firstCharacter?.rarity}
            />
          </CharacterCardWrapper>

          {otherCharacters?.length > 1 && (
            <CharacterCardWrapper
              text='Starfaring Companions'
              icon={<StarIcon />}
            >
              <div className='grid grid-cols-3 gap-2'>
                {otherCharacters.map((char, index) => {
                  return (
                    <CharacterCard
                      key={index}
                      onSelect={() => onCharacterSelect(index)}
                      src={char?.preview}
                      name={char?.name}
                      level={char?.level}
                      rarity={char?.rarity}
                    />
                  );
                })}
              </div>
            </CharacterCardWrapper>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProfileInfoScreen };
