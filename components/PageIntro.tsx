import s from './PageIntro.module.css';

interface Props {
  children: string;
}

const PageIntro = ({ children }: Props): JSX.Element => (
  <p className={s.paragraph + ' large'}>{children}</p>
);

export default PageIntro;
