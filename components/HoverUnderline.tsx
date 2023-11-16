import s from './HoverUnderline.module.css';
import DetachedHoverEffect from './generic/DetachedHoverEffect';

const HoverUnderline = ({ children, className, ...props }) => {
  return (
    <DetachedHoverEffect className={`${s.hoverEffect} ${className}`} {...props}>
      <span className={s.contentStyle}>{children}</span>
    </DetachedHoverEffect>
  );
};

export default HoverUnderline;
