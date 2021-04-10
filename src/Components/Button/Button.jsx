import style from '../Button/Button.module.css';
const Button = ({ onClick }) => {
  return (
    <div className={style.container}>
    <button className={style.button} type="button" onClick={onClick}>
      {' '}
      LoadMore
    </button></div>
  );
};

export default Button;
