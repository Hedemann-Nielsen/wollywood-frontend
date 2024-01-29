import { NavLink } from "react-router-dom";
import style from "./GenreNav.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export const GenreNav = () => {
const [apiData, setApiData] =useState([])

const getData = async () => {
  const endpoint = `http://localhost:3000/genre`
  const result = await axios.get(endpoint)
  setApiData(result.data);
}
useEffect(() => {
  getData()
}, [setApiData])


  return (
   <nav className={style.GenreNav}>
    <h2>Plakater</h2>

    <h3>Filtre</h3>
    <ul>
      <p>Genre</p>
      {apiData && apiData.map(item => {
        return (
          <li key={item.id}>
            <NavLink 
              to={item.slug} 
              className={style.Navlink} 
              style={({ isActive }) => ({
                color: isActive
                    ? "#524641"
                    : "#d97852",
            })}
              >
                {item.title} 
            </NavLink>
          </li>
        )
      })}
    
    </ul>
   </nav>
  );
};
