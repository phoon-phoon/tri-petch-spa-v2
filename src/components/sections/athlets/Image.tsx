import { FC } from 'react'

import CustomImage from '@/components/commons/Image'
import PLAYER_FOOTBALLER_PNG from '/public/player-footballer.png';
import Line from '@/components/commons/Line';
import Plus from '@/components/commons/Plus';

interface ImagePropsType {
}

const AthletsImage: FC<ImagePropsType> = (props) =>
    <div className='
        absolute 
        xl:right-[155px]
        lg:top-[35px] lg:-right-[50px] 
        md:top-[121px] md:-right-[46px] 
        sm:top-[70px] sm:right-[70px] 
    '>
        <div className='
            relative
            lg:w-[678px] lg:h-[950px] 
            md:w-[498px] md:h-[699px] 
            sm:w-[200px] sm:h-[281px]'
        >
            <CustomImage
                image={{
                    src: PLAYER_FOOTBALLER_PNG,
                    alt: 'Footballer Image'
                }}
                background={
                    <>
                        <div className='lg:hidden md:-top-[19px] md:left-[190px] opacity-30 sm:top-[11px] sm:-left-[18px]'><Plus /></div>
                        <div className='lg:hidden md:-top-[4px] md:left-[212px] sm:top-[20px] sm:left-[4px]'><Plus /></div>

                        <div className='lg:hidden md:top-[18.98px] md:left-[189.91px] sm:top-[12.91px] sm:-left-[1.64px]'>
                            <div className='md:w-[209.29px] md:h-[233.72px] sm:hidden'><Line /></div>
                            <div className='md:hidden sm:w-[178.89px] sm:h-[197.23px]'><Line stoke={3} /></div>
                        </div>
                    </>
                }
            />
        </div>
    </div>

export default AthletsImage