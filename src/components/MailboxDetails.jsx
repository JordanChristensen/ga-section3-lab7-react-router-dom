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
    <section>
      <h1>Mailbox {thisMailbox._id}</h1>
    </section>
  );
}
