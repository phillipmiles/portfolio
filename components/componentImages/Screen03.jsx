import s from './Screen03.module.css';
import ScreenContainer from './ScreenContainer';
import ScreenCard from './ScreenCard';

const AccordionIndicator = () => (
  <div
    style={{
      width: '6px',
      height: '6px',
      borderRadius: '4px',
      backgroundColor: '#FFF',
      marginRight: '2px',
      marginLeft: '2px',
    }}
  />
);

const Text = ({ style }) => (
  <div
    style={{
      height: '2px',
      backgroundColor: '#333',
      width: '100%',
      borderRadius: '4px',
      marginBottom: '6px',
      ...style,
    }}
  />
);

const Screen03 = ({ className, ...props }) => (
  <ScreenContainer className={className} {...props}>
    <div
      style={{
        width: '100%',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingBottom: '8px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '32px',
          borderRadius: '6px',
          backgroundColor: '#a5c12e',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '6px',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <AccordionIndicator />
          <AccordionIndicator />
          <AccordionIndicator />
          <AccordionIndicator />
        </div>
      </div>

      <div
        style={{
          width: '100%',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'row',
          marginTop: '8px',
          gap: '8px',
        }}
      >
        <ScreenCard
          style={{
            width: '65%',
            flexGrow: 1,
            padding: '12px',
          }}
        >
          <Text
            style={{
              height: '6px',
              width: '40%',
              borderRadius: '4px',
              marginBottom: '12px',
            }}
          />

          <Text />
          <Text />
          <Text />
          <Text style={{ marginBottom: 0 }} />
        </ScreenCard>
        <ScreenCard
          style={{
            flexGrow: 1,
            padding: '5px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '50%',
              backgroundColor: '#f89c27',
              borderRadius: '3px',
              marginBottom: '4px',
            }}
          />
          <div
            style={{
              width: '100%',
              height: '50%',
              backgroundColor: '#f9ea54',
              borderRadius: '3px',
            }}
          />
        </ScreenCard>
      </div>
    </div>
  </ScreenContainer>
);

export default Screen03;
