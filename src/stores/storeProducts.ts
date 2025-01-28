import { create } from 'zustand'

export const useStoreProducts = create((set) => ({
  loading: true,
  cacheProducts: [],
  products: [],
  filter: { search: '', categories: [], brands: [], discount: false, price: 0 },
  setLoading: (newLoading: any) => set({ loading: newLoading }),
  setCacheProducts: (newCacheProducts: any) =>
    set({ cacheProducts: newCacheProducts }),
  setProducts: (newProducts: any) => set({ products: newProducts }),
  setFilter: (newfilter: any) => set({ filter: newfilter }),
}))
