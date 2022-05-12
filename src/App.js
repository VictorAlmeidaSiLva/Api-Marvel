import React, { useEffect, useState } from "react";
import api from "./api";
import md5 from "md5";
import "./App.css";

function App() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function loadComics() {
      const response = await api.get("/v1/public/comics", {
        params: {
          api_key: "e51b6f20392eb98fcfdf61a26a53c75d536762ff",
        },
      });
      setComics(response.data.results);
    }
    loadComics();
  }, []);

  return (
    <div>
      <center>
        {comics.map((comics) => {
          return
          <div>{comics.id}</div>
        })}
      </center>
    </div>
  );
}
export default App;
