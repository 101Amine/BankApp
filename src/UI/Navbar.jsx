import React, { useState } from 'react'
import {close, logo, menu } from '../assets'
import {navLinks} from "../constants"

function Navbar() {


  const [toggle, setToggle] =  useState(false)

  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <nav className='
    bg-black
    w-full
    flex
    py-6
    justify-between
    items-center
    navbar
    '>

        <img 
        src={logo}
         alt='wooBank'
         
         className='w-[124px] h[32px]'

         />

        <ul className='
        list-none
        sm:flex hidden 
        justify-end
        items-center
        flex-1
        gap-10
        '>
          {navLinks.map((nav, index) => (
              <li 
              key={`key__${nav.id}`}
              className={`
              font-poppins
              font-normal
              cursor-pointer
              text-[16px]
              text-white
              hover:text-[18px]

              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
              `}
              >

                <a href={`#${nav.id}`} >
                  {nav.title}
                </a>

              </li>
          ))}


        </ul>
         
         
          <div className='
          sm:hidden
          justify-end
          items-center
          flex-1
          flex'>

            <img 
            src={toggle ? close : menu} 
            alt='' 
            className='
            w-[28px] h-[28px]
            object-contain
            cursor-pointer
            '

            onClick={handleToggle}
            />

          </div>


            <div className={`
              ${toggle ? "flex" :"hidden"} 
              p-6 bg-black-gradient	
              absolute top-20 right-0
              mx-4 my-2 min-w[140px] rounded-xl
              sidebar
            `}>

              <ul className='
                list-none
                flex-col 
                justify-end
                items-center
                flex-1
                
        '>
          {navLinks.map((nav, index) => (
              <li 
              key={`key__${nav.id}`}
              className={`
              font-poppins
              font-normal
              cursor-pointer
              text-[16px]
              text-white
              ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
              `}
              >

                <a href={`#${nav.id}`}  >
                  {nav.title}
                </a>

              </li>
          ))}


        </ul>

                

            </div>
    </nav>
  )
}

export default Navbar