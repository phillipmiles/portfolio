import s from './ScreenButton.module.css';

const ScreenButton = ({ className, style, ...props }) => (
  <div className={`${s.button} ${className}`} style={style} {...props}>
    <div className={s.buttonText} />
  </div>
);

export default ScreenButton;
