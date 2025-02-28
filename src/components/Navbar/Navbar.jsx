import styled from "styled-components"
import { NavLink } from "react-router-dom"

const NavBar = styled.div`
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
display: flex;
justify-content: center;
align-items: center;
margin: 20px;
padding: 15px 30px;
background-color:#004B87;
color: white;

`

const Navmenu = styled.div`
color: white;
margin: 10px;
padding: 10px 50px;
display: flex;
gap:20px;


`
const Navlink = styled(NavLink)`
color: white;
text-decoration: none;
font-size: 20px;
font-weight: bold;

&:hover {
color: black;
}
`

function Navbar() {
  return (
    <NavBar>
        
        <Navmenu>
            <Navlink to='/'>Home</Navlink>
            <Navlink to='/mailboxes'>Mailboxes</Navlink>
            <Navlink to='/newmail'>New Mailbox</Navlink>
        </Navmenu>
    </NavBar>
  )
}

export default Navbar