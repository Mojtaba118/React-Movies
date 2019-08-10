import React from "react";

const SideBar = ({ genres, currentGenre, onGenreChange }) => {
  const generateClassName = function(genre) {
    let classes = "list-group-item list-group-item-action ";
    classes += genre.id === currentGenre.id ? "active" : "";
    return classes;
  };
  return (
    <div className="list-group mt-3">
      {genres.map(genre => (
        <a
          href="#"
          key={genre.id}
          className={generateClassName(genre)}
          onClick={() => onGenreChange(genre)}
        >
          {genre.title}
        </a>
      ))}
    </div>
  );
};

export default SideBar;
