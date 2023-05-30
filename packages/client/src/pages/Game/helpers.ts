import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants'
import { gameState } from './gameState'

type TDraw = {
  space: (params: { canvasContext: CanvasRenderingContext2D }) => void
  hole: (params: { canvasContext: CanvasRenderingContext2D }) => void
  enemy: (params: {
    canvasContext: CanvasRenderingContext2D
    x: number
    y: number
    points: number
  }) => void
}

export const draw: TDraw = {
  space: ({ canvasContext }) => {
    canvasContext.fillStyle = 'gray'
    canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  },
  enemy: ({ canvasContext, x, y, points }) => {
    canvasContext.fillStyle = 'lightgray'
    canvasContext.beginPath()
    canvasContext.arc(x, y, points, 0, 2 * Math.PI)
    canvasContext.fill()
  },
  hole: ({ canvasContext }) => {
    canvasContext.fillStyle = 'black'
    canvasContext.beginPath()
    canvasContext.arc(
      gameState.hole.x,
      gameState.hole.y,
      gameState.hole.points,
      0,
      2 * Math.PI
    )
    canvasContext.fill()
  },
}
