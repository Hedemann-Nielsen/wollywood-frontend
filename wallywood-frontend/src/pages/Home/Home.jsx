
import Curtain  from "../../assets/images/curtain.jpg";
import { LatestNews } from '../../components/LatestNews/LatestNews';
import { MainWrapper } from '../../components/MainWrapper/MainWrapper';

export const Home = () => {
  return (
<>
  <MainWrapper>
    <img src={Curtain} alt="curtain image" title="curtain image" />
    <LatestNews></LatestNews>

  </MainWrapper>
</>

  );
}
""