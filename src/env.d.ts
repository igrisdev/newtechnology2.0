/// <reference path="../.astro/types.d.ts" />

export type ProductData = Product[]

export type Product = {
  id: number
  category: string
  collection: string
  brandProduct: string
  image: Image[]
  title: string
  price: number | string
  descuento: number
  description: string[]
  features: string[]
  stock: number
  origin: string
  shell: string
}

export type ProductsData = {
  records?: Record[]
}

export type Record = {
  id?: string
  createdTime?: Date
  fields?: Fields
}

export type Fields = {
  images?: Image[]
  shell?: string
  origin?: string
  stock?: number
  price?: number
  nameProduct?: string
  listDescription?: string
  collection?: string
  brandProduct?: string
  Id?: number
  category?: string
}

export type Image = {
  id?: string
  width?: number
  height?: number
  url?: string
  filename?: string
  size?: number
  type?: string
  thumbnails?: Thumbnails
}

export type Thumbnails = {
  small?: Full
  large?: Full
  full?: Full
}

export type Full = {
  url?: string
  width?: number
  height?: number
}
