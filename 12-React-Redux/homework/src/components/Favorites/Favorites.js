import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";
import {removeFavorite} from "../../actions";

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
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                <button onClick={()=>this.props.removeFavorite(movie.id)}>Eliminar</button>
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

export default connect(mapStateToProps, {removeFavorite})(ConnectedList);
