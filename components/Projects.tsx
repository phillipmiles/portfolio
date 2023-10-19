import Image from 'next/image';
import Link from 'next/link';
import Button from './generic/Button';
import Flex from './generic/Flex';
import s from './Projects.module.css';

const Projects = () => {
  return (
    <Flex
      style={{
        // width: '100%',
        // background: '#ECF4FA',
        paddingTop: 96,
        paddingBottom: 96,
        borderRadius: 24,
        // overflow: 'hidden',
        marginBottom: 8,
      }}
    >
      <div
        style={{
          paddingRight: '64px',

          // width: '100%', // width: '50%',
        }}
      >
        <div
          style={{
            position: 'relative',
            height: 395,
            width: 516,
            // width: '100%',
          }}
        >
          <Image
            src="/blankYellow.png"
            alt=""
            height={395}
            width={456}
            className={s.projectCard}
          />
          <Image
            src="/blank.png"
            alt=""
            height={395}
            width={456}
            className={s.projectCard}
          />
          <Image
            src="/projects-thumb.png"
            alt=""
            height={395}
            width={456}
            className={s.projectCard}
          />
        </div>
      </div>
      <div
        style={{
          width: '50%',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Flex
          style={{
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <div>
            <h2 className="h3">The projects</h2>
            <p>
              Take a look at detailed breakdowns for each of my apps. See how
              they’re progressing and what decision’s I’m making in developing
              them.
            </p>

            <Button
              href={'projects'}
              style={{
                marginTop: '32px',
                marginLeft: -2,
              }}
            >
              Go to projects
            </Button>
          </div>
        </Flex>
      </div>
    </Flex>
  );
};

export default Projects;
