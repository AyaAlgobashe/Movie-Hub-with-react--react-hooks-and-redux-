import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../apis/movie";
const posterBaseUrl = "https://image.tmdb.org/t/p/w500";


export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({})
  
  const params = useParams();
  console.log(params);

  
  useEffect(() => {
   
    getMovieDetails(params.id)
      .then((res) => {
        console.log(res);
        setMovieDetails(res.data)
      })
      .catch((err) => console.log(err))
      
  }, [params.id]);

  return( <div>
    <h2>Movies Details</h2>
    <hr />
    <div className="card h-100 ">
      <div className="row ">
        <div className="col-7">
        <img style={{width:"50%"}}  src={`${posterBaseUrl}${movieDetails.poster_path}`} className="card-img-top" alt="..." />

        </div>
        <div className="col-5 mt-5">
        <div className="card-body ">
        <h2 className="card-title" style={{color:" rgb(65, 65, 23);"}}>{movieDetails.title}</h2>

        
        
        <h5>{movieDetails.overview}</h5>
        <h5 className="card-text">{movieDetails.release_date} </h5>
        <h3 className="card-text" style={{color:" rgb(65, 65, 23);"}}>languge : {movieDetails.original_language} </h3>

    
      </div>
        </div>
      </div>
     
    </div>
    
  </div>)
}
