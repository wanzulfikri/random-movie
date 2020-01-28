import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import fetchRandomMovie from "./api/fetchMovie";

const useStyles = makeStyles({
  media: {
    height: 200,
    objectFit: "scale-down",
    backgroundColor: "#f5f5f5"
  }
});

function handleClick(setState) {
  const promise = fetchRandomMovie();
  promise
    .then(function(response) {
      setState(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function App() {
  const classes = useStyles();
  const [movie, setMovie] = useState("");
  return (
    <div className="App">
      <Container maxWidth="xs">
        <Card>
          <CardMedia
            className={classes.media}
            component="img"
            image="https://m.media-amazon.com/images/M/MV5BZmUzOWFiNDAtNGRmZi00NTIxLWJiMTUtYzhkZGRlNzg1ZjFmXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
          ></CardMedia>
          <CardContent>
            <Grid container justify="center">
              {!movie ? (
                <Typography variant="h6">
                  Click the button below for a random movie
                </Typography>
              ) : (
                <MovieInfo movie={movie} />
              )}
            </Grid>
          </CardContent>
        </Card>
        <Grid container justify="center">
          <Button
            onClick={() => handleClick(setMovie)}
            variant="contained"
            color="primary"
          >
            Random Movie
          </Button>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

function MovieInfo({ movie }) {
  const { Title, Year, Plot, Genre } = movie;
  return (
    <React.Fragment>
      <Typography variant="h6">{`${Title} (${Year})`}</Typography>
      <Typography variant="body2">{Plot}</Typography>
      <Typography variant="subtitle2" color="textSecondary" component="p">
        {Genre}
      </Typography>
    </React.Fragment>
  );
}
