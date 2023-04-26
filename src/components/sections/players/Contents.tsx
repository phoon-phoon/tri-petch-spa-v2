import { TitleContent } from "@/components/commons/Title";

export const PlayersContents: Array<JSX.Element> = [
    (
        <article className='pt-[68px] pb-[69px]'>
            <div className='flex flex-row'>
                <div className='mt-[5px] w-[22px] h-[21px] text-[18px] text-[#000] leading-[21.09px] tracking-[1.5px] after:block after:w-[19px] after:h-[5px] after:bg-[#603EBE] after:rounded-[2.5px] after:mt-[4px]'>01</div>
                <div className='ml-[10px]'><TitleContent>CONNECTION</TitleContent></div>
            </div>
            <p className='mt-[21px] w-[571px] text-[20px] leading-[28px]'>Connect with talented athlete directly, you can watch their  skills through video showreels directly from Surface 1.</p>
        </article>
    ),

    (
        <article className='pt-[52px] pb-[102px]'>
            <div className='flex flex-row'>
                <div className='mt-[5px] w-[22px] text-[18px] text-[#000] leading-[21.09px] tracking-[1.5px] after:block after:w-[22px] after:h-[5px] after:bg-[#603EBE] after:rounded-[2.5px] after:mt-[4px]'>02</div>
                <div className='ml-[10px]'><TitleContent>COLLABORATION</TitleContent></div>
            </div>
            <p className='mt-[21px] w-[717px] text-[20px] leading-[28px] tracking-[0.65px]'>Work with recruiter to increase your chances of finding talented athlete.</p>
        </article>
    ),

    (
        <article className='pt-[87px] pb-[66px]'>
            <div className='flex flex-row'>
                <div className='ml-[1px] w-[22px] mt-[5px] text-[18px] text-[#8F6BE8] leading-[21.09px] tracking-[1.5px] after:block after:w-[22px] after:h-[5px] after:bg-[#FFF] after:rounded-[2.5px] after:mt-[4px]'>03</div>
                <div className='ml-[9px]'><TitleContent>GROWTH</TitleContent></div>
            </div>
            <p className='mt-[21px] w-[717px] text-[20px] text-[#FFF] leading-[23.44px] tracking-[0.65px]'>Save your time, recruit proper athlets for your team.</p>
        </article>
    )
]
