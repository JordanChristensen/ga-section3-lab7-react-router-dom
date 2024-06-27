import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MailboxForm({ mailboxes, setMailboxes }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    boxholder: "",
    _id: mailboxes.length + 1,
    boxSize: "small",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.boxholder) return alert("Please add a boxholder.");
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a boxholder:</label>
        <input
          type="text"
          name="boxholder"
          id="boxholder"
          onChange={handleInputChange}
        />
        <label htmlFor="boxSize">Select a box size:</label>
        <select
          name="boxSize"
          id="boxSize"
          value={formData.boxSize}
          onChange={handleInputChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
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
