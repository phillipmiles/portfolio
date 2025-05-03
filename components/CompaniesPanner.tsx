import * as React from 'react';
import Flex from './generic/Flex';
import InfinityPanner from './generic/InfinityPanner';
import Image, { ImageProps } from 'next/image';
import s from './CompaniesPanner.module.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Company = ({ className, alt, ...props }: ImageProps) => (
  <Image
    className={`${s.image} ${className}`}
    alt={alt}
    width={140}
    height={100}
    {...props}
  />
);

const CompaniesPanner = ({ className, ...props }: Props) => {
  return (
    <Flex className={`${s.container} ${className}`} {...props}>
      <InfinityPanner speed="30000ms" translateX={-1} translateY={0}>
        <Company
          src={'/images/companies/logo_anz_h_white.svg'}
          alt="ANZ Logo"
        />
        <Company
          src={'/images/companies/logo_coles_white.svg'}
          alt="Coles Logo"
        />
        <Company
          src={'/images/companies/logo_deakinuni_h_white.svg'}
          alt="Deakin University Logo"
        />
        <Company
          src={'/images/companies/logo_auspost_white.svg'}
          alt="Aus Post Logo"
        />
        <Company src={'/images/companies/logo_hla_white.svg'} alt="HLA Logo" />
        <Company src={'/images/companies/logo_cpa_white.svg'} alt="CPA Logo" />
        <Company
          src={'/images/companies/logo_transurban_white.svg'}
          alt="Transurban Logo"
        />
        <Company
          src={'/images/companies/logo_dhhs_white.png'}
          alt="DHHS Logo"
          className={s.imageDHHS}
        />
      </InfinityPanner>
    </Flex>
  );
};
export default CompaniesPanner;
