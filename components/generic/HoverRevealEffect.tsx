import s from './HoverRevealEffect.module.css';

const HoverRevealEffect = ({ children, style, className, ...props }) => {
  return (
    <div className={`${s.container} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default HoverRevealEffect;
