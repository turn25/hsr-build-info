import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { AnchorHTMLAttributes, ElementType, ReactNode } from 'react';

export interface FollowCardProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode;
  iconText: string;
  description: string;
  as?: ElementType;
}

const FollowCard = (props: FollowCardProps) => {
  const {
    as: Comp = 'a',
    icon = <></>,
    iconText,
    description,
    ...rest
  } = props;

  return (
    <Comp
      className='cursor-pointer select-none space-y-1 rounded-2xl bg-background/25 pb-6 pt-3 text-left shadow-medium backdrop-blur-lg transition-all hover:bg-black/40 active:scale-95'
      {...rest}
    >
      <div className='flex items-center space-x-2 px-3'>
        <span className='rounded-full p-2 [&>*]:h-8 [&>*]:w-8'>{icon}</span>
        <p className='inline-flex items-center text-lg'>
          {iconText} <ArrowTopRightOnSquareIcon className='ml-2 h-5 w-5' />
        </p>
      </div>
      <div className='px-6 opacity-75'>
        <p>{description}</p>
      </div>
    </Comp>
  );
};

export { FollowCard };
