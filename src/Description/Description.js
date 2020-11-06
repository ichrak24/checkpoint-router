import React from "react";
import { movieList } from "../Constants/data";
import { Link } from "react-router-dom";

function Description(props) {
  let title = props.match.params.title;
  const movie = movieList.filter((el) => el.title == title);
  return (
    <div>
      {movie.map((el) => (
        <div>
          {" "}
          <h1>Description page</h1>
          <h2>{el.title}</h2>
          <h3>{el.description}</h3>
          <iframe
            width="560"
            height="315"
            src={el.trailerSrc}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Link to={`/`}>
            <button
              className="btn btn-primary btn-normal btn-inline"
              target="_self"
            >
              Go Home
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Description;
