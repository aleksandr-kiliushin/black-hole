import { CANVAS_WIDTH } from '../constants';
import { gameState } from '../state/gameState';
import { TEnemy } from '../types';

export function moveEnemiesX(step: number) {
  gameState.enemies.forEach((enemy: TEnemy) => {
    enemy.x += step;
    switchEnemyVisibility(enemy);
  });
}

export function switchEnemyVisibility(enemy: TEnemy) {
  const isEnemyBeyondRightBorder = enemy.x >= CANVAS_WIDTH + enemy.points;
  const isEnemyBeyondLeftBorder = enemy.x <= -enemy.points;
  const shouldHide = isEnemyBeyondLeftBorder || isEnemyBeyondRightBorder;

  enemy.isVisible = !shouldHide;
}
