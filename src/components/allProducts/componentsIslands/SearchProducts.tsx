import type { Product } from '@/env'

import { useState } from 'react'

import { useStoreProducts } from '@/stores/storeProducts'

const debounce = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}

export const SearchProducts = () => {
  const { cacheProducts, setSearchProducts } = useStoreProducts()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = debounce((item: string) => {
    const value = item.toLowerCase().trim()
    const newValue = value.split(' ')

    const filterLetters = newValue.length > 3

    const products2 = cacheProducts.filter((product: Product) => {
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

    setSearchProducts(products2)
  }, 300)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    handleSearch(value)
  }

  return (
    <div className="relative text-black bg-local_background_4 w-full max-w-lg flex items-center rounded-sm">
      <input
        type="text"
        className="bg-transparent w-full h-full p-2"
        placeholder="Buscar productos"
        value={searchTerm}
        onChange={handleChange}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute right-2 select-none pointer-events-none"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        <path d="M21 21l-6 -6"></path>
      </svg>
    </div>
  )
}
