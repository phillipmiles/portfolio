/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { Paragraph } from '../../components';

const GametalkBody = () => (
  <Fragment>
    <Paragraph>
      In 2016 I was eager to flex my skills and challenge myself with new ones
      by trying at building a complete web app. So, I started a project that
      merged my interest of video games with my fondness for the community forum
      Reddit.
    </Paragraph>
    <Paragraph>
      The result was a community website on video games that included
      functionality for user account creation, login/logout, posting of
      discussions and comments and a voting system for quality content. Some
      additional touches I took from Reddit was the algorithm used for sorting
      'hot' or 'trending' posts as well as the nested tree style comment system.
    </Paragraph>
  </Fragment>
);

export default GametalkBody;