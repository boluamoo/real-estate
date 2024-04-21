import React from 'react'
import ContactImage from '../assets/contact.jpg'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import '../styles/Contact.css'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="paddings innerWidth flex items-center justify-between">
        <div className="c-left flex-col flex-1 gap-2">
          <div className="orangeText">Our Contacts</div>
          <div className="primaryText">Easy To Contact Us</div>
          <div className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better
          </div>
          <div className="flexColStart contactModes mt-[2rem] gap-4">
            <div className="flexStart gap-6">
              <div className="flexColCenter mode w-[16rem] p-[1rem] border-[0.8px] border-solid border-[#80808024] rounded gap-4 hover:scale-[1.1] hover:shadow-[contactShadow]">
                <div className="flex items-start w-full gap-6">
                  <div className="flexCenter icon p-[10px] bg-[#eeeeff] ">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="text-[#1f3e72] text-lg font-semibold">
                      Call
                    </span>
                    <span className="secondaryText">0816 336 2775</span>
                  </div>
                </div>
                <div className="flexCenter button w-full bg-[#eeeeff] text-sm font-semibold">
                  Call Now
                </div>
              </div>
              <div className="flexColCenter mode w-[16rem] p-[1rem] border-[0.8px] border-solid border-[#80808024] rounded gap-4 hover:scale-[1.1] hover:shadow-[contactShadow]">
                <div className="flex items-start w-full gap-6">
                  <div className="flexCenter icon p-[10px] bg-[#eeeeff] ">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="text-[#1f3e72] text-lg font-semibold">
                      Chat
                    </span>
                    <span className="secondaryText">0816 336 2775</span>
                  </div>
                </div>
                <div className="flexCenter button w-full bg-[#eeeeff] text-sm font-semibold">
                  Chat Now
                </div>
              </div>
            </div>

            <div className="flexStart gap-6">
              <div className="flexColCenter mode w-[16rem] p-[1rem] border-[0.8px] border-solid border-[#80808024] rounded gap-4 hover:scale-[1.1] hover:shadow-[contactShadow]">
                <div className="flex items-start w-full gap-6">
                  <div className="flexCenter icon p-[10px] bg-[#eeeeff] ">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="text-[#1f3e72] text-lg font-semibold">
                      Video Call
                    </span>
                    <span className="secondaryText">0816 336 2775</span>
                  </div>
                </div>
                <div className="flexCenter button w-full bg-[#eeeeff] text-sm font-semibold">
                  Video Call Now
                </div>
              </div>
              <div className="flexColCenter mode w-[16rem] p-[1rem] border-[0.8px] border-solid border-[#80808024] rounded gap-4 hover:scale-[1.1] hover:shadow-[contactShadow]">
                <div className="flex items-start w-full gap-6">
                  <div className="flexCenter icon p-[10px] bg-[#eeeeff] ">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="text-[#1f3e72] text-lg font-semibold">
                      Message
                    </span>
                    <span className="secondaryText">0816 336 2775</span>
                  </div>
                </div>
                <div className="flexCenter button w-full bg-[#eeeeff] text-sm font-semibold">
                  Message Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right flex-1 w-full">
          <div className="image-container">
            <img src={ContactImage} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
