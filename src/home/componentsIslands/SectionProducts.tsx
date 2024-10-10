import { useEffect, useMemo, useState } from 'react'

// import { ButtonFilter } from './ButtonFilter'

import './styles.css'

import { useStore } from '@nanostores/react'
import { $products } from '@/store/products'

import { getProducts } from '@/store/products'

type Product = any

export const SectionProducts = () => {
  const productsData = useStore($products)
  const [filter, setFilter] = useState('todos')
  const [products, setProducts] = useState<Product[]>()

  // const productsData: Product[] = [
  //   {
  //     id: 1,
  //     category: 'Celulares',
  //     collection: 'celulares',
  //     image:
  //       'https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/70056838.jpg',
  //     title: 'Samsung Galaxy S21',
  //     price: '$199',
  //     descuento: '$10',
  //     description: 'Samsung Galaxy S21 Ultra 5G',
  //     stock: '100',
  //     isFavorite: true,
  //   },
  //   {
  //     id: 2,
  //     category: 'Auriculares',
  //     collection: 'accesorios',
  //     image:
  //       'https://jyrtechnology.com.co/wp-content/uploads/2020/05/043-MV-3.png',
  //     title: 'Uborn P47 Wireless Headphones',
  //     price: '$199',
  //     descuento: '$10',
  //     description: 'Samsung Galaxy S21 Ultra 5G',
  //     stock: '100',
  //     isFavorite: false,
  //   },
  //   {
  //     id: 3,
  //     category: 'Auriculares',
  //     collection: 'accesorios',
  //     image:
  //       'https://jyrtechnology.com.co/wp-content/uploads/2020/05/043-MV-3.png',
  //     title: 'Uborn P47 Wireless Headphones',
  //     price: '$199',
  //     descuento: '$10',
  //     description: 'Samsung Galaxy S21 Ultra 5G',
  //     stock: '100',
  //     isFavorite: false,
  //   },
  // ]

  const buttons = [
    { name: 'Todos', value: 'todos' },
    { name: 'Celulares', value: 'celulares' },
    { name: 'Accesorios', value: 'accesorios' },
    { name: 'Partes', value: 'partes' },
  ]

  useEffect(() => {
    getProducts()
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
