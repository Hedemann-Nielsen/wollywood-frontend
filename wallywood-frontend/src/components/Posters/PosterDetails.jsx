import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from "./PosterDetails.module.scss";

export const PosterDetails = () => {
  const [apiData, setApiData] = useState()
  const { poster } = useParams()
  const cleanDescription = apiData.description.replace(/<\/?[^>]+(>|$)/g, "");
  
  const getData  = async () => {
    const endpoint = `http://localhost:3000/posters/${poster}`
  const result = await axios.get(endpoint)
  console.log(result.data);
  setApiData(result.data);
}

useEffect(() => {
getData();
},[poster])

  return (
    <div>
      {apiData ? (
        <>
        <div className={style.PosterDetails}>
          <img src={apiData.image} alt="" />
          <div>
            <h3>{apiData.name}</h3>
            <p>{cleanDescription}</p>
            <p>Størrelse{apiData.height} x {apiData.width}</p>
            <p>Varenummer(SKU): {apiData.id}</p>
            <h5>{apiData.price}</h5>
          </div>
        </div>
        </>
      ) : (
        <>
        <h2>Fejl i data</h2>
        <p>Fandt ingen data på den aktuelle post</p>
        </>
      )
    }
    </div>
//     <>
// <div>
//   {apiData ? ()}
// </div>
//       <div>
//         <img src=""></img> 
//       </div>
//       <div>
//         <h3>Navn</h3>
//         <p>Beskrivelse</p>
//         <p>Størrelse</p>
//         <p>Varenummer</p>
//         <h4>price</h4>
//       </div>
//     </>
     )
}
