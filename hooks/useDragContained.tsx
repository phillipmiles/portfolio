import { toPercent } from '../utils/math';
import useDrag from './useDrag';

const useDragContained = (dragRef, containerRef, onStart, onMove, onEnd) => {
  const getPositionAsPercent = (position) => {
    const xPercent = toPercent(
      position.x,
      containerRef.current.getBoundingClientRect().width -
        dragRef.current.getBoundingClientRect().width
    );

    const yPercent = toPercent(
      position.y,
      containerRef.current.getBoundingClientRect().height -
        dragRef.current.getBoundingClientRect().height
    );

    return {
      x: xPercent,
      y: yPercent,
    };
  };

  const handleDragMove = (e, d) => {
    const parentConstraintBounding =
      containerRef.current.getBoundingClientRect();
    const draggableBounding = dragRef.current.getBoundingClientRect();

    let newDeltaX = 0;
    let newDeltaY = 0;

    const rightBounds =
      parentConstraintBounding.width - draggableBounding.width;
    const bottomBounds =
      parentConstraintBounding.height - draggableBounding.height;

    const rawPosX = dragRef.current.offsetLeft + d.deltaX;
    const rawPosY = dragRef.current.offsetTop + d.deltaY;

    if (rawPosX < 0) {
      newDeltaX = dragRef.current.offsetLeft * -1;
    } else if (rawPosX > rightBounds) {
      newDeltaX =
        parentConstraintBounding.width -
        dragRef.current.offsetLeft -
        draggableBounding.width;
    } else {
      newDeltaX = d.deltaX;
    }

    if (rawPosY < 0) {
      newDeltaY = dragRef.current.offsetTop * -1;
    } else if (rawPosY > bottomBounds) {
      newDeltaY =
        parentConstraintBounding.height -
        dragRef.current.offsetTop -
        draggableBounding.height;
    } else {
      newDeltaY = d.deltaY;
    }

    const xOffset = dragRef.current.offsetLeft + newDeltaX;
    const yOffset = dragRef.current.offsetTop + newDeltaY;
    // Calc position percent
    const positionAsPercent = getPositionAsPercent({
      x: xOffset,
      y: yOffset,
    });

    if (onMove)
      onMove(e, {
        x: newDeltaX,
        y: newDeltaY,
        xOffset,
        yOffset,
        xPercent: positionAsPercent.x,
        yPercent: positionAsPercent.y,
      });
  };

  const handleDragStart = (event) => {
    const positionAsPercent = getPositionAsPercent({
      x: dragRef.current.offsetLeft,
      y: dragRef.current.offsetTop,
    });

    if (onStart)
      onStart(event, {
        x: 0,
        y: 0,
        xOffset: dragRef.current.offsetLeft,
        yOffset: dragRef.current.offsetTop,
        xPercent: positionAsPercent.x,
        yPercent: positionAsPercent.y,
      });
  };

  const handleDragEnd = (event) => {
    const positionAsPercent = getPositionAsPercent({
      x: dragRef.current.offsetLeft,
      y: dragRef.current.offsetTop,
    });

    if (onStart)
      onEnd(event, {
        x: 0,
        y: 0,
        xOffset: dragRef.current.offsetLeft,
        yOffset: dragRef.current.offsetTop,
        xPercent: positionAsPercent.x,
        yPercent: positionAsPercent.y,
      });
  };

  useDrag(dragRef, handleDragStart, handleDragMove, handleDragEnd);
};

export default useDragContained;
