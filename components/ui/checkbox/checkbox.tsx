import { cn } from '@/libs';
import { CheckIcon } from '@heroicons/react/20/solid';
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
        'relative h-6 w-6 rounded-lg bg-white p-1 text-white transition-colors data-checked:bg-primary-default',
        className
      )}
      {...rest}
    >
      <CheckboxPrimitives.Indicator className='text-current'>
        <CheckIcon className='stroke-current stroke-[0.25]' />
      </CheckboxPrimitives.Indicator>
    </CheckboxPrimitives.Root>
  );
});
Checkbox.displayName = 'Checkbox';

export { Checkbox };
