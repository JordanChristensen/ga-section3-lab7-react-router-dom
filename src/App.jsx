import { useState } from "react";
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
      <CustomRoutes
        mailboxes={mailboxes}
        setMailboxes={setMailboxes}
        handleNewMailbox={handleNewMailbox}
      />
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
