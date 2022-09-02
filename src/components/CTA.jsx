import React from 'react'
import styles , {layout} from '../styles'
import Button from '../UI/Button'

const CTA = () => (

    // <section className={`${layout.section} text-white p-12 justify-between bg-black__gradient` }>
    //     <div className={`${layout}`}>
    //         <h2 className={`${styles.heading2} text-[18px] mb-5`}> Let's try our service now!</h2>

    //         <p className={`${styles.paragraph} max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    //     </div>

    //     <div className={`${layout} self-center pr-[60px]`}>
    //         <Button text={'Get started'} styles={`flex  `}/>
    //     </div>


    // </section>


    <section className={` ${styles.marginY} ${styles.padding} ${styles.flexCenter}  bg-black-gradient-2 rounded-[20px] box-shadow`}>
    
        <div className='flex-1 flex flex-col'>
          <h2 className={`${styles.heading2}`}>
              Let's try our service now!
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
          </div>


          <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button text={'Get started '} styles={''} />
          </div>

    </section>
)



export default CTA