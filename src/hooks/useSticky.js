import { useEffect, useState, useRef } from 'react';

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

  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll));
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [debounce, handleScroll]);

  return { isSticky };
};

export default useSticky;
