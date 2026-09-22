import React, { useState } from 'react'
import {
  Stepper,
  Step,
  StepLabel,
  Button
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { addInvitationAPI } from '../services/allAPI'

function Steps({ invitationData, setInvitationData }) {

  const [activeStep, setActiveStep] = useState(0)
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const steps = [
    'Event Details',
    'Date & Location',
    'Design & Music',
    'Extras'
  ]


  // Handles input/select changes
  const handleChange = (e) => {

    const { name, value } = e.target

    setInvitationData({
      ...invitationData,
      [name]: value
    })

    // Remove error when user starts correcting the field
    setErrors({
      ...errors,
      [name]: ''
    })
  }


  // Validate current step
  const validateStep = () => {

    let newErrors = {}


    // STEP 1
    if (activeStep === 0) {

      if (!invitationData.eventType) {
        newErrors.eventType = 'Please select an event type'
      }

      if (!invitationData.title.trim()) {
        newErrors.title = 'Please enter an invitation title'
      }

    }


    // STEP 2
    if (activeStep === 1) {

      if (!invitationData.date) {
        newErrors.date = 'Please select the event date'
      }

      if (!invitationData.time) {
        newErrors.time = 'Please select the event time'
      }

      if (!invitationData.venue.trim()) {
        newErrors.venue = 'Please enter the venue'
      }

    }


    // STEP 3
    if (activeStep === 2) {

      if (!invitationData.theme) {
        newErrors.theme = 'Please select a theme'
      }

    }


    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }


  // Next button
  const handleNext = () => {

    if (validateStep()) {
      setActiveStep(activeStep + 1)
    }

  }


  // Back button
  const handleBack = () => {

    setActiveStep(activeStep - 1)

  }


  // Generate invitation
  const handleGenerate = async () => {

  if (!validateStep()) {
    return
  }

  try {

    const response = await addInvitationAPI(invitationData)

    console.log('Invitation saved:', response.data)

    navigate('/create', {
      state: {
        invitationData: response.data
      }
    })

  } catch (error) {

    console.log('Error saving invitation:', error)

    alert('Failed to save invitation')

  }

}


  return (

    <div>

      {/* ================= STEP INDICATOR ================= */}

      <Stepper
        activeStep={activeStep}
        alternativeLabel

        sx={{

          '& .MuiStepLabel-label': {
            color: '#8b6f83',
            fontWeight: '500'
          },

          '& .MuiStepLabel-label.Mui-active': {
            color: '#c77d9b',
            fontWeight: 'bold'
          },

          '& .MuiStepLabel-label.Mui-completed': {
            color: '#9b8ac4',
            fontWeight: 'bold'
          },

          '& .MuiStepIcon-root': {
            color: '#ead7e3'
          },

          '& .MuiStepIcon-root.Mui-active': {
            color: '#d98eaa'
          },

          '& .MuiStepIcon-root.Mui-completed': {
            color: '#a99acb'
          }

        }}

      >

        {steps.map((step) => (

          <Step key={step}>

            <StepLabel>
              {step}
            </StepLabel>

          </Step>

        ))}

      </Stepper>


      {/* ================= FORM CARD ================= */}

      <div
        className="card p-4 mt-5"

        style={{
          background: 'rgba(255, 248, 252, 0.95)',
          border: '1px solid #f1d9e5',
          borderRadius: '25px',
          boxShadow: '0 10px 30px rgba(190, 140, 170, 0.15)'
        }}
      >


        {/* ================= STEP 1 ================= */}

        {activeStep === 0 && (

          <div>

            <h4
              className="mb-4"
              style={{
                color: '#9b6079',
                fontFamily: 'Georgia, serif',
                fontWeight: '600'
              }}
            >
              Event Details
            </h4>


            {/* Event Type */}

            <div className="mb-3">

              <label
                className="form-label"
                style={{
                  color: '#76566a',
                  fontWeight: '600'
                }}
              >
                Event Type
              </label>

              <select
                name="eventType"
                value={invitationData.eventType}
                onChange={handleChange}
                className="form-select"
                style={{
                  borderRadius: '12px',
                  border: '1px solid #e8cbd8',
                  backgroundColor: '#fffafd'
                }}
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

              {errors.eventType && (
                <small className="text-danger">
                  {errors.eventType}
                </small>
              )}

            </div>


            {/* Invitation Title */}

            <div className="mb-3">

              <label
                className="form-label"
                style={{
                  color: '#76566a',
                  fontWeight: '600'
                }}
              >
                Invitation Title
              </label>

              <input
                type="text"
                name="title"
                value={invitationData.title}
                onChange={handleChange}
                className="form-control"
                style={{
                  borderRadius: '12px',
                  border: '1px solid #e8cbd8',
                  backgroundColor: '#fffafd'
                }}
                placeholder="Example: Sarah's 21st Birthday"
              />

              {errors.title && (
                <small className="text-danger">
                  {errors.title}
                </small>
              )}

            </div>

          </div>

        )}


        {/* ================= STEP 2 ================= */}

        {activeStep === 1 && (

          <div>

            <h4
              className="mb-4"
              style={{
                color: '#9b6079',
                fontFamily: 'Georgia, serif',
                fontWeight: '600'
              }}
            >
              Date & Location
            </h4>


            {/* Date */}

            <div className="mb-3">

              <label
                className="form-label"
                style={{
                  color: '#76566a',
                  fontWeight: '600'
                }}
              >
                Event Date
              </label>

              <input
                type="date"
                name="date"
                value={invitationData.date}
                onChange={handleChange}
                className="form-control"
                style={{
                  borderRadius: '12px',
                  border: '1px solid #e8cbd8',
                  backgroundColor: '#fffafd'
                }}
              />

              {errors.date && (
                <small className="text-danger">
                  {errors.date}
                </small>
              )}

            </div>


            {/* Time */}

            <div className="mb-3">

              <label
                className="form-label"
                style={{
                  color: '#76566a',
                  fontWeight: '600'
                }}
              >
                Event Time
              </label>

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

              {errors.time && (
                <small className="text-danger">
                  {errors.time}
                </small>
              )}

            </div>


            {/* Venue */}

            <div className="mb-3">

              <label
                className="form-label"
                style={{
                  color: '#76566a',
                  fontWeight: '600'
                }}
              >
                Venue
              </label>

              <input
                type="text"
                name="venue"
                value={invitationData.venue}
                onChange={handleChange}
                className="form-control"
                style={{
                  borderRadius: '12px',
                  border: '1px solid #e8cbd8',
                  backgroundColor: '#fffafd'
                }}
                placeholder="Example: Grand Palace Hall"
              />

              {errors.venue && (
                <small className="text-danger">
                  {errors.venue}
                </small>
              )}

            </div>


            {/* Address */}

            <div className="mb-3">

              <label
                className="form-label"
                style={{
                  color: '#76566a',
                  fontWeight: '600'
                }}
              >
                Address
              </label>

              <textarea
                name="address"
                value={invitationData.address}
                onChange={handleChange}
                className="form-control"
                style={{
                  borderRadius: '12px',
                  border: '1px solid #e8cbd8',
                  backgroundColor: '#fffafd'
                }}
                rows="3"
                placeholder="Enter event address"
              />

            </div>

          </div>

        )}


        {/* ================= STEP 3 ================= */}

        {activeStep === 2 && (

          <div>

            <h4
              className="mb-4"
              style={{
                color: '#9b6079',
                fontFamily: 'Georgia, serif',
                fontWeight: '600'
              }}
            >
              Design & Music
            </h4>


            {/* Theme */}

            <div className="mb-3">

              <label
                className="form-label"
                style={{
                  color: '#76566a',
                  fontWeight: '600'
                }}
              >
                Choose Theme
              </label>

              <select
                name="theme"
                value={invitationData.theme}
                onChange={handleChange}
                className="form-select"
                style={{
                  borderRadius: '12px',
                  border: '1px solid #e8cbd8',
                  backgroundColor: '#fffafd'
                }}
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

              {errors.theme && (
                <small className="text-danger">
                  {errors.theme}
                </small>
              )}

            </div>


            {/* Music */}

            <div className="mb-3">

              <label
                className="form-label"
                style={{
                  color: '#76566a',
                  fontWeight: '600'
                }}
              >
                Preferred Music
              </label>

              <select
                name="music"
                value={invitationData.music}
                onChange={handleChange}
                className="form-select"
                style={{
                  borderRadius: '12px',
                  border: '1px solid #e8cbd8',
                  backgroundColor: '#fffafd'
                }}
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

          </div>

        )}


        {/* ================= STEP 4 ================= */}

        {activeStep === 3 && (

          <div>

            <h4
              className="mb-4"
              style={{
                color: '#9b6079',
                fontFamily: 'Georgia, serif',
                fontWeight: '600'
              }}
            >
              Extras
            </h4>


            

            {/* QR Code */}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 18px',
                borderRadius: '15px',
                backgroundColor: '#f5f8ff',
                border: '1px solid #c9d8f5',
                cursor: 'pointer'
              }}
            >

              <input
                type="checkbox"
                id="qr"
                name="qr"
                checked={invitationData.qr}
                onChange={(e) =>
                  setInvitationData({
                    ...invitationData,
                    qr: e.target.checked
                  })
                }
                style={{
                  width: '20px',
                  height: '20px',
                  accentColor: '#8aa7d9',
                  cursor: 'pointer'
                }}
              />

              <label
                htmlFor="qr"
                style={{
                  margin: 0,
                  color: '#40577d',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Generate QR Code
              </label>

            </div>

          </div>

        )}


        {/* ================= NAVIGATION ================= */}

        <div className="d-flex justify-content-between mt-4">

          <Button
            variant="outlined"
            disabled={activeStep === 0}
            onClick={handleBack}

            sx={{
              color: '#c77d9b',
              borderColor: '#c77d9b',
              borderRadius: '25px',
              padding: '8px 25px',
              textTransform: 'none',
              fontWeight: 'bold',

              '&:hover': {
                borderColor: '#9b6079',
                backgroundColor: '#fff0f6'
              },

              '&.Mui-disabled': {
                color: '#c77d9b',
                borderColor: '#e8cbd8',
                backgroundColor: '#fff5f8',
                opacity: 0.7
              }
            }}
          >
            Back
          </Button>


          <Button
            variant="contained"

            onClick={
              activeStep === steps.length - 1
                ? handleGenerate
                : handleNext
            }

            sx={{
              background: 'linear-gradient(135deg, #d98eaa, #a99acb)',
              borderRadius: '25px',
              padding: '9px 28px',
              textTransform: 'none',
              fontWeight: 'bold',
              boxShadow: '0 5px 15px rgba(190, 130, 160, 0.25)',

              '&:hover': {
                background: 'linear-gradient(135deg, #c97c9b, #9585bb)'
              }
            }}
          >
            {activeStep === steps.length - 1
              ? 'Generate Invitation'
              : 'Next'}
          </Button>

        </div>

      </div>

    </div>

  )
}

export default Steps