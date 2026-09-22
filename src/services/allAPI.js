import axios from 'axios'

const API_URL = 'http://localhost:3000/invitations'

// ADD invitation
export const addInvitationAPI = async (invitationData) => {
  return await axios.post(API_URL, invitationData)
}

// GET all invitations
export const getInvitationsAPI = async () => {
  return await axios.get(API_URL)
}

// GET one invitation
export const getSingleInvitationAPI = async (id) => {
  return await axios.get(`${API_URL}/${id}`)
}

// UPDATE invitation
export const editInvitationAPI = async (id, invitationData) => {
  return await axios.put(`${API_URL}/${id}`, invitationData)
}

// DELETE invitation
export const deleteInvitationAPI = async (id) => {
  return await axios.delete(`${API_URL}/${id}`)
}