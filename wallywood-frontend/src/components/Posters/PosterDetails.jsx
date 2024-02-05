import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from "./PosterDetails.module.scss";
import { PiSmileyFill } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { useAuth } from "../Providers/AuthProvider";

export const PosterDetails = () => {
  const [apiData, setApiData] = useState()
  const { poster } = useParams()
  const { register, handleSubmit, formState: { errors }} = useForm()
  const { loginData } = useAuth()

  const add2Cart = async data => {
      console.log(data);

      const options = {
        headers: {
          authorization: `Bearer ${loginData.access_token}`
        }
      }

      const endpoint = `http://localhost:3000/cart`
      const result = await axios.post(endpoint, data, options)
    
    }

    const getData  = async () => {
    const result = await axios.get (`http://localhost:3000/posters/${poster}`)
    setApiData(result.data);
  }
  
  useEffect(() => {
    getData();
  },[poster, setApiData])
  
  // if(!apiData.id) {
  //   return <div>Loading...</div>
  // }

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
            <form onSubmit={handleSubmit(add2Cart)}>
              <input type="hidden" defaultValue={apiData.id}{...register ('poster_id')}/>
              <input   
                        type="number" 
                        {...register('quantity', { required: true })}
                        className={style.stock}
                        placeholder={apiData.stock}
                        defaultValue={apiData.stock > 0 ? Math.min(apiData.stock, 1) : ''}
                        min="0"
                        max={apiData.stock} />
              <button>Læg i kurv</button>
            </form>
            
            <div className={style.smileyWrapper}>
              <PiSmileyFill  className={style.smiley} />
              <p>{apiData.stock} på lager</p>
            </div>
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
