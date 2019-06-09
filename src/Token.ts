import * as Renderer from './Renderer'

export class Token {
  text: string
  styleToken: string
  styleText: string

  constructor(text: string, styleToken: string, styleText: string) {
    this.text = text
    this.styleToken = styleToken
    this.styleText = styleText
  }

  draw(x: number, y: number) {
    const pixel = Renderer.tileToCenterPixel(x, y)
    Renderer.prepareCirclePath(pixel[0], pixel[1], 12)
    Renderer.drawPreparedPaths(null, this.styleToken)
    Renderer.drawText(pixel[0], pixel[1] + 3, this.text, this.styleText)
  }
}