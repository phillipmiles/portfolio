import SelectInput from './generic/SelectInput';
import SelectOption from './generic/SelectOption';
import { useEffect, useRef, useState } from 'react';

interface Props {
  label: string;
  children: React.ReactNode;
}

const Select = ({ selectId, options, onSelect, children, label }): Props => {
  const [selectedOption, setSelectedOption] = useState(options[2]);
  const [selectVisibility, setSelectVisibility] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isOptionFocused, setIsOptionFocused] = useState(null);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
    if (isOptionFocused) {
      setSelectVisibility(false);
    }
  };

  const handleOptionBlur = () => {
    setIsOptionFocused(null);
  };

  useEffect(() => {
    if (selectVisibility) {
      focusOnOption(options[0].id);
    }
  }, [selectVisibility, options]);

  useEffect(() => {
    if (isOptionFocused) {
      setSelectVisibility(true);
    } else {
      setSelectVisibility(false);
      setIsOptionFocused(null);
    }
  }, [isOptionFocused, isInputFocused]);

  const childrenRef = useRef(null);

  const focusOnOption = (optionId) => {
    if (childrenRef.current) {
      const optionElements = childrenRef.current.querySelector(
        `[data-option-id="${optionId}"`
      );

      if (optionElements) {
        optionElements.focus();
      }
    }
  };

  const focusOnInput = () => {
    const inputElement = childrenRef.current.querySelector('input');
    inputElement.focus();
  };

  const handleKeyDown = (e) => {
    console.log('erg', selectVisibility);
    if (e.key == ' ') {
      e.preventDefault();
      // setFocusOnOption();
      if (!selectVisibility) {
        // focusOnOption(options[0].id);
        setSelectVisibility(true);
      } else {
        setSelectVisibility(false);
      }
    } else if (e.key === 'ArrowDown') {
      // e.preventDefault();
    } else if (e.key === 'Escape' && selectVisibility) {
      e.preventDefault();
      cancelSelect();
    }
  };

  const handleInputSelect = () => {
    setSelectVisibility((state) => !state);
  };

  const handleOptionFocus = (e) => {
    const option = options.find(
      (option) => option.id === e.target.dataset.optionId
    );

    setIsOptionFocused(option);
  };

  const handleOptionClick = () => {
    setSelectedOption(isOptionFocused);
    setIsOptionFocused(null);
    focusOnInput();
  };

  const openSelect = () => {
    setSelectVisibility(true);
  };

  const cancelSelect = () => {
    focusOnInput();
    setIsOptionFocused(null);
    setSelectVisibility(false);
  };

  const handleOptionCancel = () => {
    cancelSelect();
  };

  return (
    <>
      {label && <h5>{label}</h5>}
      <div
        ref={childrenRef}
        data-select-id={selectId}
        // className={`${s.container} ${isInputFocused && s.focus}`}
      >
        <SelectInput
          style={isInputFocused ? { border: '2px solid blue' } : {}}
          value={selectedOption.value}
          expanded={selectVisibility}
          selectId={selectId}
          selected={selectedOption}
          options={options}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          isFocused={isInputFocused}
          onClick={handleInputSelect}
          onKeyDown={handleKeyDown}
        />

        {selectVisibility && (
          <div
            style={{
              position: 'absolute',
              background: 'white',
              border: '2px solid #DDD',
            }}
          >
            {options.map((option) => (
              <SelectOption
                onFocus={handleOptionFocus}
                onBlur={handleOptionBlur}
                selectId={selectId}
                optionId={option.id}
                key={option.id}
                onCancel={handleOptionCancel}
                onClick={handleOptionClick}
                style={{
                  color: selectedOption.id === option.id ? 'red' : 'black',
                  padding: '8px 24px',
                }}
              >
                {option.value}
              </SelectOption>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Select;
