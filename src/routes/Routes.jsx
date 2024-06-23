import { Route, Routes } from "react-router-dom";
import MailboxList from "../components/MailboxList/MailboxList";
import MailboxForm from "../components/MailboxForm/MailboxForm";
import MailboxDetails from "../components/MailboxDetails/MailboxDetails";
import LandingPage from "../components/LandingPage";
import Four0Four from "../components/Four0Four";
import LetterForm from "../components/LetterForm";

export function CustomRoutes({
  mailboxes,
  setMailboxes,
  newMailbox,
  setNewMailbox,
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
            newMailbox={newMailbox}
            setMailboxes={setMailboxes}
            setNewMailbox={setNewMailbox}
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
