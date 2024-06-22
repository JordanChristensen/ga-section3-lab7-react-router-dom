import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import * as manageMailboxes from "./utils/manageMailboxes";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

function Fallback({ error }) {
  return <section>Something went wrong: {error.message}</section>;
}

function Mailbox() {
  const [mailboxes, setMailboxes] = useState(initMailboxState);

  function handleNewMailbox() {
    manageMailboxes.addBox;
  }

  return (
    <main>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
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
      </Routes>
    </main>
  );
}

const initMailboxState = {
  _id: null,
  boxSize: "",
  boxOwner: "",
};

export default function App() {
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onError={(error, errorInfo) => {
        console.error("React-error-boundary caught an error", error, errorInfo);
      }}
    >
      <Mailbox />
    </ErrorBoundary>
  );
}
