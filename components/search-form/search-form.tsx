import { useAutosizeHeight, useToggleCmdk } from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import Router from 'next/router';
import { useCallback, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import SearchInput from './search-input';

const formSchema = z.object({
  uid: z.string().length(9, { message: 'Invalid UID, required 9 characters' }),
});

type SearchFormType = z.infer<typeof formSchema>;

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SearchFormType>({
    resolver: zodResolver(formSchema),
    mode: 'all',
  });

  const { cssVarSelector, elementRef, wrapperRef } = useAutosizeHeight();
  // input
  const { ref: uidInputRef, ...uidInputRest } = register('uid');
  const inputRef = useRef<HTMLInputElement>(null);
  const hasError = Boolean(errors.uid?.message);

  const onSubmit: SubmitHandler<SearchFormType> = useCallback((data, e) => {
    e.preventDefault();
    Router.push('/profile/' + data.uid);
  }, []);

  useToggleCmdk(() => {
    inputRef.current?.focus();
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSubmit(onSubmit);
        }
        if (e.key === 'Escape') {
          inputRef.current?.blur();
        }
      }}
      className='mx-auto rounded-2xl bg-background/25 shadow-medium backdrop-blur-lg'
    >
      <div
        ref={wrapperRef}
        style={{ height: cssVarSelector }}
        className='transition-[height]'
      >
        <div ref={elementRef} className='flex flex-col space-y-6 p-6'>
          <div className='flex flex-col space-y-4'>
            <label htmlFor={uidInputRest.name} className='sr-only'>
              Search Trailblazer Profile
            </label>

            <SearchInput
              {...uidInputRest}
              hasError={hasError}
              ref={(e) => {
                uidInputRef(e);
                inputRef.current = e;
              }}
            />

            {hasError && <p className='text-red-500'>{errors.uid.message}</p>}
          </div>
        </div>
      </div>
    </form>
  );
};

export { SearchForm };
