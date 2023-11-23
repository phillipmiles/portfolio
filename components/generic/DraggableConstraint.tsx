import { useRef, useState, useEffect } from 'react';
import s from './DraggableConstraint.module.css';

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

const DraggableConstraint = ({
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

  useEffect(() => {
    // TODO NEED TO INIT THIS OR SOMEHTING BECUSE THEY ONLY GET
    // UPDATED AFTER A MOVE EVENT FIRST ELSE 0 IS RETURNED WHEN DRAG ENDS WITHOUT
    // HAVING A MOVE EVENT FIRED.

    const endDrag = (e: any) => {
      document.documentElement.removeEventListener('mouseup', endDrag);
      document.documentElement.removeEventListener('mousemove', moveElement);

      if (onEnd)
        onEnd(e, {
          offsetLeft: posX,
          offsetTop: posY,
          offsetLeftPercent: 0,
          offsetTopPercent: 0,
        });

      setIsDragging(false);
    };

    const moveElement = (e: any) => {
      if (!dragElement.current) return;

      e.preventDefault();

      const parentConstraintBounding =
        dragElement.current.parentElement.getBoundingClientRect();
      const draggableBounding = dragElement.current.getBoundingClientRect();

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

      console.log(draggableBounding);
      let newOffsetLeft = dragElement.current.offsetLeft - newPosX;
      let newOffsetTop = dragElement.current.offsetTop - newPosY;

      const rightBounds =
        parentConstraintBounding.width - draggableBounding.width;
      const bottomBounds =
        parentConstraintBounding.height - draggableBounding.height;

      let newOffsetTopPercentage = (newOffsetTop / bottomBounds) * 100;
      let newOffsetLeftPercentage = (newOffsetLeft / rightBounds) * 100;

      if (onMove)
        onMove(e, {
          offsetLeft: newPosX,
          offsetTop: newPosY,
          offsetLeftPercent: newOffsetLeftPercentage,
          offsetTopPercent: newOffsetTopPercentage,
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
          offsetLeft: dragElement.current.offsetLeft,
          offsetTop: dragElement.current.offsetTop,
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
      className={`${s.dragElement} ${className}${disable ? ' disabled' : ''}`}
      style={{
        left: posX,
        top: posY,
        ...style,
      }}
      {...props}
    />
  );
};

export default DraggableConstraint;
