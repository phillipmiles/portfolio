import s from './HoverRevealEffect.module.css';

const HoverRevealEffect = ({ children, style, className, ...props }) => {
  return (
    <div className={`${s.container} ${className}`} style={style}>
      <div className={s.liftChild}>{children}</div>
    </div>
  );
};

export default HoverRevealEffect;
