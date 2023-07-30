import { useEffect } from 'react';
import { useCallbackRef } from './use-callback-ref';

const useToggleCmdk = (
  callback: () => void,
  options = {
    disabled: false,
  }
) => {
  const handleCallback = useCallbackRef(callback);

  useEffect(() => {
    if (options.disabled) return;

    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        // savedCallback.current();
        handleCallback();
      }
    };

    document.addEventListener('keydown', down);

    return () => {
      document.removeEventListener('keydown', down);
    };
  }, [options.disabled, handleCallback]);
};

export { useToggleCmdk };
