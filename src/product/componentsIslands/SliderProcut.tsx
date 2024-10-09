import { useState } from 'react'

const productImages = [
  'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649',
  'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
  'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649',
  'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg',
]

export const SliderProduct = () => {
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
          src={productImages[currentImage]}
          alt=""
        />
      </section>

      <section className="grid grid-cols-4 gap-2">
        {productImages.slice(0, 8).map((img: string, index: number) => (
          <button
            className={`border-2 overflow-hidden rounded-md ${
              index === currentImage ? styleImageSelected : ''
            }`}
            key={img + index}
            onClick={() => handleChangeImage(index)}
          >
            <img className="w-full h-full object-cover" src={img} alt="" />
          </button>
        ))}
      </section>
    </div>
  )
}
