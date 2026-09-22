import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Landingpage from './pages/Landingpage'
import InvitationForm from './pages/InvitationForm'
import InvitationGenerator from './pages/InvitationGenerator'
import ViewInvitation from './pages/ViewInvitation'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'
import History from './pages/History'
import EditInvitation from './components/EditInvitation'
function App() {


  return (
    
   <>
      <Header/>
        <Routes>
          <Route
            path="/"
            element={<Landingpage />}
          />
  
          <Route
            path="/create"
            element={<InvitationGenerator />}
          />
  
          <Route
            path="/form"
            element={<InvitationForm />}
          />
  
          <Route
            path="/history"
            element={<History />}
          />
  
          <Route
            path="/invitation/:id/view"
            element={<ViewInvitation />}
          />
  
          <Route
            path="*"
            element={<Pnf />}
          />
          <Route
  path="/history"
  element={<History />}
/>
<Route path="/edit/:id" element={<EditInvitation />} />
  
        </Routes>
        <Footer/>
   </>
    
  )
}

export default App
