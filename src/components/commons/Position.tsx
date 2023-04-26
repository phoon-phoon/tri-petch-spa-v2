import { FC, PropsWithChildren } from 'react'

import AthletsPosition from '../sections/athlets/Position'
import PlayersPosition from '../sections/players/Position'

interface PositionPropsType {
    content: 'athlets' | 'players'
    reverse?: boolean
}

const Position: FC<PropsWithChildren<PositionPropsType>> = (props) =>
    <div className='relative flex justify-center'>
        <div className='lg:w-[1920px] md:w-[768px] sm:min-width-[320px] sm:[320px]'>
            {
                props.content === 'athlets'
                    ? <AthletsPosition reverse={props.reverse} children={props.children} />
                    : <PlayersPosition reverse={props.reverse} children={props.children} />
            }
        </div>
    </div >

export default Position