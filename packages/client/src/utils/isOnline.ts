import { useEffect, useState } from 'react';

export const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(() => window.navigator.onLine);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('setIsOnline(window.navigator.onLine)', window.navigator.onLine);
      setIsOnline(window.navigator.onLine);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { isOnline };
};
