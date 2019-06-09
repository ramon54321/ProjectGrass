import { TILE_PIXELS, MAP_HEIGHT } from './Consts'

interface MousePosition {
  x: number
  y: number
}

const mousePosition: MousePosition = {
  x: 0,
  y: 0,
}

export function setMousePosition(x: number, y: number) {
  mousePosition.x = x
  mousePosition.y = y
}

export function getMousePosition(): MousePosition {
  return {
    ...mousePosition
  }
}

export function getMouseTilePosition(): MousePosition {
  const mouseTileX = Math.floor(mousePosition.x / TILE_PIXELS)
  const mouseTileY = Math.floor(mousePosition.y / TILE_PIXELS)
  return {
    x: mouseTileX,
    y: mouseTileY,
  }
}
