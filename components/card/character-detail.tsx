import { Button } from '../ui/button';

const CharacterDetail = (props) => {
  const { src, alt, onNavigateBack } = props;

  return (
    <div className='relative flex w-full'>
      <div className='absolute left-0 top-0 -translate-y-full'>
        <Button onClick={onNavigateBack}>Back</Button>
      </div>
      <div className='aspect-h-16 aspect-w-9 basis-[40%] rounded-2xl border-2'>
        <img src={src} alt={alt} className='object-cover' />
      </div>
      <div>aaa</div>
    </div>
  );
};

export { CharacterDetail };
