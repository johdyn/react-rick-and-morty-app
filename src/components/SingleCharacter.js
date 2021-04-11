import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SingleCharacter() {
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((dataFromApi) => {
        setUser(dataFromApi);
      });
  }, [id]);

  return (
    <div>
      <section className="Single-character-section">
        {id}
        <h2>{user.name}</h2>
        <img src={user.image} alt={user.name} />
        <ul className="character-list">
          <li>Status: {user.status}</li>
          <li>Gender: {user.gender}</li>
          <li>Species: {user.species}</li>
          <li>Type: {user.type}</li>
        </ul>
        <button onClick={() => history.goBack()}> Back </button>
      </section>
    </div>
  );
}
