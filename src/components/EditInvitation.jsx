import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '@mui/material/Button'

function Edit() {

  const { id } = useParams()
  const navigate = useNavigate()

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

  const [loading, setLoading] = useState(true)

  // ================= FETCH INVITATION =================

  useEffect(() => {

    const fetchInvitation = async () => {

      try {

        const response = await fetch(
          `http://localhost:3000/invitations/${id}`
        )

        if (!response.ok) {
          throw new Error('Invitation not found')
        }

        const data = await response.json()

        setInvitationData(data)

      } catch (error) {

        console.error(error)
        alert('Could not load invitation')

      } finally {

        setLoading(false)

      }
    }

    fetchInvitation()

  }, [id])


  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {

    const { name, value } = e.target

    setInvitationData({
      ...invitationData,
      [name]: value
    })

  }


  // ================= QR CHANGE =================

  const handleQRChange = (e) => {

    setInvitationData({
      ...invitationData,
      qr: e.target.checked
    })

  }


  // ================= UPDATE =================

  const handleUpdate = async () => {

    try {

      const response = await fetch(
        `http://localhost:3000/invitations/${id}`,
        {
          method: 'PUT',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(invitationData)
        }
      )

      if (!response.ok) {
        throw new Error('Update failed')
      }

      alert('Invitation updated successfully!')

      navigate('/history')

    } catch (error) {

      console.error(error)

      alert('Failed to update invitation')

    }

  }


  if (loading) {

    return (
      <div className="container text-center mt-5">
        <h3>Loading invitation...</h3>
      </div>
    )

  }


  return (

    <div
      className="container"
      style={{
        paddingTop: '120px',
        paddingBottom: '80px'
      }}
    >

      <div
        className="card p-4"
        style={{
          maxWidth: '700px',
          margin: 'auto',
          borderRadius: '25px',
          border: '1px solid #f1d9e5',
          boxShadow: '0 10px 30px rgba(190,140,170,0.15)',
          background: '#fff8fc'
        }}
      >

        <h2
          className="text-center mb-4"
          style={{
            color: '#9b6079',
            fontFamily: 'Georgia, serif'
          }}
        >
          Edit Invitation
        </h2>


        {/* EVENT TYPE */}

        <div className="mb-3">

          <label className="form-label">
            Event Type
          </label>

          <select
            name="eventType"
            value={invitationData.eventType}
            onChange={handleChange}
            className="form-select"
          >

            <option value="">
              Select Event
            </option>

            <option value="Birthday">
              Birthday
            </option>

            <option value="Wedding">
              Wedding
            </option>

            <option value="Engagement">
              Engagement
            </option>

            <option value="Anniversary">
              Anniversary
            </option>

            <option value="Party">
              Party
            </option>

          </select>

        </div>


        {/* TITLE */}

        <div className="mb-3">

          <label className="form-label">
            Invitation Title
          </label>

          <input
            type="text"
            name="title"
            value={invitationData.title}
            onChange={handleChange}
            className="form-control"
          />

        </div>


        {/* DATE */}

        <div className="mb-3">

          <label className="form-label">
            Event Date
          </label>

          <input
            type="date"
            name="date"
            value={invitationData.date}
            onChange={handleChange}
            className="form-control"
          />

        </div>


        {/* TIME */}

        <div className="mb-3">

          <label className="form-label">
            Event Time
          </label>

          <select
            name="time"
            value={invitationData.time}
            onChange={handleChange}
            className="form-select"
          >

            <option value="">
              Select Time
            </option>

            <option value="9:00 AM">9:00 AM</option>
            <option value="9:30 AM">9:30 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="12:30 PM">12:30 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="1:30 PM">1:30 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="2:30 PM">2:30 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="3:30 PM">3:30 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="4:30 PM">4:30 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="5:30 PM">5:30 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="6:30 PM">6:30 PM</option>
            <option value="7:00 PM">7:00 PM</option>
            <option value="7:30 PM">7:30 PM</option>
            <option value="8:00 PM">8:00 PM</option>
            <option value="8:30 PM">8:30 PM</option>
            <option value="9:00 PM">9:00 PM</option>
            <option value="9:30 PM">9:30 PM</option>
            <option value="10:00 PM">10:00 PM</option>

          </select>

        </div>


        {/* VENUE */}

        <div className="mb-3">

          <label className="form-label">
            Venue
          </label>

          <input
            type="text"
            name="venue"
            value={invitationData.venue}
            onChange={handleChange}
            className="form-control"
          />

        </div>


        {/* ADDRESS */}

        <div className="mb-3">

          <label className="form-label">
            Address
          </label>

          <textarea
            name="address"
            value={invitationData.address}
            onChange={handleChange}
            className="form-control"
            rows="3"
          />

        </div>


        {/* THEME */}

        <div className="mb-3">

          <label className="form-label">
            Theme
          </label>

          <select
            name="theme"
            value={invitationData.theme}
            onChange={handleChange}
            className="form-select"
          >

            <option value="">
              Select Theme
            </option>

            <option value="Elegant">
              Elegant
            </option>

            <option value="Modern">
              Modern
            </option>

            <option value="Floral">
              Floral
            </option>

            <option value="Minimal">
              Minimal
            </option>

          </select>

        </div>


        {/* MUSIC */}

        <div className="mb-3">

          <label className="form-label">
            Preferred Music
          </label>

          <select
            name="music"
            value={invitationData.music}
            onChange={handleChange}
            className="form-select"
          >

            <option value="">
              Select Music
            </option>

            <option value="Birthday">
              Birthday
            </option>

            <option value="Celebration">
              Celebration
            </option>

            <option value="Calm">
              Calm
            </option>

            <option value="None">
              No Music
            </option>

          </select>

        </div>


        {/* QR */}

        <div className="mb-4">

          <div className="form-check">

            <input
              type="checkbox"
              className="form-check-input"
              id="qr"
              checked={invitationData.qr}
              onChange={handleQRChange}
            />

            <label
              className="form-check-label"
              htmlFor="qr"
            >
              Generate QR Code
            </label>

          </div>

        </div>


        {/* BUTTONS */}

        <div className="d-flex justify-content-between">

          <Button
            variant="outlined"
            onClick={() => navigate('/history')}
            sx={{
              borderRadius: '25px',
              color: '#c77d9b',
              borderColor: '#c77d9b'
            }}
          >
            Cancel
          </Button>


          <Button
            variant="contained"
            onClick={handleUpdate}
            sx={{
              borderRadius: '25px',
              background:
                'linear-gradient(135deg, #d98eaa, #a99acb)',
              textTransform: 'none',
              padding: '9px 30px'
            }}
          >
            Save Changes
          </Button>

        </div>

      </div>

    </div>

  )

}

export default Edit