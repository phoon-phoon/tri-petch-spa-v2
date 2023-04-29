import { FC } from 'react'

import CustomImage from '@/components/commons/Image'
import PLAYER_BASKETBALL_PNG from '/public/player-basket-ball.png';
import Line from '@/components/commons/Line';
import Plus from '@/components/commons/Plus';

interface ImagePropsType {
    background?: JSX.Element
}

const PlayersImage: FC<ImagePropsType> = (props) =>
    <div className='
        absolute 
        xl:right-[125px]
        lg:top-[0px] lg:-right-[85px]
        md:top-[33px] md:-right-[254px]
        mts:left-[50%] mts:-translate-x-[50%]
        sm:top-[101px] sm:left-[3px]
    '>
        <div className='
            relative
            lg:w-[991px] lg:h-[815px] 
            md:w-[691px] md:h-[568px] 
            sm:w-[302px] sm:h-[249px]'
        >
            <CustomImage
                image={{
                    src: PLAYER_BASKETBALL_PNG,
                    alt: 'Basket Ball Image'
                }}
                background={
                    <>
                        <div className='lg:top-[401px] lg:left-[774px] md:top-[282px] md:left-[382px] sm:top-[149px] sm:left-[266px]'><Plus /></div>
                        <div className='lg:top-[148px] lg:left-[316px] md:top-[89px] md:left-[224px] sm:-top-[1px] sm:left-[49px] opacity-30'><Plus /></div>
                        <div className='lg:top-[131px] lg:left-[294px] md:top-[72px] md:left-[202px] sm:top-[8px] sm:left-[71px]'><Plus /></div>

                        <div className='lg:top-[81px] lg:left-[660.89px] md:hidden sm:top-[23.32px] sm:left-[196.89px]'>
                            <div className='lg:w-[265.62px] lg:h-[311.16px] sm:hidden'><Line /></div>
                            <div className='lg:hidden sm:w-[76.69px] sm:h-[89.84px]'><Line stoke={3} /></div>
                        </div>
                        <div className='lg:top-[457.84px] lg:left-[185.13px] md:top-[263.89px] md:left-[159px] sm:top-[108.92px] sm:left-[49px]'>
                            <div className='lg:w-[262.52px] lg:h-[304.12px] md:hidden sm:hidden'><Line /></div>
                            <div className='lg:hidden md:w-[178.88px] md:h-[207.22px] sm:hidden'><Line /></div>
                            <div className='lg:hidden md:hidden sm:w-[106.35px] sm:h-[123.2px]'><Line stoke={3} /></div>
                        </div>
                    </>
                }
            />
        </div>
    </div>

export default PlayersImage