interface Props {
  children: string;
}

const PageTitle = ({ children }: Props): JSX.Element => <h2>{children}</h2>;

export default PageTitle;
