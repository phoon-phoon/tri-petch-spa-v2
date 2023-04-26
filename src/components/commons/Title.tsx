import { FC, PropsWithChildren } from 'react'

export const Title: FC<PropsWithChildren> = (props) =>
    <h1 className='text-[#E7E7E7] lg:text-[90px] lg:leading-[105.47px] md:text-[90px] md:leading-[105.47px] sm:text-[50px] sm:leading-[58.59px]'>{props.children}</h1>

export const TitleContent: FC<PropsWithChildren> = (props) =>
    <h2 className='text-[36px] leading-[42.19px] tracking-[1.5px] text-[#C2C2C2] sm:text-[28px] sm:leading-[32.81px] sm:tracking-[1.5px]'>{props.children}</h2>
