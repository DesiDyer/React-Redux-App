import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchMovies } from "../store";

const Movies = (props) => {
  useEffect(() => {
    props.fetchMovies();
  }, []);

  return (
    <section>
      <h1 className="ui block header">
        {" "}
        <i className="video icon"></i> Studio Ghibli Movies
      </h1>
      {props.isLoading ? (
        <div className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      ) : null}
      {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
      {props.movies.length > 0 ? (
        <div>
          {props.movies.map((movie) => (
            <div key={movie.id} className="ui celled animated list">
              <div className="item">
                <div className="header">{movie.title}</div>
                {movie.description}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchMovies })(Movies);
