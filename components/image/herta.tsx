import { cn } from '@/libs';
import hertaDanceGif from '@/public/images/kurukuru.gif';
import hertaDanceImg from '@/public/images/kurukuru.png';
import { useGlobalStore } from '@/store';
import Image, { ImageProps } from 'next/image';
import { MouseEvent, useCallback, useState } from 'react';

export interface HertaDanceProps extends Omit<ImageProps, 'src' | 'alt'> {
  alt?: string;
}

const HertaDance = (props: HertaDanceProps) => {
  const {
    className,
    onMouseEnter: onMouseEnterCallback = () => {},
    onMouseLeave: onMouseLeaveCallback = () => {},
    width = 120,
    ...rest
  } = props;
  const [isHover, setIsHover] = useState(false);
  const isMusicPlay = useGlobalStore((state) => state.isMusicPlay);
  const shouldAnimate = isHover || isMusicPlay;

  const handleMouseEnter = useCallback(
    (e: MouseEvent<HTMLImageElement>) => {
      setIsHover(true);
      onMouseEnterCallback(e);
    },
    [onMouseEnterCallback]
  );
  const handleMouseLeave = useCallback(
    (e: MouseEvent<HTMLImageElement>) => {
      setIsHover(false);
      onMouseLeaveCallback(e);
    },
    [onMouseLeaveCallback]
  );

  const imageProps = {
    'data-animate': isMusicPlay,
    width: width,
    className: cn('object-cover h-auto w-[100px]', className),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ...rest,
  } as HertaDanceProps;

  return (
    <>
      {shouldAnimate ? (
        <Image
          {...imageProps}
          src={hertaDanceGif}
          alt='herta dance kuru kuru gif'
        />
      ) : (
        <Image
          {...imageProps}
          src={hertaDanceImg}
          alt='herta dance kuru kuru pic'
        />
      )}
    </>
  );
};

export { HertaDance };
