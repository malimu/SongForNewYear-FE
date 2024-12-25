import { useRef, useState, useEffect } from 'react';

export const useRotateOnClick = ({
  duration = '1s',
  easing = 'linear',
} = {}) => {
  const ref = useRef();
  const [isRotating, setIsRotating] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation((prev) => prev + 360); // 클릭 시 360도 증가
  };

  useEffect(() => {
    const { current } = ref;
    if (current && !isRotating) {
      setIsRotating(true);
      const element = current.style;
      element.transitionProperty = 'transform';
      element.transitionDuration = duration;
      element.transitionTimingFunction = easing;
      element.transform = `rotate(${rotation}deg)`;

      setTimeout(() => {
        setIsRotating(false);
      }, parseFloat(duration) * 1000); // 애니메이션 지속 시간 후 초기화
    }
  }, [rotation]);

  useEffect(() => {
    const { current } = ref;

    if (current) {
      current.addEventListener('click', handleClick);
    }

    return () => {
      if (current) {
        current.removeEventListener('click', handleClick);
      }
    };
  }, [isRotating]);

  return {
    ref,
    style: {
      transform: 'rotate(0deg)',
      transitionProperty: 'transform',
      transitionDuration: duration,
      transitionTimingFunction: easing,
    },
  };
};
