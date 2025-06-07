import { useEffect } from 'react';

const useFadeInOnScroll = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight - 100) { // thoda offset de diya
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);
};

export default useFadeInOnScroll;
