import * as Renderer from './Renderer'
import * as Input from './Input'
import * as Interface from './Interface'
import * as Map from './Map'
import { Player } from './Player'
import { MAP_HEIGHT, MAP_WIDTH, TILE_PIXELS, PIXEL_HEIGHT, COLOR_HOVER, COLOR_SELECTED, COLOR_GRIDLINES, COLOR_BACKGROUND } from './Consts'
import { events } from './Events'

const players: Player[] = []

export function start() {
  // Add Event Listeners
  Renderer.addEventListener('mousemove', event => {
    events.emit('mousemove', event)
  })
  Renderer.addEventListener('click', event => {
    events.emit('click', event)
  })

  // Init Map
  Map.init()

  // Create Players
  const player = new Player()

  // Spawn Initial Entities
  player.entityManager.spawn()
  players.push(player)

  // Register Event Actions
  registerEventActions()
}

export function tick() {}

export function render() {
  // Draw Background
  Renderer.prepareRectPath(
    0,
    0,
    TILE_PIXELS * MAP_WIDTH,
    TILE_PIXELS * MAP_HEIGHT,
  )
  Renderer.drawPreparedPaths(null, COLOR_BACKGROUND)

  // Draw Grid Lines
  for (let y = 1; y < MAP_HEIGHT; y++) {
    const offset = y * TILE_PIXELS
    Renderer.prepareLine(0, offset, TILE_PIXELS * MAP_WIDTH, offset)
  }
  for (let x = 1; x < MAP_WIDTH; x++) {
    const offset = x * TILE_PIXELS
    Renderer.prepareLine(offset, 0, offset, TILE_PIXELS * MAP_HEIGHT)
  }
  Renderer.drawPreparedPaths(COLOR_GRIDLINES)

  // Draw Tokens
  players.forEach(player =>
    player.entityManager.forEach(entity => entity.draw()),
  )

  // Mouse Position
  const mouseTilePosition = Input.getMouseTilePosition()
  
  // Draw Hover Tile
  Renderer.prepareTile(mouseTilePosition.x, mouseTilePosition.y)
  Renderer.drawPreparedPaths(null, COLOR_HOVER)

  // Draw Selected Tile
  const selectedTile = Interface.getSelectedTile()
  if (selectedTile) {
    Renderer.prepareTile(selectedTile.x, selectedTile.y)
    Renderer.drawPreparedPaths(null, COLOR_SELECTED)
  }
}

function registerEventActions() {
  events.on('mousemove', event => {
    const canvasRect = Renderer.getCanvasRect()
    const x = event.clientX - canvasRect.left
    const y = PIXEL_HEIGHT - (event.clientY - canvasRect.top)
    Input.setMousePosition(x, y)
  })
  events.on('click', event => {
    const mouseTilePosition = Input.getMouseTilePosition()
    const mouseTile = Map.getTile(mouseTilePosition.x, mouseTilePosition.y)
    if (mouseTile) {
      Interface.selectTile(mouseTile)
    }
  })
}