import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  Color,
  GAME_ENTITY_FONT,
  HOLE_RADIUS,
  assets,
} from '../constants';
import { gameState } from '../state/gameState';
import { TDraw } from '../types';
import { generateEnemies } from './generateEnemies';

const draw: TDraw = {
  space: (ctx) => {
    if (ctx.fillStyle !== 'gray') {
      const img = new Image();
      img.src = assets.background;
      ctx.drawImage(img, gameState.background.backgroundX1, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.drawImage(img, gameState.background.backgroundX2, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
  },
  hole: (ctx) => {
    const { hole } = gameState;

    ctx.save();
    ctx.translate(hole.x, hole.y);
    hole.angle += hole.rotationSpeed * hole.rotationDirection;
    ctx.rotate(hole.angle);
    ctx.translate(-hole.x, -hole.y);

    const gradient = ctx.createRadialGradient(hole.x, hole.y, 0, hole.x, hole.y, HOLE_RADIUS);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
    gradient.addColorStop(0.3, 'rgba(10, 10, 10, 0.6)');
    gradient.addColorStop(0.7, 'rgba(30, 30, 30, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(hole.x, hole.y, HOLE_RADIUS, 0, 2 * Math.PI);
    ctx.fill();

    const img = new Image();
    img.src = hole.backgroundPath;
    ctx.drawImage(
      img,
      hole.x - HOLE_RADIUS,
      hole.y - HOLE_RADIUS,
      HOLE_RADIUS * 2,
      HOLE_RADIUS * 2
    );

    ctx.restore();

    const text = hole.points.toString();

    ctx.font = GAME_ENTITY_FONT;
    ctx.fillStyle = Color.HERO_POINTS_TEXT;

    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const textHeight = parseInt(ctx.font);

    const textX = hole.x - textWidth / 2;
    const textY = hole.y - textHeight / 2;

    const padding = 5;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(
      textX - padding,
      textY - padding,
      textWidth + 2 * padding,
      textHeight + 2 * padding
    );

    ctx.fillStyle = Color.HERO_POINTS_TEXT;
    ctx.fillText(text, textX, textY + textHeight);
  },
  enemies: (ctx) => {
    generateEnemies();

    gameState.enemies.forEach((enemy) => {
      if (!enemy.isVisible) {
        return;
      }

      ctx.save();
      ctx.translate(enemy.x, enemy.y);
      enemy.angle += enemy.rotationSpeed * enemy.rotationDirection;
      ctx.rotate(enemy.angle);
      ctx.translate(-enemy.x, -enemy.y);

      const gradient = ctx.createRadialGradient(enemy.x, enemy.y, 0, enemy.x, enemy.y, HOLE_RADIUS);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      gradient.addColorStop(0.3, 'rgba(10, 10, 10, 0.6)');
      gradient.addColorStop(0.7, 'rgba(30, 30, 30, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(enemy.x, enemy.y, enemy.radius, 0, 2 * Math.PI);
      ctx.fill();

      const img = new Image();
      img.src = enemy.backgroundPath;
      ctx.drawImage(
        img,
        enemy.x - enemy.radius,
        enemy.y - enemy.radius,
        enemy.radius * 2,
        enemy.radius * 2
      );

      ctx.restore();

      const text = enemy.points.toString();

      ctx.font = GAME_ENTITY_FONT;
      ctx.fillStyle = Color.ENEMY_POINTS_TEXT;

      const textMetrics = ctx.measureText(text);
      const textWidth = textMetrics.width;
      const textHeight = parseInt(ctx.font);

      const textX = enemy.x - textWidth / 2;
      const textY = enemy.y - textHeight / 2;

      const padding = 5;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(
        textX - padding,
        textY - padding,
        textWidth + 2 * padding,
        textHeight + 2 * padding
      );

      ctx.fillStyle = Color.ENEMY_POINTS_TEXT;
      ctx.fillText(text, textX, textY + textHeight);
    });
  },
};

export const requestAnimation = (canvasContext: CanvasRenderingContext2D) => {
  draw.space(canvasContext);
  draw.enemies(canvasContext);
  draw.hole(canvasContext);
  requestAnimationFrame(() => requestAnimation(canvasContext));
};
