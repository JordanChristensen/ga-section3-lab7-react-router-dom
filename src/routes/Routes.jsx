import { Route, Routes } from "react-router-dom";
import MailboxList from "../components/MailboxList";
import MailboxForm from "../components/MailboxForm";
import MailboxDetails from "../components/MailboxDetails";
import LandingPage from "../components/LandingPage";
import Four0Four from "../components/Four0Four";
import LetterForm from "../components/LetterForm";

export default function CustomRoutes({
  mailboxes,
  setMailboxes,
  handleNewMailbox,
}) {
  console.log(mailboxes);
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
      <Route path="/new-mailbox" element={<MailboxForm />} />
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
      <Route path="/new-letter" element={<LetterForm />} />
      <Route path="*" element={<Four0Four />} />
    </Routes>
  );
}
