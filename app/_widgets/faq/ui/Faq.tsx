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
    <section className="py-14 max-md:py-7">
      <div className="container">
        <Tagline className="mb-7" variant="main">
          FAQ
        </Tagline>

        <div className="grid grid-cols-2 gap-20 max-lg:grid-cols-1 max-md:gap-14">
          <Title>Frequently asked questions about creatornimbus</Title>

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
    </section>
  )
}

export default Faq
