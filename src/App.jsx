import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

const App = () => {
  return (
    <main>
      <Navbar />

      <Routes>
        <Route path="/" />
        <Route path="/mailboxes" />
        <Route path="/new-mailbox" />
        <Route path="/mailboxes/:mailboxId" />
      </Routes>
      <h1>Hello world!</h1>
      <MailboxList />
      <MailboxForm />
      <MailboxDetails />
    </main>
  );
};

export default App;
