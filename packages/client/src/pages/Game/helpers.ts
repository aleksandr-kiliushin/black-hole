import { CANVAS_HEIGHT, CANVAS_WIDTH, MOVE_STEP } from './constants'
import { gameState } from './gameState'
import { TDraw } from './types'

const draw: TDraw = {
  space: ({ canvasContext }) => {
    canvasContext.fillStyle = 'gray'
    canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  },
  enemies: ({ canvasContext }) => {
    gameState.enemies.forEach(enemy => {
      canvasContext.fillStyle = 'lightgray'
      canvasContext.beginPath()
      canvasContext.arc(enemy.x, enemy.y, enemy.points, 0, 2 * Math.PI)
      canvasContext.fill()

      canvasContext.font = '16px Comic Sans MS'
      canvasContext.fillStyle = 'red'
      canvasContext.fillText(enemy.points.toString(), enemy.x, enemy.y)
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

    canvasContext.font = '16px Comic Sans MS'
    canvasContext.fillStyle = 'green'
    canvasContext.fillText(
      gameState.hole.points.toString(),
      gameState.hole.x,
      gameState.hole.y
    )
  },
}

const swallowEnemiesNearby = () => {
  const enemiesIndicesToSwallow: number[] = []

  gameState.enemies.forEach((enemy, enemyIndex) => {
    const distanceBetweenCentersByX = Math.abs(gameState.hole.x - enemy.x)
    const distanceBetweenCentersByY = Math.abs(gameState.hole.y - enemy.y)

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

export const requestAnimation = (canvasContext: CanvasRenderingContext2D) => {
  draw.space({ canvasContext })
  draw.enemies({ canvasContext })
  draw.hole({ canvasContext })
  requestAnimationFrame(() => requestAnimation(canvasContext))
}

export const handleKeyDown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowUp':
      gameState.hole.y -= MOVE_STEP
      break
    case 'ArrowDown':
      gameState.hole.y += MOVE_STEP
      break
    case 'ArrowLeft':
      gameState.hole.x -= MOVE_STEP
      break
    case 'ArrowRight':
      gameState.hole.x += MOVE_STEP
      break
    default:
      break
  }

  swallowEnemiesNearby()
}
