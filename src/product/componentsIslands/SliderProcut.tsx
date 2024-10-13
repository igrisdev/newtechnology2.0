import type { Image } from '@/env'

import { useState } from 'react'

export const SliderProduct = ({ image }: { image: Image[] }) => {
  const [productImages] = useState<Image[]>(image)
  const [currentImage, setCurrentImage] = useState(0)

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
