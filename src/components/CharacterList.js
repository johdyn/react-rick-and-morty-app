import { useEffect, useState } from "react";
import Character from "./Character";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState([1, 2, 3, 4]);

  useEffect(() => {
    console.log("first render");
    console.log(page);
    let url = `https://rickandmortyapi.com/api/character/${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters((prevCharacters) => {
          return [...prevCharacters, ...data];
        });
        // setTotalPages(data.info.pages);
      });
  }, [page]);

  function renderCharacters() {
    console.log(characters);
    const characterComponents = characters.map((character) => (
      <Character
        name={character.name}
        picture={character.image}
        status={character.status}
        id={character.id}
      />
    ));
    console.log(characterComponents);
    return characterComponents;
  }

  function handleLoadMore() {
    let valueOne = page[0] + 4;
    let valueTwo = page[1] + 4;
    let valueThree = page[2] + 4;
    let valueFour = page[3] + 4;
    setPage([valueOne, valueTwo, valueThree, valueFour]);
  }
  return (
    <div>
      <article className="CharacterList-render">{renderCharacters()}</article>
      <button onClick={handleLoadMore}>More</button>
    </div>
  );
}

export default CharacterList;
