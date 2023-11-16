import s from './HoverGhost.module.css';
import DetachedHoverEffect from './generic/DetachedHoverEffect';

const HoverGhost = ({ children, ...props }) => {
  return (
    <DetachedHoverEffect className={s.hoverEffect} {...props}>
      <div className={s.contentStyle}>{children}</div>
    </DetachedHoverEffect>
  );
};

export default HoverGhost;
