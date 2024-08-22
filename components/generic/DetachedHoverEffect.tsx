import s from './DetachedHoverEffect.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const DetachedHoverEffect = ({
  children,
  className,
  ...props
}: Props): JSX.Element => (
  <div className={`${s.container} ${className}`} {...props}>
    {children}
  </div>
);

export default DetachedHoverEffect;
