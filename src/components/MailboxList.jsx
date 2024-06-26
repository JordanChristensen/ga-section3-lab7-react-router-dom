import { Link } from "react-router-dom";

export default function MailboxList({ mailboxes }) {
  return (
    <section className="mailboxList">
      <h1>Mailbox list</h1>
      <ul>
        {mailboxes?.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>
              Mailbox {mailbox._id} is owned by {mailbox.boxholder}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
