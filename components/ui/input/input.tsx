import { cn } from '@/libs';
import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'input';

    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex min-h-[48px] rounded-xl bg-background/75 px-4 py-2 placeholder:opacity-75',
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
