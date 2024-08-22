import s from './LogoMark.module.css';

const LogoMark = ({ ...props }) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={s.container}
    {...props}
  >
    <path
      className={s.stem}
      d="M90 37V37C178.366 37 250 108.634 250 197V512V512C161.634 512 90 440.366 90 352V37Z"
    />
    <path
      className={s.circle}
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M274 315.689C356.602 310.53 422.001 241.902 422.001 158C422.001 70.739 351.262 0 264.001 0C229.422 0 197.438 11.1078 171.422 29.95C232.2 59.9903 274 122.614 274 195V315.689Z"
    />
  </svg>
);
export default LogoMark;
