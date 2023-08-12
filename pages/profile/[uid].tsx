import { CharacterCard, CharacterCardWrapper } from '@/components/card';
import { GiscusComment } from '@/components/giscus';
import { HandShakeIcon } from '@/components/icons';
import { CharacterInfoScreen, ProfileInfoScreen } from '@/components/screens';
import { Button } from '@/components/ui/button';
import { useIsomorphicLayoutEffect } from '@/hooks';
import { createQueryString, removeQueryString } from '@/libs';
import { ApiService } from '@/services';
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  InferGetServerSidePropsType,
} from 'next';
import { NextSeo } from 'next-seo';
import Router, { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { UrlObject } from 'url';

const Page = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { data } = props;
  const { characters = [], player } = data;

  console.log(data);

  const [selectedCharacterSlot, setSelectedCharacterSlot] = useState(null);

  const router = useRouter();
  const { pathname, query } = router;

  useIsomorphicLayoutEffect(() => {
    setSelectedCharacterSlot(parseInt(query.char as string) ?? null);
  }, [query.char]);

  useEffect(() => {
    console.log('add id');
  }, []);

  const selectedCharacter = useMemo(() => {
    return characters?.find((char, index) => index === selectedCharacterSlot);
  }, [characters, selectedCharacterSlot]);

  const handleSelectCharacter = useCallback(
    (id: any) => {
      const url: UrlObject = {
        pathname: pathname,
        query: createQueryString({ query, name: 'char', value: id }),
      };
      Router.push(url, undefined, { shallow: true });
    },
    [pathname, query]
  );

  const handleNavigateBack = useCallback(() => {
    const url: UrlObject = {
      pathname: pathname,
      query: removeQueryString({ query: query, name: 'char' }),
    };

    Router.push(url, undefined, {
      shallow: true,
    });
  }, [pathname, query]);

  return (
    <>
      {/* SEO */}
      <NextSeo title={player.username + `'s Build`} />

      <div className='base-container flex flex-col space-y-20'>
        <div className='relative flex items-center justify-center'>
          {selectedCharacter && (
            <Button onClick={handleNavigateBack} className='absolute left-0'>
              Back
            </Button>
          )}
          <h1 className='text-4xl'>{player.username}&apos;s Build</h1>
        </div>

        {selectedCharacter ? (
          <>
            <CharacterInfoScreen
              character={selectedCharacter}
              onNavigateBack={handleNavigateBack}
            />

            <CharacterCardWrapper icon={<HandShakeIcon />} text={'Support'}>
              <div className='grid grid-cols-4 gap-6'>
                {characters?.map((char, index) => (
                  <CharacterCard
                    key={index}
                    src={char?.preview}
                    name={char?.name}
                    level={char?.level}
                    rarity={char?.rarity}
                    onSelect={() => handleSelectCharacter(index)}
                  />
                ))}
              </div>
            </CharacterCardWrapper>
          </>
        ) : (
          <ProfileInfoScreen
            player={player}
            characters={characters}
            onCharacterSelect={handleSelectCharacter}
          />
        )}

        <GiscusComment term='Profile Comment' />
      </div>
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const uid = context.query?.uid as string;
  const lang = context.query?.lang as string;

  const profileData = await ApiService.player.find({ uid: uid, lang });

  if (!profileData) {
    return { notFound: true } satisfies GetServerSidePropsResult<any>;
  }

  return {
    props: {
      data: profileData,
    },
  };
};

export default Page;
