import ScreenCard from './ScreenCard';
import s from './ScreenContainer.module.css';

const ScreenContainer = ({ children, className, ...props }) => (
  <div className={`${s.imageScreen} ${className}`} {...props}>
    <ScreenCard className={s.imageScreenBar}>
      <div className={s.imageScreenBarMenu}>
        <div className={s.imageScreenBarMenuItem} />
        <div className={s.imageScreenBarMenuItem} />
        <div className={s.imageScreenBarMenuItem} />
      </div>
      <div className={s.imageScreenBarAddressWrapper}>
        <div className={s.imageScreenBarAddress} />
      </div>
    </ScreenCard>
    <div className={s.imageScreenContent}>{children}</div>
  </div>
);

export default ScreenContainer;
