import { Outlet } from 'react-router-dom';
import { GenreNav } from '../../components/Posters/GenreNav';
import style from "./Posters.module.scss";

export const Posters = () => {
    return (
      <>
        <div className={style.Genrenav}>
          <GenreNav></GenreNav>
          <Outlet></Outlet>
        </div>
      </>     
  );
}
