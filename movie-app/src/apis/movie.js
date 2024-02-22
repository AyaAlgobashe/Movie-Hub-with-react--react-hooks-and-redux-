import { axiosInstance } from "./config";

export const getMovieList = (language, page) => {
  return axiosInstance.get('/movie/popular', {
    params: {
      language,
      page,
    },
  });
}

export const getMovieDetails = (id) => {
  return axiosInstance.get(`/movie/${id}`);
}