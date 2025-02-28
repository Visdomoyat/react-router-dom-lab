import { useParams } from "react-router-dom";
import styled from "styled-components";

const Dl = styled.dl`
  text-align: center;
  margin: 20px auto;
`
const Dt = styled.dt`
color: #004B87;
padding: 20px;
`
const Dd = styled.dd`

`

function MailBoxDetail(props) {
    const {mailboxId} = useParams();
const selectedBox = props.mail.find((currentMail) => (
    currentMail._id === Number(mailboxId)
))

  return (
    <>
    <h2>MailBoxDetail</h2>
    <Dl>
        <Dt>Mail Holder's Name:</Dt>
        <Dd>{selectedBox.boxholder}</Dd>
        <Dt>Size</Dt>
        <Dd>{selectedBox.size}</Dd>
    </Dl>
    </>
  )
}

export default MailBoxDetail