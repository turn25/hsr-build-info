import { useToggleCmdk } from '@/hooks';
import { cn } from '@/libs';
import { Button } from '@/ui/button';
import { Checkbox } from '@/ui/checkbox';
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
    formState: { errors, isDirty, isValid },
  } = useForm<SearchFormType>({
    resolver: zodResolver(formSchema),
    mode: 'all',
  });

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
    >
      <div className='flex flex-col space-y-5'>
        <label htmlFor={uidInputRest.name} className='sr-only'>
          Search Trailblazer Profile
        </label>

        <div className='flex items-center space-x-4'>
          <SearchInput
            hasError={hasError}
            {...uidInputRest}
            ref={(e) => {
              uidInputRef(e);
              inputRef.current = e;
            }}
          />

          <Button
            type='submit'
            variant={isValid ? 'default' : 'outline'}
            size='default'
          >
            Search
          </Button>
        </div>

        <div
          className={cn(
            'flex items-center space-x-2',
            hasError && 'text-red-500'
          )}
        >
          <Checkbox
            checked={isDirty && !hasError}
            className={hasError && 'bg-red-500'}
          />
          <p
            className={cn(
              isDirty && !hasError && 'line-through opacity-75',
              'text-current'
            )}
          >
            Need at least 9 characters
          </p>
        </div>
      </div>
    </form>
  );
};

export { SearchForm };
