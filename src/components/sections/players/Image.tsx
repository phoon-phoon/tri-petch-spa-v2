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
        lg:top-[0px] lg:right-[-50px]
    '>
        <div className='
            relative
            lg:w-[991px] lg:h-[815px] 
            md:w-[498px] md:h-[699px] 
            sm:w-[200px] sm:h-[281px]'
        >
            <CustomImage
                image={{
                    src: PLAYER_BASKETBALL_PNG,
                    alt: 'Basket Ball Image'
                }}
                background={
                    <>
                        <div className='top-[401px] left-[774px]'><Plus /></div>
                        <div className='top-[148px] left-[316px] opacity-30'><Plus /></div>
                        <div className='top-[131px] left-[294px]'><Plus /></div>

                        <div className='top-[81px] left-[660.89px]'>
                            <div className='w-[265.62px] h-[311.16px]'><Line /></div>
                        </div>
                        <div className='top-[457.84px] left-[185.13px]'>
                            <div className='w-[262.52px] h-[304.12px]'><Line /></div>
                        </div>
                    </>
                }
            />
        </div>
    </div>

export default PlayersImage