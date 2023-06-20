import Enemy_sprite from '../../assets/images/enemy_1.png';
import Background from '../../assets/images/game_bg.jpg';
import Hole_sprite from '../../assets/images/hole.webp';

export const NAVBAR_HEIGHT = 80;
export const CANVAS_WIDTH = window.innerWidth;
export const CANVAS_HEIGHT = window.innerHeight - NAVBAR_HEIGHT;
export const MOVE_STEP = 10;
export const GAME_ENTITY_FONT = '16px Comic Sans MS';

export const assets = {
  hole: Hole_sprite,
  background: Background,
  enemy: Enemy_sprite,
};

export enum Color {
  ENEMY_POINTS_TEXT = 'red',
  HERO_POINTS_TEXT = 'white',
}
