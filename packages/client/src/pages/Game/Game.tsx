import { FC, useEffect, useRef } from 'react';

import { Header } from '@components/Header';

import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants';
import { handleKeyDown, requestAnimation } from './helpers';

export const Game: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    const canvasContext = canvas.getContext('2d');
    if (canvasContext === null) return;

    requestAnimation(canvasContext);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Header />
      <canvas height={CANVAS_HEIGHT} ref={canvasRef} width={CANVAS_WIDTH} />
    </>
  );
};
