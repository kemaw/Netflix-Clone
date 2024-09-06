import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios/axios";
import requests from "./requests/requests";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request?.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  //   console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://media.themoviedb.org/t/p${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title ||
            movie?.name ||
            movie?.original_name ||
            movie?.original_title}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;

//https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg

//https://media.themoviedb.org/t/p/w220_and_h330_face/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg

//https://media.themoviedb.org/t/p/w220_and_h330_face/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg
