import { Route, Routes } from "react-router-dom";
import MailboxList from "./MailboxList/MailboxList";
import MailboxForm from "./MailboxForm/MailboxForm";
import MailboxDetails from "./MailboxDetails/MailboxDetails";
import LandingPage from "./LandingPage";
import Four0Four from "./Four0Four";
import LetterForm from "./LetterForm";

export function RoutesComponent({
  mailboxes,
  setMailboxes,
  newMailboxBoxholder,
  setNewMailboxBoxholder,
  handleNewMailbox,
}) {
  return (
    <Routes
      mailboxes={mailboxes}
      setMailboxes={setMailboxes}
      handleNewMailbox={handleNewMailbox}
    >
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/mailboxes"
        element={<MailboxList mailboxes={mailboxes} />}
      />
      <Route
        path="/new-mailbox"
        element={
          <MailboxForm
            mailboxes={mailboxes}
            newMailboxBoxholder={newMailboxBoxholder}
            setMailboxes={setMailboxes}
            setNewMailboxBoxholder={setNewMailboxBoxholder}
          />
        }
      />
      <Route
        path="/mailboxes/:mailboxId"
        element={<MailboxDetails mailboxes={mailboxes} />}
      />
      <Route path="/new-letter" element={<LetterForm />} />
      <Route path="*" element={<Four0Four />} />
    </Routes>
  );
}
