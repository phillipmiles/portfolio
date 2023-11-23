import { useRef, useState, useEffect } from 'react';
import s from './DraggableConstraint.module.css';

// Div shield is used to cover the page
const createBodyBlocker = (
  id: string | undefined,
  onClick: Function | undefined
) => {
  const bodyBlocker = document.createElement('div');

  if (id) {
    bodyBlocker.id = id;
  }
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

interface Props {
  className?: string;
  onMove?: Function;
  onEnd?: Function;
  onStart?: Function;
  disable: boolean;
  constrainToParent?: boolean;
  externalPosX?: number;
  externalPosY?: number;
  axisXMultiplier?: number;
  axisYMultiplier?: number;
}

const DraggableConstraint = ({
  className,
  style,
  posX,
  posY,
  constrainToParent = true,
  axisXMultiplier = 1,
  axisYMultiplier = 1,
  onStart,
  onMove,
  onEnd,
  disable = false,
  ...props
}: Props) => {
  const dragElement = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [oldPosX, setOldPosX] = useState(posX);
  const [oldPosY, setOldPosY] = useState(posY);

  // Update previous X, Y positions with new positions passed in
  // from the parent component.
  // useEffect(() => {
  //   setOldPosX(posX);
  // }, [posX]);

  // useEffect(() => {
  //   setOldPosY(posY);
  // }, [posY]);

  useEffect(() => {
    // console.log(posX, oldPosX);
    // const bodyBlocker = createBodyBlocker();
    // let oldPosX = 0;
    // let oldPosY = 0;

    // TODO NEED TO INIT THIS OR SOMEHTING BECUSE THEY ONLY GET
    // UPDATED AFTER A MOVE EVENT FIRST ELSE 0 IS RETURNED WHEN DRAG ENDS WITHOUT
    // HAVING A MOVE EVENT FIRED.
    let localElementPosX = posX;
    let localElementPosY = posY;
    let elementPercentX = 0;
    let elementPercentY = 0;

    const endDrag = (e: any) => {
      document.documentElement.removeEventListener('mouseup', endDrag);
      document.documentElement.removeEventListener('mousemove', moveElement);
      // bodyBlocker.remove();

      setIsDragging(false);
      if (onEnd)
        onEnd(e, {
          offsetLeft: localElementPosX,
          offsetTop: localElementPosY,
          offsetLeftPercent: elementPercentX,
          offsetTopPercent: elementPercentY,
        });
    };

    const moveElement = (e: any) => {
      if (!dragElement.current) return;

      e.preventDefault();

      const clientXPos = e.clientX;
      const clientYPos = e.clientY;

      console.log(posX, oldPosX, clientXPos);

      // Get new position
      const newPosX = (oldPosX - clientXPos) * axisXMultiplier;
      const newPosY = (oldPosY - clientYPos) * axisYMultiplier;

      // oldPosX = clientXPos;
      // oldPosY = clientYPos;

      const parentConstraintBounding =
        dragElement.current.parentElement.getBoundingClientRect();
      const draggableBounding = dragElement.current.getBoundingClientRect();

      let proposedOffsetLeft = dragElement.current.offsetLeft - newPosX;
      let proposedOffsetTop = dragElement.current.offsetTop - newPosY;

      // console.log(
      //   newPosX,
      //   clientXPos,
      //   proposedOffsetLeft,
      //   dragElement.current.offsetLeft
      // );

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

      // setElementPosX(newOffsetLeft);
      // setElementPosY(newOffsetTop);

      localElementPosX = newOffsetLeft;
      localElementPosY = newOffsetTop;
      elementPercentX = newOffsetLeftPercentage;
      elementPercentY = newOffsetTopPercentage;
      console.log(newOffsetLeft);
      if (onMove)
        onMove(e, {
          offsetLeft: newOffsetLeft,
          offsetTop: newOffsetTop,
          offsetLeftPercent: newOffsetLeftPercentage,
          offsetTopPercent: newOffsetTopPercentage,
        });
    };

    const dragMouseDown = (e: any) => {
      if (disable) return;
      e = e || window.event;
      e.preventDefault();

      // bodyBlocker.add();
      setIsDragging(true);

      // get the mouse cursor position at startup:
      // oldPosX = e.clientX;
      // oldPosY = e.clientY;

      setOldPosX(posX);

      setOldPosY(posY);

      document.documentElement.addEventListener('mouseup', endDrag);
      document.documentElement.addEventListener('mousemove', moveElement);
      if (onStart)
        onStart(e, {
          offsetLeft: dragElement.current.offsetLeft,
          offsetTop: dragElement.current.offsetTop,
        });
    };

    let localDragElementRef = dragElement.current;
    localDragElementRef.addEventListener('mousedown', dragMouseDown);
    if (isDragging) {
      document.documentElement.addEventListener('mousemove', moveElement);
    }

    return () => {
      console.log('RESET');
      localDragElementRef.removeEventListener('mousedown', dragMouseDown);
      document.documentElement.removeEventListener('mousemove', moveElement);
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
