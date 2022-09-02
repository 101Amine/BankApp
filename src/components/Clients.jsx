import React from 'react'
import styles, {layout} from '../styles'
import { clients } from '../constants'


function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4 text-white`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client, index) => (
                <div id={`clientKey__${index}`} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
                  <img src={client.logo} alt='clientLogos' className='sm:w-[192px] w-[100px] object-contain'/>
                </div>
            ))} 
        </div>

    </section>
  )
}

export default Clients