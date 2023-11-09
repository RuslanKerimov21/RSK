'use client';
import 'swiper/css';
import './index.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CONFIG } from '@/app/config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
const Slider = ({ items }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            {items.map((el) => (
                <SwiperSlide key={el.id}>
                    <div className="offer-info">
                        <h1>{el.title}</h1>
                    </div>
                    <div className="offer-img">
                        <img src={el.img.data ? CONFIG.file_url + el.img.data.attributes.url : "https://avatars.mds.yandex.net/get-bunker/50064/d72205e544198b757690858b7cf6245b7d8df050/orig"} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export default Slider;