export default function MailboxFormSelect({ id, label, handleInputChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        name={id}
        id={id}
        value={FormData.newBoxSize}
        onChange={handleInputChange}
      >
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
    </>
  );
}
