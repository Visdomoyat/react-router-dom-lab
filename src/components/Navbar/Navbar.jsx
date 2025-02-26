import './Navbar.css'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
        
        <div className="navbarMenu">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/mailboxes'>Mailboxes</NavLink>
            <NavLink to='/newmail'>New Mailbox</NavLink>
        </div>
    </div>
  )
}

export default Navbar