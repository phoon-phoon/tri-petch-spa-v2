import { FC, PropsWithChildren } from 'react'

const Contents: FC<PropsWithChildren> = (props) =>
    <div className='lg:w-[1920px] md:w-[768px] sm:w-[320px] min-w-[320px]'>
        {props.children}
    </div>

export default Contents