import { useState } from "react";
import MailboxFormInput from "./MailboxFormInput";
import MailboxFormSelect from "./MailboxFormSelect";
import { useNavigate } from "react-router-dom";

export default function MailboxForm({ mailboxes, setMailboxes }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    boxholder: "",
    _id: mailboxes.length + 1,
    boxSize: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setMailboxes([...mailboxes, formData]);
    navigate("/mailboxes");
  }

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <section>
      <h1>New mailbox</h1>
      <form onSubmit={handleSubmit}>
        <MailboxFormInput
          type={"text"}
          id={"boxholder"}
          label={"Enter a boxholder:"}
          handleInputChange={handleInputChange}
        />
        <MailboxFormSelect
          id={"boxSize"}
          label={"Select a box size:"}
          handleInputChange={handleInputChange}
          formData={formData}
        />
        <button type="submit">Add book</button>
      </form>
    </section>
  );
}
