import React from 'react'
import { useSelector } from 'react-redux'

export default function FavirotMovies() {
  const fave = useSelector(state => state.favirot.favirot);
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className='container'>
      <h1 className='mb-5'>Favirots Movies</h1>
    <div className='row '>

      {fave.map((movie, index) => (
        <div className='col-4 '>
          <div className="card h-100" key={index}>
            <img src={`${posterBaseUrl}${movie.poster_path}`}  style={{ height:"80%" }} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title" style={{ cursor: "pointer" }} >{movie.title}</h5>
              <p className="card-text">{movie.release_date} </p>

            </div>
          </div>
        </div>
      ))}

    </div>
    </div>

  )
}
