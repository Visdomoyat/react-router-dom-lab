import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import MailBoxList from './components/MailBoxList/MailBoxList'
import MailBoxDetail from './MailSearch/MailBoxDetails/MailBoxDetail'
import NewMailForm from './components/NewMailForm/NewMailForm'


import './App.css'

function App() {
const [mail, setMail] = useState([])

const addMail = (newMaillData) => {
newMaillData._id = mail.length + 1
setMail([...mail, newMaillData])
}
  return (
    <>
    <h1>🏤Post Office</h1>
    
      <Navbar />
      
      <Routes>
        <Route
        part='/' 
        element= {<h2>Mail Boxes</h2>}
        />

      
        <Route 
        path='/mailboxes' 
        element={<MailBoxList mail={mail} />}    
        />

        <Route 
        path='/mailboxes/:mailboxId' 
        element={<MailBoxDetail mail={mail} />}    
        /> 

        <Route path='/mailboxes/newmail' 
        element={<NewMailForm addMail={addMail} />}   
        />
      </Routes>
    </>
  )
}

export default App
