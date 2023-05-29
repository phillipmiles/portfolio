import Page from './Page';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
  style?: { [key: string]: any };
}

// This component wraps around a page and forces the provided footer component to always
// be positioned at the base of the page regardless of whether the page's content
// is less then the viewport height. Children of this component will be wrapped by a
// div with display flex on allowing a child element to easily fill the available space
// by setting flexGrow to 1.

const PageWithFooter = ({ children, style, ...props }: Props) => {
  if (children && children.length > 2) {
    throw 'Error: PageWithFooterComponent only accepts 2 children components.';
  } else {
    return (
      <Page
        style={{
          // justifyContent: 'space-between',
          ...style,
        }}
        {...props}
      >
        {children}
      </Page>
    );
  }
};

export default PageWithFooter;
