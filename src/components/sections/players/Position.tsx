import { FC, PropsWithChildren } from 'react'

interface PlayersPositionPropsType {
    reverse?: boolean
}

const PlayersPosition: FC<PropsWithChildren<PlayersPositionPropsType>> = (props) =>
    <div className='flex flex-row'>
        <div className='flex-none xl:w-[1039px] lg:w-[800px] lg:min-w-[717px] xl:pl-[322px] lg:pl-[50px]'>{props.reverse ? null : props.children}</div>
        <div className='relative grow'>{props.reverse ? props.children : null}</div>
    </div>

export default PlayersPosition