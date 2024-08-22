import DetachedHoverEffect from './generic/DetachedHoverEffect';
import s from './LinkGhostBox.module.css';

interface Props {
  children: React.ReactNode;
}

const LinkGhostBox = ({ children, ...props }: Props) => {
  return (
    <DetachedHoverEffect className={s.itemHoverEffect} {...props}>
      {children}
    </DetachedHoverEffect>
  );
};
export default LinkGhostBox;
