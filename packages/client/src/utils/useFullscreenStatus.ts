import { RefObject, useCallback, useLayoutEffect, useState } from 'react';

const getDocumentFullscreenElement = () => {
  if ('mozFullScreenElement' in document) {
    return document.mozFullScreenElement;
  }

  if ('msFullscreenElement' in document) {
    return document.msFullscreenElement;
  }

  if ('webkitFullscreenElement' in document) {
    return document.webkitFullscreenElement;
  }

  if ('fullscreenElement' in document) {
    return document.fullscreenElement;
  }

  return undefined;
};

export const useFullscreenStatus = (ref: RefObject<HTMLElement>) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const setFullscreen = useCallback(() => {
    if (ref.current === null) return;

    ref.current
      .requestFullscreen()
      .then(() => {
        setIsFullscreen(getDocumentFullscreenElement() !== null);
      })
      .catch(() => {
        setIsFullscreen(false);
      });
  }, [ref]);

  useLayoutEffect(() => {
    document.onfullscreenchange = () => {
      setIsFullscreen(getDocumentFullscreenElement() !== null);
    };

    return () => {
      document.onfullscreenchange = null;
    };
  });

  return {
    isFullscreen,
    setFullscreen,
    isFullscreenApiSupported: getDocumentFullscreenElement() !== undefined,
  };
};
