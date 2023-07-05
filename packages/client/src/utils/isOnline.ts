import { useEffect, useState } from 'react';

export const useIsOnline = () => {
  return { isOnline: true };

  // const [isOnline, setIsOnline] = useState(() => window.navigator.onLine);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIsOnline(window.navigator.onLine);
  //   }, 5000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // return { isOnline };
};
