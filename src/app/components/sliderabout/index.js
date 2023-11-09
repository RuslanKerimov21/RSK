'use client';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
const SliderAbout = ({ items }) => {
    const [thumbs, getThumbs] = useState(null);
    let params = {
        loop: true,
        modules: [
            Thumbs,
            FreeMode,
            Navigation,
            Pagination,
        ],
        thumbs: thumbs,
        navigation: true,
        spaceBetween: 10,
        pagination: { clickable: true }
    }
    let thumbsParams = {
        loop: true,
        modules: [
            Thumbs,
            FreeMode,
            Navigation,
        ],
        freeMode: true,
        spaceBetween: 10,
        slidesPerView: 1,
        watchSlidesProgress: true,
    };
    return (
        <div className="slider-about">
            <Swiper {...params} className="slider-left">
                {items.map((el, i) => (
                    <SwiperSlide key={i}>
                        <Image src={el.img} alt='slide-image' />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper {...thumbsParams} onSwiper={getThumbs} className="slider-right">
                {items.map((el, i) => (
                    <SwiperSlide key={i}>
                        <div className="slide-info">
                            <div className="slide-title">{el.title}</div>
                            <div className="slde-info_items">
                                {el.info.map((el, i) => (
                                    <ul className="slide-info_list" key={i}>
                                        {el.list.map((el, i) => (
                                            <li key={i}>{el.title}</li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default SliderAbout;