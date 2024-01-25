import React, { useEffect, useState } from "react";
import axios from "axios";

import style from "./LatestNews.module.scss";

export const LatestNews = () => {
  const [latest, setLatest] = useState({});
  const [secLatest, setSecLatest] = useState({});
  const [latestGenre, setLatestGenre] = useState({});
  const [secLatestGenre, setSecLatestGenre] = useState({});
  const [details, setDetails] = useState({});
  const [secLatestDetails, setSecLatestDetails] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "http://localhost:3000/posters?sort_direction=desc";
    try {
      const result = await axios.get(url);
      setLatest(result.data[0]);
      setSecLatest(result.data[1]);
      setLatestGenre(result.data[0].genres[0]);
      setSecLatestGenre(result.data[1].genres[0]);

      const latestSlug = result.data[0].slug;
      const latestUrlDetail = await axios.get(`http://localhost:3000/posters/${latestSlug}`);
      const details = latestUrlDetail.data;
      setDetails(details.description);

      const secLatestSlug = result.data[1].slug;
      const secLatestUrlDetail = await axios.get(`http://localhost:3000/posters/${secLatestSlug}`)
      const secLatestDetails = secLatestUrlDetail.data;
      setSecLatestDetails(secLatestDetails.description);

    } catch (error) {
      console.error(error);
    }
  };
    return (
        <>
        <section className={style.LatestNews}>
            <h2>sidste nyt...</h2>
            <div className={style.LatestNewsGrid}>
                {/* venstre side, seneste plakat oploaded */}

                <figure className={style.figure}>
                  <img src={latest.image} alt="" />
                  <div>
                      <h3>{latest.name}</h3>
                      <div dangerouslySetInnerHTML={{ __html: details }} />
                      <p className={style.genre}>Genre: {latestGenre.title}</p>
                      <button>Læs mere</button>
                  </div>
                </figure>
                {/* højre side, anden seneste plakat oploaded */}
                <figure className={style.figure}>
                  <img src={secLatest.image} alt="" />
                  <div>
                    <h3>{secLatest.name}</h3>
                    <div dangerouslySetInnerHTML={{ __html: secLatestDetails }} />
                    <p className={style.genre}>Genre: {secLatestGenre.title}</p>
                    <button>Læs mere</button>
                  </div>
                </figure>
            </div>
         
        </section>
        </>
    );
};


  