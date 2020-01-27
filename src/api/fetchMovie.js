import axios from "axios";

// WIP
function fetchRandomMovie() {
  return axios.get("http://www.omdbapi.com/?apikey=819fc38b&i=tt0000001");
}

export default fetchRandomMovie;
