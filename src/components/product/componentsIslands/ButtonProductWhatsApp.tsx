import type { Product } from '@/env'

import { sendMessage } from '@utils/SendMessageWhatsApp'

export const ButtonProductWhatsApp = ({
  id,
  category,
  collection,
  brandProduct,
  title,
  price,
  origin,
  descuento,
  stock,
}: Product) => {
  const handleButtonWhatsApp = () => {
    const message =
      '---------------------------------  \n' +
      '*Información del producto*  \n' +
      '---------------------------------  \n' +
      `Id: *${id}* \n` +
      `Categoría: *${category}* \n` +
      `Colección: *${collection}* \n` +
      `marca: *${brandProduct}* \n` +
      `Nombre: *${title}* \n` +
      `Descuento: *${descuento}* \n` +
      `Precio: *${price}* \n` +
      `Origen: *${origin}* \n` +
      `Stock: *${stock}* \n` +
      '---------------------------------  \n' +
      'Mensaje: \n'

    sendMessage(message)
  }

  return (
    <button
      className="flex w-full justify-center gap-1 p-2 bg-local_button text-local_title_2 font-medium rounded-md"
      onClick={() => handleButtonWhatsApp()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
      </svg>
      Solicitar Por WhatsApp
    </button>
  )
}
