import s from './DrawerFooter.module.css';

interface Props {
  children: React.ReactNode;
}

const DrawerFooter = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>;
};
export default DrawerFooter;
