import axios from "axios";

// WIP
async function fetchRandomMovie() {
  return await axios
    .get("http://www.omdbapi.com/?apikey=819fc38b&i=tt0000001")
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default fetchRandomMovie;
