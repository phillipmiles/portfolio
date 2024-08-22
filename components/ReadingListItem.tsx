import Image from 'next/image';
import Link from 'next/link';
import s from './ReadingListItem.module.css';

const ReadingListItem = ({
  title,
  description,
  url,
  icon,
  source,
  type,
  image,
  ...props
}) => {
  return (
    <Link
      target="blank"
      href={url}
      className={s.item}
      style={{
        display: 'block',
        // backgroundColor: image ? 'white' : 'transparent',
      }}
    >
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
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg> */}
      {image && (
        <div
          style={{
            height: '200px',
            position: 'relative',
            marginBottom: '16px',
          }}
        >
          <Image src={image} alt="" fill objectFit="cover" />
        </div>
      )}
      <h3
        style={{
          fontWeight: 400,
          fontSize: '26px',
          marginTop: 0,
          marginBottom: '8px',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '16px',
          // opacity: 0.8,
        }}
      >
        {description}
      </p>
      <span
        style={{
          fontSize: '14px',
          color: '#888899',
          display: 'flex',
          flexWrap: 'wrap',
          textWrap: 'nowrap',
        }}
      >
        <Image
          src={`/images/readinglist/${icon}`}
          alt=""
          width={16}
          height={16}
          style={{
            marginRight: '8px',
            marginTop: '2px',
          }}
        />
        <span className={s.source}>{source}</span>
        <span
          style={{
            marginLeft: '8px',
            marginRight: '8px',
            opacity: 0.5,
          }}
        >
          {' '}
          |{' '}
        </span>
        <span>1 month ago</span>
        <span
          style={{
            marginLeft: '8px',
            marginRight: '8px',
            opacity: 0.6,
          }}
        >
          {' '}
          |{' '}
        </span>
        <span>{type}</span>
      </span>
    </Link>
  );
};

export default ReadingListItem;
