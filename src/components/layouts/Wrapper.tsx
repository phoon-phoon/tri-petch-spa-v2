import { FC, PropsWithChildren } from 'react'

const Wrapper: FC<PropsWithChildren> = (props) =>
    <div className='
        absolute m-0-auto
        min-w-[320px] lg:w-[1920px] md:w-[768px] sm:w-[320px]
    '>
        {props.children}
    </div>

export default Wrapper