import { Title } from '@/app/_shared/ui/Title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/_shared/ui/Accordion'

import { faqData } from '../config'
import { Tagline } from '@/app/_shared/ui/Tagline'

const Faq = () => {
  return (
    <section className="faq pt-[55px] pb-[55px]">
      <div className="container">
        <Tagline className="mb-[30px]" variant="main">
          FAQ
        </Tagline>

        <div className="faq__inner grid grid-cols-2 gap-[80px] max-xl:grid-cols-1">
          <div className="faq__left">
            <Title>Frequently asked questions about creatornimbus</Title>
          </div>

          <div className="faq__right -mt-[15px]">
            <Accordion
              defaultValue={faqData[0].question}
              className="accordion"
              type="single"
              collapsible
            >
              {faqData.map(({ question, answer }) => (
                <AccordionItem key={question} value={question}>
                  <AccordionTrigger>{question}</AccordionTrigger>

                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
