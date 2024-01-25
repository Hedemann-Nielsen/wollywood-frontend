import style from "./MainWrapper.module.scss";

export const MainWrapper = ({children}) => {
  return (
    <main className={style.main}>
        {children}
    </main>
  )
}
