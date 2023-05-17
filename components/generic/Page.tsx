import Flex from './Flex';

interface Props {
  children?: React.ReactNode;
  style?: { [key: string]: any };
}

// This component wraps around a page and always has a minimum height equal to the
// viewport regardless of whether the page's content is less then the viewport height.
// Children of this component will be wrapped by a div with display flex on allowing
// a child element to easily fill the available space by setting flexGrow to 1.

const Page = ({ children, style, ...props }: Props) => (
  <Flex
    style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      flexDirection: 'column',
      ...style,
    }}
    {...props}
  >
    {children}
  </Flex>
);

export default Page;
