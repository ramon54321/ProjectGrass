const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function generateGuid(length: number) {
  let guid = ''
  for (let i = 0; i < length; i++) {
    const char = alphabet[Math.floor(Math.random() * alphabet.length-1)]
    guid = guid + char
  }
  return guid
}
