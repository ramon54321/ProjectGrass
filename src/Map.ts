import { MAP_HEIGHT, MAP_WIDTH } from './Consts'
import { Tile } from './Tile'

const tiles: Tile[] = []

export function init() {
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      tiles[MAP_WIDTH * y + x] = new Tile(x, y)
    }
  }
}

export function getTile(x: number, y: number) {
  return tiles[y * MAP_WIDTH + x]
}

export function isInBounds(x: number, y: number) {
  return x < MAP_WIDTH && x >= 0 && y < MAP_HEIGHT && y >= 0
}
