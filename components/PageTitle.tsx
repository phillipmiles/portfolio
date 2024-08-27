interface Props {
  children: string;
}

const PageTitle = ({ children }: Props): JSX.Element => <h1>{children}</h1>;

export default PageTitle;
