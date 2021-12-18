import React, { useContext, useState } from "react";
import { MovieProvider } from "./movie.context.react.js";
import { MovieContext } from "./movie.context.react.js";

function App() {
  //   let cookies = localStorage.setItem("name", "Bob");
  //   localStorage.removeItem("name");
  //   console.log(cookies);

  let cookie = (document.cookie =
    "name=Kyle; expires=" + new Date(9999, 0, 1).toUTCString());

  document.cookie =
    "lastName=Smith; expires=" + new Date(90000, 0, 1).toUTCString();

  console.log(cookie);
  return (
    <div>
      <h3>hi</h3>
    </div>
  );
}

export default App;
