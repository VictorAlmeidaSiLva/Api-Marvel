import React, { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [comics, setComics] = useState([]);
  const pic = '.jpg'

  useEffect(() => {
    async function loadComics() {
      const response = await api.get("/v1/public/events", {
        params: {
          ts: 1,
          apikey: "4bea33763caeb301c6e683dede9e63b9",
          hash: "df7c7ce85d3e60046bd008a53b5cce3b"
        },
      });
      setComics(response.data.data.results);
    }
    loadComics();
  }, []);

  return (
    <div>
      <center>
        {comics.map((comic) => {
          return(
            <div key={comic.id}>
              <div>{comic.title}</div>
              <div>{comic.description}</div>
              <img src={comic.thumbnail.path + pic}></img>
            </div>
          )
        })}
      </center>
    </div>
  );
}
export default App;
