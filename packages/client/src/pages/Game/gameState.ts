import { CANVAS_WIDTH } from '@pages/Game/constants';

import { TGameState } from './types';

const initialState: TGameState = {
  hole: {
    points: 50,
    maxSize: 50,
    x: 100,
    y: 100,
    angle: 0,
    rotationDirection: Math.random() < 0.5 ? 1 : -1,
    rotationSpeed: Math.random() * 0.01,
  },
  background: {
    backgroundX1: -CANVAS_WIDTH,
    backgroundX2: 0,
    backgroundX3: CANVAS_WIDTH,
  },
  enemies: [],
  consumedEnemies: 0,
  isGameInProcess: false,
};

export let gameState: TGameState = JSON.parse(JSON.stringify(initialState));

export const resetGameState = () => {
  gameState = JSON.parse(JSON.stringify(initialState));
};
