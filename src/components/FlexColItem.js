/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx, Flex } from 'theme-ui';

const FlexColItem = ({ cols, ...props }) => {
  let baseColumns = [4, 8, 12];

  // Turn the base columns array and the passed in cols value into arrays of
  // the same size with the last value from each filling out remainding space of
  // the array.
  if (typeof cols === 'number') {
    cols = new Array(baseColumns.length).fill(cols);
  } else if (typeof cols === 'object') {
    if (cols.length > baseColumns.length) {
      baseColumns = [
        ...baseColumns,
        ...new Array(cols.length - baseColumns.length),
      ].fill(baseColumns[baseColumns.length - 1], baseColumns.length - 1);
    } else {
      cols = [...cols, ...new Array(baseColumns.length - cols.length)].fill(
        cols[cols.length - 1],
        cols.length - 1,
      );
    }
  }

  // Map through the two arrays to calculate the width percentage value for
  // each breakpoint.
  const colWidthsArray = baseColumns.map((baseCol, index) => {
    const percentage = cols[index] / baseCol;
    return `${percentage > 1 ? 100 : percentage * 100}%`;
  });

  return (
    <Flex
      {...props}
      sx={{
        width: colWidthsArray,
        flexDirection: 'column',
      }}
    />
  );
};

FlexColItem.propTypes = {
  cols: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
};

FlexColItem.defaultProps = {
  cols: 12,
};

export default FlexColItem;
