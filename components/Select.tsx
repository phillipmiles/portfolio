import SelectControl from './generic/SelectControl';
import SelectInput from './generic/SelectInput';
import SelectOption from './generic/SelectOption';
import { useCallback, useEffect, useRef, useState } from 'react';
import s from './Select.module.css';
import Link from 'next/link';

interface Props {
  label: string;
  children: React.ReactNode;
}

const Select = ({
  selectId,
  options,
  onSelect,
  selectedOption,
  children,
  label,
}): Props => {
  return (
    <>
      {label && <h5>{label}</h5>}
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
              </div>
            )}
          </>
        )}
      </SelectControl>
    </>
  );
};
export default Select;
