import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberinStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];

  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td scope="col">{movie.title}</td>
              <td scope="col">{movie.genre.name}</td>
              <td scope="col">{movie.numberInStock}</td>
              <td scope="col">{movie.dailyRentalRate}</td>
              <th scope="col">
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </th>
              <td scope="col">
                <button onClick={() => onDelete(movie)} id={movie.id}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
