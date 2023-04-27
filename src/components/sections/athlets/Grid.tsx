import { FC, PropsWithChildren } from "react"

const AtheletsGrid: FC<PropsWithChildren> = (props) =>
    <div className='grid 
        lg:grid-cols-[minmax(300px,_1008px)_1fr] 
        md:grid-cols-[minmax(291px,_500px)_1fr] 
        sm:grid-cols-[19px_1fr]
    '>
        <div className='col-start-2'>
            <div className="
                xl:w-[912px] 
                lg:w-[800px] lg:min-w-[717px] 
                md:w-[500px] md:min-w-[477px]
            ">
                {props.children}
            </div>
        </div>
    </div>

export default AtheletsGrid