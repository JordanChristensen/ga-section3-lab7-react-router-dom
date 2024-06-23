export default function MailboxFormInput({
  type,
  id,
  label,
  handleInputChange,
}) {
  
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} id={id} onChange={handleInputChange} />
    </>
  );
}
