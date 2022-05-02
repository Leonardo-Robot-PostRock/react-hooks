import React, { useState, useEffect, useReducer, useMemo } from "react";
import useInitialState from "../hooks/useInitialState";
import "../styles/Characters.css";
import add from "../asset/icon/plus.png";
import deleteFavourite from "../asset/icon/delete.png";

const initialState = {
  favourites: [],
};

const favouriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourites: [
          ...state.favourites.filter((item) => item.id !== action.payload.id),
          action.payload,
        ],
      };
    case "REMOVE_TO_FAVOURITE":
      return {
        ...state,
        favourites: [
          ...state.favourites.filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favourites, dispatch] = useReducer(favouriteReducer, initialState);
  const [search, setSearch] = useState("");
  const { bg } = useInitialState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favourite) => {
    dispatch({
      type: "ADD_TO_FAVOURITE",
      payload: favourite,
    });
  };

  const handleClickRemove = (favourite) => {
    dispatch({
      type: "REMOVE_TO_FAVOURITE",
      payload: favourite,
    });
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <>
      <div className="favourite">
        <div className="container-inputSearch">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Buscar"
          />
        </div>
        {favourites.favourites.map((favourite) => (
          <div className="favourite--section" key={favourite.id}>
            <img
              key={favourite.id}
              src={favourite.image}
              alt="favourite character"
              className="imageFavourite"
            />
            <button
              className="favourite--button__color"
              onClick={() => handleClickRemove(favourite)}
            >
              <img
                className="favourite--button__size"
                src={deleteFavourite}
                alt="delete icon"
              />
            </button>
          </div>
        ))}
      </div>
      <div className="Characters">
        {filteredUsers.map((character) => (
          <div className={"container " + bg} key={character.id}>
            <div className="container-character">
              <h3 className="item item-1">{character.name}</h3>
              <img
                src={character.image}
                className="item item-6"
                alt="character"
              />
              <button type="button" onClick={() => handleClick(character)}>
                <img src={add} alt="add favourite" />
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
