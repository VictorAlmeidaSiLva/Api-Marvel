import React, { useEffect, useState } from "react";
import api from "../api";

function Characters() {
    const [characters, setCharacters] = useState([]);
    const pic = '.jpg'
    const size = '/portrait_fantastic'
  
    useEffect(() => {
      async function loadCharacters() {
        const response = await api.get("/v1/public/characters", {
          params: {
            ts: 1,
            apikey: "537b30d15b5f4cc9f88ad94eacc97aee",
            hash: "0d1b28ff07637c55ee96465753be577f"
          },
        });
        setCharacters(response.data.data.results);
      }
      loadCharacters();
    }, []);
  
    return (
      <div className="letraB">
          {characters.map((characters) => {
            return(
              <div className="row" key={characters.id}>
              <div className="col-6">
                <h1><strong> {characters.name} </strong></h1>
                <img src={characters.thumbnail.path + pic}></img>
              </div>
              <div className="col-6 text">
                <h3>
                  {characters.description}
                </h3>
              </div>
            </div>
            )
          })}
      </div>
    );
  }

  export default Characters