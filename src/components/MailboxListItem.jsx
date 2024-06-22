import { Link } from "react-router-dom";

export default function MailboxListItem({ route, label }) {
  return (
    <li>
      <Link to={route}>{label}</Link>
    </li>
  );
}
