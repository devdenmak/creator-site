import { Text } from '@/app/_shared/ui/Text'

import Image from 'next/image'
import FirstLogosSet from '../images/first-set.svg'
import SecondLogosSet from '../images/second-set.svg'

const Clients = () => {
  return (
    <section id="customers" className="clients">
      <div className="container">
        <div className="clients__inner flex items-end flex-wrap gap-x-[80px] gap-y-0 pt-[80px] pb-[80px] border-b-[1px] border-b-[rgba(69,81,94,0.27)] max-xl:flex-col">
          <div className="clients__left w-[calc(30%-40px)] max-xl:w-full">
            <h2 className="clients__count mt-0 mb-[10px] text-foreground-eight font-headings text-[80px] font-bold leading-[1.1] tracking-[2.4px] uppercase">
              260+
            </h2>

            <Text className="text-[#77899D]">
              Agencies already use CreatorNimbus to transform the way they work and grow within the
              industry.
            </Text>
          </div>

          <div className="clients__right min-w-0 w-[calc(70%-40px)]  max-xl:w-full">
            <div className="clients__logos min-w-0 flex flex-wrap items-center gap-x-[40px] gap-y-[25px] mb-[25px]">
              <Image src={FirstLogosSet} alt="apollo, newgen, nogooo" />
              <Image src={SecondLogosSet} alt="discrupt, kaizen, amg" />
            </div>

            <Text className="text-[#77899D]">
              CreatorNimbus is trusted by industry-leading influencer management agencies. We are
              proud to be a powerhouse driving the marketing of tomorrow, providing tools that
              empower seamless collaboration and innovation.
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
