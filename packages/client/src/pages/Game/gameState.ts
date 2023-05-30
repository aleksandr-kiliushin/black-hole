type TObjectState = {
  points: number
  x: number
  y: number
}

type TGameState = {
  hole: TObjectState
  enemies: TObjectState[]
}

export const gameState: TGameState = {
  hole: {
    points: 50,
    x: 100,
    y: 100,
  },
  enemies: [],
}
