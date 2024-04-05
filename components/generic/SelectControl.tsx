import { useEffect, useRef, useState } from 'react';

interface Props {
  children: Function;
  options: {
    id: string;
  }[];
}

const SelectControl = ({
  selectId,
  options,
  onSelect,
  selectedOption,
  className,
  children,
}: Props) => {
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
      focusOnOption(options[0].id);
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
    // WARN: Function assumes handleOptionFocus has already been called
    // between click and this function firing.
    // setSelectedOption(isOptionFocused);
    setIsOptionFocused(null);
    focusOnInput();
    onSelect(isOptionFocused);
  };

  const cancelSelect = () => {
    focusOnInput();
    setIsOptionFocused(null);
    setSelectVisibility(false);
  };

  const handleOptionCancel = () => {
    cancelSelect();
  };

  const content = () => {
    return children({
      selectVisibility: selectVisibility,
      selectedOption: selectedOption,
      options: options,
      inputProps: {
        style: isInputFocused ? { border: '2px solid blue' } : {},
        value: selectedOption.value,
        expanded: selectVisibility,
        selectId: selectId,
        selectedOption: selectedOption,
        options: options,
        onBlur: handleInputBlur,
        onFocus: handleInputFocus,
        isFocused: isInputFocused,
        onClick: handleInputSelect,
        onKeyDown: handleKeyDown,
      },
      optionProps: {
        onFocus: handleOptionFocus,
        onBlur: handleOptionBlur,
        selectId: selectId,
        onCancel: handleOptionCancel,
        onSelect: handleOptionClick,
      },
    });
  };

  return (
    <div ref={childrenRef} data-select-id={selectId} className={className}>
      {content()}
    </div>
  );
};
export default SelectControl;
