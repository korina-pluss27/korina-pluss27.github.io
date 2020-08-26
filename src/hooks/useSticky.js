import { useEffect, useState } from 'react';

const useSticky = () => {
  const [isSticky, setSticky] = useState(true);
  let previousScroll = window.scrollY;

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    previousScroll > currentScroll || currentScroll <= 60
      ? setSticky(true)
      : setSticky(false);
    previousScroll = currentScroll;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [handleScroll]);

  return { isSticky };
};

export default useSticky;
