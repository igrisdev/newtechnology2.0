import type { ProductData } from '@/env'
import { create } from 'zustand'

type useStoreProduct = {
  productsData: ProductData
  productsDataOne: ProductData
  setProductsData: (productsData: ProductData) => void
  setProductsDataOne: (productsDataOne: ProductData) => void
}
export const useStoreProduct = create<useStoreProduct>()((set) => ({
  productsData: [],
  productsDataOne: [],
  setProductsData: (productsData) => set(() => ({ productsData })),
  setProductsDataOne: (productsDataOne) => set(() => ({ productsDataOne })),
}))
