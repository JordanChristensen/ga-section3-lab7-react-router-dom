import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LetterForm({ letters, setLetters }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    senderMailboxId: null,
    senderName: "",
    recipientMailboxId: null,
    recipientName: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);

    if (!formData.recipient || !formData.message)
      return alert(
        "Please include a recipient and message before sending email."
      );
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
        <label htmlFor="mailbox">Mailbox to send from:</label>
        <select
          name="mailbox"
          id="mailbox"
          onChange={handleInputChange}
          required
        >
          {/* {letters.map((letter) => (
            <option key={letter._id} value={letter._id}></option>
          ))} */}
        </select>

        <label htmlFor="recipient">Recipient:</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          onChange={handleInputChange}
          required
        />
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
