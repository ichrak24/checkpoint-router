import React from "react";
import StarRatingComponent from "react-star-rating-component";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";



function MovieCard({ title, description, posterUrl, rate }) {
  return (
    <div>
      <Card style={{ width: "18rem"  }}>
        <img  src={posterUrl} alt=""  width="285px" height="350" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <Card.Text>
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={rate}
            />
          </Card.Text>
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
