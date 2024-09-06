import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios/axios";
const base_url = "https://media.themoviedb.org/t/p/w220_and_h330_face/";
function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);
  return (
    <div className="row ms-5">
      <h1>{title}</h1>
      <div className="row_posters overflow-y-hidden overflow-x-scroll p-2">
        {movies?.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
