import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/mailboxes">Mailboxes</Link>
        <Link to="/new-mailbox">New mailbox</Link>
        <Link to="/new-letter">New letter</Link>
      </ul>
    </nav>
  );
}
