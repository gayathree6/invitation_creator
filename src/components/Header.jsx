import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logo.png';

import { Tooltip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
const navigate = useNavigate()
  const projectIntro =
    'Invita is a digital invitation creator that helps you design, customize, and share beautiful invitations for special occasions such as weddings, birthdays, engagements, anniversaries, and more. Create personalized invitations with themes, music, QR codes, event details, location, and RSVP options—all in one place.'

  return (

    <Box sx={{ flexGrow: 1 }}>

      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'beige',
          color: 'white'
        }}
      >

        <Toolbar>

          {/* LOGO */}

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

            <img
              src={logo}
              alt=""
              width={50}
            />

          </IconButton>


          {/* TITLE */}

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              fontSize: '28px',
              fontFamily: "Dancing Script",
              color: "brown"
            }}
          >

            INVITA

          </Typography>


         {/* HISTORY BUTTON */}

<Tooltip title="View your invitations and edit them">

  <Link
    to="/history"
    style={{
      textDecoration: 'none'
    }}
  >

    <Button
      color="inherit"
      sx={{
        fontWeight: 'bold',
        fontFamily: "Dancing Script",
        color: "brown"
      }}
    >
      HISTORY
    </Button>

  </Link>

</Tooltip>

          {/* ABOUT US */}

          <a
            href="#about"
            style={{
              textDecoration: 'none'
            }}
          >

           {/* ABOUT US */}

<Tooltip title={projectIntro}>

  <Button
    color="inherit"
    onClick={() => {
      navigate('/')

      setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({
          behavior: 'smooth'
        })
      }, 100)
    }}
    sx={{
      fontWeight: 'bold',
      fontFamily: "Dancing Script",
      color: "brown"
    }}
  >
    ABOUT US
  </Button>

</Tooltip>

          </a>

        </Toolbar>

      </AppBar>

    </Box>
  );
}

export default Header