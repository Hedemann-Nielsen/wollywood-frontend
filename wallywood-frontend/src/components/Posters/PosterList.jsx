import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import style from "./PosterList.module.scss";

export const PosterList = () => {
  const [apiData, setApiData] = useState([])
  const { genre } = useParams()

  const getData = async () => {
    const endpoint = `http://localhost:3000/posters/list_by_genre/${genre}`
    const result = await axios.get(endpoint)
    console.log(result.data);
    setApiData(result.data);
  }

useEffect(() => {
  getData()
}, [genre])

  return (
    <>
    
    <div>
      <select name="sorter" className={style.select}>
        <option value="Sorter">Sorter</option>
          {apiData && apiData.map(item => {
            return (
              <option key={item.id}>{item.name}</option>
            )
})}
      </select>

    <div className={style.PosterListCard}>    
    {apiData && apiData.map(item => {
      return (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>kr. {apiData[0].price.toLocaleString("da-DK", { minimumFractionDigits: 2 })}</p>
          <button>Læg i kurv</button>
          <Link to={item.slug}>les mere</Link>
        </div>
      )
    })}
    </div></div>
    </>
  )
}
