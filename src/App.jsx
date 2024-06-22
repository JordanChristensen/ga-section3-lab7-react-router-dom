import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import * as manageMailboxes from "./utils/manageMailboxes";
import "./App.css";
import "./components/Components.css"
import Navbar from "./components/Navbar/Navbar";
import CustomRoutes from "./components/Routes/Routes";
import { initMailboxes } from "./data/initMailboxes";
import fallbackForErrorBoundary from "./utils/fallbackForErrorBoundary";

function Mailbox() {
  const [mailboxes, setMailboxes] = useState(initMailboxes);

  function handleNewMailbox() {
    manageMailboxes.addBox;
  }

  return (
    <main>
      <Navbar />
      <CustomRoutes
        mailboxes={mailboxes}
        setMailboxes={setMailboxes}
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
