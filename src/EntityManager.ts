import { generateGuid } from './Utils'
import { Entity } from './Entity'
import { getTile } from './Map'
import { EntityDefinitionIndex } from './Consts'

export class EntityManager {
  private readonly entities: Map<string, Entity> = new Map()
  
  spawn(): boolean {
    const x = 5
    const y = 5

    const tile = getTile(x, y)
    if (tile.entity) {
      console.warn('Not spawning - Tile already contains entity')
      return false
    }

    console.log(tile.x, tile.y)

    const id = generateGuid(8)
    const entity = new Entity(id, EntityDefinitionIndex.RiflemanSquad, x, y)
    tile.entity = entity
    this.entities[id] = entity
  }

  forEach(f: (e: Entity) => void) {
    for (const p in this.entities) {
      f(this.entities[p])
    }
  }
  
  move(id: string, dx: number, dy: number) {
    const entity = this.entities[id]
    const x1 = entity.x + dx
    const y1 = entity.y + dy
    if (!entity.isInBounds(x1, y1)) {
      return
    }

    const currentTile = getTile(entity.x, entity.y)
    const targetTile = getTile(x1, y1)
    if (!targetTile || targetTile.entity) {
      return
    }

    currentTile.entity = null
    targetTile.entity = entity
    entity.x = targetTile.x
    entity.y = targetTile.y
  }
}
