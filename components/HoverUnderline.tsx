import s from './HoverUnderline.module.css';
import DetachedHoverEffect from './generic/DetachedHoverEffect';

const HoverUnderline = ({ active, children, className, ...props }) => {
  return (
    <DetachedHoverEffect
      className={`${s.hoverEffect} ${className} ${active ? s.active : null}`}
      {...props}
    >
      <span className={s.contentStyle}>{children}</span>
    </DetachedHoverEffect>
  );
};

export default HoverUnderline;
