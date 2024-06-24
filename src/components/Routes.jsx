import { Route, Routes } from "react-router-dom";
import MailboxList from "./MailboxList";
import MailboxForm from "./MailboxForm";
import MailboxDetails from "./MailboxDetails";
import LandingPage from "./LandingPage";
import Four0Four from "./Four0Four";
import LetterForm from "./LetterForm";

export function RoutesComponent({ mailboxes, setMailboxes }) {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/mailboxes"
        element={<MailboxList mailboxes={mailboxes} />}
      />
      <Route
        path="/new-mailbox"
        element={
          <MailboxForm mailboxes={mailboxes} setMailboxes={setMailboxes} />
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
