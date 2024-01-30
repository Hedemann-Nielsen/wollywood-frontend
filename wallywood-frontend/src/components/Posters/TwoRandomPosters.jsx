import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import style from "./TwoRandomPosters.module.scss"

export const TwoRandomPosters = () =>  {
    const [apiData, setApiData] = useState([])

    const getData = async () => {
        const endpoint = "http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,image,slug,name,description"
        const result = await axios.get(endpoint)
        setApiData(result.data)
    }

    useEffect(() => {
        getData()
    }, [setApiData])

  return (
    <div>
        <h2>Udvalgte plakater</h2>
         <div className={style.homeGrid}>
            {apiData && apiData.map(item => {
            return (
                <figure key={item.id} className={style.figure}>
                    <img src={item.image} alt={item.name} />
                    <figcaption>
                        <h3>{item.name}</h3>
                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        <p>Genre: {item.genres[0].title}</p>
                        <Link
                        to={item.slug} >
                        <button>Læs mere</button>
                        </Link>
                    </figcaption>
                </figure>
                
        )
    })}
    </div>
</div>
  )
}


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import style from "./RandomPosters.module.scss";

// export const RandomPosters = () => {
//   const [first, setfirst] = useState({});
//   const [second, setsecond] = useState({});
//   const [firstGenre, setfirstGenre] = useState({});
//   const [secondGenre, setsecondGenre] = useState({});
//   const [details, setDetails] = useState({});
//   const [secondDetails, setsecondDetails] = useState({});

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     const url = "http://localhost:3000/posters?sort_key=random&limit=2";
//     // ændre alt data her fra så det kommer 2 random på forsiden
//     try {
//       const result = await axios.get(url);
//       setfirst(result.data[0]);
//       console.log(result.data[0]);
//       setsecond(result.data[1]);
//       setfirstGenre(result.data[0].genres[0]);
//       setsecondGenre(result.data[1].genres[0]);

//       const firstSlug = result.data[0].slug;
//       const firstUrlDetail = await axios.get(`http://localhost:3000/posters/${firstSlug}`);
//       const details = firstUrlDetail.data;
//       setDetails(details.description);

//       const secondSlug = result.data[1].slug;
//       const secondUrlDetail = await axios.get(`http://localhost:3000/posters/${secondSlug}`)
//       const secondDetails = secondUrlDetail.data;
//       setsecondDetails(secondDetails.description);

//     } catch (error) {
//       console.error(error);
//     }
//   };
//     return (
//         <>
        
//         <section className={style.firstNews}>
//             <h2>Tilfældige Posters</h2>
//             <div className={style.firstNewsGrid}>
//                 {/* venstre side, seneste plakat oploaded */}

//                 <figure className={style.figure}>
//                   <img src={first.image} alt="" />
//                   <div>
//                       <h3>{first.name}</h3>
//                       <div dangerouslySetInnerHTML={{ __html: details }} />
//                       <p className={style.genre}>Genre: {firstGenre.title}</p>
//                       <button>Læs mere</button>
//                   </div>
//                 </figure>
//                 {/* højre side, anden seneste plakat oploaded */}
//                 <figure className={style.figure}>
//                   <img src={second.image} alt="" />
//                   <div>
//                     <h3>{second.name}</h3>
//                     <div dangerouslySetInnerHTML={{ __html: secondDetails }} />
//                     <p className={style.genre}>Genre: {secondGenre.title}</p>
//                     <button>Læs mere</button>
//                   </div>
//                 </figure>
//             </div>
         
//         </section>
//         </>
//     );
// };


  