import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MusicNoteIcon from '@mui/icons-material/MusicNote'


function Preview({ invitationData }) {
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

  return (
    <div
      style={{
       backgroundColor: selectedTheme.background,
        border: '1px solid #f1d9e5',
        borderRadius: '25px',
        padding: '35px',
        textAlign: 'center',
        minHeight: '500px',
        boxShadow: '0 10px 30px rgba(190, 140, 170, 0.15)'
      }}
    >

      <p
        style={{
          color: '#c77d9b',
          letterSpacing: '3px',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        YOU ARE INVITED
      </p>


      <h2
        style={{
          color: selectedTheme.title,
          fontFamily: 'Georgia, serif',
          fontSize: '35px',
          marginTop: '30px'
        }}
      >
        {invitationData.title || 'Your Invitation Title'}
      </h2>


      <p
        style={{
          color: selectedTheme.text,
          fontSize: '18px',
          marginTop: '25px'
        }}
      >
        {invitationData.eventType || 'Your Event'}
      </p>


      <div
        style={{
          marginTop: '35px',
          color: '#76566a'
        }}
      >

       <p
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  }}
>
  <CalendarMonthIcon
    sx={{
       color: selectedTheme.accent,
      fontSize: '22px'
    }}
  />

  {invitationData.date || 'Event Date'}
</p>


<p
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  }}
>
  <AccessTimeIcon
    sx={{
       color: selectedTheme.accent,
      fontSize: '22px'
    }}
  />

  {invitationData.time || 'Event Time'}
</p>


<p
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  }}
>
  <LocationOnIcon
    sx={{
       color: selectedTheme.accent,
      fontSize: '22px'
    }}
  />

  {invitationData.venue || 'Event Venue'}
</p>

        <p>
          {invitationData.address || 'Event Address'}
        </p>

      </div>


      


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


      

    </div>
  )
}

export default Preview