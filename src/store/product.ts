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

// import { create } from 'zustand'

// type Store = {
//   count: number
//   inc: () => void
// }

// const useStore = create<Store>()((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))

// function Counter() {
//   const { count, inc } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }
