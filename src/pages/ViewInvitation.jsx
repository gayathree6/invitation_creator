import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { QRCodeCanvas } from 'qrcode.react'

function ViewInvitation() {

  const { id } = useParams()

  const [invitationData, setInvitationData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch(`http://localhost:3000/invitations/${id}`)
      .then(response => {

        if (!response.ok) {
          throw new Error('Invitation not found')
        }

        return response.json()

      })
      .then(data => {

        setInvitationData(data)
        setLoading(false)

      })
      .catch(error => {

        console.log(error)
        setLoading(false)

      })

  }, [id])


  if (loading) {

    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h3>Loading invitation...</h3>
      </div>
    )

  }


  if (!invitationData) {

    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff5f8'
        }}
      >
        <h3 style={{ color: '#9b6079' }}>
          Invitation not found
        </h3>
      </div>
    )

  }


  const themes = {

    Floral: {
      background: '#f7f8a7',
      title: '#a6a81f',
      text: '#65660d',
      accent: '#a8aa27'
    },

    Elegant: {
      background: '#eeccf3',
      title: '#9b7b4f',
      text: '#5f574f',
      accent: '#b89b6b'
    },

    Modern: {
      background: '#daebfa',
      title: '#4f7c95',
      text: '#52616b',
      accent: '#6fa3bf'
    },

    Minimal: {
      background: '#ffffff',
      title: '#555555',
      text: '#777777',
      accent: '#888888'
    }

  }


  const selectedTheme =
    themes[invitationData.theme] || themes.Minimal


  const musicFiles = {

    Birthday: '/music/birthday.mp3',
    Celebration: '/music/celebration.mp3',
    Calm: '/music/calm.mp3'

  }


  // This is the actual invitation URL
  const invitationUrl =
    `${window.location.origin}/invitation/${id}/view`


  return (

    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#fff5f8',
        padding: '100px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >

      <div
        style={{
          width: '600px',
          maxWidth: '100%',
          padding: '50px',
          textAlign: 'center',
          backgroundColor: selectedTheme.background,
          borderRadius: '30px',
          boxShadow: '0 10px 40px rgba(190,140,170,0.2)'
        }}
      >

        <p
          style={{
            color: '#c77d9b',
            letterSpacing: '4px',
            fontSize: '14px'
          }}
        >
          YOU ARE INVITED
        </p>


        <h1
          style={{
            fontFamily: 'Georgia, serif',
            color: selectedTheme.title,
            marginTop: '25px'
          }}
        >
          {invitationData.title}
        </h1>


        <p
          style={{
            color: selectedTheme.text,
            fontSize: '20px'
          }}
        >
          {invitationData.eventType}
        </p>


        <hr />


        <p style={{ color: selectedTheme.text }}>

          <CalendarMonthIcon
            sx={{
              color: selectedTheme.accent,
              verticalAlign: 'middle',
              marginRight: '8px'
            }}
          />

          {invitationData.date}

        </p>


        <p style={{ color: selectedTheme.text }}>

          <AccessTimeIcon
            sx={{
              color: selectedTheme.accent,
              verticalAlign: 'middle',
              marginRight: '8px'
            }}
          />

          {invitationData.time}

        </p>


        <p style={{ color: selectedTheme.text }}>

          <LocationOnIcon
            sx={{
              color: selectedTheme.accent,
              verticalAlign: 'middle',
              marginRight: '8px'
            }}
          />

          {invitationData.venue}

        </p>


        <p style={{ color: selectedTheme.text }}>
          {invitationData.address}
        </p>


        {/* MUSIC */}

        {invitationData.music &&
          invitationData.music !== 'None' && (

          <div
            style={{
              marginTop: '25px'
            }}
          >

            <p
              style={{
                color: selectedTheme.accent
              }}
            >

              <MusicNoteIcon
                sx={{
                  verticalAlign: 'middle',
                  marginRight: '6px'
                }}
              />

              {invitationData.music} Music

            </p>


            <audio
              controls
              style={{
                width: '100%',
                maxWidth: '300px'
              }}
            >

              <source
                src={musicFiles[invitationData.music]}
                type="audio/mpeg"
              />

            </audio>

          </div>

        )}


        {/* THEME */}

        <p
          style={{
            marginTop: '30px',
            color: selectedTheme.accent,
            fontStyle: 'italic'
          }}
        >
          {invitationData.theme} Theme
        </p>


        {/* QR CODE */}

        {invitationData.qr && (

          <div
            style={{
              marginTop: '30px'
            }}
          >

            <p
              style={{
                color: '#9b6079',
                fontWeight: 'bold'
              }}
            >
              Scan to view invitation
            </p>


            <QRCodeCanvas
              value={invitationUrl}
              size={150}
            />


          </div>

        )}


        {/* RSVP */}

        {invitationData.rsvp && (

          <button
            style={{
              marginTop: '25px',
              padding: '12px 30px',
              border: 'none',
              borderRadius: '25px',
              backgroundColor: '#d98eaa',
              color: 'white'
            }}
          >
            RSVP
          </button>

        )}

      </div>

    </div>

  )

}

export default ViewInvitation