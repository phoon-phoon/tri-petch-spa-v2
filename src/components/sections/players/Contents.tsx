import { TitleContent } from "@/components/commons/Title";
import PlayersGrid from "./Grid";

export const PlayersContents: Array<JSX.Element> = [
    (
        <article className='lg:pt-[68px] lg:pb-[69px] md:pt-[34px] md:pb-[10px]'>
            <PlayersGrid>
                <div className='flex flex-row'>
                    <div className='
                        mt-[3px] w-[22px] h-[21px] text-[18px] text-[#000] leading-[21.09px] tracking-[1.5px] sm:text-[14px] sm:leading-[16.41px]
                        after:block after:w-[19px] after:h-[5px] after:bg-[#603EBE] after:rounded-[2.5px] after:mt-[4px] sm:after:w-[15px] sm:after:h-[4px] sm:after:mt-[2px]
                    '>01</div>
                    <div className='ml-[10px] sm:ml-[9px]'><TitleContent>CONNECTION</TitleContent></div>
                </div>
                <p className='
                    mt-[21px] w-[571px] text-[20px] leading-[28px]
                    md:text-[18px] md:w-[432px]
                    sm:text-[#000] sm:text-[15px] sm:leading-[17.58px] sm:tracking-[0.74px] sm:w-[283px] sm:mt-[20px] mts:w-full
                '>Connect with talented athlete directly, you can watch their  skills through video showreels directly from Surface 1.</p>
            </PlayersGrid>
        </article>
    ),

    (
        <article className='lg:pt-[52px] lg:pb-[102px] md:pt-[51px] md:pb-[65px] bg-[#F5F4F9] sm:bg-transparent'>
            <PlayersGrid>
                <div className='flex flex-row'>
                    <div className='
                        mt-[3px] w-[22px] text-[18px] text-[#000] leading-[21.09px] tracking-[1.5px] sm:text-[14px] sm:leading-[16.41px]
                        after:block after:w-[22px] after:h-[5px] after:bg-[#603EBE] after:rounded-[2.5px] after:mt-[4px] sm:after:w-[17px] sm:after:h-[4px] sm:after:mt-[2px]
                    '>02</div>
                    <div className='ml-[10px] sm:ml-[9px]'><TitleContent>COLLABORATION</TitleContent></div>
                </div>
                <p className='
                    mt-[21px] w-[717px] text-[20px] leading-[28px] tracking-[0.65px]
                    md:text-[18px] md:w-[432px] md:tracking-[0.93px]
                    sm:text-[#000] sm:text-[15px] sm:leading-[17.58px] sm:tracking-[0.74px] sm:w-[283px] sm:mt-[20px] mts:w-full
                '>Work with recruiter to increase your chances of finding talented athlete.</p>
            </PlayersGrid>
        </article>
    ),

    (
        <article className='lg:pt-[87px] lg:pb-[66px] md:pt-[60px] md:pb-[28px] bg-[#090C35] sm:bg-transparent'>
            <PlayersGrid>
                <div className='flex flex-row'>
                    <div className='
                        lg:ml-[1px] w-[22px] mt-[3px] text-[18px] text-[#8F6BE8] leading-[21.09px] tracking-[1.5px] sm:text-[#000] sm:text-[14px] sm:leading-[16.41px] 
                        after:block after:w-[22px] after:h-[5px] after:bg-[#FFF] after:rounded-[2.5px] after:mt-[4px] sm:after:w-[17px] sm:after:h-[4px] sm:after:mt-[2px] sm:after:bg-[#603EBE]
                    '>03</div>
                    <div className='ml-[10px] sm:ml-[9px]'><TitleContent>GROWTH</TitleContent></div>
                </div>
                <p className='
                    mt-[21px] w-[717px] text-[20px] text-[#FFF] leading-[23.44px] tracking-[0.65px]
                    md:text-[18px] md:w-[455px] md:tracking-[0.93px]
                    sm:text-[#000] sm:text-[15px] sm:leading-[17.58px] sm:tracking-[0.74px] sm:w-[283px] sm:mt-[20px] mts:w-full
                '>Save your time, recruit proper athlets for your team.</p>
            </PlayersGrid>
        </article>
    )
]
