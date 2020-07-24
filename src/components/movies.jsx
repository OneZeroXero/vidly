import React, { Component } from "react";
import Like from "./common/like";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  renderMovies() {
    const { length: count } = this.state.movies;

    if (count === 0) return <h1>There are no Movies in the database</h1>;

    return (
      <React.Fragment>
        <h1>Showing {count} movies in the database.</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td scope="col">{movie.title}</td>
                <td scope="col">{movie.genre.name}</td>
                <td scope="col">{movie.numberInStock}</td>
                <td scope="col">{movie.dailyRentalRate}</td>
                <th scope="col">
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </th>
                <td scope="col">
                  <button
                    onClick={() => this.handleDelete(movie)}
                    id={movie.id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  render() {
    return this.renderMovies();
  }
}

export default Movies;
