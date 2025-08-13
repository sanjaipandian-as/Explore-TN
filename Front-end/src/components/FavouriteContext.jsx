// FavouriteContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1. Create the context
const FavouriteContext = createContext();

// 2. Create a hook for easy access
export const useFavourites = () => useContext(FavouriteContext);

// 3. Provider component to wrap the app
export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (place) => {
    setFavourites((prev) => {
      const exists = prev.find((p) => p.title === place.title);
      return exists
        ? prev.filter((p) => p.title !== place.title)
        : [...prev, place];
    });
  };

  return (
    <FavouriteContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};
