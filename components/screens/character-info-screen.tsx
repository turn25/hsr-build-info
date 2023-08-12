import { CharacterVM } from '@/services/vms';

export interface CharacterInfoScreenProps {
  character: CharacterVM;
  onNavigateBack: () => void;
}

const Progress = (props) => {
  const { value } = props;

  return (
    <div
      className='flex'
      role='progressbar'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-valuetext={value + '%'}
    >
      <div className='relative flex h-6 w-56 overflow-hidden rounded-md bg-violet-500'>
        <div
          className=' w-full bg-blue-500 transition-all'
          // className=' bg-blue-500 transition-all animate-in slide-in-from-left fill-mode-both'
          style={{ transform: `translateX(${-1 * (100 - value)}%)` }}
        />
      </div>
    </div>
  );
};

const CharacterInfoScreen = (props: CharacterInfoScreenProps) => {
  const { character, onNavigateBack = () => {} } = props;

  return (
    <div className='overflow-hidden'>
      <div className='aspect-h-16 aspect-w-9 w-1/3 rounded-xl border-2'>
        <img src={character.portrait} alt='' className='object-cover' />
      </div>
      {character.name}
      <div className='space-y-2'>
        {character.attributes.map((attr, index) => {
          const parseValue = parseFloat(attr.value.toString());
          const parseTotalValue = parseFloat(attr.total.toString());
          const percentage = +((parseValue / parseTotalValue) * 100).toFixed(0);

          return (
            <div key={index} className='flex'>
              <Progress value={percentage} />
              {attr.name} {percentage}%
            </div>
          );
        })}
      </div>
      {/* <pre>{JSON.stringify(character, undefined, 2)}</pre> */}
    </div>
  );
};

export { CharacterInfoScreen };
