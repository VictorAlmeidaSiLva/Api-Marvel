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
        {comics.map((comic) => {
          return (
            <div className="row" key={comic.id}>
              <div className="col-6">
                <h1><strong> {comic.title} </strong></h1>
                <img src={comic.thumbnail.path + pic}></img>
              </div>
              <div className="col-6 text">
                <h3>
                  {comic.description}
                  <hr></hr>
                  Start: {comic.start}
                  <hr></hr>
                  End: {comic.end}
                </h3>
              </div>

            </div>
          )
        })}
    </div>
  );
}

export default EventsMarvel