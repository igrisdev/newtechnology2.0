// interface Props {
//   search?: string
//   categories?: string
//   brands?: string
//   discount?: number
//   price?: number
// }

import type { Product } from '@/env'

import { useStoreProducts } from "@/stores/storeProducts"

const debounce = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}

export const useFilterAllProducts = () => {
  const { cacheProducts, setSearchProducts } = useStoreProducts()

  const handleSearch = debounce((item: string) => {
    const value = item.toLowerCase().trim()
    const newValue = value.split(' ')

    const filterLetters = newValue.length > 3

    const products = cacheProducts.filter((product: Product) => {
      if (filterLetters) {
        return (
          product?.title?.toLowerCase().includes(item) ||
          product?.category?.toLowerCase().includes(item) ||
          product?.brandProduct?.toLowerCase().includes(item) ||
          product?.collection?.toLowerCase().includes(item) ||
          product?.origin?.toLowerCase().includes(item)
        )
      }

      return newValue.some(
        (word) =>
          product?.title?.toLowerCase().includes(word) ||
          product?.category?.toLowerCase().includes(word) ||
          product?.brandProduct?.toLowerCase().includes(word) ||
          product?.collection?.toLowerCase().includes(word) ||
          product?.origin?.toLowerCase().includes(word)
      )
    })

    setSearchProducts(products)
  }, 300)

  const filterProducts = ({ search = '', categories = 'all', brands = 'all', discount = 0, price = 0 }) => {

    handleSearch(search)
  }

  return { filterProducts };
};
