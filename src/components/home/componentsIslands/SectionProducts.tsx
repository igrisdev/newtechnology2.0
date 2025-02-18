import type { Product, ProductData } from '@/env'

import { useMemo, useState } from 'react'

import './styles.css'

import { CardProduct } from '@/components/general/CardProduct'

export const SectionProducts = ({
  productsData,
  categories,
}: {
  productsData: ProductData
  categories: string[]
}) => {
  const [filter, setFilter] = useState(categories[0] || 'celulares')
  const [products, setProducts] = useState<ProductData>(productsData)

  const buttons =
    categories?.map((category) => ({
      name: category,
      value: category,
    })) || []

  const stylesButtonSelected = 'bg-local_button text-local_text_2'

  const handleClick = (value: string): void => {
    setFilter((prevState: string) => (prevState === value ? prevState : value))
  }

  const handleFilterProducts = (): void => {
    const newProducts = productsData?.filter(({ category }: Product) =>
      filter == 'todos' ? productsData : category == filter
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
        {products
          ?.slice(0, 10)
          .map(
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
            }: Product) => {
              return (
                <CardProduct
                  key={id}
                  id={id}
                  image={image}
                  title={title}
                  price={price}
                  descuento={descuento}
                  category={category}
                />
              )
            }
          )}
      </div>
    </div>
  )
}
