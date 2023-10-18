interface Props {
  tag: any;
  as?: any;
  cssModule: string | { [key: string]: any };
  children?: React.ReactNode;
  style?: { [key: string]: any };
}

const HeadingModule = ({ tag, as, cssModule, className, ...props }: Props) => {
  const Element = tag;
  if (typeof cssModule === 'string') {
    return <Element className={cssModule} {...props} />;
  } else {
    return (
      <Element
        className={`${as ? cssModule[as] : cssModule[tag]} ${className}`}
        {...props}
      />
    );
  }
};

export default HeadingModule;
