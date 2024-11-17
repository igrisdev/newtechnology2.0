import { useFilterAllProducts } from "@hooks/useFilterAllProducts"

export const AsideFilters = ({
  categories,
  brands,
}: {
  categories: string[]
  brands: string[]
}) => {
  const { filter, handlePrice, handleCategories, handleBrands } = useFilterAllProducts()

  const { price } = filter

  return (
    <aside className="flex flex-col gap-2 bg-local_background_4 p-2 mb-2 rounded-sm w-full min-h-[80vh]">
      <h2 className="text-xl font-medium pb-2">Filtros</h2>

      <section className="flex flex-col gap-6">
        <div>
          <h3 className="border-b-2 pb-2 mb-2">Categorías</h3>
          <ul className="flex flex-col gap-2">
            {categories?.map((category) => (
              <li className="flex gap-2 items-center" key={category}>
                <label
                  className="flex justify-center items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id={category}
                    onClick={() => handleCategories({ categories: category })}
                    className="size-4 rounded-md"
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 pb-2 mb-2">Marcas</h3>
          <ul className="flex flex-col gap-2">
            {brands?.map((brand) => (
              <li className="flex gap-2 items-center" key={brand}>
                <label
                  className="flex justify-center items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id={brand}
                    onClick={() => handleBrands({ brands: brand })}
                    className="size-4 rounded-md"
                  />
                  {brand}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 pb-2 mb-2">Descuento</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 items-center">
              <label
                className="flex justify-center items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="descuento"
                  className="size-4 rounded-md"
                />
                En descuento
              </label>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 pb-2 mb-2">Precio</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-col gap-2">
              <input
                type="range"
                min={0}
                max={6000000}
                defaultValue={price}
                onChange={(e) => handlePrice({ price: Number(e.target.value) })}
                className="w-full"
              />
              <div>
                <span className="text-sm">$0</span>-
                <span className="text-sm">$1,000,000</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  )
}
