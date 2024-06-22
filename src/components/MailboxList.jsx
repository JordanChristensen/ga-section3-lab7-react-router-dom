import MailboxListItem from "./MailboxListItem";

export default function MailboxList({ mailboxes }) {
//   console.log(mailboxes);
  return (
    <section className="mailboxList">
      <h1>Mailbox list</h1>
      <ul>
        {mailboxes?.map((mailbox) => {
          return (
            <MailboxListItem
              key={mailbox._id}
              route={`/mailboxes/${mailbox._id}`}
              label={`${mailbox.boxholder}'s Mailbox: #${mailbox._id}`}
            />
          );
        })}
      </ul>
    </section>
  );
}
