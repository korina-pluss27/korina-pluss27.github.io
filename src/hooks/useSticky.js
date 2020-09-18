import { useEffect, useState } from 'react';

const useSticky = () => {
  const [isSticky, setSticky] = useState(true);

  useEffect(() => {
    let previousScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      previousScroll > currentScroll || currentScroll <= 60
        ? setSticky(true)
        : setSticky(false);
      previousScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return { isSticky };
};

export default useSticky;
