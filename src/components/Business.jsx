import React from 'react'
import {features } from "../constants"
import Button from '../UI/Button'
import styles, {layout} from '../styles'


const FeatureCard = ({ icon, title, content, index }) => (

   <div className={`flex flex-row p-6 rounded-[20px] 
   ${index !== features.length - 1 ? 'mb-6' : 'mb-0'}`}>  
      <div className={`w-[64px] h-[64px] rounded-full
      
      ${styles.flexCenter} bg-dimBlue`}>
          <img src={icon} alt='icon' 
          className='w-[50%] h-[50%] object-contain'/>
      </div>

      <div className='flex-1 flex flex-col ml-3'>
            <h4 className='font-poppins font-semibold
                  text-white text-[18px] leading-[23px]
            ' >
              {title}
            </h4>

            <p className='font-poppins font-norman
                  text-dimWhite text-[16px] leading-[24px]
            ' >
              {content}
            </p>
      </div>
   </div>
  
)


function Business() {
  return (
    <section id='features' className={layout.section}>
          <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}> You do the business <br className='sm:block hidden'/>  We'll handle the money. </h2>

              <p className={`${styles.paragraph} max-w-[470px] mt-5` }>
                Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                We examine annual percentage rates, annual fees.
              </p>

              <Button styles="mt-10" text={"Get Started"}/>
          </div>


          <div className={`${layout.sectionImg}`}> 
              {features.map((feature,index) => (
                <FeatureCard key={`feature_key__${index}`} 
                  {...feature} index={index}
                
                />
              ))}
          </div>

    </section>
  )
}

export default Business