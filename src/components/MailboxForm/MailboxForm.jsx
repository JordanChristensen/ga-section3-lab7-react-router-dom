import MailboxFormInput from "./MailboxFormInput";

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
        <label htmlFor="boxSize">Select a box size:</label>
        <select name="boxSize" id="boxSize">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button onClick={() => handleSubmit(newMailbox)}>Add book</button>
      </form>
    </section>
  );
}
