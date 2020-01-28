import axios from "axios";

// WIP
function fetchRandomMovie(id) {
  const url = `http://www.omdbapi.com/?apikey=819fc38b&i=${id}`;
  return axios.get(url);
}

export default fetchRandomMovie;
