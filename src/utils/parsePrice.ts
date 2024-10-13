export const parsePrice = (price: number): string => {
  if (!price) return ''

  const newPrice = price.toString().split('').reverse()

  let num: string[] = []
  let count = 0

  newPrice.map((number) => {
    if (count == 3) {
      num.push(',')
      count = 0
    }
    num.push(number)
    count++
  })

  return num.reverse().join('')
}
