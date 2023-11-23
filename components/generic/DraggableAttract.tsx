import { useRef, useState, useEffect } from 'react';
import s from './DraggableConstraint.module.css';

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

const DraggableAttract = ({
  className,
  style,
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
}: Props) => {
  return <div {...props} />;
};

export default DraggableAttract;
