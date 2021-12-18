import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState("LOVE");

  return (
    <>
      <MovieContext.Provider value={"love"}>
        {props.children}
      </MovieContext.Provider>
    </>
  );
};
