import { useState } from 'react';
import s from './example_01.module.css';
import Draggable from '../../../../components/generic/Draggable';

export const Example = () => {
  const [position, setPosition] = useState({
    offsetLeft: 0,
    offsetLeftPercent: 0,
    offsetTop: 0,
    offsetTopPercent: 0,
    clientDeltaX: 0,
    clientDeltaY: 0,
  });

  const handleMove = (event, pos) => {
    setPosition(pos);
  };

  return (
    <div>
      <p>Click square and drag.</p>
      <div style={{ height: '320px', position: 'relative' }}>
        <Draggable
          className={s.dragElement}
          posX={position.offsetLeft}
          posY={position.offsetTop}
          onMove={handleMove}
          onStart={(e, d) => {}}
          onEnd={(e, d) => {}}
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
        </Draggable>
      </div>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `const [position, setPosition] = useState({
  offsetLeft: 0,
  offsetLeftPercent: 0,
  offsetTop: 0,
  offsetTopPercent: 0,
  clientDeltaX: 0,
  clientDeltaY: 0,
});

const handleMove = (event, pos) => {
  setPosition(pos);
};

return (
  <div>
    <p>Click square and drag.</p>
    <div style={{ height: '320px', position: 'relative' }}>
      <Draggable
        className={s.dragElement}
        posX={position.offsetLeft}
        posY={position.offsetTop}
        onMove={handleMove}
        onStart={(e, d) => {}}
        onEnd={(e, d) => {}}
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
      </Draggable>
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
