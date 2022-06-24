import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        {!this.props.favMovies.length && <h2>No hay películas</h2>}
        {this.props.favMovies.length > 0 && (
          <>
          <h2>Películas Favoritas</h2>
          <ul>
            {this.props.favMovies.map((movie) => (
              <li key={movie.id}>
                {movie.title}
                <button>
                  <Link to={`/favorites/${movie.id}`}>Ver detalles</Link>
                </button>
              </li>
            ))}
          </ul>
          </>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favMovies: state.favMovies,
  };
}

export default connect(mapStateToProps)(ConnectedList);
