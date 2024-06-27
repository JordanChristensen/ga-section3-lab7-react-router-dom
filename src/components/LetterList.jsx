import { Link } from "react-router-dom";

export default function LetterList({ letters }) {
  return (
    <section className="letterList">
      <h1>Letters</h1>
      <ul>
        {letters?.map((letter) => (
          <li key={letter._id}>
            <Link to={`/letters/${letter._id}`}>
              Message was sent from {letter.senderName} to{" "}
              {letter.recipientName}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
