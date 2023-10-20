import DevGraphic from './DevGraphic';
import Button from './generic/Button';
import Flex from './generic/Flex';
import s from './DevTools.module.css';
import ButtonContainer from './ButtonContainer';

const DevTools = () => {
  return (
    <Flex className={s.container}>
      <div className={s.textContainer}>
        <Flex
          style={{
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <div>
            <h2 className="h3">Developer resources</h2>
            <p>
              I write a lot of code. Sometimes I write something useful. Take a
              look. Perhaps you'll find it useful too.
            </p>

            <ButtonContainer className={s.buttonContainer}>
              <Button href={'/tools'} style={{ marginLeft: -2 }}>
                Go to tools
              </Button>
            </ButtonContainer>
          </div>
        </Flex>
      </div>
      <div className={s.imageContainer}>
        <div className={s.imageWrap}>
          <DevGraphic />
        </div>
      </div>
    </Flex>
  );
};

export default DevTools;
