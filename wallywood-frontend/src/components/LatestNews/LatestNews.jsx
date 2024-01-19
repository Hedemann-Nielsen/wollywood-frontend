import React, { useEffect, useState } from "react";
import axios from "axios";

import style from "./LatestNews.module.scss";

export const LatestNews = () => {
  const [latest, setLatest] = useState({});
  const [secLatest, setSecLatest] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "http://localhost:3000/posters?sort_direction=desc";
    try {
      const result = await axios.get(url);
      setLatest(result.data[0]);
      setSecLatest(result.data[1]);
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <>
        <section className={style.LatestNews}>
            <h2>sidste nyt...</h2>
            <div className={style.LatestNewsGrid}>
                   <figure className={style.figure}>
                <img src={latest.image} alt="" />
                <div>
                    <h3>name</h3>
                    <p>deskription</p>
                    {/* <p>Genre: {latest.data[0].genres.map(genre => genre.title)}</p> */}
                    <button>Læs mere</button>
                </div>
            </figure>
            <figure className={style.figure}>
                <img src={secLatest.image} alt="" />
                <div>
                    <h3>name</h3>
                    <p>deskription</p>
                    {/* <p>Genre: {latest.data[0].genres.map(genre => genre.title)}</p> */}
                    <button>Læs mere</button>
                </div>
            </figure>
            </div>
         
        </section>
        </>
    );
};


  