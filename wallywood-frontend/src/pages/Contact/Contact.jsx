import { useForm } from "react-hook-form";
import { MainWrapper } from "../../components/MainWrapper/MainWrapper";
import style from "./Contact.module.scss";
import { FaStarOfLife } from "react-icons/fa";

export const Contact = () => {
  const { register, handleSubmit, formState: {errors}} = useForm()

  const submitform = data => {
    console.log(data)
  }
  return (
<>
<MainWrapper>
  <div className={style.content}>
    <h2>Kontakt os</h2>
    <form onSubmit={handleSubmit(submitform)} className={style.form}>
      <div>
        <label htmlFor="name">Dit navn: <FaStarOfLife className={style.star} /></label>
        <input id="name" {...register('name', { required: true, pattern: /^[a-z]+$/i})} />
        {errors.name && errors.name.type === 'required' && <span className={style.error}>Dette felt skal udfyldes</span>}
        {errors.name && errors.name.type === 'pattern' && <span className={style.error}>Dit navn må ikke indeholde tal.</span>}
      </div>
      <div>
        <label htmlFor="email" >Din email: <FaStarOfLife className={style.star}/></label>
        <input id="email" {...register('email', {required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
        {errors.email && errors.email.type === 'required' && <span className={style.error}>Dette felt skal udfyldes</span>}
        {errors.email && errors.email.type === 'pattern' && <span className={style.error}>Du skal indtaste en gyldig email</span>}

      </div>
      <div>
        <label htmlFor="message">Din Besked <FaStarOfLife className={style.star} /></label>
        <textarea name="message" rows="10" cols="30"></textarea>
      </div>
      <button>Send</button>
    </form>
  </div>
</MainWrapper>
</>
  );
}
