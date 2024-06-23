import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import * as manageMailboxes from "./utils/manageMailboxes";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { initMailboxes } from "./data/initMailboxes";
import { RoutesComponent } from "./components/Routes";
import fallbackForErrorBoundary from "./utils/fallbackForErrorBoundary";

function Mailbox() {
  const [mailboxes, setMailboxes] = useState(initMailboxes);
  //
  //
  // ------------------ @HERE: how to track form data??? ------------------
  // const [newMailboxBoxholder, setNewMailboxBoxholder] = useState([]);
  // ----------------------------------------------------------------------
  //
  //

  function handleNewMailbox() {
    manageMailboxes.addBox;
  }

  return (
    <main>
      <Navbar />
      <RoutesComponent
        mailboxes={mailboxes}
        setMailboxes={setMailboxes}
        // ------------------ @HERE: how to track form data??? ------------------
        // newMailboxBoxholder={newMailboxBoxholder}
        // setNewMailboxBoxholder={setNewMailboxBoxholder}
        // ----------------------------------------------------------------------
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
