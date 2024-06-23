import MailboxListItem from "./MailboxListItem";

export default function MailboxList({ mailboxes }) {
  return (
    <section className="mailboxList">
      <h1>Mailbox list</h1>
      <ul>
        {mailboxes?.map((mailbox) => {
          return (
            <MailboxListItem
              key={mailbox._id}
              route={`/mailboxes/${mailbox._id}`}
              label={`Mailbox ${mailbox._id} is owned by ${mailbox.boxholder}`}
            />
          );
        })}
      </ul>
    </section>
  );
}
