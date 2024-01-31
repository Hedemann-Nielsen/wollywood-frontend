import Curtain  from "../../assets/images/curtain.jpg";
import { MainWrapper } from "../../components/Wrappers/MainWrapper/MainWrapper";
import { TwoRandomPosters } from '../../components/Posters/TwoRandomPosters';
import style from "./Home.module.scss";

export const Home = () => {
  return (
<>
  <MainWrapper>
      <img src={Curtain} alt="curtain image" title="curtain image" className={style.image}/>
      <TwoRandomPosters></TwoRandomPosters>


  </MainWrapper>
</>

  );
}
