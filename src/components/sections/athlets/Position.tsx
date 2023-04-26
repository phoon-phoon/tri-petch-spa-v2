import { FC, PropsWithChildren } from 'react'

interface AthletsPositionPropsType {
    reverse?: boolean
}

const AthletsPosition: FC<PropsWithChildren<AthletsPositionPropsType>> = (props) =>
    <div className='flex flex-row'>
        <div className='relative grow'>{props.reverse ? props.children : null}</div>
        <div className='flex-none xl:w-[912px] lg:w-[800px] lg:min-w-[717px] md:w-[477px] md:min-w-[460px]'>{props.reverse ? null : props.children}</div>
    </div>

export default AthletsPosition