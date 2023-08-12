import { cn } from '@/libs';
import { CheckIcon, LockClosedIcon } from '@heroicons/react/20/solid';
import * as CheckboxPrimitives from '@radix-ui/react-checkbox';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const Checkbox = forwardRef<
  ComponentRef<typeof CheckboxPrimitives.Root>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <CheckboxPrimitives.Root
      ref={ref}
      className={cn(
        'relative h-6 w-6 rounded-lg bg-white/50 p-1 text-white transition-colors data-checked:bg-primary-default',
        className
      )}
      {...rest}
    >
      <CheckboxPrimitives.Indicator
        forceMount
        className='[&>[data-check]]:data-checked:block [&>[data-uncheck]]:data-checked:hidden'
      >
        <CheckIcon data-check='' className='hidden stroke-current stroke-2' />
        <LockClosedIcon
          data-uncheck=''
          className='block stroke-current stroke-[0.25]'
        />
      </CheckboxPrimitives.Indicator>
    </CheckboxPrimitives.Root>
  );
});
Checkbox.displayName = 'Checkbox';

export { Checkbox };
