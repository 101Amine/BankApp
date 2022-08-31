import React from 'react'

function Button({styles, text}) {
  return (
    <button 
    type='button'
    className={`py-4 px-6 bg-blue-gradient
        font-poppins font-semibold rounded-xl
        text-primary outline-none ${styles}
    `}
    >

      {text}
    </button>
  )
}

export default Button