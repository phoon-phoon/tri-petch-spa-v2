import { FC, PropsWithChildren } from 'react'

// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Slider: FC<PropsWithChildren> = (props) =>
    <Swiper
        spaceBetween={0}
        pagination={{ clickable: true }}
        modules={[Pagination]}
    >
        {props.children}
    </Swiper>

export default Slider