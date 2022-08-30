import React from 'react'
import {discount, robot} from '../assets'
import styles from '../styles'
import GetStarted from './GetStarted'

function Hero() {
  return (
    <section id='home' 
    className={
    `${styles.paddingY} 
    flex
    flex-col 
    `}>

      <div className={`flex 1 ${styles.flexStart}
        flex-col xl:px-0 sm:px-16 px-6 text-white
      `}>

        <div className='flex flex-row items-center py-[6px] px-4
          bg-discount-gradient rounded-[10px] mb=2
        '>

          <img src={discount} alt='discount'
          className='w-[32px] h-[32px]' />
          
          <p className={`${styles.paragraph}  ml-2`}>
          <span className='text-white'>
              20%&nbsp;

          </span>

             Discount for&nbsp;

          <span className='text-white'>
              1 Month&nbsp;

          </span>

          Account

          </p>

        </div>


        <div className='flex flex-row justify-between items-center w-full'>
              <h1 className='flex-1 font-poppins
              font-semibold ss:text-[60px] text-[48px]
              text-white ss:leading-[100px]
              leading-[75px]
              '>
              The Next <br className='sm:block hidden'/>

                <span className='text-gradient'> Generation</span>
                
                <br/>
              


              Payment Method.
              </h1>


              <div className='ss:flex hidden md:mr-4 mr-0'>
                <GetStarted/>
              </div>
        </div>

      </div>

       <h1 className='font-poppins
              font-semibold ss:text-[60px] text-[48px]
              text-white ss:leading-[100px]
              leading-[75px]
              w-full
              '> testr</h1>

    </section>
  )
}

export default Hero