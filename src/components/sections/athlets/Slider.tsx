import Slider from '@/components/commons/Slider';
import { FC, PropsWithChildren } from 'react'

// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import { AthletsContents } from './Contents';

const AthletsSlider: FC<PropsWithChildren> = (props) =>
    <div className='athlets-swipper'>
        <Slider>
            {
                AthletsContents.map((AthletsContent, index) =>
                    <SwiperSlide key={`athlets-slider-${index}`}>
                        {AthletsContent}
                    </SwiperSlide>
                )
            }
        </Slider>
    </div>


export default AthletsSlider