import { useState, useRef } from 'react';
import s from './example_01.module.css';

import useDrag from '../../../../hooks/useDrag';

export const Example = () => {
  const elementRef = useRef(null);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const onDragStart = () => {};
  const onDragEnd = () => {};

  const onDragMove = (e, d) => {
    setPosition((pos) => ({
      x: pos.x + d.deltaX,
      y: pos.y + d.deltaY,
    }));
  };

  useDrag(elementRef, onDragStart, onDragMove, onDragEnd);

  return (
    <div>
      <p>Click square and drag.</p>
      <div
        style={{
          height: '320px',
          position: 'relative',
          borderRadius: '4px',
          background: 'rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          ref={elementRef}
          className={s.dragElement}
          style={{ position: 'absolute', left: position.x, top: position.y }}
        >
          <p>
            <strong>LEFT</strong>
          </p>
          <p>{position.x}px</p>
          <p>
            <strong>TOP</strong>
          </p>
          <p>{position.y}px</p>
        </div>
        {/* <Draggable
          posX={position.offsetLeft}
          posY={position.offsetTop}
          onMove={handleMove}
          onStart={(e, d) => {}}
          onEnd={(e, d) => {}}
        >
          <div className={s.dragElement}>
            <p>
              <strong>LEFT</strong>
            </p>
            <p>
              {position.offsetLeft}px | {Math.round(position.offsetLeftPercent)}
              %
            </p>
            <p>
              <strong>TOP</strong>
            </p>
            <p>
              {position.offsetTop}px | {Math.round(position.offsetTopPercent)}%
            </p>
          </div>
        </Draggable> */}
      </div>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `const elementRef = useRef(null);
const [position, setPosition] = useState({
  x: 0,
  y: 0,
});

const onDragStart = () => {};
const onDragEnd = () => {};

const onDragMove = (e, d) => {
  setPosition((pos) => ({
    x: pos.x + d.deltaX,
    y: pos.y + d.deltaY,
  }));
};

useDragDelta(elementRef, onDragStart, onDragMove, onDragEnd);

return (
  <div>
    <p>Click square and drag.</p>
    <div
      style={{
        height: '320px',
        position: 'relative',
        borderRadius: '4px',
        background: 'rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        ref={elementRef}
        className={s.dragElement}
        style={{ position: 'absolute', left: position.x, top: position.y }}
      >
        <p>
          <strong>LEFT</strong>
        </p>
        <p>{position.x}px</p>
        <p>
          <strong>TOP</strong>
        </p>
        <p>{position.y}px</p>
      </div>
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
