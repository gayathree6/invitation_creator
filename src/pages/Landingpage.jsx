import React from 'react'
import invitavideo from '../assets/invitavideo.mp4'
import { Link } from 'react-router-dom'
import v2 from '../assets/v2.mp4'
import 'bootstrap/dist/css/bootstrap.min.css'
import { lightGreen } from '@mui/material/colors'
function Landingpage() {
  return (
    <div>
      <section  style={{
    minHeight: '150vh',
    position: 'relative',
     overflowX:'hidden'
  }}>
        <video src={invitavideo}  autoPlay muted loop playsInline style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            marginTop:'83px',
            position: 'fixed',
            zIndex:-2
            
            
          }}></video>
   <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
       width: '100%',
            height: '100vh',
            objectFit: 'cover',
            marginTop:'83px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: -1,
     
    }}
  ></div>
          <div
    style={{
      position: 'relative',
      zIndex: 2,
      color: 'white',
      textAlign: 'center',
      paddingTop: '35vh',
      
    }}
  >
    <h1
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '60px',
              fontWeight: 'normal',
              lineHeight: 1.1,
              marginBottom: '25px'
            }}
          >
            Make Every Moment
            <br />

            <span
              style={{
                color: '#e4c28a',
                fontStyle: 'italic'
              }}
            >
              Beautifully Invited.
            </span>

          </h1>


          <p
            style={{
              fontSize: '18px',
              maxWidth: '550px',
              margin: '0 auto 30px',
              lineHeight: 1.7,
              color: '#f0f0f0'
            }}
          >
            Create elegant digital invitations for
            life's most special moments.
          </p>


          <Link
           to="/form"
            style={{
              display: 'inline-block',
              padding: '14px 30px',
              borderRadius: '30px',
              backgroundColor: '#7d3043',
              color: 'white',
              textDecoration: 'none',
              fontSize: '15px'
            }}
          >
            Create Invitation
          </Link>

<div id='about' className='row  ' style={{
    marginTop: '150px',
    paddingBottom: '150px'
  }}>
  <div className='col-md-3'></div>
    <div className='col-md-6 border shadow '
    style={{
      backgroundColor: 'rgba(248, 247, 247, 0.4)',
      textAlign:'center',
       border: '2px solid #e4c28a',
    

    }}
  >

    <p
      style={{
        color: 'black',
        fontSize: '14px',
        letterSpacing: '4px',
        marginTop: '140px',
        fontWeight:'bold'
        
      }}
    >
      ABOUT INVITA
    </p>


    <h2
      style={{
        fontFamily: 'Georgia, serif',
        fontSize: '50px',
        fontWeight: 'normal',
        lineHeight: 1.2,
        marginBottom: '30px',
        color: '#9fccf7',
      }}
    >
      Your moments deserve
      <br />

      <span
        style={{
          color: '#1e097a',
          fontStyle: 'italic'
        }}
      >
        a beautiful invitation.
      </span>
    </h2>


    <p
      style={{
        fontSize: '18px',
        lineHeight: 1.8,
        color: '#55153a',
        marginBottom: '20px',
        

      }}
    >
      Invita is a digital invitation creator that helps
      you design, customize, and share beautiful
      invitations for weddings, birthdays, engagements,
      anniversaries, and other special occasions.
    </p>


    <p
      style={{
        fontSize: '18px',
        lineHeight: 1.8,
        color: '#55153a',
        marginBottom: '130px'
      }}
    >
      Personalize your invitation with elegant themes,
      event details, background music, QR codes and
      location information.
    </p>


   

  </div>
  <div className='col-md-3'></div>
        </div>
        </div>
      </section>
      

      
    </div>
  )
}

export default Landingpage