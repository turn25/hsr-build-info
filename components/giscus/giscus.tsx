import { config } from '@/config';
import { useAutosizeHeight } from '@/hooks';
import { cn } from '@/libs';
import type { GiscusProps } from '@giscus/react';
import dynamic from 'next/dynamic';

const Giscus = dynamic(() => import('@giscus/react'), {
  ssr: false,
  loading: () => <p className='text-center'>Loading...</p>,
});

export interface GiscusCommentProps extends Partial<GiscusProps> {
  className?: string;
}

const GiscusComment = (props: GiscusCommentProps) => {
  const {
    className,
    repo = config.giscus.repo as GiscusCommentProps['repo'],
    repoId = config.giscus.repoId,
    category = config.giscus.category,
    categoryId = config.giscus.categoryId,
    mapping = 'specific',
    term: defaultTerm = 'Homepage',
    reactionsEnabled = '0',
    emitMetadata = '0',
    inputPosition = 'top',
    theme = 'preferred_color_scheme',
    lang = 'en',
    loading = 'lazy',
  } = props;

  const { elementRef, cssVarSelector, wrapperRef } = useAutosizeHeight();

  return (
    <div
      className={cn(
        'rounded-2xl bg-background/25 p-8 backdrop-blur-lg transition-[height]',
        className
      )}
    >
      <div
        ref={wrapperRef}
        className='transition-[height]'
        style={{ height: cssVarSelector }}
      >
        <div ref={elementRef}>
          <Giscus
            id='gc-comments'
            repo={repo}
            repoId={repoId}
            category={category}
            categoryId={categoryId}
            mapping={mapping}
            term={defaultTerm}
            reactionsEnabled={reactionsEnabled}
            emitMetadata={emitMetadata}
            inputPosition={inputPosition}
            theme={theme}
            lang={lang}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export { GiscusComment };
