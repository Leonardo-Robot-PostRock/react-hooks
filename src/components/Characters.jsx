import React, { useState, useEffect } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="Characters">
      {characters.map((character) => (
        <div className="container">
          <h2 className="item item-1">{character.name}</h2>
          <img src={character.image} className="item item-6" alt="character"/>
          <h3 className="item item-2">{character.status}</h3>
          <h3 className="item item-3">{character.species}</h3>
          <h3 className="item item-4">{character.type}</h3>
          <h3 className="item item-5">{character.gender}</h3>
          <h3 className="item item-6">{character.origin.name}</h3>
          <h3 className="item item-6">{character.location.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Characters;
