import React, { useEffect, useState } from "react";
import "./Row.css";
// import axios from "./axios/axios";

function Row()
// ({ title, fetchUrl }) 
{
  //   const [movies, setMovies] = useState([]);
  //   useEffect(() => {
  //     async function fetchData() {
  //       let request = await axios.get(fetchUrl);
  //       console.log(request);
  //     //   setMovies(request.data.results);
  //       return request;
  //     }
  //     fetchData();
  //   }, [fetchUrl]);
  return (
    <div>
      {/* <h1>{title}</h1> */}
      <h1>row</h1>
    </div>
  );
}

export default Row;
