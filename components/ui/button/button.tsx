import { cn } from '@/libs';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center space-x-2 rounded-xl text-sm font-medium transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50',
    '[&>svg]:h-5 [&>svg]:w-5',
  ],
  {
    variants: {
      variant: {
        default: 'text-secondary-foreground bg-secondary hover:bg-secondary/90',
        plain: 'bg-secondary/[.15] text-secondary hover:bg-secondary/30',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-secondary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10 rounded-xl',
        'icon-sm': 'h-6 w-6 rounded-full p-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
