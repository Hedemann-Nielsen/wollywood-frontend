import { MainWrapper } from "../../components/MainWrapper/MainWrapper";
import style from "./Login.module.scss";
import { FaStarOfLife } from "react-icons/fa";

export const Login = () => {
  return (
<>
  <MainWrapper>
    <div className={style.content}>
      <h2>login</h2>
      <form  className={style.form}>
        <div>
        <label htmlFor="user">Brugernavn: <FaStarOfLife className={style.star} /></label>
        <input id="user" />
        </div>
        <div>
        <label htmlFor="password">Password: <FaStarOfLife className={style.star} /></label>
        <input type="password" id="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  </MainWrapper>
</>
  );
}
