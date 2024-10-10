const baseId = import.meta.env.PUBLIC_YOUR_BASE_ID
const tableIdOrName = import.meta.env.PUBLIC_YOUR_TABLE_ID_OR_NAME_PRODUCTS

const TOKEN = import.meta.env.PUBLIC_YOUR_TOKEN

const headers = {
  Authorization: `Bearer ${TOKEN}`,
}

export const APIProducts = {
  getProducts: async () => {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${baseId}/${tableIdOrName}`,
        { headers }
      )
      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.statusText}`)
      }
      const data = await response.json()

      return data.records
    } catch (error) {
      console.error('Error:', error)
    }
  },
}
