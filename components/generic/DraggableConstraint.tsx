import { useRef, useState, useEffect } from 'react';
import s from './DraggableConstraint.module.css';

// Div shield is used to cover the page
const createBodyBlocker = (id, onClick) => {
  const bodyBlocker = document.createElement('div');

  bodyBlocker.id = id;
  bodyBlocker.style.position = 'absolute';
  bodyBlocker.style.top = '0';
  bodyBlocker.style.left = '0';
  bodyBlocker.style.width = '100%';
  bodyBlocker.style.height = '100%';
  bodyBlocker.style.backgroundColor = 'transparent';
  bodyBlocker.style.zIndex = '99999';

  const add = () => {
    document.body.appendChild(bodyBlocker);

    bodyBlocker.addEventListener('mousedown', handleClick);
  };

  const remove = () => {
    bodyBlocker.remove();
    bodyBlocker.removeEventListener('mousedown', this);
  };

  const handleClick = () => {
    onClick(bodyBlocker);
  };

  return { element: bodyBlocker, add, remove };
};

const DraggableConstraint = ({
  className,
  externalPosX = 0,
  externalPosY = 0,
  constrainToParent = true,
  axisXMultiplier = 1,
  axisYMultiplier = 1,
  onStart,
  onMove,
  onEnd,
  disable = false,
  ...props
}) => {
  const dragElement = useRef();
  const [elementPosX, setElementPosX] = useState(externalPosX);
  const [elementPosY, setElementPosY] = useState(externalPosY);
  const [dragValueX, setDragValueX] = useState(externalPosY);
  const [dragValueY, setDragValueY] = useState(externalPosY);

  useEffect(() => {
    setElementPosX(externalPosX);
  }, [externalPosX]);

  useEffect(() => {
    setElementPosY(externalPosY);
  }, [externalPosY]);

  useEffect(() => {
    const bodyBlocker = createBodyBlocker();
    let oldPosX = 0;
    let oldPosY = 0;

    let localElementPosX = 0;
    let localElementPosY = 0;
    let elementPercentX = 0;
    let elementPercentY = 0;

    const endDrag = (e) => {
      document.documentElement.removeEventListener('mouseup', endDrag);
      document.documentElement.removeEventListener('mousemove', moveElement);
      bodyBlocker.remove();

      if (onEnd)
        onEnd(e, {
          offsetLeft: localElementPosX,
          offsetTop: localElementPosY,
          offsetLeftPercent: elementPercentX,
          offsetTopPercent: elementPercentY,
        });
    };

    const moveElement = (e) => {
      if (!dragElement.current) return;

      e.preventDefault();

      const clientXPos = e.clientX;
      const clientYPos = e.clientY;

      // Get new position
      const newPosX = (oldPosX - clientXPos) * axisXMultiplier;
      const newPosY = (oldPosY - clientYPos) * axisYMultiplier;

      oldPosX = clientXPos;
      oldPosY = clientYPos;

      const parentConstraintBounding =
        dragElement.current.parentElement.getBoundingClientRect();
      const draggableBounding = dragElement.current.getBoundingClientRect();

      let proposedOffsetLeft = dragElement.current.offsetLeft - newPosX;
      let proposedOffsetTop = dragElement.current.offsetTop - newPosY;

      let newOffsetTop = 0;
      let newOffsetLeft = 0;
      let newOffsetTopPercentage = 0;
      let newOffsetLeftPercentage = 0;

      const rightBounds =
        parentConstraintBounding.width - draggableBounding.width;
      const bottomBounds =
        parentConstraintBounding.height - draggableBounding.height;

      if (constrainToParent) {
        if (proposedOffsetLeft < 0) {
          newOffsetLeft = 0;
          newOffsetLeftPercentage = 0;
        } else if (proposedOffsetLeft > rightBounds) {
          newOffsetLeft = rightBounds;
          newOffsetLeftPercentage = 100;
        } else {
          newOffsetLeft = proposedOffsetLeft;
          newOffsetLeftPercentage = (newOffsetLeft / rightBounds) * 100;
        }

        if (proposedOffsetTop < 0) {
          newOffsetTop = 0;
          newOffsetTopPercentage = 0;
        } else if (proposedOffsetTop > bottomBounds) {
          newOffsetTop = bottomBounds;
          newOffsetTopPercentage = 100;
        } else {
          newOffsetTop = proposedOffsetTop;
          newOffsetTopPercentage = (newOffsetTop / bottomBounds) * 100;
        }
      }

      setElementPosX(newOffsetLeft);
      setElementPosY(newOffsetTop);

      localElementPosX = newOffsetLeft;
      localElementPosY = newOffsetTop;
      elementPercentX = newOffsetLeftPercentage;
      elementPercentY = newOffsetTopPercentage;

      if (onMove)
        onMove(e, {
          offsetLeft: newOffsetLeft,
          offsetTop: newOffsetTop,
          offsetLeftPercent: newOffsetLeftPercentage,
          offsetTopPercent: newOffsetTopPercentage,
        });
    };

    const dragMouseDown = (e) => {
      if (disable) return;
      e = e || window.event;
      e.preventDefault();

      bodyBlocker.add();
      // get the mouse cursor position at startup:

      oldPosX = e.clientX;
      oldPosY = e.clientY;

      document.documentElement.addEventListener('mouseup', endDrag);
      document.documentElement.addEventListener('mousemove', moveElement);
      if (onStart)
        onStart(e, {
          offsetLeft: dragElement.current.offsetLeft,
          offsetTop: dragElement.current.offsetTop,
        });
    };

    let localDragElementRef = dragElement.current;
    dragElement.current.addEventListener('mousedown', dragMouseDown);

    return () => {
      localDragElementRef.removeEventListener('mousedown', dragMouseDown);
    };
  });

  return (
    <div
      ref={dragElement}
      className={`${s.dragElement} ${className}${disable ? ' disabled' : ''}`}
      style={{
        left: elementPosX,
        top: elementPosY,
      }}
      {...props}
    />
  );
};

export default DraggableConstraint;
