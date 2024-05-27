import CheckboxInput, {
  CheckboxComponentProps,
} from '../../../../../components/generic/CheckboxInput';
import Flex from '../../../../../components/generic/Flex';
import s from './example_02.module.css';

const CheckboxComponent = ({ checked }: CheckboxComponentProps) => (
  <div className={`${s.indicator} ${checked ? s.checked : s.unchecked}`}>
    <div className={s.indicator_pip} />
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
          id={'example_02_checkbox'}
          name={'Example 2'}
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
    <div className="indicator_pip" />
  </div>
)
    
const CustomCheckboxExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <label className="label">
      <CheckboxInput
        id="example_02"
        name="example 2"
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
  width: 34px;
  height: 14px;
  margin-right: 14px;
  background-color: rgb(148, 161, 171);
  border-radius: 7px;
}

.indicator_pip {
  height: 20px;
  width: 20px;
  border-radius: 100%;
  margin: -3px;
  transition: transform ease-out 100ms;
  background-color: rgb(192, 203, 210);
}

.indicator.checked {
  background-color: rgb(135, 179, 232);
}

.indicator.checked .indicator_pip {
  transform: translateX(100%);
  background-color: rgb(52, 117, 238);
}

/* Accessibility focus styles */
.label input:focus-visible + .indicator .indicator_pip {
  outline: var(--primary-color) auto 1px;
}`,
  },
];
