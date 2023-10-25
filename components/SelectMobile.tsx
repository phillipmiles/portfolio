import SelectControl from './generic/SelectControl';
import SelectInput from './generic/SelectInput';
import SelectOption from './generic/SelectOption';
import { useCallback, useEffect, useRef, useState } from 'react';
import s from './Select.module.css';
import Link from 'next/link';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
}

const SelectMobile = ({
  selectId,
  options,
  onSelect,
  selectedOption,
  children,
}): Props => {
  return (
    <SelectControl
      selectId={selectId}
      options={options}
      onSelect={onSelect}
      selectedOption={selectedOption}
    >
      {({
        selectVisibility,
        selectedOption,
        options,
        inputProps,
        optionProps,
      }) => (
        <>
          <SelectInput {...inputProps} />
          {selectVisibility && (
            <>
              {createPortal(
                <div className={s.selectMenu}>
                  {options.map((option, index) => {
                    return (
                      <SelectOption
                        key={index}
                        {...option}
                        {...optionProps}
                        className={s.option}
                        style={{
                          color:
                            selectedOption.id === option.id ? 'red' : 'black',
                        }}
                      >
                        {option.value}
                      </SelectOption>
                    );
                  })}
                </div>,
                document.body
              )}
            </>
          )}
        </>
      )}
    </SelectControl>
  );
};
export default SelectMobile;
