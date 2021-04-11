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
      {id}
      <h2>{user.first_name}</h2>
      <img src={user.avatar} alt={user.first_name} />
      <button onClick={() => history.goBack()}> Back </button>
    </div>
  );
}
