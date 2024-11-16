import type { Product, ProductData } from "@/env";

import { useEffect } from "react";

import { useStoreProducts } from "@/stores/storeProducts";

import CardProductSmall from "@components/allProducts/componentsIslands/CardProductSmall";

export default function AllProducts({
  allProducts,
}: {
  allProducts: ProductData;
}) {
  const { setProducts, products, cacheProducts, setLoading, loading, setCacheProducts } =
    useStoreProducts();

  useEffect(() => {
    if (allProducts.length > 0) {
      setCacheProducts(allProducts);
      setProducts(allProducts);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-12 pb-10">
      <div className={`${products?.length < 2 ? "two-products" : "products"}`}>
        {loading && <p className="text-center text-local_text">Cargando...</p>}

        {!loading && products?.length == 0 && (
          <p className="text-center text-local_text">
            No hay productos disponibles
          </p>
        )}

        {products?.map(
          ({ id, category, image, title, price, descuento }: Product) => {
            return (
              <CardProductSmall
                key={id}
                id={id}
                category={category}
                image={image}
                title={title}
                price={price}
                descuento={descuento}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
