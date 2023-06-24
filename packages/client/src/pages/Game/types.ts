export type TDraw = {
  space: (canvasContext: CanvasRenderingContext2D) => void;
  enemies: (canvasContext: CanvasRenderingContext2D) => void;
  hole: (canvasContext: CanvasRenderingContext2D) => void;
};

export type TGameEntity = {
  points: number;
  x: number;
  y: number;
  angle: number;
  rotationSpeed: number;
  rotationDirection: number;
};

type TGameBackgrounds = {
  backgroundX1: number;
  backgroundX2: number;
  backgroundX3: number;
};

type TEnemyProperties = {
  isVisible: boolean;
  radius: number;
};

export type TEnemy = TGameEntity & TEnemyProperties;

export type THole = TGameEntity & { maxSize: number };

export type TGameState = {
  hole: THole;
  background: TGameBackgrounds;
  enemies: TEnemy[];
  consumedEnemies: number;
  isGameInProcess: boolean;
};

export type TOnGameEnd = {
  gameEndTimeStamp: number;
  points: number;
  maxSize: number;
  consumedEnemies: number;
};
