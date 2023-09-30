import s from './PostWrap.module.css';

const PostWrap = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default PostWrap;
