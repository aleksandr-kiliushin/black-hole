import { FC, useEffect, useRef } from 'react'
import { Navbar } from '../../components/Navbar'
import { draw } from './draw'
import { CANVAS_HEIGHT, CANVAS_WIDTH, MOVE_STEP } from './constants'
import { gameState } from './gameState'

export const Game: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas === null) return
    const canvasContext = canvas.getContext('2d')
    if (canvasContext === null) return

    const animate = () => {
      draw.space({ canvasContext })
      draw.enemy({ canvasContext })
      draw.hole({ canvasContext })
      requestAnimationFrame(animate)
    }

    animate()
  }, [gameState.holeX, gameState.holeY])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          gameState.holeY -= MOVE_STEP
          break
        case 'ArrowDown':
          gameState.holeY += MOVE_STEP
          break
        case 'ArrowLeft':
          gameState.holeX -= MOVE_STEP
          break
        case 'ArrowRight':
          gameState.holeX += MOVE_STEP
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <Navbar />
      <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
    </>
  )
}