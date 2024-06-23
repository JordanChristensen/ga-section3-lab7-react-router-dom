import { useParams } from "react-router-dom";
import MailboxDetailsTable from "./MailboxDetailsTable";

export default function MailboxDetails({ mailboxes }) {
  const thisMailboxId = useParams();
  let thisMailbox = {};

  mailboxes?.map((mailbox) => {
    if (mailbox._id === Number(thisMailboxId.mailboxId)) {
      thisMailbox = { ...mailbox };
    }
  });

  return (
    <section>
      <h1>Mailbox {thisMailbox._id}</h1>
      <h3>Details</h3>
      <MailboxDetailsTable thisMailbox={thisMailbox} />
    </section>
  );
}
