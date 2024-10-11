import type { Fields, ProductData } from '@/env'

export const parseDataProducts = (data: Fields): ProductData => {
  const newData = Array.isArray(data) ? data : [data]

  return newData.map((product) => ({
    id: product.id,
    category: product.fields.category,
    collection: product.fields.collection,
    brandProduct: product.fields.brandProduct,
    image: product.fields.images,
    title: product.fields.nameProduct,
    price: product.fields.price,
    descuento: product.fields.discount,
    description: product.fields.listDescription,
    stock: product.fields.stock,
    origin: product.fields.origin,
    shell: product.fields.shell,
  }))
}
