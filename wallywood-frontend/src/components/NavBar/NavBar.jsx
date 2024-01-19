import style from "./NavBar.module.scss";

export const NavBar = (props) => {
  return (
    <>
    <div className={style.navBar}>
        <ul>
            {props.data &&
            props.data.map((item, ItemIndex) => (
                <li key={ItemIndex}>
                    <a href={`${item.toLowerCase()}`}>{item}</a>
                </li>
                
            ))}
        </ul>
    </div>
    </>
  );
};
