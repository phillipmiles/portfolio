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
        className={s.slider}
        TimelineComponent={({ onClick }) => (
          <div onClick={onClick} className={s.timeline} />
        )}
        SeekerComponent={({ isDragging }) => (
          <div className={`${s.seeker} ${isDragging ? s.dragging : ''}`} />
        )}
      />
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `const Example = () => {
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
        className={input}
        max={100}
        min={0}
      />
      <Slider
        percent={val}
        onClick={onClick}
        onMove={handleDragMove}
        onStart={handleDragStart}
        onEnd={handleDragEnd}
        className={slider}
        TimelineComponent={({ onClick }) => (
          <div onClick={onClick} className={s.timeline} />
        )}
        SeekerComponent={() => <div className={seeker} />}
      />
    </div>
  );
};`,
  },
  {
    language: 'css',
    code: `.slider {
  width: 300px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.seeker {
  width: 24px;
  height: 24px;
  background: var(--primary-color);
  border-radius: 12px;
}

.timeline {
  background: #ccc;
  height: 8px;
  border-radius: 4px;
}
.input {
  margin-bottom: 16px;
}
`,
  },
];
