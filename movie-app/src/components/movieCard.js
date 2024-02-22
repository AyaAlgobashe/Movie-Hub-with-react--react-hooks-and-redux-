import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToMovieWatch, removeMovie } from "../store/slice/faverotSlice";
import { useRef } from "react";

function MovieCard(props) {
  const { data } = props;
  const navigate = useNavigate();
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500/";
  const dispatch = useDispatch();
  const refIcon = useRef();

  const addColor = () => {
    refIcon.current.style.backgroundColor = "rgb(65, 65, 23)";
  };

  const removeColor = () => {
    refIcon.current.style.backgroundColor = "";
  };

  return (
    <div className="card h-100">
      <img src={`${posterBaseUrl}${data.poster_path}`} className="card-img-top" alt="..."  style={{ height:"80%" }}/>
      <div className="card-body">
        <h5 className="card-title" style={{ cursor: "pointer" }} onClick={() => navigate(`/movie/${data.id}`)}>
          {data.title}
        </h5>
        <p className="card-text">{data.release_date}</p>
        <i
          className="bi bi-heart"
          ref={refIcon}
          style={{ cursor: "pointer", width: "70px" }}
          onClick={() => {
            dispatch(addToMovieWatch(data));
            addColor();
          }}
          onDoubleClick={() => {
            removeColor();
            dispatch(removeMovie(data));
          }}
        ></i>
      </div>
    </div>
  );
}

export default MovieCard;
