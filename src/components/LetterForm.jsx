import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LetterForm({ mailboxes, letters, setLetters }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    _id: mailboxes.length + 1,
    senderMailboxId: null,
    senderName: "John",
    recipientMailboxId: null,
    recipientName: "John",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setLetters([...letters, formData]);
    navigate("/letters");
  }

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="senderName">Sender:</label>
        <select
          name="senderName"
          id="senderName"
          onChange={handleInputChange}
          required
        >
          {mailboxes.map((mailbox) => (
            <option key={`Sender = ${mailbox._id}`} value={mailbox.boxholder}>
              Box {mailbox._id}, owned by {mailbox.boxholder}
            </option>
          ))}
        </select>

        <label htmlFor="recipientName">Recipient:</label>
        <select
          name="recipientName"
          id="recipientName"
          onChange={handleInputChange}
        >
          {mailboxes.map((mailbox) => (
            <option
              key={`Recipient = ${mailbox._id}`}
              value={mailbox.boxholder}
            >
              Box {mailbox._id}, owned by {mailbox.boxholder}
            </option>
          ))}
        </select>

        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" onChange={handleInputChange} />

        <footer>
          <button type="submit" className="success">
            Submit
          </button>
          <button type="reset" className="warning">
            Reset
          </button>
        </footer>
      </form>
    </section>
  );
}
