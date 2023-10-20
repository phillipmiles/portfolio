import s from './ButtonContainer.module.css';

interface Props {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const ButtonContainer = ({ className, ...props }: Props): JSX.Element => (
  <div className={`${s.container} ${className}`} {...props} />
);

export default ButtonContainer;
