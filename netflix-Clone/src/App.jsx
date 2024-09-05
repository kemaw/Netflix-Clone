import React from "react";

import "./App.css";
import Row from "./Row";
// import requests from "./requests/requests";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Row
        title="Netflix Originals"
        // fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" />
      <Row />
      <Row />
      <Row />
      <Row />
    </>
  );
}

export default App;
