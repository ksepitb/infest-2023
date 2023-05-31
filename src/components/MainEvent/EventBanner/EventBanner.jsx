import React from 'react'

// import documentation
import Doc1 from '../../../assets/dokumentasi-2022/Screenshot_20230516-104423__01.jpg'
import Doc2 from '../../../assets/dokumentasi-2022/Screenshot_20230516-104427__01.jpg'
import Doc3 from '../../../assets/dokumentasi-2022/Screenshot_20230516-104432__01.jpg'
import Doc4 from '../../../assets/dokumentasi-2022/Screenshot_20230516-104436__01.jpg'
import Doc5 from '../../../assets/dokumentasi-2022/Screenshot_20230516-104439__01.jpg'
import Doc6 from '../../../assets/dokumentasi-2022/Screenshot_20230516-104442__01.jpg'
import Doc7 from '../../../assets/dokumentasi-2022/Screenshot_20230516-104448__01.jpg'

// import css
import './EventBanner.css'

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const EventBanner = () => {
  return (
    <div className='event-banner'>
        <div className='eb-documentation'>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><img src={Doc1} /></SwiperSlide>
                <SwiperSlide><img src={Doc2} /></SwiperSlide>
                <SwiperSlide><img src={Doc4} /></SwiperSlide>
                <SwiperSlide><img src={Doc5} /></SwiperSlide>
                <SwiperSlide><img src={Doc6} /></SwiperSlide>
                <SwiperSlide><img src={Doc7} /></SwiperSlide>
            </Swiper>
        </div>
        <div className='eb-title' data-aos='fade-up'>
                <h1>Main Event</h1>
                <p>INFEST 2023 memiliki main event berupa talkshow//seminar yang akan dilaksanakan dalam satu hari. Dalam acara tersebut, akan disampaikan topik yang menarik seputar investasi dan keuangan, ekonomi, dan pasar modal pada masa sekarang.</p>
        </div>
    </div>
  )
}

export default EventBanner