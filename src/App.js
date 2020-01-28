import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Chip from "@material-ui/core/Chip";
import "./App.css";
import fetchRandomMovie from "./api/fetchMovie";
import getRandomIMDBId from "./utility/getRandom";

const useStyles = makeStyles({
  media: {
    height: 200,
    objectFit: "scale-down",
    backgroundColor: "#f5f5f5"
  },
  root: {
    marginTop: 4
  },
  card: {
    paddingBottom: 16
  }
});

function handleClick(setState, setIsFetching) {
  const id = getRandomIMDBId();
  const promise = fetchRandomMovie(id);
  promise
    .then(function(response) {
      if (response.data.Error) {
        handleClick(setState, setIsFetching);
      } else {
        setIsFetching(false);
        setState(response.data);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

function App() {
  const classes = useStyles();
  const [movie, setMovie] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  return (
    <div className="App">
      <Container maxWidth="xs">
        <Card>
          <MovieImage posterURL={movie.Poster} />
          <CardContent classes={classes.card}>
            {!movie ? (
              <Typography variant="h6" align="center">
                No movie
              </Typography>
            ) : (
              <MovieInfo movie={movie} />
            )}
          </CardContent>
        </Card>
        <Button
          onClick={() => {
            setIsFetching(true);
            handleClick(setMovie, setIsFetching);
          }}
          variant="contained"
          color="primary"
          fullWidth={true}
          className={classes.root}
        >
          Random Movie
        </Button>
        {isFetching ? (
          <LinearProgress
            className={classes.root}
            variant="query"
            color="secondary"
          />
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}

const useMovieInfoStyles = makeStyles({
  root: {
    // backgroundColor: "#f5c518",
    // color: "#000000"
  }
});

function MovieInfo({ movie }) {
  const classes = useMovieInfoStyles();
  const { Title, Year, Plot, Genre, imdbRating } = movie;
  console.log(typeof parseFloat(imdbRating));
  let ratingLabel;
  if (imdbRating != "N/A") {
    ratingLabel = `${imdbRating}/10`;
  } else {
    ratingLabel = `${imdbRating}`;
  }
  return (
    <React.Fragment>
      <Typography
        variant="h6"
        align="center"
      >{`${Title} (${Year})`}</Typography>
      <Typography variant="subtitle2" color="textSecondary" align="center">
        {Genre}
      </Typography>
      <Typography variant="body2">{Plot}</Typography>
      <CardActions>
        <Button className={classes.root} size="small">
          IMDb
        </Button>{" "}
        <Chip size="small" label={ratingLabel} />
      </CardActions>
    </React.Fragment>
  );
}

function MovieImage({ posterURL }) {
  const classes = useStyles();
  if (typeof posterURL === "undefined" || posterURL === "N/A") {
    posterURL =
      "https://upload.wikimedia.org/wikipedia/commons/6/62/%22No_Image%22_placeholder.png";
  }
  return (
    <CardMedia
      className={classes.media}
      component="img"
      image={posterURL}
    ></CardMedia>
  );
}

export default App;
