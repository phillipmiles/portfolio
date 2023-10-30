import { useState } from 'react';

import SelectControl from '../../../components/generic/SelectControl';
import SelectInput from '../../../components/generic/SelectInput';
import SelectOption from '../../../components/generic/SelectOption';
import s from './select_styles.module.css';

export const SelectExample = () => {
  const options = [
    {
      id: 'apple',
      value: 'Apple',
    },
    {
      id: 'banana',
      value: 'Banana',
    },
    {
      id: 'carrot',
      value: 'Carrot',
    },
    {
      id: 'dragon-fruit',
      value: 'Dragon Fruit',
    },
    {
      id: 'egg',
      value: 'Egg',
    },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      Favourite Fruit:
      <SelectControl
        selectId={'select-example'}
        options={options}
        onSelect={(option) => {
          setSelectedOption(option);
        }}
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

export const SelectCode = [
  {
    language: 'jsx',
    code: `Favourite Fruit:
<SelectControl
  selectId={'select-example'}
  options={options}
  onSelect={(option) => {
    setSelectedOption(option);
  }}
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
</SelectControl>`,
  },
  {
    language: 'css',
    code: `.selectMenu {
  position: absolute;
  background: white;
  border: 2px solid #ddd;
  z-index: 1000;
}

.option {
  cursor: pointer;
  padding: 8px 24px;
}
    `,
  },
];
