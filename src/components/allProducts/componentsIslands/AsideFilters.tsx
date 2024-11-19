import { useFilterAllProducts } from "@hooks/useFilterAllProducts"
import { useEffect, useState } from "react"

export const AsideFilters = ({
  categories,
  brands,
}: {
  categories: string[]
  brands: string[]
}) => {
  const { filter, handlePrice, handleCategories, handleBrands } = useFilterAllProducts()

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const { price } = filter

  const handleChangeCategories = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSelectedCategories((prev: string[]) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((option) => option !== value)
    )
  }

  useEffect(() => handleCategories({ categories: selectedCategories }), [selectedCategories])

  const handleChangeBrands = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSelectedBrands((prev: string[]) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((option) => option !== value)
    )
  }

  useEffect(() => handleBrands({ brands: selectedBrands }), [selectedBrands])

  return (
    <aside className="flex flex-col gap-2 bg-local_background_4 p-2 mb-2 rounded-sm w-full min-h-[80vh]">
      <h2 className="text-xl font-medium pb-2">Filtros</h2>

      <section className="flex flex-col gap-6">
        <div>
          <h3 className="border-b-2 pb-2 mb-2">Categorías</h3>
          <ul className="flex flex-col gap-2">
            {categories?.map((category) => (
              <li className="flex gap-2 items-center select-none" key={category}>
                <label
                  className="flex justify-center items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id={category}
                    value={category}
                    onChange={handleChangeCategories}
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
              <li className="flex gap-2 items-center select-none" key={brand}>
                <label
                  className="flex justify-center items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id={brand}
                    value={brand}
                    onChange={handleChangeBrands}
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
            <li className="flex gap-2 items-center select-none">
              <label
                className="flex justify-center items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="descuento"
                  value={0}
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
