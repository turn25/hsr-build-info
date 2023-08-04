import { useEffect, useState } from 'react';

const useAutosizeHeight = () => {
  const cssAttr = '--list-height';
  const [wrapperRef, setWrapperRef] = useState<HTMLElement>(null);
  const [elementRef, setElementRef] = useState<HTMLElement>(null);

  useEffect(() => {
    if (!wrapperRef || !elementRef) return;

    if (
      typeof window === 'undefined' ||
      typeof window.ResizeObserver === 'undefined'
    )
      return;

    let animationFrame;
    const el = elementRef;
    const wrapper = wrapperRef;

    const observer = new ResizeObserver(() => {
      animationFrame = requestAnimationFrame(() => {
        const height = el.offsetHeight;
        wrapper.style.setProperty(`--list-height`, height.toFixed(1) + 'px');
      });
    });

    observer.observe(el);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.unobserve(el);
    };
  }, [wrapperRef, elementRef]);

  return {
    wrapperRef: setWrapperRef,
    elementRef: setElementRef,
    cssVarSelector: `var(${cssAttr})`,
  };
};

export { useAutosizeHeight };
