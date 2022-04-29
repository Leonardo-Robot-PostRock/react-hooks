import React, { useState, useEffect, useReducer } from "react";
import useInitialState from "../hooks/useInitialState";
import "../styles/Characters.css";
import add from "../asset/icon/plus.png" 

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites.filter(item => item.id !== action.payload.id), action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const { bg } = useInitialState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };
  return (
    <>
      <div className="favorite">
        {favorites.favorites.map((favorite) => (
          <img
            key={favorite.id}
            src={favorite.image}
            alt="favorite character"
            className="imageFavorite"
          />
        ))}
      </div>
      <div className="Characters">
        {characters.map((character) => (
          <div className={"container " + bg} key={character.id}>
            <div className="container-character">
              <h2 className="item item-1">{character.name}</h2>
              <img
                src={character.image}
                className="item item-6"
                alt="character"
              />
              <button type="button" onClick={() => handleClick(character)}>
                <img src={add} alt="add favorite" />
              </button>
            </div>
            <div className="container-data">
              <h3 className="item item-2">{character.status}</h3>
              <h3 className="item item-3">{character.species}</h3>
              <h3 className="item item-5">{character.gender}</h3>
              <h3 className="item item-6">{character.origin.name}</h3>
              <h3 className="item item-6">{character.location.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Characters;
