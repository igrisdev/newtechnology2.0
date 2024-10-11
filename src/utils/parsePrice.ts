export const parsePrice = (price: number): string => {
  const newPrice = price.toString().split('').reverse()
  //   const newPrice = [1, 2, 3, 4, 5, 6, 7, 8]

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
