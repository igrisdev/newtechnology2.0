import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

export const SlideHome = () => {
  const services = [
    {
      title: 'Reparación',
      description: 'Reparación de equipos de computadoras y teléfonos móviles',
      image:
        'https://tecnosentry.com/wp-content/uploads/2024/08/cell-android-repair-1024x600-1.webp',
    },
    {
      title: 'Venta Celulares',
      description: 'Venta de celulares de segunda mano',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_663333-MCO75319299755_032024-O.webp',
    },
    {
      title: 'Venta Accesorios',
      description: 'Venta de accesorios para computadoras y teléfonos móviles',
      image:
        'https://www.tiendaonlinedetecnologia.com/wp-content/uploads/2021/05/IMPORTADORES-DIRECTOS-DE-ACCESORIOS-PARA-CELULARES-EN-BOGOTA-COLOMBIA-DESDE-CHINA-8.jpeg',
    },
    {
      title: 'Venta Repuestos',
      description: 'Venta de repuestos para computadoras y teléfonos móviles',
      image:
        'https://image.made-in-china.com/202f0j00jkfoSlsnGvce/Hot-Selling-New-Brand-Repuestos-PARA-Cellular-Smart-Phone-LCD-Screen-Replacement-for-Infinixn-Hot-12-PRO.webp',
    },
    {
      title: 'Cuadros Personalizados',
      description: 'Venta de cuadros personalizados',
      image:
        'https://m.media-amazon.com/images/I/61h6v7CNvUL._UF1000,1000_QL80_.jpg',
    },
  ]

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
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
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        className="mySwiper"
      >
        {services.map(({ title, description, image }, index) => (
          <SwiperSlide key={title + index}>
            <article className="flex flex-col h-[450px]">
              <div className="min-h-[270px] max-h-[225px] rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt={title}
                  width="1920"
                  height="2193"
                />
              </div>

              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-local_title text-3xl font-bold">
                    {title}
                  </h2>
                  <p className="text-local_text mt-2 text-sm">{description}</p>
                </div>
                <button className="w-max bg-local_button text-local_title_2 text-xl font-bold py-2 px-4 rounded-md">
                  Read more
                </button>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
