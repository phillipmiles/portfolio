/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@reach/router';
import { useSpring, animated } from 'react-spring';
import Icon from './Icon';

const ButtonClose = props => {
  const [springProps, set] = useSpring(() => ({
    transform: 'scale(1)',
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <Link
      {...props}
      sx={{
        cursor: 'pointer',
        zIndex: 100,
        width: [7, 7, 8],
        height: [7, 7, 8],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // boxShadow: 2,
        // borderRadius: '50%',
        color: 'white',
        bg: 'primary',
        transition: 'background-color 200ms ease',
        ':hover': {
          bg: 'primaryDark',
        },
        borderRadius: theme => `0 0 0 ${theme.radii.large}px`,
      }}
      onMouseOver={() => set({ transform: 'scale(1.2)' })}
      onMouseLeave={() => set({ transform: 'scale(1)' })}
    >
      <animated.div style={springProps}>
        <Icon icon={faTimes} sx={{ fontSize: '32px' }} />
      </animated.div>
    </Link>
  );
};

ButtonClose.propTypes = {};

export default ButtonClose;
