import style from './PageWrapper.module.scss';

export function PageWrapper({children}) {
  return (
    <div className={style.background}>
        {children}
    </div>
  )
}
