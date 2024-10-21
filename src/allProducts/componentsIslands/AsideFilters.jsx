export const AsideFilters = ({ categories, brands }) => {
  return (
    <aside className="flex flex-col gap-2 bg-local_background_4 p-2 mb-2 rounded-sm">
      <h2 className="text-xl font-medium pb-2">Filtros</h2>

      <section className="flex flex-col gap-6">
        <div>
          <h3 className="border-b-2 pb-2 mb-2">Categorías</h3>
          <ul className="flex flex-col gap-2">
            {categories?.map((category) => (
              <li className="flex gap-2 items-center" id={category}>
                <input type="checkbox" className="size-4 rounded-md" />
                <span className="text-sm">{category}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 pb-2 mb-2">Marcas</h3>
          <ul className="flex flex-col gap-2">
            {brands?.map((brand) => (
              <li className="flex gap-2 items-center" id={brand}>
                <input type="checkbox" className="size-4 rounded-md" />
                <span className="text-sm">{brand}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 pb-2 mb-2">Descuento</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2 items-center">
              <input type="checkbox" className="size-4 rounded-md" />
              <span className="text-sm">Con descuento</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 pb-2 mb-2">Precio</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-col gap-2">
              <input type="range" className="" />

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
