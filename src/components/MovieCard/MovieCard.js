import React from "react";
import StarRatingComponent from "react-star-rating-component";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./MovieCard.css";

function MovieCard({ id, title, description, posterUrl, trailerSrc, rate }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <img src={posterUrl} alt="" width="285px" height="350" />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{trailerSrc}</Card.Text>
          <Card.Text>
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={rate}
            />
          </Card.Text>
          <p>{description}</p>
          <Link to={`/description/${title}`}>
            <button
              className="btn btn-primary btn-normal btn-inline"
              target="_self"
            >
              Description
            </button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
MovieCard.defaultProps = {
  movies: {},
};

MovieCard.propTypes = {
  movies: PropTypes.object,
};
