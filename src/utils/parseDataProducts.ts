import type { Fields, ProductData } from '@/env'
import { generateListOfInformation } from './generateListInformation'
import { parsePrice } from './parsePrice'

export const parseDataProducts = (data: Fields): ProductData => {
  const newData = Array.isArray(data) ? data : [data]

  return newData
    .map((product) => ({
      id: product.id,
      category: product.fields.category,
      collection: product.fields.collection,
      brandProduct: product.fields.brandProduct,
      image: product.fields.images,
      title: product.fields.nameProduct,
      price: parsePrice(product.fields.price),
      descuento: parsePrice(product?.fields?.discount),
      description: generateListOfInformation(product.fields.description),
      features: generateListOfInformation(product.fields.features),
      stock: product.fields.stock,
      origin: product.fields.origin,
      shell: product.fields.shell,
    }))
    .filter((item) => item.shell.toString().toLowerCase() !== 'si')
}
