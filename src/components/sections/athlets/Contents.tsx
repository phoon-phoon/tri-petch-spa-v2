import { TitleContent } from "@/components/commons/Title";

export const AthletsContents: Array<JSX.Element> = [
    (
        <article className='lg:pt-[59px] lg:pb-[56px] md:pt-[34px] md:pb-[38px]'>
            <div className='flex flex-row'>
                <div className='mt-[5px] w-[22px] h-[21px] text-[18px] text-[#000] leading-[21.09px] tracking-[1.5px] after:block after:w-[19px] after:h-[5px] after:bg-[#603EBE] after:rounded-[2.5px] after:mt-[4px]'>01</div>
                <div className='ml-[10px]'><TitleContent>CONNECTION</TitleContent></div>
            </div>
            <p className='mt-[31px] w-[601px] md:w-[457px] text-[20px] leading-[28px] md:w-[446.2px] md:text-[18px] md:mt-[21px]'>Connect with coaches directly, you can ping coaches to view profile.</p>
        </article>
    ),

    (
        <article className='lg:pt-[53px] lg:pb-[51px] md:pt-[30px] md:pb-[30px]'>
            <div className='flex flex-row'>
                <div className='mt-[5px] w-[22px] text-[18px] text-[#000] leading-[21.09px] tracking-[1.5px] after:block after:w-[22px] after:h-[5px] after:bg-[#603EBE] after:rounded-[2.5px] after:mt-[4px]'>02</div>
                <div className='ml-[10px]'><TitleContent>COLLABORATION</TitleContent></div>
            </div>
            <p className='mt-[21px] w-[717px] md:w-[446.12px] text-[20px] leading-[28px] tracking-[0.93px] md:w-[446.2px] md:text-[18px] md:tracking-[0.84px]'>Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</p>
        </article>
    ),

    (
        <article className='lg:pt-[85px] lg:pb-[98px] md:pt-[30px] md:pb-[30px]'>
            <div className='flex flex-row'>
                <div className='ml-[1px] w-[22px] mt-[5px] text-[18px] text-[#000] leading-[21.09px] tracking-[1.5px] after:block after:w-[22px] after:h-[5px] after:bg-[#FFF] after:rounded-[2.5px] after:mt-[4px]'>03</div>
                <div className='ml-[9px]'><TitleContent>GROWTH</TitleContent></div>
            </div>
            <p className='mt-[21px] w-[717px] text-[20px] text-[#FFF] leading-[28px] tracking-[0.93px] md:w-[446.2px] md:text-[18px] md:tracking-[0.84px]'>Resources and tools for you to get better as a student Athelte.  Access to training classes, tutor sessions, etc </p>
        </article>
    )
]
