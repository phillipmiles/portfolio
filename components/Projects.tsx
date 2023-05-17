import Link from 'next/link';
import Button from './generic/Button';
import Flex from './generic/Flex';
import s from './Projects.module.css';

const Projects = () => {
  return (
    <div
      style={{
        // width: '100%',
        // background: '#ECF4FA',
        borderRadius: 24,
        overflow: 'hidden',
        marginBottom: 8,
      }}
    >
      {/* <LazyLoader height={468} sx={{ width: '50%' }}> */}
      {/* <Image src={imgProjectsThumb} alt="" /> */}
      {/* </LazyLoader> */}
      <Flex
        style={{
          // padding: 64,
          width: '50%',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3>The projects</h3>
          <p>
            Take a look at detailed breakdowns for each of my apps. See how
            they’re progressing and what decision’s I’m making in developing
            them.
          </p>
        </div>

        <Button href={'/'}>Go to projects</Button>
      </Flex>
    </div>
  );
};

export default Projects;
