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
  style,
  onClick,
  ...props
}: Props) => {
  const childrenRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key == ' ') {
      onClick();
    } else if (e.key === 'ArrowDown') {
      if (childrenRef.current) {
        const optionElements =
          childrenRef.current.querySelector('[data-option]');
        if (optionElements) {
          e.preventDefault();
          optionElements.focus();
        }
      }
    } else if (e.key === 'Escape' && expanded) {
      event.preventDefault();
      onClick();
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div
      ref={childrenRef}
      data-select-id={selectId}
      className={`${s.container} ${isFocused && s.focus}`}
      {...props}
    >
      <input
        tabIndex={0}
        value={''}
        onClick={onClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        aria-readonly="true"
        aria-controls={selectId}
        aria-expanded={expanded}
        aria-haspopup="listbox"
        inputmode="none"
        role="combobox"
        aria-autocomplete="list"
        onChange={() => {}}
        className={s.input}
      />
      {children}
    </div>
  );
};

export default SelectInput;
