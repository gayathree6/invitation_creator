import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { QRCodeCanvas } from 'qrcode.react'
import html2canvas from 'html2canvas'
import DownloadIcon from '@mui/icons-material/Download'
import ShareIcon from '@mui/icons-material/Share'
function InvitationGenerator() {
const invitationRef = useRef(null)
  const location = useLocation()

  const { invitationData } = location.state || {}
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

  if (!invitationData) {
    return <h3>No invitation data found</h3>
  }
const handleDownload = async () => {

  const canvas = await html2canvas(invitationRef.current, {
    scale: 2,
    useCORS: true,
    backgroundColor: selectedTheme.background,
    logging: false,

    onclone: (clonedDocument) => {
      const audioElements =
        clonedDocument.querySelectorAll('audio')

      audioElements.forEach((audio) => {
        audio.style.display = 'none'
      })
    }
  })

  const image = canvas.toDataURL('image/png')

  const link = document.createElement('a')

  link.href = image
  link.download = 'my-invitation.png'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
const handleShare = async () => {

  const shareData = {
    title: invitationData.title || 'My Invitation',
    text: `You are invited to ${invitationData.title}`,
    url: window.location.href
  }

  try {

    if (navigator.share) {

      await navigator.share(shareData)

    } else {

      await navigator.clipboard.writeText(window.location.href)

      alert('Invitation link copied!')

    }

  } catch (error) {

    console.log('Sharing cancelled')

  }
}
  return (
    <div
      style={{
        minHeight: '100vh',
    
    padding: '120px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 3
      }}
    >

      <div
       ref={invitationRef}
        style={{
          width: '600px',
          padding: '50px',
          boxSizing: 'border-box',
          textAlign: 'center',
          backgroundColor: selectedTheme.background,
          borderRadius: '30px',
          boxShadow: '0 10px 40px rgba(190,140,170,0.2)'
        }}
      >

        <p
          style={{
            color: '#c77d9b',
            letterSpacing: '4px'
          }}
        >
          YOU ARE INVITED
        </p>

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            color: selectedTheme.title
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

        <p>
          <CalendarMonthIcon
            sx={{ color: selectedTheme.accent, verticalAlign: 'middle' }}
          />

          {' '}

          {invitationData.date}
        </p>

        <p>
          <AccessTimeIcon
            sx={{color: selectedTheme.accent, verticalAlign: 'middle' }}
          />

          {' '}

          {invitationData.time}
        </p>

        <p>
          <LocationOnIcon
            sx={{color: selectedTheme.accent, verticalAlign: 'middle' }}
          />

          {' '}

          {invitationData.venue}
        </p>

        <p>
          {invitationData.address}
        </p>

         {invitationData.music &&
  invitationData.music !== 'None' && (

    <div
      style={{
        marginTop: '20px',
        textAlign: 'center'
      }}
    >

      <p
        style={{
          color: selectedTheme.accent,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}
      >

        <MusicNoteIcon
          sx={{
            color: selectedTheme.accent
          }}
        />

        {invitationData.music} Music

      </p>

      <audio
        key={invitationData.music}
        controls
        preload="auto"
        style={{
          width: '100%',
          maxWidth: '300px'
        }}
      >

        <source
          src={musicFiles[invitationData.music]}
          type="audio/mpeg"
        />

        Your browser does not support audio.

      </audio>

    </div>

)}


        

   
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
  value={`https://your-invita-app.vercel.app/invitation/${invitationData.id}/view`}
  size={150}
/>

  </div>

)}

      </div>
       <button
        onClick={handleDownload}
        style={{
          marginTop: '25px',
          padding: '12px 25px',
          border: 'none',
          borderRadius: '25px',
          backgroundColor: '#d98eaa',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        <DownloadIcon
          style={{
            verticalAlign: 'middle',
            marginRight: '6px'
          }}
        />

        Download Invitation
      </button>

{/* SHARE */}

  <button
    onClick={handleShare}
    style={{
      marginTop:'20px',
      padding: '12px 25px',
      border: 'none',
      borderRadius: '25px',
      backgroundColor: '#a99acb',
      color: 'white',
      cursor: 'pointer'
    }}
  >

    <ShareIcon
      style={{
        verticalAlign: 'middle',
        marginRight: '6px'
      }}
    />

    Share

  </button>
  

    </div>
    
  )
}


export default InvitationGenerator