import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const {favoriteDentists, dispatchFavorites} = useGlobalStates();

  let isFavorite = favoriteDentists.some(dentist => dentist.id === id);

  const addFav = (name, username, id) => {
    dispatchFavorites({
      type: "ADD",
      payload: {
        id,
        username,
        name
      }
    });
  }

  const deleteFav = (id) => {
    dispatchFavorites({
      type: "REMOVE",
      payload: {
        id
      }
    });
  }

  return (
    <>
    <div className="card">
        <img src="./images/doctor.jpg" alt="Imagen de doctor" />
        <Link to={"/dentist/" + id}>
          <h3>{name}</h3>
        </Link>
        <p>{username}</p>
        {isFavorite
          ? <button onClick={() => deleteFav(id)} className="removeButton">Delete Fav</button>
          : <button onClick={() => addFav(name, username, id)} className="favButton">Add fav</button>
        }
    </div>
    </>
  );
};

export default Card;
