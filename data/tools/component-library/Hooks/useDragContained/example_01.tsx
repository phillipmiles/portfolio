import { useState, useRef } from 'react';
import s from './example_01.module.css';
import useDragContained from '../../../../../hooks/useDragContained';

export const Example = () => {
  const elementRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const onDragStart = () => {
    setIsDragging(true);
  };
  const onDragEnd = () => {
    setIsDragging(false);
  };

  const onDragMove = (event, delta) => {
    console.log('D', delta);
    setPosition((pos) => ({
      x: pos.x + delta.x,
      y: pos.y + delta.y,
    }));
  };

  useDragContained(
    elementRef,
    containerRef,
    onDragStart,
    onDragMove,
    onDragEnd
  );

  const handleChangeX = (event) => {
    setPosition((pos) => {
      return { x: parseInt(event.target.value), y: pos.y };
    });
  };

  const handleChangeY = (event) => {
    setPosition((pos) => {
      return { x: pos.x, y: parseInt(event.target.value) };
    });
  };

  return (
    <div>
      <p>Click and hold blue square to drag.</p>

      <span className={s.inputs}>
        X
        <input
          type="number"
          value={position.x}
          onChange={handleChangeX}
          className={s.input}
        />
        Y
        <input
          type="number"
          value={position.y}
          onChange={handleChangeY}
          className={s.input}
        />
        <span></span>
      </span>
      <div ref={containerRef} className={s.container}>
        <div className={s.fakeContainer}>
          <div
            ref={elementRef}
            className={s.dragElement}
            style={{
              left: position.x,
              top: position.y,
              ...(isDragging && { background: 'rgb(243, 78, 95)' }),
            }}
          >
            <p>Drag Me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const code = [
  {
    language: 'jsx',
    code: `const elementRef = useRef(null);
const containerRef = useRef(null);
const [isDragging, setIsDragging] = useState(false);
const [position, setPosition] = useState({
  x: 0,
  y: 0,
});

const onDragStart = () => {
  setIsDragging(true);
};
const onDragEnd = () => {
  setIsDragging(false);
};

const onDragMove = (event, delta) => {
  setPosition((pos) => ({
    x: pos.x + delta.x,
    y: pos.y + delta.y,
  }));
};

useDragContained(
  elementRef,
  containerRef,
  onDragStart,
  onDragMove,
  onDragEnd
);

const handleChangeX = (event) => {
  setPosition((pos) => {
    return { x: parseInt(e.target.value), y: pos.y };
  });
};

const handleChangeY = (event) => {
  setPosition((pos) => {
    return { x: pos.x, y: parseInt(e.target.value) };
  });
};

return (
  <div>
    <p>Click and hold blue square to drag.</p>

    <span className={s.inputs}>
      X
      <input
        type="number"
        value={position.x}
        onChange={handleChangeX}
        className={s.input}
      />
      Y
      <input
        type="number"
        value={position.y}
        onChange={handleChangeY}
        className={s.input}
      />
    </span>
    <div ref={containerRef} className={s.container}>
      <div className={s.fakeContainer}>
        <div
          ref={elementRef}
          className={s.dragElement}
          style={{
            left: position.x,
            top: position.y,
            ...(isDragging && { background: 'rgb(243, 78, 95)' }),
          }}
        >
          <p>Drag Me</p>
        </div>
      </div>
    </div>
  </div>
);`,
  },
  {
    language: 'css',
    code: `.container {
  height: 320px;
  position: relative;
  display: flex;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  padding: 24px;
  gap: 24px;
}

.fakeContainer {
  background-color: rgba(255, 255, 255, 0.5);
  flex-grow: 1;
  border-radius: 4px;
}

.dragElement {
  position: absolute;
  cursor: pointer;
  width: 100px;
  height: 100px;
  background-color: rgb(0, 123, 228);
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.dragElement:hover {
  background-color: rgb(0, 135, 254);
}

.dragElement p {
  margin-bottom: 0;
}

.inputs {
  display: block;
  margin-bottom: 24px;
}

.inputs .input:first-child {
  margin-right: 24px;
}

.input {
  margin-left: 8px;
  width: 80px;
  font-size: 16px;
}`,
  },
];
