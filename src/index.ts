import * as Renderer from './Renderer'
import * as Game from './Game'

const delay = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const renderLoop = async () => {
  while(true) {
    Renderer.clearBuffer()
    Game.render()
    await delay(10)
  }
}

const tickLoop = async () => {
  let tickNumber = 0
  while(true) {
    Game.tick()
    tickNumber++
    await delay(100)
  }
}

Game.start()

tickLoop()
renderLoop()
