import Image from 'next/image';
import Link from 'next/link';
import s from './BookListItem.module.css';

interface Props {
  children: React.ReactNode;
}

const BookListItem = ({
  title,
  author,
  source,
  description,
  url,
  image,
}: Props) => (
  <Link target="blank" href={url} className={s.item}>
    {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={s.externalLinkIcon}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg> */}
    <div className={s.imageWrap}>
      <div className={s.overlay}>
        <div className={s.overlayInner}>
          {/* <span> */}
          {/* To{` `} */}
          <span
            style={{
              color: 'var(--primary-color)',
              //display: 'inline-block'
            }}
          >
            {source}
          </span>
          {/* </span> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={s.externalLinkIcon}
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
      <Image className={s.image} src={image} fill objectFit="contain" alt="" />
    </div>
    <h4
      style={{
        fontWeight: 400,
        fontSize: '26px',
        marginTop: 0,
        marginBottom: '8px',
      }}
    >
      {title}
    </h4>
    <p style={{ fontSize: '16px' }}>{author}</p>
    <p style={{ margin: 0, fontSize: '16px' }}>{description}</p>
  </Link>
);

export default BookListItem;
