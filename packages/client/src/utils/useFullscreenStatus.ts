import React, { useState } from 'react';

import { TFsDocument, TFullScreenElementProp } from '@components/MaximizableView/types';

const fsDoc: TFsDocument = document;

export const useFullscreenStatus = (elRef: React.RefObject<HTMLElement>) => {
  const [isFullscreen, setIsFullscreen] = useState(
    fsDoc[getBrowserFullscreenElementProp()] !== null
  );

  const setFullscreen = () => {
    if (elRef.current === null) return;

    elRef.current
      .requestFullscreen()
      .then(() => {
        setIsFullscreen(fsDoc[getBrowserFullscreenElementProp()] !== null);
      })
      .catch(() => {
        setIsFullscreen(false);
      });
  };

  React.useLayoutEffect(() => {
    document.onfullscreenchange = () =>
      setIsFullscreen(fsDoc[getBrowserFullscreenElementProp()] !== null);

    return () => {
      document.onfullscreenchange = null;
    };
  });

  return { isFullscreen, setFullscreen };
};

function getBrowserFullscreenElementProp(): TFullScreenElementProp {
  if (typeof fsDoc.fullscreenElement !== 'undefined') {
    return 'fullscreenElement';
  } else if (typeof fsDoc.mozFullScreenElement !== 'undefined') {
    return 'mozFullScreenElement';
  } else if (typeof fsDoc.msFullscreenElement !== 'undefined') {
    return 'msFullscreenElement';
  } else if (typeof fsDoc.webkitFullscreenElement !== 'undefined') {
    return 'webkitFullscreenElement';
  } else {
    throw new Error('fullscreenElement не поддерживается вашим браузером');
  }
}
