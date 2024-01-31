import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from "./PosterDetails.module.scss";

export const PosterDetails = () => {
  const [apiData, setApiData] = useState()
  const [details, setDetails] = useState({});
  const { poster } = useParams()

  const getData  = async () => {
    const endpoint = `http://localhost:3000/posters/${poster}`
    const result = await axios.get(endpoint)
    console.log(result.data);
    setApiData(result.data);
    setDetails(result.description);
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

            <p dangerouslySetInnerHTML={{ __html: apiData.description }}></p>

            <p>Størrelse: {apiData.height} x {apiData.width}</p>
            <p>Varenummer(SKU): {apiData.id}</p>
            <h5>kr. {apiData.price.toLocaleString("da-DK", { minimumFractionDigits: 2 })}</h5>
          <input   
            type="number"
            className={style.stock}
            placeholder={apiData.stock}
            defaultValue={apiData.stock > 0 ? Math.min(apiData.stock, 1) : ''}
            max={apiData.stock} />
          <button>Læg i kurv</button>
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

     )
}
