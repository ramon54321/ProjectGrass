import { PIXEL_WIDTH, PIXEL_HEIGHT, TILE_PIXELS, MAP_HEIGHT } from './Consts'

const canvas: HTMLCanvasElement = document.getElementById(
  'maincanvas',
) as HTMLCanvasElement
canvas.style.border = 'solid black 1px'
canvas.style.width = PIXEL_WIDTH + 'px'
canvas.style.height = PIXEL_HEIGHT + 'px'
canvas.width = PIXEL_WIDTH * 2
canvas.height = PIXEL_HEIGHT * 2
const canvasRect = canvas.getBoundingClientRect()
const ctx = canvas.getContext('2d')
ctx.scale(2, 2)

export function getCanvasRect(): ClientRect {
  return canvasRect
}

export function addEventListener(event: string, callback: (event: any) => void) {
  canvas.addEventListener(event, (_event) => {
    callback(_event)
  })
}

export function tileToCenterPixel(tileX: number, tileY: number) {
  return [tileX * TILE_PIXELS + TILE_PIXELS / 2, PIXEL_HEIGHT - (tileY * TILE_PIXELS + TILE_PIXELS / 2)]
}

export function prepareLine(x0: number, y0: number, x1: number, y1: number) {
  ctx.moveTo(x0 + 0.5, y0 + 0.5)
  ctx.lineTo(x1 + 0.5, y1 + 0.5)
}

export function prepareCirclePath(x: number, y: number, radius: number) {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI)
  ctx.closePath()
}

export function prepareRectPath(
  x0: number,
  y0: number,
  x1: number,
  y1: number,
) {
  ctx.beginPath()
  ctx.rect(x0, y0, x1 - x0, y1 - y0)
  ctx.closePath()
}

export function prepareTile(x: number, y: number) {
  const x0 = x * TILE_PIXELS
  const y0 = (MAP_HEIGHT - y - 1) * TILE_PIXELS
  const x1 = x * TILE_PIXELS + TILE_PIXELS
  const y1 = (MAP_HEIGHT - y) * TILE_PIXELS
  prepareRectPath(x0, y0, x1, y1)
}

export function drawPreparedPaths(stroke?: string, fill?: string) {
  if (stroke) {
    ctx.strokeStyle = stroke
    ctx.stroke()
  }
  if (fill) {
    ctx.fillStyle = fill
    ctx.fill()
  }
}

export function drawText(x: number, y: number, text: string, fill?: string) {
  if (fill) {
    ctx.fillStyle = fill
  }
  ctx.textAlign = 'center'
  ctx.fillText(text, x, y)
}

export function clearBuffer() {
  ctx.clearRect(0, 0, PIXEL_WIDTH, PIXEL_HEIGHT)
}
