import Flex from './Flex';
import s from './PageContentWrap.module.css';

/** A wrapping component used to center and limit the width of any page content whilst
 * providing appropriate margin sizes for desktop and mobile devices. */

interface Props {
  children: JSX.Element | string | Array<JSX.Element>;
  classNameOuter?: string;
  classNameInner?: string;
}

const PageContentWrap = ({
  children,
  classNameOuter,
  classNameInner,
  ...props
}: Props): JSX.Element => {
  return (
    // Outer div used to set margins without reducing the maxWidth size.
    <Flex className={`${s.outer} ${classNameOuter}`} {...props}>
      <Flex className={`${s.inner} ${classNameInner}`}>{children}</Flex>
    </Flex>
  );
};

export default PageContentWrap;
