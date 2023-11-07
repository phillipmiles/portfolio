import s from './infinityPanner.module.css';
import useFormState from '../../../hooks/useFormState';
import { useCallback } from 'react';

const initialValues = {
  email: '',
  password: '',
  passwordRepeat: '',
  optionalInput: '',
};

const validationRules = (state) => {
  return {
    email: [
      {
        rule: 'hasMinLength',
        param: 1,
        errorMsg: 'Please enter a valid email address.',
      },
      {
        rule: 'isEmail',
        errorMsg: 'Please enter a valid email address.',
      },
    ],
    password: [
      {
        rule: 'hasMinLength',
        param: 5,
        errorMsg: 'Please enter a password of 5 characters or more.',
      },
    ],
    passwordRepeat: [
      {
        rule: 'isEqualTo',
        param: state.password,
        errorMsg: 'Password does not match.',
      },
    ],
  };
};

// This function mocks a server request by return a promise that resolves itself
// after a specified time.
const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const StateValue = ({ label, children, color = 'black' }) => {
  return (
    <span>
      <strong>{label}: </strong>
      <span style={{ color: color }}>{children}</span>
    </span>
  );
};
const StateBool = ({ label, children }) => {
  return (
    <StateValue label={label} color={children === true ? 'green' : 'red'}>
      {children + ''}
    </StateValue>
  );
};

export const UseFormStateExample = ({ style }) => {
  const formOnSubmit = useCallback(({ inputValues }) => {
    const asyncLogin = async () => {
      await sleep(1000);
      return true;
    };

    return asyncLogin();
  }, []);

  const { formState, handleChange, handleSubmit } = useFormState(
    initialValues,
    formOnSubmit,
    validationRules
  );

  const handleChangeEmail = useCallback(
    (event) => handleChange('email', event.target.value),
    [handleChange]
  );

  const handleChangePassword = useCallback(
    (event) => handleChange('password', event.target.value),
    [handleChange]
  );

  const handleChangePasswordRepeat = useCallback(
    (event) => handleChange('passwordRepeat', event.target.value),
    [handleChange]
  );

  const handleChangeOptionalInput = useCallback(
    (event) => handleChange('optionalInput', event.target.value),
    [handleChange]
  );

  return (
    <div style={{ display: 'flex', ...style }}>
      <div style={{ padding: '24px', width: '50%' }}>
        <h5>Form:</h5>
        <h6>Email Address:</h6>
        <input
          onChange={handleChangeEmail}
          value={formState.inputValues.email}
          aria-label="email-input"
        />
        <p>{formState.hasSubmitted && formState.inputErrorMessages.email[0]}</p>
        <h6>New password:</h6>
        <input
          onChange={handleChangePassword}
          value={formState.inputValues.password}
          aria-label="password-input"
        />
        <p>
          {formState.hasSubmitted && formState.inputErrorMessages.password[0]}
        </p>
        <h6>Repeat password:</h6>
        <input
          onChange={handleChangePasswordRepeat}
          value={formState.inputValues.passwordRepeat}
          aria-label="password-repeat-input"
        />
        <p>
          {formState.hasSubmitted &&
            formState.inputErrorMessages.passwordRepeat[0]}
        </p>
        <h6>Optional input:</h6>
        <input
          onChange={handleChangeOptionalInput}
          value={formState.inputValues.optionalInput}
          aria-label="password-optional-input"
        />
        <p>
          {formState.hasSubmitted &&
            formState.inputErrorMessages.optionalInput[0]}
        </p>
        <button onClick={handleSubmit}>Submit</button>
        {formState.hasSubmitted && <p>Has submitted!</p>}
        {formState.submitSuccess && <p>Submit success!</p>}
      </div>
      <div
        style={{
          width: '50%',
          backgroundColor: 'white',
          borderLeft: '2px solid #262C35',
          padding: '24px',
        }}
      >
        <h5>Form state:</h5>
        <p>
          <StateBool label="formIsValid">{formState.formIsValid}</StateBool>
        </p>
        <p>
          <StateBool label="hasSubmitted">{formState.hasSubmitted}</StateBool>
        </p>
        <p>
          <StateBool label="submitSuccess">{formState.submitSuccess}</StateBool>
        </p>
        <h6>Input Values:</h6>
        <ul>
          <li>
            <strong>email: </strong>
            {formState.inputValues.email + ''}
          </li>
          <li>
            <strong>password: </strong>
            {formState.inputValues.password + ''}
          </li>
          <li>
            <strong>passwordRepeat: </strong>
            {formState.inputValues.passwordRepeat + ''}
          </li>
          <li>
            <strong>optionalInput: </strong>
            {formState.inputValues.optionalInput + ''}
          </li>
        </ul>
        <h6> Input Validities:</h6>
        <ul>
          <li>
            <StateBool label="email">
              {formState.inputValidities.email}
            </StateBool>
          </li>
          <li>
            <StateBool label="password">
              {formState.inputValidities.password}
            </StateBool>
          </li>
          <li>
            <StateBool label="passwordRepeat">
              {formState.inputValidities.passwordRepeat}
            </StateBool>
          </li>
          <li>
            <StateBool label="optionalInput">
              {formState.inputValidities.optionalInput}
            </StateBool>
          </li>
        </ul>
        <h6>Input Error Message:</h6>
        <ul>
          <li>
            <strong>email: </strong>
            {formState.inputErrorMessages.email[0]}
          </li>
          <li>
            <strong>password: </strong>
            {formState.inputErrorMessages.password[0]}
          </li>
          <li>
            <strong>passwordRepeat: </strong>
            {formState.inputErrorMessages.passwordRepeat[0]}
          </li>
          <li>
            <strong>optionalInput: </strong>
            {formState.inputErrorMessages.optionalInput[0]}
          </li>
        </ul>

        <h6>updatedSinceLastSubmit:</h6>
        <ul>
          <li>
            <StateBool label="email">
              {formState.updatedSinceLastSubmit.email}
            </StateBool>
          </li>
          <li>
            <StateBool label="password">
              {formState.updatedSinceLastSubmit.password}
            </StateBool>
          </li>
          <li>
            <StateBool label="passwordRepeat">
              {formState.updatedSinceLastSubmit.passwordRepeat}
            </StateBool>
          </li>
          <li>
            <StateBool label="optionalInput">
              {formState.updatedSinceLastSubmit.optionalInput}
            </StateBool>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const UseFormStateCode = [
  {
    language: 'jsx',
    code: `
const initialValues = {
  email: '',
  password: '',
  passwordRepeat: '',
  optionalInput: '',
};

const validationRules = (state) => {
  return {
    email: [
      {
        rule: 'hasMinLength',
        param: 1,
        errorMsg: 'Please enter a valid email address.',
      },
      {
        rule: 'isEmail',
        errorMsg: 'Please enter a valid email address.',
      },
    ],
    password: [
      {
        rule: 'hasMinLength',
        param: 5,
        errorMsg: 'Please enter a password of 5 characters or more.',
      },
    ],
    passwordRepeat: [
      {
        rule: 'isEqualTo',
        param: state.password,
        errorMsg: 'Password does not match.',
      },
    ],
  };
};

// This function mocks a server request by returning a promise that resolves itself
// after a specified time.
const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const UseFormStateExample = ({ style }) => {
  const formOnSubmit = useCallback(({ inputValues }) => {
    const asyncLogin = async () => {
      await sleep(1000);
      return true;
    };

    return asyncLogin();
  }, []);

  const { formState, handleChange, handleSubmit } = useFormState(
    initialValues,
    formOnSubmit,
    validationRules
  );
  

  const handleChangeEmail = useCallback(
    (event) => handleChange('email', event.target.value),
    [handleChange]
  );

  const handleChangePassword = useCallback(
    (event) => handleChange('password', event.target.value),
    [handleChange]
  );

  const handleChangePasswordRepeat = useCallback(
    (event) => handleChange('passwordRepeat', event.target.value),
    [handleChange]
  );

  const handleChangeOptionalInput = useCallback(
    (event) => handleChange('optionalInput', event.target.value),
    [handleChange]
  );

  return (
    <div style={{ display: 'flex', ...style }}>
      <div style={{ padding: '24px', width: '50%' }}>
        <h5>Form:</h5>
        <h6>Email Address:</h6>
        <input
          onChange={handleChangeEmail}
          value={formState.inputValues.email}
          aria-label="email-input"
        />
        <p>{formState.hasSubmitted && formState.inputErrorMessages.email[0]}</p>
        <h6>New password:</h6>
        <input
          onChange={handleChangePassword}
          value={formState.inputValues.password}
          aria-label="password-input"
        />
        <p>
          {formState.hasSubmitted && formState.inputErrorMessages.password[0]}
        </p>
        <h6>Repeat password:</h6>
        <input
          onChange={handleChangePasswordRepeat}
          value={formState.inputValues.passwordRepeat}
          aria-label="password-repeat-input"
        />
        <p>
          {formState.hasSubmitted &&
            formState.inputErrorMessages.passwordRepeat[0]}
        </p>
        <h6>Optional input:</h6>
        <input
          onChange={handleChangeOptionalInput}
          value={formState.inputValues.optionalInput}
          aria-label="password-optional-input"
        />
        <p>
          {formState.hasSubmitted &&
            formState.inputErrorMessages.optionalInput[0]}
        </p>
        <button onClick={handleSubmit}>Submit</button>
        {formState.hasSubmitted && <p>Has submitted!</p>}
        {formState.submitSuccess && <p>Submit success!</p>}
      </div>
    )
  }
`,
  },
];
