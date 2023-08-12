import { ProfilePreviewScreen } from '@/components/screens/profile-preview';
import { SearchForm } from '@/components/search-form';

const HomePage = () => {
  return (
    <div className='base-container relative space-y-8'>
      <h1 className='px-4 text-center text-2xl lg:text-4xl'>
        Star Rail Profile Build Info
      </h1>

      <div className='space-y-8'>
        <SearchForm />

        <ProfilePreviewScreen />
      </div>

      {/* <GiscusComment /> */}
    </div>
  );
};

export default HomePage;
