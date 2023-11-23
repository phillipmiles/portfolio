import { useRef, useState, useEffect } from 'react';
import s from './Draggable.module.css';
import { percentage } from '../../utils/math';

// TO EXPLORE - Ability to set position by percentage rather then a fixed pixel offset.
// use case for this would be for changes in viewport but maybe this should be solved for
// by a parent component.

// TO EXPLORE - OffsetPercent values go incorrect if parent element changes size or screen
// is resized.

// TO EXPLORE - Be able to adjust the origin point that posX and posY properties and the
// returned position object are relative to. other then the top left corner of the parent element.

interface Props {
  className?: string;
  onMove?: Function;
  onEnd?: Function;
  onStart?: Function;
  disable: boolean;
  constrainToParent?: boolean;
  posX?: number;
  posY?: number;
  axisXMultiplier?: number;
  axisYMultiplier?: number;
}

const Draggable = ({
  className,
  style,
  posX = 0,
  posY = 0,
  constrainToParent = true,
  axisXMultiplier = 1,
  axisYMultiplier = 1,
  onStart,
  onMove,
  onEnd,
  disable = false,
  ...props
}: Props) => {
  const dragElement = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  // The previous position in space of the cursor/touchpoint
  const [prevClientXPos, setPrevClientXPos] = useState(null);
  const [prevClientYPos, setPrevClientYPos] = useState(null);

  const getOffsetLeftPercent = () => {
    const parentBounding =
      dragElement.current.parentElement.getBoundingClientRect();

    return percentage(posX, parentBounding.width);
  };

  const getOffsetTopPercent = () => {
    const parentBounding =
      dragElement.current.parentElement.getBoundingClientRect();

    return percentage(posY, parentBounding.height);
  };

  useEffect(() => {
    const endDrag = (e: any) => {
      document.documentElement.removeEventListener('mouseup', endDrag);
      document.documentElement.removeEventListener('mousemove', moveElement);

      if (onEnd)
        onEnd(e, {
          offsetLeft: posX,
          offsetTop: posY,
          offsetLeftPercent: getOffsetLeftPercent(),
          offsetTopPercent: getOffsetTopPercent(),
        });

      setIsDragging(false);
    };

    const moveElement = (e: any) => {
      if (!dragElement.current) return;

      e.preventDefault();

      const parentBounding =
        dragElement.current.parentElement.getBoundingClientRect();

      // Get client cursor/touchpoint position deltas.
      const clientDeltaX = prevClientXPos
        ? e.clientX - prevClientXPos
        : e.clientX;
      const clientDeltaY = prevClientYPos
        ? e.clientY - prevClientYPos
        : e.clientY;

      // Get new draggable position
      const newPosX =
        dragElement.current.offsetLeft + clientDeltaX * axisXMultiplier;
      const newPosY =
        dragElement.current.offsetTop + clientDeltaY * axisYMultiplier;

      // Store current cursor/touchpoint position for use in next render/move event.
      setPrevClientXPos(e.clientX);
      setPrevClientYPos(e.clientY);

      if (onMove)
        onMove(e, {
          offsetLeft: newPosX,
          offsetTop: newPosY,
          offsetLeftPercent: percentage(newPosX, parentBounding.width),
          offsetTopPercent: percentage(newPosY, parentBounding.height),
          clientDeltaX: clientDeltaX,
          clientDeltaY: clientDeltaY,
        });
    };

    const dragMouseDown = (e: any) => {
      if (disable) return;
      e = e || window.event;
      e.preventDefault();

      // get the mouse cursor position at drag init.
      setPrevClientXPos(e.clientX);
      setPrevClientYPos(e.clientY);

      setIsDragging(true);

      if (onStart)
        onStart(e, {
          offsetLeft: getOffsetLeftPercent(),
          offsetTop: getOffsetTopPercent(),
        });
    };

    dragElement.current.addEventListener('mousedown', dragMouseDown);

    if (isDragging) {
      document.documentElement.addEventListener('mouseup', endDrag);
      document.documentElement.addEventListener('mousemove', moveElement);
    }
    return () => {
      if (dragElement.current)
        dragElement.current.removeEventListener('mousedown', dragMouseDown);
      if (isDragging) {
        document.documentElement.removeEventListener('mousemove', moveElement);
        document.documentElement.removeEventListener('mouseup', endDrag);
      }
    };
  }, [posX, posY, isDragging]);

  return (
    <div
      ref={dragElement}
      className={`${s.dragElement} ${className} ${disable ? 'disabled' : ''}`}
      style={{
        left: posX,
        top: posY,
        ...style,
      }}
      {...props}
    />
  );
};

export default Draggable;
