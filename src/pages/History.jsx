import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import VisibilityIcon from '@mui/icons-material/Visibility'

function History() {

  const [invitations, setInvitations] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  // ================= GET INVITATIONS =================

  const getInvitations = async () => {

    try {

      const response = await fetch(
        'http://localhost:3000/invitations'
      )

      const data = await response.json()

      setInvitations(data)

    } catch (error) {

      console.log(error)

      alert('Unable to load invitations')

    } finally {

      setLoading(false)

    }

  }

  useEffect(() => {

    getInvitations()

  }, [])


  // ================= DELETE =================

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this invitation?'
    )

    if (!confirmDelete) {
      return
    }

    try {

      await fetch(
        `http://localhost:3000/invitations/${id}`,
        {
          method: 'DELETE'
        }
      )

      // Remove deleted invitation from screen
      setInvitations(
        invitations.filter(
          invitation => invitation.id !== id
        )
      )

    } catch (error) {

      console.log(error)

      alert('Unable to delete invitation')

    }

  }


  // ================= LOADING =================

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

        <h4>Loading invitations...</h4>

      </div>
    )

  }


  return (

    <div
      style={{
        minHeight: '100vh',
        padding: '120px 30px',
        background: '#fff8fc'
      }}
    >

      {/* ================= TITLE ================= */}

      <div
        style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}
      >

        <h1
          style={{
            fontFamily: 'Georgia, serif',
            color: '#9b6079'
          }}
        >
          My Invitations
        </h1>

        <p
          style={{
            color: '#76566a'
          }}
        >
          View and manage your saved invitations
        </p>

      </div>


      {/* ================= NO INVITATIONS ================= */}

      {invitations.length === 0 ? (

        <div
          style={{
            textAlign: 'center',
            marginTop: '80px'
          }}
        >

          <h4>No invitations found</h4>

          <button
            onClick={() => navigate('/steps')}
            style={{
              marginTop: '20px',
              padding: '12px 25px',
              border: 'none',
              borderRadius: '25px',
              background: '#d98eaa',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Create Invitation
          </button>

        </div>

      ) : (

        <div
          style={{
            maxWidth: '1000px',
            margin: 'auto'
          }}
        >

          {invitations.map((invitation) => (

            <div
              key={invitation.id}
              style={{
                background: 'white',
                border: '1px solid #f1d9e5',
                borderRadius: '20px',
                padding: '25px',
                marginBottom: '20px',
                boxShadow:
                  '0 8px 25px rgba(190,140,170,0.12)'
              }}
            >

              {/* INVITATION DETAILS */}

              <div>

                <h3
                  style={{
                    color: '#9b6079',
                    fontFamily: 'Georgia, serif',
                    marginBottom: '10px'
                  }}
                >
                  {invitation.title}
                </h3>

                <p
                  style={{
                    marginBottom: '5px'
                  }}
                >
                  <strong>Event:</strong>{' '}
                  {invitation.eventType}
                </p>

                <p
                  style={{
                    marginBottom: '5px'
                  }}
                >
                  <strong>Date:</strong>{' '}
                  {invitation.date}
                </p>

                <p
                  style={{
                    marginBottom: '5px'
                  }}
                >
                  <strong>Time:</strong>{' '}
                  {invitation.time}
                </p>

                <p
                  style={{
                    marginBottom: '5px'
                  }}
                >
                  <strong>Venue:</strong>{' '}
                  {invitation.venue}
                </p>

                <p
                  style={{
                    marginBottom: '5px'
                  }}
                >
                  <strong>Theme:</strong>{' '}
                  {invitation.theme}
                </p>

                <p>
                  <strong>Music:</strong>{' '}
                  {invitation.music === 'None'
                    ? 'No Music'
                    : invitation.music}
                </p>

              </div>


              {/* BUTTONS */}

              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap',
                  marginTop: '20px'
                }}
              >

                {/* VIEW */}

                <button
                  onClick={() =>
                    navigate(
                      `/invitation/${invitation.id}/view`,
                      {
                        state: {
                          invitationData: invitation
                        }
                      }
                    )
                  }
                  style={{
                    padding: '10px 18px',
                    border: 'none',
                    borderRadius: '20px',
                    background: '#8aa7d9',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >

                  <VisibilityIcon
                    style={{
                      fontSize: '18px',
                      verticalAlign: 'middle',
                      marginRight: '5px'
                    }}
                  />

                  View

                </button>


                {/* EDIT */}

                <button
                  onClick={() =>
                    navigate(
                      `/edit/${invitation.id}`
                    )
                  }
                  style={{
                    padding: '10px 18px',
                    border: 'none',
                    borderRadius: '20px',
                    background: '#a99acb',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >

                  <EditIcon
                    style={{
                      fontSize: '18px',
                      verticalAlign: 'middle',
                      marginRight: '5px'
                    }}
                  />

                  Edit

                </button>


                {/* DELETE */}

                <button
                  onClick={() =>
                    handleDelete(invitation.id)
                  }
                  style={{
                    padding: '10px 18px',
                    border: 'none',
                    borderRadius: '20px',
                    background: '#d98eaa',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >

                  <DeleteIcon
                    style={{
                      fontSize: '18px',
                      verticalAlign: 'middle',
                      marginRight: '5px'
                    }}
                  />

                  Delete

                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  )

}

export default History