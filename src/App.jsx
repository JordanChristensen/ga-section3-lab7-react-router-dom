import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Navbar from "./components/Navbar";
import { initMailboxes } from "./data/initMailboxes";
import { RoutesComponent } from "./components/Routes";
import fallbackForErrorBoundary from "./utils/fallbackForErrorBoundary";

function Mailbox() {
  const [mailboxes, setMailboxes] = useState(initMailboxes);

  return (
    <main>
      <Navbar />
      <RoutesComponent
        mailboxes={mailboxes}
        setMailboxes={setMailboxes}
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
