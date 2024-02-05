import { NavBar } from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CartModal } from "../CartModal/CartModal";
import { useAuth } from "../Providers/AuthProvider";
import style from "./Header.module.scss";
import { FaShoppingBasket } from "react-icons/fa";
import { CartModalContent } from "../CartModal/CartModalContent";

const arrNavbar = [
  {
    url: "/home",
    title: "home",
  },
  {
    url: "/posters/drama",
    title: "posters",
  },
  {
    url: "/about",
    title: "about",
  },
  {
    url: "/contact",
    title: "contact",
  },
  {
    url: "/login",
    title: "login",
  },
];

export function Header() {
  const [modalIsOpen, setModalisOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const openModal = () => {
    setModalisOpen(true);
  };
  const closeModal = () => {
    setModalisOpen(false);
  };

  return (
    <>
      <header className={style.header}>
        <NavLink onClick={openModal}>
          <FaShoppingBasket className={style.basket} />
        </NavLink>
        <div className={style.headerNav}>
          <NavLink to="/" className={style.link}>
            <h1>wallywood</h1>
          </NavLink>
          <NavBar data={arrNavbar}></NavBar>
        </div>
      </header>
      <CartModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <CartModalContent isLoggedIn={isLoggedIn} closeModal={closeModal} />
      </CartModal>
    </>
  );
}