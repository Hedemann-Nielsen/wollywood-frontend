import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";

export const NavBar = (props) => {
  return (
    <>
    <div className={style.navBar}>
        <ul>
            {props.data &&
            props.data.map((item, ItemIndex) => (
                <li key={ItemIndex}>
                  <NavLink 
                    to={`${item.toLowerCase()}`}
                    className={style.NavLink}
                    style={({ isActive }) => ({
                      color: isActive
                          ? "#d97852"
                          : "#524641",
                  })}
                  >
                    {item}
                  </NavLink>
                </li>
                
            ))}
        </ul>
    </div>
    </>
  );
};
