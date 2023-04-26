import { FC, PropsWithChildren } from 'react'

const MainContainer: FC<PropsWithChildren> = (props) =>
    <div className='w-full'>
        {props.children}

        <div className='absolute top-0 left-0 w-full' style={{ zIndex: -1 }}>
            <div className='flex flex-col w-full'>
                <div className='lg:h-[345px] md:h-[377px] sm:h-[296px] w-full bg-transparent'>&nbsp;</div>
                <div className='lg:h-[251px] md:h-[235px] sm:h-[284px] w-full bg-[#F5F4F9]'>&nbsp;</div>
                <div className='lg:h-[302px] md:h-[207px] sm:hidden w-full bg-[#5E3DB3]'>&nbsp;</div>
                <div className='lg:h-[485px] md:h-[348px] sm:h-[315px] w-full bg-transparent'>&nbsp;</div>
                <div className='lg:h-[245px] md:h-[235px] sm:h-[238px] w-full bg-[#F5F4F9]'>&nbsp;</div>
                <div className='lg:h-[246px] md:h-[207px] sm:hidden w-full bg-[#090C35]'>&nbsp;</div>
            </div>
        </div>
    </div>

export default MainContainer