import type { Product } from '@/env'

import { useStoreProducts } from '@/stores/storeProducts'
import { parsePriceNumber } from '@utils/parsePriceNumber'
import { useEffect } from 'react'

export const useFilterAllProducts = () => {
  const { cacheProducts, setProducts, filter, setFilter } = useStoreProducts()

  const handleSearch = ({ search }: { search: string }) => {
    const newFilter = {
      ...filter,
      search,
    }

    setFilter(newFilter)
  }

  const handleCategories = ({ categories }: { categories: string[] }) => {
    const newFilter = {
      ...filter,
      categories,
    }

    setFilter(newFilter)
  }

  const handleBrands = ({ brands }: { brands: string[] }) => {
    const newFilter = {
      ...filter,
      brands,
    }

    setFilter(newFilter)
  }

  const handleDiscount = ({ discount }: { discount: boolean }) => {
    const newFilter = {
      ...filter,
      discount,
    }

    setFilter(newFilter)
  }

  const handlePrice = ({ price }: { price: number }) => {
    const newFilter = {
      ...filter,
      price,
    }

    setFilter(newFilter)
  }

  const filterProducts = () => {
    const newProducts = cacheProducts.filter((product: Product) => {
      const item: string = filter.search.toLowerCase().trim()
      const newValue = item.split(' ')

      const filterLetters = newValue.length > 3

      const matchesSearch = filterLetters
        ? product?.title?.toLowerCase().includes(item) ||
          product?.category?.toLowerCase().includes(item) ||
          product?.brandProduct?.toLowerCase().includes(item) ||
          product?.collection?.toLowerCase().includes(item) ||
          product?.origin?.toLowerCase().includes(item)
        : newValue.some(
            (word) =>
              product?.title?.toLowerCase().includes(word) ||
              product?.category?.toLowerCase().includes(word) ||
              product?.brandProduct?.toLowerCase().includes(word) ||
              product?.collection?.toLowerCase().includes(word) ||
              product?.origin?.toLowerCase().includes(word)
          )

      const matchesCategories =
        filter.categories.length === 0 ||
        filter.categories.some((value: string) =>
          product.category.includes(value)
        )

      const matchesBrands =
        filter.brands.length === 0 ||
        filter.brands.some((value: string) =>
          product.brandProduct?.includes(value)
        )

      const productPrice = parsePriceNumber(
        product?.price?.toString() || product?.descuento?.toString()
      )
      const matchesPrice = productPrice >= filter.price

      const poductDiscount = product.descuento ? true : false
      const matchesDiscount =
        filter.discount === false || filter.discount === poductDiscount

      return (
        matchesSearch &&
        matchesPrice &&
        matchesCategories &&
        matchesBrands &&
        matchesDiscount
      )
    })

    setProducts(newProducts)
  }

  useEffect(() => {
    filterProducts()
  }, [filter])

  return {
    filter,
    handleSearch,
    handleBrands,
    handleCategories,
    handleDiscount,
    handlePrice,
  }
}
