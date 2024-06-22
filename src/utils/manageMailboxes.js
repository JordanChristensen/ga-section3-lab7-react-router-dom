export async function addBox({
  newMailboxFormData,
  mailboxes,
  setMailboxes,
}) {
  try {
    await setMailboxes([...mailboxes, { ...newMailboxFormData }]);
  } catch (setMailboxesErr) {
    console.log("Error when creating new mailbox ----->", setMailboxesErr);
  }
}
