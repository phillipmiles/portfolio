/** @jsx jsx */
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { jsx } from 'theme-ui';
import Icon from './Icon';

const elementMap = {
  button: 'button',
  link: Link,
};

const Button = ({
  as: element,
  to,
  variant,
  onClick,
  disabled,
  icon,
  iconPosition,
  children,
  ...props
}) => {
  const Component = elementMap[element];
  const ButtonIcon = <Icon icon={icon} size={2} sx={{ color: 'inherit' }} />;

  return (
    <Component
      {...props}
      {...(element === 'link' && { to: to ? to : '/' })}
      type="button'"
      disabled={disabled}
      onClick={disabled ? null : onClick}
      sx={{
        cursor: disabled ? 'default' : 'pointer',
        // Fixes Chrome issue where the onMouseLeave listener wont fire on the parent element when
        // the button had the 'disabled' attribute. https://github.com/facebook/react/issues/4492
        // and https://github.com/facebook/react/issues/4251
        pointerEvents: disabled ? 'none' : 'auto',
        // textTransform: 'uppercase',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 'medium',
        px: 3,
        py: 2,
        fontFamily: 'body',
        fontSize: 2,
        fontWeight: 'bold',
        lineHeight: 'normal',
        outline: 'none',
        borderWidth: 'thin',
        borderStyle: 'solid',
        variant: `buttons.Button.${variant}`,
        transition: 'all 200ms ease',
        minHeight: 5,
      }}
    >
      <span
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        {icon && iconPosition === 'left' && (
          <span sx={{ mr: 2 }}>{ButtonIcon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span sx={{ ml: 2 }}>{ButtonIcon}</span>
        )}
      </span>
    </Component>
  );
};

Button.propTypes = {
  as: PropTypes.oneOf(['button', 'link']).isRequired,
  to: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'primary']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node,
};

Button.defaultProps = {
  as: 'link',
  variant: 'primary',
  iconPosition: 'left',
  onClick: null,
};

export default Button;
