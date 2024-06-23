export default function MailboxFormSelect({ id, label }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
    </>
  );
}
