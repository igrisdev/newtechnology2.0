import { APIProducts } from '@/utils/API'
import { atom } from 'nanostores'

// export const $products = atom<User[]>([])
export const $products = atom([])

// export function addProduct(product: any) {
//   $products.set([...$products.get(), product])
// }

export function getProducts() {
  APIProducts.getProducts().then((data) => {
    const newData = data.map((product: any) => {
      return {
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
      }
    })
    $products.set(newData)
  })
}
