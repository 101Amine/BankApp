import React from 'react'
import {footerLinks, socialMedia} from '../constants'
import styles from '../styles'
import {logo} from '../assets'

const Footer = () => (
    <section className={`${styles.flexCenter} pt-10 pb-2 flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

          <div className={`${styles.flexStart} md-flex-row flex-col mb-8`}>
              <div className='flex-1 flex flex-col justify-start mr-10'>
                <img
                src={logo}
                alt='hoobank'
                className='w-[266px] h-[72px] object-contain'
                />

                <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>

                  A new way to make the payments easy, reliable and secure.
                </p>
              </div>

          </div>



          <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>

                {footerLinks.map((footerLink,index) => (
                  <div 
                  key={`footerKey__${index}`} 
                  className='flex flex-col ss:my-0 my-4 min-w-[150px]'
                  >
                    <h4 className='font-poppins font-medium text-white 
                    text-[18px] leading-[27px] 
                    '>
                      {footerLink.title}
                    </h4>

                    <ul className='list-none mt-4'>
                      {footerLink.links.map( (link, index ) => (
                        <li key={`linkKey__${index}`}
                        className={`font-poppins font-normal 
                        text-[16px] leading-[24px] text-dimWhite
                        hover:text-secondary cursor-pointer 

                        ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}
                        `}> {link.name}</li>
                      ))}
                    </ul>

                    </div>
                ))}
          </div>
      </div>
      
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]'>
            <p className='font-poppins font-normal text-center
                            text-[16px] leading-[24px] text-white
                          '>
                            2022 HooBank. All Rights Reserved.

            </p>


          <div className={`flex flex-row mt-6 mb-5 ${styles.flexCenter}`}>
                  {socialMedia.map((social,index) => (
                    <img 
                    key={`socialKey__${social.id}`}
                    src={social.icon}
                    alt={social.id}
                    className={`w-[21px] h-[21px] object-contain cursor-pointer
                    ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}
                    `}
                    >

                      </img>
                  ))}
          </div>

    </div>

    </section>
) 

export default Footer