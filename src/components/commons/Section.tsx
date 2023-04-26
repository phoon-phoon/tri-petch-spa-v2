import { FC, PropsWithChildren } from 'react'

const Section: FC<PropsWithChildren> = (props) =>
    <section className='flex justify-center'>
        {props.children}
    </section>

export default Section