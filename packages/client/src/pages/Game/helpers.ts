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

export const swallowEnemiesNearby = () => {
  const enemiesIndicesToSwallow: number[] = []

  gameState.enemies.forEach((enemy, enemyIndex) => {
    const distanceBetweenCentersByX = Math.abs(gameState.hole.x - enemy.x)
    const distanceBetweenCentersByY = Math.abs(gameState.hole.y - enemy.y)

    console.log('distanceBetweenCentersByX >>', distanceBetweenCentersByX)
    console.log('distanceBetweenCentersByY >>', distanceBetweenCentersByY)

    const distanceByX = Math.max(
      distanceBetweenCentersByX - gameState.hole.points - enemy.points,
      0
    )
    const distanceByY = Math.max(
      distanceBetweenCentersByY - gameState.hole.points - enemy.points,
      0
    )

    const haveOverlap = distanceByX === 0 && distanceByY === 0

    if (haveOverlap && enemy.points < gameState.hole.points) {
      gameState.hole.points += enemy.points
      enemiesIndicesToSwallow.push(enemyIndex)
    }

    if (haveOverlap && enemy.points >= gameState.hole.points) {
      gameState.hole.points -= enemy.points / 2
      enemiesIndicesToSwallow.push(enemyIndex)
    }
  })

  gameState.enemies = gameState.enemies.filter((enemy, enemyIndex) => {
    return !enemiesIndicesToSwallow.includes(enemyIndex)
  })
}
