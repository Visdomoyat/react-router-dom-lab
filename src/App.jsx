import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import MailBoxList from './components/MailBoxList/MailBoxList'
import MailBoxDetail from './MailSearch/MailBoxDetails/MailBoxDetail'
import NewMailForm from './components/NewMailForm/NewMailForm'


import './App.css'

function App() {
const [mail, setMail] = useState([])

const addMail = (newMailData) => {
  console.log('New Mail Data Receive', newMailData);
  if(!newMailData.boxholder) {
    console.warn('No boxholder found in newMailData')
  }
const newMail = {...newMailData, _id: mail.length + 1}
setMail([...mail, newMail])
}
  return (
    <>
    <h1>🏤Post Office</h1>

      <Navbar />
      
      <Routes>
        <Route
        path='/' 
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

        <Route path='/newmail' 
        element={<NewMailForm addMail={addMail} />}   
        />
      </Routes>
    </>
  )
}

export default App
