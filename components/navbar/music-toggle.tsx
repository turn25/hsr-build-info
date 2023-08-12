import { useGlobalStore } from '@/store';
import { Button } from '@/ui/button';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/20/solid';
import {
  ComponentPropsWithoutRef,
  ComponentRef,
  forwardRef,
  useCallback,
} from 'react';
import { shallow } from 'zustand/shallow';

const MusicToggleButton = forwardRef<
  ComponentRef<typeof Button>,
  ComponentPropsWithoutRef<typeof Button>
>((props, ref) => {
  const { onClick, ...rest } = props;
  const [isMusicPlay, setIsMusicPlay] = useGlobalStore(
    (state) => [state.isMusicPlay, state.setIsMusicPlay],
    shallow
  );

  const toggleMusic = useCallback(
    (e) => {
      onClick(e);
      setIsMusicPlay(isMusicPlay ? false : true);
    },
    [setIsMusicPlay, isMusicPlay, onClick]
  );

  return (
    <Button ref={ref} size='icon' onClick={toggleMusic} {...rest}>
      {isMusicPlay ? (
        <>
          <SpeakerWaveIcon />
          <audio src='/audios/kurukuru.mp3' className='hidden' loop autoPlay />
        </>
      ) : (
        <SpeakerXMarkIcon />
      )}
      <span className='sr-only'>Toggle Play Kuru kuru kururin</span>
    </Button>
  );
});
MusicToggleButton.displayName = 'MusicToggleButton';

export { MusicToggleButton };
