export type TDraw = {
  space: (params: { canvasContext: CanvasRenderingContext2D }) => void
  enemies: (params: { canvasContext: CanvasRenderingContext2D }) => void
  hole: (params: { canvasContext: CanvasRenderingContext2D }) => void
}

type TObjectState = {
  points: number
  x: number
  y: number
}

export type TGameState = {
  hole: TObjectState
  enemies: TObjectState[]
}
