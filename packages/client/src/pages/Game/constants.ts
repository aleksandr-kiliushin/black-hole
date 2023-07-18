import { isServer } from '@utils/isServer';

import enemy1 from '../../assets/images/enemy/enemy-1.png';
import enemy2 from '../../assets/images/enemy/enemy-2.png';
import enemy3 from '../../assets/images/enemy/enemy-3.png';
import enemy4 from '../../assets/images/enemy/enemy-4.png';
import enemy5 from '../../assets/images/enemy/enemy-5.png';
import enemy6 from '../../assets/images/enemy/enemy-6.png';
import enemy7 from '../../assets/images/enemy/enemy-7.png';
import background from '../../assets/images/game-backgrounds/background.jpg';

export const NAVBAR_HEIGHT = 80;
export const CANVAS_WIDTH = isServer() ? 0 : window.innerWidth;
export const CANVAS_HEIGHT = isServer() ? 0 : window.innerHeight - NAVBAR_HEIGHT;
export const MAX_RATIO = 0.33;
export const MIN_RATIO = 0.2;
export const MAX_RADIUS = CANVAS_HEIGHT * MAX_RATIO;
export const MIN_RADIUS = CANVAS_HEIGHT * MIN_RATIO;
export const HOLE_RADIUS = CANVAS_WIDTH * 0.1;
export const MIN_NUMBER_OF_ENEMIES = 5;
export const MIN_RATIO_TO_HOLE = 0.4;
export const MAX_RATIO_TO_HOLE = 2.25;
export const HOLE_RADIUSES_PADDING = 4;

export const MOVE_STEP = 10;
export const GAME_ENTITY_FONT = '16px Comic Sans MS';

export const assets = {
  background,
  enemy: [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7],
};

export enum Color {
  ENEMY_POINTS_TEXT = 'yellow',
  HERO_POINTS_TEXT = 'white',
}
