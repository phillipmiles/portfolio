import { useState } from 'react';
import CustomCheckbox from '../../../components/generic/CustomCheckbox';
import Flex from '../../../components/generic/Flex';
import s from './customCheckbox_styles.module.css';

export const CustomCheckboxExample = () => {
  const [example1Checked, setExample1Checked] = useState(false);
  return (
    <Flex
      style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}
    >
      <label
        style={{
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <CustomCheckbox
          id="example1"
          name="example1"
          checked={example1Checked}
          CheckboxComponent={({ checked }) => (
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: checked ? 'green' : 'red',
                borderRadius: '4px',
                marginRight: '16px',
              }}
            />
          )}
          handleSelect={() => {
            setExample1Checked((state) => !state);
          }}
        />
        Click me
      </label>
    </Flex>
  );
};

export const customCheckboxExampleCode = [
  {
    language: 'jsx',
    code: `const CheckboxIndicator = ({ checked }) => (
  <div
    className="indicator" 
    style={{ background: checked ? 'green' : 'red'}}
  />
)
    
const CustomCheckboxExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <label className="label">
      <CustomCheckbox
        id="example"
        name="example"
        checked={checked}
        CheckboxComponent={CheckboxIndicator}
        handleSelect={() => {
          setChecked((state) => !state);
        }}
      />
      Click me
    </label>
  );
};`,
  },
  {
    language: 'css',
    code: `.label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.indicator {
  width: 20px;
  height: 20px;
  borderRadius: 4px;
  marginRight: 16px;
}`,
  },
];
