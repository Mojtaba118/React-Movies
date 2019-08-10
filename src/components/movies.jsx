import React, { Component } from "react";
import { getMovies } from "./../services/movieService";
import { getGenres } from "./../services/genreService";
import SideBar from "./sideBar";
import Movie from "./movie";
import Paginate from "./paginate";
import SearchBar from "./searchBar";
import { pagination } from "../utilities/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: [{ id: 0, title: "All Genres" }, ...getGenres()],
    currentGenre: { id: 0, title: "All Genres" },
    perPage: 5,
    currentPage: 1,
    searchValue: ""
  };

  handleLike = movie => {
    const likeMovie = { ...movie };
    likeMovie.like = !likeMovie.like;
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = likeMovie;
    this.setState({ movies });
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m != movie);
    this.setState({ movies });
  };

  handleGenreChange = genre => {
    const currentGenre = { ...genre };
    this.setState({ currentGenre, currentPage: 1 });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  onSearch = e => {
    this.setState({
      searchValue: e.target.value,
      currentGenre: { id: 0, title: "All Genres" }
    });
  };

  getSearchedMovies = () => {
    const { movies, searchValue: value } = this.state;
    return value === ""
      ? movies
      : movies.filter(m => m.title.toLowerCase().includes(value.toLowerCase()));
  };

  getFilteredMovies = items => {
    const { currentGenre } = this.state;
    return currentGenre.id === 0
      ? items
      : items.filter(m => m.genreId === currentGenre.id);
  };

  render() {
    const {
      movies,
      genres,
      currentGenre,
      perPage,
      currentPage,
      searchValue
    } = this.state;
    if (movies.length === 0) return <p>No Item To Show</p>;

    const searchMovies = this.getSearchedMovies();
    const filteredMovies = this.getFilteredMovies(searchMovies);
    const pagedMovies = pagination(filteredMovies, currentPage, perPage);

    return (
      <div className="row">
        <div className="col-2 position-relative">
          <SideBar
            genres={genres}
            currentGenre={currentGenre}
            onGenreChange={this.handleGenreChange}
          />
        </div>
        <div className="col-10">
          <SearchBar value={searchValue} onSearch={this.onSearch} />
          <Movie
            data={pagedMovies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Paginate
            itemCount={filteredMovies.length}
            perPage={perPage}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
