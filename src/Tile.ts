import { Entity } from './Entity'

export class Tile {
  x: number
  y: number
  entity: Entity

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}