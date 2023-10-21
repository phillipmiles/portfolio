import * as React from 'react';
import posttest from '../data/post.mdx';
import PostWrap from '../components/PostWrap';
interface Props {
  // children: React.ReactNode;
}

const Post = (): Props => {
  const test = posttest({});

  const data = {
    type: 'corridor',
    origin: [0, 0],
    labels: ['ruined', 'residential'],
    children: [
      {
        type: 'corridor',
        origin: [0, 0],
        labels: ['ruined', 'residential'],
        children: [],
      },
    ],
  };

  console.log();

  return (
    <div>
      <form>
        <input type="text" />
      </form>
    </div>
  );
};
export default Post;
