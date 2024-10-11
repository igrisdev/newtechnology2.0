import { useStoreProduct } from '@/store/product'

export const InformationProduct = () => {
  const { productsDataOne } = useStoreProduct()

  return (
    <div className="flex-1 flex flex-col">
      <h1 className="text-3xl font-bold mb-4">{productsDataOne[0]?.title}</h1>
      <p className="text-3xl font-bold mb-4">
        $ {productsDataOne[0]?.price}{' '}
        <span className="text-sm font-normal">
          ({productsDataOne[0]?.origin})
        </span>
      </p>
      <div className="mb-4">
        <p className="font-semibold mb-2">Descripciones</p>
        <div className="flex space-x-2">
          <ul className="list-disc list-inside mb-4">
            {productsDataOne[0]?.description?.map((description) => (
              <li>{description}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-4">
        <p className="font-semibold mb-2">Atención al cliente</p>
        <div className="flex space-x-2">
          <p>
            Comunícate con nosotros por medio de WhatsApp, dale click y se
            enviara un mensaje con la información del producto y puedes añadir
            tu comentario.
          </p>
        </div>
      </div>
      <button className="flex w-full justify-center gap-1 p-2 bg-local_button text-local_title_2 font-medium rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
        </svg>
        Solicitar Por WhatsApp
      </button>

      <div className="grid grid-cols-3 gap-4 mt-8">
        {['Safe Payment', 'Shop With Confidence', 'Worldwide Delivery'].map(
          (feature) => (
            <article className="border">
              <div className="flex flex-col items-center justify-center p-4">
                <svg
                  className="w-6 h-6 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-center">{feature}</p>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  )
}
