import { Tile } from "./Tile"

const userInterface: HTMLDivElement = document.getElementById('maininterface') as HTMLDivElement
//TODO: Draw only on change of selected and hover
let selectedTile: Tile | undefined
export function getSelectedTile() {
  return selectedTile
}
export function selectTile(tile: Tile) {
  selectedTile = tile
  draw()
}
export function deselectTile() {
  selectedTile = undefined
  draw()
}

export function draw() {
  console.log('Drawing interface')
  const selected = selectedTile ? `<p>Selected: ${selectedTile.x},${selectedTile.y}</p>` : ``
  const entity = selectedTile.entity ? `<p>${selectedTile.entity.getDefinition().displayName}</p>` : ``
  userInterface.innerHTML = `
    ${selected}
    ${entity}
  `
}