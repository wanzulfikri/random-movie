import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./App.css";
import fetchRandomMovie from "./api/fetchMovie";

function handleClick(setState) {
  const promise = fetchRandomMovie();
  const fetchedMovie = promise
    .then(function(response) {
      setState(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function App() {
  const [movie, setMovie] = useState(null);
  // const { title } = movie;
  return (
    <div className="App">
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <Grid container justify="center">
              {movie ? movie.Title : "None"}
            </Grid>
            <Grid container justify="center">
              <Button
                onClick={() => handleClick(setMovie)}
                variant="contained"
                color="primary"
              >
                Random Movie
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
