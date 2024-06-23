export default function MailboxFormSelect({ id, label, handleSelectChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        name={id}
        id={id}
        value={FormData.newBoxSize}
        onChange={handleSelectChange}
      >
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
    </>
  );
}
