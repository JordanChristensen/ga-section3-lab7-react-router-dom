import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import * as manageMailboxes from "./utils/manageMailboxes";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { initMailboxes } from "./data/initMailboxes";
import { CustomRoutes } from "./Routes/Routes";
import fallbackForErrorBoundary from "./utils/fallbackForErrorBoundary";

function Mailbox() {
  const [mailboxes, setMailboxes] = useState(initMailboxes);
  const [newMailbox, setNewMailbox] = useState([]);

  function handleNewMailbox() {
    manageMailboxes.addBox;
  }

  return (
    <main>
      <Navbar />
      <CustomRoutes
        mailboxes={mailboxes}
        setMailboxes={setMailboxes}
        newMailbox={newMailbox}
        setNewMailbox={setNewMailbox}
        handleNewMailbox={handleNewMailbox}
      />
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
