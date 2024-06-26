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
      <h1>Letter form</h1>
      <form onSubmit={handleSubmit}>
        <select name="" id="" onChange={handleInputChange}>
          {/* {letters.map((letter) => (
            <option key={letter._id} value={letter._id}></option>
          ))} */}
        </select>

        <label htmlFor=""></label>
        <input type="text" onChange={handleInputChange} />

        <label htmlFor=""></label>
        <textarea name="" id="" onChange={handleInputChange}></textarea>
      </form>
    </section>
  );
}
