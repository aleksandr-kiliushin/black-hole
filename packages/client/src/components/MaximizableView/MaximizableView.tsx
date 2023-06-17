import { FC, useRef } from 'react';

import { useFullscreenStatus } from '@utils/useFullscreenStatus';

import { TMaximizableViewProps } from './types';

export const MaximizableView: FC<TMaximizableViewProps> = ({ children, backgroundColor }) => {
  const maximizableElement = useRef(null);

  let isFullscreen, setIsFullscreen;
  let errorMessage;
  try {
    const fullscreen = useFullscreenStatus(maximizableElement);
    setIsFullscreen = fullscreen.setFullscreen;
    isFullscreen = fullscreen.isFullscreen;
  } catch (e) {
    errorMessage = 'Полноэкранный режим не поддерживается';
    isFullscreen = false;
    setIsFullscreen = undefined;
  }

  const handleExitFullscreen = () => document.exitFullscreen();

  const fullscreenButton = isFullscreen ? (
    <button
      className="btn btn-primary my-6 text-2xl absolute right-12"
      onClick={handleExitFullscreen}
    >
      ⛶
    </button>
  ) : (
    <button className="btn btn-primary my-6 text-2xl" onClick={setIsFullscreen}>
      ⛶
    </button>
  );

  return (
    <div
      ref={maximizableElement}
      className={`flex flex-row ${
        isFullscreen ? 'flex-col-reverse content-end items-center pt-4 pl-4' : ''
      }`}
      style={{ backgroundColor: isFullscreen ? backgroundColor : '' }}
    >
      <div className="w-full overflow-auto">{children}</div>
      <div className="w-20 -ml-24 -mt-4">
        {errorMessage ? (
          <button
            onClick={() =>
              alert('Полноэкранный режим не поддерживается браузером, попробуйте другой браузер.')
            }
          >
            {errorMessage}
          </button>
        ) : (
          fullscreenButton
        )}
      </div>
    </div>
  );
};
