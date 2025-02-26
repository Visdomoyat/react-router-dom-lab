import './Navbar.css'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarLogo">📬MailBox</div>
        <div className="navbarMenu">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/mailboxes'>Mailboxes</NavLink>
            <NavLink to='/mailboxes/newmail'>New Mailbox</NavLink>
        </div>
    </div>
  )
}

export default Navbar