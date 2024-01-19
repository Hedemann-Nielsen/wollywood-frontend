import { NavBar } from "../NavBar/NavBar";
import { NavLink } from 'react-router-dom';


import { FaShoppingBasket } from "react-icons/fa";
import style from "./Header.module.scss";

const arrNavbar = ["home", "plakater", "about", "contact", "login"];

export function Header() {
  return (
    <>
    <header className={style.header}>
      <FaShoppingBasket className={style.basket}/>
      <div className={style.headerNav}>
        <NavLink to="/" className={style.link}><h1>wallywood</h1></NavLink>
        <NavBar data={arrNavbar}></NavBar>
      </div>
    </header>
    </>
  )
}
