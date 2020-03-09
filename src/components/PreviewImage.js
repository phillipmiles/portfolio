/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';
import { Image } from '../components';

const PreviewImage = ({ src, ...props }) => (
  <Parallax
    {...props}
    sx={{ width: '60%' }}
    className="custom-class"
    y={[-16, 16]}
  >
    <Image
      src={src}
      sx={{
        maxWidth: '100%',
        boxShadow: 3,
        borderRadius: 'large',
      }}
    />
  </Parallax>
);

PreviewImage.propTypes = {
  /** Image source url */
  src: PropTypes.string,
};

export default PreviewImage;
