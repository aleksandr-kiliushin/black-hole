import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants'
import { gameState } from './gameState'

type TDraw = {
  space: (params: { canvasContext: CanvasRenderingContext2D }) => void
  hole: (params: { canvasContext: CanvasRenderingContext2D }) => void
  enemy: (params: { canvasContext: CanvasRenderingContext2D }) => void
}

export const draw: TDraw = {
  space: ({ canvasContext }) => {
    canvasContext.fillStyle = 'gray'
    canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  },
  enemy: ({ canvasContext }) => {
    canvasContext.fillStyle = 'lightgray'
    canvasContext.beginPath()
    canvasContext.arc(200, 200, 10, 0, 2 * Math.PI)
    canvasContext.fill()
  },
  hole: ({ canvasContext }) => {
    canvasContext.fillStyle = 'black'
    canvasContext.beginPath()
    canvasContext.arc(gameState.holeX, gameState.holeY, 50, 0, 2 * Math.PI)
    canvasContext.fill()
  },
}
