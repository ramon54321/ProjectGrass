import { Token } from './Token'
import { COLOR_DARK, COLOR_LIGHT, EntityDefinitionIndex } from './Consts'

interface EntityDefinition {
  readonly displayName: string
  readonly identifier: string
}

const entityDefinitions: { [key: number]: EntityDefinition } = {
  [EntityDefinitionIndex.RiflemanSquad]: {
    displayName: 'Rifleman Squad',
    identifier: 'RFL',
  },
}

export class Entity {
  readonly id: string
  x: number
  y: number
  readonly token: Token
  private readonly definitionIndex: EntityDefinitionIndex
  constructor(id: string, definitionIndex: EntityDefinitionIndex, x: number, y: number) {
    this.id = id
    this.definitionIndex = definitionIndex
    this.x = x
    this.y = y
    this.token = new Token(this.getDefinition().identifier, COLOR_DARK, COLOR_LIGHT)
  }
  getDefinition(): EntityDefinition {
    return entityDefinitions[this.definitionIndex]
  }
  draw() {
    this.token.draw(this.x, this.y)
  }
}
