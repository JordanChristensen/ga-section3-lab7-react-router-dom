export default function MailboxDetailsTable({thisMailbox}) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Boxholder: </th>
          <td>{thisMailbox.boxholder}</td>
        </tr>
        <tr>
          <th>Box Size: </th>
          <td>{thisMailbox.boxSize}</td>
        </tr>
      </tbody>
    </table>
  );
}
