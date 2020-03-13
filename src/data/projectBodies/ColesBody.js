/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';
import { Paragraph } from '../../components';

const ColesBody = () => (
  <Fragment>
    <Paragraph>
      Towards the end of 2018 Coles was looking to roll out a new tool for use
      in their deli's. In order to upskill their staff, they came to DeakinCo.
      to help develop a digital learning solution. With Coles sold on a
      branching learning experience we were tasked with the unfortunate business
      of constructing five learning modules each with a branching progression
      that together would consist with over 100 screens of content.
    </Paragraph>
    <Paragraph>
      To solve the issue of marking up that much content whilst keeping it
      easily maintainable we turned to an automated solution. We created a Node
      JS program to generate the mark-up code using spreadsheets as the source.
      By the end of the project the program would generate over 54,000 lines of
      JSON code for the 5 required modules and left us with a reusable
      automation tool that would later be applied to future projects.
    </Paragraph>
  </Fragment>
);

export default ColesBody;
