import React, { useEffect, useState } from "react";
import api from "../api";

function EventsMarvel() {
    const [comics, setComics] = useState([]);
    const pic = '.jpg'
    const size = '/portrait_fantastic'
  
    useEffect(() => {
      async function loadComics() {
        const response = await api.get("/v1/public/events", {
          params: {
            ts: 1,
            apikey: "537b30d15b5f4cc9f88ad94eacc97aee",
            hash: "0d1b28ff07637c55ee96465753be577f"
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
                <img src={comic.thumbnail.path + size + pic}></img>
              </div>
            )
          })}
        </center>
      </div>
    );
  }

  export default EventsMarvel