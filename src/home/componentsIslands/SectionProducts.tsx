import { useEffect, useMemo, useState } from 'react'

// import { ButtonFilter } from './ButtonFilter'

import './styles.css'

type Product = {
  id: number
  category: string
  collection: string
  image: string
  title: string
  price: string
  descuento: string
  description: string
  stock: string
  isFavorite: boolean
}

export const SectionProducts = () => {
  const [filter, setFilter] = useState('todos')
  const [products, setProducts] = useState<Product[]>()

  const productsData: Product[] = [
    {
      id: 1,
      category: 'Celulares',
      collection: 'celulares',
      image:
        'https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/70056838.jpg',
      title: 'Samsung Galaxy S21',
      price: '$199',
      descuento: '$10',
      description: 'Samsung Galaxy S21 Ultra 5G',
      stock: '100',
      isFavorite: true,
    },
    {
      id: 2,
      category: 'Auriculares',
      collection: 'accesorios',
      image:
        'https://jyrtechnology.com.co/wp-content/uploads/2020/05/043-MV-3.png',
      title: 'Uborn P47 Wireless Headphones',
      price: '$199',
      descuento: '$10',
      description: 'Samsung Galaxy S21 Ultra 5G',
      stock: '100',
      isFavorite: false,
    },
    {
      id: 3,
      category: 'Auriculares',
      collection: 'accesorios',
      image:
        'https://jyrtechnology.com.co/wp-content/uploads/2020/05/043-MV-3.png',
      title: 'Uborn P47 Wireless Headphones',
      price: '$199',
      descuento: '$10',
      description: 'Samsung Galaxy S21 Ultra 5G',
      stock: '100',
      isFavorite: false,
    },
  ]

  const buttons = [
    { name: 'Todos', value: 'todos' },
    { name: 'Celulares', value: 'celulares' },
    { name: 'Accesorios', value: 'accesorios' },
    { name: 'Partes', value: 'partes' },
  ]

  useEffect(() => {
    setProducts(productsData)
  }, [])

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
            image,
            title,
            price,
            descuento,
            description,
            stock,
            isFavorite,
          }) => (
            <a href={`/product/${id}`} key={id} className="flex">
              <article className="flex flex-col gap-2 hover:scale-105 transition-transform">
                <div className="min-h-[400px] max-h-[400px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={image}
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
                      {/* <span>{descuento}</span> */}
                    </div>
                  </div>

                  <div className="text-red-500">
                    <button className="p-2">
                      {isFavorite ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="icon icon-tabler icons-tabler-filled icon-tabler-heart"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
                        </svg>
                      ) : (
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
                          className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            </a>
          )
        )}
      </div>
    </div>
  )
}
