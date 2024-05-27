import CheckboxInput, {
  CheckboxComponentProps,
} from '../../../../../components/generic/CheckboxInput';
import Flex from '../../../../../components/generic/Flex';
import s from './example_01.module.css';

const CheckboxComponent = ({ checked }: CheckboxComponentProps) => (
  <div className={`${s.indicator} ${checked ? s.checked : s.unchecked}`}>
    {/* https://feathericons.com/?query=check */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

export const Example = () => {
  return (
    <Flex
      style={{
        height: '200px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <label className={s.label}>
        <CheckboxInput
          id={'example_01_checkbox'}
          name={'Example 1'}
          defaultChecked={true}
          CheckboxComponent={CheckboxComponent}
        />
        Click me
      </label>
    </Flex>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `const CheckboxIndicator = ({ checked }) => (
  <div className={\`indicator \${checked ? 'checked' : 'unchecked'}\`}>
    {/* https://feathericons.com/?query=check */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
)
    
const CustomCheckboxExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <label className="label">
      <CheckboxInput
        id="example_01"
        name="example 1"
        checked={checked}
        CheckboxComponent={CheckboxIndicator}
        onChange={() => {
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
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.indicator {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-right: 14px;
  border: 2px solid rgb(103, 113, 121);
  color: white;
}

.indicator svg {
  margin: -1px;
  display: none;
}

.indicator.checked {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.indicator.checked svg {
  display: block;
}

.label input:focus-visible + .indicator {
  outline: var(--primary-color) auto 1px;
  outline-offset: 2px;
}
`,
  },
];
