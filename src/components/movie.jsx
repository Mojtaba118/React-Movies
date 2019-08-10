import React from "react";
import Like from "./like";
import { Link } from "react-router-dom";

const Movie = ({ data, onLike, onDelete }) => {
  return (
    <div className="moviesContainer">
      {data.map(m => (
        <div className="movieContainer" key={m.id}>
          <img src={m.image} alt="Not Found" className="movieImage" />
          <div className="movieBody">
            <Link to={`/movie/${m.id}`} className="movieTitle">
              {m.title}
            </Link>
            <div className="movieButtons">
              <Like data={m} onLike={() => onLike(m)} />
              <i className="far fa-trash-alt" onClick={() => onDelete(m)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movie;
