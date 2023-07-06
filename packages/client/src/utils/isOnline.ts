import { useEffect, useState } from 'react';

export const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsOnline(window.navigator.onLine);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { isOnline };
};
