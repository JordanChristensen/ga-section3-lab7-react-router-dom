import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

const App = () => {
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
};

export default App;
