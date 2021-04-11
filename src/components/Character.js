import "../character.css";
import { Link } from "react-router-dom";
export default function Character({ name, picture, status, id }) {
  return (
    <div className="character-section">
      <section className="character-unit">
        <img src={picture} className="character__image" />
        <Link to={`/characters/${id}`} className="character__link-name">
          {name}
        </Link>
      </section>
    </div>
  );
}
