import axios from "axios"
import { useEffect, useState } from "react"

export const RandomPosters = () => {
    const [apiData, setApiData] = useState()

const getData  = async () => {
  const endpoint = `http://localhost:3000/posters?sort_key=random&limit=2`
  const result = await axios.get(endpoint)
  console.log(result.data);
  setApiData(result.data);
}

useEffect(() => {
getData();
},[setApiData])


  return (
    <div>RandomPosters</div>
  )
}
