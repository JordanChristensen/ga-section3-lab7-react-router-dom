import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { initMailboxes } from "./data/initMailboxes";
import { initLetters } from "./data/initLetters";

import Four0Four from "./utils/Four0Four";
import fallbackForErrorBoundary from "./utils/fallbackForErrorBoundary";
import "./App.css";

import Navbar from "./components/Navbar";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import LandingPage from "./components/LandingPage";
import LetterList from "./components/LetterList";
import LetterForm from "./components/LetterForm";
// import LetterDetails from "./components/LetterDetails";

function Mailbox() {
  const [mailboxes, setMailboxes] = useState(initMailboxes);
  const [letters, setLetters] = useState(initLetters);

  return (
    <main>
      <Navbar />
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
        <Route path="/letters" element={<LetterList letters={letters} />} />
        <Route
          path="/new-letter"
          element={<LetterForm setLetters={setLetters} />}
        />
        <Route path="*" element={<Four0Four />} />
      </Routes>
    </main>
  );
}

export default function App() {
  return (
    <ErrorBoundary
      FallbackComponent={fallbackForErrorBoundary}
      onError={(error, errorInfo) => {
        console.error("React-error-boundary caught an error", error, errorInfo);
      }}
    >
      <Mailbox />
    </ErrorBoundary>
  );
}
