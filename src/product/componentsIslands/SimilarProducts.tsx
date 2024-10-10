import { useEffect, useMemo, useState } from 'react'

// import { ButtonFilter } from './ButtonFilter'

import './styles.css'

import { useStoreProduct } from '@/store/product'
import { APIProducts } from '@/services/API'
import { parseDataProducts } from '@/utils/parseDataProducts'
import type { Product } from '@/env'

export const SimilarProducts = () => {
  const { productsData, setProductsData } = useStoreProduct()
  const [filter, setFilter] = useState('todos')
  const [products, setProducts] = useState<Product[]>()

  const buttons = [
    { name: 'Todos', value: 'todos' },
    { name: 'Celulares', value: 'celulares' },
    { name: 'Accesorios', value: 'accesorios' },
    { name: 'Partes', value: 'partes' },
  ]

  useEffect(() => {
    APIProducts.getProducts().then((data) => {
      const newData = parseDataProducts(data)
      setProductsData(newData)
    })
  }, [])

  useMemo(() => {
    setProducts(productsData)
  }, [productsData])

  const stylesButtonSelected = 'bg-local_button text-local_text_2'

  const handleClick = (value: string): void => {
    setFilter((prevState: string) => (prevState === value ? prevState : value))
  }

  const handleFilterProducts = (): void => {
    const newProducts = productsData?.filter(({ collection }: Product) =>
      filter == 'todos' ? productsData : collection == filter
    )

    setProducts(newProducts)
  }

  useMemo(() => {
    handleFilterProducts()
  }, [filter])

  return (
    <div className="flex flex-col gap-12 py-10">
      <div className="flex justify-center items-center gap-2 flex-wrap">
        {buttons.map(({ name, value }: { name: string; value: string }) => (
          <button
            key={value}
            onClick={(): void => handleClick(value)}
            className={
              'px-7 py-3 uppercase border-local_button border-[1px] font-bold text-sm text-local_text ' +
              (filter === value ? stylesButtonSelected : '')
            }
          >
            {name}
          </button>
        ))}
      </div>

      <div id="products">
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
