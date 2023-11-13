import s from './Screen02.module.css';
import ScreenContainer from './ScreenContainer';
import ScreenCard from './ScreenCard';

const Screen02 = ({ className, ...props }) => (
  <ScreenContainer className={className} {...props}>
    <div className={s.imageScreenHeaderWrap}>
      <div className={s.imageScreenHeader} />
      <div className={s.imageScreenAvatarWrap}>
        <div className={s.imageScreenAvatar} />
        <div className={s.imageScreenAvatar} />
      </div>
    </div>
    <div className={s.imageScreenColumns}>
      <div className={s.imageScreenCol}>
        <ScreenCard>
          <div className={s.imageScreenColumnImage} />
        </ScreenCard>
        <ScreenCard />
      </div>
      <div className={s.imageScreenCol}>
        <ScreenCard />
        <ScreenCard>
          <div className={s.imageScreenColumnImage} />
        </ScreenCard>
      </div>
      <div className={s.imageScreenCol}>
        <ScreenCard>
          <div className={s.imageScreenColumnImage} />
        </ScreenCard>
        <ScreenCard>
          <div className={s.imageScreenColumnImage} />
        </ScreenCard>
      </div>
      <div className={s.imageScreenCol}>
        <ScreenCard />
        <ScreenCard />
      </div>
    </div>
  </ScreenContainer>
);

export default Screen02;
