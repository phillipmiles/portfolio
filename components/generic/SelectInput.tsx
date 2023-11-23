import { MouseEventHandler } from 'react';
import s from './SelectInput.module.css';

interface Props {
  selectedOption: boolean;
  children?: React.ReactNode;
  onClick: MouseEventHandler;
  style?: { [key: string]: any };
}

const SelectInput = ({
  expanded,
  selectId,
  selectedOption,
  children,
  className,
  style,
  onClick,
  onFocus,
  onBlur,
  value,
  onKeyDown,
  ...props
}: Props) => {
  return (
    <label className={className} style={style}>
      {value}
      <input
        className={s.input}
        tabIndex={0}
        value={value}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        aria-readonly="true"
        aria-controls={selectId}
        aria-expanded={expanded}
        aria-haspopup="listbox"
        inputMode="none"
        role="combobox"
        aria-autocomplete="list"
        onChange={() => {}}
      />
    </label>
  );
};

export default SelectInput;
