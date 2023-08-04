import { cn } from '@/libs';
import { Input } from '@/ui/input';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import {
  ComponentPropsWithoutRef,
  ComponentRef,
  forwardRef,
  useState,
} from 'react';

const isMac =
  typeof window !== 'undefined'
    ? navigator?.platform?.toLowerCase().includes('mac')
    : false;

const cmdkText = isMac ? '⌘K' : 'Ctrk+K';

export interface SearchInputProps
  extends ComponentPropsWithoutRef<typeof Input> {
  hasError?: boolean;
}

const SearchInput = forwardRef<ComponentRef<typeof Input>, SearchInputProps>(
  (props, ref) => {
    const { hasError, ...rest } = props;
    const [isFocus, setIsFocus] = useState(false);

    return (
      <div className='relative cursor-pointer'>
        <MagnifyingGlassIcon className='absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 opacity-50' />

        <Input
          ref={ref}
          className='z-0 w-full cursor-pointer pl-10 pr-12'
          placeholder='Enter UID, eg: 811111111'
          autoComplete='false'
          autoCorrect='false'
          onFocusCapture={() => {
            setIsFocus(true);
          }}
          onBlurCapture={() => {
            setIsFocus(false);
          }}
          {...rest}
        />

        <button type='submit'>
          <kbd
            className={cn(
              'absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-lg bg-white px-1.5 py-1 text-sm uppercase text-text-bold shadow-small transition-all hover:bg-white/90 active:scale-95',
              !isFocus && 'pointer-events-none',
              !hasError && 'pointer-events-auto'
            )}
          >
            {isFocus ? (hasError ? 'ESC' : 'Enter') : cmdkText}
          </kbd>
        </button>
      </div>
    );
  }
);
SearchInput.displayName = 'SearchInput';

export default SearchInput;
