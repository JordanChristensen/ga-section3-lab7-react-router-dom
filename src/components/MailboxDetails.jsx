import { useParams } from "react-router-dom";

export default function MailboxDetails({ mailboxes }) {
  //
  //
  // ----------------
  // ----------------
  const thisMailboxId = useParams();
  // WHYYYY ---> is boxSize and boxHolder..... NOT AVAILABLE??
  console.log("URL params provides: ", thisMailboxId);
  console.log(...mailboxes);
  mailboxes.map((mailbox) => {
    if (mailbox._id === thisMailboxId) {
      console.log(mailbox.boxholder);
    }
  });
  // ----------------
  // ----------------
  //
  //   const thisMailbox = mailboxes.find(
  //     (mailbox) => mailbox._id === Number(thisMailboxId)
  //   );
  //   console.log(thisMailbox);
  //
  // ----------------
  // ----------------
  //
  //   console.log("thisMailboxID ", thisMailboxId);
  //   mailboxes.map((mailbox) => {
  //     console.log(mailbox._id, thisMailboxId);
  //     if (Number(mailbox._id) === Number(thisMailboxId)) {
  //       <h1>WINNER</h1>;
  //     }
  //   });

  return (
    <section>
      <h1>Mailbox {mailboxes.thisMailboxId}</h1>
    </section>
  );
}
