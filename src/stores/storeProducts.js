import { create } from 'zustand'

export const useStoreProducts = create((set) => ({
  loading: true,
  cacheProducts: [],
  products: [],
  filter: { search: '', categories: [], brands: [], discount: 0, price: 0 },
  setLoading: (newLoading) => set({ loading: newLoading }),
  setCacheProducts: (newCacheProducts) =>
    set({ cacheProducts: newCacheProducts }),
  setProducts: (newProducts) => set({ products: newProducts }),
  setFilter: (newfilter) => set({ filter: newfilter })
}))
