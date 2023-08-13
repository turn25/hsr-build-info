import { cn } from '@/libs';
import { Input } from '@/ui/input';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

// const isMac =
//   typeof window !== 'undefined'
//     ? navigator?.platform?.toLowerCase().includes('mac')
//     : false;

// const cmdkText = isMac ? '⌘K' : 'Ctrk+K';

export interface SearchInputProps
  extends ComponentPropsWithoutRef<typeof Input> {
  hasError?: boolean;
}

const SearchInput = forwardRef<ComponentRef<typeof Input>, SearchInputProps>(
  (props, ref) => {
    const { hasError, ...rest } = props;

    return (
      <div className='relative flex-1 cursor-pointer'>
        <Input
          ref={ref}
          className={cn(
            'z-0 w-full cursor-pointer pr-12',
            hasError && 'ring-red-500'
          )}
          placeholder='Enter Trailblazer UID To Search Profile!'
          autoComplete='false'
          autoCorrect='false'
          {...rest}
        />

        <kbd className='pointer-events-none absolute right-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-[#F2F2F2] px-1.5 py-1 text-xs uppercase text-text-bold'>
          ⌘+K
        </kbd>
      </div>
    );
  }
);
SearchInput.displayName = 'SearchInput';

export default SearchInput;
