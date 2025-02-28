import { Link } from "react-router-dom"
import styled from "styled-components"

const Li = styled.li`
list-style: none;
text-align: center;
margin: 30px auto;

`
const Lilink = styled(Link)`
background-color: #004B87;
text-decoration: none;
padding: 10px;
border-radius: 10px;
color: white;

`

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
              <Li key={currentMail._id}>
                <Lilink to={`/mailboxes/${currentMail._id}`}>
                  ✉️  {currentMail.boxholder}
                </Lilink>
              </Li>
            ))
          )}

        </ul>
      </div>
    </>
  )

}

export default MailBoxList