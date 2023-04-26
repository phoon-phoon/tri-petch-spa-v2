import Slider from '@/components/commons/Slider';
import { FC, PropsWithChildren } from 'react'

// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import { PlayersContents } from './Contents';

const PlayersSlider: FC<PropsWithChildren> = (props) =>
    <div className='players-swipper'>
        <Slider>
            {
                PlayersContents.map((PlayersContent, index) =>
                    <SwiperSlide key={`players-slider-${index}`}>
                        {PlayersContent}
                    </SwiperSlide>
                )
            }
        </Slider>
    </div>


export default PlayersSlider