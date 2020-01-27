import React from "react";
import Button from "@material-ui/core/Button";
import "./App.css";
import fetchRandomMovie from "./api/fetchMovie";

async function handleClick(e) {
  const movieRequest = await fetchRandomMovie();
  console.log(movieRequest);
}

function App() {
  return (
    <div className="App">
      <Button onClick={handleClick} variant="contained" color="primary">
        Random Movie
      </Button>
    </div>
  );
}

export default App;
