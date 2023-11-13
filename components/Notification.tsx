import * as React from 'react';
import s from './Notification.module.css';

interface Props {
  children: React.ReactNode;
}

const Notification = ({ children, style }): Props => {
  return (
    <p className={s.container} style={style}>
      {children}
    </p>
  );
};
export default Notification;
