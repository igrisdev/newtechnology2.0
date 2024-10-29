import { create } from 'zustand'

export const useStoreProducts = create((set) => ({
  loading: true,
  cacheProducts: [],
  products: [],
  setLoading: (newLoading) => set({ loading: newLoading }),
  setCacheProducts: (newCacheProducts) =>
    set({ cacheProducts: newCacheProducts }),
  setProducts: (newProducts) => set({ products: newProducts }),
}))
