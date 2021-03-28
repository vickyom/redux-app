import React from "react";
import { LazyImage } from "react-lazy-images";

export default function moviesTemp(props) {
  const name = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  const { pmvData } = props;
  return (
    <div className="row">
      {pmvData &&
        pmvData.map((mov) => (
          <div
            key={mov.id}
            className="col-md-3 p-1 mb-3 mt-3"
            id={mov.publishedAt}
          >
            <a href={`/movies/${mov.id}`}>
              <div className="card">
                <LazyImage
                  src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                  alt="Image"
                  className="card-img-top"
                  placeholder={({ imageProps, ref }) => (
                    <img
                      ref={ref}
                      src={`http://placehold.it/221X332`}
                      alt={mov.alt}
                    />
                  )}
                  actual={({ imageProps }) => <img {...imageProps} />}
                />
                <div className="card-body">
                  <h6 style={name} className="card-title name ">
                    {mov.title}
                  </h6>
                  <div className="row">
                    <div className="col-4 metadata">
                      <small>
                        <i className="fa fa-star" aria-hidden="true" />
                        <span> {mov.vote_average}</span>
                      </small>
                    </div>
                    <div className="col-8 metadata">
                      <small>Adventure. Sci-Fi</small>
                    </div>
                  </div>
                  <p className="card-text">
                    <small>
                      {new Date(mov.release_date)
                        .toDateString()
                        .substring(0, 11)}
                    </small>
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
}
