import axios from "axios";

const apiKey = process.env.REACT_APP_OMDB_API;

function fetchRandomMovie(id) {
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
  return axios.get(url);
}

export default fetchRandomMovie;
