import { MouseEventHandler } from 'react';
import s from './SelectValue.module.css';

interface Props {
  selectId: string;
  children?: React.ReactNode;
  onClick: MouseEventHandler;
  onCancel?: MouseEventHandler;
  style?: { [key: string]: any };
}

const SelectValue = ({
  selectId,
  onClick,
  onCancel,
  children,
  className,
  ...props
}: Props) => {
  return (
    <div {...props} className={s.selectValue}>
      {children}
    </div>
  );
};

export default SelectValue;
