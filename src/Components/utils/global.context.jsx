import { useState, useEffect, useContext, createContext, useReducer } from "react";
import { favoriteReducer } from "../../reducer/favoriteReducer";
import { themeReducer } from "../../reducer/themeReducer";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [dentists, setDentists] = useState([]);
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const [favoriteDentists, dispatchFavorites] = useReducer(favoriteReducer, [], initFav);

  function initFav(initialFavState) {
    return localStorage.getItem("favs")
      ? JSON.parse(localStorage.getItem("favs"))
      : initialFavState;
  }

  useEffect(() => {
    async function fetchData() {
      let response = await fetch("https://jsonplaceholder.typicode.com/users")
      let info = await response.json();
      return info;
    }
    fetchData().then(data => {
      setDentists(data);
    })
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favoriteDentists))
  }, [favoriteDentists])

  return (
    <ContextGlobal.Provider value={{dentists, state, dispatch, favoriteDentists, dispatchFavorites}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates = () => {
  return useContext(ContextGlobal);
}
