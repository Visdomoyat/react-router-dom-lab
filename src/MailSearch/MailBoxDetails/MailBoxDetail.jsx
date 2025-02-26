import { useParams } from "react-router-dom";


function MailBoxDetail(props) {
    const {mailboxId} = useParams();
const selectedBox = props.mail.find((currentMail) => (
    currentMail._id === Number(mailboxId)
))

  return (
    <>
    <h2>MailBoxDetail</h2>
    <dl>
        <dt>Mail Holder's Name</dt>
        <dd>{selectedBox.boxholder}</dd>
        <dt>Size</dt>
        <dd>{selectedBox.size}</dd>
    </dl>
    </>
  )
}

export default MailBoxDetail