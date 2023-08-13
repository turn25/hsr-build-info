import { ProfilePreviewCard } from './profile-preview-card';

const demo = {
  uid: '123123123',
  name: 'Test',
  description: 'Testttttttt',
  level: 60,
  avatar:
    'https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/avatar/8002.png',
  characterImg:
    'https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/image/character_preview/1204.png',
  chacterLevel: 70,
  updatedAt: new Date(),
};

const ProfilePreviewScreen = () => {
  const historyProfiles: Array<typeof demo> = new Array(5).fill(demo);

  return (
    <div className=''>
      <h2>History:</h2>
      <div className='mt-5 max-h-[calc(104px*3+20px*2)] space-y-5 overflow-y-scroll scroll-smooth pr-3 scrollbar scrollbar-thumb-[#c1c7d1] scrollbar-thumb-rounded-none scrollbar-w-1.5'>
        {historyProfiles.map((profile, index) => (
          <ProfilePreviewCard
            // key={profile?.uid || index}
            key={index}
            uid={profile?.uid}
            name={profile?.name}
            description={profile?.description}
            characterLevel={profile?.chacterLevel}
            level={profile?.level}
            avatarImg={profile?.avatar}
            characterImg={profile?.characterImg}
            slug={profile?.uid}
          />
        ))}
      </div>
    </div>
  );
};

export { ProfilePreviewScreen };
