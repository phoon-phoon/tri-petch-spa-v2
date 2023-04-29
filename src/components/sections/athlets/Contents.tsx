import { TitleContent } from "@/components/commons/Title";
import AtheletsGrid from "./Grid";

export const AthletsContents: Array<JSX.Element> = [
    (
        <article className='lg:pt-[59px] lg:pb-[56px] md:pt-[34px] md:pb-[38px] sm:bg-transparent'>
            <AtheletsGrid>
                <div className='flex flex-row'>
                    <div className='
                        mt-[3px] w-[22px] h-[21px] text-[18px] text-[#000] leading-[21.09px] tracking-[1.5px] sm:text-[14px] sm:leading-[16.41px]
                        after:block after:w-[19px] after:h-[5px] after:bg-[#603EBE] after:rounded-[2.5px] after:mt-[4px] sm:after:w-[15px] sm:after:h-[4px] sm:after:mt-[2px]
                    '>01</div>
                    <div className='ml-[10px] sm:ml-[9px]'><TitleContent>CONNECTION</TitleContent></div>
                </div>
                <p className='
                    mt-[31px] w-[601px] md:w-[457px] text-[20px] leading-[28px] 
                    md:w-[446.2px] md:text-[18px] md:mt-[21px] 
                    sm:text-[15px] sm:leading-[17.58px] sm:tracking-[0.74px] sm:w-[302px] sm:mt-[20px] mts:w-full
                '>Connect with coaches directly, you can ping coaches to view profile.</p>
            </AtheletsGrid>
        </article>
    ),

    (
        <article className='lg:pt-[53px] lg:pb-[51px] md:pt-[30px] md:pb-[30px] bg-[#F5F4F9] sm:bg-transparent'>
            <AtheletsGrid>
                <div className='flex flex-row'>
                    <div className='
                        mt-[3px] w-[22px] text-[18px] text-[#000] leading-[21.09px] tracking-[1.5px] sm:text-[14px] sm:leading-[16.41px]
                        after:block after:w-[22px] after:h-[5px] after:bg-[#603EBE] after:rounded-[2.5px] after:mt-[4px] sm:after:w-[17px] sm:after:h-[4px] sm:after:mt-[2px]
                    '>02</div>
                    <div className='ml-[10px] sm:ml-[9px]'><TitleContent>COLLABORATION</TitleContent></div>
                </div>
                <p className='
                    mt-[21px] w-[717px] md:w-[446.12px] text-[20px] leading-[28px] tracking-[0.93px] 
                    md:w-[446.2px] md:text-[18px] md:tracking-[0.84px]
                    sm:text-[15px] sm:leading-[17.58px] sm:tracking-[0.74px] sm:w-[302px] sm:mt-[20px] mts:w-full
                '>Work with other student athletes to <span className="sm:hidden"> </span>increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</p>
            </AtheletsGrid>
        </article>
    ),

    (
        <article className='lg:pt-[85px] lg:pb-[98px] md:pt-[30px] md:pb-[30px] bg-[#5E3DB3] sm:bg-transparent'>
            <AtheletsGrid>
                <div className='flex flex-row'>
                    <div className='
                        ml-[1px] w-[22px] mt-[3px] text-[18px] text-[#000] leading-[21.09px] tracking-[1.5px] sm:text-[#000] sm:text-[14px] sm:leading-[16.41px]
                        after:block after:w-[22px] after:h-[5px] after:bg-[#FFF] after:rounded-[2.5px] after:mt-[4px] sm:after:w-[17px] sm:after:h-[4px] sm:after:mt-[2px] sm:after:bg-[#603EBE]
                    '>03</div>
                    <div className='ml-[9px] sm:ml-[9px]'><TitleContent>GROWTH</TitleContent></div>
                </div>
                <p className='
                    mt-[21px] w-[717px] text-[20px] text-[#FFF] leading-[28px] tracking-[0.93px] 
                    md:w-[446.2px] md:text-[18px] md:tracking-[0.84px] 
                    sm:text-[#000] sm:text-[15px] sm:leading-[17.58px] sm:tracking-[0.74px] sm:w-[302px] sm:mt-[20px] mts:w-full
                '>Resources and tools for you to get better as a student Athelte.  Access to training classes, tutor sessions, etc </p>
            </AtheletsGrid>
        </article>
    )
]
