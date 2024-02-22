import { useEffect, useState } from "react";
import { getMovieList } from "../apis/movie";
import MovieCard from "./movieCard";
import Search from "./search";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const fetchMovies = () => {
    getMovieList("en-US", currentPage)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const handleSearchMovie = (title) => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container">
      <Search data={movies} handleSearchMovie={handleSearchMovie} />
      <div className="pagination mb-5 " style={{padding:"10px",marginLeft:"39%"}}>
        <button className="btn btn-dark me-5"onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button className="btn btn-dark me-5">{currentPage}</button>
        <button className="btn btn-dark" onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <div className="col" key={movie.id}>
            <MovieCard data={movie} />
          </div>
        ))}
      </div>
      <div className="pagination " style={{padding:"10px", position:"absolute",left:"45%" }}>
        <button className="btn btn-dark me-5"onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button className="btn btn-dark me-5">{currentPage}</button>
        <button className="btn btn-dark" onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
























// import { useEffect, useState } from "react";
// import { getMovieList } from "../apis/movie";
// import MovieCard from "./movieCard";
// import Search from "./search";

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     getMovieList()
//       .then((res) => {
//         setMovies(res.data.results); 
//       })
//       .catch((err) => console.log(err));
//   }, [movies.results]);
//   const handleSearchMovie = (title) => {
//     const filteredMovies = movies.filter((movie) =>
//       movie.title.toLowerCase().includes(title.toLowerCase())
//     );
//     setMovies(filteredMovies);
//   };

//   return (
//     <div className="container">
//       <Search data={movies} handleSearchMovie={handleSearchMovie}/>
//     <div className="row row-cols-1 row-cols-md-3 g-4">
      
//       {movies.map((movie) => {
//         return (
//           <div className="col" key={movie.id}>
//             <MovieCard data={movie} />
//           </div>
//         );
//       })}
//     </div> 
//     </div>
//   );
 
// };

// export default MovieList;
