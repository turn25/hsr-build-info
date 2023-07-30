import {
  CharacterCardProps,
  CharacterCards,
  CharacterDetail,
  PlayerCard,
} from '@/components/card';
import { GiscusComment } from '@/components/giscus';
import { useIsomorphicLayoutEffect } from '@/hooks';
import { cn, createQueryString, removeQueryString } from '@/libs';
import { ApiService } from '@/services';
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  InferGetServerSidePropsType,
} from 'next';
import { NextSeo } from 'next-seo';
import Router, { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import type { UrlObject } from 'url';

const Page = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { data } = props;
  const { characters = [], player } = data;

  const [selectedCharId, setSelectedCharId] = useState(null);

  const router = useRouter();
  const { pathname, query } = router;

  useIsomorphicLayoutEffect(() => {
    setSelectedCharId(query.charId ?? null);
  }, [query.charId]);

  const mappedCharacterCards = useMemo(() => {
    return characters.map(
      (char, index): CharacterCardProps => ({
        id: char.id as string,
        src: index === 0 ? char.preview : char.preview,
        alt: char.name + `'s avatar`,
        level: char.level,
        name: char.name,
      })
    );
  }, [characters]);

  const selectedChar = useMemo(() => {
    return characters?.find((char) => char.id === selectedCharId);
  }, [characters, selectedCharId]);

  const handleSelectItem = useCallback(
    (id: string) => {
      const url: UrlObject = {
        pathname: pathname,
        query: createQueryString({ query, name: 'charId', value: id }),
      };
      Router.push(url, undefined, { shallow: true });
    },
    [pathname, query]
  );

  const handleNavigateBack = useCallback(() => {
    const url: UrlObject = {
      pathname: pathname,
      query: removeQueryString({ query: query, name: 'charId' }),
    };

    Router.push(url, undefined, {
      shallow: true,
    });
  }, [pathname, query]);

  return (
    <>
      {/* SEO */}
      <NextSeo title={player.username + `'s Build`} />

      <div className='base-container flex max-w-screen-lg flex-col space-y-20'>
        <h1 className='text-center text-4xl'>{player.username}&apos;s Build</h1>

        {selectedChar ? (
          <>
            <CharacterDetail
              src={selectedChar.portrait}
              onNavigateBack={handleNavigateBack}
            />

            {selectedChar.attributes.map((stat, index) => (
              <p key={index}>
                {stat.name} {stat.value}
              </p>
            ))}
          </>
        ) : (
          <div className={cn('flex w-full', query?.charId && 'hidden')}>
            <div className='relative pl-6 pr-10'>
              <div className='absolute inset-0 -z-1 rounded-e-3xl rounded-s-lg bg-[#181914] shadow-large' />
              <PlayerCard
                className='scale-[108%]'
                src={player.avatar.icon}
                alt={player.username + `'s avatar: ` + player.avatar?.name}
                name={player.username}
                uid={player.uid}
                trailblazerLevel={player.level}
                equilibriumLevel={player.worldLevel}
                birthDay={null}
                signature={player.signature}
                charactersCount={player.charactersCount}
                achievementsCount={player.achievementCount}
              />
            </div>

            <div className='relative flex flex-1 items-center pl-12 pr-10'>
              <div className='absolute inset-0 -z-1 rounded-e-lg rounded-s-3xl bg-gradient-to-br from-[#282828] to-[#271f14] shadow-large' />

              <CharacterCards
                itemList={mappedCharacterCards}
                onItemSelect={handleSelectItem}
              />
            </div>
          </div>
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
