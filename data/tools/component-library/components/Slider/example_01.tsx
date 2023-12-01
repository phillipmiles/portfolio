import { useState } from 'react';
import s from './example_01.module.css';
import Slider from '../../../../../components/generic/Slider';

export const Example = () => {
  const [val, setCurrentVal] = useState(50);

  const handleDragStart = () => {};
  const handleDragEnd = () => {};

  const onClick = (val) => {
    setCurrentVal(val);
  };

  const handleDragMove = (percent) => {
    setCurrentVal(percent);
  };

  const handleChange = (e) => {
    setCurrentVal(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        value={val}
        onChange={handleChange}
        className={s.input}
        max={100}
        min={0}
      />
      <Slider
        percent={val}
        onClick={onClick}
        onMove={handleDragMove}
        onStart={handleDragStart}
        onEnd={handleDragEnd}
        style={{
          width: '300px',
          paddingLeft: '12px',
          paddingRight: '12px',
          paddingTop: '8px',
          paddingBottom: '8px',
          background: '#CCC',
        }}
        TimelineComponent={(props) => (
          <div
            {...props}
            style={{
              background: 'green',
              height: '8px',
              borderRadius: '4px',
            }}
          />
        )}
        SeekerComponent={() => (
          <div
            style={{
              width: '24px',
              height: '24px',
              background: 'red',
              borderRadius: '12px',
            }}
          />
        )}
      />
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `const Example = () => {
  const duration = 150;
  const [currentTime, setCurrentTime] = useState(0);

  const onDragEnd = (val) => {
    setCurrentTime(val);
  };

  const onClick = (val) => {
    setCurrentTime(duration * val);
  };

  return (
    <Slider
      currentTime={currentTime}
      duration={duration}
      onClick={onClick}
      onEnd={onDragEnd}
      style={{
        width: '300px',
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '8px',
        paddingBottom: '8px',
        background: '#CCC',
      }}
      TimelineComponent={() => (
        <div
          style={{
            background: 'green',
            height: '8px',
            borderRadius: '4px',
          }}
        />
      )}
      SeekerComponent={() => (
        <div
          style={{
            width: '24px',
            height: '24px',
            background: 'red',
            borderRadius: '12px',
          }}
        />
      )}
    />
  );
};`,
  },
  {
    language: 'css',
    code: `.dragElement {
  width: 150px;
  height: 150px;
  background-color: rgb(0, 123, 228);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.dragElement p {
  margin-bottom: 0;
}`,
  },
];
