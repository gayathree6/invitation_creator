import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import v2 from '../assets/v2.mp4'

function Footer() {
  return (
    <section
      style={{
        height: '400px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor:'beige',
       
      }}
    >


     

      
      <div
        className="text-light text-center d-flex align-items-center justify-content-center"
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%'
          
        }}
      >

        <div>

          <h3 style={{ color:'brown'}}>Contact Us</h3>

          <h5 className="mt-3"style={{ color:'brown'}}>
            <MdEmail style={{ marginRight: '8px' }} />
            invitabuilder@gmail.com
          </h5>

          <h5 className="mt-3"style={{ color:'brown'}}>
            <FaPhoneAlt style={{ marginRight: '8px' }} />
            1234567890
          </h5>

          <h3 className="mt-4"style={{ color:'brown'}}>
            Connect with Us
          </h3>

          <p className="mt-3"style={{ color:'brown'}}>
            Designed & Built with React
          </p>

        </div>

      </div>

    </section>
  )
}

export default Footer