import type { Product, ProductData } from '@/env'

import { useEffect, useMemo, useState } from 'react'

import './styles.css'
// import { APIProducts } from '@/services/API'

export const SectionProducts = ({
  productsData,
}: {
  productsData: ProductData
}) => {
  // const [productsData, setProductsData] = useState<ProductData>([])
  const [filter, setFilter] = useState('celulares')
  const [products, setProducts] = useState<ProductData>(productsData)

  const buttons = [
    // { name: 'Todos', value: 'todos' },
    { name: 'Celulares', value: 'celulares' },
    { name: 'Accesorios', value: 'accesorios' },
    { name: 'Partes', value: 'partes' },
  ]

  // useEffect(() => {
  //   const getProducts = async (): Promise<void> => {
  //     const productData: ProductData = (await APIProducts.getProducts()) || []
  //     setProductsData(productData)
  //   }
  //   getProducts()
  // }, [])

  // useMemo(() => {
  //   setProducts(productsData)
  // }, [productsData])

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
    <div className="flex flex-col gap-12 pb-10">
      <div className="flex justify-center items-center gap-2 flex-wrap">
        {buttons.map(({ name, value }: { name: string; value: string }) => (
          <button
            key={value + name}
            onClick={(): void => handleClick(value)}
            className={
              'px-7 py-3 uppercase border-local_button border-[1px] font-bold text-sm text-local_text ' +
              (filter === value ? stylesButtonSelected : '')
            }
          >
            {name}
          </button>
        ))}
        <a
          href="/all_products"
          className="px-7 py-3 uppercase border-local_button border-[1px] font-bold text-sm text-local_text hover:bg-local_accent rounded-md hover:text-white flex items-center gap-2"
        >
          Ver Todos
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
            className="w-5 h-5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </a>
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
                        {descuento ? (
                          <>
                            <span className="text-xl font-medium text-local_text">
                              <span>{descuento}</span>
                            </span>
                            <span className="text-sm font-medium text-black/45 line-through">
                              {price}
                            </span>
                          </>
                        ) : (
                          <span className="text-xl font-medium text-local_text">
                            {price}
                          </span>
                        )}
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
