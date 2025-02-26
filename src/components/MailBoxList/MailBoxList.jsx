import { Link } from "react-router-dom"



function MailBoxList(props) {
  
  return (
    <>
      <div>
        <h3>Mailbox List</h3>
        <ul>
          {props.mail.length === 0 ? (
            <p>No mail available</p>
          ) : (
            props.mail.map((currentMail) => (
              <li key={currentMail._id}>
                <Link to={`/mailboxes/${currentMail._id}`}>
                  {currentMail.boxholder}
                </Link>
              </li>
            ))
          )}

        </ul>
      </div>
    </>
  )

}

export default MailBoxList