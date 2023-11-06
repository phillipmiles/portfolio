import Image from 'next/image';
import Link from 'next/link';
import Button from './generic/Button';
import Flex from './generic/Flex';
import s from './Projects.module.css';
import ButtonContainer from './ButtonContainer';

const Projects = () => {
  return (
    <Flex className={s.container}>
      <div className={s.imageContainer}>
        <div className={s.imageWrap}>
          <div className={s.projectCardWrap}>
            <Image src="/blank.png" alt="" fill className={s.projectCard} />
          </div>
          <div className={s.projectCardWrap}>
            <Image
              src="/blankYellow.png"
              alt=""
              fill
              className={s.projectCard}
            />
          </div>
          <div className={s.projectCardWrap}>
            <Image
              src="/images/projects/thought-stream/thought-stream_thumbnail_01.jpg"
              alt=""
              fill
              style={{ transform: 'scale(1.2)' }}
              className={s.projectCard}
            />
          </div>
        </div>
      </div>
      <div className={s.textContainer}>
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
              Take a look at a selection of my work and gain an insight into the
              processes and decisions made during their development.
            </p>
            <ButtonContainer className={s.buttonContainer}>
              <Button
                href={'projects'}
                style={{
                  marginLeft: -2,
                }}
              >
                Go to projects
              </Button>
            </ButtonContainer>
          </div>
        </Flex>
      </div>
    </Flex>
  );
};

export default Projects;
