import React, { useEffect, useState } from 'react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

SwiperCore.use([Autoplay, Pagination, Navigation])

const speakerData = [
  {
    id: 1,
    name: 'To Be Announce',
    topic: 'To Be Announce' 
  },
  {
    id: 2,
    name: 'To Be Announce',
    topic: 'To Be Announce' 
  },
  {
    id: 3,
    name: 'To Be Announce',
    topic: 'To Be Announce' 
  },
  {
    id: 4,
    name: 'To Be Announce',
    topic: 'To Be Announce' 
  },
]

const Speaker = () => {
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    // Function to update the slidesPerView based on window width
    const handleResize = () => {
      if (window.innerWidth >= 1050) {
        setSlidesPerView(3)
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(1)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className='min-h-[400px] mx-auto md:pt-[5rem] bg-primary flex flex-col items-center justify-center gap-y-16'>
      <p className='text-white font-bold text-4xl md:text-5xl text-center mt-16'>Our <span className='font-gradient'>Speakers</span></p>
      <p className='text-4xl font-gradient font-extrabold-italic text-center'>To be announced..</p>
      {/* <div className='flex justify-center items-center w-full'>
        <Swiper
          className='z-1 w-full relative flex justify-center items-center px-auto object-cover'
          slidesPerView={slidesPerView}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {speakerData.map((item, index) => {
            return (
              <SwiperSlide>
                <div className='text-center w-[300px] h-[400px] rounded-[25px] relative flex items-center justify-center
                before:content-[""] before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:bg-gradient before:-z-1 before:rounded-[25px]
                after:content-[""] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[100%] after:bg-gradient after:blur-[10px] after:-z-1 after:rounded-[25px] '
                >
                  <div className='w-[99%] h-[99%] bg-primary rounded-[25px] flex flex-col items-center justify-center p-5 relative z-10'>
                    <div className='text-center'>
                      <p className='text-2xl font-gradient font-extrabold-italic'>To Be Announced</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div> */}
    </section>
  )
}

export default Speaker