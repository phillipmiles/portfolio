import { useRef, useState } from 'react';
import Flex from './Flex';
import s from './SelectInput.module.css';

interface Props {
  selected: boolean;
  children?: React.ReactNode;
  onClick: Function;
  style?: { [key: string]: any };
}

const SelectInput = ({
  expanded,
  selectId,
  selected,
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
