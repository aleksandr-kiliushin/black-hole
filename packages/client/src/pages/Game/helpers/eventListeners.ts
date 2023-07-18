import { MOVE_STEP } from '../constants';
import { TOnGameEnd } from '../types';
import { moveEnemiesX } from './enemiesHandlers';
import { moveBackgroundX, moveHoleX, moveHoleY } from './holeHandlers';
import { swallowEnemiesNearby } from './swallowEnemy';

export const handleKeyDown = (event: KeyboardEvent, onGameOver: (results: TOnGameEnd) => void) => {
  switch (event.key) {
    case 'ArrowUp':
      moveHoleY(-MOVE_STEP);
      break;
    case 'ArrowDown':
      moveHoleY(MOVE_STEP);
      break;
    case 'ArrowLeft':
      moveEnemiesX(MOVE_STEP);
      moveHoleX(-MOVE_STEP);
      moveBackgroundX(-MOVE_STEP);
      break;
    case 'ArrowRight':
      moveEnemiesX(-MOVE_STEP);
      moveHoleX(MOVE_STEP);
      moveBackgroundX(MOVE_STEP);
      break;
    default:
      break;
  }

  swallowEnemiesNearby(onGameOver);
};
