import { parseDataFrames } from '@/utils/parseDataFrames'
import { parseDataProducts } from '@/utils/parseDataProducts'

const baseId = import.meta.env.PUBLIC_YOUR_BASE_ID
const tableNameProduct = import.meta.env.PUBLIC_YOUR_TABLE_ID_OR_NAME_PRODUCTS
const tableNameFrame = import.meta.env.PUBLIC_YOUR_TABLE_ID_OR_NAME_FRAMES

const TOKEN = import.meta.env.PUBLIC_YOUR_TOKEN

const headers = {
  Authorization: `Bearer ${TOKEN}`,
}

export const APIProducts = {
  getProducts: async () => {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${baseId}/${tableNameProduct}`,
        { headers }
      )
      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.statusText}`)
      }
      const data = await response.json()

      const newData = parseDataProducts(data.records) || []

      return newData
    } catch (error) {
      console.error('Error:', error)
    }
  },
  getSimilarProducts: async ({
    id: idProduct,
    collection: collectionProduct,
  }: {
    id: number | string
    collection?: string
  }) => {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${baseId}/${tableNameProduct}`,
        { headers }
      )
      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.statusText}`)
      }
      const data = await response.json()

      const parseData = parseDataProducts(data.records)

      const newData =
        parseData.filter(
          ({ collection, id }) =>
            collection == collectionProduct && id != idProduct
        ) || []

      return newData
    } catch (error) {
      console.error('Error:', error)
    }
  },
  getOneProduct: async (id: string) => {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${baseId}/${tableNameProduct}/${id}`,
        { headers }
      )

      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.statusText}`)
      }

      const data = await response.json()

      const newData = parseDataProducts(data) || []

      return newData
    } catch (error) {
      console.error('Error:', error)
    }
  },
}

export const APIFrames = {
  getFrames: async () => {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${baseId}/${tableNameFrame}`,
        { headers }
      )
      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.statusText}`)
      }
      const data = await response.json()

      const newData = parseDataFrames(data.records) || []

      return newData
    } catch (error) {
      console.error('Error:', error)
    }
  },
}
