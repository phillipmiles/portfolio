import { toPercent } from '../../utils/math';
import s from './AudioSoundGraph.module.css';

interface Props {
  id: string;
  gap: number;
  progress: number;
  data: number[];
}

const AudioSoundGraph = ({ id, gap = 0, progress = 0, data }: Props) => {
  const maxVal = 100; // Because each data point is being converted to a percentage value
  // 0 to 100, then the maximum value of a line is 100.
  const lineWidth = 1;
  // Width of the overall SVG
  const svgWidth = data.length * (gap + 1) - gap;
  // Force all negative data values to 0 because positive values is the assumption.
  const noMinus = data.map((item) => (item < 0 ? 0 : item));
  const maxHeight = Math.max(...noMinus) * 2;

  const startPoint = `M0,${maxVal} `;

  const getLines = (): string => {
    if (!data.length) return '';
    const lines = [];

    lines.push(startPoint);
    lines.push(
      noMinus.map((point) => {
        // const val2 = point >= 0 ? point : 0;
        const val = toPercent(point, maxHeight);
        return `l0,${val * -1} l${lineWidth},0 l0,${val} l-1,0 m${gap + 1},0 `;
      })
    );

    lines.push(startPoint);
    lines.push(
      noMinus.map((point, index) => {
        // const val2 = point >= 0 ? point : 0;
        const val = toPercent(point, maxHeight);
        return `l0,${val} l${lineWidth},0 l0,${val * -1} l-1,0 m${gap + 1},0 `;
      })
    );

    lines.push('Z');
    return lines.toString();
  };

  return (
    <svg
      className={s.graph}
      viewBox={`0 0 ${svgWidth} ${maxVal * 2}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="progress-347034571">
          <stop offset={`${progress}`} stopColor="#d33c94"></stop>
          <stop offset={`${progress}`} stopColor="#775588"></stop>
        </linearGradient>
      </defs>
      <path
        d={getLines()}
        style={{ fill: "url('#progress-347034571')" }}
      ></path>
    </svg>
  );
};
export default AudioSoundGraph;
