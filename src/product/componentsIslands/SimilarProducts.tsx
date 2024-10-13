import './styles.css'

import type { Product } from '@/env'

import { useEffect, useMemo, useState } from 'react'

import { useStoreProduct } from '@/store/product'

import { APIProducts } from '@/services/API'

import { parseDataProducts } from '@/utils/parseDataProducts'

export const SimilarProducts = () => {
  const { productsData, setProductsData, productsDataOne } = useStoreProduct()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    APIProducts.getProducts().then((data) => {
      const newData = parseDataProducts(data)
      setProductsData(newData)
    })
  }, [])

  useMemo(() => {
    const newProducts = productsData.filter(
      ({ collection, id }: Product) =>
        collection == productsDataOne[0]?.collection &&
        id != productsDataOne[0]?.id
    )

    setProducts(newProducts)
  }, [productsData, productsDataOne])

  return (
    <div className="flex flex-col gap-12 py-10">
      <h2 className="text-2xl font-semibold">Productos Similares</h2>

      <div id={`${products?.length < 2 ? 'two-products' : 'products'}`}>
        {products?.length == 0 && (
          <p className="text-center text-local_text">
            No hay productos disponibles
          </p>
        )}
        {products?.map(
          ({
            id,
            category,
            collection,
            image,
            title,
            price,
            descuento,
            description,
            stock,
            brandProduct,
            origin,
            shell,
          }) => {
            return (
              <a href={`/product/${id}`} key={id} className="flex group">
                <article className="flex flex-col gap-2">
                  <div className="min-h-[400px] max-h-[400px] overflow-hidden relative">
                    <div className="absolute w-full h-full group-hover:bg-black opacity-10 z-10 transition-colors duration-200"></div>
                    <img
                      className="w-full h-full object-cover"
                      src={image ? image[0].url : ''}
                      alt={title}
                    />
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1 flex flex-col justify-between">
                      <span className="text-local_text font-medium text-sm">
                        {category}
                      </span>
                      <h2 className="text-lg font-semibold">{title}</h2>
                      <div className="flex gap-2 items-center">
                        <span className="text-xl font-medium text-local_text">
                          {price}
                        </span>
                        <span>{descuento}</span>
                      </div>
                    </div>

                    <div className="text-red-500"></div>
                  </div>
                </article>
              </a>
            )
          }
        )}
      </div>
    </div>
  )
}
