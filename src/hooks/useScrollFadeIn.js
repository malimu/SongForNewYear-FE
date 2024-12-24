import { useEffect, useRef } from 'react';

const useScrollFadeIn = ({
  threshold = 0.0,
  initialOffset = '50%',
  translate = '',
  delay = '0s',
} = {}) => {
  const ref = useRef();

  const handleScroll = ([entry]) => {
    const { current } = ref;

    if (entry.isIntersecting) {
      const element = current.style;
      if (element) {
        element.transitionProperty = 'opacity, transform';
        element.transitionDuration = '1.5s';
        element.transitionTimingFunction = 'cubic-bezier(0, 0, 1, 1)';
        element.transitionDelay = delay;
        element.opacity = 1;
        element.transform = `${translate} translate3d(0, 0, 0)`;
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold });
    const { current } = ref;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.disconnect();
    };
  }, [handleScroll, threshold]);

  return {
    ref: ref,
    style: {
      opacity: 0,
      transform: `${translate} translate3d(0, ${initialOffset}, 0)`,
      transitionDelay: delay,
    },
  };
};

export default useScrollFadeIn;
