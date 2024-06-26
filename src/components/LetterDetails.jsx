import { useParams } from "react-router-dom";

export default function LetterDetails({ letters }) {
  const thisLetterId = useParams();
  let thisLetter = {};

  letters?.map((letter) => {
    if (letter._id === Number(thisLetterId.letterId)) {
      thisLetter = { ...letter };
    }
  });

  return (
    <section>
      <h1>
        Letter from {thisLetter.senderName} to {thisLetter.recipientName}
      </h1>
      <p>{thisLetter.message}</p>
    </section>
  );
}
