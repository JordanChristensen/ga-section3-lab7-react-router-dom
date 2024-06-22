// import React from "react";
import { Route, Routes } from "react-router-dom";
import MailboxList from "../MailboxList/MailboxList";
import MailboxForm from "../MailboxForm/MailboxForm";
import MailboxDetails from "../MailboxDetails/MailboxDetails";
import LandingPage from "../LandingPage/LandingPage";
import Four0Four from "../Four0Four/Four0Four";
import LetterForm from "../LetterForm/LetterForm";

export default function CustomRoutes({
  mailboxes,
  setMailboxes,
  handleNewMailbox,
}) {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/mailboxes"
        element={<MailboxList />}
        mailboxes={mailboxes}
      />
      <Route
        path="/new-mailbox"
        element={<MailboxForm />}
        handleNewMailbox={handleNewMailbox}
        setMailboxes={setMailboxes}
      />
      <Route
        path="/mailboxes/:mailboxId"
        element={<MailboxDetails />}
        mailboxes={mailboxes}
      />
      <Route path="/new-letter" element={<LetterForm />} />
      <Route path="*" element={<Four0Four />} />
    </Routes>
  );
}
