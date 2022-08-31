import React from 'react'
import {quotes} from '../assets'
const FeedbackCard =({content, name, title,img}) => (
 
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px]
        xl:mr-10 sm:mr-3 mr-0 my-5 feedback-card'>

        <img src={quotes} alt='doubleQuotes'
          className='w-[42px] h-[27px] object-contain' />


          <p className='font-poppins font-normal text-[18px] leading-[32px] my-10 text-white'>{content}</p>


          <div className='flex flex-row'>
                <img src={img} alt='avatar' className='w-[48px] h-[48px] rounded-full'/>

                <div className='flex flex-col ml-4'>

                    <h4 className='font-poppins font-normal text-[16px] leading-[24px] text-white'>
                      {name}
                    </h4>
                    <p className='font-poppins font-normal text-[13px] leading-[18px] text-dimWhite'>
                      {title}
                    </p>
                </div>
          </div>

    </div>
  )


export default FeedbackCard