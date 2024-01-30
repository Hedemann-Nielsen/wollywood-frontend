import Curtain  from "../../assets/images/curtain.jpg";
import { MainWrapper } from '../../components/MainWrapper/MainWrapper';
import { TwoRandomPosters } from '../../components/Posters/TwoRandomPosters';

export const Home = () => {
  return (
<>
  <MainWrapper>
    <img src={Curtain} alt="curtain image" title="curtain image" />
   <TwoRandomPosters></TwoRandomPosters>

  </MainWrapper>
</>

  );
}
