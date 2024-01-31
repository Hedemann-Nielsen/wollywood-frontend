import axios from "axios";
import { useAuth } from "../../components/Providers/AuthProvider";
import { MainWrapper } from "../../components/Wrappers/MainWrapper/MainWrapper";
import style from "./Login.module.scss";
import { FaStarOfLife } from "react-icons/fa";
import { useForm } from "react-hook-form";

export const Login = () => {
  const { loginData, setLoginData } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const submitHandler = async data => {
    const endpoint = 'http://localhost:3000/login'
    try {
      const result = await axios.post(endpoint, data)
      sessionStorage.setItem('access_token', JSON.stringify(result.data))
      setLoginData(result.data)  
} catch (error) {
      console.error(error);
    }
    console.log(data);
  }
  const LogOut = () => {
    sessionStorage.removeItem('access_token')
    setLoginData('')
  }
  return (
<>
  <MainWrapper>
    {!loginData ? (
       <div className={style.content}>
      <h2>login</h2>
      <form method="POST" onSubmit={handleSubmit(submitHandler)} className={style.form} >
        <div>
        <label htmlFor="username">Brugernavn: <FaStarOfLife className={style.star} /></label>
        <input id="username" autoComplete="" {...register('username', {required: true})} />
        </div>
        <div>
        <label htmlFor="password">Password: <FaStarOfLife className={style.star} /></label>
        <input type="password" id="password"  autoComplete="" {...register('password', {required: true})} />
        </div>
        <button>Login</button>
      </form>
    </div>
    ) : (
      <div>
        {<h2>Du er logget in som {`${loginData.user.firstname} ${loginData.user.lastname}`} </h2> }
        
        <button onClick={() => LogOut('')}>Log ud</button>
      </div>
    )}
   
  </MainWrapper>
</>
  );
}
