import { useParams } from "react-router-dom";

export default function MailboxDetails({ mailboxes }) {
  const thisMailboxId = useParams();
  let thisMailbox = {};

  mailboxes?.map((mailbox) => {
    if (mailbox._id === Number(thisMailboxId.mailboxId)) {
      thisMailbox = { ...mailbox };
    }
  });

  return (
    <table>
      <thead>
        <h1>Mailbox {thisMailbox._id}</h1>
      </thead>
      <tbody>
        <tr>
          <th>Boxholder: </th>
          <td>{thisMailbox.boxholder}</td>
        </tr>
        <tr>
          <th>Box Size: </th>
          <td>{thisMailbox.boxSize}</td>
        </tr>
      </tbody>
    </table>
  );
}
