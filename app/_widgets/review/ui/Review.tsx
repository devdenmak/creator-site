import Image from 'next/image'
import ImageLorenzo from '../images/Lorenzo.jpg'

const Review = () => {
  return (
    <section className="review overflow-hidden">
      <div className="container">
        <figure className="review__figure m-0 pt-[55px] pb-[55px]">
          <blockquote className="review__text m-0 relative z-0 max-w-[1104px] text-[#77899D] text-[26px] italic font-bold leading-[1.1] tracking-[0.78px] indent-[74px] mb-[40px] p-0">
            <span className="review__quote mt-[-51px] ml-[-86px] block absolute top-0 left-0 text-foreground-third font-headings text-[169px] leading-[172px] font-bold tracking-[5px]">
              “
            </span>
            <span>
              <em className="text-[#CADBEF]">CreatorNimbus</em> has streamlined our operations
              enormously and saved us tons of time on manual data entry. Working with brands has
              never been easier than it is now.
            </span>
          </blockquote>

          <figcaption className="review__author flex">
            <div className="review__author-avatar text-[0] leading-[0] inline-flex rounded-xl overflow-hidden flex-[0_0_auto] mr-[12px]">
              <Image width={42} height={42} src={ImageLorenzo} alt="Lorenzo" />
            </div>

            <div className="review__author-text flex flex-col mt-[2px]">
              <span className="review__author-name text-[#DEE7F1] text-[16px] font-bold leading-[127%]">
                Lorenzo Andre
              </span>
              <span className="review__author-role uppercase text-[#8c9cae] text-[14px] italic font-bold leading-[127%] mt-[2px]">
                ceo & founder <span className="text-[#DEE7F1]">kaizen talent</span>
              </span>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Review
