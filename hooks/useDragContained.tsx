import useDrag from './useDrag';

const useDragContained = (dragRef, containerRef, onStart, onMove, onEnd) => {
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

    if (onMove)
      if (onMove)
        onMove(e, {
          x: newDeltaX,
          y: newDeltaY,
        });
  };

  useDrag(dragRef, onStart, handleDragMove, onEnd);
};

export default useDragContained;
