import s from './Drawer.module.css';

interface Props {
  open?: boolean;
  children: React.ReactNode;
  className: string;
}

const Drawer = ({ className, children, open = false }: Props) => {
  return (
    <div className={`${s.container} ${className} ${open ? s.open : ''}`}>
      {children}
    </div>
  );
};
export default Drawer;
