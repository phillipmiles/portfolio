import s from './Screen01.module.css';
import ScreenContainer from './ScreenContainer';
import ScreenButton from './ScreenButton';
import ScreenCard from './ScreenCard';

const Screen01 = ({ className, ...props }) => (
  <ScreenContainer className={className} {...props}>
    <div className={s.imageScreenHeader} />
    <div className={s.imageScreenContentSplit}>
      <ScreenCard className={`${s.imageScreenContentLeft}`}>
        <ScreenButton style={{ width: '34px', paddingRight: '10px' }} />
      </ScreenCard>
      <div className={s.imageScreenContentRight}>
        <div className={s.imageScreenContentRightHeader} />
        <ScreenCard className={`${s.imageScreenContentRightBox}`}>
          <ScreenButton style={{ width: '60px', padding: '7px 15px' }} />
        </ScreenCard>
        <div className={s.imageScreenContentRightTrio}>
          <ScreenCard />
          <ScreenCard />
          <ScreenCard />
        </div>
      </div>
    </div>
  </ScreenContainer>
);

export default Screen01;
