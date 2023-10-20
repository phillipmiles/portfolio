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
              src="/projects-thumb.png"
              alt=""
              fill
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
              Take a look at detailed breakdowns for each of my apps. See how
              they’re progressing and what decision’s I’m making in developing
              them.
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
