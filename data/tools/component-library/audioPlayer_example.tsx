import { useState } from 'react';
import s from './audioPlayer.module.css';
import AudioPlayer from '../../../components/generic/AudioPlayer';

export const Example = () => {
  return (
    <AudioPlayer src="https://traffic.libsyn.com/theleaderslabpodcast/S2_EP1_v2_-_Making_Leadership_Work.mp3" />
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
