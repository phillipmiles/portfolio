interface Props {
  children?: React.ReactNode;
  style?: { [key: string]: any };
}

const Flex = ({ children, style, ...props }: Props) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

export default Flex;
