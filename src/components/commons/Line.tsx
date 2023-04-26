import { FC } from 'react'

interface LinePropsType {
    stoke?: number
    stokecolor?: string
}

const Line: FC<LinePropsType> = (props) =>
    <svg className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <line
            style={{
                stroke: props.stokecolor ?? '#936EEA',
                strokeWidth: props.stoke ?? 6
            }}
            x1='5' y1={`calc(100% - 5px)`}
            x2={`calc(100% - 5px)`} y2='5'
        />
    </svg>

export default Line