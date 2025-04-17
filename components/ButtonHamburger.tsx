import s from './ButtonHamburger.module.css';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  invert?: boolean;
  open?: boolean;
}

const ButtonHamburger = ({ className, invert, open, ...props }: Props) => {
  return (
    <button className={`${s.button} ${className}`} {...props}>
      <div
        className={`${s.container} ${invert && s.invert} ${
          open ? s.open : s.close
        }`}
      >
        <div className={`${s.barWrap} ${s.top}`}>
          <div className={s.bar} />
        </div>
        <div className={`${s.barWrap} ${s.middle}`}>
          <div className={s.bar} />
        </div>
        <div className={`${s.barWrap} ${s.bottom}`}>
          <div className={s.bar} />
        </div>
      </div>
    </button>
  );
};

export default ButtonHamburger;
