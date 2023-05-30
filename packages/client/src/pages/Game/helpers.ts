import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants'
import { gameState } from './gameState'

type TDraw = {
  space: (params: { canvasContext: CanvasRenderingContext2D }) => void
  enemies: (params: { canvasContext: CanvasRenderingContext2D }) => void
  hole: (params: { canvasContext: CanvasRenderingContext2D }) => void
}

export const draw: TDraw = {
  space: ({ canvasContext }) => {
    canvasContext.fillStyle = 'gray'
    canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  },
  enemies: ({ canvasContext }) => {
    canvasContext.fillStyle = 'lightgray'
    gameState.enemies.forEach(enemy => {
      canvasContext.beginPath()
      canvasContext.arc(enemy.x, enemy.y, enemy.points, 0, 2 * Math.PI)
      canvasContext.fill()
    })
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
