import s from './Hero.module.css';

const HeroScreen3 = ({ isVisible }: { isVisible: boolean }) => (
  <div className={s.imageScreenWrap3}>
    <div
      className={`${s.imageScreen} ${s.imageTransition}`}
      style={{
        ...(isVisible && {
          transform: 'scale(80%)',
          opacity: 0,
        }),
      }}
    >
      <div className={`${s.imageScreenBar} ${s.imageScreenCard}`}>
        <div className={s.imageScreenBarMenu}>
          <div className={s.imageScreenBarMenuItem} />
          <div className={s.imageScreenBarMenuItem} />
          <div className={s.imageScreenBarMenuItem} />
        </div>
        <div className={s.imageScreenBarAddressWrapper}>
          <div className={s.imageScreenBarAddress} />
        </div>
      </div>

      <div className={s.imageScreenContent}>
        <div className={s.imageScreenHeaderWrap}>
          <div className={s.imageScreenHeader} />
          <div className={s.imageScreenButton}>
            <div />
          </div>
        </div>
        <div className={s.imageScreenContentInner}>
          <div className={`${s.imageScreenContentLeft} ${s.imageScreenCard}`}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div
            className={`${s.imageScreenContentRight} ${s.imageScreenCard}`}
          />
        </div>
      </div>
    </div>
  </div>
);

export default HeroScreen3;
