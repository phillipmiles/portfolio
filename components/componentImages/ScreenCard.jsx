import s from './ScreenCard.module.css';

const ScreenCard = ({ children, className, ...props }) => (
  <div className={`${s.container} ${className}`} {...props}>
    {children}
  </div>
);

export default ScreenCard;
