interface Props {
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  handleSelect: React.MouseEventHandler<HTMLInputElement>;
  CheckboxComponent: Function;
  style?: { [key: string]: any };
}

/** CustomCheckbox is used to create checkbox components that use a custom
 * visual representation of the checked and unchecked states. The default
 * checkbox element is hidden from view but still accessible for screen readers. */

const CustomCheckbox = ({
  id,
  name,
  disabled = false,
  handleSelect,
  checked = false,
  CheckboxComponent,
  style,
}: Props) => {
  return (
    <div style={style}>
      <input
        type="checkbox"
        id={id}
        name={name}
        disabled={disabled}
        checked={checked}
        onClick={handleSelect}
        onChange={() => {}} // Dummy function to stop nextjs complaining in console
        style={{
          margin: '0px',
          minWidth: '0px',
          position: 'absolute',
          opacity: '0',
          zIndex: '-1',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      />
      <div aria-hidden="true">
        <CheckboxComponent
          checked={checked}
          onClick={handleSelect}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default CustomCheckbox;
