import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import valueImage from '../assets/value.png'
import data from '../helpers/accordion'
import '../styles/Accordion.css'

const Value = () => {
  const [className, setClassName] = useState(null) 
  return (
    <section className="v-wrapper ">
      <div className="paddings innerWidth flex justify-center items-center v-container flex-wrap">
        {/* VALUE LEFT*/}
        <div className="v-left flex-1">
          <div className="border-[8px] border-solid border-[#e8e8e8ed] w-[30rem] h-[35rem] rounded-top-[3rem] rounded-t-[15rem] overflow-hidden">
            <img src={valueImage} alt="" className="w-full h-full" />
          </div>
        </div>

        {/* VALUE RIGHT */}
        <div className="flex flex-col items-start v-right flex-1 gap-2">
          <div className="orangeText">Our Value</div>
          <div className="primaryText">Value We Give To You</div>
          <div className="secondaryText">
            We are always ready to help by providing the best services for you.{' '}
            <br />
            We believe a good place to live can make your life better
          </div>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex bg-white p-4 w-full justify-between items-center cursor-pointer">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName('expanded')
                            : setClassName('collapsed')
                        }
                      </AccordionItemState>
                      <div className="p-[10px] bg-[#eeeeff] icon">
                        {item.icon}
                      </div>
                      <div className="primaryText text-[1.1rem]">
                        {item.heading}
                      </div>
                      <div className="p-[10px] bg-[#eeeeff] icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value
