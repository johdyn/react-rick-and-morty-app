import "../character.css";
import { Link } from "react-router-dom";
export default function Character({ name, picture, status, id }) {
  return (
    <div className="character-section">
      <section className="character-unit">
        <Link to={`/characters/${id}`}>{name}</Link>
        <p>{status}</p>
        <img src={picture} />
      </section>
    </div>
  );
}
