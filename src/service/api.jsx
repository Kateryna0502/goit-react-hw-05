import axios from "axios";
axios.defaults.baseURL =
  "https://api.themoviedb.org/3";

const options = {
  headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTNlZThkNmI0ZDUyOTE2NGRkODQwMjIyZTU4NjVlOSIsIm5iZiI6MTcyNDQxMTg4OC45OTcxLCJzdWIiOiI2NmM4NmUyMjM0MTkxNTk0MDNhMzNjMTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i7lWUoE9qXFOOhD4bnzlsdmlByhZAOjigE2ILO199LM",
      
          
  },
};

export const fetchTrendingMovies =
  async () => {
    const response = await axios.get(
        "trending/movie/day",
        
      options,
    );
    return response.data;
  };

export const fetchSearchMovie = async (
  query,
) => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options,
  );
  return response.data;
};

export const fetchMovieDetails = async (
  id,
) => {
  const response = await axios.get(
    `movie/${id}`,
    options,
  );
  return response.data;
};

export const fetchMovieCredits = async (
  id,
) => {
  const response = await axios.get(
      `movie/${id}/credits`,
      
  );
  return response.data.cast;
};

export const fetchMovieReview = async (
  id,
) => {
  const response = await axios.get(
    `movie/${id}/reviews`,
    options,
  );
  return response.data.results;
};