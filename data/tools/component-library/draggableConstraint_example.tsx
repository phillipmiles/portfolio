import { useState } from 'react';
import DraggableConstraint from '../../../components/generic/DraggableConstraint';

import s from './draggableConstraint_styles.module.css';

export const Example = () => {
  const [position, setPosition] = useState({
    offsetLeft: 0,
    offsetLeftPercent: 0,
    offsetTop: 0,
    offsetTopPercent: 0,
  });

  const handleMove = (event, position) => {
    setPosition(position);
  };

  return (
    <div style={{}}>
      <p>Click square and drag.</p>
      <div style={{ height: '320px', position: 'relative' }}>
        <DraggableConstraint
          className={s.dragElement}
          onMove={handleMove}
          onStart={() => {}}
          onEnd={() => {}}
          disable={false}
        >
          <p>
            <strong>LEFT</strong>
          </p>
          <p>
            {position.offsetLeft}px | {Math.round(position.offsetLeftPercent)}%
          </p>
          <p>
            <strong>TOP</strong>
          </p>
          <p>
            {position.offsetTop}px | {Math.round(position.offsetTopPercent)}%
          </p>
        </DraggableConstraint>
      </div>
    </div>
  );
};

export const exampleCode = [
  {
    language: 'jsx',
    code: `const [position, setPosition] = useState({
  offsetLeft: 0,
  offsetLeftPercent: 0,
  offsetTop: 0,
  offsetTopPercent: 0,
});
  
const handleMove = (event, position) => {
  setPosition(position);
};

return (
  <div>
    <p>Click square and drag.</p>
    <div style={{ height: '600px', position: 'relative' }}>
      <DraggableConstraint
        className={s.dragElement}
        onMove={handleMove}
        onStart={() => {}}
        onEnd={() => {}}
        disable={false}
      >
        <p><strong>LEFT</strong></p>
        <p>
          {position.offsetLeft}px | {Math.round(position.offsetLeftPercent)}%
        </p>
        <p><strong>TOP</strong></p>
        <p>
          {position.offsetTop}px | {Math.round(position.offsetTopPercent)}%
        </p>
      </DraggableConstraint>
    </div>
  </div>
);`,
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
