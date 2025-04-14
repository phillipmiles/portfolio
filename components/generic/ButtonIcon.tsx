import { HTMLAttributes } from 'react';
import s from './ButtonIcon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  icon: IconProp;
}

const ButtonIcon = ({ children, className, icon, ...props }: Props) => {
  return (
    <button className={`${s.button} ${className}`} {...props}>
      <FontAwesomeIcon icon={icon} className={s.icon} />
    </button>
  );
};

export default ButtonIcon;
