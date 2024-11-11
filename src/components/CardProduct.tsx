import type { Product } from '@/env'

export const CardProduct = ({
  id,
  image,
  title,
  price,
  descuento,
  category,
}: Product) => {
  return (
    <a href={`/product/${id}`} className="flex group">
      <article className="flex flex-col gap-2">
        <div className="min-h-[400px] max-h-[400px] overflow-hidden relative">
          <div className="absolute w-full h-full group-hover:bg-black opacity-10 z-10 transition-colors duration-200"></div>
          <img
            className="w-full h-full object-cover"
            src={image ? image[0].url : ''}
            alt={title}
          />
        </div>

        <div className="flex gap-2 relative">
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

          {descuento && (
            <div className="absolute right-0 top-0 bg-orange-500 text-[0.7rem] p-1 rounded-lg animate-pulse font-semibold text-white">
              Oferta
            </div>
          )}
        </div>
      </article>
    </a>
  )
}
