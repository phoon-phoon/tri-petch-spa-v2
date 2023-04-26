import { FC } from 'react'

import Image, { ImageProps } from 'next/image'

export interface CustomImagePropsType {
    image: ImageProps
    background?: JSX.Element
}

const CustomImage: FC<CustomImagePropsType> = (props) =>
    <>
        {props.background ? <div className='relative w-full h-full z-0 [&>div]:absolute [&>div>div]:relative'>{props.background}</div> : null}
        <Image className='absolute w-full h-full top-0 left-0 z-1 max-w-none' {...props.image} />
    </>

export default CustomImage