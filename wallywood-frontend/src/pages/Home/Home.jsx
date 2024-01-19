import style from './Home.module.scss';

import Curtain  from "../../assets/images/curtain.jpg";
import { LatestNews } from '../../components/LatestNews/LatestNews';

export const Home = () => {
  return (
<main className={style.main}>
    <img src={Curtain} alt="curtain image" title="curtain image" />
    <LatestNews></LatestNews>
</main>
  );
}
