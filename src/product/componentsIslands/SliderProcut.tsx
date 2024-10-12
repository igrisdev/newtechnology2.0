import { useEffect, useMemo, useState } from 'react'

import { useStoreProduct } from '@/store/product'
import { APIProducts } from '@/services/API'

import { parseDataProducts } from '@/utils/parseDataProducts'
import type { Image } from '@/env'

export const SliderProduct = ({ id }: { id: string }) => {
  const { productsDataOne, setProductsDataOne } = useStoreProduct()
  const [productImages, setProductImages] = useState<Image[]>([])
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    APIProducts.getOneProduct(id).then((data) => {
      const newData = parseDataProducts(data)

      setProductsDataOne(newData)
    })
  }, [])

  useMemo(() => {
    setProductImages(productsDataOne[0]?.image)
  }, [productsDataOne])

  const handleChangeImage = (index: number) => {
    setCurrentImage(index)
  }

  const styleImageSelected = 'border-local_accent'

  return (
    <div className="flex-1 flex flex-col gap-2">
      <section className="flex-1 overflow-hidden rounded-md">
        <img
          className="w-full h-full object-cover"
          src={productImages ? productImages[currentImage]?.url : ''}
          alt=""
        />
      </section>

      <section className="grid grid-cols-4 gap-2">
        {productImages?.slice(0, 8).map(({ url, id }, index: number) => {
          return (
            <button
              className={`border-2 overflow-hidden rounded-md ${
                index === currentImage ? styleImageSelected : ''
              }`}
              key={id}
              onClick={() => handleChangeImage(index)}
            >
              <img className="w-full h-full object-cover" src={url} alt="" />
            </button>
          )
        })}
      </section>
    </div>
  )
}
