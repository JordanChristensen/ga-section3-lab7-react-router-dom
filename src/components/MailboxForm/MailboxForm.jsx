import { useState } from "react";
import MailboxFormInput from "./MailboxFormInput";
import MailboxFormSelect from "./MailboxFormSelect";

export default function MailboxForm({
  mailboxes,
  setMailboxes,
  // ------------------ @HERE: how to track form data??? ------------------
  // newMailboxBoxholder,
  // setNewMailboxBoxholder,
  // ----------------------------------------------------------------------
}) {
  const newIndex = mailboxes.length + 1;
  const [formData, setFormData] = useState({
    newBoxHolder: "",
    newBoxId: newIndex,
    newBoxSize: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newBoxholder = newMailboxBoxholder.boxholder;
    // console.log(newBoxholder);

    if (newMailboxBoxholder.boxholder && newMailbox.boxSize) {
      //
      //
      setMailboxes([...mailboxes, newMailbox]);
      // setNewMailbox({  title: "", author: "" });
    }
  }

  function handleInputChange(e) {
    setNewMailboxBoxholder({
      ...newMailboxBoxholder,
      [e.target.name]: e.target.value,
    });
    handleSetFormData();
  }

  function handleSetFormData() {
    setFormData((prevFormData) => ({
      ...prevFormData,
      newBoxHolder: newMailboxBoxholder,
    }));
  }

  function handleSelectChange(e) {
    const { value } = e.target;
    // console.log(value);
    console.log(formData);
    setFormData((prevFormData) => ({
      ...prevFormData,
      newBoxSize: value,
    }));
    console.log(formData);
  }

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
        {/*  */}
        {/*  */}
        {/* ------ something is wrong: select/option data not submitting with form data ----- */}
        {/*  */}
        {/*  */}
        <MailboxFormSelect
          id={"boxSize"}
          label={"Select a box size:"}
          handleSelectChange={handleSelectChange}
          formData={formData}
        />
        <button onClick={(e) => handleSubmit(e)}>Add book</button>
      </form>
    </section>
  );
}
