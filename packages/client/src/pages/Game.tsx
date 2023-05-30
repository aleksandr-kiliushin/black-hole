import { FC, useEffect, useRef } from 'react'
import { Navbar } from '../components/Navbar'

const NAVBAR_HEIGHT = 36
const CANVAS_WIDTH = window.innerWidth
const CANVAS_HEIGHT = window.innerHeight - NAVBAR_HEIGHT
const MOVE_STEP = 10

let holeX = 100
let holeY = 100

export const Game: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas === null) return
    const context = canvas.getContext('2d')
    if (context === null) return

    const animate = () => {
      context.fillStyle = 'gray'
      context.fillRect(0, 0, canvas.width, canvas.height)

      context.fillStyle = 'black'
      context.beginPath()
      context.arc(holeX, holeY, 50, 0, 2 * Math.PI)
      context.fill()
      requestAnimationFrame(animate)
    }

    animate()
  }, [holeX, holeY])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          holeY -= MOVE_STEP
          break
        case 'ArrowDown':
          holeY += MOVE_STEP
          break
        case 'ArrowLeft':
          holeX -= MOVE_STEP
          break
        case 'ArrowRight':
          holeX += MOVE_STEP
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
