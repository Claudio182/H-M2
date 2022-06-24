import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, clearState } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getMovieDetail(id);
    }

    componentWillUnmount() {
        this.props.clearState();
    }


    render() {
        return (
            <div className="movie-detail">
                <h2>Titulo: {this.props.moviesDetail.Title}</h2>
                <img src={this.props.moviesDetail.Poster} alt={this.props.moviesDetail.Title}/>
                <h3>Duractions: {this.props.moviesDetail.Runtime}</h3>
                <h3>Año: {this.props.moviesDetail.Year}</h3>
                <h3>Director: {this.props.moviesDetail.Director}</h3>
                <h3>Actors: {this.props.moviesDetail.Actors}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        moviesDetail: state.moviesDetail
    };
}



export default connect(mapStateToProps, { getMovieDetail, clearState })(Movie);