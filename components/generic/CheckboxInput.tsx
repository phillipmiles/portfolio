import { useState } from 'react';

/** CustomCheckbox is used to create checkbox components that use a custom
 * visual representation of the checked and unchecked states. The default
 * checkbox element is hidden from view but still accessible for screen readers. */

export interface CheckboxComponentProps {
  onClick?: Function;
  checked?: boolean;
  disabled?: boolean;
}

interface Props {
  id?: string;
  name?: string;
  checked?: boolean; // Check state used for controlled checkbox
  defaultChecked?: boolean; // Default check state used for uncontrolled checkbox
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  CheckboxComponent: React.FunctionComponent<CheckboxComponentProps>;
  style?: { [key: string]: any };
}

const CheckboxInput = ({
  id,
  name,
  disabled = false,
  onChange,
  checked,
  CheckboxComponent,
  style,
  defaultChecked,
  ...props
}: Props) => {
  // Manage state locally when the checkbox is uncontrolled.
  const [internalCheck, setInternalCheck] = useState(defaultChecked);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    else {
      setInternalCheck((state) => !state);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id={id}
        name={name}
        disabled={disabled}
        checked={typeof checked === 'boolean' ? checked : internalCheck}
        onChange={handleCheck}
        style={{
          margin: 0,
          minWidth: '0px',
          position: 'absolute',
          opacity: 0,
          zIndex: -1,
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          ...style,
        }}
        {...props}
      />
      <CheckboxComponent
        checked={typeof checked === 'boolean' ? checked : internalCheck}
        onClick={handleCheck}
        disabled={disabled}
      />
    </>
  );
};

export default CheckboxInput;
