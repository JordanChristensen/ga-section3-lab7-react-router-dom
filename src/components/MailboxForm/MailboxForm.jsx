import MailboxFormInput from "./MailboxFormInput";
import MailboxFormSelect from "./MailboxFormSelect";

export default function MailboxForm({
  mailboxes,
  setMailboxes,
  newMailbox,
  setNewMailbox,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMailbox.boxholder && newMailbox.boxSize) {
      setMailboxes([...mailboxes, newMailbox]);
      setNewMailbox({ title: "", author: "" });
    }
  };

  const handleInputChange = (e) => {
    return setNewMailbox({ ...newMailbox, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h1>New mailbox</h1>
      <form>
        <MailboxFormInput
          type={"text"}
          id={"boxholder"}
          label={"Enter a boxholder:"}
          handleInputChange={handleInputChange}
        />
        <MailboxFormSelect id={"boxSize"} label={"Select a box size:"} />
        <button onClick={() => handleSubmit(newMailbox)}>Add book</button>
      </form>
    </section>
  );
}
