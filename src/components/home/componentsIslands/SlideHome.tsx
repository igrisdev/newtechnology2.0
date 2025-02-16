import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'

import fixed from '@assets/reparacion.jpg'

import { sendMessage } from '@utils/SendMessageWhatsApp'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import './styles.css'

const services = [
  {
    title: 'Reparación',
    description: 'Reparación de equipos de computadoras y teléfonos móviles',
    image: fixed.src,
    message: 'Solicitando reparación desde la web:',
  },
  {
    title: 'Venta Celulares',
    description: 'Venta de celulares de segunda mano',
    image:
      'https://http2.mlstatic.com/D_NQ_NP_663333-MCO75319299755_032024-O.webp',
    href: '/all_products',
    text: 'Productos',
  },
  {
    title: 'Venta Accesorios',
    description: 'Venta de accesorios para computadoras y teléfonos móviles',
    image:
      'https://http2.mlstatic.com/D_NQ_NP_663333-MCO75319299755_032024-O.webp',
    href: '/all_products',
    text: 'Productos',
  },
  {
    title: 'Venta Repuestos',
    description: 'Venta de repuestos para computadoras y teléfonos móviles',
    image:
      'https://image.made-in-china.com/202f0j00jkfoSlsnGvce/Hot-Selling-New-Brand-Repuestos-PARA-Cellular-Smart-Phone-LCD-Screen-Replacement-for-Infinixn-Hot-12-PRO.webp',
    href: '/all_products',
    text: 'Productos',
  },
  {
    title: 'Cuadros Personalizados',
    description: 'Venta de cuadros personalizados',
    image:
      'https://m.media-amazon.com/images/I/61h6v7CNvUL._UF1000,1000_QL80_.jpg',
    message: 'Solicitando información de un cuadro personalizado',
  },
]

export const SlideHome = () => {
  const [swiperReady, setSwiperReady] = useState(false)

  const handleButtonWhatsApp = (message: string) => {
    sendMessage(message)
  }

  return (
    <div className={`${swiperReady ? 'h-[450px]' : 'hidden'}`}>
      <Swiper
        onInit={() => setSwiperReady(true)}
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          721: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1060: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper !pb-14"
      >
        {services.map(
          ({ title, description, image, message, text, href }, index) => (
            <SwiperSlide key={title + index}>
              <article className="flex flex-col h-[450px]">
                <div className="min-h-[270px] max-h-[225px] rounded-md overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt={title}
                  />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-local_title text-xl sm:text-3xl font-bold mt-2">
                      {title}
                    </h2>
                    <p className="text-local_text mt-2 text-sm">
                      {description}
                    </p>
                  </div>
                  {message ? (
                    <button
                      onClick={() => handleButtonWhatsApp(message)}
                      className="w-max gap-2 bg-local_accent rounded-md px-5 py-2 text-local_text_2 font-semibold flex"
                    >
                      <p className="text-lg">Contactar</p>
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
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                      </svg>
                    </button>
                  ) : (
                    <a
                      href={href}
                      className="w-max gap-2 bg-local_accent rounded-md px-5 py-2 text-local_text_2 font-semibold flex"
                    >
                      <p className="text-lg">{text}</p>
                    </a>
                  )}
                </div>
              </article>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  )
}
