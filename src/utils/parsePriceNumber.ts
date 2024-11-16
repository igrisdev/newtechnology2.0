export function parsePriceNumber(price: string = '0'): number {
  const newPrice = parseInt(price.replaceAll(',', ''))
  return newPrice
}
