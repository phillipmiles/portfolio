/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx, Flex } from 'theme-ui';
import React, { useState } from 'react';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

const Carousel = ({ children, ...props }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickNext = () => {
    setActiveIndex(prevState => prevState + 1);
  };

  const handleClickPrevious = () => {
    setActiveIndex(prevState => prevState - 1);
  };

  return (
    <div {...props} sx={{ width: '100%' }}>
      <div
        sx={{
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
          minHeight: 5,
        }}
      >
        <Flex
          sx={{
            height: '100%',
            width: `${children.length * 100}%`,
          }}
        >
          {React.Children.map(children, child => (
            <div
              sx={{
                transform: `translateX(${'-' + activeIndex * 100 + '%'})`,
                transition: 'transform 500ms',
                flex: 1,
                verticalAlign: 'top',
              }}
            >
              {child}
            </div>
          ))}
        </Flex>
        {activeIndex > 0 && (
          <button
            type="button"
            sx={{
              bg: 'black',
              color: 'textWhite',
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              padding: 2,
              width: 5,
              height: 5,
            }}
            onClick={handleClickPrevious}
          >
            <Icon icon={faChevronLeft} />
          </button>
        )}
        {activeIndex < children.length - 1 && (
          <button
            type="button"
            sx={{
              bg: 'black',
              color: 'textWhite',
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              padding: 2,
              width: 5,
              height: 5,
            }}
            onClick={handleClickNext}
          >
            <Icon icon={faChevronRight} size={2} />
          </button>
        )}
      </div>
      <Flex sx={{ m: 'auto', justifyContent: 'center' }}>
        {React.Children.map(children, (child, index) => (
          <button
            onClick={() => setActiveIndex(index)}
            sx={{
              mx: 2,
              height: 1,
              width: 1,
              cursor: 'pointer',
              borderRadius: 'medium',
              transition: 'background-color 500ms ease',
              bg: activeIndex === index ? 'primary' : 'neutral.1',
            }}
          ></button>
        ))}
      </Flex>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
};

export default Carousel;
