import s from './DetachedHoverEffect.module.css';

interface Props {
  children: JSX.Element | string | Array<JSX.Element>;
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
