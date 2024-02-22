import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "b97d55fa3b637349c2dc9d49c5fc7bc6",
     
    }
});

