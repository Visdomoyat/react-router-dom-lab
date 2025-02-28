import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import MailBoxList from './components/MailBoxList/MailBoxList'
import MailBoxDetail from './MailSearch/MailBoxDetails/MailBoxDetail'
import NewMailForm from './components/NewMailForm/NewMailForm'
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { Link } from 'react-router-dom'

const theme = {
  colors: {
    primary: '#004B87',     //Blue
    secondary: '#DA291C',   //Red
    background: '#fff5f5',  // Cream White
    text: '#663300',
    hover: '#FF6961',
  },
  borderRadius: '12px',
  maxWidth: '800px',
  shadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
}

const Globalstyle = createGlobalStyle`
    body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    }

    h1, h2, h3 {
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    }
    p {
  text-align: center;
  color: ${({theme}) => theme.colors.primary};
    }


    
`;
function App() {
  const [mail, setMail] = useState([])

  const addMail = (newMailData) => {
    console.log('New Mail Data Receive', newMailData);
    if (!newMailData.boxholder) {
      console.warn('No boxholder found in newMailData')
    }
    const newMail = { ...newMailData, _id: mail.length + 1 }
    setMail([...mail, newMail])
  }
  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <h1>🏤Post Office</h1>

      <Navbar />

      <Routes>
        <Route
          path='/'
          element={<h2>Mail Boxes</h2>}
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
    </ThemeProvider>
  )
}

export default App
