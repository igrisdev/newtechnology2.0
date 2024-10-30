import type { Product } from '@/env'
import { useStoreProducts } from '@/stores/storeProducts'

export const SearchProducts = () => {
  const { cacheProducts, setSearchProducts } = useStoreProducts()

  const searchProducts = (e: any) => {
    const value = e.target.value

    const newValue = value.toLowerCase().trim().split(' ') as string[]

    const products2 = cacheProducts
      .map((product: Product) => {
        for (const word of newValue) {
          if (product?.title?.toLowerCase().includes(word)) {
            return product
          }
        }
      })
      .filter((product: Product) => product !== undefined)

    setSearchProducts(products2)
  }

  return (
    <div className="relative text-black bg-local_background_4 w-full max-w-lg flex items-center rounded-sm">
      <input
        type="text"
        className="bg-transparent w-full h-full p-2"
        placeholder="Buscar productos"
        onChange={searchProducts}
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
