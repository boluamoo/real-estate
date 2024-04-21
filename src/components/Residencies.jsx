import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import { data } from '../helpers/slider'
import { sliderSettings } from '../helpers/common'

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container relative ">
        <div className="r-head flex-col justify-start mb-[2rem] ">
          <div className="orangeText">Best Choices</div>
          <div className="primaryText">Popular Residencies</div>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="p-[1rem] rounded-[10px] max-w-max m-auto transition-transform ease-in delay-3000 hover:scale-[1.025] cursor-pointer hover:bg-residenceGradient hover:shadow-residenceShadow">
                <img src={card.img} alt="" className="w-full max-w-[15rem]" />
                <span className="secondaryText text-[1.2rem] font-semibold">
                  <span className="text-orange-400">$</span>
                  <span>{card.price}</span>
                </span>
                <div className="primaryText text-[1.5rem]">{card.name}</div>
                <div className="secondaryText text-[0.7rem] w-[15rem]">
                  {card.detail}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Residencies

const SliderButtons = () => {
  const swiper = useSwiper()
  return (
    <div className="r-buttons absolute gap-[1rem] flex justify-center top-[0] right-0 z-50">
      <button
        onClick={() => swiper.slidePrev()}
        className="text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-400 border-0 rounded-sm bg-buttonBackground cursor-pointer"
      >
        &lt;
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="text-[1.2rem] py-[0.2rem] px-[0.8rem] text-blue-400 border-0 rounded-sm bg-white cursor-pointer shadow-buttonShadow"
      >
        &gt;
      </button>
    </div>
  )
}
