interface FilterProps {
  search?: string
  categories: string
  brands: string
  discount: number
  price: number
}

import type { Product } from '@/env'

import { useStoreProducts } from "@/stores/storeProducts"
import { parsePriceNumber } from '@utils/parsePriceNumber'
import { useEffect } from 'react'

export const useFilterAllProducts = () => {
  const { cacheProducts, setProducts, filter, setFilter } = useStoreProducts()

  const handleSearch = ({ search }: { search: string }) => {
    const newFilter = {
      ...filter,
      search
    }

    setFilter(newFilter)
  }

  const handlePrice = ({ price }: { price: number }) => {
    const newFilter = {
      ...filter,
      price
    }

    setFilter(newFilter)
  }

  const filterProducts = () => {
    const newProducts = cacheProducts.filter((product: Product) => (product.title?.toLocaleUpperCase().includes(filter?.search?.toLocaleUpperCase() ?? '') && parsePriceNumber(product?.price?.toString() ? product?.price?.toString() : product?.descuento?.toString()) >= filter.price))

    console.log(filter)
    setProducts(newProducts)
  }

  useEffect(() => {
    filterProducts()
  }, [filter])

  return { filter, handleSearch, handlePrice };
};


// const debounce = (func: Function, delay: number) => {
//   let timeoutId: ReturnType<typeof setTimeout> | undefined
//   return (...args: any[]) => {
//     if (timeoutId) clearTimeout(timeoutId)
//     timeoutId = setTimeout(() => {
//       func.apply(null, args)
//     }, delay)
//   }
// }

// const handleSearch = debounce((item: string) => {
//   const value = item.toLowerCase().trim()
//   const newValue = value.split(' ')
//
//   const filterLetters = newValue.length > 3
//
//   const products = cacheProducts.filter((product: Product) => {
//     if (filterLetters) {
//       return (
//         product?.title?.toLowerCase().includes(item) ||
//         product?.category?.toLowerCase().includes(item) ||
//         product?.brandProduct?.toLowerCase().includes(item) ||
//         product?.collection?.toLowerCase().includes(item) ||
//         product?.origin?.toLowerCase().includes(item)
//       )
//     }
//
//
//     return newValue.some(
//       (word) =>
//         product?.title?.toLowerCase().includes(word) ||
//         product?.category?.toLowerCase().includes(word) ||
//         product?.brandProduct?.toLowerCase().includes(word) ||
//         product?.collection?.toLowerCase().includes(word) ||
//         product?.origin?.toLowerCase().includes(word)
//     )
//   })
//
//   setSearchProducts(products)
// }, 300)
