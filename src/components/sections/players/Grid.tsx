import { FC, PropsWithChildren } from "react"

const PlayersGrid: FC<PropsWithChildren> = (props) =>
    <div className='grid 
        lg:grid-cols-[1fr_minmax(581px,_881px)] 
        md:grid-cols-[1fr_minmax(100px,_303px)] 
        sm:grid-cols-[17px_1fr]
    '>
        <div className='col-start-1 sm:col-start-2'>
            <div className="
                xl:w-[1039px] xl:pl-[322px] 
                lg:w-[700px] lg:pl-[80px] lg:min-w-[700px] 
                md:w-[465px] md:pl-[33px] md:min-w-[465px] 
            ">
                {props.children}
            </div>
        </div>
    </div>

export default PlayersGrid