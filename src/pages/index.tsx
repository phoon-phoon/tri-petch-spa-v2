import Section from '@/components/commons/Section'

import { Title } from '@/components/commons/Title'

import MainContainer from '@/components/layouts/Main'
import Wrapper from '@/components/layouts/Wrapper'

import { AthletsContents } from '@/components/sections/athlets/Contents'
import AthletsSlider from '@/components/sections/athlets/Slider'
import AthletsImage from '@/components/sections/athlets/Image'

import { PlayersContents } from '@/components/sections/players/Contents'
import PlayersSlider from '@/components/sections/players/Slider'
import PlayersImage from '@/components/sections/players/Image'

export default function LandingPage() {

  return (
    <MainContainer>
      {/* Athlets Section */}
      <div className='lg:h-[898px] md:h-[819px] sm:h-[580px]'>
        <Section>
          <Wrapper>
            <div className='flex flex-row sm:flex-col'>
              <div className='relative grow'>
                <AthletsImage />
              </div>
              <div className='flex-none xl:w-[912px] lg:w-[1000px]'>
                <div className='lg:mt-[24px] md:mt-[80px] sm:mt-0'>
                  <Title>ATHLETS</Title>
                </div>

                <div className='sm:hidden'>
                  {AthletsContents.map(AthletsContent => AthletsContent)}
                </div>
                <div className='sm:mt-[296px] md:hidden lg:hidden'>
                  <AthletsSlider />
                </div>
              </div>
            </div>
          </Wrapper>
        </Section>
      </div>

      {/* Players Section */}
      <div className='lg:h-[976px] md:h-[790px] sm:h-[553px]'>
        <Section>
          <Wrapper>
            <div className='flex flex-row sm:flex-col'>
              <div className='flex-none xl:w-[1039px] lg:pl-[322px] lg:w-[1000px]'>
                <div className='lg:mt-[124px] md:mt-[52px] sm:mt-[19px] -ml-[1px]'>
                  <Title>PLAYERS</Title>
                </div>

                <div className='sm:hidden'>
                  {PlayersContents.map(PlayersContent => PlayersContent)}
                </div>
                <div className='md:hidden lg:hidden'>
                  <PlayersSlider />
                </div>
              </div>
              <div className='relative grow'>
                {/* <PlayersImage />*/}
                <PlayersImage />
              </div>
            </div>
          </Wrapper>
        </Section>
      </div>
    </MainContainer>
  )
}
