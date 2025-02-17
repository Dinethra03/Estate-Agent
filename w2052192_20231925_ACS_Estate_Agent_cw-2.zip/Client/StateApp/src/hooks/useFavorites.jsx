import React, { createContext, useContext, useState, useEffect } from 'react';

//Creating a context to share favorite properties accross the app
const FavoritesContext = createContext();

//Defining the FavoritesProvider component to maintain favorite properties and make them available to child components.
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  //To initialize the favorites list from local storage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  //Function to add a property to favorites list.
  const addToFavorites = (property) => {
    setFavorites((prevFavorites) => { //Updating the favorites List and storing it in Local Storage
      const newFavorites = [...prevFavorites, property];
      localStorage.setItem('favorites', JSON.stringify(newFavorites)); //Saving the updated favorits list to local storage
      return newFavorites;
    });
  };

  //Funvtion to remove a property from favorites list by its id
  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((fav) => fav.id !== id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  //Function to clear all properties from favorites list
  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favorites');
  };

  //Fuction to check if a property with the given ID is in the favorites list
  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

//Customer hook to use the FavoritesContext in other componenets
export function useFavorites() {
  //Returning the context value (favorites list and functions to handle favorites)
  return useContext(FavoritesContext);
}