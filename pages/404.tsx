import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='base-container flex flex-col items-center space-y-6'>
      <h1>Not Found UID</h1>
      <Button asChild>
        <Link href='/'>Go To Homepage</Link>
      </Button>
    </div>
  );
};

export default NotFound;
