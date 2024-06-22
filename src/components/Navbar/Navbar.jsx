import NavLink from "./NavLink/NavLink";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <NavLink route={"/"} label={"Home"} />
        <NavLink route={"/mailboxes"} label={"Mailboxes"} />
        <NavLink route={"/new-mailbox"} label={"New mailbox"} />
        <NavLink route={"/new-letter"} label={"New letter"} />
      </ul>
    </nav>
  );
}
