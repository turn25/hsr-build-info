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
          'inline-flex min-h-[40px] rounded-full border-2 border-white/50 bg-black/25 px-4 py-2 placeholder:opacity-70',
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
