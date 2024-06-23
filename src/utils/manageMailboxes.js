export async function addBox({ newMailboxFormData, mailboxes, setMailboxes }) {
  try {
    console.log(newMailboxFormData);
    // console.log(newMailboxFormData);
    await setMailboxes([...mailboxes, { ...newMailboxFormData }]);
  } catch (setMailboxesErr) {
    console.log("Error when creating new mailbox ----->", setMailboxesErr);
  }
}
