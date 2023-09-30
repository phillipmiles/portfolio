import Image from 'next/image';
import Link from 'next/link';
import DevGraphic from './DevGraphic';
import Button from './generic/Button';
import Flex from './generic/Flex';
import s from './Projects.module.css';

const DevTools = () => {
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
            <h3 style={{ fontSize: 36 }}>Developer resources</h3>
            <p>
              I write a lot of code. Sometimes I write something useful. Take a
              look. Perhaps you'll find it useful too.
            </p>

            <Button
              href={'/tools'}
              style={{ marginTop: '32px', marginLeft: -2 }}
            >
              Go to tools
            </Button>
          </div>
        </Flex>
      </div>
      <div
        style={{
          paddingLeft: '64px',

          // width: '100%', // width: '50%',
        }}
      >
        {/* <div
          style={{
            height: 395,
            width: 516,
          }}
        >
          <DevGraphic />
        </div> */}
        <div
          style={{
            position: 'relative',
            height: 395,
            width: 516,
            // width: '100%',
          }}
        >
          <DevGraphic />
          {/* <Image
            src="/editor.svg"
            alt=""
            height={395}
            width={456}
            className={s.projectCard}
          /> */}
        </div>
      </div>
    </Flex>
  );
};

export default DevTools;
