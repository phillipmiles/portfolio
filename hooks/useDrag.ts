import { useState, useEffect } from 'react';

const useDrag = (ref, onStart, onMove, onEnd) => {
  const [isDragging, setIsDragging] = useState(false);
  // The previous position in space of the cursor/touchpoint
  const [prevClientXPos, setPrevClientXPos] = useState(null);
  const [prevClientYPos, setPrevClientYPos] = useState(null);

  useEffect(() => {
    const moveElement = (e: any) => {
      if (!ref.current) return;

      e.preventDefault();

      // Get client cursor/touchpoint position deltas.
      const clientDeltaX = prevClientXPos
        ? e.clientX - prevClientXPos
        : e.clientX;
      const clientDeltaY = prevClientYPos
        ? e.clientY - prevClientYPos
        : e.clientY;

      // Store current cursor/touchpoint position for use in next render/move event.
      setPrevClientXPos(e.clientX);
      setPrevClientYPos(e.clientY);

      if (onMove)
        onMove(e, {
          deltaX: clientDeltaX,
          deltaY: clientDeltaY,
        });
    };
    const endDrag = (e: any) => {
      document.documentElement.removeEventListener('mouseup', endDrag);
      document.documentElement.removeEventListener('mousemove', moveElement);

      if (onEnd) onEnd(e);

      setIsDragging(false);
    };

    const dragMouseDown = (e: any) => {
      e = e || window.event;
      e.preventDefault();

      // Init previous cursor/touchpoint position as current position.
      setPrevClientXPos(e.clientX);
      setPrevClientYPos(e.clientY);

      setIsDragging(true);

      if (onStart) onStart(e);
    };

    ref.current.addEventListener('mousedown', dragMouseDown);

    if (isDragging) {
      document.documentElement.addEventListener('mouseup', endDrag);
      document.documentElement.addEventListener('mousemove', moveElement);
    }
    return () => {
      if (ref.current)
        ref.current.removeEventListener('mousedown', dragMouseDown);
      if (isDragging) {
        document.documentElement.removeEventListener('mousemove', moveElement);
        document.documentElement.removeEventListener('mouseup', endDrag);
      }
    };
  }, [prevClientXPos, prevClientYPos, isDragging]);
};

export default useDrag;
