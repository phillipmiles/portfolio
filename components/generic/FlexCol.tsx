import Flex from './Flex';

const FlexCol = ({ margin, gutter, ...props }) => {
  const calcMargin = (themeSpaceArray, margin, gutter) => {
    if (typeof margin === 'object' || typeof gutter === 'object') {
      // Turn either gutter or margin into arrays.
      let gutterArray = typeof gutter === 'number' ? [gutter] : gutter;
      let marginArray = typeof margin === 'number' ? [margin] : margin;

      if (gutterArray.length > marginArray.length) {
        marginArray = [
          ...marginArray,
          ...new Array(gutterArray.length - marginArray.length),
        ].fill(marginArray[marginArray.length - 1], marginArray.length - 1);
      } else {
        gutterArray = [
          ...gutterArray,
          ...new Array(marginArray.length - gutterArray.length),
        ].fill(gutterArray[gutterArray.length - 1], gutterArray.length - 1);
      }
      return marginArray.map(
        (margin, index) =>
          `${
            -(themeSpaceArray[gutterArray[index]] / 2) + themeSpaceArray[margin]
          }px`
      );
    } else {
      return `${-(themeSpaceArray[gutter] / 2) + themeSpaceArray[margin]}px`;
    }
  };

  return (
    <Flex
      {...props}
      style={{
        flexWrap: 'wrap',
        marginLeft: (theme) => calcMargin(theme.space, margin, gutter),
        marginRight: (theme) => calcMargin(theme.space, margin, gutter),
        // Add gutter value to child grid item.
        '& > div': {
          paddingLeft: (theme) =>
            typeof gutter === 'object'
              ? gutter.map((val) => `${theme.space[val] / 2}px`)
              : `${theme.space[gutter] / 2}px`,
          paddingRight: (theme) =>
            typeof gutter === 'object'
              ? gutter.map((val) => `${theme.space[val] / 2}px`)
              : `${theme.space[gutter] / 2}px`,
        },
      }}
    />
  );
};

// FlexCol.propTypes = {
//   /** Space either side of the flex container's content. */
//   margin: PropTypes.oneOfType([
//     PropTypes.number,
//     PropTypes.arrayOf(PropTypes.number),
//   ]),
//   /** Horizontal space between children. */
//   gutter: PropTypes.oneOfType([
//     PropTypes.number,
//     PropTypes.arrayOf(PropTypes.number),
//   ]),

//   /** To use as intended, immediate children should consist of only the
//    * 'FlexColItem' component. */
//   children: PropTypes.node,
// };

FlexCol.defaultProps = {
  gutter: 4,
  margin: 0,
};

export default FlexCol;
