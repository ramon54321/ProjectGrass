// Map
export const MAP_WIDTH = 24
export const MAP_HEIGHT = 24
export const TILE_PIXELS = 32
export const PIXEL_WIDTH = TILE_PIXELS * MAP_WIDTH
export const PIXEL_HEIGHT = TILE_PIXELS * MAP_HEIGHT

// Colors
export const COLOR_LIGHT = getColor(0.95, 0.95, 0.95)
export const COLOR_DARK = getColor(0.2, 0.2, 0.2)
export const COLOR_BACKGROUND = getColor(0.7, 0.7, 0.7)
export const COLOR_GRIDLINES = getColor(0, 0, 0, 0.1)
export const COLOR_HOVER = getColor(0.85, 0.85, 0.85, 0.4)
export const COLOR_SELECTED = getColor(0.2, 0.2, 0.2, 0.4)

// Entities
export const enum EntityDefinitionIndex {
  RiflemanSquad,
}

// Utils
function getColor(r: number, g: number, b: number, a?: number): string {
  a = a ? a : 1.0
  return `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${a})`
}