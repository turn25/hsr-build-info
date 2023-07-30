import { useIsMounted } from '@/hooks';
import { cn } from '@/libs';
import * as TooltipPrimitives from '@radix-ui/react-tooltip';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

const TooltipProvider = TooltipPrimitives.Provider;
const TooltipTrigger = TooltipPrimitives.Trigger;
const Tooltip = TooltipPrimitives.Tooltip;

const TooltipContent = forwardRef<
  ComponentRef<typeof TooltipPrimitives.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitives.Content>
>((props, ref) => {
  const { className, children, ...rest } = props;
  const mounted = useIsMounted();

  if (!mounted) return null;

  return (
    <TooltipPrimitives.Portal>
      <TooltipPrimitives.Content
        ref={ref}
        className={cn(
          'rounded-xl bg-gray-500 p-3',
          'data-closed:animate-out data-closed:fade-out data-delayed-open:animate-in data-delayed-open:fade-in',
          'data-slide-bottom:slide-out-to-bottom data-slide-top:slide-in-from-top',
          className
        )}
        sideOffset={8}
        {...rest}
      >
        {children}
        <TooltipPrimitives.Arrow className='fill-gray-500' />
      </TooltipPrimitives.Content>
    </TooltipPrimitives.Portal>
  );
});
TooltipContent.displayName = TooltipPrimitives.Content.displayName;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
