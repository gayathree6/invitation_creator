import React, { useState } from 'react'
import Steps from '../components/Steps'
import Preview from '../components/InvitationPreview'

function InvitationForm() {

  const [invitationData, setInvitationData] = useState({
    eventType: '',
    title: '',
    date: '',
    time: '',
    venue: '',
    address: '',
    theme: '',
    music: '',
    
    qr: false
  })

  // Check whether user has entered anything
  const hasData =
    invitationData.eventType ||
    invitationData.title ||
    invitationData.date ||
    invitationData.time ||
    invitationData.venue ||
    invitationData.address ||
    invitationData.theme ||
    invitationData.music ||
    
    invitationData.qr

  return (

    <div
      className="container"
      style={{
        marginTop: '110px',
        paddingBottom: '50px'
      }}
    >

      <h2
        className="text-center mb-5"
        style={{
          fontFamily: 'Georgia, serif',
          color: '#9b6079'
        }}
      >
        Create Your Invitation
      </h2>


      <div className="row g-5">

        {/* ================= FORM ================= */}

        <div className={hasData ? "col-md-7" : "col-md-8 mx-auto"}>

          <Steps
            invitationData={invitationData}
            setInvitationData={setInvitationData}
          />

        </div>


        {/* ================= PREVIEW ================= */}

        {hasData && (

          <div className="col-md-5">

            <div
              style={{
                position: 'sticky',
                top: '110px'
              }}
            >

              <h4
                className="text-center mb-3"
                style={{
                  color: '#9b6079'
                }}
              >
                Preview
              </h4>

              <Preview
                invitationData={invitationData}
              />

            </div>

          </div>

        )}

      </div>

    </div>
  )
}

export default InvitationForm